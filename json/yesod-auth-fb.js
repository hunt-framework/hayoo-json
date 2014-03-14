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
        "word": "yesod-auth-fb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eyesod-auth\u003c/code\u003e authentication plugin using Facebook's\n client-side authentication flow.  You may see a demo at\n \u003ca\u003ehttps://github.com/meteficha/yesod-auth-fb/blob/master/demo/clientside.hs\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Currently this authentication plugin \u003cem\u003edoes not\u003c/em\u003e\n work with other authentication plugins.  If you need many\n different authentication plugins, please try the server-side\n authentication flow (module \u003ca\u003eYesod.Auth.Facebook.ServerSide\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eTODO: Explain how the whole thing fits together.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "ClientSide",
          "package": "yesod-auth-fb",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html",
          "type": "module"
        },
        "index": {
          "description": "yesod-auth authentication plugin using Facebook client-side authentication flow You may see demo at https github.com meteficha yesod-auth-fb blob master demo clientside.hs WARNING Currently this authentication plugin does not work with other authentication plugins If you need many different authentication plugins please try the server-side authentication flow module Yesod.Auth.Facebook.ServerSide TODO Explain how the whole thing fits together",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "ClientSide",
          "package": "yesod-auth-fb",
          "partial": "Client Side",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JavaScript function call.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "JavaScriptCall",
          "package": "yesod-auth-fb",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#JavaScriptCall",
          "type": "type"
        },
        "index": {
          "description": "JavaScript function call",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "JavaScriptCall",
          "package": "yesod-auth-fb",
          "partial": "Java Script Call",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#t:JavaScriptCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that needs to be implemented in order to use\n \u003ccode\u003e\u003ca\u003eauthFacebookClientSide\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003egetFbChannelFile\u003c/a\u003e\u003c/code\u003e.  (We\n recommend implementing \u003ccode\u003e\u003ca\u003egetFbLanguage\u003c/a\u003e\u003c/code\u003e as well.)\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "YesodAuthFbClientSide",
          "package": "yesod-auth-fb",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#YesodAuthFbClientSide",
          "type": "class"
        },
        "index": {
          "description": "Type class that needs to be implemented in order to use authFacebookClientSide Minimal complete definition getFbChannelFile We recommend implementing getFbLanguage as well",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "YesodAuthFbClientSide",
          "package": "yesod-auth-fb",
          "partial": "Yesod Auth Fb Client Side",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#t:YesodAuthFbClientSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYesod authentication plugin using Facebook's client-side\n authentication flow.\n\u003c/p\u003e\u003cp\u003eYou \u003cem\u003eMUST\u003c/em\u003e use \u003ccode\u003e\u003ca\u003efacebookJSSDK\u003c/a\u003e\u003c/code\u003e as its documentation states.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "authFacebookClientSide",
          "package": "yesod-auth-fb",
          "signature": "AuthPlugin site",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#authFacebookClientSide",
          "type": "function"
        },
        "index": {
          "description": "Yesod authentication plugin using Facebook client-side authentication flow You MUST use facebookJSSDK as its documentation states",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "authFacebookClientSide",
          "package": "yesod-auth-fb",
          "partial": "Facebook Client Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:authFacebookClientSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation for \u003ccode\u003e\u003ca\u003egetFbInitOpts\u003c/a\u003e\u003c/code\u003e.  Defines:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eappId\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Using \u003ccode\u003e\u003ca\u003egetFbCredentials\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003echannelUrl\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Using \u003ccode\u003e\u003ca\u003egetFbChannelFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecookie\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e To \u003ccode\u003eTrue\u003c/code\u003e.  This one is extremely important and\n  this module won't work \u003cem\u003eat all\u003c/em\u003e without it.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003estatus\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e To \u003ccode\u003eTrue\u003c/code\u003e, since this usually is what you want.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "defaultFbInitOpts",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO [(Text, Value)]",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#defaultFbInitOpts",
          "type": "function"
        },
        "index": {
          "description": "Default implementation for getFbInitOpts Defines appId Using getFbCredentials channelUrl Using getFbChannelFile cookie To True This one is extremely important and this module won work at all without it status To True since this usually is what you want",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "defaultFbInitOpts",
          "normalized": "HandlerT a IO[(Text,Value)]",
          "package": "yesod-auth-fb",
          "partial": "Fb Init Opts",
          "signature": "HandlerT site IO[(Text,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:defaultFbInitOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user access token from a \u003ccode\u003e\u003ca\u003eCreds\u003c/a\u003e\u003c/code\u003e created by this\n backend.  This function should be used on \u003ccode\u003e\u003ca\u003egetAuthId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "extractCredsAccessToken",
          "package": "yesod-auth-fb",
          "signature": "Creds m -\u003e Maybe UserAccessToken",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#extractCredsAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Get the user access token from Creds created by this backend This function should be used on getAuthId",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "extractCredsAccessToken",
          "normalized": "Creds a-\u003eMaybe UserAccessToken",
          "package": "yesod-auth-fb",
          "partial": "Creds Access Token",
          "signature": "Creds m-\u003eMaybe UserAccessToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:extractCredsAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute that forces the user to log in.  You should avoid\n using this route whenever possible, using \u003ccode\u003e\u003ca\u003efacebookLogin\u003c/a\u003e\u003c/code\u003e is\n much better (after all, this module is for client-side\n authentication).  However, you may want to use it at least for\n \u003ccode\u003e\u003ca\u003eauthRoute\u003c/a\u003e\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eYesod\u003c/a\u003e\u003c/code\u003e MyFoundation where\n   ...\n   \u003ccode\u003e\u003ca\u003eauthRoute\u003c/a\u003e\u003c/code\u003e _ = Just $ AuthR (facebookForceLoginR [])\n\u003c/pre\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookForceLoginR",
          "package": "yesod-auth-fb",
          "signature": "[Permission] -\u003e Route Auth",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#facebookForceLoginR",
          "type": "function"
        },
        "index": {
          "description": "Route that forces the user to log in You should avoid using this route whenever possible using facebookLogin is much better after all this module is for client-side authentication However you may want to use it at least for authRoute e.g instance Yesod MyFoundation where authRoute Just AuthR facebookForceLoginR",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookForceLoginR",
          "normalized": "[Permission]-\u003eRoute Auth",
          "package": "yesod-auth-fb",
          "partial": "Force Login",
          "signature": "[Permission]-\u003eRoute Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:facebookForceLoginR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHamlet that should be spliced \u003cem\u003eright after\u003c/em\u003e the \u003ccode\u003e\u003ca\u003ebody\u003c/a\u003e\u003c/code\u003e tag\n in order for Facebook's JS SDK to work.  For example:\n\u003c/p\u003e\u003cpre\u003e\n   $doctype 5\n   \u003chtml\u003e\n     \u003chead\u003e\n       ...\n     \u003cbody\u003e\n       ^{facebookJSSDK AuthR}\n       ...\n\u003c/pre\u003e\u003cp\u003eFacebook's JS SDK may not work correctly if you place it\n anywhere else on the body.  If you absolutely need to do so,\n avoid any elements placed with \u003ccode\u003eposition: relative\u003c/code\u003e or\n \u003ccode\u003eposition: absolute\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookJSSDK",
          "package": "yesod-auth-fb",
          "signature": "(Route Auth -\u003e Route site) -\u003e WidgetT site IO ()",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#facebookJSSDK",
          "type": "function"
        },
        "index": {
          "description": "Hamlet that should be spliced right after the body tag in order for Facebook JS SDK to work For example doctype html head body facebookJSSDK AuthR Facebook JS SDK may not work correctly if you place it anywhere else on the body If you absolutely need to do so avoid any elements placed with position relative or position absolute",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookJSSDK",
          "normalized": "(Route Auth-\u003eRoute a)-\u003eWidgetT a IO()",
          "package": "yesod-auth-fb",
          "partial": "JSSDK",
          "signature": "(Route Auth-\u003eRoute site)-\u003eWidgetT site IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:facebookJSSDK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavaScript function that should be called in order to login\n the user.  You could splice this into a \u003ccode\u003eonclick\u003c/code\u003e event, for\n example:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ca href=\"#\" onclick=\"#{facebookLogin perms}\"\u003e\n     Login via Facebook\n\u003c/pre\u003e\u003cp\u003eYou should not call this function if the user is already\n logged in.\n\u003c/p\u003e\u003cp\u003eThis is only a helper around Facebook JS SDK's \u003ccode\u003eFB.login()\u003c/code\u003e,\n you may call that function directly if you prefer.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookLogin",
          "package": "yesod-auth-fb",
          "signature": "[Permission] -\u003e JavaScriptCall",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#facebookLogin",
          "type": "function"
        },
        "index": {
          "description": "JavaScript function that should be called in order to login the user You could splice this into onclick event for example href onclick facebookLogin perms Login via Facebook You should not call this function if the user is already logged in This is only helper around Facebook JS SDK FB.login you may call that function directly if you prefer",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookLogin",
          "normalized": "[Permission]-\u003eJavaScriptCall",
          "package": "yesod-auth-fb",
          "partial": "Login",
          "signature": "[Permission]-\u003eJavaScriptCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:facebookLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavaScript function that should be called in order to logout\n the user.  You could splice the result of this widget into a\n \u003ccode\u003eonclick\u003c/code\u003e event, for example:\n\u003c/p\u003e\u003cpre\u003e\n   \u003ca href=\"#\" onclick=\"#{facebookLogout}\"\u003e\n     Logout\n\u003c/pre\u003e\u003cp\u003eThis function used to be just a helper around Facebook JS\n SDK's \u003ccode\u003eFB.logout()\u003c/code\u003e.  However, now it performs a check to see\n if the user is logged via FB and redirects to \u003ccode\u003eyesod-auth\u003c/code\u003e's\n normal \u003ccode\u003eLogoutR\u003c/code\u003e route if not.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookLogout",
          "package": "yesod-auth-fb",
          "signature": "JavaScriptCall",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#facebookLogout",
          "type": "function"
        },
        "index": {
          "description": "JavaScript function that should be called in order to logout the user You could splice the result of this widget into onclick event for example href onclick facebookLogout Logout This function used to be just helper around Facebook JS SDK FB.logout However now it performs check to see if the user is logged via FB and redirects to yesod-auth normal LogoutR route if not",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "facebookLogout",
          "package": "yesod-auth-fb",
          "partial": "Logout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:facebookLogout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(Optional)\u003c/em\u003e Arbitrary JavaScript that will be called on\n Facebook's JS SDK's \u003ccode\u003efbAsyncInit\u003c/code\u003e (i.e. as soon as their SDK\n is loaded).\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "fbAsyncInitJs",
          "package": "yesod-auth-fb",
          "signature": "JavascriptUrl (Route site)",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#fbAsyncInitJs",
          "type": "method"
        },
        "index": {
          "description": "Optional Arbitrary JavaScript that will be called on Facebook JS SDK fbAsyncInit i.e as soon as their SDK is loaded",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "fbAsyncInitJs",
          "package": "yesod-auth-fb",
          "partial": "Async Init Js",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:fbAsyncInitJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA route that serves Facebook's channel file in the \u003cem\u003esame\u003c/em\u003e\n \u003cem\u003esubdomain\u003c/em\u003e as the current request's subdomain.\n\u003c/p\u003e\u003cp\u003eFirst of all, we recomment using \u003ccode\u003e\u003ca\u003eserveChannelFile\u003c/a\u003e\u003c/code\u003e to\n implement the route's handler.  For example, if your route\n is \u003ccode\u003eChannelFileR\u003c/code\u003e, then you just need:\n\u003c/p\u003e\u003cpre\u003e\n   getChannelFileR :: HandlerT site IO ChooseRep\n   getChannelFileR = serveChannelFile\n\u003c/pre\u003e\u003cp\u003eOn most simple cases you may just implement \u003ccode\u003efbChannelFile\u003c/code\u003e\n as\n\u003c/p\u003e\u003cpre\u003e\n   getFbChannelFile = return ChannelFileR\n\u003c/pre\u003e\u003cp\u003eHowever, if your routes span many subdomains, then you must\n have a channel file for each subdomain, otherwise your site\n won't work on old Internet Explorer versions (and maybe even\n on other browsers as well).  That's why \u003ccode\u003e\u003ca\u003egetFbChannelFile\u003c/a\u003e\u003c/code\u003e\n lives inside \u003ccode\u003e\u003ca\u003eHandlerT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getFbChannelFile",
          "package": "yesod-auth-fb",
          "signature": "getFbChannelFile",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#getFbChannelFile",
          "type": "method"
        },
        "index": {
          "description": "route that serves Facebook channel file in the same subdomain as the current request subdomain First of all we recomment using serveChannelFile to implement the route handler For example if your route is ChannelFileR then you just need getChannelFileR HandlerT site IO ChooseRep getChannelFileR serveChannelFile On most simple cases you may just implement fbChannelFile as getFbChannelFile return ChannelFileR However if your routes span many subdomains then you must have channel file for each subdomain otherwise your site won work on old Internet Explorer versions and maybe even on other browsers as well That why getFbChannelFile lives inside HandlerT",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getFbChannelFile",
          "package": "yesod-auth-fb",
          "partial": "Fb Channel File",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:getFbChannelFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(Optional)\u003c/em\u003e Options that should be given to \u003ccode\u003eFB.init()\u003c/code\u003e.\n The default implementation is \u003ccode\u003e\u003ca\u003edefaultFbInitOpts\u003c/a\u003e\u003c/code\u003e.  If you\n intend to override this function, we advise you to also call\n \u003ccode\u003e\u003ca\u003edefaultFbInitOpts\u003c/a\u003e\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e\n     getFbInitOpts = do\n       defOpts \u003c- defaultFbInitOpts\n       ...\n       return (defOpts ++ myOpts)\n\u003c/pre\u003e\u003cp\u003eHowever, if you know what you're doing you're free to\n override any or all values returned by \u003ccode\u003e\u003ca\u003edefaultFbInitOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getFbInitOpts",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO [(Text, Value)]",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#getFbInitOpts",
          "type": "method"
        },
        "index": {
          "description": "Optional Options that should be given to FB.init The default implementation is defaultFbInitOpts If you intend to override this function we advise you to also call defaultFbInitOpts e.g getFbInitOpts do defOpts defaultFbInitOpts return defOpts myOpts However if you know what you re doing you re free to override any or all values returned by defaultFbInitOpts",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getFbInitOpts",
          "normalized": "HandlerT a IO[(Text,Value)]",
          "package": "yesod-auth-fb",
          "partial": "Fb Init Opts",
          "signature": "HandlerT site IO[(Text,Value)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:getFbInitOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(Optional)\u003c/em\u003e Returns which language we should ask for\n Facebook's JS SDK.  You may use information about the\n current request to decide upon a language.  Defaults to\n \u003ccode\u003e\u003ca\u003een_US\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you already use Yesod's I18n capabilities, then there's\n an easy way of implementing this function.  Just create a\n \u003ccode\u003eFbLanguage\u003c/code\u003e message, for example on your \u003ccode\u003een.msg\u003c/code\u003e file:\n\u003c/p\u003e\u003cpre\u003e\n   FbLanguage: en_US\n\u003c/pre\u003e\u003cp\u003eand on your \u003ccode\u003ept.msg\u003c/code\u003e file:\n\u003c/p\u003e\u003cpre\u003e\n   FbLanguage: pt_BR\n\u003c/pre\u003e\u003cp\u003eThen implement \u003ccode\u003e\u003ca\u003egetFbLanguage\u003c/a\u003e\u003c/code\u003e as:\n\u003c/p\u003e\u003cpre\u003e\n   getFbLanguage = ($ MsgFbLanguage) \u003c$\u003e getMessageRender\n\u003c/pre\u003e\u003cp\u003eAlthough somewhat hacky, this trick works perfectly fine and\n \u003cem\u003eguarantees\u003c/em\u003e that all Facebook messages will be in the same\n language as the rest of your site (even if Facebook support\n a language that you don't).\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getFbLanguage",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO Text",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#getFbLanguage",
          "type": "method"
        },
        "index": {
          "description": "Optional Returns which language we should ask for Facebook JS SDK You may use information about the current request to decide upon language Defaults to en US If you already use Yesod I18n capabilities then there an easy way of implementing this function Just create FbLanguage message for example on your en.msg file FbLanguage en US and on your pt.msg file FbLanguage pt BR Then implement getFbLanguage as getFbLanguage MsgFbLanguage getMessageRender Although somewhat hacky this trick works perfectly fine and guarantees that all Facebook messages will be in the same language as the rest of your site even if Facebook support language that you don",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getFbLanguage",
          "package": "yesod-auth-fb",
          "partial": "Fb Language",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:getFbLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the Facebook's user access token from Facebook's cookie.\n Returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the cookie is not found, is not\n authentic, is for another app, is corrupted \u003cem\u003eor\u003c/em\u003e does not\n contains the information needed (maybe the user is not logged\n in).  Note that the returned access token may have expired, we\n recommend using \u003ccode\u003e\u003ca\u003ehasExpired\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003egetUserAccessTokenFromFbCookie\u003c/a\u003e\u003c/code\u003e is completely different\n from the one from the \u003ca\u003eYesod.Auth.Facebook.ServerSide\u003c/a\u003e module.\n This one does not use only the session, which means that (a)\n it's somewhat slower because everytime you call this\n \u003ccode\u003e\u003ca\u003egetUserAccessTokenFromFbCookie\u003c/a\u003e\u003c/code\u003e it needs to reverify the\n cookie, but (b) it is always up-to-date with the latest cookie\n that the Facebook JS SDK has given us and (c) avoids\n duplicating the information from the cookie into the session.\n\u003c/p\u003e\u003cp\u003eNote also that \u003ccode\u003e\u003ca\u003egetUserAccessTokenFromFbCookie\u003c/a\u003e\u003c/code\u003e may return\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e even tough the user is properly logged in.  When you\n force authentication via \u003ccode\u003e\u003ca\u003efacebookForceLoginR\u003c/a\u003e\u003c/code\u003e (e.g., via\n 'requireAuth'/'requireAuthId') we use the server-side flow\n which will not set the cookie until at least the FB JS SDK\n runs on the user-agent, sets the cookie and another request is\n sent to our servers.\n\u003c/p\u003e\u003cp\u003eFor the reason stated on the previous paragraph, you should\n not use this function on \u003ccode\u003e\u003ca\u003egetAuthId\u003c/a\u003e\u003c/code\u003e.  Instead, you should use\n \u003ccode\u003e\u003ca\u003eextractCredsAccessToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getUserAccessTokenFromFbCookie",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO (Either String UserAccessToken)",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#getUserAccessTokenFromFbCookie",
          "type": "function"
        },
        "index": {
          "description": "Get the Facebook user access token from Facebook cookie Returns Left if the cookie is not found is not authentic is for another app is corrupted or does not contains the information needed maybe the user is not logged in Note that the returned access token may have expired we recommend using hasExpired and isValid This getUserAccessTokenFromFbCookie is completely different from the one from the Yesod.Auth.Facebook.ServerSide module This one does not use only the session which means that it somewhat slower because everytime you call this getUserAccessTokenFromFbCookie it needs to reverify the cookie but it is always up-to-date with the latest cookie that the Facebook JS SDK has given us and avoids duplicating the information from the cookie into the session Note also that getUserAccessTokenFromFbCookie may return Left even tough the user is properly logged in When you force authentication via facebookForceLoginR e.g via requireAuth requireAuthId we use the server-side flow which will not set the cookie until at least the FB JS SDK runs on the user-agent sets the cookie and another request is sent to our servers For the reason stated on the previous paragraph you should not use this function on getAuthId Instead you should use extractCredsAccessToken",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "getUserAccessTokenFromFbCookie",
          "package": "yesod-auth-fb",
          "partial": "User Access Token From Fb Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:getUserAccessTokenFromFbCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFacebook's channel file implementation (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/javascript/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eNote that we set an expire time in the far future, so you\n won't be able to re-use this route again.  No common users\n will see this route, so you may use anything.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "serveChannelFile",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO TypedContent",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#serveChannelFile",
          "type": "function"
        },
        "index": {
          "description": "Facebook channel file implementation see https developers.facebook.com docs reference javascript Note that we set an expire time in the far future so you won be able to re-use this route again No common users will see this route so you may use anything",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "serveChannelFile",
          "package": "yesod-auth-fb",
          "partial": "Channel File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:serveChannelFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookie name with the signed request for the given credentials.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "signedRequestCookieName",
          "package": "yesod-auth-fb",
          "signature": "Credentials -\u003e Text",
          "source": "src/Yesod-Auth-Facebook-ClientSide.html#signedRequestCookieName",
          "type": "function"
        },
        "index": {
          "description": "Cookie name with the signed request for the given credentials",
          "hierarchy": "Yesod Auth Facebook ClientSide",
          "module": "Yesod.Auth.Facebook.ClientSide",
          "name": "signedRequestCookieName",
          "normalized": "Credentials-\u003eText",
          "package": "yesod-auth-fb",
          "partial": "Request Cookie Name",
          "signature": "Credentials-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ClientSide.html#v:signedRequestCookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eyesod-auth\u003c/code\u003e authentication plugin using Facebook's\n server-side authentication flow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "ServerSide",
          "package": "yesod-auth-fb",
          "source": "src/Yesod-Auth-Facebook-ServerSide.html",
          "type": "module"
        },
        "index": {
          "description": "yesod-auth authentication plugin using Facebook server-side authentication flow",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "ServerSide",
          "package": "yesod-auth-fb",
          "partial": "Server Side",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYesod authentication plugin using Facebook.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "authFacebook",
          "package": "yesod-auth-fb",
          "signature": "[Permission]-\u003e AuthPlugin site",
          "type": "function"
        },
        "index": {
          "description": "Yesod authentication plugin using Facebook",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "authFacebook",
          "normalized": "[Permission]-\u003eAuthPlugin a",
          "package": "yesod-auth-fb",
          "partial": "Facebook",
          "signature": "[Permission]-\u003eAuthPlugin site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#v:authFacebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete Facebook's user access token from the session.  \u003cem\u003eDo\u003c/em\u003e\n \u003cem\u003enot use\u003c/em\u003e this function unless you know what you're doing.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "deleteUserAccessToken",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO ()",
          "source": "src/Yesod-Auth-Facebook-ServerSide.html#deleteUserAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Delete Facebook user access token from the session Do not use this function unless you know what you re doing",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "deleteUserAccessToken",
          "normalized": "HandlerT a IO()",
          "package": "yesod-auth-fb",
          "partial": "User Access Token",
          "signature": "HandlerT site IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#v:deleteUserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute for login using this authentication plugin.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "facebookLogin",
          "package": "yesod-auth-fb",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Facebook-ServerSide.html#facebookLogin",
          "type": "function"
        },
        "index": {
          "description": "Route for login using this authentication plugin",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "facebookLogin",
          "package": "yesod-auth-fb",
          "partial": "Login",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#v:facebookLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute for logout using this authentication plugin.  This\n will log your user out of your site \u003cem\u003eand\u003c/em\u003e log him out of\n Facebook since, at the time of writing, Facebook's policies\n (\u003ca\u003ehttps://developers.facebook.com/policy/\u003c/a\u003e) specified that the\n user needs to be logged out from Facebook itself as well.  If\n you want to always logout from just your site (and not from\n Facebook), use \u003ccode\u003eLogoutR\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "facebookLogout",
          "package": "yesod-auth-fb",
          "signature": "AuthRoute",
          "source": "src/Yesod-Auth-Facebook-ServerSide.html#facebookLogout",
          "type": "function"
        },
        "index": {
          "description": "Route for logout using this authentication plugin This will log your user out of your site and log him out of Facebook since at the time of writing Facebook policies https developers.facebook.com policy specified that the user needs to be logged out from Facebook itself as well If you want to always logout from just your site and not from Facebook use LogoutR",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "facebookLogout",
          "package": "yesod-auth-fb",
          "partial": "Logout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#v:facebookLogout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the Facebook's user access token from the session.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if it's not found (probably because the user\n is not logged in via \u003ccode\u003eyesod-auth-fb\u003c/code\u003e).  Note that the returned\n access token may have expired, we recommend using\n \u003ccode\u003e\u003ca\u003ehasExpired\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "getUserAccessToken",
          "package": "yesod-auth-fb",
          "signature": "HandlerT site IO (Maybe UserAccessToken)",
          "source": "src/Yesod-Auth-Facebook-ServerSide.html#getUserAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Get the Facebook user access token from the session Returns Nothing if it not found probably because the user is not logged in via yesod-auth-fb Note that the returned access token may have expired we recommend using hasExpired and isValid",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "getUserAccessToken",
          "package": "yesod-auth-fb",
          "partial": "User Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#v:getUserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Facebook's user access token on the user's session.\n Usually you don't need to call this function, but it may\n become handy together with \u003ccode\u003e\u003ca\u003eextendUserAccessToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "setUserAccessToken",
          "package": "yesod-auth-fb",
          "signature": "UserAccessToken -\u003e HandlerT site IO ()",
          "source": "src/Yesod-Auth-Facebook-ServerSide.html#setUserAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Set the Facebook user access token on the user session Usually you don need to call this function but it may become handy together with extendUserAccessToken",
          "hierarchy": "Yesod Auth Facebook ServerSide",
          "module": "Yesod.Auth.Facebook.ServerSide",
          "name": "setUserAccessToken",
          "normalized": "UserAccessToken-\u003eHandlerT a IO()",
          "package": "yesod-auth-fb",
          "partial": "User Access Token",
          "signature": "UserAccessToken-\u003eHandlerT site IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook-ServerSide.html#v:setUserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Yesod.Auth.Facebook.ServerSide instead (since yesod-auth-fb 1.0.3).\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis is a deprecated module that just re-exports\n \u003ca\u003eYesod.Auth.Facebook.ServerSide\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.Facebook",
          "name": "Facebook",
          "package": "yesod-auth-fb",
          "source": "src/Yesod-Auth-Facebook.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use Yesod.Auth.Facebook.ServerSide instead since yesod-auth-fb This is deprecated module that just re-exports Yesod.Auth.Facebook.ServerSide",
          "hierarchy": "Yesod Auth Facebook",
          "module": "Yesod.Auth.Facebook",
          "name": "Facebook",
          "package": "yesod-auth-fb",
          "partial": "Facebook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-fb/docs/Yesod-Auth-Facebook.html#"
      }
    }
  ]
]