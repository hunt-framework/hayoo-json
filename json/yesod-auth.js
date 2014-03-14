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
        "word": "yesod-auth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.BrowserId",
          "name": "BrowserId",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-BrowserId.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "BrowserId",
          "package": "yesod-auth",
          "partial": "Browser Id",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA settings type for various configuration options relevant to BrowserID.\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://www.yesodweb.com/book/settings-types\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.BrowserId",
          "name": "BrowserIdSettings",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-BrowserId.html#BrowserIdSettings",
          "type": "data"
        },
        "index": {
          "description": "settings type for various configuration options relevant to BrowserID See http www.yesodweb.com book settings-types Since",
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "BrowserIdSettings",
          "package": "yesod-auth",
          "partial": "Browser Id Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#t:BrowserIdSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.BrowserId",
          "name": "authBrowserId",
          "package": "yesod-auth",
          "signature": "BrowserIdSettings -\u003e AuthPlugin m",
          "source": "src/Yesod-Auth-BrowserId.html#authBrowserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "authBrowserId",
          "normalized": "BrowserIdSettings-\u003eAuthPlugin a",
          "package": "yesod-auth",
          "partial": "Browser Id",
          "signature": "BrowserIdSettings-\u003eAuthPlugin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:authBrowserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrowserID audience value. If \u003ccode\u003eNothing\u003c/code\u003e, will be extracted based on the\n approot.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eNothing\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.BrowserId",
          "name": "bisAudience",
          "package": "yesod-auth",
          "signature": "BrowserIdSettings -\u003e Maybe Text",
          "source": "src/Yesod-Auth-BrowserId.html#bisAudience",
          "type": "function"
        },
        "index": {
          "description": "BrowserID audience value If Nothing will be extracted based on the approot Default Nothing Since",
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "bisAudience",
          "normalized": "BrowserIdSettings-\u003eMaybe Text",
          "package": "yesod-auth",
          "partial": "Audience",
          "signature": "BrowserIdSettings-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:bisAudience"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse asynchronous Javascript loading for the BrowserID JS file.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.BrowserId",
          "name": "bisLazyLoad",
          "package": "yesod-auth",
          "signature": "BrowserIdSettings -\u003e Bool",
          "source": "src/Yesod-Auth-BrowserId.html#bisLazyLoad",
          "type": "function"
        },
        "index": {
          "description": "Use asynchronous Javascript loading for the BrowserID JS file Default True Since",
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "bisLazyLoad",
          "normalized": "BrowserIdSettings-\u003eBool",
          "package": "yesod-auth",
          "partial": "Lazy Load",
          "signature": "BrowserIdSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:bisLazyLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a function to handle on-click events, and returns that function\n name.\n\u003c/p\u003e",
          "module": "Yesod.Auth.BrowserId",
          "name": "createOnClick",
          "package": "yesod-auth",
          "signature": "BrowserIdSettings -\u003e (Route Auth -\u003e Route master) -\u003e WidgetT master IO Text",
          "source": "src/Yesod-Auth-BrowserId.html#createOnClick",
          "type": "function"
        },
        "index": {
          "description": "Generates function to handle on-click events and returns that function name",
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "createOnClick",
          "normalized": "BrowserIdSettings-\u003e(Route Auth-\u003eRoute a)-\u003eWidgetT a IO Text",
          "package": "yesod-auth",
          "partial": "On Click",
          "signature": "BrowserIdSettings-\u003e(Route Auth-\u003eRoute master)-\u003eWidgetT master IO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:createOnClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Yesod.Auth.BrowserId",
          "name": "def",
          "package": "yesod-auth",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Yesod Auth BrowserId",
          "module": "Yesod.Auth.BrowserId",
          "name": "def",
          "package": "yesod-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-BrowserId.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a dummy authentication module that simply lets a user specify\n his/her identifier. This is not intended for real world use, just for\n testing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.Dummy",
          "name": "Dummy",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Dummy.html",
          "type": "module"
        },
        "index": {
          "description": "Provides dummy authentication module that simply lets user specify his her identifier This is not intended for real world use just for testing",
          "hierarchy": "Yesod Auth Dummy",
          "module": "Yesod.Auth.Dummy",
          "name": "Dummy",
          "package": "yesod-auth",
          "partial": "Dummy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Dummy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Dummy",
          "name": "authDummy",
          "package": "yesod-auth",
          "signature": "AuthPlugin m",
          "source": "src/Yesod-Auth-Dummy.html#authDummy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Dummy",
          "module": "Yesod.Auth.Dummy",
          "name": "authDummy",
          "package": "yesod-auth",
          "partial": "Dummy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Dummy.html#v:authDummy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "Email",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "Email",
          "package": "yesod-auth",
          "partial": "Email",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "Email",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#Email",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "Email",
          "package": "yesod-auth",
          "partial": "Email",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData stored in a database for each e-mail address.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "EmailCreds",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "data"
        },
        "index": {
          "description": "Data stored in database for each e-mail address",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "EmailCreds",
          "package": "yesod-auth",
          "partial": "Email Creds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:EmailCreds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Identifier generalizes an email address to allow users to log in with\n some other form of credentials (e.g., username).\n\u003c/p\u003e\u003cp\u003eNote that any of these other identifiers must not be valid email addresses.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "Identifier",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#Identifier",
          "type": "type"
        },
        "index": {
          "description": "An Identifier generalizes an email address to allow users to log in with some other form of credentials e.g username Note that any of these other identifiers must not be valid email addresses Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "Identifier",
          "package": "yesod-auth",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "SaltedPass",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#SaltedPass",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "SaltedPass",
          "package": "yesod-auth",
          "partial": "Salted Pass",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:SaltedPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "VerKey",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#VerKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "VerKey",
          "package": "yesod-auth",
          "partial": "Ver Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:VerKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "VerStatus",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#VerStatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "VerStatus",
          "package": "yesod-auth",
          "partial": "Ver Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:VerStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "VerUrl",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#VerUrl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "VerUrl",
          "package": "yesod-auth",
          "partial": "Ver Url",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:VerUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "YesodAuthEmail",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Email.html#YesodAuthEmail",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "YesodAuthEmail",
          "package": "yesod-auth",
          "partial": "Yesod Auth Email",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#t:YesodAuthEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "EmailCreds",
          "package": "yesod-auth",
          "signature": "EmailCreds",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "EmailCreds",
          "package": "yesod-auth",
          "partial": "Email Creds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:EmailCreds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new email address to the database, but indicate that the address\n has not yet been verified.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "addUnverified",
          "package": "yesod-auth",
          "signature": "Email -\u003e VerKey -\u003e HandlerT site IO (AuthEmailId site)",
          "source": "src/Yesod-Auth-Email.html#addUnverified",
          "type": "method"
        },
        "index": {
          "description": "Add new email address to the database but indicate that the address has not yet been verified Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "addUnverified",
          "normalized": "Email-\u003eVerKey-\u003eHandlerT a IO(AuthEmailId a)",
          "package": "yesod-auth",
          "partial": "Unverified",
          "signature": "Email-\u003eVerKey-\u003eHandlerT site IO(AuthEmailId site)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:addUnverified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute to send user to after password has been set correctly.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "afterPasswordRoute",
          "package": "yesod-auth",
          "signature": "site -\u003e Route site",
          "source": "src/Yesod-Auth-Email.html#afterPasswordRoute",
          "type": "method"
        },
        "index": {
          "description": "Route to send user to after password has been set correctly Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "afterPasswordRoute",
          "normalized": "a-\u003eRoute a",
          "package": "yesod-auth",
          "partial": "Password Route",
          "signature": "site-\u003eRoute site",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:afterPasswordRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "authEmail",
          "package": "yesod-auth",
          "signature": "AuthPlugin m",
          "source": "src/Yesod-Auth-Email.html#authEmail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "authEmail",
          "package": "yesod-auth",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:authEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the given plain-text password meets minimum security standards.\n\u003c/p\u003e\u003cp\u003eDefault: password is at least three characters.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "checkPasswordSecurity",
          "package": "yesod-auth",
          "signature": "AuthId site -\u003e Text -\u003e HandlerT site IO (Either Text ())",
          "source": "src/Yesod-Auth-Email.html#checkPasswordSecurity",
          "type": "method"
        },
        "index": {
          "description": "Check that the given plain-text password meets minimum security standards Default password is at least three characters",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "checkPasswordSecurity",
          "normalized": "AuthId a-\u003eText-\u003eHandlerT a IO(Either Text())",
          "package": "yesod-auth",
          "partial": "Password Security",
          "signature": "AuthId site-\u003eText-\u003eHandlerT site IO(Either Text())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:checkPasswordSecurity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse after sending a confirmation email.\n\u003c/p\u003e\u003cp\u003eSince 1.2.2\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "confirmationEmailSentResponse",
          "package": "yesod-auth",
          "signature": "Text -\u003e HandlerT site IO Html",
          "source": "src/Yesod-Auth-Email.html#confirmationEmailSentResponse",
          "type": "method"
        },
        "index": {
          "description": "Response after sending confirmation email Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "confirmationEmailSentResponse",
          "normalized": "Text-\u003eHandlerT a IO Html",
          "package": "yesod-auth",
          "partial": "Email Sent Response",
          "signature": "Text-\u003eHandlerT site IO Html",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:confirmationEmailSentResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of \u003ccode\u003e\u003ca\u003eforgotPasswordHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 1.2.6\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "defaultForgotPasswordHandler",
          "package": "yesod-auth",
          "signature": "AuthHandler master Html",
          "source": "src/Yesod-Auth-Email.html#defaultForgotPasswordHandler",
          "type": "function"
        },
        "index": {
          "description": "Default implementation of forgotPasswordHandler Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "defaultForgotPasswordHandler",
          "package": "yesod-auth",
          "partial": "Forgot Password Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:defaultForgotPasswordHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of \u003ccode\u003e\u003ca\u003eregisterHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 1.2.6\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "defaultRegisterHandler",
          "package": "yesod-auth",
          "signature": "AuthHandler master Html",
          "source": "src/Yesod-Auth-Email.html#defaultRegisterHandler",
          "type": "function"
        },
        "index": {
          "description": "Default implementation of registerHandler Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "defaultRegisterHandler",
          "package": "yesod-auth",
          "partial": "Register Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:defaultRegisterHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of \u003ccode\u003e\u003ca\u003esetPasswordHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 1.2.6\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "defaultSetPasswordHandler",
          "package": "yesod-auth",
          "signature": "Bool -\u003e AuthHandler master Html",
          "source": "src/Yesod-Auth-Email.html#defaultSetPasswordHandler",
          "type": "function"
        },
        "index": {
          "description": "Default implementation of setPasswordHandler Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "defaultSetPasswordHandler",
          "normalized": "Bool-\u003eAuthHandler a Html",
          "package": "yesod-auth",
          "partial": "Set Password Handler",
          "signature": "Bool-\u003eAuthHandler master Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:defaultSetPasswordHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "emailCredsAuthId",
          "package": "yesod-auth",
          "signature": "Maybe (AuthId site)",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "emailCredsAuthId",
          "package": "yesod-auth",
          "partial": "Creds Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "emailCredsEmail",
          "package": "yesod-auth",
          "signature": "Email",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "emailCredsEmail",
          "package": "yesod-auth",
          "partial": "Creds Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "emailCredsId",
          "package": "yesod-auth",
          "signature": "AuthEmailId site",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "emailCredsId",
          "package": "yesod-auth",
          "partial": "Creds Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "emailCredsStatus",
          "package": "yesod-auth",
          "signature": "VerStatus",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "emailCredsStatus",
          "package": "yesod-auth",
          "partial": "Creds Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "emailCredsVerkey",
          "package": "yesod-auth",
          "signature": "Maybe VerKey",
          "source": "src/Yesod-Auth-Email.html#EmailCreds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "emailCredsVerkey",
          "package": "yesod-auth",
          "partial": "Creds Verkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:emailCredsVerkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler called to render the \"forgot password\" page.\n The default works fine, but you may want to override it in\n order to have a different DOM.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e\u003ca\u003edefaultForgotPasswordHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 1.2.6.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "forgotPasswordHandler",
          "package": "yesod-auth",
          "signature": "AuthHandler site Html",
          "source": "src/Yesod-Auth-Email.html#forgotPasswordHandler",
          "type": "method"
        },
        "index": {
          "description": "Handler called to render the forgot password page The default works fine but you may want to override it in order to have different DOM Default defaultForgotPasswordHandler Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "forgotPasswordHandler",
          "package": "yesod-auth",
          "partial": "Password Handler",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:forgotPasswordHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "forgotPasswordR",
          "package": "yesod-auth",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Email.html#forgotPasswordR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "forgotPasswordR",
          "package": "yesod-auth",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:forgotPasswordR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the email address for the given email ID.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "getEmail",
          "package": "yesod-auth",
          "signature": "AuthEmailId site -\u003e HandlerT site IO (Maybe Email)",
          "source": "src/Yesod-Auth-Email.html#getEmail",
          "type": "method"
        },
        "index": {
          "description": "Get the email address for the given email ID Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "getEmail",
          "normalized": "AuthEmailId a-\u003eHandlerT a IO(Maybe Email)",
          "package": "yesod-auth",
          "partial": "Email",
          "signature": "AuthEmailId site-\u003eHandlerT site IO(Maybe Email)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the credentials for the given \u003ccode\u003eIdentifier\u003c/code\u003e, which may be either an\n email address or some other identification (e.g., username).\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "getEmailCreds",
          "package": "yesod-auth",
          "signature": "Identifier -\u003e HandlerT site IO (Maybe (EmailCreds site))",
          "source": "src/Yesod-Auth-Email.html#getEmailCreds",
          "type": "method"
        },
        "index": {
          "description": "Get the credentials for the given Identifier which may be either an email address or some other identification e.g username Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "getEmailCreds",
          "normalized": "Identifier-\u003eHandlerT a IO(Maybe(EmailCreds a))",
          "package": "yesod-auth",
          "partial": "Email Creds",
          "signature": "Identifier-\u003eHandlerT site IO(Maybe(EmailCreds site))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getEmailCreds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the salted password for the given account.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "getPassword",
          "package": "yesod-auth",
          "signature": "AuthId site -\u003e HandlerT site IO (Maybe SaltedPass)",
          "source": "src/Yesod-Auth-Email.html#getPassword",
          "type": "method"
        },
        "index": {
          "description": "Get the salted password for the given account Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "getPassword",
          "normalized": "AuthId a-\u003eHandlerT a IO(Maybe SaltedPass)",
          "package": "yesod-auth",
          "partial": "Password",
          "signature": "AuthId site-\u003eHandlerT site IO(Maybe SaltedPass)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the verification key for the given email ID.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "getVerifyKey",
          "package": "yesod-auth",
          "signature": "AuthEmailId site -\u003e HandlerT site IO (Maybe VerKey)",
          "source": "src/Yesod-Auth-Email.html#getVerifyKey",
          "type": "method"
        },
        "index": {
          "description": "Get the verification key for the given email ID Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "getVerifyKey",
          "normalized": "AuthEmailId a-\u003eHandlerT a IO(Maybe VerKey)",
          "package": "yesod-auth",
          "partial": "Verify Key",
          "signature": "AuthEmailId site-\u003eHandlerT site IO(Maybe VerKey)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:getVerifyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "isValidPass",
          "package": "yesod-auth",
          "signature": "Text-\u003e SaltedPass-\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "isValidPass",
          "normalized": "Text-\u003eSaltedPass-\u003eBool",
          "package": "yesod-auth",
          "partial": "Valid Pass",
          "signature": "Text-\u003eSaltedPass-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:isValidPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession variable set when user logged in via a login link. See\n \u003ccode\u003e\u003ca\u003eneedOldPassword\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2.1\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "loginLinkKey",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth-Email.html#loginLinkKey",
          "type": "function"
        },
        "index": {
          "description": "Session variable set when user logged in via login link See needOldPassword Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "loginLinkKey",
          "package": "yesod-auth",
          "partial": "Link Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:loginLinkKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "loginR",
          "package": "yesod-auth",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Email.html#loginR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "loginR",
          "package": "yesod-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:loginR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the user need to provide the current password in order to set a\n new password?\n\u003c/p\u003e\u003cp\u003eDefault: if the user logged in via an email link do not require a password.\n\u003c/p\u003e\u003cp\u003eSince 1.2.1\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "needOldPassword",
          "package": "yesod-auth",
          "signature": "AuthId site -\u003e HandlerT site IO Bool",
          "source": "src/Yesod-Auth-Email.html#needOldPassword",
          "type": "method"
        },
        "index": {
          "description": "Does the user need to provide the current password in order to set new password Default if the user logged in via an email link do not require password Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "needOldPassword",
          "normalized": "AuthId a-\u003eHandlerT a IO Bool",
          "package": "yesod-auth",
          "partial": "Old Password",
          "signature": "AuthId site-\u003eHandlerT site IO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:needOldPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional normalization of email addresses, besides standard canonicalization.\n\u003c/p\u003e\u003cp\u003eDefault: Lower case the email address.\n\u003c/p\u003e\u003cp\u003eSince 1.2.3\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "normalizeEmailAddress",
          "package": "yesod-auth",
          "signature": "site -\u003e Text -\u003e Text",
          "source": "src/Yesod-Auth-Email.html#normalizeEmailAddress",
          "type": "method"
        },
        "index": {
          "description": "Additional normalization of email addresses besides standard canonicalization Default Lower case the email address Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "normalizeEmailAddress",
          "normalized": "a-\u003eText-\u003eText",
          "package": "yesod-auth",
          "partial": "Email Address",
          "signature": "site-\u003eText-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:normalizeEmailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random alphanumeric string.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "randomKey",
          "package": "yesod-auth",
          "signature": "site -\u003e IO Text",
          "source": "src/Yesod-Auth-Email.html#randomKey",
          "type": "method"
        },
        "index": {
          "description": "Generate random alphanumeric string Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "randomKey",
          "normalized": "a-\u003eIO Text",
          "package": "yesod-auth",
          "partial": "Key",
          "signature": "site-\u003eIO Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:randomKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler called to render the registration page.  The\n default works fine, but you may want to override it in\n order to have a different DOM.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e\u003ca\u003edefaultRegisterHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 1.2.6.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "registerHandler",
          "package": "yesod-auth",
          "signature": "AuthHandler site Html",
          "source": "src/Yesod-Auth-Email.html#registerHandler",
          "type": "method"
        },
        "index": {
          "description": "Handler called to render the registration page The default works fine but you may want to override it in order to have different DOM Default defaultRegisterHandler Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "registerHandler",
          "package": "yesod-auth",
          "partial": "Handler",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:registerHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "registerR",
          "package": "yesod-auth",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Email.html#registerR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "registerR",
          "package": "yesod-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:registerR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSalt a password with a randomly generated salt.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "saltPass",
          "package": "yesod-auth",
          "signature": "Text -\u003e IO Text",
          "source": "src/Yesod-Auth-Email.html#saltPass",
          "type": "function"
        },
        "index": {
          "description": "Salt password with randomly generated salt",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "saltPass",
          "normalized": "Text-\u003eIO Text",
          "package": "yesod-auth",
          "partial": "Pass",
          "signature": "Text-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:saltPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend an email to the given address to verify ownership.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "sendVerifyEmail",
          "package": "yesod-auth",
          "signature": "Email -\u003e VerKey -\u003e VerUrl -\u003e HandlerT site IO ()",
          "source": "src/Yesod-Auth-Email.html#sendVerifyEmail",
          "type": "method"
        },
        "index": {
          "description": "Send an email to the given address to verify ownership Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "sendVerifyEmail",
          "normalized": "Email-\u003eVerKey-\u003eVerUrl-\u003eHandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Verify Email",
          "signature": "Email-\u003eVerKey-\u003eVerUrl-\u003eHandlerT site IO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:sendVerifyEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003e\u003ca\u003eloginLinkKey\u003c/a\u003e\u003c/code\u003e to the current time.\n\u003c/p\u003e\u003cp\u003eSince 1.2.1\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "setLoginLinkKey",
          "package": "yesod-auth",
          "signature": "AuthId site -\u003e m ()",
          "source": "src/Yesod-Auth-Email.html#setLoginLinkKey",
          "type": "function"
        },
        "index": {
          "description": "Set loginLinkKey to the current time Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "setLoginLinkKey",
          "normalized": "AuthId a-\u003eb()",
          "package": "yesod-auth",
          "partial": "Login Link Key",
          "signature": "AuthId site-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setLoginLinkKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the salted password for the given account.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "setPassword",
          "package": "yesod-auth",
          "signature": "AuthId site -\u003e SaltedPass -\u003e HandlerT site IO ()",
          "source": "src/Yesod-Auth-Email.html#setPassword",
          "type": "method"
        },
        "index": {
          "description": "Set the salted password for the given account Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "setPassword",
          "normalized": "AuthId a-\u003eSaltedPass-\u003eHandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Password",
          "signature": "AuthId site-\u003eSaltedPass-\u003eHandlerT site IO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler called to render the \"set password\" page.  The\n default works fine, but you may want to override it in\n order to have a different DOM.\n\u003c/p\u003e\u003cp\u003eDefault: \u003ccode\u003e\u003ca\u003edefaultSetPasswordHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 1.2.6.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "setPasswordHandler",
          "package": "yesod-auth",
          "signature": "setPasswordHandler",
          "source": "src/Yesod-Auth-Email.html#setPasswordHandler",
          "type": "method"
        },
        "index": {
          "description": "Handler called to render the set password page The default works fine but you may want to override it in order to have different DOM Default defaultSetPasswordHandler Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "setPasswordHandler",
          "package": "yesod-auth",
          "partial": "Password Handler",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setPasswordHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the verification key for the given email ID.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "setVerifyKey",
          "package": "yesod-auth",
          "signature": "AuthEmailId site -\u003e VerKey -\u003e HandlerT site IO ()",
          "source": "src/Yesod-Auth-Email.html#setVerifyKey",
          "type": "method"
        },
        "index": {
          "description": "Set the verification key for the given email ID Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "setVerifyKey",
          "normalized": "AuthEmailId a-\u003eVerKey-\u003eHandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Verify Key",
          "signature": "AuthEmailId site-\u003eVerKey-\u003eHandlerT site IO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setVerifyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Email",
          "name": "setpassR",
          "package": "yesod-auth",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Email.html#setpassR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "setpassR",
          "package": "yesod-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:setpassR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify the email address on the given account.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth.Email",
          "name": "verifyAccount",
          "package": "yesod-auth",
          "signature": "AuthEmailId site -\u003e HandlerT site IO (Maybe (AuthId site))",
          "source": "src/Yesod-Auth-Email.html#verifyAccount",
          "type": "method"
        },
        "index": {
          "description": "Verify the email address on the given account Since",
          "hierarchy": "Yesod Auth Email",
          "module": "Yesod.Auth.Email",
          "name": "verifyAccount",
          "normalized": "AuthEmailId a-\u003eHandlerT a IO(Maybe(AuthId a))",
          "package": "yesod-auth",
          "partial": "Account",
          "signature": "AuthEmailId site-\u003eHandlerT site IO(Maybe(AuthId site))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Email.html#v:verifyAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse an email address as an identifier via Google's OpenID login system.\n\u003c/p\u003e\u003cp\u003eThis backend will not use the OpenID identifier at all. It only uses OpenID\n as a login system. By using this plugin, you are trusting Google to validate\n an email address, and requiring users to have a Google account. On the plus\n side, you get to use email addresses as the identifier, many users have\n existing Google accounts, the login system has been long tested (as opposed\n to BrowserID), and it requires no credential managing or setup (as opposed\n to Email).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.GoogleEmail",
          "name": "GoogleEmail",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-GoogleEmail.html",
          "type": "module"
        },
        "index": {
          "description": "Use an email address as an identifier via Google OpenID login system This backend will not use the OpenID identifier at all It only uses OpenID as login system By using this plugin you are trusting Google to validate an email address and requiring users to have Google account On the plus side you get to use email addresses as the identifier many users have existing Google accounts the login system has been long tested as opposed to BrowserID and it requires no credential managing or setup as opposed to Email",
          "hierarchy": "Yesod Auth GoogleEmail",
          "module": "Yesod.Auth.GoogleEmail",
          "name": "GoogleEmail",
          "package": "yesod-auth",
          "partial": "Google Email",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-GoogleEmail.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.GoogleEmail",
          "name": "authGoogleEmail",
          "package": "yesod-auth",
          "signature": "AuthPlugin m",
          "source": "src/Yesod-Auth-GoogleEmail.html#authGoogleEmail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth GoogleEmail",
          "module": "Yesod.Auth.GoogleEmail",
          "name": "authGoogleEmail",
          "package": "yesod-auth",
          "partial": "Google Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-GoogleEmail.html#v:authGoogleEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.GoogleEmail",
          "name": "forwardUrl",
          "package": "yesod-auth",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-GoogleEmail.html#forwardUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth GoogleEmail",
          "module": "Yesod.Auth.GoogleEmail",
          "name": "forwardUrl",
          "package": "yesod-auth",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-GoogleEmail.html#v:forwardUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: This module was \u003cem\u003enot\u003c/em\u003e designed with security in mind, and is not\n suitable for production sites. In the near future, it will likely be either\n deprecated or rewritten to have a more secure implementation. For more\n information, see: \u003ca\u003ehttps://github.com/yesodweb/yesod/issues/668\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA yesod-auth AuthPlugin designed to look users up in Persist where\n their user id's and a salted SHA1 hash of their password is stored.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e -- import the function\n import Auth.HashDB\n\n -- make sure you have an auth route\n mkYesodData \"MyApp\" [$parseRoutes|\n / RootR GET\n /auth AuthR Auth getAuth\n |]\n\n\n -- make your app an instance of YesodAuth using this plugin\n instance YesodAuth MyApp where\n    type AuthId MyApp = UserId\n\n    loginDest _  = RootR\n    logoutDest _ = RootR\n    getAuthId    = getAuthIdHashDB AuthR (Just . UniqueUser)\n    authPlugins  = [authHashDB (Just . UniqueUser)]\n\n\n -- include the migration function in site startup\n withServer :: (Application -\u003e IO a) -\u003e IO a\n withServer f = withConnectionPool $ \\p -\u003e do\n     runSqlPool (runMigration migrateUsers) p\n     let h = DevSite p\n\u003c/pre\u003e\u003cp\u003eNote that function which converts username to unique identifier must be same.\n\u003c/p\u003e\u003cp\u003eYour app must be an instance of YesodPersist. and the username,\n salt and hashed-passwords should be added to the database.\n\u003c/p\u003e\u003cpre\u003e echo -n 'MySaltMyPassword' | sha1sum\n\u003c/pre\u003e\u003cp\u003ecan be used to get the hash from the commandline.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "HashDB",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-HashDB.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING This module was not designed with security in mind and is not suitable for production sites In the near future it will likely be either deprecated or rewritten to have more secure implementation For more information see https github.com yesodweb yesod issues yesod-auth AuthPlugin designed to look users up in Persist where their user id and salted SHA1 hash of their password is stored Example usage import the function import Auth.HashDB make sure you have an auth route mkYesodData MyApp parseRoutes RootR GET auth AuthR Auth getAuth make your app an instance of YesodAuth using this plugin instance YesodAuth MyApp where type AuthId MyApp UserId loginDest RootR logoutDest RootR getAuthId getAuthIdHashDB AuthR Just UniqueUser authPlugins authHashDB Just UniqueUser include the migration function in site startup withServer Application IO IO withServer withConnectionPool do runSqlPool runMigration migrateUsers let DevSite Note that function which converts username to unique identifier must be same Your app must be an instance of YesodPersist and the username salt and hashed-passwords should be added to the database echo MySaltMyPassword sha1sum can be used to get the hash from the commandline",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "HashDB",
          "package": "yesod-auth",
          "partial": "Hash DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEntityField\u003c/a\u003e\u003c/code\u003e is parameterised by the Haskell record it belongs to\n and the additional type of that field\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "EntityField",
          "package": "yesod-auth",
          "signature": "EntityField",
          "type": "function"
        },
        "index": {
          "description": "An EntityField is parameterised by the Haskell record it belongs to and the additional type of that field",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "EntityField",
          "package": "yesod-auth",
          "partial": "Entity Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:EntityField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for data type which holds user info. It's just a\n   collection of getters and setters\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "HashDBUser",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-HashDB.html#HashDBUser",
          "type": "class"
        },
        "index": {
          "description": "Interface for data type which holds user info It just collection of getters and setters",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "HashDBUser",
          "package": "yesod-auth",
          "partial": "Hash DBUser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:HashDBUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique keys besided the Key\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "Unique",
          "package": "yesod-auth",
          "signature": "Unique",
          "type": "function"
        },
        "index": {
          "description": "Unique keys besided the Key",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "Unique",
          "package": "yesod-auth",
          "partial": "Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "User",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-HashDB.html#User",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "User",
          "package": "yesod-auth",
          "partial": "User",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate data base instances for a valid user\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "UserGeneric",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-HashDB.html#UserGeneric",
          "type": "data"
        },
        "index": {
          "description": "Generate data base instances for valid user",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "UserGeneric",
          "package": "yesod-auth",
          "partial": "User Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:UserGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "UserId",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-HashDB.html#UserId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "UserId",
          "package": "yesod-auth",
          "partial": "User Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#t:UserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "User",
          "package": "yesod-auth",
          "signature": "User",
          "source": "src/Yesod-Auth-HashDB.html#UserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "User",
          "package": "yesod-auth",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompt for username and password, validate that against a database\n   which holds the username and a hash of the password\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "authHashDB",
          "package": "yesod-auth",
          "signature": "(Text -\u003e Maybe (Unique user)) -\u003e AuthPlugin m",
          "source": "src/Yesod-Auth-HashDB.html#authHashDB",
          "type": "function"
        },
        "index": {
          "description": "Prompt for username and password validate that against database which holds the username and hash of the password",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "authHashDB",
          "normalized": "(Text-\u003eMaybe(Unique a))-\u003eAuthPlugin b",
          "package": "yesod-auth",
          "partial": "Hash DB",
          "signature": "(Text-\u003eMaybe(Unique user))-\u003eAuthPlugin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:authHashDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop in for the getAuthId method of your YesodAuth instance which\n   can be used if authHashDB is the only plugin in use.\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "getAuthIdHashDB",
          "package": "yesod-auth",
          "signature": "(AuthRoute -\u003e Route master)-\u003e (Text -\u003e Maybe (Unique user))-\u003e Creds master-\u003e HandlerT master IO (Maybe (AuthId master))",
          "type": "function"
        },
        "index": {
          "description": "drop in for the getAuthId method of your YesodAuth instance which can be used if authHashDB is the only plugin in use",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "getAuthIdHashDB",
          "normalized": "(AuthRoute-\u003eRoute a)-\u003e(Text-\u003eMaybe(Unique b))-\u003eCreds a-\u003eHandlerT a IO(Maybe(AuthId a))",
          "package": "yesod-auth",
          "partial": "Auth Id Hash DB",
          "signature": "(AuthRoute-\u003eRoute master)-\u003e(Text-\u003eMaybe(Unique user))-\u003eCreds master-\u003eHandlerT master IO(Maybe(AuthId master))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:getAuthIdHashDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "migrateUsers",
          "package": "yesod-auth",
          "signature": "Migration (SqlPersistT m)",
          "source": "src/Yesod-Auth-HashDB.html#migrateUsers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "migrateUsers",
          "package": "yesod-auth",
          "partial": "Users",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:migrateUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet password for user. This function should be used for setting\n   passwords. It generates random salt and calculates proper hashes.\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "setPassword",
          "package": "yesod-auth",
          "signature": "Text -\u003e user -\u003e m user",
          "source": "src/Yesod-Auth-HashDB.html#setPassword",
          "type": "function"
        },
        "index": {
          "description": "Set password for user This function should be used for setting passwords It generates random salt and calculates proper hashes",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "setPassword",
          "normalized": "Text-\u003ea-\u003eb a",
          "package": "yesod-auth",
          "partial": "Password",
          "signature": "Text-\u003euser-\u003em user",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:setPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea callback for setPassword\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "setSaltAndPasswordHash",
          "package": "yesod-auth",
          "signature": "setSaltAndPasswordHash",
          "source": "src/Yesod-Auth-HashDB.html#setSaltAndPasswordHash",
          "type": "method"
        },
        "index": {
          "description": "callback for setPassword",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "setSaltAndPasswordHash",
          "package": "yesod-auth",
          "partial": "Salt And Password Hash",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:setSaltAndPasswordHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated for the better named setSaltAndPasswordHash \n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "setUserHashAndSalt",
          "package": "yesod-auth",
          "signature": "setUserHashAndSalt",
          "source": "src/Yesod-Auth-HashDB.html#setUserHashAndSalt",
          "type": "method"
        },
        "index": {
          "description": "Deprecated for the better named setSaltAndPasswordHash",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "setUserHashAndSalt",
          "package": "yesod-auth",
          "partial": "User Hash And Salt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:setUserHashAndSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "userPassword",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth-HashDB.html#UserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "userPassword",
          "package": "yesod-auth",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve password hash from user data\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "userPasswordHash",
          "package": "yesod-auth",
          "signature": "user -\u003e Maybe Text",
          "source": "src/Yesod-Auth-HashDB.html#userPasswordHash",
          "type": "method"
        },
        "index": {
          "description": "Retrieve password hash from user data",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "userPasswordHash",
          "normalized": "a-\u003eMaybe Text",
          "package": "yesod-auth",
          "partial": "Password Hash",
          "signature": "user-\u003eMaybe Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userPasswordHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve salt for password\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "userPasswordSalt",
          "package": "yesod-auth",
          "signature": "user -\u003e Maybe Text",
          "source": "src/Yesod-Auth-HashDB.html#userPasswordSalt",
          "type": "method"
        },
        "index": {
          "description": "Retrieve salt for password",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "userPasswordSalt",
          "normalized": "a-\u003eMaybe Text",
          "package": "yesod-auth",
          "partial": "Password Salt",
          "signature": "user-\u003eMaybe Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userPasswordSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "userSalt",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth-HashDB.html#UserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "userSalt",
          "package": "yesod-auth",
          "partial": "Salt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.HashDB",
          "name": "userUsername",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth-HashDB.html#UserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "userUsername",
          "package": "yesod-auth",
          "partial": "Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:userUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a user ID and password in plaintext, validate them against\n   the database values.\n\u003c/p\u003e",
          "module": "Yesod.Auth.HashDB",
          "name": "validateUser",
          "package": "yesod-auth",
          "signature": "Unique user-\u003e Text-\u003e HandlerT yesod IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Given user ID and password in plaintext validate them against the database values",
          "hierarchy": "Yesod Auth HashDB",
          "module": "Yesod.Auth.HashDB",
          "name": "validateUser",
          "normalized": "Unique a-\u003eText-\u003eHandlerT b IO Bool",
          "package": "yesod-auth",
          "partial": "User",
          "signature": "Unique user-\u003eText-\u003eHandlerT yesod IO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-HashDB.html#v:validateUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "Message",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Message.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "Message",
          "package": "yesod-auth",
          "partial": "Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "AuthMessage",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "AuthMessage",
          "package": "yesod-auth",
          "partial": "Auth Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#t:AuthMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "AddressVerified",
          "package": "yesod-auth",
          "signature": "AddressVerified",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "AddressVerified",
          "package": "yesod-auth",
          "partial": "Address Verified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:AddressVerified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "BadSetPass",
          "package": "yesod-auth",
          "signature": "BadSetPass",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "BadSetPass",
          "package": "yesod-auth",
          "partial": "Bad Set Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:BadSetPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "ConfirmPass",
          "package": "yesod-auth",
          "signature": "ConfirmPass",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "ConfirmPass",
          "package": "yesod-auth",
          "partial": "Confirm Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ConfirmPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "ConfirmationEmailSent",
          "package": "yesod-auth",
          "signature": "ConfirmationEmailSent Text",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "ConfirmationEmailSent",
          "package": "yesod-auth",
          "partial": "Confirmation Email Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ConfirmationEmailSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "ConfirmationEmailSentTitle",
          "package": "yesod-auth",
          "signature": "ConfirmationEmailSentTitle",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "ConfirmationEmailSentTitle",
          "package": "yesod-auth",
          "partial": "Confirmation Email Sent Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ConfirmationEmailSentTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "Email",
          "package": "yesod-auth",
          "signature": "Email",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "Email",
          "package": "yesod-auth",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "EnterEmail",
          "package": "yesod-auth",
          "signature": "EnterEmail",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "EnterEmail",
          "package": "yesod-auth",
          "partial": "Enter Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:EnterEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "Facebook",
          "package": "yesod-auth",
          "signature": "Facebook",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "Facebook",
          "package": "yesod-auth",
          "partial": "Facebook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Facebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "IdentifierNotFound",
          "package": "yesod-auth",
          "signature": "IdentifierNotFound Text",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "IdentifierNotFound",
          "package": "yesod-auth",
          "partial": "Identifier Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:IdentifierNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "InvalidEmailAddress",
          "package": "yesod-auth",
          "signature": "InvalidEmailAddress",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "InvalidEmailAddress",
          "package": "yesod-auth",
          "partial": "Invalid Email Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidEmailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "InvalidEmailPass",
          "package": "yesod-auth",
          "signature": "InvalidEmailPass",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "InvalidEmailPass",
          "package": "yesod-auth",
          "partial": "Invalid Email Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidEmailPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "InvalidKey",
          "package": "yesod-auth",
          "signature": "InvalidKey",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "InvalidKey",
          "package": "yesod-auth",
          "partial": "Invalid Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "InvalidKeyTitle",
          "package": "yesod-auth",
          "signature": "InvalidKeyTitle",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "InvalidKeyTitle",
          "package": "yesod-auth",
          "partial": "Invalid Key Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidKeyTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "InvalidLogin",
          "package": "yesod-auth",
          "signature": "InvalidLogin",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "InvalidLogin",
          "package": "yesod-auth",
          "partial": "Invalid Login",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "InvalidUsernamePass",
          "package": "yesod-auth",
          "signature": "InvalidUsernamePass",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "InvalidUsernamePass",
          "package": "yesod-auth",
          "partial": "Invalid Username Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:InvalidUsernamePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "LoginGoogle",
          "package": "yesod-auth",
          "signature": "LoginGoogle",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "LoginGoogle",
          "package": "yesod-auth",
          "partial": "Login Google",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginGoogle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "LoginOpenID",
          "package": "yesod-auth",
          "signature": "LoginOpenID",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "LoginOpenID",
          "package": "yesod-auth",
          "partial": "Login Open ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginOpenID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "LoginTitle",
          "package": "yesod-auth",
          "signature": "LoginTitle",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "LoginTitle",
          "package": "yesod-auth",
          "partial": "Login Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "LoginViaEmail",
          "package": "yesod-auth",
          "signature": "LoginViaEmail",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "LoginViaEmail",
          "package": "yesod-auth",
          "partial": "Login Via Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginViaEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "LoginYahoo",
          "package": "yesod-auth",
          "signature": "LoginYahoo",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "LoginYahoo",
          "package": "yesod-auth",
          "partial": "Login Yahoo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:LoginYahoo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "NewPass",
          "package": "yesod-auth",
          "signature": "NewPass",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "NewPass",
          "package": "yesod-auth",
          "partial": "New Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NewPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "NoIdentifierProvided",
          "package": "yesod-auth",
          "signature": "NoIdentifierProvided",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "NoIdentifierProvided",
          "package": "yesod-auth",
          "partial": "No Identifier Provided",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NoIdentifierProvided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "NoOpenID",
          "package": "yesod-auth",
          "signature": "NoOpenID",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "NoOpenID",
          "package": "yesod-auth",
          "partial": "No Open ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NoOpenID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "NowLoggedIn",
          "package": "yesod-auth",
          "signature": "NowLoggedIn",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "NowLoggedIn",
          "package": "yesod-auth",
          "partial": "Now Logged In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:NowLoggedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "PassMismatch",
          "package": "yesod-auth",
          "signature": "PassMismatch",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "PassMismatch",
          "package": "yesod-auth",
          "partial": "Pass Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PassMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "PassUpdated",
          "package": "yesod-auth",
          "signature": "PassUpdated",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "PassUpdated",
          "package": "yesod-auth",
          "partial": "Pass Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PassUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "Password",
          "package": "yesod-auth",
          "signature": "Password",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "Password",
          "package": "yesod-auth",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "PasswordResetPrompt",
          "package": "yesod-auth",
          "signature": "PasswordResetPrompt",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "PasswordResetPrompt",
          "package": "yesod-auth",
          "partial": "Password Reset Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PasswordResetPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "PasswordResetTitle",
          "package": "yesod-auth",
          "signature": "PasswordResetTitle",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "PasswordResetTitle",
          "package": "yesod-auth",
          "partial": "Password Reset Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PasswordResetTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "PleaseProvidePassword",
          "package": "yesod-auth",
          "signature": "PleaseProvidePassword",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "PleaseProvidePassword",
          "package": "yesod-auth",
          "partial": "Please Provide Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PleaseProvidePassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "PleaseProvideUsername",
          "package": "yesod-auth",
          "signature": "PleaseProvideUsername",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "PleaseProvideUsername",
          "package": "yesod-auth",
          "partial": "Please Provide Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:PleaseProvideUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "ProvideIdentifier",
          "package": "yesod-auth",
          "signature": "ProvideIdentifier",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "ProvideIdentifier",
          "package": "yesod-auth",
          "partial": "Provide Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:ProvideIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "Register",
          "package": "yesod-auth",
          "signature": "Register",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "Register",
          "package": "yesod-auth",
          "partial": "Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:Register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "RegisterLong",
          "package": "yesod-auth",
          "signature": "RegisterLong",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "RegisterLong",
          "package": "yesod-auth",
          "partial": "Register Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:RegisterLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "SendPasswordResetEmail",
          "package": "yesod-auth",
          "signature": "SendPasswordResetEmail",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "SendPasswordResetEmail",
          "package": "yesod-auth",
          "partial": "Send Password Reset Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:SendPasswordResetEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "SetPass",
          "package": "yesod-auth",
          "signature": "SetPass",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "SetPass",
          "package": "yesod-auth",
          "partial": "Set Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:SetPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "SetPassTitle",
          "package": "yesod-auth",
          "signature": "SetPassTitle",
          "source": "src/Yesod-Auth-Message.html#AuthMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "SetPassTitle",
          "package": "yesod-auth",
          "partial": "Set Pass Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:SetPassTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "chineseMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#chineseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "chineseMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:chineseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "czechMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#czechMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "czechMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:czechMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults to \u003ccode\u003e\u003ca\u003eenglishMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Message",
          "name": "defaultMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#defaultMessage",
          "type": "function"
        },
        "index": {
          "description": "Defaults to englishMessage",
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "defaultMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:defaultMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "englishMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#englishMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "englishMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:englishMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "finnishMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#finnishMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "finnishMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:finnishMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "frenchMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#frenchMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "frenchMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:frenchMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "germanMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#germanMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "germanMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:germanMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "japaneseMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#japaneseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "japaneseMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:japaneseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "norwegianBokmålMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#norwegianBokm%E5lMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "norwegianBokmålMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Bokmål Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:norwegianBokm-229-lMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "portugueseMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#portugueseMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "portugueseMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:portugueseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "spanishMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#spanishMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "spanishMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:spanishMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Message",
          "name": "swedishMessage",
          "package": "yesod-auth",
          "signature": "AuthMessage -\u003e Text",
          "source": "src/Yesod-Auth-Message.html#swedishMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Message",
          "module": "Yesod.Auth.Message",
          "name": "swedishMessage",
          "normalized": "AuthMessage-\u003eText",
          "package": "yesod-auth",
          "partial": "Message",
          "signature": "AuthMessage-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Message.html#v:swedishMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "OpenId",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-OpenId.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "OpenId",
          "package": "yesod-auth",
          "partial": "Open Id",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "IdentifierType",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-OpenId.html#IdentifierType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "IdentifierType",
          "package": "yesod-auth",
          "partial": "Identifier Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#t:IdentifierType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "Claimed",
          "package": "yesod-auth",
          "signature": "Claimed",
          "source": "src/Yesod-Auth-OpenId.html#IdentifierType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "Claimed",
          "package": "yesod-auth",
          "partial": "Claimed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:Claimed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "OPLocal",
          "package": "yesod-auth",
          "signature": "OPLocal",
          "source": "src/Yesod-Auth-OpenId.html#IdentifierType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "OPLocal",
          "package": "yesod-auth",
          "partial": "OPLocal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:OPLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "authOpenId",
          "package": "yesod-auth",
          "signature": "IdentifierType-\u003e [(Text, Text)]-\u003e AuthPlugin master",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "authOpenId",
          "normalized": "IdentifierType-\u003e[(Text,Text)]-\u003eAuthPlugin a",
          "package": "yesod-auth",
          "partial": "Open Id",
          "signature": "IdentifierType-\u003e[(Text,Text)]-\u003eAuthPlugin master",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:authOpenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main identifier provided by the OpenID authentication plugin is the\n \"OP-local identifier\". There is also sometimes a \"claimed\" identifier\n available.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003e\u003ca\u003ecredsExtra\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eCreds\u003c/a\u003e\u003c/code\u003e datatype, you can lookup this key\n to find the claimed identifier, if available.\n\u003c/p\u003e\u003cpre\u003e let finalID = fromMaybe (credsIdent creds)\n             $ lookup claimedKey (credsExtra creds)\n\u003c/pre\u003e\u003cp\u003eSince 1.0.2\n\u003c/p\u003e",
          "module": "Yesod.Auth.OpenId",
          "name": "claimedKey",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth-OpenId.html#claimedKey",
          "type": "function"
        },
        "index": {
          "description": "The main identifier provided by the OpenID authentication plugin is the OP-local identifier There is also sometimes claimed identifier available In the credsExtra field of the Creds datatype you can lookup this key to find the claimed identifier if available let finalID fromMaybe credsIdent creds lookup claimedKey credsExtra creds Since",
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "claimedKey",
          "package": "yesod-auth",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:claimedKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function which will get the claimed identifier, if available, falling back to the OP local identifier.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eclaimedKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.2\n\u003c/p\u003e",
          "module": "Yesod.Auth.OpenId",
          "name": "credsIdentClaimed",
          "package": "yesod-auth",
          "signature": "Creds m -\u003e Text",
          "source": "src/Yesod-Auth-OpenId.html#credsIdentClaimed",
          "type": "function"
        },
        "index": {
          "description": "helper function which will get the claimed identifier if available falling back to the OP local identifier See claimedKey Since",
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "credsIdentClaimed",
          "normalized": "Creds a-\u003eText",
          "package": "yesod-auth",
          "partial": "Ident Claimed",
          "signature": "Creds m-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:credsIdentClaimed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "forwardUrl",
          "package": "yesod-auth",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-OpenId.html#forwardUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "forwardUrl",
          "package": "yesod-auth",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:forwardUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.OpenId",
          "name": "opLocalKey",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth-OpenId.html#opLocalKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth OpenId",
          "module": "Yesod.Auth.OpenId",
          "name": "opLocalKey",
          "package": "yesod-auth",
          "partial": "Local Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-OpenId.html#v:opLocalKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Rpxnow",
          "name": "Rpxnow",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Rpxnow.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth Rpxnow",
          "module": "Yesod.Auth.Rpxnow",
          "name": "Rpxnow",
          "package": "yesod-auth",
          "partial": "Rpxnow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Rpxnow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Rpxnow",
          "name": "authRpxnow",
          "package": "yesod-auth",
          "signature": "String-\u003e String-\u003e AuthPlugin m",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Rpxnow",
          "module": "Yesod.Auth.Rpxnow",
          "name": "authRpxnow",
          "normalized": "String-\u003eString-\u003eAuthPlugin a",
          "package": "yesod-auth",
          "partial": "Rpxnow",
          "signature": "String-\u003eString-\u003eAuthPlugin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth-Rpxnow.html#v:authRpxnow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "Auth",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "Auth",
          "package": "yesod-auth",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "Auth",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth-Routes.html#Auth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "Auth",
          "package": "yesod-auth",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the \u003ccode\u003eAuthId\u003c/code\u003e for a given site is a persistent ID, this will give the\n value for that entity. E.g.:\n\u003c/p\u003e\u003cpre\u003e type AuthId MySite = UserId\n AuthEntity MySite ~ User\n\u003c/pre\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "AuthEntity",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#AuthEntity",
          "type": "type"
        },
        "index": {
          "description": "If the AuthId for given site is persistent ID this will give the value for that entity E.g type AuthId MySite UserId AuthEntity MySite User Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "AuthEntity",
          "package": "yesod-auth",
          "partial": "Auth Entity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "AuthException",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#AuthException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "AuthException",
          "package": "yesod-auth",
          "partial": "Auth Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "AuthHandler",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#AuthHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "AuthHandler",
          "package": "yesod-auth",
          "partial": "Auth Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "AuthPlugin",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#AuthPlugin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "AuthPlugin",
          "package": "yesod-auth",
          "partial": "Auth Plugin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "AuthRoute",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#AuthRoute",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "AuthRoute",
          "package": "yesod-auth",
          "partial": "Auth Route",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:AuthRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser credentials\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "Creds",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#Creds",
          "type": "data"
        },
        "index": {
          "description": "User credentials",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "Creds",
          "package": "yesod-auth",
          "partial": "Creds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:Creds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type-safe URLs associated with a site argument.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "Route",
          "package": "yesod-auth",
          "signature": "Route",
          "type": "function"
        },
        "index": {
          "description": "The type-safe URLs associated with site argument",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "Route",
          "package": "yesod-auth",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "YesodAuth",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#YesodAuth",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "YesodAuth",
          "package": "yesod-auth",
          "partial": "Yesod Auth",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:YesodAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraint which states that the given site is an instance of \u003ccode\u003eYesodAuth\u003c/code\u003e\n and that its \u003ccode\u003eAuthId\u003c/code\u003e is in fact a persistent \u003ccode\u003eKey\u003c/code\u003e for the given value.\n This is the common case in Yesod, and means that you can easily look up the\n full informatin on a given user.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "YesodAuthPersist",
          "package": "yesod-auth",
          "source": "src/Yesod-Auth.html#YesodAuthPersist",
          "type": "type"
        },
        "index": {
          "description": "Constraint which states that the given site is an instance of YesodAuth and that its AuthId is in fact persistent Key for the given value This is the common case in Yesod and means that you can easily look up the full informatin on given user Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "YesodAuthPersist",
          "package": "yesod-auth",
          "partial": "Yesod Auth Persist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#t:YesodAuthPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "AuthPlugin",
          "package": "yesod-auth",
          "signature": "AuthPlugin",
          "source": "src/Yesod-Auth.html#AuthPlugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "AuthPlugin",
          "package": "yesod-auth",
          "partial": "Auth Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:AuthPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "Creds",
          "package": "yesod-auth",
          "signature": "Creds",
          "source": "src/Yesod-Auth.html#Creds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "Creds",
          "package": "yesod-auth",
          "partial": "Creds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:Creds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "InvalidFacebookResponse",
          "package": "yesod-auth",
          "signature": "InvalidFacebookResponse",
          "source": "src/Yesod-Auth.html#AuthException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "InvalidFacebookResponse",
          "package": "yesod-auth",
          "partial": "Invalid Facebook Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:InvalidFacebookResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "apDispatch",
          "package": "yesod-auth",
          "signature": "Method -\u003e [Piece] -\u003e AuthHandler master ()",
          "source": "src/Yesod-Auth.html#AuthPlugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "apDispatch",
          "normalized": "Method-\u003e[Piece]-\u003eAuthHandler a()",
          "package": "yesod-auth",
          "partial": "Dispatch",
          "signature": "Method-\u003e[Piece]-\u003eAuthHandler master()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:apDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "apLogin",
          "package": "yesod-auth",
          "signature": "(Route Auth -\u003e Route master) -\u003e WidgetT master IO ()",
          "source": "src/Yesod-Auth.html#AuthPlugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "apLogin",
          "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
          "package": "yesod-auth",
          "partial": "Login",
          "signature": "(Route Auth-\u003eRoute master)-\u003eWidgetT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:apLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "apName",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth.html#AuthPlugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "apName",
          "package": "yesod-auth",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:apName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an HTTP connection manager that is stored in the foundation\n type. This allows backends to reuse persistent connections. If none of\n the backends you're using use HTTP connections, you can safely return\n \u003ccode\u003eerror \"authHttpManager\"\u003c/code\u003e here.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "authHttpManager",
          "package": "yesod-auth",
          "signature": "master -\u003e Manager",
          "source": "src/Yesod-Auth.html#authHttpManager",
          "type": "method"
        },
        "index": {
          "description": "Return an HTTP connection manager that is stored in the foundation type This allows backends to reuse persistent connections If none of the backends you re using use HTTP connections you can safely return error authHttpManager here",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "authHttpManager",
          "normalized": "a-\u003eManager",
          "package": "yesod-auth",
          "partial": "Http Manager",
          "signature": "master-\u003eManager",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:authHttpManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especify the layout. Uses defaultLayout by default\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "authLayout",
          "package": "yesod-auth",
          "signature": "WidgetT master IO () -\u003e HandlerT master IO Html",
          "source": "src/Yesod-Auth.html#authLayout",
          "type": "method"
        },
        "index": {
          "description": "specify the layout Uses defaultLayout by default",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "authLayout",
          "normalized": "WidgetT a IO()-\u003eHandlerT a IO Html",
          "package": "yesod-auth",
          "partial": "Layout",
          "signature": "WidgetT master IO()-\u003eHandlerT master IO Html",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:authLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich authentication backends to use.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "authPlugins",
          "package": "yesod-auth",
          "signature": "master -\u003e [AuthPlugin master]",
          "source": "src/Yesod-Auth.html#authPlugins",
          "type": "method"
        },
        "index": {
          "description": "Which authentication backends to use",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "authPlugins",
          "normalized": "a-\u003e[AuthPlugin a]",
          "package": "yesod-auth",
          "partial": "Plugins",
          "signature": "master-\u003e[AuthPlugin master]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:authPlugins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears current user credentials for the session.\n\u003c/p\u003e\u003cp\u003eSince 1.1.7\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "clearCreds",
          "package": "yesod-auth",
          "signature": "Bool-\u003e HandlerT master IO ()",
          "type": "function"
        },
        "index": {
          "description": "Clears current user credentials for the session Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "clearCreds",
          "normalized": "Bool-\u003eHandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Creds",
          "signature": "Bool-\u003eHandlerT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:clearCreds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "credsExtra",
          "package": "yesod-auth",
          "signature": "[(Text, Text)]",
          "source": "src/Yesod-Auth.html#Creds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "credsExtra",
          "normalized": "[(Text,Text)]",
          "package": "yesod-auth",
          "partial": "Extra",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier. Exact meaning depends on plugin.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "credsIdent",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth.html#Creds",
          "type": "function"
        },
        "index": {
          "description": "Identifier Exact meaning depends on plugin",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "credsIdent",
          "package": "yesod-auth",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal session key used to hold the authentication information.\n\u003c/p\u003e\u003cp\u003eSince 1.2.3\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "credsKey",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth.html#credsKey",
          "type": "function"
        },
        "index": {
          "description": "Internal session key used to hold the authentication information Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "credsKey",
          "package": "yesod-auth",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow the user was authenticated\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "credsPlugin",
          "package": "yesod-auth",
          "signature": "Text",
          "source": "src/Yesod-Auth.html#Creds",
          "type": "function"
        },
        "index": {
          "description": "How the user was authenticated",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "credsPlugin",
          "package": "yesod-auth",
          "partial": "Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:credsPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves user credentials from the session, if user is authenticated.\n\u003c/p\u003e\u003cp\u003eThis function does \u003cem\u003enot\u003c/em\u003e confirm that the credentials are valid, see\n \u003ccode\u003emaybeAuthIdRaw\u003c/code\u003e for more information.\n\u003c/p\u003e\u003cp\u003eSince 1.1.2\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "defaultMaybeAuthId",
          "package": "yesod-auth",
          "signature": "HandlerT master IO (Maybe (AuthId master))",
          "source": "src/Yesod-Auth.html#defaultMaybeAuthId",
          "type": "function"
        },
        "index": {
          "description": "Retrieves user credentials from the session if user is authenticated This function does not confirm that the credentials are valid see maybeAuthIdRaw for more information Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "defaultMaybeAuthId",
          "package": "yesod-auth",
          "partial": "Maybe Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:defaultMaybeAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "getAuth",
          "package": "yesod-auth",
          "signature": "a -\u003e Auth",
          "source": "src/Yesod-Auth.html#getAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "getAuth",
          "normalized": "a-\u003eAuth",
          "package": "yesod-auth",
          "partial": "Auth",
          "signature": "a-\u003eAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:getAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the ID associated with the set of credentials.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "getAuthId",
          "package": "yesod-auth",
          "signature": "Creds master -\u003e HandlerT master IO (Maybe (AuthId master))",
          "source": "src/Yesod-Auth.html#getAuthId",
          "type": "method"
        },
        "index": {
          "description": "Determine the ID associated with the set of credentials",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "getAuthId",
          "normalized": "Creds a-\u003eHandlerT a IO(Maybe(AuthId a))",
          "package": "yesod-auth",
          "partial": "Auth Id",
          "signature": "Creds master-\u003eHandlerT master IO(Maybe(AuthId master))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:getAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault destination on successful login, if no other\n destination exists.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "loginDest",
          "package": "yesod-auth",
          "signature": "master -\u003e Route master",
          "source": "src/Yesod-Auth.html#loginDest",
          "type": "method"
        },
        "index": {
          "description": "Default destination on successful login if no other destination exists",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "loginDest",
          "normalized": "a-\u003eRoute a",
          "package": "yesod-auth",
          "partial": "Dest",
          "signature": "master-\u003eRoute master",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor HTML, set the message and redirect to the route.\n For JSON, send the message and a 401 status\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "loginErrorMessage",
          "package": "yesod-auth",
          "signature": "Route master -\u003e Text -\u003e HandlerT master m a",
          "source": "src/Yesod-Auth.html#loginErrorMessage",
          "type": "function"
        },
        "index": {
          "description": "For HTML set the message and redirect to the route For JSON send the message and status",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "loginErrorMessage",
          "normalized": "Route a-\u003eText-\u003eHandlerT a b c",
          "package": "yesod-auth",
          "partial": "Error Message",
          "signature": "Route master-\u003eText-\u003eHandlerT master m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth",
          "name": "loginErrorMessageI",
          "package": "yesod-auth",
          "signature": "Route child -\u003e AuthMessage -\u003e HandlerT child (HandlerT master m) a",
          "source": "src/Yesod-Auth.html#loginErrorMessageI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "loginErrorMessageI",
          "normalized": "Route a-\u003eAuthMessage-\u003eHandlerT a(HandlerT b c)d",
          "package": "yesod-auth",
          "partial": "Error Message",
          "signature": "Route child-\u003eAuthMessage-\u003eHandlerT child(HandlerT master m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginErrorMessageI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to show on the login page.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "loginHandler",
          "package": "yesod-auth",
          "signature": "AuthHandler master Html",
          "source": "src/Yesod-Auth.html#loginHandler",
          "type": "method"
        },
        "index": {
          "description": "What to show on the login page",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "loginHandler",
          "package": "yesod-auth",
          "partial": "Handler",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:loginHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault destination on successful logout, if no other\n destination exists.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "logoutDest",
          "package": "yesod-auth",
          "signature": "master -\u003e Route master",
          "source": "src/Yesod-Auth.html#logoutDest",
          "type": "method"
        },
        "index": {
          "description": "Default destination on successful logout if no other destination exists",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "logoutDest",
          "normalized": "a-\u003eRoute a",
          "package": "yesod-auth",
          "partial": "Dest",
          "signature": "master-\u003eRoute master",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:logoutDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeAuthId\u003c/a\u003e\u003c/code\u003e, but additionally look up the value associated\n with the user's database identifier to get the value in the database. This\n assumes that you are using a Persistent database.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "maybeAuth",
          "package": "yesod-auth",
          "signature": "HandlerT master IO (Maybe (Entity val))",
          "source": "src/Yesod-Auth.html#maybeAuth",
          "type": "function"
        },
        "index": {
          "description": "Similar to maybeAuthId but additionally look up the value associated with the user database identifier to get the value in the database This assumes that you are using Persistent database Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "maybeAuth",
          "package": "yesod-auth",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:maybeAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves user credentials, if user is authenticated.\n\u003c/p\u003e\u003cp\u003eBy default, this calls \u003ccode\u003e\u003ca\u003edefaultMaybeAuthId\u003c/a\u003e\u003c/code\u003e to get the user ID from the\n session. This can be overridden to allow authentication via other means,\n such as checking for a special token in a request header. This is\n especially useful for creating an API to be accessed via some means\n other than a browser.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "maybeAuthId",
          "package": "yesod-auth",
          "signature": "HandlerT master IO (Maybe (AuthId master))",
          "source": "src/Yesod-Auth.html#maybeAuthId",
          "type": "method"
        },
        "index": {
          "description": "Retrieves user credentials if user is authenticated By default this calls defaultMaybeAuthId to get the user ID from the session This can be overridden to allow authentication via other means such as checking for special token in request header This is especially useful for creating an API to be accessed via some means other than browser Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "maybeAuthId",
          "package": "yesod-auth",
          "partial": "Auth Id",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:maybeAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled on login error for HTTP requests. By default, calls\n \u003ccode\u003esetMessage\u003c/code\u003e and redirects to \u003ccode\u003edest\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "onErrorHtml",
          "package": "yesod-auth",
          "signature": "Route master -\u003e Text -\u003e HandlerT master m Html",
          "source": "src/Yesod-Auth.html#onErrorHtml",
          "type": "method"
        },
        "index": {
          "description": "Called on login error for HTTP requests By default calls setMessage and redirects to dest",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "onErrorHtml",
          "normalized": "Route a-\u003eText-\u003eHandlerT a b Html",
          "package": "yesod-auth",
          "partial": "Error Html",
          "signature": "Route master-\u003eText-\u003eHandlerT master m Html",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:onErrorHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled on a successful login. By default, calls\n \u003ccode\u003esetMessageI NowLoggedIn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "onLogin",
          "package": "yesod-auth",
          "signature": "HandlerT master IO ()",
          "source": "src/Yesod-Auth.html#onLogin",
          "type": "method"
        },
        "index": {
          "description": "Called on successful login By default calls setMessageI NowLoggedIn",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "onLogin",
          "normalized": "HandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Login",
          "signature": "HandlerT master IO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:onLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled on logout. By default, does nothing\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "onLogout",
          "package": "yesod-auth",
          "signature": "HandlerT master IO ()",
          "source": "src/Yesod-Auth.html#onLogout",
          "type": "method"
        },
        "index": {
          "description": "Called on logout By default does nothing",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "onLogout",
          "normalized": "HandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Logout",
          "signature": "HandlerT master IO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:onLogout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter login and logout, redirect to the referring page, instead of\n \u003ccode\u003e\u003ca\u003eloginDest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elogoutDest\u003c/a\u003e\u003c/code\u003e. Default is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "redirectToReferer",
          "package": "yesod-auth",
          "signature": "master -\u003e Bool",
          "source": "src/Yesod-Auth.html#redirectToReferer",
          "type": "method"
        },
        "index": {
          "description": "After login and logout redirect to the referring page instead of loginDest and logoutDest Default is False",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "redirectToReferer",
          "normalized": "a-\u003eBool",
          "package": "yesod-auth",
          "partial": "To Referer",
          "signature": "master-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:redirectToReferer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for i18n of messages provided by this package.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "renderAuthMessage",
          "package": "yesod-auth",
          "signature": "renderAuthMessage",
          "source": "src/Yesod-Auth.html#renderAuthMessage",
          "type": "method"
        },
        "index": {
          "description": "Used for i18n of messages provided by this package",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "renderAuthMessage",
          "package": "yesod-auth",
          "partial": "Auth Message",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:renderAuthMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeAuth\u003c/a\u003e\u003c/code\u003e, but redirects to a login page if user is not\n authenticated.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "requireAuth",
          "package": "yesod-auth",
          "signature": "HandlerT master IO (Entity (AuthEntity master))",
          "source": "src/Yesod-Auth.html#requireAuth",
          "type": "function"
        },
        "index": {
          "description": "Similar to maybeAuth but redirects to login page if user is not authenticated Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "requireAuth",
          "package": "yesod-auth",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:requireAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeAuthId\u003c/a\u003e\u003c/code\u003e, but redirects to a login page if user is not\n authenticated.\n\u003c/p\u003e\u003cp\u003eSince 1.1.0\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "requireAuthId",
          "package": "yesod-auth",
          "signature": "HandlerT master IO (AuthId master)",
          "source": "src/Yesod-Auth.html#requireAuthId",
          "type": "function"
        },
        "index": {
          "description": "Similar to maybeAuthId but redirects to login page if user is not authenticated Since",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "requireAuthId",
          "package": "yesod-auth",
          "partial": "Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:requireAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets user credentials for the session after checking them with authentication backends.\n\u003c/p\u003e",
          "module": "Yesod.Auth",
          "name": "setCreds",
          "package": "yesod-auth",
          "signature": "Bool-\u003e Creds master-\u003e HandlerT master IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets user credentials for the session after checking them with authentication backends",
          "hierarchy": "Yesod Auth",
          "module": "Yesod.Auth",
          "name": "setCreds",
          "normalized": "Bool-\u003eCreds a-\u003eHandlerT a IO()",
          "package": "yesod-auth",
          "partial": "Creds",
          "signature": "Bool-\u003eCreds master-\u003eHandlerT master IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth/docs/Yesod-Auth.html#v:setCreds"
      }
    }
  ]
]