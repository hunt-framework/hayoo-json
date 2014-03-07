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
        "word": "happstack-authenticate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides templates and routing functions which can\n be used to integrate authentication into your site.\n\u003c/p\u003e\u003cp\u003eIn most cases, you only need to call the \u003ccode\u003e\u003ca\u003ehandleAuth\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003ehanldeProfile\u003c/code\u003e functions. The other functions are exported in case\n you wish to create your own alternatives to \u003ccode\u003e\u003ca\u003ehandleAuth\u003c/a\u003e\u003c/code\u003e /\n \u003ccode\u003e\u003ca\u003ehandleProfile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "Templates",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Blaze-Templates.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides templates and routing functions which can be used to integrate authentication into your site In most cases you only need to call the handleAuth and hanldeProfile functions The other functions are exported in case you wish to create your own alternatives to handleAuth handleProfile",
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "Templates",
          "package": "happstack-authenticate",
          "partial": "Templates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "addAuthPage",
          "package": "happstack-authenticate",
          "signature": "Maybe Credentials -\u003e m Html",
          "source": "src/Happstack-Auth-Blaze-Templates.html#addAuthPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "addAuthPage",
          "normalized": "Maybe Credentials-\u003ea Html",
          "package": "happstack-authenticate",
          "partial": "Auth Page",
          "signature": "Maybe Credentials-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:addAuthPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "authPicker",
          "package": "happstack-authenticate",
          "signature": "Set AuthId -\u003e m Html",
          "source": "src/Happstack-Auth-Blaze-Templates.html#authPicker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "authPicker",
          "normalized": "Set AuthId-\u003ea Html",
          "package": "happstack-authenticate",
          "partial": "Picker",
          "signature": "Set AuthId-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:authPicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is a simple entry point into \u003ccode\u003ehappstack-authenticate\u003c/code\u003e that\n provides reasonable default behavior. A majority of the time you\n will just call this function.\n\u003c/p\u003e",
          "module": "[\"Happstack.Auth.Blaze.Templates\",\"Happstack.Auth\"]",
          "name": "authProfileHandler",
          "package": "happstack-authenticate",
          "signature": "Text-\u003e Text-\u003e AcidState AuthState-\u003e AcidState ProfileState-\u003e (String -\u003e Html -\u003e Html -\u003e m Response)-\u003e Maybe Credentials-\u003e Maybe Text-\u003e Text-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:authProfileHandler\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:authProfileHandler\"]"
        },
        "index": {
          "description": "this is simple entry point into happstack-authenticate that provides reasonable default behavior majority of the time you will just call this function",
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "authProfileHandler",
          "normalized": "Text-\u003eText-\u003eAcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Profile Handler",
          "signature": "Text-\u003eText-\u003eAcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:authProfileHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "changePasswordForm",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e UserPass -\u003e AuthForm v Text",
          "source": "src/Happstack-Auth-Blaze-Templates.html#changePasswordForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "changePasswordForm",
          "normalized": "AcidState AuthState-\u003eUserPass-\u003eAuthForm a Text",
          "package": "happstack-authenticate",
          "partial": "Password Form",
          "signature": "AcidState AuthState-\u003eUserPass-\u003eAuthForm v Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:changePasswordForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "changePasswordPage",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e (String -\u003e Html -\u003e Html -\u003e m Response) -\u003e AuthURL -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#changePasswordPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "changePasswordPage",
          "normalized": "AcidState AuthState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eAuthURL-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Password Page",
          "signature": "AcidState AuthState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eAuthURL-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:changePasswordPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "createAccountPage",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e (String -\u003e Html -\u003e Html -\u003e m Response) -\u003e Text -\u003e AuthURL -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#createAccountPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "createAccountPage",
          "normalized": "AcidState AuthState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eText-\u003eAuthURL-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Account Page",
          "signature": "AcidState AuthState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eText-\u003eAuthURL-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:createAccountPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "genericOpenIdPage",
          "package": "happstack-authenticate",
          "signature": "(String -\u003e Html -\u003e Html -\u003e m Response) -\u003e AuthURL -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#genericOpenIdPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "genericOpenIdPage",
          "normalized": "(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eAuthURL-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Open Id Page",
          "signature": "(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eAuthURL-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:genericOpenIdPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "googlePage",
          "package": "happstack-authenticate",
          "signature": "AuthURL -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#googlePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "googlePage",
          "normalized": "AuthURL-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "AuthURL-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:googlePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction which takes care of all \u003ccode\u003e\u003ca\u003eAuthURL\u003c/a\u003e\u003c/code\u003e routes.\n\u003c/p\u003e\u003cp\u003eThe caller provides a page template function which will be used to\n render pages. The provided page template function takes three\n arguments:\n\u003c/p\u003e\u003cpre\u003e    String -- ^ string to use in the \u003ctitle\u003e tag\n -\u003e Html   -- ^ extra headers to add to the \u003chead\u003e tag\n -\u003e Html   -- ^ contents to stick in the \u003cbody\u003e tag\n\u003c/pre\u003e",
          "module": "[\"Happstack.Auth.Blaze.Templates\",\"Happstack.Auth\"]",
          "name": "handleAuth",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState-\u003e (String -\u003e Html -\u003e Html -\u003e m Response)-\u003e Maybe Credentials-\u003e Maybe Text-\u003e Text-\u003e AuthURL-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleAuth\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:handleAuth\"]"
        },
        "index": {
          "description": "Function which takes care of all AuthURL routes The caller provides page template function which will be used to render pages The provided page template function takes three arguments String string to use in the title tag Html extra headers to add to the head tag Html contents to stick in the body tag",
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "handleAuth",
          "normalized": "AcidState AuthState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003eAuthURL-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Auth",
          "signature": "AcidState AuthState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003eAuthURL-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Blaze.Templates\",\"Happstack.Auth\"]",
          "name": "handleAuthProfile",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AcidState ProfileState -\u003e (String -\u003e Html -\u003e Html -\u003e m Response) -\u003e Maybe Credentials -\u003e Maybe Text -\u003e Text -\u003e AuthProfileURL -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#handleAuthProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleAuthProfile\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:handleAuthProfile\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "handleAuthProfile",
          "normalized": "AcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003eAuthProfileURL-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Auth Profile",
          "signature": "AcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003eAuthProfileURL-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleAuthProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Blaze.Templates\",\"Happstack.Auth\"]",
          "name": "handleAuthProfileRouteT",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AcidState ProfileState -\u003e (String -\u003e Html -\u003e Html -\u003e m Response) -\u003e Maybe Credentials -\u003e Maybe Text -\u003e Text -\u003e AuthProfileURL -\u003e RouteT AuthProfileURL m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#handleAuthProfileRouteT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleAuthProfileRouteT\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:handleAuthProfileRouteT\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "handleAuthProfileRouteT",
          "normalized": "AcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003eAuthProfileURL-\u003eRouteT AuthProfileURL a Response",
          "package": "happstack-authenticate",
          "partial": "Auth Profile Route",
          "signature": "AcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eMaybe Credentials-\u003eMaybe Text-\u003eText-\u003eAuthProfileURL-\u003eRouteT AuthProfileURL m Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleAuthProfileRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction which takes care of all \u003ccode\u003e\u003ca\u003eProfileURL\u003c/a\u003e\u003c/code\u003e routes.\n\u003c/p\u003e\u003cp\u003eThe caller provides a page template function which will be used to\n render pages. The provided page template function takes three\n arguments:\n\u003c/p\u003e\u003cpre\u003e    String -- ^ string to use in the \u003ctitle\u003e tag\n -\u003e Html   -- ^ extra headers to add to the \u003chead\u003e tag\n -\u003e Html   -- ^ contents to stick in the \u003cbody\u003e tag\n\u003c/pre\u003e",
          "module": "[\"Happstack.Auth.Blaze.Templates\",\"Happstack.Auth\"]",
          "name": "handleProfile",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState-\u003e AcidState ProfileState-\u003e (String -\u003e Html -\u003e Html -\u003e m Response)-\u003e Text-\u003e ProfileURL-\u003e m Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleProfile\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:handleProfile\"]"
        },
        "index": {
          "description": "Function which takes care of all ProfileURL routes The caller provides page template function which will be used to render pages The provided page template function takes three arguments String string to use in the title tag Html extra headers to add to the head tag Html contents to stick in the body tag",
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "handleProfile",
          "normalized": "AcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eText-\u003eProfileURL-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Profile",
          "signature": "AcidState AuthState-\u003eAcidState ProfileState-\u003e(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eText-\u003eProfileURL-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:handleProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "liveJournalForm",
          "package": "happstack-authenticate",
          "signature": "AuthForm m Text",
          "source": "src/Happstack-Auth-Blaze-Templates.html#liveJournalForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "liveJournalForm",
          "package": "happstack-authenticate",
          "partial": "Journal Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:liveJournalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "liveJournalPage",
          "package": "happstack-authenticate",
          "signature": "(String -\u003e Html -\u003e Html -\u003e m Response) -\u003e AuthURL -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#liveJournalPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "liveJournalPage",
          "normalized": "(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eAuthURL-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Journal Page",
          "signature": "(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eAuthURL-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:liveJournalPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "localLoginPage",
          "package": "happstack-authenticate",
          "signature": "AcidState (EventState UserPassIdAuthIds) -\u003e (a -\u003e a1 -\u003e Html -\u003e m Response) -\u003e AuthURL -\u003e Text -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#localLoginPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "localLoginPage",
          "normalized": "AcidState(EventState UserPassIdAuthIds)-\u003e(a-\u003ea-\u003eHtml-\u003eb Response)-\u003eAuthURL-\u003eText-\u003eb Response",
          "package": "happstack-authenticate",
          "partial": "Login Page",
          "signature": "AcidState(EventState UserPassIdAuthIds)-\u003e(a-\u003ea-\u003eHtml-\u003em Response)-\u003eAuthURL-\u003eText-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:localLoginPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "loginPage",
          "package": "happstack-authenticate",
          "signature": "Maybe Credentials -\u003e m Html",
          "source": "src/Happstack-Auth-Blaze-Templates.html#loginPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "loginPage",
          "normalized": "Maybe Credentials-\u003ea Html",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "Maybe Credentials-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:loginPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "logoutPage",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e m Html",
          "source": "src/Happstack-Auth-Blaze-Templates.html#logoutPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "logoutPage",
          "normalized": "AcidState AuthState-\u003ea Html",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "AcidState AuthState-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:logoutPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "myspacePage",
          "package": "happstack-authenticate",
          "signature": "(String -\u003e Html -\u003e Html -\u003e m Response) -\u003e AuthURL -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#myspacePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "myspacePage",
          "normalized": "(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eAuthURL-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eAuthURL-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:myspacePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "newAccountForm",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AuthForm v (AuthId, UserPassId)",
          "source": "src/Happstack-Auth-Blaze-Templates.html#newAccountForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "newAccountForm",
          "normalized": "AcidState AuthState-\u003eAuthForm a(AuthId,UserPassId)",
          "package": "happstack-authenticate",
          "partial": "Account Form",
          "signature": "AcidState AuthState-\u003eAuthForm v(AuthId,UserPassId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:newAccountForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "personalityPicker",
          "package": "happstack-authenticate",
          "signature": "Set Profile -\u003e m Html",
          "source": "src/Happstack-Auth-Blaze-Templates.html#personalityPicker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "personalityPicker",
          "normalized": "Set Profile-\u003ea Html",
          "package": "happstack-authenticate",
          "partial": "Picker",
          "signature": "Set Profile-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:personalityPicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "providerPage",
          "package": "happstack-authenticate",
          "signature": "(String -\u003e Html -\u003e Html -\u003e m Response) -\u003e OpenIdProvider -\u003e AuthURL -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#providerPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "providerPage",
          "normalized": "(String-\u003eHtml-\u003eHtml-\u003ea Response)-\u003eOpenIdProvider-\u003eAuthURL-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "(String-\u003eHtml-\u003eHtml-\u003em Response)-\u003eOpenIdProvider-\u003eAuthURL-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:providerPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "yahooPage",
          "package": "happstack-authenticate",
          "signature": "AuthURL -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Blaze-Templates.html#yahooPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Blaze Templates",
          "module": "Happstack.Auth.Blaze.Templates",
          "name": "yahooPage",
          "normalized": "AuthURL-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "AuthURL-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Blaze-Templates.html#v:yahooPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "Auth",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "Auth",
          "package": "happstack-authenticate",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthMethod",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AddAuthMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthMethod",
          "package": "happstack-authenticate",
          "partial": "Add Auth Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AddAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthToken",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AddAuthToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthToken",
          "package": "happstack-authenticate",
          "partial": "Add Auth Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AddAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthUserPassId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AddAuthUserPassId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthUserPassId",
          "package": "happstack-authenticate",
          "partial": "Add Auth User Pass Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AddAuthUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthState",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AskAuthState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthState",
          "package": "happstack-authenticate",
          "partial": "Ask Auth State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AskAuthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthToken",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AskAuthToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthToken",
          "package": "happstack-authenticate",
          "partial": "Ask Auth Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AskAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskUserPass",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AskUserPass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskUserPass",
          "package": "happstack-authenticate",
          "partial": "Ask User Pass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AskUserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthId",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis links an authentication method (such as on OpenId \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003eFacebookId\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eUserPassId\u003c/a\u003e\u003c/code\u003e) to an \u003ccode\u003e\u003ca\u003eAuthId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMap",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMap",
          "type": "data"
        },
        "index": {
          "description": "This links an authentication method such as on OpenId Identifier FacebookId or UserPassId to an AuthId",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMap",
          "package": "happstack-authenticate",
          "partial": "Auth Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AuthMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMethod",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMethod",
          "package": "happstack-authenticate",
          "partial": "Auth Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMethod_v1",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod_v1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMethod_v1",
          "package": "happstack-authenticate",
          "partial": "Auth Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AuthMethod_v1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthState",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthState",
          "package": "happstack-authenticate",
          "partial": "Auth State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AuthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthToken",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthToken",
          "package": "happstack-authenticate",
          "partial": "Auth Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:AuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "CheckUserPass",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#CheckUserPass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "CheckUserPass",
          "package": "happstack-authenticate",
          "partial": "Check User Pass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:CheckUserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "CreateUserPass",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#CreateUserPass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "CreateUserPass",
          "package": "happstack-authenticate",
          "partial": "Create User Pass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:CreateUserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "DeleteAuthToken",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#DeleteAuthToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "DeleteAuthToken",
          "package": "happstack-authenticate",
          "partial": "Delete Auth Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:DeleteAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookAuthIds",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#FacebookAuthIds",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookAuthIds",
          "package": "happstack-authenticate",
          "partial": "Facebook Auth Ids",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:FacebookAuthIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#FacebookId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookId",
          "package": "happstack-authenticate",
          "partial": "Facebook Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:FacebookId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "GenAuthId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#GenAuthId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "GenAuthId",
          "package": "happstack-authenticate",
          "partial": "Gen Auth Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:GenAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "GetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#GetDefaultSessionTimeout",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "GetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "partial": "Get Default Session Timeout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:GetDefaultSessionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "HashedPass",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#HashedPass",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "HashedPass",
          "package": "happstack-authenticate",
          "partial": "Hashed Pass",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:HashedPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "IdentifierAuthIds",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#IdentifierAuthIds",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "IdentifierAuthIds",
          "package": "happstack-authenticate",
          "partial": "Identifier Auth Ids",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:IdentifierAuthIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "NewAuthMethod",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#NewAuthMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "NewAuthMethod",
          "package": "happstack-authenticate",
          "partial": "New Auth Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:NewAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthIdentifier",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#RemoveAuthIdentifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthIdentifier",
          "package": "happstack-authenticate",
          "partial": "Remove Auth Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:RemoveAuthIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthUserPassId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#RemoveAuthUserPassId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthUserPassId",
          "package": "happstack-authenticate",
          "partial": "Remove Auth User Pass Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:RemoveAuthUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#SetDefaultSessionTimeout",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "partial": "Set Default Session Timeout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:SetDefaultSessionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetPassword",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#SetPassword",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetPassword",
          "package": "happstack-authenticate",
          "partial": "Set Password",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:SetPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetUserName",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#SetUserName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetUserName",
          "package": "happstack-authenticate",
          "partial": "Set User Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:SetUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UpdateAuthToken",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#UpdateAuthToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UpdateAuthToken",
          "package": "happstack-authenticate",
          "partial": "Update Auth Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:UpdateAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOTE: The Eq and Ord instances are 'case-insensitive'. They apply \u003ccode\u003etoCaseFold\u003c/code\u003e before comparing.\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserName",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#UserName",
          "type": "newtype"
        },
        "index": {
          "description": "NOTE The Eq and Ord instances are case-insensitive They apply toCaseFold before comparing",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserName",
          "package": "happstack-authenticate",
          "partial": "User Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:UserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPass",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPass",
          "package": "happstack-authenticate",
          "partial": "User Pass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:UserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerrors that can occur when working with \u003ccode\u003e\u003ca\u003eUserPass\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassError",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassError",
          "type": "data"
        },
        "index": {
          "description": "errors that can occur when working with UserPass",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassError",
          "package": "happstack-authenticate",
          "partial": "User Pass Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:UserPassError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassId",
          "package": "happstack-authenticate",
          "partial": "User Pass Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:UserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassIdAuthIds",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassIdAuthIds",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassIdAuthIds",
          "package": "happstack-authenticate",
          "partial": "User Pass Id Auth Ids",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#t:UserPassIdAuthIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthMethod",
          "package": "happstack-authenticate",
          "signature": "AddAuthMethod AuthMethod AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#AddAuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthMethod",
          "package": "happstack-authenticate",
          "partial": "Add Auth Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AddAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthToken",
          "package": "happstack-authenticate",
          "signature": "AddAuthToken AuthToken",
          "source": "src/Happstack-Auth-Core-Auth.html#AddAuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthToken",
          "package": "happstack-authenticate",
          "partial": "Add Auth Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AddAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthUserPassId",
          "package": "happstack-authenticate",
          "signature": "AddAuthUserPassId UserPassId AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#AddAuthUserPassId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AddAuthUserPassId",
          "package": "happstack-authenticate",
          "partial": "Add Auth User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AddAuthUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthState",
          "package": "happstack-authenticate",
          "signature": "AskAuthState",
          "source": "src/Happstack-Auth-Core-Auth.html#AskAuthState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthState",
          "package": "happstack-authenticate",
          "partial": "Ask Auth State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AskAuthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthToken",
          "package": "happstack-authenticate",
          "signature": "AskAuthToken String",
          "source": "src/Happstack-Auth-Core-Auth.html#AskAuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskAuthToken",
          "package": "happstack-authenticate",
          "partial": "Ask Auth Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AskAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskUserPass",
          "package": "happstack-authenticate",
          "signature": "AskUserPass UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#AskUserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AskUserPass",
          "package": "happstack-authenticate",
          "partial": "Ask User Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AskUserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthFacebook",
          "package": "happstack-authenticate",
          "signature": "AuthFacebook",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthFacebook",
          "package": "happstack-authenticate",
          "partial": "Auth Facebook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthFacebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthId",
          "package": "happstack-authenticate",
          "signature": "AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthId",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthIdentifier",
          "package": "happstack-authenticate",
          "signature": "AuthIdentifier",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthIdentifier",
          "package": "happstack-authenticate",
          "partial": "Auth Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthIdentifier_v1",
          "package": "happstack-authenticate",
          "signature": "AuthIdentifier_v1",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod_v1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthIdentifier_v1",
          "package": "happstack-authenticate",
          "partial": "Auth Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthIdentifier_v1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMap",
          "package": "happstack-authenticate",
          "signature": "AuthMap",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthMap",
          "package": "happstack-authenticate",
          "partial": "Auth Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "AuthState",
          "package": "happstack-authenticate",
          "signature": "AuthState",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthState\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:AuthState\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthState",
          "package": "happstack-authenticate",
          "partial": "Auth State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthToken",
          "package": "happstack-authenticate",
          "signature": "AuthToken",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthToken",
          "package": "happstack-authenticate",
          "partial": "Auth Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthUserPassId",
          "package": "happstack-authenticate",
          "signature": "AuthUserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthUserPassId",
          "package": "happstack-authenticate",
          "partial": "Auth User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthUserPassId_v1",
          "package": "happstack-authenticate",
          "signature": "AuthUserPassId_v1",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod_v1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "AuthUserPassId_v1",
          "package": "happstack-authenticate",
          "partial": "Auth User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:AuthUserPassId_v1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "CheckUserPass",
          "package": "happstack-authenticate",
          "signature": "CheckUserPass Text Text",
          "source": "src/Happstack-Auth-Core-Auth.html#CheckUserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "CheckUserPass",
          "package": "happstack-authenticate",
          "partial": "Check User Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:CheckUserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "CreateUserPass",
          "package": "happstack-authenticate",
          "signature": "CreateUserPass UserName HashedPass",
          "source": "src/Happstack-Auth-Core-Auth.html#CreateUserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "CreateUserPass",
          "package": "happstack-authenticate",
          "partial": "Create User Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:CreateUserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "DeleteAuthToken",
          "package": "happstack-authenticate",
          "signature": "DeleteAuthToken String",
          "source": "src/Happstack-Auth-Core-Auth.html#DeleteAuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "DeleteAuthToken",
          "package": "happstack-authenticate",
          "partial": "Delete Auth Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:DeleteAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookAuthIds",
          "package": "happstack-authenticate",
          "signature": "FacebookAuthIds FacebookId",
          "source": "src/Happstack-Auth-Core-Auth.html#FacebookAuthIds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookAuthIds",
          "package": "happstack-authenticate",
          "partial": "Facebook Auth Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:FacebookAuthIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookId",
          "package": "happstack-authenticate",
          "signature": "FacebookId",
          "source": "src/Happstack-Auth-Core-Auth.html#FacebookId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "FacebookId",
          "package": "happstack-authenticate",
          "partial": "Facebook Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:FacebookId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "GenAuthId",
          "package": "happstack-authenticate",
          "signature": "GenAuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#GenAuthId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "GenAuthId",
          "package": "happstack-authenticate",
          "partial": "Gen Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:GenAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "GetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "signature": "GetDefaultSessionTimeout",
          "source": "src/Happstack-Auth-Core-Auth.html#GetDefaultSessionTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "GetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "partial": "Get Default Session Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:GetDefaultSessionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "HashedPass",
          "package": "happstack-authenticate",
          "signature": "HashedPass ByteString",
          "source": "src/Happstack-Auth-Core-Auth.html#HashedPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "HashedPass",
          "package": "happstack-authenticate",
          "partial": "Hashed Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:HashedPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "IdentifierAuthIds",
          "package": "happstack-authenticate",
          "signature": "IdentifierAuthIds Identifier",
          "source": "src/Happstack-Auth-Core-Auth.html#IdentifierAuthIds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "IdentifierAuthIds",
          "package": "happstack-authenticate",
          "partial": "Identifier Auth Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:IdentifierAuthIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "InvalidPassword",
          "package": "happstack-authenticate",
          "signature": "InvalidPassword",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "InvalidPassword",
          "package": "happstack-authenticate",
          "partial": "Invalid Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:InvalidPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "InvalidUserName",
          "package": "happstack-authenticate",
          "signature": "InvalidUserName UserName",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "InvalidUserName",
          "package": "happstack-authenticate",
          "partial": "Invalid User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:InvalidUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "InvalidUserPassId",
          "package": "happstack-authenticate",
          "signature": "InvalidUserPassId UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "InvalidUserPassId",
          "package": "happstack-authenticate",
          "partial": "Invalid User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:InvalidUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "NewAuthMethod",
          "package": "happstack-authenticate",
          "signature": "NewAuthMethod AuthMethod",
          "source": "src/Happstack-Auth-Core-Auth.html#NewAuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "NewAuthMethod",
          "package": "happstack-authenticate",
          "partial": "New Auth Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:NewAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthIdentifier",
          "package": "happstack-authenticate",
          "signature": "RemoveAuthIdentifier Identifier AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#RemoveAuthIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthIdentifier",
          "package": "happstack-authenticate",
          "partial": "Remove Auth Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:RemoveAuthIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthUserPassId",
          "package": "happstack-authenticate",
          "signature": "RemoveAuthUserPassId UserPassId AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#RemoveAuthUserPassId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "RemoveAuthUserPassId",
          "package": "happstack-authenticate",
          "partial": "Remove Auth User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:RemoveAuthUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "signature": "SetDefaultSessionTimeout Int",
          "source": "src/Happstack-Auth-Core-Auth.html#SetDefaultSessionTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetDefaultSessionTimeout",
          "package": "happstack-authenticate",
          "partial": "Set Default Session Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:SetDefaultSessionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetPassword",
          "package": "happstack-authenticate",
          "signature": "SetPassword UserPassId HashedPass",
          "source": "src/Happstack-Auth-Core-Auth.html#SetPassword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetPassword",
          "package": "happstack-authenticate",
          "partial": "Set Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:SetPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetUserName",
          "package": "happstack-authenticate",
          "signature": "SetUserName UserPassId Text",
          "source": "src/Happstack-Auth-Core-Auth.html#SetUserName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "SetUserName",
          "package": "happstack-authenticate",
          "partial": "Set User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:SetUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UpdateAuthToken",
          "package": "happstack-authenticate",
          "signature": "UpdateAuthToken AuthToken",
          "source": "src/Happstack-Auth-Core-Auth.html#UpdateAuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UpdateAuthToken",
          "package": "happstack-authenticate",
          "partial": "Update Auth Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:UpdateAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserName",
          "package": "happstack-authenticate",
          "signature": "UserName",
          "source": "src/Happstack-Auth-Core-Auth.html#UserName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserName",
          "package": "happstack-authenticate",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:UserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPass",
          "package": "happstack-authenticate",
          "signature": "UserPass",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPass",
          "package": "happstack-authenticate",
          "partial": "User Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:UserPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassId",
          "package": "happstack-authenticate",
          "signature": "UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassId",
          "package": "happstack-authenticate",
          "partial": "User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:UserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassIdAuthIds",
          "package": "happstack-authenticate",
          "signature": "UserPassIdAuthIds UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassIdAuthIds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UserPassIdAuthIds",
          "package": "happstack-authenticate",
          "partial": "User Pass Id Auth Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:UserPassIdAuthIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "UsernameInUse",
          "package": "happstack-authenticate",
          "signature": "UsernameInUse UserName",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "UsernameInUse",
          "package": "happstack-authenticate",
          "partial": "Username In Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:UsernameInUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "addAuthCookie",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e Maybe AuthId -\u003e AuthMethod -\u003e m ()",
          "source": "src/Happstack-Auth-Core-Auth.html#addAuthCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "addAuthCookie",
          "normalized": "AcidState AuthState-\u003eMaybe AuthId-\u003eAuthMethod-\u003ea()",
          "package": "happstack-authenticate",
          "partial": "Auth Cookie",
          "signature": "AcidState AuthState-\u003eMaybe AuthId-\u003eAuthMethod-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:addAuthCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amAuthId",
          "package": "happstack-authenticate",
          "signature": "AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amAuthId",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amFacebookId",
          "package": "happstack-authenticate",
          "signature": "FacebookId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amFacebookId",
          "package": "happstack-authenticate",
          "partial": "Facebook Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amFacebookId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amIdentifier",
          "package": "happstack-authenticate",
          "signature": "Identifier",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amIdentifier",
          "package": "happstack-authenticate",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amIdentifier_v1",
          "package": "happstack-authenticate",
          "signature": "Identifier",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod_v1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amIdentifier_v1",
          "package": "happstack-authenticate",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amIdentifier_v1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amMethod",
          "package": "happstack-authenticate",
          "signature": "AuthMethod",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amMethod",
          "package": "happstack-authenticate",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amUserPassId",
          "package": "happstack-authenticate",
          "signature": "UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amUserPassId",
          "package": "happstack-authenticate",
          "partial": "User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "amUserPassId_v1",
          "package": "happstack-authenticate",
          "signature": "UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthMethod_v1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "amUserPassId_v1",
          "package": "happstack-authenticate",
          "partial": "User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:amUserPassId_v1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "authMaps",
          "package": "happstack-authenticate",
          "signature": "AuthMaps",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:authMaps\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:authMaps\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "authMaps",
          "package": "happstack-authenticate",
          "partial": "Maps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:authMaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "authTokens",
          "package": "happstack-authenticate",
          "signature": "AuthTokens",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:authTokens\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:authTokens\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "authTokens",
          "package": "happstack-authenticate",
          "partial": "Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:authTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "defaultSessionTimeout",
          "package": "happstack-authenticate",
          "signature": "Int",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:defaultSessionTimeout\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:defaultSessionTimeout\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "defaultSessionTimeout",
          "package": "happstack-authenticate",
          "partial": "Session Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:defaultSessionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "deleteAuthCookie",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e m ()",
          "source": "src/Happstack-Auth-Core-Auth.html#deleteAuthCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "deleteAuthCookie",
          "normalized": "AcidState AuthState-\u003ea()",
          "package": "happstack-authenticate",
          "partial": "Auth Cookie",
          "signature": "AcidState AuthState-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:deleteAuthCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate an new authentication token\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "genAuthToken",
          "package": "happstack-authenticate",
          "signature": "Maybe AuthId -\u003e AuthMethod -\u003e Int -\u003e m AuthToken",
          "source": "src/Happstack-Auth-Core-Auth.html#genAuthToken",
          "type": "function"
        },
        "index": {
          "description": "generate an new authentication token",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "genAuthToken",
          "normalized": "Maybe AuthId-\u003eAuthMethod-\u003eInt-\u003ea AuthToken",
          "package": "happstack-authenticate",
          "partial": "Auth Token",
          "signature": "Maybe AuthId-\u003eAuthMethod-\u003eInt-\u003em AuthToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:genAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "getAuthId",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e m (Maybe AuthId)",
          "source": "src/Happstack-Auth-Core-Auth.html#getAuthId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "getAuthId",
          "normalized": "AcidState AuthState-\u003ea(Maybe AuthId)",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "signature": "AcidState AuthState-\u003em(Maybe AuthId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:getAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "getAuthToken",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e m (Maybe AuthToken)",
          "source": "src/Happstack-Auth-Core-Auth.html#getAuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "getAuthToken",
          "normalized": "AcidState AuthState-\u003ea(Maybe AuthToken)",
          "package": "happstack-authenticate",
          "partial": "Auth Token",
          "signature": "AcidState AuthState-\u003em(Maybe AuthToken)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:getAuthToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea reasonable initial \u003ccode\u003e\u003ca\u003eAuthState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "initialAuthState",
          "package": "happstack-authenticate",
          "signature": "AuthState",
          "source": "src/Happstack-Auth-Core-Auth.html#initialAuthState",
          "type": "function"
        },
        "index": {
          "description": "reasonable initial AuthState",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "initialAuthState",
          "package": "happstack-authenticate",
          "partial": "Auth State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:initialAuthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a password string\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "mkHashedPass",
          "package": "happstack-authenticate",
          "signature": "Text-\u003e IO HashedPass",
          "type": "function"
        },
        "index": {
          "description": "hash password string",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "mkHashedPass",
          "normalized": "Text-\u003eIO HashedPass",
          "package": "happstack-authenticate",
          "partial": "Hashed Pass",
          "signature": "Text-\u003eIO HashedPass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:mkHashedPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "nextAuthId",
          "package": "happstack-authenticate",
          "signature": "AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:nextAuthId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:nextAuthId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "nextAuthId",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:nextAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "nextUserPassId",
          "package": "happstack-authenticate",
          "signature": "UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:nextUserPassId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:nextUserPassId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "nextUserPassId",
          "package": "happstack-authenticate",
          "partial": "User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:nextUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenAuthId",
          "package": "happstack-authenticate",
          "signature": "Maybe AuthId",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenAuthId",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:tokenAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenAuthMethod",
          "package": "happstack-authenticate",
          "signature": "AuthMethod",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenAuthMethod",
          "package": "happstack-authenticate",
          "partial": "Auth Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:tokenAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenExpires",
          "package": "happstack-authenticate",
          "signature": "UTCTime",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenExpires",
          "package": "happstack-authenticate",
          "partial": "Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:tokenExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenLifetime",
          "package": "happstack-authenticate",
          "signature": "Int",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenLifetime",
          "package": "happstack-authenticate",
          "partial": "Lifetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:tokenLifetime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenString",
          "package": "happstack-authenticate",
          "signature": "String",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "tokenString",
          "package": "happstack-authenticate",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:tokenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "unAuthId",
          "package": "happstack-authenticate",
          "signature": "Integer",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "unAuthId",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:unAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "unFacebookId",
          "package": "happstack-authenticate",
          "signature": "UserId",
          "source": "src/Happstack-Auth-Core-Auth.html#FacebookId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "unFacebookId",
          "package": "happstack-authenticate",
          "partial": "Facebook Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:unFacebookId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "unUserName",
          "package": "happstack-authenticate",
          "signature": "Text",
          "source": "src/Happstack-Auth-Core-Auth.html#UserName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "unUserName",
          "package": "happstack-authenticate",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:unUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "unUserPassId",
          "package": "happstack-authenticate",
          "signature": "Integer",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPassId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "unUserPassId",
          "package": "happstack-authenticate",
          "partial": "User Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:unUserPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "upId",
          "package": "happstack-authenticate",
          "signature": "UserPassId",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "upId",
          "package": "happstack-authenticate",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:upId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "upName",
          "package": "happstack-authenticate",
          "signature": "UserName",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "upName",
          "package": "happstack-authenticate",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:upName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Auth",
          "name": "upPassword",
          "package": "happstack-authenticate",
          "signature": "HashedPass",
          "source": "src/Happstack-Auth-Core-Auth.html#UserPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "upPassword",
          "package": "happstack-authenticate",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:upPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn a user-friendly error message string for an \u003ccode\u003eAddAuthError\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Auth",
          "name": "userPassErrorString",
          "package": "happstack-authenticate",
          "signature": "UserPassError -\u003e String",
          "source": "src/Happstack-Auth-Core-Auth.html#userPassErrorString",
          "type": "function"
        },
        "index": {
          "description": "return user-friendly error message string for an AddAuthError",
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "userPassErrorString",
          "normalized": "UserPassError-\u003eString",
          "package": "happstack-authenticate",
          "partial": "Pass Error String",
          "signature": "UserPassError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:userPassErrorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Auth\",\"Happstack.Auth\"]",
          "name": "userPasses",
          "package": "happstack-authenticate",
          "signature": "UserPasses",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:userPasses\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:userPasses\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Auth",
          "module": "Happstack.Auth.Core.Auth",
          "name": "userPasses",
          "package": "happstack-authenticate",
          "partial": "Passes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Auth.html#v:userPasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "AuthParts",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthParts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "AuthParts",
          "package": "happstack-authenticate",
          "partial": "Auth Parts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "connect",
          "package": "happstack-authenticate",
          "signature": "AuthMode-\u003e Maybe Text-\u003e Text-\u003e m Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "connect",
          "normalized": "AuthMode-\u003eMaybe Text-\u003eText-\u003ea Response",
          "package": "happstack-authenticate",
          "signature": "AuthMode-\u003eMaybe Text-\u003eText-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "facebookAddAuthIdsCookie",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e FacebookId -\u003e m (Maybe AuthId)",
          "source": "src/Happstack-Auth-Core-AuthParts.html#facebookAddAuthIdsCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "facebookAddAuthIdsCookie",
          "normalized": "AcidState AuthState-\u003eFacebookId-\u003ea(Maybe AuthId)",
          "package": "happstack-authenticate",
          "partial": "Add Auth Ids Cookie",
          "signature": "AcidState AuthState-\u003eFacebookId-\u003em(Maybe AuthId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:facebookAddAuthIdsCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "facebookPage",
          "package": "happstack-authenticate",
          "signature": "Credentials -\u003e AuthMode -\u003e m Response",
          "source": "src/Happstack-Auth-Core-AuthParts.html#facebookPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "facebookPage",
          "normalized": "Credentials-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Page",
          "signature": "Credentials-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:facebookPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "facebookRedirectPage",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState-\u003e Credentials-\u003e Text-\u003e AuthMode-\u003e m Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "facebookRedirectPage",
          "normalized": "AcidState AuthState-\u003eCredentials-\u003eText-\u003eAuthMode-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Redirect Page",
          "signature": "AcidState AuthState-\u003eCredentials-\u003eText-\u003eAuthMode-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:facebookRedirectPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "getIdentifier",
          "package": "happstack-authenticate",
          "signature": "m Identifier",
          "source": "src/Happstack-Auth-Core-AuthParts.html#getIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "getIdentifier",
          "package": "happstack-authenticate",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:getIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "handleOpenId",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState-\u003e Maybe Text-\u003e Text-\u003e OpenIdURL-\u003e m Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "handleOpenId",
          "normalized": "AcidState AuthState-\u003eMaybe Text-\u003eText-\u003eOpenIdURL-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Open Id",
          "signature": "AcidState AuthState-\u003eMaybe Text-\u003eText-\u003eOpenIdURL-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:handleOpenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "identifierAddAuthIdsCookie",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e Identifier -\u003e m (Maybe AuthId)",
          "source": "src/Happstack-Auth-Core-AuthParts.html#identifierAddAuthIdsCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "identifierAddAuthIdsCookie",
          "normalized": "AcidState AuthState-\u003eIdentifier-\u003ea(Maybe AuthId)",
          "package": "happstack-authenticate",
          "partial": "Add Auth Ids Cookie",
          "signature": "AcidState AuthState-\u003eIdentifier-\u003em(Maybe AuthId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:identifierAddAuthIdsCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "openIdPage",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AuthMode -\u003e Text -\u003e m Response",
          "source": "src/Happstack-Auth-Core-AuthParts.html#openIdPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthParts",
          "module": "Happstack.Auth.Core.AuthParts",
          "name": "openIdPage",
          "normalized": "AcidState AuthState-\u003eAuthMode-\u003eText-\u003ea Response",
          "package": "happstack-authenticate",
          "partial": "Id Page",
          "signature": "AcidState AuthState-\u003eAuthMode-\u003eText-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthParts.html#v:openIdPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthProfileURL",
          "name": "AuthProfileURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthProfileURL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthProfileURL",
          "module": "Happstack.Auth.Core.AuthProfileURL",
          "name": "AuthProfileURL",
          "package": "happstack-authenticate",
          "partial": "Auth Profile URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthProfileURL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthProfileURL",
          "name": "AuthProfileURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthProfileURL.html#AuthProfileURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthProfileURL",
          "module": "Happstack.Auth.Core.AuthProfileURL",
          "name": "AuthProfileURL",
          "package": "happstack-authenticate",
          "partial": "Auth Profile URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthProfileURL.html#t:AuthProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthProfileURL\",\"Happstack.Auth\"]",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "signature": "AuthURL AuthURL",
          "source": "src/Happstack-Auth-Core-AuthProfileURL.html#AuthProfileURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthProfileURL.html#v:AuthURL\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:AuthURL\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthProfileURL",
          "module": "Happstack.Auth.Core.AuthProfileURL",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "partial": "Auth URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthProfileURL.html#v:AuthURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthProfileURL\",\"Happstack.Auth\"]",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "signature": "ProfileURL ProfileURL",
          "source": "src/Happstack-Auth-Core-AuthProfileURL.html#AuthProfileURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthProfileURL.html#v:ProfileURL\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:ProfileURL\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthProfileURL",
          "module": "Happstack.Auth.Core.AuthProfileURL",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "partial": "Profile URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthProfileURL.html#v:ProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthURL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "partial": "Auth URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AuthMode",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AuthMode",
          "package": "happstack-authenticate",
          "partial": "Auth Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#t:AuthMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "partial": "Auth URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#t:AuthURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "OpenIdProvider",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdProvider",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "OpenIdProvider",
          "package": "happstack-authenticate",
          "partial": "Open Id Provider",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#t:OpenIdProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "OpenIdURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "OpenIdURL",
          "package": "happstack-authenticate",
          "partial": "Open Id URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#t:OpenIdURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_AddAuth",
          "package": "happstack-authenticate",
          "signature": "A_AddAuth",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_AddAuth\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_AddAuth\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_AddAuth",
          "package": "happstack-authenticate",
          "partial": "Add Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_AddAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_ChangePassword",
          "package": "happstack-authenticate",
          "signature": "A_ChangePassword",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_ChangePassword\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_ChangePassword\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_ChangePassword",
          "package": "happstack-authenticate",
          "partial": "Change Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_ChangePassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_CreateAccount",
          "package": "happstack-authenticate",
          "signature": "A_CreateAccount",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_CreateAccount\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_CreateAccount\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_CreateAccount",
          "package": "happstack-authenticate",
          "partial": "Create Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_CreateAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_Facebook",
          "package": "happstack-authenticate",
          "signature": "A_Facebook AuthMode",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Facebook\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_Facebook\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_Facebook",
          "package": "happstack-authenticate",
          "partial": "Facebook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Facebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_FacebookRedirect",
          "package": "happstack-authenticate",
          "signature": "A_FacebookRedirect AuthMode",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_FacebookRedirect\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_FacebookRedirect\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_FacebookRedirect",
          "package": "happstack-authenticate",
          "partial": "Facebook Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_FacebookRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_Local",
          "package": "happstack-authenticate",
          "signature": "A_Local",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Local\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_Local\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_Local",
          "package": "happstack-authenticate",
          "partial": "Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_Login",
          "package": "happstack-authenticate",
          "signature": "A_Login",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Login\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_Login\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_Login",
          "package": "happstack-authenticate",
          "partial": "Login",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Login"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_Logout",
          "package": "happstack-authenticate",
          "signature": "A_Logout",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Logout\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_Logout\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_Logout",
          "package": "happstack-authenticate",
          "partial": "Logout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Logout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_OpenId",
          "package": "happstack-authenticate",
          "signature": "A_OpenId OpenIdURL",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_OpenId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_OpenId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_OpenId",
          "package": "happstack-authenticate",
          "partial": "Open Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_OpenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_OpenIdProvider",
          "package": "happstack-authenticate",
          "signature": "A_OpenIdProvider AuthMode OpenIdProvider",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_OpenIdProvider\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_OpenIdProvider\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_OpenIdProvider",
          "package": "happstack-authenticate",
          "partial": "Open Id Provider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_OpenIdProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.AuthURL\",\"Happstack.Auth\"]",
          "name": "A_Signup",
          "package": "happstack-authenticate",
          "signature": "A_Signup",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Signup\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:A_Signup\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "A_Signup",
          "package": "happstack-authenticate",
          "partial": "Signup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:A_Signup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AddIdentifierMode",
          "package": "happstack-authenticate",
          "signature": "AddIdentifierMode",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "AddIdentifierMode",
          "package": "happstack-authenticate",
          "partial": "Add Identifier Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:AddIdentifierMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Generic",
          "package": "happstack-authenticate",
          "signature": "Generic",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Generic",
          "package": "happstack-authenticate",
          "partial": "Generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Google",
          "package": "happstack-authenticate",
          "signature": "Google",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Google",
          "package": "happstack-authenticate",
          "partial": "Google",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:Google"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "LiveJournal",
          "package": "happstack-authenticate",
          "signature": "LiveJournal",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "LiveJournal",
          "package": "happstack-authenticate",
          "partial": "Live Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:LiveJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "LoginMode",
          "package": "happstack-authenticate",
          "signature": "LoginMode",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "LoginMode",
          "package": "happstack-authenticate",
          "partial": "Login Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:LoginMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Myspace",
          "package": "happstack-authenticate",
          "signature": "Myspace",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Myspace",
          "package": "happstack-authenticate",
          "partial": "Myspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:Myspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "O_Connect",
          "package": "happstack-authenticate",
          "signature": "O_Connect AuthMode",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "O_Connect",
          "package": "happstack-authenticate",
          "partial": "Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:O_Connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "O_OpenId",
          "package": "happstack-authenticate",
          "signature": "O_OpenId AuthMode",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "O_OpenId",
          "package": "happstack-authenticate",
          "partial": "Open Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:O_OpenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Yahoo",
          "package": "happstack-authenticate",
          "signature": "Yahoo",
          "source": "src/Happstack-Auth-Core-AuthURL.html#OpenIdProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "Yahoo",
          "package": "happstack-authenticate",
          "partial": "Yahoo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:Yahoo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "authUrlInverse",
          "package": "happstack-authenticate",
          "signature": "Property",
          "source": "src/Happstack-Auth-Core-AuthURL.html#authUrlInverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core AuthURL",
          "module": "Happstack.Auth.Core.AuthURL",
          "name": "authUrlInverse",
          "package": "happstack-authenticate",
          "partial": "Url Inverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-AuthURL.html#v:authUrlInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profile",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profile",
          "package": "happstack-authenticate",
          "partial": "Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdProfiles",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#AuthIdProfiles",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdProfiles",
          "package": "happstack-authenticate",
          "partial": "Auth Id Profiles",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:AuthIdProfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdUserId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#AuthIdUserId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdUserId",
          "package": "happstack-authenticate",
          "partial": "Auth Id User Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:AuthIdUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "CreateNewProfile",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#CreateNewProfile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "CreateNewProfile",
          "package": "happstack-authenticate",
          "partial": "Create New Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:CreateNewProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "GenUserId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#GenUserId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "GenUserId",
          "package": "happstack-authenticate",
          "partial": "Gen User Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:GenUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "GetProfileState",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#GetProfileState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "GetProfileState",
          "package": "happstack-authenticate",
          "partial": "Get Profile State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:GetProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profile",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#Profile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profile",
          "package": "happstack-authenticate",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "ProfileState",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#ProfileState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "ProfileState",
          "package": "happstack-authenticate",
          "partial": "Profile State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:ProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profiles",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#Profiles",
          "type": "type"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profiles",
          "package": "happstack-authenticate",
          "partial": "Profiles",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:Profiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "SetAuthIdUserId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#SetAuthIdUserId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "SetAuthIdUserId",
          "package": "happstack-authenticate",
          "partial": "Set Auth Id User Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:SetAuthIdUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "UserId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#UserId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "UserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#t:UserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdProfiles",
          "package": "happstack-authenticate",
          "signature": "AuthIdProfiles AuthId",
          "source": "src/Happstack-Auth-Core-Profile.html#AuthIdProfiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdProfiles",
          "package": "happstack-authenticate",
          "partial": "Auth Id Profiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:AuthIdProfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdUserId",
          "package": "happstack-authenticate",
          "signature": "AuthIdUserId AuthId",
          "source": "src/Happstack-Auth-Core-Profile.html#AuthIdUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "AuthIdUserId",
          "package": "happstack-authenticate",
          "partial": "Auth Id User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:AuthIdUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "CreateNewProfile",
          "package": "happstack-authenticate",
          "signature": "CreateNewProfile (Set AuthId)",
          "source": "src/Happstack-Auth-Core-Profile.html#CreateNewProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "CreateNewProfile",
          "package": "happstack-authenticate",
          "partial": "Create New Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:CreateNewProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "GenUserId",
          "package": "happstack-authenticate",
          "signature": "GenUserId",
          "source": "src/Happstack-Auth-Core-Profile.html#GenUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "GenUserId",
          "package": "happstack-authenticate",
          "partial": "Gen User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:GenUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "GetProfileState",
          "package": "happstack-authenticate",
          "signature": "GetProfileState",
          "source": "src/Happstack-Auth-Core-Profile.html#GetProfileState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "GetProfileState",
          "package": "happstack-authenticate",
          "partial": "Get Profile State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:GetProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profile",
          "package": "happstack-authenticate",
          "signature": "Profile",
          "source": "src/Happstack-Auth-Core-Profile.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "Profile",
          "package": "happstack-authenticate",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "ProfileState",
          "package": "happstack-authenticate",
          "signature": "ProfileState",
          "source": "src/Happstack-Auth-Core-Profile.html#ProfileState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:ProfileState\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:ProfileState\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "ProfileState",
          "package": "happstack-authenticate",
          "partial": "Profile State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:ProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "SetAuthIdUserId",
          "package": "happstack-authenticate",
          "signature": "SetAuthIdUserId AuthId UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#SetAuthIdUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "SetAuthIdUserId",
          "package": "happstack-authenticate",
          "partial": "Set Auth Id User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:SetAuthIdUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "UserId",
          "package": "happstack-authenticate",
          "signature": "UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#UserId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:UserId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:UserId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "UserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:UserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "authIdProfiles",
          "package": "happstack-authenticate",
          "signature": "AuthId -\u003e Query ProfileState (Set Profile)",
          "source": "src/Happstack-Auth-Core-Profile.html#authIdProfiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "authIdProfiles",
          "normalized": "AuthId-\u003eQuery ProfileState(Set Profile)",
          "package": "happstack-authenticate",
          "partial": "Id Profiles",
          "signature": "AuthId-\u003eQuery ProfileState(Set Profile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:authIdProfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "authIdUserId",
          "package": "happstack-authenticate",
          "signature": "AuthId -\u003e Query ProfileState (Maybe UserId)",
          "source": "src/Happstack-Auth-Core-Profile.html#authIdUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "authIdUserId",
          "normalized": "AuthId-\u003eQuery ProfileState(Maybe UserId)",
          "package": "happstack-authenticate",
          "partial": "Id User Id",
          "signature": "AuthId-\u003eQuery ProfileState(Maybe UserId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:authIdUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emap of what \u003ccode\u003e\u003ca\u003eUserId\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eAuthId\u003c/a\u003e\u003c/code\u003e is currently defaulting to\n\u003c/p\u003e",
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "authUserMap",
          "package": "happstack-authenticate",
          "signature": "Map AuthId UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#ProfileState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:authUserMap\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:authUserMap\"]"
        },
        "index": {
          "description": "map of what UserId an AuthId is currently defaulting to",
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "authUserMap",
          "package": "happstack-authenticate",
          "partial": "User Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:authUserMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "auths",
          "package": "happstack-authenticate",
          "signature": "Set AuthId",
          "source": "src/Happstack-Auth-Core-Profile.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "auths",
          "package": "happstack-authenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:auths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "createNewProfile",
          "package": "happstack-authenticate",
          "signature": "Set AuthId -\u003e Update ProfileState UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#createNewProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "createNewProfile",
          "normalized": "Set AuthId-\u003eUpdate ProfileState UserId",
          "package": "happstack-authenticate",
          "partial": "New Profile",
          "signature": "Set AuthId-\u003eUpdate ProfileState UserId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:createNewProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "genUserId",
          "package": "happstack-authenticate",
          "signature": "Update ProfileState UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#genUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "genUserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:genUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the entire ProfileState\n Warning, this is an admin level function?\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Profile",
          "name": "getProfileState",
          "package": "happstack-authenticate",
          "signature": "Query ProfileState ProfileState",
          "source": "src/Happstack-Auth-Core-Profile.html#getProfileState",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the entire ProfileState Warning this is an admin level function",
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "getProfileState",
          "package": "happstack-authenticate",
          "partial": "Profile State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:getProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "getUserId",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AcidState ProfileState -\u003e m (Maybe UserId)",
          "source": "src/Happstack-Auth-Core-Profile.html#getUserId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:getUserId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:getUserId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "getUserId",
          "normalized": "AcidState AuthState-\u003eAcidState ProfileState-\u003ea(Maybe UserId)",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "signature": "AcidState AuthState-\u003eAcidState ProfileState-\u003em(Maybe UserId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:getUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea reasonable initial \u003ccode\u003e\u003ca\u003eProfileState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Auth.Core.Profile",
          "name": "initialProfileState",
          "package": "happstack-authenticate",
          "signature": "ProfileState",
          "source": "src/Happstack-Auth-Core-Profile.html#initialProfileState",
          "type": "function"
        },
        "index": {
          "description": "reasonable initial ProfileState",
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "initialProfileState",
          "package": "happstack-authenticate",
          "partial": "Profile State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:initialProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "nextUserId",
          "package": "happstack-authenticate",
          "signature": "UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#ProfileState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:nextUserId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:nextUserId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "nextUserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:nextUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "nickName",
          "package": "happstack-authenticate",
          "signature": "Text",
          "source": "src/Happstack-Auth-Core-Profile.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "nickName",
          "package": "happstack-authenticate",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:nickName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "profiles",
          "package": "happstack-authenticate",
          "signature": "Profiles",
          "source": "src/Happstack-Auth-Core-Profile.html#ProfileState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:profiles\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:profiles\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "profiles",
          "package": "happstack-authenticate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:profiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "setAuthIdUserId",
          "package": "happstack-authenticate",
          "signature": "AuthId -\u003e UserId -\u003e Update ProfileState ()",
          "source": "src/Happstack-Auth-Core-Profile.html#setAuthIdUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "setAuthIdUserId",
          "normalized": "AuthId-\u003eUserId-\u003eUpdate ProfileState()",
          "package": "happstack-authenticate",
          "partial": "Auth Id User Id",
          "signature": "AuthId-\u003eUserId-\u003eUpdate ProfileState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:setAuthIdUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "succUserId",
          "package": "happstack-authenticate",
          "signature": "UserId -\u003e UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#succUserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "succUserId",
          "normalized": "UserId-\u003eUserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "signature": "UserId-\u003eUserId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:succUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.Profile\",\"Happstack.Auth\"]",
          "name": "unUserId",
          "package": "happstack-authenticate",
          "signature": "Integer",
          "source": "src/Happstack-Auth-Core-Profile.html#UserId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:unUserId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:unUserId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "unUserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:unUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.Profile",
          "name": "userId",
          "package": "happstack-authenticate",
          "signature": "UserId",
          "source": "src/Happstack-Auth-Core-Profile.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core Profile",
          "module": "Happstack.Auth.Core.Profile",
          "name": "userId",
          "package": "happstack-authenticate",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-Profile.html#v:userId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "ProfileParts",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-ProfileParts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "ProfileParts",
          "package": "happstack-authenticate",
          "partial": "Profile Parts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "PickProfile",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#PickProfile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "PickProfile",
          "package": "happstack-authenticate",
          "partial": "Pick Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#t:PickProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "PickAuthId",
          "package": "happstack-authenticate",
          "signature": "PickAuthId (Set AuthId)",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#PickProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "PickAuthId",
          "package": "happstack-authenticate",
          "partial": "Pick Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#v:PickAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "PickPersonality",
          "package": "happstack-authenticate",
          "signature": "PickPersonality (Set Profile)",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#PickProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "PickPersonality",
          "package": "happstack-authenticate",
          "partial": "Pick Personality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#v:PickPersonality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "Picked",
          "package": "happstack-authenticate",
          "signature": "Picked UserId",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#PickProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "Picked",
          "package": "happstack-authenticate",
          "partial": "Picked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#v:Picked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "pickAuthId",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e m (Either (Set AuthId) AuthId)",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#pickAuthId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "pickAuthId",
          "normalized": "AcidState AuthState-\u003ea(Either(Set AuthId)AuthId)",
          "package": "happstack-authenticate",
          "partial": "Auth Id",
          "signature": "AcidState AuthState-\u003em(Either(Set AuthId)AuthId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#v:pickAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "pickProfile",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AcidState ProfileState -\u003e m PickProfile",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#pickProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "pickProfile",
          "normalized": "AcidState AuthState-\u003eAcidState ProfileState-\u003ea PickProfile",
          "package": "happstack-authenticate",
          "partial": "Profile",
          "signature": "AcidState AuthState-\u003eAcidState ProfileState-\u003em PickProfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#v:pickProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "setAuthIdPage",
          "package": "happstack-authenticate",
          "signature": "AcidState AuthState -\u003e AuthId -\u003e m Bool",
          "source": "src/Happstack-Auth-Core-ProfileParts.html#setAuthIdPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileParts",
          "module": "Happstack.Auth.Core.ProfileParts",
          "name": "setAuthIdPage",
          "normalized": "AcidState AuthState-\u003eAuthId-\u003ea Bool",
          "package": "happstack-authenticate",
          "partial": "Auth Id Page",
          "signature": "AcidState AuthState-\u003eAuthId-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileParts.html#v:setAuthIdPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-ProfileURL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileURL",
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "partial": "Profile URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-ProfileURL.html#ProfileURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileURL",
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "partial": "Profile URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#t:ProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.ProfileURL\",\"Happstack.Auth\"]",
          "name": "P_PickProfile",
          "package": "happstack-authenticate",
          "signature": "P_PickProfile",
          "source": "src/Happstack-Auth-Core-ProfileURL.html#ProfileURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:P_PickProfile\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:P_PickProfile\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileURL",
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "P_PickProfile",
          "package": "happstack-authenticate",
          "partial": "Pick Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:P_PickProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.ProfileURL\",\"Happstack.Auth\"]",
          "name": "P_SetAuthId",
          "package": "happstack-authenticate",
          "signature": "P_SetAuthId AuthId",
          "source": "src/Happstack-Auth-Core-ProfileURL.html#ProfileURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:P_SetAuthId\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:P_SetAuthId\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileURL",
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "P_SetAuthId",
          "package": "happstack-authenticate",
          "partial": "Set Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:P_SetAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Auth.Core.ProfileURL\",\"Happstack.Auth\"]",
          "name": "P_SetPersonality",
          "package": "happstack-authenticate",
          "signature": "P_SetPersonality UserId",
          "source": "src/Happstack-Auth-Core-ProfileURL.html#ProfileURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:P_SetPersonality\",\"http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#v:P_SetPersonality\"]"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileURL",
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "P_SetPersonality",
          "package": "happstack-authenticate",
          "partial": "Set Personality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:P_SetPersonality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "authUrlInverse",
          "package": "happstack-authenticate",
          "signature": "Property",
          "source": "src/Happstack-Auth-Core-ProfileURL.html#authUrlInverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Auth Core ProfileURL",
          "module": "Happstack.Auth.Core.ProfileURL",
          "name": "authUrlInverse",
          "package": "happstack-authenticate",
          "partial": "Url Inverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth-Core-ProfileURL.html#v:authUrlInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "Auth",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "Auth",
          "package": "happstack-authenticate",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "AuthProfileURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthProfileURL.html#AuthProfileURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "AuthProfileURL",
          "package": "happstack-authenticate",
          "partial": "Auth Profile URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#t:AuthProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "AuthState",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Auth.html#AuthState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "AuthState",
          "package": "happstack-authenticate",
          "partial": "Auth State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#t:AuthState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-AuthURL.html#AuthURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "AuthURL",
          "package": "happstack-authenticate",
          "partial": "Auth URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#t:AuthURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "ProfileState",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#ProfileState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "ProfileState",
          "package": "happstack-authenticate",
          "partial": "Profile State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#t:ProfileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-ProfileURL.html#ProfileURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "ProfileURL",
          "package": "happstack-authenticate",
          "partial": "Profile URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#t:ProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Auth",
          "name": "UserId",
          "package": "happstack-authenticate",
          "source": "src/Happstack-Auth-Core-Profile.html#UserId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack Auth",
          "module": "Happstack.Auth",
          "name": "UserId",
          "package": "happstack-authenticate",
          "partial": "User Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-authenticate/docs/Happstack-Auth.html#t:UserId"
      }
    }
  ]
]