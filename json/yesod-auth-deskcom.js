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
        "word": "yesod-auth-deskcom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskCom",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskCom",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for \u003ccode\u003eyesod-auth-deskCom\u003c/code\u003e's subsite.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskCom",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom-Data.html#DeskCom",
          "type": "data"
        },
        "index": {
          "description": "Data type for yesod-auth-deskCom subsite",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskCom",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#t:DeskCom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCredentials used to access your Desk.com's Multipass.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComCredentials",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComCredentials",
          "type": "data"
        },
        "index": {
          "description": "Credentials used to access your Desk.com Multipass",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComCredentials",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com Credentials",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#t:DeskComCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of a custom customer field as \u003ccode\u003e(key, value)\u003c/code\u003e.\n Note that you have prefix your \u003ccode\u003ekey\u003c/code\u003e with \u003ccode\u003e\"custom_\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComCustomField",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComCustomField",
          "type": "type"
        },
        "index": {
          "description": "The value of custom customer field as key value Note that you have prefix your key with custom",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComCustomField",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com Custom Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#t:DeskComCustomField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a user that is given to \u003ccode\u003e\u003ca\u003eDeskCom\u003c/a\u003e\u003c/code\u003e.  Please\n see Desk.com's documentation\n (\u003ca\u003ehttp://dev.desk.com/docs/portal/multipass\u003c/a\u003e) in order to see\n more details of how theses fields are interpreted.\n\u003c/p\u003e\u003cp\u003eOnly \u003ccode\u003e\u003ca\u003eduName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eduEmail\u003c/a\u003e\u003c/code\u003e are required.  We suggest using\n \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComUser",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "data"
        },
        "index": {
          "description": "Information about user that is given to DeskCom Please see Desk.com documentation http dev.desk.com docs portal multipass in order to see more details of how theses fields are interpreted Only duName and duEmail are required We suggest using def",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComUser",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#t:DeskComUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich external ID should be given to Desk.com.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComUserId",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUserId",
          "type": "data"
        },
        "index": {
          "description": "Which external ID should be given to Desk.com",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComUserId",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com User Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#t:DeskComUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that you need to implement in order to support\n Desk.com remote authentication.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMinimal complete definition:\u003c/em\u003e everything except for \u003ccode\u003e\u003ca\u003edeskComTokenTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "YesodDeskCom",
          "package": "yesod-auth-deskcom",
          "source": "src/Yesod-Auth-DeskCom.html#YesodDeskCom",
          "type": "class"
        },
        "index": {
          "description": "Type class that you need to implement in order to support Desk.com remote authentication Minimal complete definition everything except for deskComTokenTimeout",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "YesodDeskCom",
          "package": "yesod-auth-deskcom",
          "partial": "Yesod Desk Com",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#t:YesodDeskCom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComUser",
          "package": "yesod-auth-deskcom",
          "signature": "DeskComUser",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "DeskComUser",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:DeskComUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this given value.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "Explicit",
          "package": "yesod-auth-deskcom",
          "signature": "Explicit Text",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUserId",
          "type": "function"
        },
        "index": {
          "description": "Use this given value",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "Explicit",
          "package": "yesod-auth-deskcom",
          "partial": "Explicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:Explicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the user ID from \u003ccode\u003epersistent\u003c/code\u003e's database.  This is\n the recommended and default value.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "UseYesodAuthId",
          "package": "yesod-auth-deskcom",
          "signature": "UseYesodAuthId",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUserId",
          "type": "function"
        },
        "index": {
          "description": "Use the user ID from persistent database This is the recommended and default value",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "UseYesodAuthId",
          "package": "yesod-auth-deskcom",
          "partial": "Use Yesod Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:UseYesodAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the credentials data type used by this library.  This\n function is relatively expensive (uses SHA1 and AES), so\n you'll probably want to cache its result.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComCreateCreds",
          "package": "yesod-auth-deskcom",
          "signature": "Text-\u003e Text-\u003e Text-\u003e DeskComCredentials",
          "type": "function"
        },
        "index": {
          "description": "Create the credentials data type used by this library This function is relatively expensive uses SHA1 and AES so you ll probably want to cache its result",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComCreateCreds",
          "normalized": "Text-\u003eText-\u003eText-\u003eDeskComCredentials",
          "package": "yesod-auth-deskcom",
          "partial": "Com Create Creds",
          "signature": "Text-\u003eText-\u003eText-\u003eDeskComCredentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:deskComCreateCreds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe credentials needed to use Multipass.  Use\n \u003ccode\u003e\u003ca\u003edeskComCreateCreds\u003c/a\u003e\u003c/code\u003e.  We recommend caching the resulting\n \u003ccode\u003e\u003ca\u003eDeskComCredentials\u003c/a\u003e\u003c/code\u003e value on your foundation data type\n since creating it is an expensive operation.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComCredentials",
          "package": "yesod-auth-deskcom",
          "signature": "master -\u003e DeskComCredentials",
          "source": "src/Yesod-Auth-DeskCom.html#deskComCredentials",
          "type": "method"
        },
        "index": {
          "description": "The credentials needed to use Multipass Use deskComCreateCreds We recommend caching the resulting DeskComCredentials value on your foundation data type since creating it is an expensive operation",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComCredentials",
          "normalized": "a-\u003eDeskComCredentials",
          "package": "yesod-auth-deskcom",
          "partial": "Com Credentials",
          "signature": "master-\u003eDeskComCredentials",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:deskComCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect the user to Desk.com such that they're already\n logged in when they arrive.  For example, you may use\n \u003ccode\u003edeskComLoginRoute\u003c/code\u003e as the login URL on Multipass config.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComLoginRoute",
          "package": "yesod-auth-deskcom",
          "signature": "Route DeskCom",
          "source": "src/Yesod-Auth-DeskCom.html#deskComLoginRoute",
          "type": "function"
        },
        "index": {
          "description": "Redirect the user to Desk.com such that they re already logged in when they arrive For example you may use deskComLoginRoute as the login URL on Multipass config",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComLoginRoute",
          "package": "yesod-auth-deskcom",
          "partial": "Com Login Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:deskComLoginRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the user is logged in, redirect them to Desk.com such\n that they're already logged in when they arrive (same as\n \u003ccode\u003e\u003ca\u003edeskComLoginRoute\u003c/a\u003e\u003c/code\u003e).  Otherwise, redirect them to Desk.com\n without asking for credentials. For example, you may use\n \u003ccode\u003edeskComMaybeLoginRoute\u003c/code\u003e when the user clicks on a \"Support\"\n item on a menu.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComMaybeLoginRoute",
          "package": "yesod-auth-deskcom",
          "signature": "Route DeskCom",
          "source": "src/Yesod-Auth-DeskCom.html#deskComMaybeLoginRoute",
          "type": "function"
        },
        "index": {
          "description": "If the user is logged in redirect them to Desk.com such that they re already logged in when they arrive same as deskComLoginRoute Otherwise redirect them to Desk.com without asking for credentials For example you may use deskComMaybeLoginRoute when the user clicks on Support item on menu",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComMaybeLoginRoute",
          "package": "yesod-auth-deskcom",
          "partial": "Com Maybe Login Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:deskComMaybeLoginRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach time we login an user on Desk.com, we create a token.\n This function defines how much time the token should be\n valid before expiring.  Should be greater than 0.  Defaults\n to 5 minutes.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComTokenTimeout",
          "package": "yesod-auth-deskcom",
          "signature": "master -\u003e NominalDiffTime",
          "source": "src/Yesod-Auth-DeskCom.html#deskComTokenTimeout",
          "type": "method"
        },
        "index": {
          "description": "Each time we login an user on Desk.com we create token This function defines how much time the token should be valid before expiring Should be greater than Defaults to minutes",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComTokenTimeout",
          "normalized": "a-\u003eNominalDiffTime",
          "package": "yesod-auth-deskcom",
          "partial": "Com Token Timeout",
          "signature": "master-\u003eNominalDiffTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:deskComTokenTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGather information that should be given to Desk.com about\n an user.  Please see \u003ccode\u003e\u003ca\u003eDeskComUser\u003c/a\u003e\u003c/code\u003e for more information\n about what these fields mean.\n\u003c/p\u003e\u003cp\u003eSimple example:\n\u003c/p\u003e\u003cpre\u003e\n deskComUserInfo uid = do\n   user \u003c- runDB $ get uid\n   return \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003eduName\u003c/a\u003e\u003c/code\u003e  = userName user\n              , \u003ccode\u003e\u003ca\u003eduEmail\u003c/a\u003e\u003c/code\u003e = userEmail user }\n\u003c/pre\u003e\u003cp\u003eAdvanced example:\n\u003c/p\u003e\u003cpre\u003e\n deskComUserInfo uid = do\n   render \u003c- \u003ccode\u003e\u003ca\u003egetUrlRender\u003c/a\u003e\u003c/code\u003e\n   runDB $ do\n     Just user \u003c- get uid\n     Just org  \u003c- get (userOrganization user)\n     return \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003eduName\u003c/a\u003e\u003c/code\u003e           = userName user\n                , \u003ccode\u003e\u003ca\u003eduEmail\u003c/a\u003e\u003c/code\u003e          = userEmail user\n                , \u003ccode\u003eduOrganization\u003c/code\u003e   = Just (organizationName org)\n                , \u003ccode\u003eduRemotePhotoURL\u003c/code\u003e = Just (render $ UserPhotoR uid)\n                }\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e although I don't recomend this and I don't see any\n reason why you would do it, it \u003cem\u003eis\u003c/em\u003e possible to use\n \u003ccode\u003e\u003ca\u003emaybeAuth\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003erequireAuth\u003c/a\u003e\u003c/code\u003e and login on Desk.com\n with some sort of guest user should the user not be logged\n in.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComUserInfo",
          "package": "yesod-auth-deskcom",
          "signature": "AuthId master -\u003e HandlerT master IO DeskComUser",
          "source": "src/Yesod-Auth-DeskCom.html#deskComUserInfo",
          "type": "method"
        },
        "index": {
          "description": "Gather information that should be given to Desk.com about an user Please see DeskComUser for more information about what these fields mean Simple example deskComUserInfo uid do user runDB get uid return def duName userName user duEmail userEmail user Advanced example deskComUserInfo uid do render getUrlRender runDB do Just user get uid Just org get userOrganization user return def duName userName user duEmail userEmail user duOrganization Just organizationName org duRemotePhotoURL Just render UserPhotoR uid Note although don recomend this and don see any reason why you would do it it is possible to use maybeAuth instead of requireAuth and login on Desk.com with some sort of guest user should the user not be logged in",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "deskComUserInfo",
          "normalized": "AuthId a-\u003eHandlerT a IO DeskComUser",
          "package": "yesod-auth-deskcom",
          "partial": "Com User Info",
          "signature": "AuthId master-\u003eHandlerT master IO DeskComUser",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:deskComUserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom fields to be set.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "duCustomFields",
          "package": "yesod-auth-deskcom",
          "signature": "[DeskComCustomField]",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "function"
        },
        "index": {
          "description": "Custom fields to be set",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "duCustomFields",
          "normalized": "[DeskComCustomField]",
          "package": "yesod-auth-deskcom",
          "partial": "Custom Fields",
          "signature": "[DeskComCustomField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:duCustomFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE-mail address. (required)\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "duEmail",
          "package": "yesod-auth-deskcom",
          "signature": "Text",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "function"
        },
        "index": {
          "description": "E-mail address required",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "duEmail",
          "package": "yesod-auth-deskcom",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:duEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser name, at least two characters. (required)\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "duName",
          "package": "yesod-auth-deskcom",
          "signature": "Text",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "function"
        },
        "index": {
          "description": "User name at least two characters required",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "duName",
          "package": "yesod-auth-deskcom",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:duName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen \u003ccode\u003eJust url\u003c/code\u003e, forces the user to be redirected to\n \u003ccode\u003eurl\u003c/code\u003e after being logged in.  Otherwise, the user is\n redirected either to the page they were trying to view (if\n any) or to your portal page at Desk.com.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "duRedirectTo",
          "package": "yesod-auth-deskcom",
          "signature": "Maybe Text",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "function"
        },
        "index": {
          "description": "When Just url forces the user to be redirected to url after being logged in Otherwise the user is redirected either to the page they were trying to view if any or to your portal page at Desk.com",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "duRedirectTo",
          "package": "yesod-auth-deskcom",
          "partial": "Redirect To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:duRedirectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesk.com expects an string to be used as the ID of the\n user on their system.  Defaults to \u003ccode\u003e\u003ca\u003eUseYesodAuthId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "duUserId",
          "package": "yesod-auth-deskcom",
          "signature": "DeskComUserId",
          "source": "src/Yesod-Auth-DeskCom.html#DeskComUser",
          "type": "function"
        },
        "index": {
          "description": "Desk.com expects an string to be used as the ID of the user on their system Defaults to UseYesodAuthId",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "duUserId",
          "package": "yesod-auth-deskcom",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:duUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eDeskCom\u003c/a\u003e\u003c/code\u003e subsite with a fresh CPRNG.\n\u003c/p\u003e",
          "module": "Yesod.Auth.DeskCom",
          "name": "initDeskCom",
          "package": "yesod-auth-deskcom",
          "signature": "IO DeskCom",
          "source": "src/Yesod-Auth-DeskCom-Data.html#initDeskCom",
          "type": "function"
        },
        "index": {
          "description": "Initialize the DeskCom subsite with fresh CPRNG",
          "hierarchy": "Yesod Auth DeskCom",
          "module": "Yesod.Auth.DeskCom",
          "name": "initDeskCom",
          "package": "yesod-auth-deskcom",
          "partial": "Desk Com",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-deskcom/docs/Yesod-Auth-DeskCom.html#v:initDeskCom"
      }
    }
  ]
]