[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#",
      "description": {
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-BrowserId.html",
        "fct-type": "module",
        "title": "BrowserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "BrowserId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Browser Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#t:BrowserIdSettings",
      "description": {
        "fct-descr": "\u003cp\u003eA settings type for various configuration options relevant to BrowserID.\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-BrowserId.html#BrowserIdSettings",
        "fct-type": "data",
        "title": "BrowserIdSettings"
      },
      "index": {
        "description": "settings type for various configuration options relevant to BrowserID See http www.yesodweb.com book settings-types Since",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "BrowserIdSettings",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Browser Id Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:authBrowserId",
      "description": {
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "BrowserIdSettings -\u003e AuthPlugin m",
        "fct-source": "src/Yesod-Auth-BrowserId.html#authBrowserId",
        "fct-type": "function",
        "title": "authBrowserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "authBrowserId",
        "normalized": "BrowserIdSettings-\u003eAuthPlugin a",
        "package": "yesod-auth",
        "partial": "Browser Id",
        "signature": "BrowserIdSettings-\u003eAuthPlugin m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:bisAudience",
      "description": {
        "fct-descr": "\u003cp\u003eBrowserID audience value. If \u003ccode\u003eNothing\u003c/code\u003e, will be extracted based on the\n approot.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eNothing\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "BrowserIdSettings -\u003e Maybe Text",
        "fct-source": "src/Yesod-Auth-BrowserId.html#bisAudience",
        "fct-type": "function",
        "title": "bisAudience"
      },
      "index": {
        "description": "BrowserID audience value If Nothing will be extracted based on the approot Default Nothing Since",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "bisAudience",
        "normalized": "BrowserIdSettings-\u003eMaybe Text",
        "package": "yesod-auth",
        "partial": "Audience",
        "signature": "BrowserIdSettings-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:bisLazyLoad",
      "description": {
        "fct-descr": "\u003cp\u003eUse asynchronous Javascript loading for the BrowserID JS file.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "BrowserIdSettings -\u003e Bool",
        "fct-source": "src/Yesod-Auth-BrowserId.html#bisLazyLoad",
        "fct-type": "function",
        "title": "bisLazyLoad"
      },
      "index": {
        "description": "Use asynchronous Javascript loading for the BrowserID JS file Default True Since",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "bisLazyLoad",
        "normalized": "BrowserIdSettings-\u003eBool",
        "package": "yesod-auth",
        "partial": "Lazy Load",
        "signature": "BrowserIdSettings-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:createOnClick",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a function to handle on-click events, and returns that function\n name.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "BrowserIdSettings -\u003e (Route Auth -\u003e Route master) -\u003e WidgetT master IO Text",
        "fct-source": "src/Yesod-Auth-BrowserId.html#createOnClick",
        "fct-type": "function",
        "title": "createOnClick"
      },
      "index": {
        "description": "Generates function to handle on-click events and returns that function name",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "createOnClick",
        "normalized": "BrowserIdSettings-\u003e(Route Auth-\u003eRoute a)-\u003eWidgetT a IO Text",
        "package": "yesod-auth",
        "partial": "On Click",
        "signature": "BrowserIdSettings-\u003e(Route Auth-\u003eRoute master)-\u003eWidgetT master IO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:def",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.BrowserId",
        "fct-package": "yesod-auth",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "def"
      },
      "index": {
        "description": "The default value for this type",
        "hierarchy": "Yesod Auth BrowserId",
        "module": "Yesod.Auth.BrowserId",
        "name": "def",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Dummy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a dummy authentication module that simply lets a user specify\n his/her identifier. This is not intended for real world use, just for\n testing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.Auth.Dummy",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-Dummy.html",
        "fct-type": "module",
        "title": "Dummy"
      },
      "index": {
        "description": "Provides dummy authentication module that simply lets user specify his her identifier This is not intended for real world use just for testing",
        "hierarchy": "Yesod Auth Dummy",
        "module": "Yesod.Auth.Dummy",
        "name": "Dummy",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Dummy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Dummy.html#v:authDummy",
      "description": {
        "fct-module": "Yesod.Auth.Dummy",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthPlugin m",
        "fct-source": "src/Yesod-Auth-Dummy.html#authDummy",
        "fct-type": "function",
        "title": "authDummy"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Dummy",
        "module": "Yesod.Auth.Dummy",
        "name": "authDummy",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Dummy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-Email.html",
        "fct-type": "module",
        "title": "Email"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "Email",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:Email",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Email.html#Email",
        "fct-type": "type",
        "title": "Email"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "Email",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:EmailCreds",
      "description": {
        "fct-descr": "\u003cp\u003eData stored in a database for each e-mail address.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "data",
        "title": "EmailCreds"
      },
      "index": {
        "description": "Data stored in database for each e-mail address",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "EmailCreds",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Email Creds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eAn Identifier generalizes an email address to allow users to log in with\n some other form of credentials (e.g., username).\n\u003c/p\u003e\u003cp\u003eNote that any of these other identifiers must not be valid email addresses.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Email.html#Identifier",
        "fct-type": "type",
        "title": "Identifier"
      },
      "index": {
        "description": "An Identifier generalizes an email address to allow users to log in with some other form of credentials e.g username Note that any of these other identifiers must not be valid email addresses Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "Identifier",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:SaltedPass",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Email.html#SaltedPass",
        "fct-type": "type",
        "title": "SaltedPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "SaltedPass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Salted Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:VerKey",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Email.html#VerKey",
        "fct-type": "type",
        "title": "VerKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "VerKey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Ver Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:VerStatus",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Email.html#VerStatus",
        "fct-type": "type",
        "title": "VerStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "VerStatus",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Ver Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:VerUrl",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-Email.html#VerUrl",
        "fct-type": "type",
        "title": "VerUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "VerUrl",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Ver Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:YesodAuthEmail",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-Email.html#YesodAuthEmail",
        "fct-type": "class",
        "title": "YesodAuthEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "YesodAuthEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Yesod Auth Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:EmailCreds",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "EmailCreds",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "function",
        "title": "EmailCreds"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "EmailCreds",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Email Creds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:addUnverified",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new email address to the database, but indicate that the address\n has not yet been verified.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Email -\u003e VerKey -\u003e HandlerT site IO (AuthEmailId site)",
        "fct-source": "src/Yesod-Auth-Email.html#addUnverified",
        "fct-type": "method",
        "title": "addUnverified"
      },
      "index": {
        "description": "Add new email address to the database but indicate that the address has not yet been verified Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "addUnverified",
        "normalized": "Email-\u003eVerKey-\u003eHandlerT a IO(AuthEmailId a)",
        "package": "yesod-auth",
        "partial": "Unverified",
        "signature": "Email-\u003eVerKey-\u003eHandlerT site IO(AuthEmailId site)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:afterPasswordRoute",
      "description": {
        "fct-descr": "\u003cp\u003eRoute to send user to after password has been set correctly.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "site -\u003e Route site",
        "fct-source": "src/Yesod-Auth-Email.html#afterPasswordRoute",
        "fct-type": "method",
        "title": "afterPasswordRoute"
      },
      "index": {
        "description": "Route to send user to after password has been set correctly Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "afterPasswordRoute",
        "normalized": "a-\u003eRoute a",
        "package": "yesod-auth",
        "partial": "Password Route",
        "signature": "site-\u003eRoute site"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:authEmail",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthPlugin m",
        "fct-source": "src/Yesod-Auth-Email.html#authEmail",
        "fct-type": "function",
        "title": "authEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "authEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:checkPasswordSecurity",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that the given plain-text password meets minimum security standards.\n\u003c/p\u003e\u003cp\u003eDefault: password is at least three characters.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthId site -\u003e Text -\u003e HandlerT site IO (Either Text ())",
        "fct-source": "src/Yesod-Auth-Email.html#checkPasswordSecurity",
        "fct-type": "method",
        "title": "checkPasswordSecurity"
      },
      "index": {
        "description": "Check that the given plain-text password meets minimum security standards Default password is at least three characters",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "checkPasswordSecurity",
        "normalized": "AuthId a-\u003eText-\u003eHandlerT a IO(Either Text())",
        "package": "yesod-auth",
        "partial": "Password Security",
        "signature": "AuthId site-\u003eText-\u003eHandlerT site IO(Either Text())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:confirmationEmailSentResponse",
      "description": {
        "fct-descr": "\u003cp\u003eResponse after sending a confirmation email.\n\u003c/p\u003e\u003cp\u003eSince 1.2.2\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Text -\u003e HandlerT site IO Html",
        "fct-source": "src/Yesod-Auth-Email.html#confirmationEmailSentResponse",
        "fct-type": "method",
        "title": "confirmationEmailSentResponse"
      },
      "index": {
        "description": "Response after sending confirmation email Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "confirmationEmailSentResponse",
        "normalized": "Text-\u003eHandlerT a IO Html",
        "package": "yesod-auth",
        "partial": "Email Sent Response",
        "signature": "Text-\u003eHandlerT site IO Html"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsAuthId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Maybe (AuthId site)",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "function",
        "title": "emailCredsAuthId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "emailCredsAuthId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds Auth Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Email",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "function",
        "title": "emailCredsEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "emailCredsEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthEmailId site",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "function",
        "title": "emailCredsId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "emailCredsId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "VerStatus",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "function",
        "title": "emailCredsStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "emailCredsStatus",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsVerkey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Maybe VerKey",
        "fct-source": "src/Yesod-Auth-Email.html#EmailCreds",
        "fct-type": "function",
        "title": "emailCredsVerkey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "emailCredsVerkey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds Verkey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:forgotPasswordR",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Email.html#forgotPasswordR",
        "fct-type": "function",
        "title": "forgotPasswordR"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "forgotPasswordR",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getEmail",
      "description": {
        "fct-descr": "\u003cp\u003eGet the email address for the given email ID.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthEmailId site -\u003e HandlerT site IO (Maybe Email)",
        "fct-source": "src/Yesod-Auth-Email.html#getEmail",
        "fct-type": "method",
        "title": "getEmail"
      },
      "index": {
        "description": "Get the email address for the given email ID Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "getEmail",
        "normalized": "AuthEmailId a-\u003eHandlerT a IO(Maybe Email)",
        "package": "yesod-auth",
        "partial": "Email",
        "signature": "AuthEmailId site-\u003eHandlerT site IO(Maybe Email)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getEmailCreds",
      "description": {
        "fct-descr": "\u003cp\u003eGet the credentials for the given \u003ccode\u003eIdentifier\u003c/code\u003e, which may be either an\n email address or some other identification (e.g., username).\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Identifier -\u003e HandlerT site IO (Maybe (EmailCreds site))",
        "fct-source": "src/Yesod-Auth-Email.html#getEmailCreds",
        "fct-type": "method",
        "title": "getEmailCreds"
      },
      "index": {
        "description": "Get the credentials for the given Identifier which may be either an email address or some other identification e.g username Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "getEmailCreds",
        "normalized": "Identifier-\u003eHandlerT a IO(Maybe(EmailCreds a))",
        "package": "yesod-auth",
        "partial": "Email Creds",
        "signature": "Identifier-\u003eHandlerT site IO(Maybe(EmailCreds site))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getPassword",
      "description": {
        "fct-descr": "\u003cp\u003eGet the salted password for the given account.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthId site -\u003e HandlerT site IO (Maybe SaltedPass)",
        "fct-source": "src/Yesod-Auth-Email.html#getPassword",
        "fct-type": "method",
        "title": "getPassword"
      },
      "index": {
        "description": "Get the salted password for the given account Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "getPassword",
        "normalized": "AuthId a-\u003eHandlerT a IO(Maybe SaltedPass)",
        "package": "yesod-auth",
        "partial": "Password",
        "signature": "AuthId site-\u003eHandlerT site IO(Maybe SaltedPass)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getVerifyKey",
      "description": {
        "fct-descr": "\u003cp\u003eGet the verification key for the given email ID.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthEmailId site -\u003e HandlerT site IO (Maybe VerKey)",
        "fct-source": "src/Yesod-Auth-Email.html#getVerifyKey",
        "fct-type": "method",
        "title": "getVerifyKey"
      },
      "index": {
        "description": "Get the verification key for the given email ID Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "getVerifyKey",
        "normalized": "AuthEmailId a-\u003eHandlerT a IO(Maybe VerKey)",
        "package": "yesod-auth",
        "partial": "Verify Key",
        "signature": "AuthEmailId site-\u003eHandlerT site IO(Maybe VerKey)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:isValidPass",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Text-\u003e SaltedPass-\u003e Bool",
        "fct-type": "function",
        "title": "isValidPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "isValidPass",
        "normalized": "Text-\u003eSaltedPass-\u003eBool",
        "package": "yesod-auth",
        "partial": "Valid Pass",
        "signature": "Text-\u003eSaltedPass-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:loginLinkKey",
      "description": {
        "fct-descr": "\u003cp\u003eSession variable set when user logged in via a login link. See\n \u003ccode\u003e\u003ca\u003eneedOldPassword\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2.1\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-Email.html#loginLinkKey",
        "fct-type": "function",
        "title": "loginLinkKey"
      },
      "index": {
        "description": "Session variable set when user logged in via login link See needOldPassword Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "loginLinkKey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Link Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:loginR",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Email.html#loginR",
        "fct-type": "function",
        "title": "loginR"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "loginR",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:needOldPassword",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the user need to provide the current password in order to set a\n new password?\n\u003c/p\u003e\u003cp\u003eDefault: if the user logged in via an email link do not require a password.\n\u003c/p\u003e\u003cp\u003eSince 1.2.1\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthId site -\u003e HandlerT site IO Bool",
        "fct-source": "src/Yesod-Auth-Email.html#needOldPassword",
        "fct-type": "method",
        "title": "needOldPassword"
      },
      "index": {
        "description": "Does the user need to provide the current password in order to set new password Default if the user logged in via an email link do not require password Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "needOldPassword",
        "normalized": "AuthId a-\u003eHandlerT a IO Bool",
        "package": "yesod-auth",
        "partial": "Old Password",
        "signature": "AuthId site-\u003eHandlerT site IO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:normalizeEmailAddress",
      "description": {
        "fct-descr": "\u003cp\u003eAdditional normalization of email addresses, besides standard canonicalization.\n\u003c/p\u003e\u003cp\u003eDefault: do nothing. Note that in future versions of Yesod, the default\n will change to lower casing the email address. At that point, you will\n need to either ensure your database values are migrated to lower case,\n or change this default back to doing nothing.\n\u003c/p\u003e\u003cp\u003eSince 1.2.3\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "site -\u003e Text -\u003e Text",
        "fct-source": "src/Yesod-Auth-Email.html#normalizeEmailAddress",
        "fct-type": "method",
        "title": "normalizeEmailAddress"
      },
      "index": {
        "description": "Additional normalization of email addresses besides standard canonicalization Default do nothing Note that in future versions of Yesod the default will change to lower casing the email address At that point you will need to either ensure your database values are migrated to lower case or change this default back to doing nothing Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "normalizeEmailAddress",
        "normalized": "a-\u003eText-\u003eText",
        "package": "yesod-auth",
        "partial": "Email Address",
        "signature": "site-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:randomKey",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a random alphanumeric string.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "site -\u003e IO Text",
        "fct-source": "src/Yesod-Auth-Email.html#randomKey",
        "fct-type": "method",
        "title": "randomKey"
      },
      "index": {
        "description": "Generate random alphanumeric string Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "randomKey",
        "normalized": "a-\u003eIO Text",
        "package": "yesod-auth",
        "partial": "Key",
        "signature": "site-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:registerR",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Email.html#registerR",
        "fct-type": "function",
        "title": "registerR"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "registerR",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:saltPass",
      "description": {
        "fct-descr": "\u003cp\u003eSalt a password with a randomly generated salt.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Text -\u003e IO Text",
        "fct-source": "src/Yesod-Auth-Email.html#saltPass",
        "fct-type": "function",
        "title": "saltPass"
      },
      "index": {
        "description": "Salt password with randomly generated salt",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "saltPass",
        "normalized": "Text-\u003eIO Text",
        "package": "yesod-auth",
        "partial": "Pass",
        "signature": "Text-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:sendVerifyEmail",
      "description": {
        "fct-descr": "\u003cp\u003eSend an email to the given address to verify ownership.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "Email -\u003e VerKey -\u003e VerUrl -\u003e HandlerT site IO ()",
        "fct-source": "src/Yesod-Auth-Email.html#sendVerifyEmail",
        "fct-type": "method",
        "title": "sendVerifyEmail"
      },
      "index": {
        "description": "Send an email to the given address to verify ownership Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "sendVerifyEmail",
        "normalized": "Email-\u003eVerKey-\u003eVerUrl-\u003eHandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Verify Email",
        "signature": "Email-\u003eVerKey-\u003eVerUrl-\u003eHandlerT site IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setLoginLinkKey",
      "description": {
        "fct-descr": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003eloginLinkKey\u003c/a\u003e\u003c/code\u003e to the current time.\n\u003c/p\u003e\u003cp\u003eSince 1.2.1\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthId site -\u003e m ()",
        "fct-source": "src/Yesod-Auth-Email.html#setLoginLinkKey",
        "fct-type": "function",
        "title": "setLoginLinkKey"
      },
      "index": {
        "description": "Set loginLinkKey to the current time Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "setLoginLinkKey",
        "normalized": "AuthId a-\u003eb()",
        "package": "yesod-auth",
        "partial": "Login Link Key",
        "signature": "AuthId site-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setPassword",
      "description": {
        "fct-descr": "\u003cp\u003eSet the salted password for the given account.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthId site -\u003e SaltedPass -\u003e HandlerT site IO ()",
        "fct-source": "src/Yesod-Auth-Email.html#setPassword",
        "fct-type": "method",
        "title": "setPassword"
      },
      "index": {
        "description": "Set the salted password for the given account Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "setPassword",
        "normalized": "AuthId a-\u003eSaltedPass-\u003eHandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Password",
        "signature": "AuthId site-\u003eSaltedPass-\u003eHandlerT site IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setVerifyKey",
      "description": {
        "fct-descr": "\u003cp\u003eSet the verification key for the given email ID.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthEmailId site -\u003e VerKey -\u003e HandlerT site IO ()",
        "fct-source": "src/Yesod-Auth-Email.html#setVerifyKey",
        "fct-type": "method",
        "title": "setVerifyKey"
      },
      "index": {
        "description": "Set the verification key for the given email ID Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "setVerifyKey",
        "normalized": "AuthEmailId a-\u003eVerKey-\u003eHandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Verify Key",
        "signature": "AuthEmailId site-\u003eVerKey-\u003eHandlerT site IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setpassR",
      "description": {
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-Email.html#setpassR",
        "fct-type": "function",
        "title": "setpassR"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "setpassR",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:verifyAccount",
      "description": {
        "fct-descr": "\u003cp\u003eVerify the email address on the given account.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Email",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthEmailId site -\u003e HandlerT site IO (Maybe (AuthId site))",
        "fct-source": "src/Yesod-Auth-Email.html#verifyAccount",
        "fct-type": "method",
        "title": "verifyAccount"
      },
      "index": {
        "description": "Verify the email address on the given account Since",
        "hierarchy": "Yesod Auth Email",
        "module": "Yesod.Auth.Email",
        "name": "verifyAccount",
        "normalized": "AuthEmailId a-\u003eHandlerT a IO(Maybe(AuthId a))",
        "package": "yesod-auth",
        "partial": "Account",
        "signature": "AuthEmailId site-\u003eHandlerT site IO(Maybe(AuthId site))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-GoogleEmail.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse an email address as an identifier via Google's OpenID login system.\n\u003c/p\u003e\u003cp\u003eThis backend will not use the OpenID identifier at all. It only uses OpenID\n as a login system. By using this plugin, you are trusting Google to validate\n an email address, and requiring users to have a Google account. On the plus\n side, you get to use email addresses as the identifier, many users have\n existing Google accounts, the login system has been long tested (as opposed\n to BrowserID), and it requires no credential managing or setup (as opposed\n to Email).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.Auth.GoogleEmail",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-GoogleEmail.html",
        "fct-type": "module",
        "title": "GoogleEmail"
      },
      "index": {
        "description": "Use an email address as an identifier via Google OpenID login system This backend will not use the OpenID identifier at all It only uses OpenID as login system By using this plugin you are trusting Google to validate an email address and requiring users to have Google account On the plus side you get to use email addresses as the identifier many users have existing Google accounts the login system has been long tested as opposed to BrowserID and it requires no credential managing or setup as opposed to Email",
        "hierarchy": "Yesod Auth GoogleEmail",
        "module": "Yesod.Auth.GoogleEmail",
        "name": "GoogleEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Google Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-GoogleEmail.html#v:authGoogleEmail",
      "description": {
        "fct-module": "Yesod.Auth.GoogleEmail",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthPlugin m",
        "fct-source": "src/Yesod-Auth-GoogleEmail.html#authGoogleEmail",
        "fct-type": "function",
        "title": "authGoogleEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth GoogleEmail",
        "module": "Yesod.Auth.GoogleEmail",
        "name": "authGoogleEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Google Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-GoogleEmail.html#v:forwardUrl",
      "description": {
        "fct-module": "Yesod.Auth.GoogleEmail",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-GoogleEmail.html#forwardUrl",
        "fct-type": "function",
        "title": "forwardUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth GoogleEmail",
        "module": "Yesod.Auth.GoogleEmail",
        "name": "forwardUrl",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA yesod-auth AuthPlugin designed to look users up in Persist where\n their user id's and a salted SHA1 hash of their password is stored.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e -- import the function\n import Auth.HashDB\n\n -- make sure you have an auth route\n mkYesodData \"MyApp\" [$parseRoutes|\n / RootR GET\n /auth AuthR Auth getAuth\n |]\n\n\n -- make your app an instance of YesodAuth using this plugin\n instance YesodAuth MyApp where\n    type AuthId MyApp = UserId\n\n    loginDest _  = RootR\n    logoutDest _ = RootR\n    getAuthId    = getAuthIdHashDB AuthR (Just . UniqueUser)\n    authPlugins  = [authHashDB (Just . UniqueUser)]\n\n\n -- include the migration function in site startup\n withServer :: (Application -\u003e IO a) -\u003e IO a\n withServer f = withConnectionPool $ \\p -\u003e do\n     runSqlPool (runMigration migrateUsers) p\n     let h = DevSite p\n\u003c/pre\u003e\u003cp\u003eNote that function which converts username to unique identifier must be same.\n\u003c/p\u003e\u003cp\u003eYour app must be an instance of YesodPersist. and the username,\n salt and hashed-passwords should be added to the database.\n\u003c/p\u003e\u003cpre\u003e echo -n 'MySaltMyPassword' | sha1sum\n\u003c/pre\u003e\u003cp\u003ecan be used to get the hash from the commandline.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-HashDB.html",
        "fct-type": "module",
        "title": "HashDB"
      },
      "index": {
        "description": "yesod-auth AuthPlugin designed to look users up in Persist where their user id and salted SHA1 hash of their password is stored Example usage import the function import Auth.HashDB make sure you have an auth route mkYesodData MyApp parseRoutes RootR GET auth AuthR Auth getAuth make your app an instance of YesodAuth using this plugin instance YesodAuth MyApp where type AuthId MyApp UserId loginDest RootR logoutDest RootR getAuthId getAuthIdHashDB AuthR Just UniqueUser authPlugins authHashDB Just UniqueUser include the migration function in site startup withServer Application IO IO withServer withConnectionPool do runSqlPool runMigration migrateUsers let DevSite Note that function which converts username to unique identifier must be same Your app must be an instance of YesodPersist and the username salt and hashed-passwords should be added to the database echo MySaltMyPassword sha1sum can be used to get the hash from the commandline",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "HashDB",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Hash DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:EntityField",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEntityField\u003c/a\u003e\u003c/code\u003e is parameterised by the Haskell record it belongs to\n and the additional type of that field\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "EntityField",
        "fct-type": "function",
        "title": "EntityField"
      },
      "index": {
        "description": "An EntityField is parameterised by the Haskell record it belongs to and the additional type of that field",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "EntityField",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Entity Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:HashDBUser",
      "description": {
        "fct-descr": "\u003cp\u003eInterface for data type which holds user info. It's just a\n   collection of getters and setters\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth-HashDB.html#HashDBUser",
        "fct-type": "class",
        "title": "HashDBUser"
      },
      "index": {
        "description": "Interface for data type which holds user info It just collection of getters and setters",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "HashDBUser",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Hash DBUser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:Unique",
      "description": {
        "fct-descr": "\u003cp\u003eUnique keys besided the Key\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "Unique",
        "fct-type": "function",
        "title": "Unique"
      },
      "index": {
        "description": "Unique keys besided the Key",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "Unique",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:User",
      "description": {
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-HashDB.html#User",
        "fct-type": "type",
        "title": "User"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "User",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:UserGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate data base instances for a valid user\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-HashDB.html#UserGeneric",
        "fct-type": "data",
        "title": "UserGeneric"
      },
      "index": {
        "description": "Generate data base instances for valid user",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "UserGeneric",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "User Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:UserId",
      "description": {
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth-HashDB.html#UserId",
        "fct-type": "type",
        "title": "UserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "UserId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:User",
      "description": {
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "User",
        "fct-source": "src/Yesod-Auth-HashDB.html#UserGeneric",
        "fct-type": "function",
        "title": "User"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "User",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:authHashDB",
      "description": {
        "fct-descr": "\u003cp\u003ePrompt for username and password, validate that against a database\n   which holds the username and a hash of the password\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "(Text -\u003e Maybe (Unique user)) -\u003e AuthPlugin m",
        "fct-source": "src/Yesod-Auth-HashDB.html#authHashDB",
        "fct-type": "function",
        "title": "authHashDB"
      },
      "index": {
        "description": "Prompt for username and password validate that against database which holds the username and hash of the password",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "authHashDB",
        "normalized": "(Text-\u003eMaybe(Unique a))-\u003eAuthPlugin b",
        "package": "yesod-auth",
        "partial": "Hash DB",
        "signature": "(Text-\u003eMaybe(Unique user))-\u003eAuthPlugin m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:getAuthIdHashDB",
      "description": {
        "fct-descr": "\u003cp\u003eA drop in for the getAuthId method of your YesodAuth instance which\n   can be used if authHashDB is the only plugin in use.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "(AuthRoute -\u003e Route master)-\u003e (Text -\u003e Maybe (Unique user))-\u003e Creds master-\u003e HandlerT master IO (Maybe (AuthId master))",
        "fct-type": "function",
        "title": "getAuthIdHashDB"
      },
      "index": {
        "description": "drop in for the getAuthId method of your YesodAuth instance which can be used if authHashDB is the only plugin in use",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "getAuthIdHashDB",
        "normalized": "(AuthRoute-\u003eRoute a)-\u003e(Text-\u003eMaybe(Unique b))-\u003eCreds a-\u003eHandlerT a IO(Maybe(AuthId a))",
        "package": "yesod-auth",
        "partial": "Auth Id Hash DB",
        "signature": "(AuthRoute-\u003eRoute master)-\u003e(Text-\u003eMaybe(Unique user))-\u003eCreds master-\u003eHandlerT master IO(Maybe(AuthId master))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:migrateUsers",
      "description": {
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "Migration (SqlPersistT m)",
        "fct-source": "src/Yesod-Auth-HashDB.html#migrateUsers",
        "fct-type": "function",
        "title": "migrateUsers"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "migrateUsers",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Users",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:setPassword",
      "description": {
        "fct-descr": "\u003cp\u003eSet password for user. This function should be used for setting\n   passwords. It generates random salt and calculates proper hashes.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "Text -\u003e user -\u003e m user",
        "fct-source": "src/Yesod-Auth-HashDB.html#setPassword",
        "fct-type": "function",
        "title": "setPassword"
      },
      "index": {
        "description": "Set password for user This function should be used for setting passwords It generates random salt and calculates proper hashes",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "setPassword",
        "normalized": "Text-\u003ea-\u003eb a",
        "package": "yesod-auth",
        "partial": "Password",
        "signature": "Text-\u003euser-\u003em user"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:setSaltAndPasswordHash",
      "description": {
        "fct-descr": "\u003cp\u003ea callback for setPassword\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "setSaltAndPasswordHash",
        "fct-source": "src/Yesod-Auth-HashDB.html#setSaltAndPasswordHash",
        "fct-type": "method",
        "title": "setSaltAndPasswordHash"
      },
      "index": {
        "description": "callback for setPassword",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "setSaltAndPasswordHash",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Salt And Password Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:setUserHashAndSalt",
      "description": {
        "fct-descr": "\u003cp\u003eDeprecated for the better named setSaltAndPasswordHash \n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "setUserHashAndSalt",
        "fct-source": "src/Yesod-Auth-HashDB.html#setUserHashAndSalt",
        "fct-type": "method",
        "title": "setUserHashAndSalt"
      },
      "index": {
        "description": "Deprecated for the better named setSaltAndPasswordHash",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "setUserHashAndSalt",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "User Hash And Salt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "!Text",
        "fct-source": "src/Yesod-Auth-HashDB.html#UserGeneric",
        "fct-type": "function",
        "title": "userPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "userPassword",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userPasswordHash",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve password hash from user data\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "user -\u003e Maybe Text",
        "fct-source": "src/Yesod-Auth-HashDB.html#userPasswordHash",
        "fct-type": "method",
        "title": "userPasswordHash"
      },
      "index": {
        "description": "Retrieve password hash from user data",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "userPasswordHash",
        "normalized": "a-\u003eMaybe Text",
        "package": "yesod-auth",
        "partial": "Password Hash",
        "signature": "user-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userPasswordSalt",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve salt for password\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "user -\u003e Maybe Text",
        "fct-source": "src/Yesod-Auth-HashDB.html#userPasswordSalt",
        "fct-type": "method",
        "title": "userPasswordSalt"
      },
      "index": {
        "description": "Retrieve salt for password",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "userPasswordSalt",
        "normalized": "a-\u003eMaybe Text",
        "package": "yesod-auth",
        "partial": "Password Salt",
        "signature": "user-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userSalt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "!Text",
        "fct-source": "src/Yesod-Auth-HashDB.html#UserGeneric",
        "fct-type": "function",
        "title": "userSalt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "userSalt",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Salt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "!Text",
        "fct-source": "src/Yesod-Auth-HashDB.html#UserGeneric",
        "fct-type": "function",
        "title": "userUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "userUsername",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:validateUser",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a user ID and password in plaintext, validate them against\n   the database values.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.HashDB",
        "fct-package": "yesod-auth",
        "fct-signature": "Unique user-\u003e Text-\u003e HandlerT yesod IO Bool",
        "fct-type": "function",
        "title": "validateUser"
      },
      "index": {
        "description": "Given user ID and password in plaintext validate them against the database values",
        "hierarchy": "Yesod Auth HashDB",
        "module": "Yesod.Auth.HashDB",
        "name": "validateUser",
        "normalized": "Unique a-\u003eText-\u003eHandlerT b IO Bool",
        "package": "yesod-auth",
        "partial": "User",
        "signature": "Unique user-\u003eText-\u003eHandlerT yesod IO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-Message.html",
        "fct-type": "module",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "Message",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#t:AuthMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "data",
        "title": "AuthMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "AuthMessage",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:AddressVerified",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AddressVerified",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "AddressVerified"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "AddressVerified",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Address Verified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:BadSetPass",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "BadSetPass",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "BadSetPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "BadSetPass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Bad Set Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ConfirmPass",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "ConfirmPass",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "ConfirmPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "ConfirmPass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Confirm Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ConfirmationEmailSent",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "ConfirmationEmailSent Text",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "ConfirmationEmailSent"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "ConfirmationEmailSent",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Confirmation Email Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ConfirmationEmailSentTitle",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "ConfirmationEmailSentTitle",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "ConfirmationEmailSentTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "ConfirmationEmailSentTitle",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Confirmation Email Sent Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Email",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "Email",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "Email"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "Email",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:EnterEmail",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "EnterEmail",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "EnterEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "EnterEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Enter Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Facebook",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "Facebook",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "Facebook"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "Facebook",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Facebook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:IdentifierNotFound",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "IdentifierNotFound Text",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "IdentifierNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "IdentifierNotFound",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Identifier Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidEmailAddress",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidEmailAddress",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "InvalidEmailAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "InvalidEmailAddress",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Email Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidEmailPass",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidEmailPass",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "InvalidEmailPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "InvalidEmailPass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Email Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidKey",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidKey",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "InvalidKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "InvalidKey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidKeyTitle",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidKeyTitle",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "InvalidKeyTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "InvalidKeyTitle",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Key Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidLogin",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidLogin",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "InvalidLogin"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "InvalidLogin",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Login",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidUsernamePass",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidUsernamePass",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "InvalidUsernamePass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "InvalidUsernamePass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Username Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginGoogle",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "LoginGoogle",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "LoginGoogle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "LoginGoogle",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Login Google",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginOpenID",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "LoginOpenID",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "LoginOpenID"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "LoginOpenID",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Login Open ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginTitle",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "LoginTitle",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "LoginTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "LoginTitle",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Login Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginViaEmail",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "LoginViaEmail",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "LoginViaEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "LoginViaEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Login Via Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginYahoo",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "LoginYahoo",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "LoginYahoo"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "LoginYahoo",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Login Yahoo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NewPass",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "NewPass",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "NewPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "NewPass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "New Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NoIdentifierProvided",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "NoIdentifierProvided",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "NoIdentifierProvided"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "NoIdentifierProvided",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "No Identifier Provided",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NoOpenID",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "NoOpenID",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "NoOpenID"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "NoOpenID",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "No Open ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NowLoggedIn",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "NowLoggedIn",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "NowLoggedIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "NowLoggedIn",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Now Logged In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PassMismatch",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "PassMismatch",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "PassMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "PassMismatch",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Pass Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PassUpdated",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "PassUpdated",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "PassUpdated"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "PassUpdated",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Pass Updated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Password",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "Password",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "Password"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "Password",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PasswordResetPrompt",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "PasswordResetPrompt",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "PasswordResetPrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "PasswordResetPrompt",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Password Reset Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PasswordResetTitle",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "PasswordResetTitle",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "PasswordResetTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "PasswordResetTitle",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Password Reset Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PleaseProvidePassword",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "PleaseProvidePassword",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "PleaseProvidePassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "PleaseProvidePassword",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Please Provide Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PleaseProvideUsername",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "PleaseProvideUsername",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "PleaseProvideUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "PleaseProvideUsername",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Please Provide Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ProvideIdentifier",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "ProvideIdentifier",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "ProvideIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "ProvideIdentifier",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Provide Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Register",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "Register",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "Register"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "Register",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:RegisterLong",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "RegisterLong",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "RegisterLong"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "RegisterLong",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Register Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:SendPasswordResetEmail",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "SendPasswordResetEmail",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "SendPasswordResetEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "SendPasswordResetEmail",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Send Password Reset Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:SetPass",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "SetPass",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "SetPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "SetPass",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Set Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:SetPassTitle",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "SetPassTitle",
        "fct-source": "src/Yesod-Auth-Message.html#AuthMessage",
        "fct-type": "function",
        "title": "SetPassTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "SetPassTitle",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Set Pass Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:chineseMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#chineseMessage",
        "fct-type": "function",
        "title": "chineseMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "chineseMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:czechMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#czechMessage",
        "fct-type": "function",
        "title": "czechMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "czechMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:defaultMessage",
      "description": {
        "fct-descr": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eenglishMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#defaultMessage",
        "fct-type": "function",
        "title": "defaultMessage"
      },
      "index": {
        "description": "Defaults to englishMessage",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "defaultMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:englishMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#englishMessage",
        "fct-type": "function",
        "title": "englishMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "englishMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:finnishMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#finnishMessage",
        "fct-type": "function",
        "title": "finnishMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "finnishMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:frenchMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#frenchMessage",
        "fct-type": "function",
        "title": "frenchMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "frenchMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:germanMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#germanMessage",
        "fct-type": "function",
        "title": "germanMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "germanMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:japaneseMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#japaneseMessage",
        "fct-type": "function",
        "title": "japaneseMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "japaneseMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:norwegianBokm-229-lMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#norwegianBokm%E5lMessage",
        "fct-type": "function",
        "title": "norwegianBokmålMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "norwegianBokmålMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Bokmål Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:portugueseMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#portugueseMessage",
        "fct-type": "function",
        "title": "portugueseMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "portugueseMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:spanishMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#spanishMessage",
        "fct-type": "function",
        "title": "spanishMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "spanishMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:swedishMessage",
      "description": {
        "fct-module": "Yesod.Auth.Message",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthMessage -\u003e Text",
        "fct-source": "src/Yesod-Auth-Message.html#swedishMessage",
        "fct-type": "function",
        "title": "swedishMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Message",
        "module": "Yesod.Auth.Message",
        "name": "swedishMessage",
        "normalized": "AuthMessage-\u003eText",
        "package": "yesod-auth",
        "partial": "Message",
        "signature": "AuthMessage-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-OpenId.html",
        "fct-type": "module",
        "title": "OpenId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "OpenId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Open Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#t:IdentifierType",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-OpenId.html#IdentifierType",
        "fct-type": "data",
        "title": "IdentifierType"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "IdentifierType",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Identifier Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:Claimed",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "Claimed",
        "fct-source": "src/Yesod-Auth-OpenId.html#IdentifierType",
        "fct-type": "function",
        "title": "Claimed"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "Claimed",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Claimed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:OPLocal",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "OPLocal",
        "fct-source": "src/Yesod-Auth-OpenId.html#IdentifierType",
        "fct-type": "function",
        "title": "OPLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "OPLocal",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "OPLocal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:authOpenId",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "IdentifierType-\u003e [(Text, Text)]-\u003e AuthPlugin master",
        "fct-type": "function",
        "title": "authOpenId"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "authOpenId",
        "normalized": "IdentifierType-\u003e[(Text,Text)]-\u003eAuthPlugin a",
        "package": "yesod-auth",
        "partial": "Open Id",
        "signature": "IdentifierType-\u003e[(Text,Text)]-\u003eAuthPlugin master"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:claimedKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe main identifier provided by the OpenID authentication plugin is the\n \"OP-local identifier\". There is also sometimes a \"claimed\" identifier\n available.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003e\u003ca\u003ecredsExtra\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eCreds\u003c/a\u003e\u003c/code\u003e datatype, you can lookup this key\n to find the claimed identifier, if available.\n\u003c/p\u003e\u003cpre\u003e let finalID = fromMaybe (credsIdent creds)\n             $ lookup claimedKey (credsExtra creds)\n\u003c/pre\u003e\u003cp\u003eSince 1.0.2\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-OpenId.html#claimedKey",
        "fct-type": "function",
        "title": "claimedKey"
      },
      "index": {
        "description": "The main identifier provided by the OpenID authentication plugin is the OP-local identifier There is also sometimes claimed identifier available In the credsExtra field of the Creds datatype you can lookup this key to find the claimed identifier if available let finalID fromMaybe credsIdent creds lookup claimedKey credsExtra creds Since",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "claimedKey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:credsIdentClaimed",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function which will get the claimed identifier, if available, falling back to the OP local identifier.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eclaimedKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.2\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "Creds m -\u003e Text",
        "fct-source": "src/Yesod-Auth-OpenId.html#credsIdentClaimed",
        "fct-type": "function",
        "title": "credsIdentClaimed"
      },
      "index": {
        "description": "helper function which will get the claimed identifier if available falling back to the OP local identifier See claimedKey Since",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "credsIdentClaimed",
        "normalized": "Creds a-\u003eText",
        "package": "yesod-auth",
        "partial": "Ident Claimed",
        "signature": "Creds m-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:forwardUrl",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthRoute",
        "fct-source": "src/Yesod-Auth-OpenId.html#forwardUrl",
        "fct-type": "function",
        "title": "forwardUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "forwardUrl",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:opLocalKey",
      "description": {
        "fct-module": "Yesod.Auth.OpenId",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth-OpenId.html#opLocalKey",
        "fct-type": "function",
        "title": "opLocalKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth OpenId",
        "module": "Yesod.Auth.OpenId",
        "name": "opLocalKey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Local Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Rpxnow.html#",
      "description": {
        "fct-module": "Yesod.Auth.Rpxnow",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth-Rpxnow.html",
        "fct-type": "module",
        "title": "Rpxnow"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Rpxnow",
        "module": "Yesod.Auth.Rpxnow",
        "name": "Rpxnow",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Rpxnow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Rpxnow.html#v:authRpxnow",
      "description": {
        "fct-module": "Yesod.Auth.Rpxnow",
        "fct-package": "yesod-auth",
        "fct-signature": "String-\u003e String-\u003e AuthPlugin m",
        "fct-type": "function",
        "title": "authRpxnow"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth Rpxnow",
        "module": "Yesod.Auth.Rpxnow",
        "name": "authRpxnow",
        "normalized": "String-\u003eString-\u003eAuthPlugin a",
        "package": "yesod-auth",
        "partial": "Rpxnow",
        "signature": "String-\u003eString-\u003eAuthPlugin m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Auth.html",
        "fct-type": "module",
        "title": "Auth"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "Auth",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:Auth",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth-Routes.html#Auth",
        "fct-type": "data",
        "title": "Auth"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "Auth",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthEntity",
      "description": {
        "fct-descr": "\u003cp\u003eIf the \u003ccode\u003eAuthId\u003c/code\u003e for a given site is a persistent ID, this will give the\n value for that entity. E.g.:\n\u003c/p\u003e\u003cpre\u003e type AuthId MySite = UserId\n AuthEntity MySite ~ User\n\u003c/pre\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth.html#AuthEntity",
        "fct-type": "type",
        "title": "AuthEntity"
      },
      "index": {
        "description": "If the AuthId for given site is persistent ID this will give the value for that entity E.g type AuthId MySite UserId AuthEntity MySite User Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "AuthEntity",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthException",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth.html#AuthException",
        "fct-type": "data",
        "title": "AuthException"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "AuthException",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthHandler",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth.html#AuthHandler",
        "fct-type": "type",
        "title": "AuthHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "AuthHandler",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthPlugin",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth.html#AuthPlugin",
        "fct-type": "data",
        "title": "AuthPlugin"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "AuthPlugin",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthRoute",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth.html#AuthRoute",
        "fct-type": "type",
        "title": "AuthRoute"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "AuthRoute",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:Creds",
      "description": {
        "fct-descr": "\u003cp\u003eUser credentials\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Auth.html#Creds",
        "fct-type": "data",
        "title": "Creds"
      },
      "index": {
        "description": "User credentials",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "Creds",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:Route",
      "description": {
        "fct-descr": "\u003cp\u003eThe type-safe URLs associated with a site argument.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Route",
        "fct-type": "function",
        "title": "Route"
      },
      "index": {
        "description": "The type-safe URLs associated with site argument",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "Route",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:YesodAuth",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Auth.html#YesodAuth",
        "fct-type": "class",
        "title": "YesodAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "YesodAuth",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Yesod Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:YesodAuthPersist",
      "description": {
        "fct-descr": "\u003cp\u003eConstraint which states that the given site is an instance of \u003ccode\u003eYesodAuth\u003c/code\u003e\n and that its \u003ccode\u003eAuthId\u003c/code\u003e is in fact a persistent \u003ccode\u003eKey\u003c/code\u003e for the given value.\n This is the common case in Yesod, and means that you can easily look up the\n full informatin on a given user.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "type",
        "fct-source": "src/Yesod-Auth.html#YesodAuthPersist",
        "fct-type": "type",
        "title": "YesodAuthPersist"
      },
      "index": {
        "description": "Constraint which states that the given site is an instance of YesodAuth and that its AuthId is in fact persistent Key for the given value This is the common case in Yesod and means that you can easily look up the full informatin on given user Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "YesodAuthPersist",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Yesod Auth Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:AuthPlugin",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthPlugin",
        "fct-source": "src/Yesod-Auth.html#AuthPlugin",
        "fct-type": "function",
        "title": "AuthPlugin"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "AuthPlugin",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:Creds",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Creds",
        "fct-source": "src/Yesod-Auth.html#Creds",
        "fct-type": "function",
        "title": "Creds"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "Creds",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Creds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:InvalidFacebookResponse",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "InvalidFacebookResponse",
        "fct-source": "src/Yesod-Auth.html#AuthException",
        "fct-type": "function",
        "title": "InvalidFacebookResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "InvalidFacebookResponse",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Invalid Facebook Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:apDispatch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Method -\u003e [Piece] -\u003e AuthHandler master ()",
        "fct-source": "src/Yesod-Auth.html#AuthPlugin",
        "fct-type": "function",
        "title": "apDispatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "apDispatch",
        "normalized": "Method-\u003e[Piece]-\u003eAuthHandler a()",
        "package": "yesod-auth",
        "partial": "Dispatch",
        "signature": "Method-\u003e[Piece]-\u003eAuthHandler master()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:apLogin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
        "fct-source": "src/Yesod-Auth.html#AuthPlugin",
        "fct-type": "function",
        "title": "apLogin"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "apLogin",
        "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
        "package": "yesod-auth",
        "partial": "Login",
        "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:apName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth.html#AuthPlugin",
        "fct-type": "function",
        "title": "apName"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "apName",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:authHttpManager",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an HTTP connection manager that is stored in the foundation\n type. This allows backends to reuse persistent connections. If none of\n the backends you're using use HTTP connections, you can safely return\n \u003ccode\u003eerror \"authHttpManager\"\u003c/code\u003e here.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "master -\u003e Manager",
        "fct-source": "src/Yesod-Auth.html#authHttpManager",
        "fct-type": "method",
        "title": "authHttpManager"
      },
      "index": {
        "description": "Return an HTTP connection manager that is stored in the foundation type This allows backends to reuse persistent connections If none of the backends you re using use HTTP connections you can safely return error authHttpManager here",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "authHttpManager",
        "normalized": "a-\u003eManager",
        "package": "yesod-auth",
        "partial": "Http Manager",
        "signature": "master-\u003eManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:authLayout",
      "description": {
        "fct-descr": "\u003cp\u003especify the layout. Uses defaultLayout by default\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "WidgetT master IO () -\u003e HandlerT master IO Html",
        "fct-source": "src/Yesod-Auth.html#authLayout",
        "fct-type": "method",
        "title": "authLayout"
      },
      "index": {
        "description": "specify the layout Uses defaultLayout by default",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "authLayout",
        "normalized": "WidgetT a IO()-\u003eHandlerT a IO Html",
        "package": "yesod-auth",
        "partial": "Layout",
        "signature": "WidgetT master IO()-\u003eHandlerT master IO Html"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:authPlugins",
      "description": {
        "fct-descr": "\u003cp\u003eWhich authentication backends to use.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "master -\u003e [AuthPlugin master]",
        "fct-source": "src/Yesod-Auth.html#authPlugins",
        "fct-type": "method",
        "title": "authPlugins"
      },
      "index": {
        "description": "Which authentication backends to use",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "authPlugins",
        "normalized": "a-\u003e[AuthPlugin a]",
        "package": "yesod-auth",
        "partial": "Plugins",
        "signature": "master-\u003e[AuthPlugin master]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:clearCreds",
      "description": {
        "fct-descr": "\u003cp\u003eClears current user credentials for the session.\n\u003c/p\u003e\u003cp\u003eSince 1.1.7\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Bool-\u003e HandlerT master IO ()",
        "fct-type": "function",
        "title": "clearCreds"
      },
      "index": {
        "description": "Clears current user credentials for the session Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "clearCreds",
        "normalized": "Bool-\u003eHandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Creds",
        "signature": "Bool-\u003eHandlerT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsExtra",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "[(Text, Text)]",
        "fct-source": "src/Yesod-Auth.html#Creds",
        "fct-type": "function",
        "title": "credsExtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "credsExtra",
        "normalized": "[(Text,Text)]",
        "package": "yesod-auth",
        "partial": "Extra",
        "signature": "[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsIdent",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier. Exact meaning depends on plugin.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth.html#Creds",
        "fct-type": "function",
        "title": "credsIdent"
      },
      "index": {
        "description": "Identifier Exact meaning depends on plugin",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "credsIdent",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsKey",
      "description": {
        "fct-descr": "\u003cp\u003eInternal session key used to hold the authentication information.\n\u003c/p\u003e\u003cp\u003eSince 1.2.3\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth.html#credsKey",
        "fct-type": "function",
        "title": "credsKey"
      },
      "index": {
        "description": "Internal session key used to hold the authentication information Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "credsKey",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsPlugin",
      "description": {
        "fct-descr": "\u003cp\u003eHow the user was authenticated\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Auth.html#Creds",
        "fct-type": "function",
        "title": "credsPlugin"
      },
      "index": {
        "description": "How the user was authenticated",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "credsPlugin",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:defaultMaybeAuthId",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves user credentials from the session, if user is authenticated.\n\u003c/p\u003e\u003cp\u003eThis function does \u003cem\u003enot\u003c/em\u003e confirm that the credentials are valid, see\n \u003ccode\u003emaybeAuthIdRaw\u003c/code\u003e for more information.\n\u003c/p\u003e\u003cp\u003eSince 1.1.2\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO (Maybe (AuthId master))",
        "fct-source": "src/Yesod-Auth.html#defaultMaybeAuthId",
        "fct-type": "function",
        "title": "defaultMaybeAuthId"
      },
      "index": {
        "description": "Retrieves user credentials from the session if user is authenticated This function does not confirm that the credentials are valid see maybeAuthIdRaw for more information Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "defaultMaybeAuthId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Maybe Auth Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:getAuth",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "a -\u003e Auth",
        "fct-source": "src/Yesod-Auth.html#getAuth",
        "fct-type": "function",
        "title": "getAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "getAuth",
        "normalized": "a-\u003eAuth",
        "package": "yesod-auth",
        "partial": "Auth",
        "signature": "a-\u003eAuth"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:getAuthId",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the ID associated with the set of credentials.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Creds master -\u003e HandlerT master IO (Maybe (AuthId master))",
        "fct-source": "src/Yesod-Auth.html#getAuthId",
        "fct-type": "method",
        "title": "getAuthId"
      },
      "index": {
        "description": "Determine the ID associated with the set of credentials",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "getAuthId",
        "normalized": "Creds a-\u003eHandlerT a IO(Maybe(AuthId a))",
        "package": "yesod-auth",
        "partial": "Auth Id",
        "signature": "Creds master-\u003eHandlerT master IO(Maybe(AuthId master))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginDest",
      "description": {
        "fct-descr": "\u003cp\u003eDefault destination on successful login, if no other\n destination exists.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "master -\u003e Route master",
        "fct-source": "src/Yesod-Auth.html#loginDest",
        "fct-type": "method",
        "title": "loginDest"
      },
      "index": {
        "description": "Default destination on successful login if no other destination exists",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "loginDest",
        "normalized": "a-\u003eRoute a",
        "package": "yesod-auth",
        "partial": "Dest",
        "signature": "master-\u003eRoute master"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginErrorMessage",
      "description": {
        "fct-descr": "\u003cp\u003eFor HTML, set the message and redirect to the route.\n For JSON, send the message and a 401 status\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Route master -\u003e Text -\u003e HandlerT master m a",
        "fct-source": "src/Yesod-Auth.html#loginErrorMessage",
        "fct-type": "function",
        "title": "loginErrorMessage"
      },
      "index": {
        "description": "For HTML set the message and redirect to the route For JSON send the message and status",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "loginErrorMessage",
        "normalized": "Route a-\u003eText-\u003eHandlerT a b c",
        "package": "yesod-auth",
        "partial": "Error Message",
        "signature": "Route master-\u003eText-\u003eHandlerT master m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginErrorMessageI",
      "description": {
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Route child -\u003e AuthMessage -\u003e HandlerT child (HandlerT master m) a",
        "fct-source": "src/Yesod-Auth.html#loginErrorMessageI",
        "fct-type": "function",
        "title": "loginErrorMessageI"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "loginErrorMessageI",
        "normalized": "Route a-\u003eAuthMessage-\u003eHandlerT a(HandlerT b c)d",
        "package": "yesod-auth",
        "partial": "Error Message",
        "signature": "Route child-\u003eAuthMessage-\u003eHandlerT child(HandlerT master m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginHandler",
      "description": {
        "fct-descr": "\u003cp\u003eWhat to show on the login page.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "AuthHandler master RepHtml",
        "fct-source": "src/Yesod-Auth.html#loginHandler",
        "fct-type": "method",
        "title": "loginHandler"
      },
      "index": {
        "description": "What to show on the login page",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "loginHandler",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:logoutDest",
      "description": {
        "fct-descr": "\u003cp\u003eDefault destination on successful logout, if no other\n destination exists.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "master -\u003e Route master",
        "fct-source": "src/Yesod-Auth.html#logoutDest",
        "fct-type": "method",
        "title": "logoutDest"
      },
      "index": {
        "description": "Default destination on successful logout if no other destination exists",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "logoutDest",
        "normalized": "a-\u003eRoute a",
        "package": "yesod-auth",
        "partial": "Dest",
        "signature": "master-\u003eRoute master"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:maybeAuth",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeAuthId\u003c/a\u003e\u003c/code\u003e, but additionally look up the value associated\n with the user's database identifier to get the value in the database. This\n assumes that you are using a Persistent database.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO (Maybe (Entity val))",
        "fct-source": "src/Yesod-Auth.html#maybeAuth",
        "fct-type": "function",
        "title": "maybeAuth"
      },
      "index": {
        "description": "Similar to maybeAuthId but additionally look up the value associated with the user database identifier to get the value in the database This assumes that you are using Persistent database Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "maybeAuth",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:maybeAuthId",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves user credentials, if user is authenticated.\n\u003c/p\u003e\u003cp\u003eBy default, this calls \u003ccode\u003e\u003ca\u003edefaultMaybeAuthId\u003c/a\u003e\u003c/code\u003e to get the user ID from the\n session. This can be overridden to allow authentication via other means,\n such as checking for a special token in a request header. This is\n especially useful for creating an API to be accessed via some means\n other than a browser.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO (Maybe (AuthId master))",
        "fct-source": "src/Yesod-Auth.html#maybeAuthId",
        "fct-type": "method",
        "title": "maybeAuthId"
      },
      "index": {
        "description": "Retrieves user credentials if user is authenticated By default this calls defaultMaybeAuthId to get the user ID from the session This can be overridden to allow authentication via other means such as checking for special token in request header This is especially useful for creating an API to be accessed via some means other than browser Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "maybeAuthId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:onErrorHtml",
      "description": {
        "fct-descr": "\u003cp\u003eCalled on login error for HTTP requests. By default, calls\n \u003ccode\u003esetMessage\u003c/code\u003e and redirects to \u003ccode\u003edest\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Route master -\u003e Text -\u003e HandlerT master m Html",
        "fct-source": "src/Yesod-Auth.html#onErrorHtml",
        "fct-type": "method",
        "title": "onErrorHtml"
      },
      "index": {
        "description": "Called on login error for HTTP requests By default calls setMessage and redirects to dest",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "onErrorHtml",
        "normalized": "Route a-\u003eText-\u003eHandlerT a b Html",
        "package": "yesod-auth",
        "partial": "Error Html",
        "signature": "Route master-\u003eText-\u003eHandlerT master m Html"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:onLogin",
      "description": {
        "fct-descr": "\u003cp\u003eCalled on a successful login. By default, calls\n \u003ccode\u003esetMessageI NowLoggedIn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO ()",
        "fct-source": "src/Yesod-Auth.html#onLogin",
        "fct-type": "method",
        "title": "onLogin"
      },
      "index": {
        "description": "Called on successful login By default calls setMessageI NowLoggedIn",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "onLogin",
        "normalized": "HandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Login",
        "signature": "HandlerT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:onLogout",
      "description": {
        "fct-descr": "\u003cp\u003eCalled on logout. By default, does nothing\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO ()",
        "fct-source": "src/Yesod-Auth.html#onLogout",
        "fct-type": "method",
        "title": "onLogout"
      },
      "index": {
        "description": "Called on logout By default does nothing",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "onLogout",
        "normalized": "HandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Logout",
        "signature": "HandlerT master IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:redirectToReferer",
      "description": {
        "fct-descr": "\u003cp\u003eAfter login and logout, redirect to the referring page, instead of\n \u003ccode\u003e\u003ca\u003eloginDest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elogoutDest\u003c/a\u003e\u003c/code\u003e. Default is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "master -\u003e Bool",
        "fct-source": "src/Yesod-Auth.html#redirectToReferer",
        "fct-type": "method",
        "title": "redirectToReferer"
      },
      "index": {
        "description": "After login and logout redirect to the referring page instead of loginDest and logoutDest Default is False",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "redirectToReferer",
        "normalized": "a-\u003eBool",
        "package": "yesod-auth",
        "partial": "To Referer",
        "signature": "master-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:renderAuthMessage",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for i18n of messages provided by this package.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "renderAuthMessage",
        "fct-source": "src/Yesod-Auth.html#renderAuthMessage",
        "fct-type": "method",
        "title": "renderAuthMessage"
      },
      "index": {
        "description": "Used for i18n of messages provided by this package",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "renderAuthMessage",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:requireAuth",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeAuth\u003c/a\u003e\u003c/code\u003e, but redirects to a login page if user is not\n authenticated.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO (Entity (AuthEntity master))",
        "fct-source": "src/Yesod-Auth.html#requireAuth",
        "fct-type": "function",
        "title": "requireAuth"
      },
      "index": {
        "description": "Similar to maybeAuth but redirects to login page if user is not authenticated Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "requireAuth",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:requireAuthId",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeAuthId\u003c/a\u003e\u003c/code\u003e, but redirects to a login page if user is not\n authenticated.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "HandlerT master IO (AuthId master)",
        "fct-source": "src/Yesod-Auth.html#requireAuthId",
        "fct-type": "function",
        "title": "requireAuthId"
      },
      "index": {
        "description": "Similar to maybeAuthId but redirects to login page if user is not authenticated Since",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "requireAuthId",
        "normalized": "",
        "package": "yesod-auth",
        "partial": "Auth Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:setCreds",
      "description": {
        "fct-descr": "\u003cp\u003eSets user credentials for the session after checking them with authentication backends.\n\u003c/p\u003e",
        "fct-module": "Yesod.Auth",
        "fct-package": "yesod-auth",
        "fct-signature": "Bool-\u003e Creds master-\u003e HandlerT master IO ()",
        "fct-type": "function",
        "title": "setCreds"
      },
      "index": {
        "description": "Sets user credentials for the session after checking them with authentication backends",
        "hierarchy": "Yesod Auth",
        "module": "Yesod.Auth",
        "name": "setCreds",
        "normalized": "Bool-\u003eCreds a-\u003eHandlerT a IO()",
        "package": "yesod-auth",
        "partial": "Creds",
        "signature": "Bool-\u003eCreds master-\u003eHandlerT master IO()"
      }
    }
  }
]