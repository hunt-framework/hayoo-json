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
        "word": "yesod-auth-zendesk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Zendesk",
          "name": "Zendesk",
          "package": "yesod-auth-zendesk",
          "source": "src/Yesod-Auth-Zendesk.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "Zendesk",
          "package": "yesod-auth-zendesk",
          "partial": "Zendesk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that you need to implement in order to support\n Zendesk remote authentication.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMinimal complete definition:\u003c/em\u003e all functions are required.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "YesodZendesk",
          "package": "yesod-auth-zendesk",
          "source": "src/Yesod-Auth-Zendesk.html#YesodZendesk",
          "type": "class"
        },
        "index": {
          "description": "Type class that you need to implement in order to support Zendesk remote authentication Minimal complete definition all functions are required",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "YesodZendesk",
          "package": "yesod-auth-zendesk",
          "partial": "Yesod Zendesk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#t:YesodZendesk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for \u003ccode\u003eyesod-auth-zendesk\u003c/code\u003e's subsite.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "Zendesk",
          "package": "yesod-auth-zendesk",
          "source": "src/Yesod-Auth-Zendesk-Data.html#Zendesk",
          "type": "data"
        },
        "index": {
          "description": "Data type for yesod-auth-zendesk subsite",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "Zendesk",
          "package": "yesod-auth-zendesk",
          "partial": "Zendesk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#t:Zendesk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich external ID should be given to Zendesk.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "ZendeskExternalId",
          "package": "yesod-auth-zendesk",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskExternalId",
          "type": "data"
        },
        "index": {
          "description": "Which external ID should be given to Zendesk",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "ZendeskExternalId",
          "package": "yesod-auth-zendesk",
          "partial": "Zendesk External Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#t:ZendeskExternalId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a user that is given to \u003ccode\u003e\u003ca\u003eZendesk\u003c/a\u003e\u003c/code\u003e.  Please\n see Zendesk's documentation\n (\u003ca\u003ehttp://www.zendesk.com/support/api/remote-authentication\u003c/a\u003e)\n in order to see more details of how theses fields are\n interpreted.\n\u003c/p\u003e\u003cp\u003eOnly \u003ccode\u003e\u003ca\u003ezuName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ezuEmail\u003c/a\u003e\u003c/code\u003e are required.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "ZendeskUser",
          "package": "yesod-auth-zendesk",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "data"
        },
        "index": {
          "description": "Information about user that is given to Zendesk Please see Zendesk documentation http www.zendesk.com support api remote-authentication in order to see more details of how theses fields are interpreted Only zuName and zuEmail are required",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "ZendeskUser",
          "package": "yesod-auth-zendesk",
          "partial": "Zendesk User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#t:ZendeskUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this given value.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "Explicit",
          "package": "yesod-auth-zendesk",
          "signature": "Explicit Text",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskExternalId",
          "type": "function"
        },
        "index": {
          "description": "Use this given value",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "Explicit",
          "package": "yesod-auth-zendesk",
          "partial": "Explicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:Explicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not give an external ID.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "NoExternalId",
          "package": "yesod-auth-zendesk",
          "signature": "NoExternalId",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskExternalId",
          "type": "function"
        },
        "index": {
          "description": "Do not give an external ID",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "NoExternalId",
          "package": "yesod-auth-zendesk",
          "partial": "No External Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:NoExternalId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the user ID from \u003ccode\u003epersistent\u003c/code\u003e's database.  This is\n the recommended and default value.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "UseYesodAuthId",
          "package": "yesod-auth-zendesk",
          "signature": "UseYesodAuthId",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskExternalId",
          "type": "function"
        },
        "index": {
          "description": "Use the user ID from persistent database This is the recommended and default value",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "UseYesodAuthId",
          "package": "yesod-auth-zendesk",
          "partial": "Use Yesod Auth Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:UseYesodAuthId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Zendesk",
          "name": "ZendeskUser",
          "package": "yesod-auth-zendesk",
          "signature": "ZendeskUser",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "ZendeskUser",
          "package": "yesod-auth-zendesk",
          "partial": "Zendesk User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:ZendeskUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eZendesk\u003c/a\u003e\u003c/code\u003e, use this on your \u003ccode\u003econfig/routes\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "getZendesk",
          "package": "yesod-auth-zendesk",
          "signature": "a -\u003e Zendesk",
          "source": "src/Yesod-Auth-Zendesk.html#getZendesk",
          "type": "function"
        },
        "index": {
          "description": "Create new Zendesk use this on your config routes file",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "getZendesk",
          "normalized": "a-\u003eZendesk",
          "package": "yesod-auth-zendesk",
          "partial": "Zendesk",
          "signature": "a-\u003eZendesk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:getZendesk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL on your Zendesk's site where users should be\n redirected to when logging in.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskAuthURL",
          "package": "yesod-auth-zendesk",
          "signature": "site -\u003e Text",
          "source": "src/Yesod-Auth-Zendesk.html#zendeskAuthURL",
          "type": "method"
        },
        "index": {
          "description": "URL on your Zendesk site where users should be redirected to when logging in",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskAuthURL",
          "normalized": "a-\u003eText",
          "package": "yesod-auth-zendesk",
          "partial": "Auth URL",
          "signature": "site-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zendeskAuthURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect the user to Zendesk such that they're already\n logged in when they arrive.  For example, you may use\n \u003ccode\u003ezendeskLoginRoute\u003c/code\u003e when the user clicks on a \"Support\" item\n on a menu.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskLoginRoute",
          "package": "yesod-auth-zendesk",
          "signature": "Route Zendesk",
          "source": "src/Yesod-Auth-Zendesk.html#zendeskLoginRoute",
          "type": "function"
        },
        "index": {
          "description": "Redirect the user to Zendesk such that they re already logged in when they arrive For example you may use zendeskLoginRoute when the user clicks on Support item on menu",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskLoginRoute",
          "package": "yesod-auth-zendesk",
          "partial": "Login Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zendeskLoginRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared secret between Zendesk and your site.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskToken",
          "package": "yesod-auth-zendesk",
          "signature": "site -\u003e ByteString",
          "source": "src/Yesod-Auth-Zendesk.html#zendeskToken",
          "type": "method"
        },
        "index": {
          "description": "Shared secret between Zendesk and your site",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskToken",
          "normalized": "a-\u003eByteString",
          "package": "yesod-auth-zendesk",
          "partial": "Token",
          "signature": "site-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zendeskToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGather information that should be given to Zendesk about\n an user.  Please see \u003ccode\u003e\u003ca\u003eZendeskUser\u003c/a\u003e\u003c/code\u003e for more information\n about what these fields mean.\n\u003c/p\u003e\u003cp\u003eSimple example:\n\u003c/p\u003e\u003cpre\u003e\n zendeskUserInfo = do\n   Entity uid user \u003c- \u003ccode\u003e\u003ca\u003erequireAuth\u003c/a\u003e\u003c/code\u003e\n   return \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003ezuName\u003c/a\u003e\u003c/code\u003e  = userName user\n              , \u003ccode\u003e\u003ca\u003ezuEmail\u003c/a\u003e\u003c/code\u003e = userEmail user }\n\u003c/pre\u003e\u003cp\u003eAdvanced example:\n\u003c/p\u003e\u003cpre\u003e\n zendeskUserInfo = do\n   uid \u003c- \u003ccode\u003e\u003ca\u003erequireAuthId\u003c/a\u003e\u003c/code\u003e\n   render \u003c- \u003ccode\u003e\u003ca\u003egetUrlRender\u003c/a\u003e\u003c/code\u003e\n   runDB $ do\n     Just user \u003c- get uid\n     Just org  \u003c- get (userOrganization user)\n     return \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003ezuName\u003c/a\u003e\u003c/code\u003e           = userName user\n                , \u003ccode\u003e\u003ca\u003ezuEmail\u003c/a\u003e\u003c/code\u003e          = userEmail user\n                , \u003ccode\u003e\u003ca\u003ezuOrganization\u003c/a\u003e\u003c/code\u003e   = Just (organizationName org)\n                , \u003ccode\u003e\u003ca\u003ezuRemotePhotoURL\u003c/a\u003e\u003c/code\u003e = Just (render $ UserPhotoR uid)\n                }\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e although I don't recomend this and I don't see any\n reason why you would do it, it \u003cem\u003eis\u003c/em\u003e possible to use\n \u003ccode\u003e\u003ca\u003emaybeAuth\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003erequireAuth\u003c/a\u003e\u003c/code\u003e and login on Zendesk\n with some sort of guest user should the user not be logged\n in.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskUserInfo",
          "package": "yesod-auth-zendesk",
          "signature": "HandlerT site IO ZendeskUser",
          "source": "src/Yesod-Auth-Zendesk.html#zendeskUserInfo",
          "type": "method"
        },
        "index": {
          "description": "Gather information that should be given to Zendesk about an user Please see ZendeskUser for more information about what these fields mean Simple example zendeskUserInfo do Entity uid user requireAuth return def zuName userName user zuEmail userEmail user Advanced example zendeskUserInfo do uid requireAuthId render getUrlRender runDB do Just user get uid Just org get userOrganization user return def zuName userName user zuEmail userEmail user zuOrganization Just organizationName org zuRemotePhotoURL Just render UserPhotoR uid Note although don recomend this and don see any reason why you would do it it is possible to use maybeAuth instead of requireAuth and login on Zendesk with some sort of guest user should the user not be logged in",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zendeskUserInfo",
          "package": "yesod-auth-zendesk",
          "partial": "User Info",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zendeskUserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE-mail address. (required)\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuEmail",
          "package": "yesod-auth-zendesk",
          "signature": "Text",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "description": "E-mail address required",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuEmail",
          "package": "yesod-auth-zendesk",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zuEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn external (to Zendesk) ID that identifies this user.\n Defaults to \u003ccode\u003e\u003ca\u003eUseYesodAuthId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuExternalId",
          "package": "yesod-auth-zendesk",
          "signature": "ZendeskExternalId",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "description": "An external to Zendesk ID that identifies this user Defaults to UseYesodAuthId",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuExternalId",
          "package": "yesod-auth-zendesk",
          "partial": "External Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zuExternalId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser name, at least two characters. (required)\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuName",
          "package": "yesod-auth-zendesk",
          "signature": "Text",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "description": "User name at least two characters required",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuName",
          "package": "yesod-auth-zendesk",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zuName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrganization the user belongs to.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuOrganization",
          "package": "yesod-auth-zendesk",
          "signature": "Maybe Text",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "description": "Organization the user belongs to",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuOrganization",
          "package": "yesod-auth-zendesk",
          "partial": "Organization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zuOrganization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic URL with the user's profile picture.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuRemotePhotoURL",
          "package": "yesod-auth-zendesk",
          "signature": "Maybe Text",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "description": "Public URL with the user profile picture",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuRemotePhotoURL",
          "package": "yesod-auth-zendesk",
          "partial": "Remote Photo URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zuRemotePhotoURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of tags.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuTags",
          "package": "yesod-auth-zendesk",
          "signature": "[Text]",
          "source": "src/Yesod-Auth-Zendesk.html#ZendeskUser",
          "type": "function"
        },
        "index": {
          "description": "List of tags",
          "hierarchy": "Yesod Auth Zendesk",
          "module": "Yesod.Auth.Zendesk",
          "name": "zuTags",
          "normalized": "[Text]",
          "package": "yesod-auth-zendesk",
          "partial": "Tags",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-zendesk/docs/Yesod-Auth-Zendesk.html#v:zuTags"
      }
    }
  ]
]