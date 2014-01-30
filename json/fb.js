[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "module",
        "fct-source": "src/Facebook.html",
        "fct-type": "module",
        "title": "Facebook"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Facebook",
        "normalized": "",
        "package": "fb",
        "partial": "Facebook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eAn access token.  While you can make some API calls without\n an access token, many require an access token and some will\n give you more information with an appropriate access token.\n\u003c/p\u003e\u003cp\u003eThere are two kinds of access tokens:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eUser access token\u003c/dt\u003e\u003cdd\u003e An access token obtained after an user\n accepts your application.  Let's you access more information\n about that user and act on their behalf (depending on which\n permissions you've asked for).\n\u003c/dd\u003e\u003cdt\u003eApp access token\u003c/dt\u003e\u003cdd\u003e An access token that allows you to take\n administrative actions for your application.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese two kinds of access tokens are distinguished by the\n phantom type on \u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e, which can be \u003ccode\u003e\u003ca\u003eUserKind\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eAppKind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Types.html#AccessToken",
        "fct-type": "data",
        "title": "AccessToken"
      },
      "index": {
        "description": "An access token While you can make some API calls without an access token many require an access token and some will give you more information with an appropriate access token There are two kinds of access tokens User access token An access token obtained after an user accepts your application Let you access more information about that user and act on their behalf depending on which permissions you ve asked for App access token An access token that allows you to take administrative actions for your application These two kinds of access tokens are distinguished by the phantom type on AccessToken which can be UserKind or AppKind",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "AccessToken",
        "normalized": "",
        "package": "fb",
        "partial": "Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AccessTokenData",
      "description": {
        "fct-descr": "\u003cp\u003eThe access token data that is passed to Facebook's API\n calls.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Types.html#AccessTokenData",
        "fct-type": "type",
        "title": "AccessTokenData"
      },
      "index": {
        "description": "The access token data that is passed to Facebook API calls",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "AccessTokenData",
        "normalized": "",
        "package": "fb",
        "partial": "Access Token Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eAn action of your app.  Please refer to Facebook's\n documentation at\n \u003ca\u003ehttps://developers.facebook.com/docs/opengraph/keyconcepts/#actions-objects\u003c/a\u003e\n to see how you can create actions.\n\u003c/p\u003e\u003cp\u003eThis is a \u003ccode\u003enewtype\u003c/code\u003e of \u003ccode\u003eText\u003c/code\u003e that supports only \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e.\n This means that to create an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e you should use the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension.  For example,\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n foo token = do\n   ...\n   createAction \"cook\" [...] token\n\u003c/pre\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Action.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "An action of your app Please refer to Facebook documentation at https developers.facebook.com docs opengraph keyconcepts actions-objects to see how you can create actions This is newtype of Text that supports only IsString This means that to create an Action you should use the OverloadedStrings language extension For example LANGUAGE OverloadedStrings foo token do createAction cook token",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Action",
        "normalized": "",
        "package": "fb",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AppAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAppKind\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Types.html#AppAccessToken",
        "fct-type": "type",
        "title": "AppAccessToken"
      },
      "index": {
        "description": "Type synonym for AccessToken AppKind",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "AppAccessToken",
        "normalized": "",
        "package": "fb",
        "partial": "App Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AppKind",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type used mark an \u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e as an app access\n token.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Types.html#AppKind",
        "fct-type": "data",
        "title": "AppKind"
      },
      "index": {
        "description": "Phantom type used mark an AccessToken as an app access token",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "AppKind",
        "normalized": "",
        "package": "fb",
        "partial": "App Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Argument",
      "description": {
        "fct-descr": "\u003cp\u003eAn argument given to an API call.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Types.html#Argument",
        "fct-type": "type",
        "title": "Argument"
      },
      "index": {
        "description": "An argument given to an API call",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Argument",
        "normalized": "",
        "package": "fb",
        "partial": "Argument",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Auth",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type stating that you have provided your\n \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e and thus have access to the whole API.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Monad.html#Auth",
        "fct-type": "data",
        "title": "Auth"
      },
      "index": {
        "description": "Phantom type stating that you have provided your Credentials and thus have access to the whole API",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Auth",
        "normalized": "",
        "package": "fb",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Checkin",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook check-in (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/checkin/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e We still don't support all fields supported by\n Facebook. Please fill an issue if you need access to any other\n fields.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "data",
        "title": "Checkin"
      },
      "index": {
        "description": "Facebook check-in see https developers.facebook.com docs reference api checkin NOTE We still don support all fields supported by Facebook Please fill an issue if you need access to any other fields",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Checkin",
        "normalized": "",
        "package": "fb",
        "partial": "Checkin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:CheckinFrom",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the user who made the check-in.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Checkin.html#CheckinFrom",
        "fct-type": "data",
        "title": "CheckinFrom"
      },
      "index": {
        "description": "Information about the user who made the check-in",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CheckinFrom",
        "normalized": "",
        "package": "fb",
        "partial": "Checkin From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:CreateTestUser",
      "description": {
        "fct-descr": "\u003cp\u003eData type used to hold information of a new test user. This type\n also accepts a Data.Default value.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUser",
        "fct-type": "data",
        "title": "CreateTestUser"
      },
      "index": {
        "description": "Data type used to hold information of new test user This type also accepts Data.Default value",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CreateTestUser",
        "normalized": "",
        "package": "fb",
        "partial": "Create Test User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:CreateTestUserInstalled",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify if the app is to be installed on the new test user.  If\n it is, then you must tell what permissions should be given.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
        "fct-type": "data",
        "title": "CreateTestUserInstalled"
      },
      "index": {
        "description": "Specify if the app is to be installed on the new test user If it is then you must tell what permissions should be given",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CreateTestUserInstalled",
        "normalized": "",
        "package": "fb",
        "partial": "Create Test User Installed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Credentials",
      "description": {
        "fct-descr": "\u003cp\u003eCredentials that you get for your app when you register on\n Facebook.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Types.html#Credentials",
        "fct-type": "data",
        "title": "Credentials"
      },
      "index": {
        "description": "Credentials that you get for your app when you register on Facebook",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Credentials",
        "normalized": "",
        "package": "fb",
        "partial": "Credentials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:DebugToken",
      "description": {
        "fct-descr": "\u003cp\u003eDetailed information about an access token (cf. \u003ccode\u003e\u003ca\u003edebugToken\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "data",
        "title": "DebugToken"
      },
      "index": {
        "description": "Detailed information about an access token cf debugToken",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "DebugToken",
        "normalized": "",
        "package": "fb",
        "partial": "Debug Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FQLList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e wrapper around lists that works around FQL's\n strange lists.\n\u003c/p\u003e\u003cp\u003eFor example, if you fetch the \u003ccode\u003etagged_uids\u003c/code\u003e field from\n \u003ccode\u003elocation_post\u003c/code\u003e, you'll find that Facebook's FQL represents an\n empty list of tagged UIDs as plain JSON array (\u003ccode\u003e[]\u003c/code\u003e).\n However, it represents a singleton list as an object\n \u003ccode\u003e{\"1234\": 1234}\u003c/code\u003e instead of the much more correct \u003ccode\u003e[1234]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn the other hand, not all FQL arrays are represented in this\n bogus manner.  Also, some so-called arrays by FQL's\n documentation are actually objects, see \u003ccode\u003e\u003ca\u003eFQLObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "newtype",
        "fct-source": "src/Facebook-FQL.html#FQLList",
        "fct-type": "newtype",
        "title": "FQLList"
      },
      "index": {
        "description": "newtype wrapper around lists that works around FQL strange lists For example if you fetch the tagged uids field from location post you ll find that Facebook FQL represents an empty list of tagged UIDs as plain JSON array However it represents singleton list as an object instead of the much more correct On the other hand not all FQL arrays are represented in this bogus manner Also some so-called arrays by FQL documentation are actually objects see FQLObject",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FQLList",
        "normalized": "",
        "package": "fb",
        "partial": "FQLList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FQLObject",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e wrapper around any object that works around FQL's\n strange objects.\n\u003c/p\u003e\u003cp\u003eFor example, if you fetch the \u003ccode\u003eapp_data\u003c/code\u003e field from \u003ccode\u003estream\u003c/code\u003e,\n you'll find that empty objects are actually represented as\n empty lists \u003ccode\u003e[]\u003c/code\u003e instead of a proper empty object \u003ccode\u003e{}\u003c/code\u003e.  Also\n note that FQL's documentation says that \u003ccode\u003eapp_data\u003c/code\u003e is an\n array, which it clear is not.  See also \u003ccode\u003e\u003ca\u003eFQLList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "newtype",
        "fct-source": "src/Facebook-FQL.html#FQLObject",
        "fct-type": "newtype",
        "title": "FQLObject"
      },
      "index": {
        "description": "newtype wrapper around any object that works around FQL strange objects For example if you fetch the app data field from stream you ll find that empty objects are actually represented as empty lists instead of proper empty object Also note that FQL documentation says that app data is an array which it clear is not See also FQLList",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FQLObject",
        "normalized": "",
        "package": "fb",
        "partial": "FQLObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FQLTime",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Deprecated since fb 0.14.7, please use FbUTCTime instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e wrapper around \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that is able to parse\n FQL's time representation as seconds since the Unix epoch.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "newtype",
        "fct-source": "src/Facebook-FQL.html#FQLTime",
        "fct-type": "newtype",
        "title": "FQLTime"
      },
      "index": {
        "description": "Deprecated Deprecated since fb please use FbUTCTime instead newtype wrapper around UTCTime that is able to parse FQL time representation as seconds since the Unix epoch",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FQLTime",
        "normalized": "",
        "package": "fb",
        "partial": "FQLTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FacebookException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception that may be thrown by functions on this\n package.  Includes any information provided by Facebook.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Base.html#FacebookException",
        "fct-type": "data",
        "title": "FacebookException"
      },
      "index": {
        "description": "An exception that may be thrown by functions on this package Includes any information provided by Facebook",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FacebookException",
        "normalized": "",
        "package": "fb",
        "partial": "Facebook Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FacebookT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFacebookT auth m a\u003c/code\u003e is this library's monad transformer.\n Contains information needed to issue commands and queries to\n Facebook.  The phantom type \u003ccode\u003eauth\u003c/code\u003e may be either \u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e (you\n have supplied your \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e) or \u003ccode\u003e\u003ca\u003eNoAuth\u003c/a\u003e\u003c/code\u003e (you have not\n supplied any \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Monad.html#FacebookT",
        "fct-type": "data",
        "title": "FacebookT"
      },
      "index": {
        "description": "FacebookT auth is this library monad transformer Contains information needed to issue commands and queries to Facebook The phantom type auth may be either Auth you have supplied your Credentials or NoAuth you have not supplied any Credentials",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FacebookT",
        "normalized": "",
        "package": "fb",
        "partial": "Facebook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FbUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that follows Facebook's\n conventions of JSON parsing.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e As a string, while \u003ccode\u003eaeson\u003c/code\u003e expects a format of \u003ccode\u003e%FT%T%Q\u003c/code\u003e,\n    Facebook gives time values formatted as \u003ccode\u003e%FT%T%z\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e As a number, \u003ccode\u003e\u003ca\u003eFbUTCTime\u003c/a\u003e\u003c/code\u003e accepts a number of seconds since\n    the Unix epoch.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "newtype",
        "fct-source": "src/Facebook-Types.html#FbUTCTime",
        "fct-type": "newtype",
        "title": "FbUTCTime"
      },
      "index": {
        "description": "newtype for UTCTime that follows Facebook conventions of JSON parsing As string while aeson expects format of FT Facebook gives time values formatted as FT As number FbUTCTime accepts number of seconds since the Unix epoch",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FbUTCTime",
        "normalized": "",
        "package": "fb",
        "partial": "Fb UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Friend",
      "description": {
        "fct-descr": "\u003cp\u003eA friend connection of a \u003ccode\u003e\u003ca\u003eUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-User.html#Friend",
        "fct-type": "data",
        "title": "Friend"
      },
      "index": {
        "description": "friend connection of User",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Friend",
        "normalized": "",
        "package": "fb",
        "partial": "Friend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Gender",
      "description": {
        "fct-descr": "\u003cp\u003eAn user's gender.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-User.html#Gender",
        "fct-type": "data",
        "title": "Gender"
      },
      "index": {
        "description": "An user gender",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Gender",
        "normalized": "",
        "package": "fb",
        "partial": "Gender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:GeoCoordinates",
      "description": {
        "fct-descr": "\u003cp\u003eGeographical coordinates.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Graph.html#GeoCoordinates",
        "fct-type": "data",
        "title": "GeoCoordinates"
      },
      "index": {
        "description": "Geographical coordinates",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "GeoCoordinates",
        "normalized": "",
        "package": "fb",
        "partial": "Geo Coordinates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eThe identification code of an object.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "newtype",
        "fct-source": "src/Facebook-Types.html#Id",
        "fct-type": "newtype",
        "title": "Id"
      },
      "index": {
        "description": "The identification code of an object",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Id",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Location",
      "description": {
        "fct-descr": "\u003cp\u003eA geographical location.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "data",
        "title": "Location"
      },
      "index": {
        "description": "geographical location",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Location",
        "normalized": "",
        "package": "fb",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:NoAuth",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type stating that you have \u003cem\u003enot\u003c/em\u003e provided your\n \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e.  This means that you'll be limited about which\n APIs you'll be able use.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Monad.html#NoAuth",
        "fct-type": "data",
        "title": "NoAuth"
      },
      "index": {
        "description": "Phantom type stating that you have not provided your Credentials This means that you ll be limited about which APIs you ll be able use",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "NoAuth",
        "normalized": "",
        "package": "fb",
        "partial": "No Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Order",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook \u003ccode\u003eOrder\u003c/code\u003e oject.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "data",
        "title": "Order"
      },
      "index": {
        "description": "Facebook Order oject",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Order",
        "normalized": "",
        "package": "fb",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:OrderApplication",
      "description": {
        "fct-descr": "\u003cp\u003eA trimmed down version of Facebook Application as it is used in \u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Order.html#OrderApplication",
        "fct-type": "data",
        "title": "OrderApplication"
      },
      "index": {
        "description": "trimmed down version of Facebook Application as it is used in Order",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "OrderApplication",
        "normalized": "",
        "package": "fb",
        "partial": "Order Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:OrderId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e Id type.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Object-Order.html#OrderId",
        "fct-type": "type",
        "title": "OrderId"
      },
      "index": {
        "description": "Order Id type",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "OrderId",
        "normalized": "",
        "package": "fb",
        "partial": "Order Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:OrderStatus",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook \u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e status type.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Order.html#OrderStatus",
        "fct-type": "data",
        "title": "OrderStatus"
      },
      "index": {
        "description": "Facebook Order status type",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "OrderStatus",
        "normalized": "",
        "package": "fb",
        "partial": "Order Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Page",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook page (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/page/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e Does not yet support all fields. Please file an issue if\n you need any other fields.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "data",
        "title": "Page"
      },
      "index": {
        "description": "Facebook page see https developers.facebook.com docs reference api page NOTE Does not yet support all fields Please file an issue if you need any other fields",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Page",
        "normalized": "",
        "package": "fb",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Pager",
      "description": {
        "fct-descr": "\u003cp\u003eMany Graph API results are returned as a JSON object with\n the following structure:\n\u003c/p\u003e\u003cpre\u003e\n {\n   \"data\": [\n     ...item 1...,\n          :\n     ...item n...\n   ],\n   \"paging\": {\n     \"previous\": \"http:\u003cem/\u003e...link to previous page...\",\n     \"next\":     \"http:\u003cem/\u003e...link to next page...\"\n   }\n }\n\u003c/pre\u003e\u003cp\u003eOnly the \u003ccode\u003e\"data\"\u003c/code\u003e field is required, the others may or may\n not appear.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003ePager a\u003c/code\u003e datatype encodes such result where each item has\n type \u003ccode\u003ea\u003c/code\u003e.  You may use functions \u003ccode\u003e\u003ca\u003efetchNextPage\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efetchPreviousPage\u003c/a\u003e\u003c/code\u003e to navigate through the results.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Pager.html#Pager",
        "fct-type": "data",
        "title": "Pager"
      },
      "index": {
        "description": "Many Graph API results are returned as JSON object with the following structure data item item paging previous http link to previous page next http link to next page Only the data field is required the others may or may not appear Pager datatype encodes such result where each item has type You may use functions fetchNextPage and fetchPreviousPage to navigate through the results",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Pager",
        "normalized": "",
        "package": "fb",
        "partial": "Pager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Permission",
      "description": {
        "fct-descr": "\u003cp\u003eA permission that is asked for the user when he authorizes\n your app.  Please refer to Facebook's documentation at\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/permissions/\u003c/a\u003e\n to see which permissions are available.\n\u003c/p\u003e\u003cp\u003eThis is a \u003ccode\u003enewtype\u003c/code\u003e of \u003ccode\u003eText\u003c/code\u003e that supports only \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e.\n This means that to create a \u003ccode\u003e\u003ca\u003ePermission\u003c/a\u003e\u003c/code\u003e you should use the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension.  For example,\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n perms :: [Permission]\n perms = [\"user_about_me\", \"email\", \"offline_access\"]\n\u003c/pre\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Auth.html#Permission",
        "fct-type": "data",
        "title": "Permission"
      },
      "index": {
        "description": "permission that is asked for the user when he authorizes your app Please refer to Facebook documentation at https developers.facebook.com docs reference api permissions to see which permissions are available This is newtype of Text that supports only IsString This means that to create Permission you should use the OverloadedStrings language extension For example LANGUAGE OverloadedStrings perms Permission perms user about me email offline access",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Permission",
        "normalized": "",
        "package": "fb",
        "partial": "Permission",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Place",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about a place.  This is not a Graph Object,\n instead it's just a field of a Object.  (Not to be confused\n with the \u003ccode\u003ePage\u003c/code\u003e object.)\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Graph.html#Place",
        "fct-type": "data",
        "title": "Place"
      },
      "index": {
        "description": "Information about place This is not Graph Object instead it just field of Object Not to be confused with the Page object",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Place",
        "normalized": "",
        "package": "fb",
        "partial": "Place",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateField",
      "description": {
        "fct-descr": "\u003cp\u003eA field of a \u003ccode\u003e\u003ca\u003eRealTimeUpdateObject\u003c/a\u003e\u003c/code\u003e that you would like to\n receive notifications when changed.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateField",
        "fct-type": "type",
        "title": "RealTimeUpdateField"
      },
      "index": {
        "description": "field of RealTimeUpdateObject that you would like to receive notifications when changed",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateField",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateNotification",
      "description": {
        "fct-descr": "\u003cp\u003eWhen data changes and there's a valid subscription, Facebook\n will \u003ccode\u003ePOST\u003c/code\u003e to your \u003ccode\u003e\u003ca\u003eRealTimeUpdateUrl\u003c/a\u003e\u003c/code\u003e with a JSON-encoded\n object containing the notifications.  A\n 'RealTimeUpdateNotification a' represents such object where\n \u003ccode\u003ea\u003c/code\u003e is type of the entries (e.g.,\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateNotificationUserEntry\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIf you have a single \u003ccode\u003e\u003ca\u003eRealTimeUpdateUrl\u003c/a\u003e\u003c/code\u003e for different kinds\n of notifications, you may parse a \u003ccode\u003eRealTimeUpdateNotification\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and then manually parse the \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e depending on\n the value of \u003ccode\u003e\u003ca\u003ertunObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe recommend using \u003ccode\u003e\u003ca\u003egetRealTimeUpdateNotifications\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
        "fct-type": "data",
        "title": "RealTimeUpdateNotification"
      },
      "index": {
        "description": "When data changes and there valid subscription Facebook will POST to your RealTimeUpdateUrl with JSON-encoded object containing the notifications RealTimeUpdateNotification represents such object where is type of the entries e.g RealTimeUpdateNotificationUserEntry If you have single RealTimeUpdateUrl for different kinds of notifications you may parse RealTimeUpdateNotification Value and then manually parse the Value depending on the value of rtunObject We recommend using getRealTimeUpdateNotifications",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateNotification",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateNotificationUserEntry",
      "description": {
        "fct-descr": "\u003cp\u003eA notification for the \u003ccode\u003e\u003ca\u003eUserRTUO\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
        "fct-type": "data",
        "title": "RealTimeUpdateNotificationUserEntry"
      },
      "index": {
        "description": "notification for the UserRTUO object",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateNotificationUserEntry",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Notification User Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateObject",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of objects that a real-time update refers to.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
        "fct-type": "data",
        "title": "RealTimeUpdateObject"
      },
      "index": {
        "description": "The type of objects that real-time update refers to",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateObject",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateSubscription",
      "description": {
        "fct-descr": "\u003cp\u003eInformation returned by Facebook about a real-time update\n notification subscription.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
        "fct-type": "data",
        "title": "RealTimeUpdateSubscription"
      },
      "index": {
        "description": "Information returned by Facebook about real-time update notification subscription",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateSubscription",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Subscription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateToken",
      "description": {
        "fct-descr": "\u003cp\u003eA token that is sent back by Facebook's servers to your\n server in order to verify that you really were trying to\n modify your subscription.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateToken",
        "fct-type": "type",
        "title": "RealTimeUpdateToken"
      },
      "index": {
        "description": "token that is sent back by Facebook servers to your server in order to verify that you really were trying to modify your subscription",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateToken",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateUrl",
      "description": {
        "fct-descr": "\u003cp\u003eThe URL on your server that will receive the real-time\n updates.  Please refer to Facebook's documentation in order to\n see what this URL needs to implement.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateUrl",
        "fct-type": "type",
        "title": "RealTimeUpdateUrl"
      },
      "index": {
        "description": "The URL on your server that will receive the real-time updates Please refer to Facebook documentation in order to see what this URL needs to implement",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateUrl",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RedirectUrl",
      "description": {
        "fct-descr": "\u003cp\u003eURL where the user is redirected to after Facebook\n authenticates the user authorizes your application.  This URL\n should be inside the domain registered for your Facebook\n application.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Auth.html#RedirectUrl",
        "fct-type": "type",
        "title": "RedirectUrl"
      },
      "index": {
        "description": "URL where the user is redirected to after Facebook authenticates the user authorizes your application This URL should be inside the domain registered for your Facebook application",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RedirectUrl",
        "normalized": "",
        "package": "fb",
        "partial": "Redirect Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:SimpleType",
      "description": {
        "fct-descr": "\u003cp\u003eClass for data types that may be represented as a Facebook\n simple type. (see\n \u003ca\u003ehttps://developers.facebook.com/docs/opengraph/simpletypes/\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "class",
        "fct-source": "src/Facebook-Graph.html#SimpleType",
        "fct-type": "class",
        "title": "SimpleType"
      },
      "index": {
        "description": "Class for data types that may be represented as Facebook simple type see https developers.facebook.com docs opengraph simpletypes",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "SimpleType",
        "normalized": "",
        "package": "fb",
        "partial": "Simple Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eA tag (i.e. \"I'll \u003cem\u003etag\u003c/em\u003e you on my post\").\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Graph.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "tag i.e ll tag you on my post",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Tag",
        "normalized": "",
        "package": "fb",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:TestUser",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook test user.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "data",
        "title": "TestUser"
      },
      "index": {
        "description": "Facebook test user",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "TestUser",
        "normalized": "",
        "package": "fb",
        "partial": "Test User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:User",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook user profile (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/user/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e We still don't support all fields supported by\n Facebook. Please fill an issue if you need access to any other\n fields.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "data",
        "title": "User"
      },
      "index": {
        "description": "Facebook user profile see https developers.facebook.com docs reference api user NOTE We still don support all fields supported by Facebook Please fill an issue if you need access to any other fields",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "User",
        "normalized": "",
        "package": "fb",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:UserAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUserKind\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Types.html#UserAccessToken",
        "fct-type": "type",
        "title": "UserAccessToken"
      },
      "index": {
        "description": "Type synonym for AccessToken UserKind",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "UserAccessToken",
        "normalized": "",
        "package": "fb",
        "partial": "User Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:UserId",
      "description": {
        "fct-descr": "\u003cp\u003eA Facebook user ID such as \u003ccode\u003e1008905713901\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "type",
        "fct-source": "src/Facebook-Types.html#UserId",
        "fct-type": "type",
        "title": "UserId"
      },
      "index": {
        "description": "Facebook user ID such as",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "UserId",
        "normalized": "",
        "package": "fb",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:UserKind",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type used mark an \u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e as an user access\n token.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "data",
        "fct-source": "src/Facebook-Types.html#UserKind",
        "fct-type": "data",
        "title": "UserKind"
      },
      "index": {
        "description": "Phantom type used mark an AccessToken as an user access token",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "UserKind",
        "normalized": "",
        "package": "fb",
        "partial": "User Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:-35--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eArgument\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eSimpleType\u003c/a\u003e\u003c/code\u003e.  See the docs on\n \u003ccode\u003ecreateAction\u003c/code\u003e for an example.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ByteString -\u003e a -\u003e Argument",
        "fct-source": "src/Facebook-Graph.html#%23%3D",
        "fct-type": "function",
        "title": "(#=)"
      },
      "index": {
        "description": "Create an Argument with SimpleType See the docs on createAction for an example",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "(#=) #=",
        "normalized": "ByteString-\u003ea-\u003eArgument",
        "package": "fb",
        "partial": "",
        "signature": "ByteString-\u003ea-\u003eArgument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:AppAccessToken",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "AccessTokenData -\u003e AccessToken AppKind",
        "fct-source": "src/Facebook-Types.html#AccessToken",
        "fct-type": "function",
        "title": "AppAccessToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "AppAccessToken",
        "normalized": "AccessTokenData-\u003eAccessToken AppKind",
        "package": "fb",
        "partial": "App Access Token",
        "signature": "AccessTokenData-\u003eAccessToken AppKind"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Checkin",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Checkin",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "Checkin"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Checkin",
        "normalized": "",
        "package": "fb",
        "partial": "Checkin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CheckinFrom",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CheckinFrom",
        "fct-source": "src/Facebook-Object-Checkin.html#CheckinFrom",
        "fct-type": "function",
        "title": "CheckinFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CheckinFrom",
        "normalized": "",
        "package": "fb",
        "partial": "Checkin From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUser",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CreateTestUser",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUser",
        "fct-type": "function",
        "title": "CreateTestUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CreateTestUser",
        "normalized": "",
        "package": "fb",
        "partial": "Create Test User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUserFbDefault",
      "description": {
        "fct-descr": "\u003cp\u003eUses Facebook's default. It seems that this is equivalent to\n \u003ccode\u003eCreateTestUserInstalled []\u003c/code\u003e, but Facebook's documentation is\n not clear about it.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CreateTestUserFbDefault",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
        "fct-type": "function",
        "title": "CreateTestUserFbDefault"
      },
      "index": {
        "description": "Uses Facebook default It seems that this is equivalent to CreateTestUserInstalled but Facebook documentation is not clear about it",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CreateTestUserFbDefault",
        "normalized": "",
        "package": "fb",
        "partial": "Create Test User Fb Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUserInstalled",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CreateTestUserInstalled",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
        "fct-type": "function",
        "title": "CreateTestUserInstalled"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CreateTestUserInstalled",
        "normalized": "",
        "package": "fb",
        "partial": "Create Test User Installed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUserNotInstalled",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CreateTestUserNotInstalled",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
        "fct-type": "function",
        "title": "CreateTestUserNotInstalled"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "CreateTestUserNotInstalled",
        "normalized": "",
        "package": "fb",
        "partial": "Create Test User Not Installed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Credentials",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Credentials",
        "fct-source": "src/Facebook-Types.html#Credentials",
        "fct-type": "function",
        "title": "Credentials"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Credentials",
        "normalized": "",
        "package": "fb",
        "partial": "Credentials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:DebugToken",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "DebugToken",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "DebugToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "DebugToken",
        "normalized": "",
        "package": "fb",
        "partial": "Debug Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ErrorsRTUO",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ErrorsRTUO",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
        "fct-type": "function",
        "title": "ErrorsRTUO"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "ErrorsRTUO",
        "normalized": "",
        "package": "fb",
        "partial": "Errors RTUO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FQLList",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FQLList",
        "fct-source": "src/Facebook-FQL.html#FQLList",
        "fct-type": "function",
        "title": "FQLList"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FQLList",
        "normalized": "",
        "package": "fb",
        "partial": "FQLList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FQLObject",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FQLObject",
        "fct-source": "src/Facebook-FQL.html#FQLObject",
        "fct-type": "function",
        "title": "FQLObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FQLObject",
        "normalized": "",
        "package": "fb",
        "partial": "FQLObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FQLTime",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Deprecated since fb 0.14.7, please use FbUTCTime instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FQLTime",
        "fct-source": "src/Facebook-FQL.html#FQLTime",
        "fct-type": "function",
        "title": "FQLTime"
      },
      "index": {
        "description": "Deprecated Deprecated since fb please use FbUTCTime instead",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FQLTime",
        "normalized": "",
        "package": "fb",
        "partial": "FQLTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FacebookException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception coming from Facebook.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FacebookException",
        "fct-source": "src/Facebook-Base.html#FacebookException",
        "fct-type": "function",
        "title": "FacebookException"
      },
      "index": {
        "description": "An exception coming from Facebook",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FacebookException",
        "normalized": "",
        "package": "fb",
        "partial": "Facebook Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FbLibraryException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception coming from the \u003ccode\u003efb\u003c/code\u003e package's code.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FbLibraryException",
        "fct-source": "src/Facebook-Base.html#FacebookException",
        "fct-type": "function",
        "title": "FbLibraryException"
      },
      "index": {
        "description": "An exception coming from the fb package code",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FbLibraryException",
        "normalized": "",
        "package": "fb",
        "partial": "Fb Library Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FbUTCTime",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FbUTCTime",
        "fct-source": "src/Facebook-Types.html#FbUTCTime",
        "fct-type": "function",
        "title": "FbUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "FbUTCTime",
        "normalized": "",
        "package": "fb",
        "partial": "Fb UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Female",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Female",
        "fct-source": "src/Facebook-Object-User.html#Gender",
        "fct-type": "function",
        "title": "Female"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Female",
        "normalized": "",
        "package": "fb",
        "partial": "Female",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Friend",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Friend",
        "fct-source": "src/Facebook-Object-User.html#Friend",
        "fct-type": "function",
        "title": "Friend"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Friend",
        "normalized": "",
        "package": "fb",
        "partial": "Friend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:GeoCoordinates",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "GeoCoordinates",
        "fct-source": "src/Facebook-Graph.html#GeoCoordinates",
        "fct-type": "function",
        "title": "GeoCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "GeoCoordinates",
        "normalized": "",
        "package": "fb",
        "partial": "Geo Coordinates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Id",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id",
        "fct-source": "src/Facebook-Types.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Id",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Location",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Location",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "Location"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Location",
        "normalized": "",
        "package": "fb",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Male",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Male",
        "fct-source": "src/Facebook-Object-User.html#Gender",
        "fct-type": "function",
        "title": "Male"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Male",
        "normalized": "",
        "package": "fb",
        "partial": "Male",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Order",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Order",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "Order"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Order",
        "normalized": "",
        "package": "fb",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:OtherRTUO",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "OtherRTUO Text",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
        "fct-type": "function",
        "title": "OtherRTUO"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "OtherRTUO",
        "normalized": "",
        "package": "fb",
        "partial": "Other RTUO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Page",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Page",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "Page"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Page",
        "normalized": "",
        "package": "fb",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:PageRTUO",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "PageRTUO",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
        "fct-type": "function",
        "title": "PageRTUO"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "PageRTUO",
        "normalized": "",
        "package": "fb",
        "partial": "Page RTUO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Pager",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Pager",
        "fct-source": "src/Facebook-Pager.html#Pager",
        "fct-type": "function",
        "title": "Pager"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Pager",
        "normalized": "",
        "package": "fb",
        "partial": "Pager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:PermissionsRTUO",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "PermissionsRTUO",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
        "fct-type": "function",
        "title": "PermissionsRTUO"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "PermissionsRTUO",
        "normalized": "",
        "package": "fb",
        "partial": "Permissions RTUO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Place",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Place",
        "fct-source": "src/Facebook-Graph.html#Place",
        "fct-type": "function",
        "title": "Place"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Place",
        "normalized": "",
        "package": "fb",
        "partial": "Place",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RealTimeUpdateNotification",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateNotification",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
        "fct-type": "function",
        "title": "RealTimeUpdateNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateNotification",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RealTimeUpdateNotificationUserEntry",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateNotificationUserEntry",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
        "fct-type": "function",
        "title": "RealTimeUpdateNotificationUserEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateNotificationUserEntry",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Notification User Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RealTimeUpdateSubscription",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateSubscription",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
        "fct-type": "function",
        "title": "RealTimeUpdateSubscription"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "RealTimeUpdateSubscription",
        "normalized": "",
        "package": "fb",
        "partial": "Real Time Update Subscription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Tag",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Tag",
        "fct-source": "src/Facebook-Graph.html#Tag",
        "fct-type": "function",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "Tag",
        "normalized": "",
        "package": "fb",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:TestUser",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "TestUser",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "function",
        "title": "TestUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "TestUser",
        "normalized": "",
        "package": "fb",
        "partial": "Test User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:User",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "User",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "User"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "User",
        "normalized": "",
        "package": "fb",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:UserAccessToken",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId -\u003e AccessTokenData -\u003e UTCTime -\u003e AccessToken UserKind",
        "fct-source": "src/Facebook-Types.html#AccessToken",
        "fct-type": "function",
        "title": "UserAccessToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "UserAccessToken",
        "normalized": "UserId-\u003eAccessTokenData-\u003eUTCTime-\u003eAccessToken UserKind",
        "package": "fb",
        "partial": "User Access Token",
        "signature": "UserId-\u003eAccessTokenData-\u003eUTCTime-\u003eAccessToken UserKind"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:UserRTUO",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserRTUO",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
        "fct-type": "function",
        "title": "UserRTUO"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "UserRTUO",
        "normalized": "",
        "package": "fb",
        "partial": "User RTUO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:appId",
      "description": {
        "fct-descr": "\u003cp\u003eYour application ID.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Types.html#Credentials",
        "fct-type": "function",
        "title": "appId"
      },
      "index": {
        "description": "Your application ID",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "appId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:appName",
      "description": {
        "fct-descr": "\u003cp\u003eYour application name (e.g. for Open Graph calls).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Types.html#Credentials",
        "fct-type": "function",
        "title": "appName"
      },
      "index": {
        "description": "Your application name e.g for Open Graph calls",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "appName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:appSecret",
      "description": {
        "fct-descr": "\u003cp\u003eYour application secret key.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Types.html#Credentials",
        "fct-type": "function",
        "title": "appSecret"
      },
      "index": {
        "description": "Your application secret key",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "appSecret",
        "normalized": "",
        "package": "fb",
        "partial": "Secret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:beta_runFacebookT",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunFacebookT\u003c/a\u003e\u003c/code\u003e, but uses Facebook's beta tier (see\n \u003ca\u003ehttps://developers.facebook.com/support/beta-tier/\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Credentials -\u003e Manager -\u003e FacebookT Auth m a -\u003e m a",
        "fct-source": "src/Facebook-Monad.html#beta_runFacebookT",
        "fct-type": "function",
        "title": "beta_runFacebookT"
      },
      "index": {
        "description": "Same as runFacebookT but uses Facebook beta tier see https developers.facebook.com support beta-tier",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "beta_runFacebookT",
        "normalized": "Credentials-\u003eManager-\u003eFacebookT Auth a b-\u003ea b",
        "package": "fb",
        "partial": "Facebook",
        "signature": "Credentials-\u003eManager-\u003eFacebookT Auth m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:beta_runNoAuthFacebookT",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunNoAuthFacebookT\u003c/a\u003e\u003c/code\u003e, but uses Facebook's beta tier\n (see \u003ca\u003ehttps://developers.facebook.com/support/beta-tier/\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Manager -\u003e FacebookT NoAuth m a -\u003e m a",
        "fct-source": "src/Facebook-Monad.html#beta_runNoAuthFacebookT",
        "fct-type": "function",
        "title": "beta_runNoAuthFacebookT"
      },
      "index": {
        "description": "Same as runNoAuthFacebookT but uses Facebook beta tier see https developers.facebook.com support beta-tier",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "beta_runNoAuthFacebookT",
        "normalized": "Manager-\u003eFacebookT NoAuth a b-\u003ea b",
        "package": "fb",
        "partial": "No Auth Facebook",
        "signature": "Manager-\u003eFacebookT NoAuth m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinCreatedTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "checkinCreatedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinCreatedTime",
        "normalized": "",
        "package": "fb",
        "partial": "Created Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinFrom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe CheckinFrom",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "checkinFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinFrom",
        "normalized": "",
        "package": "fb",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinFromId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId",
        "fct-source": "src/Facebook-Object-Checkin.html#CheckinFrom",
        "fct-type": "function",
        "title": "checkinFromId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinFromId",
        "normalized": "",
        "package": "fb",
        "partial": "From Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinFromName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Object-Checkin.html#CheckinFrom",
        "fct-type": "function",
        "title": "checkinFromName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinFromName",
        "normalized": "",
        "package": "fb",
        "partial": "From Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "checkinId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "checkinMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinMessage",
        "normalized": "",
        "package": "fb",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinPlace",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Place",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "checkinPlace"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinPlace",
        "normalized": "",
        "package": "fb",
        "partial": "Place",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinTags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe (Pager Tag)",
        "fct-source": "src/Facebook-Object-Checkin.html#Checkin",
        "fct-type": "function",
        "title": "checkinTags"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "checkinTags",
        "normalized": "",
        "package": "fb",
        "partial": "Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:createAction",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an Open Graph action on the user's timeline. Returns\n the \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e of the newly created action.  For example:\n\u003c/p\u003e\u003cpre\u003e now \u003c- liftIO getCurrentTime\n createAction \"cook\"\n              [ \"recipe\" #= \"http://example.com/cookie.html\"\n              , \"when\"   #= now ]\n              token\n\u003c/pre\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Action-\u003e [Argument]-\u003e Maybe AppAccessToken-\u003e UserAccessToken-\u003e FacebookT Auth m Id",
        "fct-type": "function",
        "title": "createAction"
      },
      "index": {
        "description": "Creates an Open Graph action on the user timeline Returns the Id of the newly created action For example now liftIO getCurrentTime createAction cook recipe http example.com cookie.html when now token",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "createAction",
        "normalized": "Action-\u003e[Argument]-\u003eMaybe AppAccessToken-\u003eUserAccessToken-\u003eFacebookT Auth a Id",
        "package": "fb",
        "partial": "Action",
        "signature": "Action-\u003e[Argument]-\u003eMaybe AppAccessToken-\u003eUserAccessToken-\u003eFacebookT Auth m Id"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:createCheckin",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 'check-in' and returns its ID. Place and\n coordinates are both required by Facebook.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id-\u003e GeoCoordinates-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT Auth m Id",
        "fct-type": "function",
        "title": "createCheckin"
      },
      "index": {
        "description": "Creates check-in and returns its ID Place and coordinates are both required by Facebook",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "createCheckin",
        "normalized": "Id-\u003eGeoCoordinates-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT Auth a Id",
        "package": "fb",
        "partial": "Checkin",
        "signature": "Id-\u003eGeoCoordinates-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT Auth m Id"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:createTestUser",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new test user.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CreateTestUser-\u003e AppAccessToken-\u003e FacebookT Auth m TestUser",
        "fct-type": "function",
        "title": "createTestUser"
      },
      "index": {
        "description": "Create new test user",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "createTestUser",
        "normalized": "CreateTestUser-\u003eAppAccessToken-\u003eFacebookT Auth a TestUser",
        "package": "fb",
        "partial": "Test User",
        "signature": "CreateTestUser-\u003eAppAccessToken-\u003eFacebookT Auth m TestUser"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuInstalled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "CreateTestUserInstalled",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUser",
        "fct-type": "function",
        "title": "ctuInstalled"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "ctuInstalled",
        "normalized": "",
        "package": "fb",
        "partial": "Installed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuLocale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUser",
        "fct-type": "function",
        "title": "ctuLocale"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "ctuLocale",
        "normalized": "",
        "package": "fb",
        "partial": "Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUser",
        "fct-type": "function",
        "title": "ctuName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "ctuName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuiPermissions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "[Permission]",
        "fct-source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
        "fct-type": "function",
        "title": "ctuiPermissions"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "ctuiPermissions",
        "normalized": "[Permission]",
        "package": "fb",
        "partial": "Permissions",
        "signature": "[Permission]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:debugToken",
      "description": {
        "fct-descr": "\u003cp\u003eGet detailed information about an access token.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "AppAccessToken-\u003e AccessTokenData-\u003e FacebookT Auth m DebugToken",
        "fct-type": "function",
        "title": "debugToken"
      },
      "index": {
        "description": "Get detailed information about an access token",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "debugToken",
        "normalized": "AppAccessToken-\u003eAccessTokenData-\u003eFacebookT Auth a DebugToken",
        "package": "fb",
        "partial": "Token",
        "signature": "AppAccessToken-\u003eAccessTokenData-\u003eFacebookT Auth m DebugToken"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:deleteObject",
      "description": {
        "fct-descr": "\u003cp\u003eMake a raw \u003ccode\u003eDELETE\u003c/code\u003e request to Facebook's Graph API.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text-\u003e [Argument]-\u003e AccessToken anyKind-\u003e FacebookT Auth m a",
        "fct-type": "function",
        "title": "deleteObject"
      },
      "index": {
        "description": "Make raw DELETE request to Facebook Graph API",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "deleteObject",
        "normalized": "Text-\u003e[Argument]-\u003eAccessToken a-\u003eFacebookT Auth b c",
        "package": "fb",
        "partial": "Object",
        "signature": "Text-\u003e[Argument]-\u003eAccessToken anyKind-\u003eFacebookT Auth m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtAccessToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe UserAccessToken",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtAccessToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtAccessToken",
        "normalized": "",
        "package": "fb",
        "partial": "Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtAppId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtAppId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtAppId",
        "normalized": "",
        "package": "fb",
        "partial": "App Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtAppName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtAppName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtAppName",
        "normalized": "",
        "package": "fb",
        "partial": "App Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtExpiresAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtExpiresAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtExpiresAt",
        "normalized": "",
        "package": "fb",
        "partial": "Expires At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtIsValid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtIsValid"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtIsValid",
        "normalized": "",
        "package": "fb",
        "partial": "Is Valid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtIssuedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtIssuedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtIssuedAt",
        "normalized": "",
        "package": "fb",
        "partial": "Issued At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtScopes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe [Permission]",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtScopes"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtScopes",
        "normalized": "Maybe[Permission]",
        "package": "fb",
        "partial": "Scopes",
        "signature": "Maybe[Permission]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtUserId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Id",
        "fct-source": "src/Facebook-Auth.html#DebugToken",
        "fct-type": "function",
        "title": "dtUserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "dtUserId",
        "normalized": "",
        "package": "fb",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:encodeFbParam",
      "description": {
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Facebook-Graph.html#encodeFbParam",
        "fct-type": "method",
        "title": "encodeFbParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "encodeFbParam",
        "normalized": "a-\u003eByteString",
        "package": "fb",
        "partial": "Fb Param",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:extendUserAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the expiration time of an user access token (see\n \u003ca\u003ehttps://developers.facebook.com/docs/offline-access-deprecation/\u003c/a\u003e,\n \u003ca\u003ehttps://developers.facebook.com/roadmap/offline-access-removal/\u003c/a\u003e).\n Only short-lived user access tokens may extended into\n long-lived user access tokens, you must get a new short-lived\n user access token if you need to extend a long-lived\n one.  Returns \u003ccode\u003eLeft exc\u003c/code\u003e if there is an error while extending,\n or \u003ccode\u003eRight token\u003c/code\u003e with the new user access token (which could\n have the same data and expiration time as before, but you\n can't assume this).  Note that expired access tokens can't be\n extended, only valid tokens.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserAccessToken -\u003e FacebookT Auth m (Either FacebookException UserAccessToken)",
        "fct-source": "src/Facebook-Auth.html#extendUserAccessToken",
        "fct-type": "function",
        "title": "extendUserAccessToken"
      },
      "index": {
        "description": "Extend the expiration time of an user access token see https developers.facebook.com docs offline-access-deprecation https developers.facebook.com roadmap offline-access-removal Only short-lived user access tokens may extended into long-lived user access tokens you must get new short-lived user access token if you need to extend long-lived one Returns Left exc if there is an error while extending or Right token with the new user access token which could have the same data and expiration time as before but you can assume this Note that expired access tokens can be extended only valid tokens",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "extendUserAccessToken",
        "normalized": "UserAccessToken-\u003eFacebookT Auth a(Either FacebookException UserAccessToken)",
        "package": "fb",
        "partial": "User Access Token",
        "signature": "UserAccessToken-\u003eFacebookT Auth m(Either FacebookException UserAccessToken)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fbeMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Base.html#FacebookException",
        "fct-type": "function",
        "title": "fbeMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fbeMessage",
        "normalized": "",
        "package": "fb",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fbeType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Base.html#FacebookException",
        "fct-type": "function",
        "title": "fbeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fbeType",
        "normalized": "",
        "package": "fb",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchAllNextPages",
      "description": {
        "fct-descr": "\u003cp\u003eTries to fetch all next pages and returns a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e with\n all results.  The \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e will include the results from\n this page as well.  Previous pages will not be considered.\n Next pages will be fetched on-demand.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Pager a -\u003e FacebookT anyAuth m (Source n a)",
        "fct-source": "src/Facebook-Pager.html#fetchAllNextPages",
        "fct-type": "function",
        "title": "fetchAllNextPages"
      },
      "index": {
        "description": "Tries to fetch all next pages and returns Source with all results The Source will include the results from this page as well Previous pages will not be considered Next pages will be fetched on-demand",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fetchAllNextPages",
        "normalized": "Pager a-\u003eFacebookT b c(Source d a)",
        "package": "fb",
        "partial": "All Next Pages",
        "signature": "Pager a-\u003eFacebookT anyAuth m(Source n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchAllPreviousPages",
      "description": {
        "fct-descr": "\u003cp\u003eTries to fetch all previous pages and returns a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e\n with all results.  The \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e will include the results\n from this page as well.  Next pages will not be\n considered.  Previous pages will be fetched on-demand.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Pager a -\u003e FacebookT anyAuth m (Source n a)",
        "fct-source": "src/Facebook-Pager.html#fetchAllPreviousPages",
        "fct-type": "function",
        "title": "fetchAllPreviousPages"
      },
      "index": {
        "description": "Tries to fetch all previous pages and returns Source with all results The Source will include the results from this page as well Next pages will not be considered Previous pages will be fetched on-demand",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fetchAllPreviousPages",
        "normalized": "Pager a-\u003eFacebookT b c(Source d a)",
        "package": "fb",
        "partial": "All Previous Pages",
        "signature": "Pager a-\u003eFacebookT anyAuth m(Source n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchNextPage",
      "description": {
        "fct-descr": "\u003cp\u003eTries to fetch the next page of a \u003ccode\u003e\u003ca\u003ePager\u003c/a\u003e\u003c/code\u003e.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e whenever the current \u003ccode\u003ePager\u003c/code\u003e does not have a\n \u003ccode\u003e\u003ca\u003epagerNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Pager a -\u003e FacebookT anyAuth m (Maybe (Pager a))",
        "fct-source": "src/Facebook-Pager.html#fetchNextPage",
        "fct-type": "function",
        "title": "fetchNextPage"
      },
      "index": {
        "description": "Tries to fetch the next page of Pager Returns Nothing whenever the current Pager does not have pagerNext",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fetchNextPage",
        "normalized": "Pager a-\u003eFacebookT b c(Maybe(Pager a))",
        "package": "fb",
        "partial": "Next Page",
        "signature": "Pager a-\u003eFacebookT anyAuth m(Maybe(Pager a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchPreviousPage",
      "description": {
        "fct-descr": "\u003cp\u003eTries to fetch the previous page of a \u003ccode\u003e\u003ca\u003ePager\u003c/a\u003e\u003c/code\u003e.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e whenever the current \u003ccode\u003ePager\u003c/code\u003e does not have a\n \u003ccode\u003e\u003ca\u003epagerPrevious\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Pager a -\u003e FacebookT anyAuth m (Maybe (Pager a))",
        "fct-source": "src/Facebook-Pager.html#fetchPreviousPage",
        "fct-type": "function",
        "title": "fetchPreviousPage"
      },
      "index": {
        "description": "Tries to fetch the previous page of Pager Returns Nothing whenever the current Pager does not have pagerPrevious",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fetchPreviousPage",
        "normalized": "Pager a-\u003eFacebookT b c(Maybe(Pager a))",
        "package": "fb",
        "partial": "Previous Page",
        "signature": "Pager a-\u003eFacebookT anyAuth m(Maybe(Pager a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fqlQuery",
      "description": {
        "fct-descr": "\u003cp\u003eQuery the Facebook Graph using FQL.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text-\u003e Maybe (AccessToken anyKind)-\u003e FacebookT anyAuth m (Pager a)",
        "fct-type": "function",
        "title": "fqlQuery"
      },
      "index": {
        "description": "Query the Facebook Graph using FQL",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "fqlQuery",
        "normalized": "Text-\u003eMaybe(AccessToken a)-\u003eFacebookT b c(Pager d)",
        "package": "fb",
        "partial": "Query",
        "signature": "Text-\u003eMaybe(AccessToken anyKind)-\u003eFacebookT anyAuth m(Pager a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId",
        "fct-source": "src/Facebook-Object-User.html#Friend",
        "fct-type": "function",
        "title": "friendId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "friendId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Object-User.html#Friend",
        "fct-type": "function",
        "title": "friendName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "friendName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getAppAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eGet an app access token from Facebook using your\n credentials.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "FacebookT Auth m AppAccessToken",
        "fct-source": "src/Facebook-Auth.html#getAppAccessToken",
        "fct-type": "function",
        "title": "getAppAccessToken"
      },
      "index": {
        "description": "Get an app access token from Facebook using your credentials",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getAppAccessToken",
        "normalized": "",
        "package": "fb",
        "partial": "App Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getCheckin",
      "description": {
        "fct-descr": "\u003cp\u003eGet a checkin from its ID.  The user access token is\n optional, but when provided more information can be returned\n back by Facebook.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m Checkin",
        "fct-type": "function",
        "title": "getCheckin"
      },
      "index": {
        "description": "Get checkin from its ID The user access token is optional but when provided more information can be returned back by Facebook",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getCheckin",
        "normalized": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b Checkin",
        "package": "fb",
        "partial": "Checkin",
        "signature": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m Checkin"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getObject",
      "description": {
        "fct-descr": "\u003cp\u003eMake a raw \u003ccode\u003eGET\u003c/code\u003e request to Facebook's Graph API.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text-\u003e [Argument]-\u003e Maybe (AccessToken anyKind)-\u003e FacebookT anyAuth m a",
        "fct-type": "function",
        "title": "getObject"
      },
      "index": {
        "description": "Make raw GET request to Facebook Graph API",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getObject",
        "normalized": "Text-\u003e[Argument]-\u003eMaybe(AccessToken a)-\u003eFacebookT b c d",
        "package": "fb",
        "partial": "Object",
        "signature": "Text-\u003e[Argument]-\u003eMaybe(AccessToken anyKind)-\u003eFacebookT anyAuth m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getOrder",
      "description": {
        "fct-descr": "\u003cp\u003eGet an \u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e using its \u003ccode\u003e\u003ca\u003eOrderId\u003c/a\u003e\u003c/code\u003e.  The user access token\n is mandatory.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "OrderId-\u003e UserAccessToken-\u003e FacebookT anyAuth m Order",
        "fct-type": "function",
        "title": "getOrder"
      },
      "index": {
        "description": "Get an Order using its OrderId The user access token is mandatory",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getOrder",
        "normalized": "OrderId-\u003eUserAccessToken-\u003eFacebookT a b Order",
        "package": "fb",
        "partial": "Order",
        "signature": "OrderId-\u003eUserAccessToken-\u003eFacebookT anyAuth m Order"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getPage",
      "description": {
        "fct-descr": "\u003cp\u003eGet a page using its ID. The user access token is optional.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m Page",
        "fct-type": "function",
        "title": "getPage"
      },
      "index": {
        "description": "Get page using its ID The user access token is optional",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getPage",
        "normalized": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b Page",
        "package": "fb",
        "partial": "Page",
        "signature": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m Page"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getRealTimeUpdateNotifications",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003everifyRealTimeUpdateNotifications\u003c/a\u003e\u003c/code\u003e but also parses\n the response as JSON.  Returns \u003ccode\u003eNothing\u003c/code\u003e if either the\n signature is invalid or the data can't be parsed (use\n \u003ccode\u003e\u003ca\u003everifyRealTimeUpdateNotifications\u003c/a\u003e\u003c/code\u003e if you need to distinguish\n between these two error conditions).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ByteString-\u003e ByteString-\u003e FacebookT Auth m (Maybe (RealTimeUpdateNotification a))",
        "fct-type": "function",
        "title": "getRealTimeUpdateNotifications"
      },
      "index": {
        "description": "Same as verifyRealTimeUpdateNotifications but also parses the response as JSON Returns Nothing if either the signature is invalid or the data can be parsed use verifyRealTimeUpdateNotifications if you need to distinguish between these two error conditions",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getRealTimeUpdateNotifications",
        "normalized": "ByteString-\u003eByteString-\u003eFacebookT Auth a(Maybe(RealTimeUpdateNotification b))",
        "package": "fb",
        "partial": "Real Time Update Notifications",
        "signature": "ByteString-\u003eByteString-\u003eFacebookT Auth m(Maybe(RealTimeUpdateNotification a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getTestUsers",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of test users.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "AppAccessToken-\u003e FacebookT Auth m (Pager TestUser)",
        "fct-type": "function",
        "title": "getTestUsers"
      },
      "index": {
        "description": "Get list of test users",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getTestUsers",
        "normalized": "AppAccessToken-\u003eFacebookT Auth a(Pager TestUser)",
        "package": "fb",
        "partial": "Test Users",
        "signature": "AppAccessToken-\u003eFacebookT Auth m(Pager TestUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUser",
      "description": {
        "fct-descr": "\u003cp\u003eGet an user using his user ID.  The user access token is\n optional, but when provided more information can be returned\n back by Facebook.  The user ID may be \u003ccode\u003e\"me\"\u003c/code\u003e, in which\n case you must provide an user access token and information\n about the token's owner is given.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m User",
        "fct-type": "function",
        "title": "getUser"
      },
      "index": {
        "description": "Get an user using his user ID The user access token is optional but when provided more information can be returned back by Facebook The user ID may be me in which case you must provide an user access token and information about the token owner is given",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getUser",
        "normalized": "UserId-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b User",
        "package": "fb",
        "partial": "User",
        "signature": "UserId-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m User"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserAccessTokenStep1",
      "description": {
        "fct-descr": "\u003cp\u003eThe first step to get an user access token.  Returns the\n Facebook URL you should redirect you user to.  Facebook will\n authenticate the user, authorize your app and then redirect\n the user back into the provider \u003ccode\u003e\u003ca\u003eRedirectUrl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RedirectUrl -\u003e [Permission] -\u003e FacebookT Auth m Text",
        "fct-source": "src/Facebook-Auth.html#getUserAccessTokenStep1",
        "fct-type": "function",
        "title": "getUserAccessTokenStep1"
      },
      "index": {
        "description": "The first step to get an user access token Returns the Facebook URL you should redirect you user to Facebook will authenticate the user authorize your app and then redirect the user back into the provider RedirectUrl",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getUserAccessTokenStep1",
        "normalized": "RedirectUrl-\u003e[Permission]-\u003eFacebookT Auth a Text",
        "package": "fb",
        "partial": "User Access Token Step",
        "signature": "RedirectUrl-\u003e[Permission]-\u003eFacebookT Auth m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserAccessTokenStep2",
      "description": {
        "fct-descr": "\u003cp\u003eThe second step to get an user access token.  If the user is\n successfully authenticate and they authorize your application,\n then they'll be redirected back to the \u003ccode\u003e\u003ca\u003eRedirectUrl\u003c/a\u003e\u003c/code\u003e you've\n passed to \u003ccode\u003e\u003ca\u003egetUserAccessTokenStep1\u003c/a\u003e\u003c/code\u003e.  You should take the\n request query parameters passed to your \u003ccode\u003e\u003ca\u003eRedirectUrl\u003c/a\u003e\u003c/code\u003e and give\n to this function that will complete the user authentication\n flow and give you an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUserAccessToken\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RedirectUrl-\u003e [Argument]-\u003e FacebookT Auth m UserAccessToken",
        "fct-type": "function",
        "title": "getUserAccessTokenStep2"
      },
      "index": {
        "description": "The second step to get an user access token If the user is successfully authenticate and they authorize your application then they ll be redirected back to the RedirectUrl you ve passed to getUserAccessTokenStep1 You should take the request query parameters passed to your RedirectUrl and give to this function that will complete the user authentication flow and give you an UserAccessToken",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getUserAccessTokenStep2",
        "normalized": "RedirectUrl-\u003e[Argument]-\u003eFacebookT Auth a UserAccessToken",
        "package": "fb",
        "partial": "User Access Token Step",
        "signature": "RedirectUrl-\u003e[Argument]-\u003eFacebookT Auth m UserAccessToken"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserCheckins",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of check-ins made by a given user.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT anyAuth m (Pager Checkin)",
        "fct-type": "function",
        "title": "getUserCheckins"
      },
      "index": {
        "description": "Get list of check-ins made by given user",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getUserCheckins",
        "normalized": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT a b(Pager Checkin)",
        "package": "fb",
        "partial": "User Checkins",
        "signature": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT anyAuth m(Pager Checkin)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserFriends",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of friends of the given user.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT anyAuth m (Pager Friend)",
        "fct-type": "function",
        "title": "getUserFriends"
      },
      "index": {
        "description": "Get the list of friends of the given user",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getUserFriends",
        "normalized": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT a b(Pager Friend)",
        "package": "fb",
        "partial": "User Friends",
        "signature": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT anyAuth m(Pager Friend)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserLogoutUrl",
      "description": {
        "fct-descr": "\u003cp\u003eThe URL an user should be redirected to in order to log them\n out of their Facebook session.  Facebook will then redirect\n the user to the provided URL after logging them out.  Note\n that, at the time of this writing, Facebook's policies require\n you to log the user out of Facebook when they ask to log out\n of your site.\n\u003c/p\u003e\u003cp\u003eNote also that Facebook may refuse to redirect the user to the\n provided URL if their user access token is invalid.  In order\n to prevent this bug, we suggest that you use \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e before\n redirecting the user to the URL provided by \u003ccode\u003e\u003ca\u003egetUserLogoutUrl\u003c/a\u003e\u003c/code\u003e\n since this function doesn't do any validity checks.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserAccessToken-\u003e RedirectUrl-\u003e FacebookT Auth m Text",
        "fct-type": "function",
        "title": "getUserLogoutUrl"
      },
      "index": {
        "description": "The URL an user should be redirected to in order to log them out of their Facebook session Facebook will then redirect the user to the provided URL after logging them out Note that at the time of this writing Facebook policies require you to log the user out of Facebook when they ask to log out of your site Note also that Facebook may refuse to redirect the user to the provided URL if their user access token is invalid In order to prevent this bug we suggest that you use isValid before redirecting the user to the URL provided by getUserLogoutUrl since this function doesn do any validity checks",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "getUserLogoutUrl",
        "normalized": "UserAccessToken-\u003eRedirectUrl-\u003eFacebookT Auth a Text",
        "package": "fb",
        "partial": "User Logout Url",
        "signature": "UserAccessToken-\u003eRedirectUrl-\u003eFacebookT Auth m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:hasExpired",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the access token has expired, otherwise \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "AccessToken anyKind -\u003e m Bool",
        "fct-source": "src/Facebook-Auth.html#hasExpired",
        "fct-type": "function",
        "title": "hasExpired"
      },
      "index": {
        "description": "True if the access token has expired otherwise False",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "hasExpired",
        "normalized": "AccessToken a-\u003eb Bool",
        "package": "fb",
        "partial": "Expired",
        "signature": "AccessToken anyKind-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:idCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Types.html#Id",
        "fct-type": "function",
        "title": "idCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "idCode",
        "normalized": "",
        "package": "fb",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:incompleteTestUserAccessToken",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eUserAccessToken\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTestUser\u003c/a\u003e\u003c/code\u003e.  It's incomplete\n because it will not have the right expiration time.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "TestUser -\u003e Maybe UserAccessToken",
        "fct-source": "src/Facebook-TestUsers.html#incompleteTestUserAccessToken",
        "fct-type": "function",
        "title": "incompleteTestUserAccessToken"
      },
      "index": {
        "description": "Create an UserAccessToken from TestUser It incomplete because it will not have the right expiration time",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "incompleteTestUserAccessToken",
        "normalized": "TestUser-\u003eMaybe UserAccessToken",
        "package": "fb",
        "partial": "Test User Access Token",
        "signature": "TestUser-\u003eMaybe UserAccessToken"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:isValid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the access token is valid.  An expired access\n token is not valid (see \u003ccode\u003e\u003ca\u003ehasExpired\u003c/a\u003e\u003c/code\u003e).  However, a non-expired\n access token may not be valid as well.  For example, in the\n case of an user access token, they may have changed their\n password, logged out from Facebook or blocked your app.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "AccessToken anyKind -\u003e FacebookT anyAuth m Bool",
        "fct-source": "src/Facebook-Auth.html#isValid",
        "fct-type": "function",
        "title": "isValid"
      },
      "index": {
        "description": "True if the access token is valid An expired access token is not valid see hasExpired However non-expired access token may not be valid as well For example in the case of an user access token they may have changed their password logged out from Facebook or blocked your app",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "isValid",
        "normalized": "AccessToken a-\u003eFacebookT b c Bool",
        "package": "fb",
        "partial": "Valid",
        "signature": "AccessToken anyKind-\u003eFacebookT anyAuth m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:latitude",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "!Double",
        "fct-source": "src/Facebook-Graph.html#GeoCoordinates",
        "fct-type": "function",
        "title": "latitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "latitude",
        "normalized": "",
        "package": "fb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:listSubscriptions",
      "description": {
        "fct-descr": "\u003cp\u003eList current real-time update subscriptions.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "AppAccessToken -\u003e FacebookT Auth m [RealTimeUpdateSubscription]",
        "fct-source": "src/Facebook-RealTime.html#listSubscriptions",
        "fct-type": "function",
        "title": "listSubscriptions"
      },
      "index": {
        "description": "List current real-time update subscriptions",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "listSubscriptions",
        "normalized": "AppAccessToken-\u003eFacebookT Auth a[RealTimeUpdateSubscription]",
        "package": "fb",
        "partial": "Subscriptions",
        "signature": "AppAccessToken-\u003eFacebookT Auth m[RealTimeUpdateSubscription]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationCity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "locationCity"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "locationCity",
        "normalized": "",
        "package": "fb",
        "partial": "City",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationCoords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe GeoCoordinates",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "locationCoords"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "locationCoords",
        "normalized": "",
        "package": "fb",
        "partial": "Coords",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationCountry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "locationCountry"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "locationCountry",
        "normalized": "",
        "package": "fb",
        "partial": "Country",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "locationState"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "locationState",
        "normalized": "",
        "package": "fb",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationStreet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "locationStreet"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "locationStreet",
        "normalized": "",
        "package": "fb",
        "partial": "Street",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationZip",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Graph.html#Location",
        "fct-type": "function",
        "title": "locationZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "locationZip",
        "normalized": "",
        "package": "fb",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:longitude",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "!Double",
        "fct-source": "src/Facebook-Graph.html#GeoCoordinates",
        "fct-type": "function",
        "title": "longitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "longitude",
        "normalized": "",
        "package": "fb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:makeFriendConn",
      "description": {
        "fct-descr": "\u003cp\u003eMake a friend connection between two test users.\n\u003c/p\u003e\u003cp\u003eThis is how Facebook's API work: two calls must be made. The first\n call has the format: \"/userA_id/friends/userB_id\" with the\n access token of user A as query parameter. The second call has the\n format: \"/userB_id/friends/userA_id\" with the access token of\n user B as query parameter. The first call creates a friend request\n and the second call accepts the friend request.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "TestUser -\u003e TestUser -\u003e FacebookT Auth m ()",
        "fct-source": "src/Facebook-TestUsers.html#makeFriendConn",
        "fct-type": "function",
        "title": "makeFriendConn"
      },
      "index": {
        "description": "Make friend connection between two test users This is how Facebook API work two calls must be made The first call has the format userA id friends userB id with the access token of user as query parameter The second call has the format userB id friends userA id with the access token of user as query parameter The first call creates friend request and the second call accepts the friend request",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "makeFriendConn",
        "normalized": "TestUser-\u003eTestUser-\u003eFacebookT Auth a()",
        "package": "fb",
        "partial": "Friend Conn",
        "signature": "TestUser-\u003eTestUser-\u003eFacebookT Auth m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:mapFacebookT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the computation inside a \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "(m a -\u003e n b) -\u003e FacebookT anyAuth m a -\u003e FacebookT anyAuth n b",
        "fct-source": "src/Facebook-Monad.html#mapFacebookT",
        "fct-type": "function",
        "title": "mapFacebookT"
      },
      "index": {
        "description": "Transform the computation inside FacebookT",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "mapFacebookT",
        "normalized": "(a b-\u003ec d)-\u003eFacebookT e a b-\u003eFacebookT e c d",
        "package": "fb",
        "partial": "Facebook",
        "signature": "(m a-\u003en b)-\u003eFacebookT anyAuth m a-\u003eFacebookT anyAuth n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:modifySubscription",
      "description": {
        "fct-descr": "\u003cp\u003eAdd or modify a subscription for real-time updates.  If\n there were no previous subscriptions for the given\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateObject\u003c/a\u003e\u003c/code\u003e, then a new subscription is created.\n If there was any previous subscription for the given\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateObject\u003c/a\u003e\u003c/code\u003e, it's overriden by this one (even if\n the other subscription had a different callback URL).\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateObject-\u003e [RealTimeUpdateField]-\u003e RealTimeUpdateUrl-\u003e RealTimeUpdateToken-\u003e AppAccessToken-\u003e FacebookT Auth m ()",
        "fct-type": "function",
        "title": "modifySubscription"
      },
      "index": {
        "description": "Add or modify subscription for real-time updates If there were no previous subscriptions for the given RealTimeUpdateObject then new subscription is created If there was any previous subscription for the given RealTimeUpdateObject it overriden by this one even if the other subscription had different callback URL",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "modifySubscription",
        "normalized": "RealTimeUpdateObject-\u003e[RealTimeUpdateField]-\u003eRealTimeUpdateUrl-\u003eRealTimeUpdateToken-\u003eAppAccessToken-\u003eFacebookT Auth a()",
        "package": "fb",
        "partial": "Subscription",
        "signature": "RealTimeUpdateObject-\u003e[RealTimeUpdateField]-\u003eRealTimeUpdateUrl-\u003eRealTimeUpdateToken-\u003eAppAccessToken-\u003eFacebookT Auth m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderAmount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Integer",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderAmount"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderAmount",
        "normalized": "",
        "package": "fb",
        "partial": "Amount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderApplication",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "OrderApplication",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderApplication"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderApplication",
        "normalized": "",
        "package": "fb",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderCountry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderCountry"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderCountry",
        "normalized": "",
        "package": "fb",
        "partial": "Country",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderCreatedTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ZonedTime",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderCreatedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderCreatedTime",
        "normalized": "",
        "package": "fb",
        "partial": "Created Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderFrom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderFrom",
        "normalized": "",
        "package": "fb",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "OrderId",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderRefundCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderRefundCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderRefundCode",
        "normalized": "",
        "package": "fb",
        "partial": "Refund Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "OrderStatus",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderStatus",
        "normalized": "",
        "package": "fb",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderTo",
        "normalized": "",
        "package": "fb",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderUpdatedTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ZonedTime",
        "fct-source": "src/Facebook-Object-Order.html#Order",
        "fct-type": "function",
        "title": "orderUpdatedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "orderUpdatedTime",
        "normalized": "",
        "package": "fb",
        "partial": "Updated Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageCanPost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageCanPost"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageCanPost",
        "normalized": "",
        "package": "fb",
        "partial": "Can Post",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageCategory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageCategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageCategory",
        "normalized": "",
        "package": "fb",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageCheckins",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageCheckins"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageCheckins",
        "normalized": "",
        "package": "fb",
        "partial": "Checkins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageIsPublished",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageIsPublished"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageIsPublished",
        "normalized": "",
        "package": "fb",
        "partial": "Is Published",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageLikes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageLikes"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageLikes",
        "normalized": "",
        "package": "fb",
        "partial": "Likes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageLink",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageLink"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageLink",
        "normalized": "",
        "package": "fb",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Location",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageLocation",
        "normalized": "",
        "package": "fb",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagePhone",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pagePhone"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pagePhone",
        "normalized": "",
        "package": "fb",
        "partial": "Phone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagePicture",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pagePicture"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pagePicture",
        "normalized": "",
        "package": "fb",
        "partial": "Picture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageTalkingAboutCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageTalkingAboutCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageTalkingAboutCount",
        "normalized": "",
        "package": "fb",
        "partial": "Talking About Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageWebsite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-Page.html#Page",
        "fct-type": "function",
        "title": "pageWebsite"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pageWebsite",
        "normalized": "",
        "package": "fb",
        "partial": "Website",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagerData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "[a]",
        "fct-source": "src/Facebook-Pager.html#Pager",
        "fct-type": "function",
        "title": "pagerData"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pagerData",
        "normalized": "[a]",
        "package": "fb",
        "partial": "Data",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagerNext",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Facebook-Pager.html#Pager",
        "fct-type": "function",
        "title": "pagerNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pagerNext",
        "normalized": "",
        "package": "fb",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagerPrevious",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Facebook-Pager.html#Pager",
        "fct-type": "function",
        "title": "pagerPrevious"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "pagerPrevious",
        "normalized": "",
        "package": "fb",
        "partial": "Previous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:parseSignedRequest",
      "description": {
        "fct-descr": "\u003cp\u003eParses a Facebook signed request\n (\u003ca\u003ehttps://developers.facebook.com/docs/authentication/signed_request/\u003c/a\u003e),\n verifies its authencity and integrity using the HMAC and\n decodes its JSON object.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ByteString-\u003e FacebookT Auth m (Maybe a)",
        "fct-type": "function",
        "title": "parseSignedRequest"
      },
      "index": {
        "description": "Parses Facebook signed request https developers.facebook.com docs authentication signed request verifies its authencity and integrity using the HMAC and decodes its JSON object",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "parseSignedRequest",
        "normalized": "ByteString-\u003eFacebookT Auth a(Maybe b)",
        "package": "fb",
        "partial": "Signed Request",
        "signature": "ByteString-\u003eFacebookT Auth m(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:placeId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePage\u003c/code\u003e ID.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id",
        "fct-source": "src/Facebook-Graph.html#Place",
        "fct-type": "function",
        "title": "placeId"
      },
      "index": {
        "description": "Page ID",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "placeId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:placeLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Location",
        "fct-source": "src/Facebook-Graph.html#Place",
        "fct-type": "function",
        "title": "placeLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "placeLocation",
        "normalized": "",
        "package": "fb",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:placeName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePage\u003c/code\u003e name.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Graph.html#Place",
        "fct-type": "function",
        "title": "placeName"
      },
      "index": {
        "description": "Page name",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "placeName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:postObject",
      "description": {
        "fct-descr": "\u003cp\u003eMake a raw \u003ccode\u003ePOST\u003c/code\u003e request to Facebook's Graph API.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text-\u003e [Argument]-\u003e AccessToken anyKind-\u003e FacebookT Auth m a",
        "fct-type": "function",
        "title": "postObject"
      },
      "index": {
        "description": "Make raw POST request to Facebook Graph API",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "postObject",
        "normalized": "Text-\u003e[Argument]-\u003eAccessToken a-\u003eFacebookT Auth b c",
        "package": "fb",
        "partial": "Object",
        "signature": "Text-\u003e[Argument]-\u003eAccessToken anyKind-\u003eFacebookT Auth m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:removeTestUser",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an existing test user.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "TestUser-\u003e AppAccessToken-\u003e FacebookT Auth m Bool",
        "fct-type": "function",
        "title": "removeTestUser"
      },
      "index": {
        "description": "Remove an existing test user",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "removeTestUser",
        "normalized": "TestUser-\u003eAppAccessToken-\u003eFacebookT Auth a Bool",
        "package": "fb",
        "partial": "Test User",
        "signature": "TestUser-\u003eAppAccessToken-\u003eFacebookT Auth m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtunEntries",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "[a]",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
        "fct-type": "function",
        "title": "rtunEntries"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtunEntries",
        "normalized": "[a]",
        "package": "fb",
        "partial": "Entries",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtunObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateObject",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
        "fct-type": "function",
        "title": "rtunObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtunObject",
        "normalized": "",
        "package": "fb",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtuneChangedFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "[RealTimeUpdateField]",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
        "fct-type": "function",
        "title": "rtuneChangedFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtuneChangedFields",
        "normalized": "[RealTimeUpdateField]",
        "package": "fb",
        "partial": "Changed Fields",
        "signature": "[RealTimeUpdateField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtuneTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Integer",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
        "fct-type": "function",
        "title": "rtuneTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtuneTime",
        "normalized": "",
        "package": "fb",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtuneUserId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
        "fct-type": "function",
        "title": "rtuneUserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtuneUserId",
        "normalized": "",
        "package": "fb",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusActive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Bool",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
        "fct-type": "function",
        "title": "rtusActive"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtusActive",
        "normalized": "",
        "package": "fb",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusCallbackUrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateUrl",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
        "fct-type": "function",
        "title": "rtusCallbackUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtusCallbackUrl",
        "normalized": "",
        "package": "fb",
        "partial": "Callback Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "[RealTimeUpdateField]",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
        "fct-type": "function",
        "title": "rtusFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtusFields",
        "normalized": "[RealTimeUpdateField]",
        "package": "fb",
        "partial": "Fields",
        "signature": "[RealTimeUpdateField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "RealTimeUpdateObject",
        "fct-source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
        "fct-type": "function",
        "title": "rtusObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "rtusObject",
        "normalized": "",
        "package": "fb",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:runFacebookT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation in the \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e monad transformer with\n your credentials.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Credentials-\u003e Manager-\u003e FacebookT Auth m a-\u003e m a",
        "fct-type": "function",
        "title": "runFacebookT"
      },
      "index": {
        "description": "Run computation in the FacebookT monad transformer with your credentials",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "runFacebookT",
        "normalized": "Credentials-\u003eManager-\u003eFacebookT Auth a b-\u003ea b",
        "package": "fb",
        "partial": "Facebook",
        "signature": "Credentials-\u003eManager-\u003eFacebookT Auth m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:runNoAuthFacebookT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation in the \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e monad without\n credentials.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Manager -\u003e FacebookT NoAuth m a -\u003e m a",
        "fct-source": "src/Facebook-Monad.html#runNoAuthFacebookT",
        "fct-type": "function",
        "title": "runNoAuthFacebookT"
      },
      "index": {
        "description": "Run computation in the FacebookT monad without credentials",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "runNoAuthFacebookT",
        "normalized": "Manager-\u003eFacebookT NoAuth a b-\u003ea b",
        "package": "fb",
        "partial": "No Auth Facebook",
        "signature": "Manager-\u003eFacebookT NoAuth m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:searchObjects",
      "description": {
        "fct-descr": "\u003cp\u003eMake a raw \u003ccode\u003eGET\u003c/code\u003e request to the /search endpoint of Facebook&#8217;s\n Graph API.  Returns a raw JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text-\u003e Text-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m (Pager a)",
        "fct-type": "function",
        "title": "searchObjects"
      },
      "index": {
        "description": "Make raw GET request to the search endpoint of Facebook Graph API Returns raw JSON Value",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "searchObjects",
        "normalized": "Text-\u003eText-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b(Pager c)",
        "package": "fb",
        "partial": "Objects",
        "signature": "Text-\u003eText-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m(Pager a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:searchPages",
      "description": {
        "fct-descr": "\u003cp\u003eSearch pages by keyword. The user access token is optional.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m (Pager Page)",
        "fct-type": "function",
        "title": "searchPages"
      },
      "index": {
        "description": "Search pages by keyword The user access token is optional",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "searchPages",
        "normalized": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b(Pager Page)",
        "package": "fb",
        "partial": "Pages",
        "signature": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m(Pager Page)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:searchUsers",
      "description": {
        "fct-descr": "\u003cp\u003eSearch users by keyword.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text -\u003e [Argument] -\u003e Maybe UserAccessToken -\u003e FacebookT anyAuth m (Pager User)",
        "fct-source": "src/Facebook-Object-User.html#searchUsers",
        "fct-type": "function",
        "title": "searchUsers"
      },
      "index": {
        "description": "Search users by keyword",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "searchUsers",
        "normalized": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b(Pager User)",
        "package": "fb",
        "partial": "Users",
        "signature": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m(Pager User)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tagId",
      "description": {
        "fct-descr": "\u003cp\u003eWho is tagged.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Id",
        "fct-source": "src/Facebook-Graph.html#Tag",
        "fct-type": "function",
        "title": "tagId"
      },
      "index": {
        "description": "Who is tagged",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tagId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tagName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the tagged person.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Text",
        "fct-source": "src/Facebook-Graph.html#Tag",
        "fct-type": "function",
        "title": "tagName"
      },
      "index": {
        "description": "Name of the tagged person",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tagName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuAccessToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe AccessTokenData",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "function",
        "title": "tuAccessToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tuAccessToken",
        "normalized": "",
        "package": "fb",
        "partial": "Access Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "function",
        "title": "tuEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tuEmail",
        "normalized": "",
        "package": "fb",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "function",
        "title": "tuId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tuId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuLoginUrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "function",
        "title": "tuLoginUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tuLoginUrl",
        "normalized": "",
        "package": "fb",
        "partial": "Login Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-TestUsers.html#TestUser",
        "fct-type": "function",
        "title": "tuPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "tuPassword",
        "normalized": "",
        "package": "fb",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFQLList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "[a]",
        "fct-source": "src/Facebook-FQL.html#FQLList",
        "fct-type": "function",
        "title": "unFQLList"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "unFQLList",
        "normalized": "[a]",
        "package": "fb",
        "partial": "FQLList",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFQLObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "a",
        "fct-source": "src/Facebook-FQL.html#FQLObject",
        "fct-type": "function",
        "title": "unFQLObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "unFQLObject",
        "normalized": "",
        "package": "fb",
        "partial": "FQLObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFQLTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UTCTime",
        "fct-source": "src/Facebook-FQL.html#FQLTime",
        "fct-type": "function",
        "title": "unFQLTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "unFQLTime",
        "normalized": "",
        "package": "fb",
        "partial": "FQLTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFbUTCTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UTCTime",
        "fct-source": "src/Facebook-Types.html#FbUTCTime",
        "fct-type": "function",
        "title": "unFbUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "unFbUTCTime",
        "normalized": "",
        "package": "fb",
        "partial": "Fb UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unPermission",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the \u003ccode\u003eText\u003c/code\u003e back from a \u003ccode\u003e\u003ca\u003ePermission\u003c/a\u003e\u003c/code\u003e.  Most of\n the time you won't need to use this function, but you may\n need it if you're a library author.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Permission -\u003e Text",
        "fct-source": "src/Facebook-Auth.html#unPermission",
        "fct-type": "function",
        "title": "unPermission"
      },
      "index": {
        "description": "Retrieves the Text back from Permission Most of the time you won need to use this function but you may need it if you re library author",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "unPermission",
        "normalized": "Permission-\u003eText",
        "package": "fb",
        "partial": "Permission",
        "signature": "Permission-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userEmail",
        "normalized": "",
        "package": "fb",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userFirstName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userFirstName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userFirstName",
        "normalized": "",
        "package": "fb",
        "partial": "First Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userGender",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Gender",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userGender"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userGender",
        "normalized": "",
        "package": "fb",
        "partial": "Gender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "UserId",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userId"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userId",
        "normalized": "",
        "package": "fb",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userLastName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userLastName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userLastName",
        "normalized": "",
        "package": "fb",
        "partial": "Last Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userLocale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userLocale"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userLocale",
        "normalized": "",
        "package": "fb",
        "partial": "Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userLocation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Place",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userLocation",
        "normalized": "",
        "package": "fb",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userMiddleName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userMiddleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userMiddleName",
        "normalized": "",
        "package": "fb",
        "partial": "Middle Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userName"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userName",
        "normalized": "",
        "package": "fb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userUsername",
        "normalized": "",
        "package": "fb",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userVerified",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Facebook-Object-User.html#User",
        "fct-type": "function",
        "title": "userVerified"
      },
      "index": {
        "description": "",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "userVerified",
        "normalized": "",
        "package": "fb",
        "partial": "Verified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:verifyRealTimeUpdateNotifications",
      "description": {
        "fct-descr": "\u003cp\u003eVerifies the input's authenticity (i.e. it comes from\n Facebook) and integrity by calculating its HMAC-SHA1 (using\n your application secret as the key) and verifying that it\n matches the value from the HTTP request's \u003ccode\u003eX-Hub-Signature\u003c/code\u003e\n header's value.  If it's not valid, \u003ccode\u003eNothing\u003c/code\u003e is returned,\n otherwise \u003ccode\u003eJust data\u003c/code\u003e is returned where \u003ccode\u003edata\u003c/code\u003e is the original\n data.\n\u003c/p\u003e",
        "fct-module": "Facebook",
        "fct-package": "fb",
        "fct-signature": "ByteString-\u003e ByteString-\u003e FacebookT Auth m (Maybe ByteString)",
        "fct-type": "function",
        "title": "verifyRealTimeUpdateNotifications"
      },
      "index": {
        "description": "Verifies the input authenticity i.e it comes from Facebook and integrity by calculating its HMAC-SHA1 using your application secret as the key and verifying that it matches the value from the HTTP request X-Hub-Signature header value If it not valid Nothing is returned otherwise Just data is returned where data is the original data",
        "hierarchy": "Facebook",
        "module": "Facebook",
        "name": "verifyRealTimeUpdateNotifications",
        "normalized": "ByteString-\u003eByteString-\u003eFacebookT Auth a(Maybe ByteString)",
        "package": "fb",
        "partial": "Real Time Update Notifications",
        "signature": "ByteString-\u003eByteString-\u003eFacebookT Auth m(Maybe ByteString)"
      }
    }
  }
]