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
        "word": "fb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Facebook",
          "package": "fb",
          "source": "src/Facebook.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Facebook",
          "package": "fb",
          "partial": "Facebook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn access token.  While you can make some API calls without\n an access token, many require an access token and some will\n give you more information with an appropriate access token.\n\u003c/p\u003e\u003cp\u003eThere are two kinds of access tokens:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eUser access token\u003c/dt\u003e\u003cdd\u003e An access token obtained after an user\n accepts your application.  Let's you access more information\n about that user and act on their behalf (depending on which\n permissions you've asked for).\n\u003c/dd\u003e\u003cdt\u003eApp access token\u003c/dt\u003e\u003cdd\u003e An access token that allows you to take\n administrative actions for your application.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese two kinds of access tokens are distinguished by the\n phantom type on \u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e, which can be \u003ccode\u003e\u003ca\u003eUserKind\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eAppKind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "AccessToken",
          "package": "fb",
          "source": "src/Facebook-Types.html#AccessToken",
          "type": "data"
        },
        "index": {
          "description": "An access token While you can make some API calls without an access token many require an access token and some will give you more information with an appropriate access token There are two kinds of access tokens User access token An access token obtained after an user accepts your application Let you access more information about that user and act on their behalf depending on which permissions you ve asked for App access token An access token that allows you to take administrative actions for your application These two kinds of access tokens are distinguished by the phantom type on AccessToken which can be UserKind or AppKind",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "AccessToken",
          "package": "fb",
          "partial": "Access Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe access token data that is passed to Facebook's API\n calls.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "AccessTokenData",
          "package": "fb",
          "source": "src/Facebook-Types.html#AccessTokenData",
          "type": "type"
        },
        "index": {
          "description": "The access token data that is passed to Facebook API calls",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "AccessTokenData",
          "package": "fb",
          "partial": "Access Token Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AccessTokenData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action of your app.  Please refer to Facebook's\n documentation at\n \u003ca\u003ehttps://developers.facebook.com/docs/opengraph/keyconcepts/#actions-objects\u003c/a\u003e\n to see how you can create actions.\n\u003c/p\u003e\u003cp\u003eThis is a \u003ccode\u003enewtype\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e that supports only \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e.\n This means that to create an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e you should use the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension.  For example,\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n foo token = do\n   ...\n   createAction \"cook\" [...] token\n\u003c/pre\u003e",
          "module": "Facebook",
          "name": "Action",
          "package": "fb",
          "source": "src/Facebook-Object-Action.html#Action",
          "type": "data"
        },
        "index": {
          "description": "An action of your app Please refer to Facebook documentation at https developers.facebook.com docs opengraph keyconcepts actions-objects to see how you can create actions This is newtype of Text that supports only IsString This means that to create an Action you should use the OverloadedStrings language extension For example LANGUAGE OverloadedStrings foo token do createAction cook token",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Action",
          "package": "fb",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAppKind\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "AppAccessToken",
          "package": "fb",
          "source": "src/Facebook-Types.html#AppAccessToken",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for AccessToken AppKind",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "AppAccessToken",
          "package": "fb",
          "partial": "App Access Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AppAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type used mark an \u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e as an app access\n token.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "AppKind",
          "package": "fb",
          "source": "src/Facebook-Types.html#AppKind",
          "type": "data"
        },
        "index": {
          "description": "Phantom type used mark an AccessToken as an app access token",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "AppKind",
          "package": "fb",
          "partial": "App Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:AppKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn argument given to an API call.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Argument",
          "package": "fb",
          "source": "src/Facebook-Types.html#Argument",
          "type": "type"
        },
        "index": {
          "description": "An argument given to an API call",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Argument",
          "package": "fb",
          "partial": "Argument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Argument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type stating that you have provided your\n \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e and thus have access to the whole API.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Auth",
          "package": "fb",
          "source": "src/Facebook-Monad.html#Auth",
          "type": "data"
        },
        "index": {
          "description": "Phantom type stating that you have provided your Credentials and thus have access to the whole API",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Auth",
          "package": "fb",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook check-in (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/checkin/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e We still don't support all fields supported by\n Facebook. Please fill an issue if you need access to any other\n fields.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Checkin",
          "package": "fb",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "data"
        },
        "index": {
          "description": "Facebook check-in see https developers.facebook.com docs reference api checkin NOTE We still don support all fields supported by Facebook Please fill an issue if you need access to any other fields",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Checkin",
          "package": "fb",
          "partial": "Checkin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Checkin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the user who made the check-in.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "CheckinFrom",
          "package": "fb",
          "source": "src/Facebook-Object-Checkin.html#CheckinFrom",
          "type": "data"
        },
        "index": {
          "description": "Information about the user who made the check-in",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CheckinFrom",
          "package": "fb",
          "partial": "Checkin From",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:CheckinFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type used to hold information of a new test user. This type\n also accepts a Data.Default value.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "CreateTestUser",
          "package": "fb",
          "source": "src/Facebook-TestUsers.html#CreateTestUser",
          "type": "data"
        },
        "index": {
          "description": "Data type used to hold information of new test user This type also accepts Data.Default value",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CreateTestUser",
          "package": "fb",
          "partial": "Create Test User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:CreateTestUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify if the app is to be installed on the new test user.  If\n it is, then you must tell what permissions should be given.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "CreateTestUserInstalled",
          "package": "fb",
          "source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
          "type": "data"
        },
        "index": {
          "description": "Specify if the app is to be installed on the new test user If it is then you must tell what permissions should be given",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CreateTestUserInstalled",
          "package": "fb",
          "partial": "Create Test User Installed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:CreateTestUserInstalled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCredentials that you get for your app when you register on\n Facebook.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Credentials",
          "package": "fb",
          "source": "src/Facebook-Types.html#Credentials",
          "type": "data"
        },
        "index": {
          "description": "Credentials that you get for your app when you register on Facebook",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Credentials",
          "package": "fb",
          "partial": "Credentials",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about an access token (cf. \u003ccode\u003e\u003ca\u003edebugToken\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "DebugToken",
          "package": "fb",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about an access token cf debugToken",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "DebugToken",
          "package": "fb",
          "partial": "Debug Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:DebugToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e wrapper around lists that works around FQL's\n strange lists.\n\u003c/p\u003e\u003cp\u003eFor example, if you fetch the \u003ccode\u003etagged_uids\u003c/code\u003e field from\n \u003ccode\u003elocation_post\u003c/code\u003e, you'll find that Facebook's FQL represents an\n empty list of tagged UIDs as plain JSON array (\u003ccode\u003e[]\u003c/code\u003e).\n However, it represents a singleton list as an object\n \u003ccode\u003e{\"1234\": 1234}\u003c/code\u003e instead of the much more correct \u003ccode\u003e[1234]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn the other hand, not all FQL arrays are represented in this\n bogus manner.  Also, some so-called arrays by FQL's\n documentation are actually objects, see \u003ccode\u003e\u003ca\u003eFQLObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FQLList",
          "package": "fb",
          "source": "src/Facebook-FQL.html#FQLList",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper around lists that works around FQL strange lists For example if you fetch the tagged uids field from location post you ll find that Facebook FQL represents an empty list of tagged UIDs as plain JSON array However it represents singleton list as an object instead of the much more correct On the other hand not all FQL arrays are represented in this bogus manner Also some so-called arrays by FQL documentation are actually objects see FQLObject",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FQLList",
          "package": "fb",
          "partial": "FQLList",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FQLList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e wrapper around any object that works around FQL's\n strange objects.\n\u003c/p\u003e\u003cp\u003eFor example, if you fetch the \u003ccode\u003eapp_data\u003c/code\u003e field from \u003ccode\u003estream\u003c/code\u003e,\n you'll find that empty objects are actually represented as\n empty lists \u003ccode\u003e[]\u003c/code\u003e instead of a proper empty object \u003ccode\u003e{}\u003c/code\u003e.  Also\n note that FQL's documentation says that \u003ccode\u003eapp_data\u003c/code\u003e is an\n array, which it clear is not.  See also \u003ccode\u003e\u003ca\u003eFQLList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FQLObject",
          "package": "fb",
          "source": "src/Facebook-FQL.html#FQLObject",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper around any object that works around FQL strange objects For example if you fetch the app data field from stream you ll find that empty objects are actually represented as empty lists instead of proper empty object Also note that FQL documentation says that app data is an array which it clear is not See also FQLList",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FQLObject",
          "package": "fb",
          "partial": "FQLObject",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FQLObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Deprecated since fb 0.14.7, please use FbUTCTime instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e wrapper around \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that is able to parse\n FQL's time representation as seconds since the Unix epoch.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FQLTime",
          "package": "fb",
          "source": "src/Facebook-FQL.html#FQLTime",
          "type": "newtype"
        },
        "index": {
          "description": "Deprecated Deprecated since fb please use FbUTCTime instead newtype wrapper around UTCTime that is able to parse FQL time representation as seconds since the Unix epoch",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FQLTime",
          "package": "fb",
          "partial": "FQLTime",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FQLTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception that may be thrown by functions on this\n package.  Includes any information provided by Facebook.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FacebookException",
          "package": "fb",
          "source": "src/Facebook-Base.html#FacebookException",
          "type": "data"
        },
        "index": {
          "description": "An exception that may be thrown by functions on this package Includes any information provided by Facebook",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FacebookException",
          "package": "fb",
          "partial": "Facebook Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FacebookException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFacebookT auth m a\u003c/code\u003e is this library's monad transformer.\n Contains information needed to issue commands and queries to\n Facebook.  The phantom type \u003ccode\u003eauth\u003c/code\u003e may be either \u003ccode\u003e\u003ca\u003eAuth\u003c/a\u003e\u003c/code\u003e (you\n have supplied your \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e) or \u003ccode\u003e\u003ca\u003eNoAuth\u003c/a\u003e\u003c/code\u003e (you have not\n supplied any \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FacebookT",
          "package": "fb",
          "source": "src/Facebook-Monad.html#FacebookT",
          "type": "data"
        },
        "index": {
          "description": "FacebookT auth is this library monad transformer Contains information needed to issue commands and queries to Facebook The phantom type auth may be either Auth you have supplied your Credentials or NoAuth you have not supplied any Credentials",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FacebookT",
          "package": "fb",
          "partial": "Facebook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FacebookT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that follows Facebook's\n conventions of JSON parsing.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e As a string, while \u003ccode\u003eaeson\u003c/code\u003e expects a format of \u003ccode\u003e%FT%T%Q\u003c/code\u003e,\n    Facebook gives time values formatted as \u003ccode\u003e%FT%T%z\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e As a number, \u003ccode\u003e\u003ca\u003eFbUTCTime\u003c/a\u003e\u003c/code\u003e accepts a number of seconds since\n    the Unix epoch.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Facebook",
          "name": "FbUTCTime",
          "package": "fb",
          "source": "src/Facebook-Types.html#FbUTCTime",
          "type": "newtype"
        },
        "index": {
          "description": "newtype for UTCTime that follows Facebook conventions of JSON parsing As string while aeson expects format of FT Facebook gives time values formatted as FT As number FbUTCTime accepts number of seconds since the Unix epoch",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FbUTCTime",
          "package": "fb",
          "partial": "Fb UTCTime",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FbUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA friend connection of a \u003ccode\u003e\u003ca\u003eUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Friend",
          "package": "fb",
          "source": "src/Facebook-Object-User.html#Friend",
          "type": "data"
        },
        "index": {
          "description": "friend connection of User",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Friend",
          "package": "fb",
          "partial": "Friend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Friend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA friend list for a \u003ccode\u003e\u003ca\u003eUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FriendList",
          "package": "fb",
          "source": "src/Facebook-Object-FriendList.html#FriendList",
          "type": "data"
        },
        "index": {
          "description": "friend list for User",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FriendList",
          "package": "fb",
          "partial": "Friend List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FriendList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "FriendListType",
          "package": "fb",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FriendListType",
          "package": "fb",
          "partial": "Friend List Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:FriendListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn user's gender.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Gender",
          "package": "fb",
          "source": "src/Facebook-Object-User.html#Gender",
          "type": "data"
        },
        "index": {
          "description": "An user gender",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Gender",
          "package": "fb",
          "partial": "Gender",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeographical coordinates.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "GeoCoordinates",
          "package": "fb",
          "source": "src/Facebook-Graph.html#GeoCoordinates",
          "type": "data"
        },
        "index": {
          "description": "Geographical coordinates",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "GeoCoordinates",
          "package": "fb",
          "partial": "Geo Coordinates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:GeoCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identification code of an object.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Id",
          "package": "fb",
          "source": "src/Facebook-Types.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "The identification code of an object",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Id",
          "package": "fb",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA geographical location.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Location",
          "package": "fb",
          "source": "src/Facebook-Graph.html#Location",
          "type": "data"
        },
        "index": {
          "description": "geographical location",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Location",
          "package": "fb",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type stating that you have \u003cem\u003enot\u003c/em\u003e provided your\n \u003ccode\u003e\u003ca\u003eCredentials\u003c/a\u003e\u003c/code\u003e.  This means that you'll be limited about which\n APIs you'll be able use.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "NoAuth",
          "package": "fb",
          "source": "src/Facebook-Monad.html#NoAuth",
          "type": "data"
        },
        "index": {
          "description": "Phantom type stating that you have not provided your Credentials This means that you ll be limited about which APIs you ll be able use",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "NoAuth",
          "package": "fb",
          "partial": "No Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:NoAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook \u003ccode\u003eOrder\u003c/code\u003e oject.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Order",
          "package": "fb",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "data"
        },
        "index": {
          "description": "Facebook Order oject",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Order",
          "package": "fb",
          "partial": "Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trimmed down version of Facebook Application as it is used in \u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "OrderApplication",
          "package": "fb",
          "source": "src/Facebook-Object-Order.html#OrderApplication",
          "type": "data"
        },
        "index": {
          "description": "trimmed down version of Facebook Application as it is used in Order",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "OrderApplication",
          "package": "fb",
          "partial": "Order Application",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:OrderApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e Id type.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "OrderId",
          "package": "fb",
          "source": "src/Facebook-Object-Order.html#OrderId",
          "type": "type"
        },
        "index": {
          "description": "Order Id type",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "OrderId",
          "package": "fb",
          "partial": "Order Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:OrderId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook \u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e status type.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "OrderStatus",
          "package": "fb",
          "source": "src/Facebook-Object-Order.html#OrderStatus",
          "type": "data"
        },
        "index": {
          "description": "Facebook Order status type",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "OrderStatus",
          "package": "fb",
          "partial": "Order Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:OrderStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook page (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/page/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e Does not yet support all fields. Please file an issue if\n you need any other fields.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Page",
          "package": "fb",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "data"
        },
        "index": {
          "description": "Facebook page see https developers.facebook.com docs reference api page NOTE Does not yet support all fields Please file an issue if you need any other fields",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Page",
          "package": "fb",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany Graph API results are returned as a JSON object with\n the following structure:\n\u003c/p\u003e\u003cpre\u003e\n {\n   \"data\": [\n     ...item 1...,\n          :\n     ...item n...\n   ],\n   \"paging\": {\n     \"previous\": \"http:\u003cem/\u003e...link to previous page...\",\n     \"next\":     \"http:\u003cem/\u003e...link to next page...\"\n   }\n }\n\u003c/pre\u003e\u003cp\u003eOnly the \u003ccode\u003e\"data\"\u003c/code\u003e field is required, the others may or may\n not appear.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003ePager a\u003c/code\u003e datatype encodes such result where each item has\n type \u003ccode\u003ea\u003c/code\u003e.  You may use functions \u003ccode\u003e\u003ca\u003efetchNextPage\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efetchPreviousPage\u003c/a\u003e\u003c/code\u003e to navigate through the results.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Pager",
          "package": "fb",
          "source": "src/Facebook-Pager.html#Pager",
          "type": "data"
        },
        "index": {
          "description": "Many Graph API results are returned as JSON object with the following structure data item item paging previous http link to previous page next http link to next page Only the data field is required the others may or may not appear Pager datatype encodes such result where each item has type You may use functions fetchNextPage and fetchPreviousPage to navigate through the results",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Pager",
          "package": "fb",
          "partial": "Pager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Pager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA permission that is asked for the user when he authorizes\n your app.  Please refer to Facebook's documentation at\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/permissions/\u003c/a\u003e\n to see which permissions are available.\n\u003c/p\u003e\u003cp\u003eThis is a \u003ccode\u003enewtype\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e that supports only \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e.\n This means that to create a \u003ccode\u003e\u003ca\u003ePermission\u003c/a\u003e\u003c/code\u003e you should use the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension.  For example,\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n perms :: [Permission]\n perms = [\"user_about_me\", \"email\", \"offline_access\"]\n\u003c/pre\u003e",
          "module": "Facebook",
          "name": "Permission",
          "package": "fb",
          "source": "src/Facebook-Auth.html#Permission",
          "type": "data"
        },
        "index": {
          "description": "permission that is asked for the user when he authorizes your app Please refer to Facebook documentation at https developers.facebook.com docs reference api permissions to see which permissions are available This is newtype of Text that supports only IsString This means that to create Permission you should use the OverloadedStrings language extension For example LANGUAGE OverloadedStrings perms Permission perms user about me email offline access",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Permission",
          "package": "fb",
          "partial": "Permission",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Permission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a place.  This is not a Graph Object,\n instead it's just a field of a Object.  (Not to be confused\n with the \u003ccode\u003ePage\u003c/code\u003e object.)\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Place",
          "package": "fb",
          "source": "src/Facebook-Graph.html#Place",
          "type": "data"
        },
        "index": {
          "description": "Information about place This is not Graph Object instead it just field of Object Not to be confused with the Page object",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Place",
          "package": "fb",
          "partial": "Place",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Place"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field of a \u003ccode\u003e\u003ca\u003eRealTimeUpdateObject\u003c/a\u003e\u003c/code\u003e that you would like to\n receive notifications when changed.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateField",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateField",
          "type": "type"
        },
        "index": {
          "description": "field of RealTimeUpdateObject that you would like to receive notifications when changed",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateField",
          "package": "fb",
          "partial": "Real Time Update Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen data changes and there's a valid subscription, Facebook\n will \u003ccode\u003ePOST\u003c/code\u003e to your \u003ccode\u003e\u003ca\u003eRealTimeUpdateUrl\u003c/a\u003e\u003c/code\u003e with a JSON-encoded\n object containing the notifications.  A\n 'RealTimeUpdateNotification a' represents such object where\n \u003ccode\u003ea\u003c/code\u003e is type of the entries (e.g.,\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateNotificationUserEntry\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIf you have a single \u003ccode\u003e\u003ca\u003eRealTimeUpdateUrl\u003c/a\u003e\u003c/code\u003e for different kinds\n of notifications, you may parse a \u003ccode\u003eRealTimeUpdateNotification\n \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and then manually parse the \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e depending on\n the value of \u003ccode\u003e\u003ca\u003ertunObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe recommend using \u003ccode\u003e\u003ca\u003egetRealTimeUpdateNotifications\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateNotification",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
          "type": "data"
        },
        "index": {
          "description": "When data changes and there valid subscription Facebook will POST to your RealTimeUpdateUrl with JSON-encoded object containing the notifications RealTimeUpdateNotification represents such object where is type of the entries e.g RealTimeUpdateNotificationUserEntry If you have single RealTimeUpdateUrl for different kinds of notifications you may parse RealTimeUpdateNotification Value and then manually parse the Value depending on the value of rtunObject We recommend using getRealTimeUpdateNotifications",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateNotification",
          "package": "fb",
          "partial": "Real Time Update Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA notification for the \u003ccode\u003e\u003ca\u003eUserRTUO\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateNotificationUserEntry",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
          "type": "data"
        },
        "index": {
          "description": "notification for the UserRTUO object",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateNotificationUserEntry",
          "package": "fb",
          "partial": "Real Time Update Notification User Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateNotificationUserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of objects that a real-time update refers to.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateObject",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
          "type": "data"
        },
        "index": {
          "description": "The type of objects that real-time update refers to",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateObject",
          "package": "fb",
          "partial": "Real Time Update Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation returned by Facebook about a real-time update\n notification subscription.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateSubscription",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
          "type": "data"
        },
        "index": {
          "description": "Information returned by Facebook about real-time update notification subscription",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateSubscription",
          "package": "fb",
          "partial": "Real Time Update Subscription",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateSubscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token that is sent back by Facebook's servers to your\n server in order to verify that you really were trying to\n modify your subscription.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateToken",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateToken",
          "type": "type"
        },
        "index": {
          "description": "token that is sent back by Facebook servers to your server in order to verify that you really were trying to modify your subscription",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateToken",
          "package": "fb",
          "partial": "Real Time Update Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL on your server that will receive the real-time\n updates.  Please refer to Facebook's documentation in order to\n see what this URL needs to implement.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RealTimeUpdateUrl",
          "package": "fb",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateUrl",
          "type": "type"
        },
        "index": {
          "description": "The URL on your server that will receive the real-time updates Please refer to Facebook documentation in order to see what this URL needs to implement",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateUrl",
          "package": "fb",
          "partial": "Real Time Update Url",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RealTimeUpdateUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL where the user is redirected to after Facebook\n authenticates the user authorizes your application.  This URL\n should be inside the domain registered for your Facebook\n application.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "RedirectUrl",
          "package": "fb",
          "source": "src/Facebook-Auth.html#RedirectUrl",
          "type": "type"
        },
        "index": {
          "description": "URL where the user is redirected to after Facebook authenticates the user authorizes your application This URL should be inside the domain registered for your Facebook application",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RedirectUrl",
          "package": "fb",
          "partial": "Redirect Url",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:RedirectUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for data types that may be represented as a Facebook\n simple type. (see\n \u003ca\u003ehttps://developers.facebook.com/docs/opengraph/simpletypes/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "SimpleType",
          "package": "fb",
          "source": "src/Facebook-Graph.html#SimpleType",
          "type": "class"
        },
        "index": {
          "description": "Class for data types that may be represented as Facebook simple type see https developers.facebook.com docs opengraph simpletypes",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "SimpleType",
          "package": "fb",
          "partial": "Simple Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:SimpleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tag (i.e. \"I'll \u003cem\u003etag\u003c/em\u003e you on my post\").\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "Tag",
          "package": "fb",
          "source": "src/Facebook-Graph.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "tag i.e ll tag you on my post",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Tag",
          "package": "fb",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook test user.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "TestUser",
          "package": "fb",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "data"
        },
        "index": {
          "description": "Facebook test user",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "TestUser",
          "package": "fb",
          "partial": "Test User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:TestUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook user profile (see\n \u003ca\u003ehttps://developers.facebook.com/docs/reference/api/user/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e We still don't support all fields supported by\n Facebook. Please fill an issue if you need access to any other\n fields.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "User",
          "package": "fb",
          "source": "src/Facebook-Object-User.html#User",
          "type": "data"
        },
        "index": {
          "description": "Facebook user profile see https developers.facebook.com docs reference api user NOTE We still don support all fields supported by Facebook Please fill an issue if you need access to any other fields",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "User",
          "package": "fb",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUserKind\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "UserAccessToken",
          "package": "fb",
          "source": "src/Facebook-Types.html#UserAccessToken",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for AccessToken UserKind",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "UserAccessToken",
          "package": "fb",
          "partial": "User Access Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:UserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Facebook user ID such as \u003ccode\u003e1008905713901\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "UserId",
          "package": "fb",
          "source": "src/Facebook-Types.html#UserId",
          "type": "type"
        },
        "index": {
          "description": "Facebook user ID such as",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "UserId",
          "package": "fb",
          "partial": "User Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:UserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type used mark an \u003ccode\u003e\u003ca\u003eAccessToken\u003c/a\u003e\u003c/code\u003e as an user access\n token.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "UserKind",
          "package": "fb",
          "source": "src/Facebook-Types.html#UserKind",
          "type": "data"
        },
        "index": {
          "description": "Phantom type used mark an AccessToken as an user access token",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "UserKind",
          "package": "fb",
          "partial": "User Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#t:UserKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eArgument\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eSimpleType\u003c/a\u003e\u003c/code\u003e.  See the docs on\n \u003ccode\u003ecreateAction\u003c/code\u003e for an example.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "(#=)",
          "package": "fb",
          "signature": "ByteString -\u003e a -\u003e Argument",
          "source": "src/Facebook-Graph.html#%23%3D",
          "type": "function"
        },
        "index": {
          "description": "Create an Argument with SimpleType See the docs on createAction for an example",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "(#=) #=",
          "normalized": "ByteString-\u003ea-\u003eArgument",
          "package": "fb",
          "signature": "ByteString-\u003ea-\u003eArgument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:-35--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "AcquaintancesList",
          "package": "fb",
          "signature": "AcquaintancesList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "AcquaintancesList",
          "package": "fb",
          "partial": "Acquaintances List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:AcquaintancesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "AppAccessToken",
          "package": "fb",
          "signature": "AccessTokenData -\u003e AccessToken AppKind",
          "source": "src/Facebook-Types.html#AccessToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "AppAccessToken",
          "normalized": "AccessTokenData-\u003eAccessToken AppKind",
          "package": "fb",
          "partial": "App Access Token",
          "signature": "AccessTokenData-\u003eAccessToken AppKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:AppAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Checkin",
          "package": "fb",
          "signature": "Checkin",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Checkin",
          "package": "fb",
          "partial": "Checkin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Checkin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "CheckinFrom",
          "package": "fb",
          "signature": "CheckinFrom",
          "source": "src/Facebook-Object-Checkin.html#CheckinFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CheckinFrom",
          "package": "fb",
          "partial": "Checkin From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CheckinFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "CloseFriendsList",
          "package": "fb",
          "signature": "CloseFriendsList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CloseFriendsList",
          "package": "fb",
          "partial": "Close Friends List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CloseFriendsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "CreateTestUser",
          "package": "fb",
          "signature": "CreateTestUser",
          "source": "src/Facebook-TestUsers.html#CreateTestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CreateTestUser",
          "package": "fb",
          "partial": "Create Test User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Facebook's default. It seems that this is equivalent to\n \u003ccode\u003eCreateTestUserInstalled []\u003c/code\u003e, but Facebook's documentation is\n not clear about it.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "CreateTestUserFbDefault",
          "package": "fb",
          "signature": "CreateTestUserFbDefault",
          "source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
          "type": "function"
        },
        "index": {
          "description": "Uses Facebook default It seems that this is equivalent to CreateTestUserInstalled but Facebook documentation is not clear about it",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CreateTestUserFbDefault",
          "package": "fb",
          "partial": "Create Test User Fb Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUserFbDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "CreateTestUserInstalled",
          "package": "fb",
          "signature": "CreateTestUserInstalled",
          "source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CreateTestUserInstalled",
          "package": "fb",
          "partial": "Create Test User Installed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUserInstalled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "CreateTestUserNotInstalled",
          "package": "fb",
          "signature": "CreateTestUserNotInstalled",
          "source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CreateTestUserNotInstalled",
          "package": "fb",
          "partial": "Create Test User Not Installed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CreateTestUserNotInstalled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Credentials",
          "package": "fb",
          "signature": "Credentials",
          "source": "src/Facebook-Types.html#Credentials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Credentials",
          "package": "fb",
          "partial": "Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Credentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "CurrentCityList",
          "package": "fb",
          "signature": "CurrentCityList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "CurrentCityList",
          "package": "fb",
          "partial": "Current City List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:CurrentCityList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "DebugToken",
          "package": "fb",
          "signature": "DebugToken",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "DebugToken",
          "package": "fb",
          "partial": "Debug Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:DebugToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "EducationList",
          "package": "fb",
          "signature": "EducationList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "EducationList",
          "package": "fb",
          "partial": "Education List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:EducationList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "ErrorsRTUO",
          "package": "fb",
          "signature": "ErrorsRTUO",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "ErrorsRTUO",
          "package": "fb",
          "partial": "Errors RTUO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ErrorsRTUO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "FQLList",
          "package": "fb",
          "signature": "FQLList",
          "source": "src/Facebook-FQL.html#FQLList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FQLList",
          "package": "fb",
          "partial": "FQLList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FQLList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "FQLObject",
          "package": "fb",
          "signature": "FQLObject",
          "source": "src/Facebook-FQL.html#FQLObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FQLObject",
          "package": "fb",
          "partial": "FQLObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FQLObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Deprecated since fb 0.14.7, please use FbUTCTime instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Facebook",
          "name": "FQLTime",
          "package": "fb",
          "signature": "FQLTime",
          "source": "src/Facebook-FQL.html#FQLTime",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Deprecated since fb please use FbUTCTime instead",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FQLTime",
          "package": "fb",
          "partial": "FQLTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FQLTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception coming from Facebook.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FacebookException",
          "package": "fb",
          "signature": "FacebookException",
          "source": "src/Facebook-Base.html#FacebookException",
          "type": "function"
        },
        "index": {
          "description": "An exception coming from Facebook",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FacebookException",
          "package": "fb",
          "partial": "Facebook Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FacebookException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "FamilyList",
          "package": "fb",
          "signature": "FamilyList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FamilyList",
          "package": "fb",
          "partial": "Family List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FamilyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception coming from the \u003ccode\u003efb\u003c/code\u003e package's code.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "FbLibraryException",
          "package": "fb",
          "signature": "FbLibraryException",
          "source": "src/Facebook-Base.html#FacebookException",
          "type": "function"
        },
        "index": {
          "description": "An exception coming from the fb package code",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FbLibraryException",
          "package": "fb",
          "partial": "Fb Library Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FbLibraryException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "FbUTCTime",
          "package": "fb",
          "signature": "FbUTCTime",
          "source": "src/Facebook-Types.html#FbUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FbUTCTime",
          "package": "fb",
          "partial": "Fb UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FbUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Female",
          "package": "fb",
          "signature": "Female",
          "source": "src/Facebook-Object-User.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Female",
          "package": "fb",
          "partial": "Female",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Female"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Friend",
          "package": "fb",
          "signature": "Friend",
          "source": "src/Facebook-Object-User.html#Friend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Friend",
          "package": "fb",
          "partial": "Friend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Friend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "FriendList",
          "package": "fb",
          "signature": "FriendList",
          "source": "src/Facebook-Object-FriendList.html#FriendList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "FriendList",
          "package": "fb",
          "partial": "Friend List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:FriendList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "GeoCoordinates",
          "package": "fb",
          "signature": "GeoCoordinates",
          "source": "src/Facebook-Graph.html#GeoCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "GeoCoordinates",
          "package": "fb",
          "partial": "Geo Coordinates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:GeoCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Id",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-Types.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Id",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Location",
          "package": "fb",
          "signature": "Location",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Location",
          "package": "fb",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Male",
          "package": "fb",
          "signature": "Male",
          "source": "src/Facebook-Object-User.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Male",
          "package": "fb",
          "partial": "Male",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Male"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Order",
          "package": "fb",
          "signature": "Order",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Order",
          "package": "fb",
          "partial": "Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "OtherRTUO",
          "package": "fb",
          "signature": "OtherRTUO Text",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "OtherRTUO",
          "package": "fb",
          "partial": "Other RTUO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:OtherRTUO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Page",
          "package": "fb",
          "signature": "Page",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Page",
          "package": "fb",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "PageRTUO",
          "package": "fb",
          "signature": "PageRTUO",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "PageRTUO",
          "package": "fb",
          "partial": "Page RTUO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:PageRTUO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Pager",
          "package": "fb",
          "signature": "Pager",
          "source": "src/Facebook-Pager.html#Pager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Pager",
          "package": "fb",
          "partial": "Pager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Pager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "PermissionsRTUO",
          "package": "fb",
          "signature": "PermissionsRTUO",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "PermissionsRTUO",
          "package": "fb",
          "partial": "Permissions RTUO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:PermissionsRTUO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Place",
          "package": "fb",
          "signature": "Place",
          "source": "src/Facebook-Graph.html#Place",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Place",
          "package": "fb",
          "partial": "Place",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Place"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "RealTimeUpdateNotification",
          "package": "fb",
          "signature": "RealTimeUpdateNotification",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateNotification",
          "package": "fb",
          "partial": "Real Time Update Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RealTimeUpdateNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "RealTimeUpdateNotificationUserEntry",
          "package": "fb",
          "signature": "RealTimeUpdateNotificationUserEntry",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateNotificationUserEntry",
          "package": "fb",
          "partial": "Real Time Update Notification User Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RealTimeUpdateNotificationUserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "RealTimeUpdateSubscription",
          "package": "fb",
          "signature": "RealTimeUpdateSubscription",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RealTimeUpdateSubscription",
          "package": "fb",
          "partial": "Real Time Update Subscription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RealTimeUpdateSubscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "RestrictedList",
          "package": "fb",
          "signature": "RestrictedList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "RestrictedList",
          "package": "fb",
          "partial": "Restricted List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:RestrictedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "Tag",
          "package": "fb",
          "signature": "Tag",
          "source": "src/Facebook-Graph.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "Tag",
          "package": "fb",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "TestUser",
          "package": "fb",
          "signature": "TestUser",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "TestUser",
          "package": "fb",
          "partial": "Test User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:TestUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "User",
          "package": "fb",
          "signature": "User",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "User",
          "package": "fb",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "UserAccessToken",
          "package": "fb",
          "signature": "UserId -\u003e AccessTokenData -\u003e UTCTime -\u003e AccessToken UserKind",
          "source": "src/Facebook-Types.html#AccessToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "UserAccessToken",
          "normalized": "UserId-\u003eAccessTokenData-\u003eUTCTime-\u003eAccessToken UserKind",
          "package": "fb",
          "partial": "User Access Token",
          "signature": "UserId-\u003eAccessTokenData-\u003eUTCTime-\u003eAccessToken UserKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:UserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "UserCreatedList",
          "package": "fb",
          "signature": "UserCreatedList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "UserCreatedList",
          "package": "fb",
          "partial": "User Created List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:UserCreatedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "UserRTUO",
          "package": "fb",
          "signature": "UserRTUO",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "UserRTUO",
          "package": "fb",
          "partial": "User RTUO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:UserRTUO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "WorkList",
          "package": "fb",
          "signature": "WorkList",
          "source": "src/Facebook-Object-FriendList.html#FriendListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "WorkList",
          "package": "fb",
          "partial": "Work List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:WorkList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour application ID.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "appId",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Types.html#Credentials",
          "type": "function"
        },
        "index": {
          "description": "Your application ID",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "appId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:appId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour application name (e.g. for Open Graph calls).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "appName",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Types.html#Credentials",
          "type": "function"
        },
        "index": {
          "description": "Your application name e.g for Open Graph calls",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "appName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:appName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour application secret key.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "appSecret",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Types.html#Credentials",
          "type": "function"
        },
        "index": {
          "description": "Your application secret key",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "appSecret",
          "package": "fb",
          "partial": "Secret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:appSecret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunFacebookT\u003c/a\u003e\u003c/code\u003e, but uses Facebook's beta tier (see\n \u003ca\u003ehttps://developers.facebook.com/support/beta-tier/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "beta_runFacebookT",
          "package": "fb",
          "signature": "Credentials -\u003e Manager -\u003e FacebookT Auth m a -\u003e m a",
          "source": "src/Facebook-Monad.html#beta_runFacebookT",
          "type": "function"
        },
        "index": {
          "description": "Same as runFacebookT but uses Facebook beta tier see https developers.facebook.com support beta-tier",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "beta_runFacebookT",
          "normalized": "Credentials-\u003eManager-\u003eFacebookT Auth a b-\u003ea b",
          "package": "fb",
          "partial": "Facebook",
          "signature": "Credentials-\u003eManager-\u003eFacebookT Auth m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:beta_runFacebookT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunNoAuthFacebookT\u003c/a\u003e\u003c/code\u003e, but uses Facebook's beta tier\n (see \u003ca\u003ehttps://developers.facebook.com/support/beta-tier/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "beta_runNoAuthFacebookT",
          "package": "fb",
          "signature": "Manager -\u003e FacebookT NoAuth m a -\u003e m a",
          "source": "src/Facebook-Monad.html#beta_runNoAuthFacebookT",
          "type": "function"
        },
        "index": {
          "description": "Same as runNoAuthFacebookT but uses Facebook beta tier see https developers.facebook.com support beta-tier",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "beta_runNoAuthFacebookT",
          "normalized": "Manager-\u003eFacebookT NoAuth a b-\u003ea b",
          "package": "fb",
          "partial": "No Auth Facebook",
          "signature": "Manager-\u003eFacebookT NoAuth m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:beta_runNoAuthFacebookT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinCreatedTime",
          "package": "fb",
          "signature": "Maybe UTCTime",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinCreatedTime",
          "package": "fb",
          "partial": "Created Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinCreatedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinFrom",
          "package": "fb",
          "signature": "Maybe CheckinFrom",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinFrom",
          "package": "fb",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinFromId",
          "package": "fb",
          "signature": "UserId",
          "source": "src/Facebook-Object-Checkin.html#CheckinFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinFromId",
          "package": "fb",
          "partial": "From Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinFromId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinFromName",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Object-Checkin.html#CheckinFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinFromName",
          "package": "fb",
          "partial": "From Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinId",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinMessage",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinMessage",
          "package": "fb",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinPlace",
          "package": "fb",
          "signature": "Maybe Place",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinPlace",
          "package": "fb",
          "partial": "Place",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "checkinTags",
          "package": "fb",
          "signature": "Maybe (Pager Tag)",
          "source": "src/Facebook-Object-Checkin.html#Checkin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "checkinTags",
          "package": "fb",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:checkinTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an Open Graph action on the user's timeline. Returns\n the \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e of the newly created action.  For example:\n\u003c/p\u003e\u003cpre\u003e now \u003c- liftIO getCurrentTime\n createAction \"cook\"\n              [ \"recipe\" #= \"http://example.com/cookie.html\"\n              , \"when\"   #= now ]\n              token\n\u003c/pre\u003e",
          "module": "Facebook",
          "name": "createAction",
          "package": "fb",
          "signature": "Action-\u003e [Argument]-\u003e Maybe AppAccessToken-\u003e UserAccessToken-\u003e FacebookT Auth m Id",
          "type": "function"
        },
        "index": {
          "description": "Creates an Open Graph action on the user timeline Returns the Id of the newly created action For example now liftIO getCurrentTime createAction cook recipe http example.com cookie.html when now token",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "createAction",
          "normalized": "Action-\u003e[Argument]-\u003eMaybe AppAccessToken-\u003eUserAccessToken-\u003eFacebookT Auth a Id",
          "package": "fb",
          "partial": "Action",
          "signature": "Action-\u003e[Argument]-\u003eMaybe AppAccessToken-\u003eUserAccessToken-\u003eFacebookT Auth m Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:createAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a 'check-in' and returns its ID. Place and\n coordinates are both required by Facebook.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "createCheckin",
          "package": "fb",
          "signature": "Id-\u003e GeoCoordinates-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT Auth m Id",
          "type": "function"
        },
        "index": {
          "description": "Creates check-in and returns its ID Place and coordinates are both required by Facebook",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "createCheckin",
          "normalized": "Id-\u003eGeoCoordinates-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT Auth a Id",
          "package": "fb",
          "partial": "Checkin",
          "signature": "Id-\u003eGeoCoordinates-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT Auth m Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:createCheckin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new test user.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "createTestUser",
          "package": "fb",
          "signature": "CreateTestUser-\u003e AppAccessToken-\u003e FacebookT Auth m TestUser",
          "type": "function"
        },
        "index": {
          "description": "Create new test user",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "createTestUser",
          "normalized": "CreateTestUser-\u003eAppAccessToken-\u003eFacebookT Auth a TestUser",
          "package": "fb",
          "partial": "Test User",
          "signature": "CreateTestUser-\u003eAppAccessToken-\u003eFacebookT Auth m TestUser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:createTestUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "ctuInstalled",
          "package": "fb",
          "signature": "CreateTestUserInstalled",
          "source": "src/Facebook-TestUsers.html#CreateTestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "ctuInstalled",
          "package": "fb",
          "partial": "Installed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuInstalled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "ctuLocale",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-TestUsers.html#CreateTestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "ctuLocale",
          "package": "fb",
          "partial": "Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "ctuName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-TestUsers.html#CreateTestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "ctuName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "ctuiPermissions",
          "package": "fb",
          "signature": "[Permission]",
          "source": "src/Facebook-TestUsers.html#CreateTestUserInstalled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "ctuiPermissions",
          "normalized": "[Permission]",
          "package": "fb",
          "partial": "Permissions",
          "signature": "[Permission]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:ctuiPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet detailed information about an access token.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "debugToken",
          "package": "fb",
          "signature": "AppAccessToken-\u003e AccessTokenData-\u003e FacebookT Auth m DebugToken",
          "type": "function"
        },
        "index": {
          "description": "Get detailed information about an access token",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "debugToken",
          "normalized": "AppAccessToken-\u003eAccessTokenData-\u003eFacebookT Auth a DebugToken",
          "package": "fb",
          "partial": "Token",
          "signature": "AppAccessToken-\u003eAccessTokenData-\u003eFacebookT Auth m DebugToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:debugToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a raw \u003ccode\u003eDELETE\u003c/code\u003e request to Facebook's Graph API.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "deleteObject",
          "package": "fb",
          "signature": "Text-\u003e [Argument]-\u003e AccessToken anyKind-\u003e FacebookT Auth m a",
          "type": "function"
        },
        "index": {
          "description": "Make raw DELETE request to Facebook Graph API",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "deleteObject",
          "normalized": "Text-\u003e[Argument]-\u003eAccessToken a-\u003eFacebookT Auth b c",
          "package": "fb",
          "partial": "Object",
          "signature": "Text-\u003e[Argument]-\u003eAccessToken anyKind-\u003eFacebookT Auth m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:deleteObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtAccessToken",
          "package": "fb",
          "signature": "Maybe UserAccessToken",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtAccessToken",
          "package": "fb",
          "partial": "Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtAppId",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtAppId",
          "package": "fb",
          "partial": "App Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtAppId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtAppName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtAppName",
          "package": "fb",
          "partial": "App Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtAppName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtExpiresAt",
          "package": "fb",
          "signature": "Maybe UTCTime",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtExpiresAt",
          "package": "fb",
          "partial": "Expires At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtExpiresAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtIsValid",
          "package": "fb",
          "signature": "Maybe Bool",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtIsValid",
          "package": "fb",
          "partial": "Is Valid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtIsValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtIssuedAt",
          "package": "fb",
          "signature": "Maybe UTCTime",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtIssuedAt",
          "package": "fb",
          "partial": "Issued At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtIssuedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtScopes",
          "package": "fb",
          "signature": "Maybe [Permission]",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtScopes",
          "normalized": "Maybe[Permission]",
          "package": "fb",
          "partial": "Scopes",
          "signature": "Maybe[Permission]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtScopes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "dtUserId",
          "package": "fb",
          "signature": "Maybe Id",
          "source": "src/Facebook-Auth.html#DebugToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "dtUserId",
          "package": "fb",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:dtUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "encodeFbParam",
          "package": "fb",
          "signature": "a -\u003e ByteString",
          "source": "src/Facebook-Graph.html#encodeFbParam",
          "type": "method"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "encodeFbParam",
          "normalized": "a-\u003eByteString",
          "package": "fb",
          "partial": "Fb Param",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:encodeFbParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the expiration time of an user access token (see\n \u003ca\u003ehttps://developers.facebook.com/docs/offline-access-deprecation/\u003c/a\u003e,\n \u003ca\u003ehttps://developers.facebook.com/roadmap/offline-access-removal/\u003c/a\u003e).\n Only short-lived user access tokens may extended into\n long-lived user access tokens, you must get a new short-lived\n user access token if you need to extend a long-lived\n one.  Returns \u003ccode\u003eLeft exc\u003c/code\u003e if there is an error while extending,\n or \u003ccode\u003eRight token\u003c/code\u003e with the new user access token (which could\n have the same data and expiration time as before, but you\n can't assume this).  Note that expired access tokens can't be\n extended, only valid tokens.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "extendUserAccessToken",
          "package": "fb",
          "signature": "UserAccessToken -\u003e FacebookT Auth m (Either FacebookException UserAccessToken)",
          "source": "src/Facebook-Auth.html#extendUserAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Extend the expiration time of an user access token see https developers.facebook.com docs offline-access-deprecation https developers.facebook.com roadmap offline-access-removal Only short-lived user access tokens may extended into long-lived user access tokens you must get new short-lived user access token if you need to extend long-lived one Returns Left exc if there is an error while extending or Right token with the new user access token which could have the same data and expiration time as before but you can assume this Note that expired access tokens can be extended only valid tokens",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "extendUserAccessToken",
          "normalized": "UserAccessToken-\u003eFacebookT Auth a(Either FacebookException UserAccessToken)",
          "package": "fb",
          "partial": "User Access Token",
          "signature": "UserAccessToken-\u003eFacebookT Auth m(Either FacebookException UserAccessToken)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:extendUserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "fbeMessage",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Base.html#FacebookException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fbeMessage",
          "package": "fb",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fbeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "fbeType",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Base.html#FacebookException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fbeType",
          "package": "fb",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fbeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to fetch all next pages and returns a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e with\n all results.  The \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e will include the results from\n this page as well.  Previous pages will not be considered.\n Next pages will be fetched on-demand.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "fetchAllNextPages",
          "package": "fb",
          "signature": "Pager a -\u003e FacebookT anyAuth m (Source n a)",
          "source": "src/Facebook-Pager.html#fetchAllNextPages",
          "type": "function"
        },
        "index": {
          "description": "Tries to fetch all next pages and returns Source with all results The Source will include the results from this page as well Previous pages will not be considered Next pages will be fetched on-demand",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fetchAllNextPages",
          "normalized": "Pager a-\u003eFacebookT b c(Source d a)",
          "package": "fb",
          "partial": "All Next Pages",
          "signature": "Pager a-\u003eFacebookT anyAuth m(Source n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchAllNextPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to fetch all previous pages and returns a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e\n with all results.  The \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e will include the results\n from this page as well.  Next pages will not be\n considered.  Previous pages will be fetched on-demand.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "fetchAllPreviousPages",
          "package": "fb",
          "signature": "Pager a -\u003e FacebookT anyAuth m (Source n a)",
          "source": "src/Facebook-Pager.html#fetchAllPreviousPages",
          "type": "function"
        },
        "index": {
          "description": "Tries to fetch all previous pages and returns Source with all results The Source will include the results from this page as well Next pages will not be considered Previous pages will be fetched on-demand",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fetchAllPreviousPages",
          "normalized": "Pager a-\u003eFacebookT b c(Source d a)",
          "package": "fb",
          "partial": "All Previous Pages",
          "signature": "Pager a-\u003eFacebookT anyAuth m(Source n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchAllPreviousPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to fetch the next page of a \u003ccode\u003e\u003ca\u003ePager\u003c/a\u003e\u003c/code\u003e.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e whenever the current \u003ccode\u003ePager\u003c/code\u003e does not have a\n \u003ccode\u003e\u003ca\u003epagerNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "fetchNextPage",
          "package": "fb",
          "signature": "Pager a -\u003e FacebookT anyAuth m (Maybe (Pager a))",
          "source": "src/Facebook-Pager.html#fetchNextPage",
          "type": "function"
        },
        "index": {
          "description": "Tries to fetch the next page of Pager Returns Nothing whenever the current Pager does not have pagerNext",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fetchNextPage",
          "normalized": "Pager a-\u003eFacebookT b c(Maybe(Pager a))",
          "package": "fb",
          "partial": "Next Page",
          "signature": "Pager a-\u003eFacebookT anyAuth m(Maybe(Pager a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchNextPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to fetch the previous page of a \u003ccode\u003e\u003ca\u003ePager\u003c/a\u003e\u003c/code\u003e.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e whenever the current \u003ccode\u003ePager\u003c/code\u003e does not have a\n \u003ccode\u003e\u003ca\u003epagerPrevious\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "fetchPreviousPage",
          "package": "fb",
          "signature": "Pager a -\u003e FacebookT anyAuth m (Maybe (Pager a))",
          "source": "src/Facebook-Pager.html#fetchPreviousPage",
          "type": "function"
        },
        "index": {
          "description": "Tries to fetch the previous page of Pager Returns Nothing whenever the current Pager does not have pagerPrevious",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fetchPreviousPage",
          "normalized": "Pager a-\u003eFacebookT b c(Maybe(Pager a))",
          "package": "fb",
          "partial": "Previous Page",
          "signature": "Pager a-\u003eFacebookT anyAuth m(Maybe(Pager a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fetchPreviousPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the Facebook Graph using FQL.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "fqlQuery",
          "package": "fb",
          "signature": "Text-\u003e Maybe (AccessToken anyKind)-\u003e FacebookT anyAuth m (Pager a)",
          "type": "function"
        },
        "index": {
          "description": "Query the Facebook Graph using FQL",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "fqlQuery",
          "normalized": "Text-\u003eMaybe(AccessToken a)-\u003eFacebookT b c(Pager d)",
          "package": "fb",
          "partial": "Query",
          "signature": "Text-\u003eMaybe(AccessToken anyKind)-\u003eFacebookT anyAuth m(Pager a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:fqlQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "friendId",
          "package": "fb",
          "signature": "UserId",
          "source": "src/Facebook-Object-User.html#Friend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "friendId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "friendListId",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-Object-FriendList.html#FriendList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "friendListId",
          "package": "fb",
          "partial": "List Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendListId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "friendListName",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Object-FriendList.html#FriendList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "friendListName",
          "package": "fb",
          "partial": "List Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendListName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "friendListType",
          "package": "fb",
          "signature": "FriendListType",
          "source": "src/Facebook-Object-FriendList.html#FriendList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "friendListType",
          "package": "fb",
          "partial": "List Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "friendName",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Object-User.html#Friend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "friendName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:friendName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an app access token from Facebook using your\n credentials.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getAppAccessToken",
          "package": "fb",
          "signature": "FacebookT Auth m AppAccessToken",
          "source": "src/Facebook-Auth.html#getAppAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Get an app access token from Facebook using your credentials",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getAppAccessToken",
          "package": "fb",
          "partial": "App Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getAppAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a checkin from its ID.  The user access token is\n optional, but when provided more information can be returned\n back by Facebook.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getCheckin",
          "package": "fb",
          "signature": "Id-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m Checkin",
          "type": "function"
        },
        "index": {
          "description": "Get checkin from its ID The user access token is optional but when provided more information can be returned back by Facebook",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getCheckin",
          "normalized": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b Checkin",
          "package": "fb",
          "partial": "Checkin",
          "signature": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m Checkin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getCheckin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the members of a friend list.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getFriendListMembers",
          "package": "fb",
          "signature": "Id-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT anyAuth m (Pager Friend)",
          "type": "function"
        },
        "index": {
          "description": "Get the members of friend list",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getFriendListMembers",
          "normalized": "Id-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT a b(Pager Friend)",
          "package": "fb",
          "partial": "Friend List Members",
          "signature": "Id-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT anyAuth m(Pager Friend)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getFriendListMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a raw \u003ccode\u003eGET\u003c/code\u003e request to Facebook's Graph API.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getObject",
          "package": "fb",
          "signature": "Text-\u003e [Argument]-\u003e Maybe (AccessToken anyKind)-\u003e FacebookT anyAuth m a",
          "type": "function"
        },
        "index": {
          "description": "Make raw GET request to Facebook Graph API",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getObject",
          "normalized": "Text-\u003e[Argument]-\u003eMaybe(AccessToken a)-\u003eFacebookT b c d",
          "package": "fb",
          "partial": "Object",
          "signature": "Text-\u003e[Argument]-\u003eMaybe(AccessToken anyKind)-\u003eFacebookT anyAuth m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an \u003ccode\u003e\u003ca\u003eOrder\u003c/a\u003e\u003c/code\u003e using its \u003ccode\u003e\u003ca\u003eOrderId\u003c/a\u003e\u003c/code\u003e.  The user access token\n is mandatory.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getOrder",
          "package": "fb",
          "signature": "OrderId-\u003e UserAccessToken-\u003e FacebookT anyAuth m Order",
          "type": "function"
        },
        "index": {
          "description": "Get an Order using its OrderId The user access token is mandatory",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getOrder",
          "normalized": "OrderId-\u003eUserAccessToken-\u003eFacebookT a b Order",
          "package": "fb",
          "partial": "Order",
          "signature": "OrderId-\u003eUserAccessToken-\u003eFacebookT anyAuth m Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a page using its ID. The user access token is optional.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getPage",
          "package": "fb",
          "signature": "Id-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m Page",
          "type": "function"
        },
        "index": {
          "description": "Get page using its ID The user access token is optional",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getPage",
          "normalized": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b Page",
          "package": "fb",
          "partial": "Page",
          "signature": "Id-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003everifyRealTimeUpdateNotifications\u003c/a\u003e\u003c/code\u003e but also parses\n the response as JSON.  Returns \u003ccode\u003eNothing\u003c/code\u003e if either the\n signature is invalid or the data can't be parsed (use\n \u003ccode\u003e\u003ca\u003everifyRealTimeUpdateNotifications\u003c/a\u003e\u003c/code\u003e if you need to distinguish\n between these two error conditions).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getRealTimeUpdateNotifications",
          "package": "fb",
          "signature": "ByteString-\u003e ByteString-\u003e FacebookT Auth m (Maybe (RealTimeUpdateNotification a))",
          "type": "function"
        },
        "index": {
          "description": "Same as verifyRealTimeUpdateNotifications but also parses the response as JSON Returns Nothing if either the signature is invalid or the data can be parsed use verifyRealTimeUpdateNotifications if you need to distinguish between these two error conditions",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getRealTimeUpdateNotifications",
          "normalized": "ByteString-\u003eByteString-\u003eFacebookT Auth a(Maybe(RealTimeUpdateNotification b))",
          "package": "fb",
          "partial": "Real Time Update Notifications",
          "signature": "ByteString-\u003eByteString-\u003eFacebookT Auth m(Maybe(RealTimeUpdateNotification a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getRealTimeUpdateNotifications"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of test users.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getTestUsers",
          "package": "fb",
          "signature": "AppAccessToken-\u003e FacebookT Auth m (Pager TestUser)",
          "type": "function"
        },
        "index": {
          "description": "Get list of test users",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getTestUsers",
          "normalized": "AppAccessToken-\u003eFacebookT Auth a(Pager TestUser)",
          "package": "fb",
          "partial": "Test Users",
          "signature": "AppAccessToken-\u003eFacebookT Auth m(Pager TestUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getTestUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an user using his user ID.  The user access token is\n optional, but when provided more information can be returned\n back by Facebook.  The user ID may be \u003ccode\u003e\"me\"\u003c/code\u003e, in which\n case you must provide an user access token and information\n about the token's owner is given.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUser",
          "package": "fb",
          "signature": "UserId-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m User",
          "type": "function"
        },
        "index": {
          "description": "Get an user using his user ID The user access token is optional but when provided more information can be returned back by Facebook The user ID may be me in which case you must provide an user access token and information about the token owner is given",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUser",
          "normalized": "UserId-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b User",
          "package": "fb",
          "partial": "User",
          "signature": "UserId-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first step to get an user access token.  Returns the\n Facebook URL you should redirect you user to.  Facebook will\n authenticate the user, authorize your app and then redirect\n the user back into the provider \u003ccode\u003e\u003ca\u003eRedirectUrl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUserAccessTokenStep1",
          "package": "fb",
          "signature": "RedirectUrl -\u003e [Permission] -\u003e FacebookT Auth m Text",
          "source": "src/Facebook-Auth.html#getUserAccessTokenStep1",
          "type": "function"
        },
        "index": {
          "description": "The first step to get an user access token Returns the Facebook URL you should redirect you user to Facebook will authenticate the user authorize your app and then redirect the user back into the provider RedirectUrl",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUserAccessTokenStep1",
          "normalized": "RedirectUrl-\u003e[Permission]-\u003eFacebookT Auth a Text",
          "package": "fb",
          "partial": "User Access Token Step",
          "signature": "RedirectUrl-\u003e[Permission]-\u003eFacebookT Auth m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserAccessTokenStep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe second step to get an user access token.  If the user is\n successfully authenticate and they authorize your application,\n then they'll be redirected back to the \u003ccode\u003e\u003ca\u003eRedirectUrl\u003c/a\u003e\u003c/code\u003e you've\n passed to \u003ccode\u003e\u003ca\u003egetUserAccessTokenStep1\u003c/a\u003e\u003c/code\u003e.  You should take the\n request query parameters passed to your \u003ccode\u003e\u003ca\u003eRedirectUrl\u003c/a\u003e\u003c/code\u003e and give\n to this function that will complete the user authentication\n flow and give you an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUserAccessToken\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUserAccessTokenStep2",
          "package": "fb",
          "signature": "RedirectUrl-\u003e [Argument]-\u003e FacebookT Auth m UserAccessToken",
          "type": "function"
        },
        "index": {
          "description": "The second step to get an user access token If the user is successfully authenticate and they authorize your application then they ll be redirected back to the RedirectUrl you ve passed to getUserAccessTokenStep1 You should take the request query parameters passed to your RedirectUrl and give to this function that will complete the user authentication flow and give you an UserAccessToken",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUserAccessTokenStep2",
          "normalized": "RedirectUrl-\u003e[Argument]-\u003eFacebookT Auth a UserAccessToken",
          "package": "fb",
          "partial": "User Access Token Step",
          "signature": "RedirectUrl-\u003e[Argument]-\u003eFacebookT Auth m UserAccessToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserAccessTokenStep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of check-ins made by a given user.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUserCheckins",
          "package": "fb",
          "signature": "UserId-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT anyAuth m (Pager Checkin)",
          "type": "function"
        },
        "index": {
          "description": "Get list of check-ins made by given user",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUserCheckins",
          "normalized": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT a b(Pager Checkin)",
          "package": "fb",
          "partial": "User Checkins",
          "signature": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT anyAuth m(Pager Checkin)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserCheckins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the friend lists of the given user.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUserFriendLists",
          "package": "fb",
          "signature": "UserId-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT anyAuth m (Pager FriendList)",
          "type": "function"
        },
        "index": {
          "description": "Get the friend lists of the given user",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUserFriendLists",
          "normalized": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT a b(Pager FriendList)",
          "package": "fb",
          "partial": "User Friend Lists",
          "signature": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT anyAuth m(Pager FriendList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserFriendLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of friends of the given user.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUserFriends",
          "package": "fb",
          "signature": "UserId-\u003e [Argument]-\u003e UserAccessToken-\u003e FacebookT anyAuth m (Pager Friend)",
          "type": "function"
        },
        "index": {
          "description": "Get the list of friends of the given user",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUserFriends",
          "normalized": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT a b(Pager Friend)",
          "package": "fb",
          "partial": "User Friends",
          "signature": "UserId-\u003e[Argument]-\u003eUserAccessToken-\u003eFacebookT anyAuth m(Pager Friend)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserFriends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL an user should be redirected to in order to log them\n out of their Facebook session.  Facebook will then redirect\n the user to the provided URL after logging them out.  Note\n that, at the time of this writing, Facebook's policies require\n you to log the user out of Facebook when they ask to log out\n of your site.\n\u003c/p\u003e\u003cp\u003eNote also that Facebook may refuse to redirect the user to the\n provided URL if their user access token is invalid.  In order\n to prevent this bug, we suggest that you use \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e before\n redirecting the user to the URL provided by \u003ccode\u003e\u003ca\u003egetUserLogoutUrl\u003c/a\u003e\u003c/code\u003e\n since this function doesn't do any validity checks.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "getUserLogoutUrl",
          "package": "fb",
          "signature": "UserAccessToken-\u003e RedirectUrl-\u003e FacebookT Auth m Text",
          "type": "function"
        },
        "index": {
          "description": "The URL an user should be redirected to in order to log them out of their Facebook session Facebook will then redirect the user to the provided URL after logging them out Note that at the time of this writing Facebook policies require you to log the user out of Facebook when they ask to log out of your site Note also that Facebook may refuse to redirect the user to the provided URL if their user access token is invalid In order to prevent this bug we suggest that you use isValid before redirecting the user to the URL provided by getUserLogoutUrl since this function doesn do any validity checks",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "getUserLogoutUrl",
          "normalized": "UserAccessToken-\u003eRedirectUrl-\u003eFacebookT Auth a Text",
          "package": "fb",
          "partial": "User Logout Url",
          "signature": "UserAccessToken-\u003eRedirectUrl-\u003eFacebookT Auth m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:getUserLogoutUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the access token has expired, otherwise \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "hasExpired",
          "package": "fb",
          "signature": "AccessToken anyKind -\u003e m Bool",
          "source": "src/Facebook-Auth.html#hasExpired",
          "type": "function"
        },
        "index": {
          "description": "True if the access token has expired otherwise False",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "hasExpired",
          "normalized": "AccessToken a-\u003eb Bool",
          "package": "fb",
          "partial": "Expired",
          "signature": "AccessToken anyKind-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:hasExpired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "idCode",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Types.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "idCode",
          "package": "fb",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:idCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eUserAccessToken\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTestUser\u003c/a\u003e\u003c/code\u003e.  It's incomplete\n because it will not have the right expiration time.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "incompleteTestUserAccessToken",
          "package": "fb",
          "signature": "TestUser -\u003e Maybe UserAccessToken",
          "source": "src/Facebook-TestUsers.html#incompleteTestUserAccessToken",
          "type": "function"
        },
        "index": {
          "description": "Create an UserAccessToken from TestUser It incomplete because it will not have the right expiration time",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "incompleteTestUserAccessToken",
          "normalized": "TestUser-\u003eMaybe UserAccessToken",
          "package": "fb",
          "partial": "Test User Access Token",
          "signature": "TestUser-\u003eMaybe UserAccessToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:incompleteTestUserAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the access token is valid.  An expired access\n token is not valid (see \u003ccode\u003e\u003ca\u003ehasExpired\u003c/a\u003e\u003c/code\u003e).  However, a non-expired\n access token may not be valid as well.  For example, in the\n case of an user access token, they may have changed their\n password, logged out from Facebook or blocked your app.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "isValid",
          "package": "fb",
          "signature": "AccessToken anyKind -\u003e FacebookT anyAuth m Bool",
          "source": "src/Facebook-Auth.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "True if the access token is valid An expired access token is not valid see hasExpired However non-expired access token may not be valid as well For example in the case of an user access token they may have changed their password logged out from Facebook or blocked your app",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "isValid",
          "normalized": "AccessToken a-\u003eFacebookT b c Bool",
          "package": "fb",
          "partial": "Valid",
          "signature": "AccessToken anyKind-\u003eFacebookT anyAuth m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "latitude",
          "package": "fb",
          "signature": "Double",
          "source": "src/Facebook-Graph.html#GeoCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "latitude",
          "package": "fb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList current real-time update subscriptions.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "listSubscriptions",
          "package": "fb",
          "signature": "AppAccessToken -\u003e FacebookT Auth m [RealTimeUpdateSubscription]",
          "source": "src/Facebook-RealTime.html#listSubscriptions",
          "type": "function"
        },
        "index": {
          "description": "List current real-time update subscriptions",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "listSubscriptions",
          "normalized": "AppAccessToken-\u003eFacebookT Auth a[RealTimeUpdateSubscription]",
          "package": "fb",
          "partial": "Subscriptions",
          "signature": "AppAccessToken-\u003eFacebookT Auth m[RealTimeUpdateSubscription]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:listSubscriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "locationCity",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "locationCity",
          "package": "fb",
          "partial": "City",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationCity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "locationCoords",
          "package": "fb",
          "signature": "Maybe GeoCoordinates",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "locationCoords",
          "package": "fb",
          "partial": "Coords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "locationCountry",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "locationCountry",
          "package": "fb",
          "partial": "Country",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationCountry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "locationState",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "locationState",
          "package": "fb",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "locationStreet",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "locationStreet",
          "package": "fb",
          "partial": "Street",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationStreet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "locationZip",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Graph.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "locationZip",
          "package": "fb",
          "partial": "Zip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:locationZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "longitude",
          "package": "fb",
          "signature": "Double",
          "source": "src/Facebook-Graph.html#GeoCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "longitude",
          "package": "fb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a friend connection between two test users.\n\u003c/p\u003e\u003cp\u003eThis is how Facebook's API work: two calls must be made. The first\n call has the format: \"/userA_id/friends/userB_id\" with the\n access token of user A as query parameter. The second call has the\n format: \"/userB_id/friends/userA_id\" with the access token of\n user B as query parameter. The first call creates a friend request\n and the second call accepts the friend request.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "makeFriendConn",
          "package": "fb",
          "signature": "TestUser -\u003e TestUser -\u003e FacebookT Auth m ()",
          "source": "src/Facebook-TestUsers.html#makeFriendConn",
          "type": "function"
        },
        "index": {
          "description": "Make friend connection between two test users This is how Facebook API work two calls must be made The first call has the format userA id friends userB id with the access token of user as query parameter The second call has the format userB id friends userA id with the access token of user as query parameter The first call creates friend request and the second call accepts the friend request",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "makeFriendConn",
          "normalized": "TestUser-\u003eTestUser-\u003eFacebookT Auth a()",
          "package": "fb",
          "partial": "Friend Conn",
          "signature": "TestUser-\u003eTestUser-\u003eFacebookT Auth m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:makeFriendConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the computation inside a \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "mapFacebookT",
          "package": "fb",
          "signature": "(m a -\u003e n b) -\u003e FacebookT anyAuth m a -\u003e FacebookT anyAuth n b",
          "source": "src/Facebook-Monad.html#mapFacebookT",
          "type": "function"
        },
        "index": {
          "description": "Transform the computation inside FacebookT",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "mapFacebookT",
          "normalized": "(a b-\u003ec d)-\u003eFacebookT e a b-\u003eFacebookT e c d",
          "package": "fb",
          "partial": "Facebook",
          "signature": "(m a-\u003en b)-\u003eFacebookT anyAuth m a-\u003eFacebookT anyAuth n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:mapFacebookT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd or modify a subscription for real-time updates.  If\n there were no previous subscriptions for the given\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateObject\u003c/a\u003e\u003c/code\u003e, then a new subscription is created.\n If there was any previous subscription for the given\n \u003ccode\u003e\u003ca\u003eRealTimeUpdateObject\u003c/a\u003e\u003c/code\u003e, it's overriden by this one (even if\n the other subscription had a different callback URL).\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "modifySubscription",
          "package": "fb",
          "signature": "RealTimeUpdateObject-\u003e [RealTimeUpdateField]-\u003e RealTimeUpdateUrl-\u003e RealTimeUpdateToken-\u003e AppAccessToken-\u003e FacebookT Auth m ()",
          "type": "function"
        },
        "index": {
          "description": "Add or modify subscription for real-time updates If there were no previous subscriptions for the given RealTimeUpdateObject then new subscription is created If there was any previous subscription for the given RealTimeUpdateObject it overriden by this one even if the other subscription had different callback URL",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "modifySubscription",
          "normalized": "RealTimeUpdateObject-\u003e[RealTimeUpdateField]-\u003eRealTimeUpdateUrl-\u003eRealTimeUpdateToken-\u003eAppAccessToken-\u003eFacebookT Auth a()",
          "package": "fb",
          "partial": "Subscription",
          "signature": "RealTimeUpdateObject-\u003e[RealTimeUpdateField]-\u003eRealTimeUpdateUrl-\u003eRealTimeUpdateToken-\u003eAppAccessToken-\u003eFacebookT Auth m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:modifySubscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderAmount",
          "package": "fb",
          "signature": "Integer",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderAmount",
          "package": "fb",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderApplication",
          "package": "fb",
          "signature": "OrderApplication",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderApplication",
          "package": "fb",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderCountry",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderCountry",
          "package": "fb",
          "partial": "Country",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderCountry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderCreatedTime",
          "package": "fb",
          "signature": "ZonedTime",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderCreatedTime",
          "package": "fb",
          "partial": "Created Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderCreatedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderFrom",
          "package": "fb",
          "signature": "UserId",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderFrom",
          "package": "fb",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderId",
          "package": "fb",
          "signature": "OrderId",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderRefundCode",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderRefundCode",
          "package": "fb",
          "partial": "Refund Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderRefundCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderStatus",
          "package": "fb",
          "signature": "OrderStatus",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderStatus",
          "package": "fb",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderTo",
          "package": "fb",
          "signature": "UserId",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderTo",
          "package": "fb",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "orderUpdatedTime",
          "package": "fb",
          "signature": "ZonedTime",
          "source": "src/Facebook-Object-Order.html#Order",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "orderUpdatedTime",
          "package": "fb",
          "partial": "Updated Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:orderUpdatedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageCanPost",
          "package": "fb",
          "signature": "Maybe Bool",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageCanPost",
          "package": "fb",
          "partial": "Can Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageCanPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageCategory",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageCategory",
          "package": "fb",
          "partial": "Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageCheckins",
          "package": "fb",
          "signature": "Maybe Integer",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageCheckins",
          "package": "fb",
          "partial": "Checkins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageCheckins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageId",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageIsPublished",
          "package": "fb",
          "signature": "Maybe Bool",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageIsPublished",
          "package": "fb",
          "partial": "Is Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageIsPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageLikes",
          "package": "fb",
          "signature": "Maybe Integer",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageLikes",
          "package": "fb",
          "partial": "Likes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageLikes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageLink",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageLink",
          "package": "fb",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageLocation",
          "package": "fb",
          "signature": "Maybe Location",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageLocation",
          "package": "fb",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pagePhone",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pagePhone",
          "package": "fb",
          "partial": "Phone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagePhone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pagePicture",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pagePicture",
          "package": "fb",
          "partial": "Picture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagePicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageTalkingAboutCount",
          "package": "fb",
          "signature": "Maybe Integer",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageTalkingAboutCount",
          "package": "fb",
          "partial": "Talking About Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageTalkingAboutCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pageWebsite",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-Page.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pageWebsite",
          "package": "fb",
          "partial": "Website",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pageWebsite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pagerData",
          "package": "fb",
          "signature": "[a]",
          "source": "src/Facebook-Pager.html#Pager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pagerData",
          "normalized": "[a]",
          "package": "fb",
          "partial": "Data",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagerData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pagerNext",
          "package": "fb",
          "signature": "Maybe String",
          "source": "src/Facebook-Pager.html#Pager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pagerNext",
          "package": "fb",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagerNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "pagerPrevious",
          "package": "fb",
          "signature": "Maybe String",
          "source": "src/Facebook-Pager.html#Pager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "pagerPrevious",
          "package": "fb",
          "partial": "Previous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:pagerPrevious"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a Facebook signed request\n (\u003ca\u003ehttps://developers.facebook.com/docs/authentication/signed_request/\u003c/a\u003e),\n verifies its authencity and integrity using the HMAC and\n decodes its JSON object.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "parseSignedRequest",
          "package": "fb",
          "signature": "ByteString-\u003e FacebookT Auth m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Parses Facebook signed request https developers.facebook.com docs authentication signed request verifies its authencity and integrity using the HMAC and decodes its JSON object",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "parseSignedRequest",
          "normalized": "ByteString-\u003eFacebookT Auth a(Maybe b)",
          "package": "fb",
          "partial": "Signed Request",
          "signature": "ByteString-\u003eFacebookT Auth m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:parseSignedRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePage\u003c/code\u003e ID.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "placeId",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-Graph.html#Place",
          "type": "function"
        },
        "index": {
          "description": "Page ID",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "placeId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:placeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "placeLocation",
          "package": "fb",
          "signature": "Maybe Location",
          "source": "src/Facebook-Graph.html#Place",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "placeLocation",
          "package": "fb",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:placeLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePage\u003c/code\u003e name.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "placeName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Graph.html#Place",
          "type": "function"
        },
        "index": {
          "description": "Page name",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "placeName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:placeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a raw \u003ccode\u003ePOST\u003c/code\u003e request to Facebook's Graph API.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "postObject",
          "package": "fb",
          "signature": "Text-\u003e [Argument]-\u003e AccessToken anyKind-\u003e FacebookT Auth m a",
          "type": "function"
        },
        "index": {
          "description": "Make raw POST request to Facebook Graph API",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "postObject",
          "normalized": "Text-\u003e[Argument]-\u003eAccessToken a-\u003eFacebookT Auth b c",
          "package": "fb",
          "partial": "Object",
          "signature": "Text-\u003e[Argument]-\u003eAccessToken anyKind-\u003eFacebookT Auth m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:postObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an existing test user.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "removeTestUser",
          "package": "fb",
          "signature": "TestUser-\u003e AppAccessToken-\u003e FacebookT Auth m Bool",
          "type": "function"
        },
        "index": {
          "description": "Remove an existing test user",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "removeTestUser",
          "normalized": "TestUser-\u003eAppAccessToken-\u003eFacebookT Auth a Bool",
          "package": "fb",
          "partial": "Test User",
          "signature": "TestUser-\u003eAppAccessToken-\u003eFacebookT Auth m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:removeTestUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtunEntries",
          "package": "fb",
          "signature": "[a]",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtunEntries",
          "normalized": "[a]",
          "package": "fb",
          "partial": "Entries",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtunEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtunObject",
          "package": "fb",
          "signature": "RealTimeUpdateObject",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtunObject",
          "package": "fb",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtunObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtuneChangedFields",
          "package": "fb",
          "signature": "[RealTimeUpdateField]",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtuneChangedFields",
          "normalized": "[RealTimeUpdateField]",
          "package": "fb",
          "partial": "Changed Fields",
          "signature": "[RealTimeUpdateField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtuneChangedFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtuneTime",
          "package": "fb",
          "signature": "Integer",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtuneTime",
          "package": "fb",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtuneTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtuneUserId",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateNotificationUserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtuneUserId",
          "package": "fb",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtuneUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtusActive",
          "package": "fb",
          "signature": "Bool",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtusActive",
          "package": "fb",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtusCallbackUrl",
          "package": "fb",
          "signature": "RealTimeUpdateUrl",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtusCallbackUrl",
          "package": "fb",
          "partial": "Callback Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusCallbackUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtusFields",
          "package": "fb",
          "signature": "[RealTimeUpdateField]",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtusFields",
          "normalized": "[RealTimeUpdateField]",
          "package": "fb",
          "partial": "Fields",
          "signature": "[RealTimeUpdateField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "rtusObject",
          "package": "fb",
          "signature": "RealTimeUpdateObject",
          "source": "src/Facebook-RealTime.html#RealTimeUpdateSubscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "rtusObject",
          "package": "fb",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:rtusObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation in the \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e monad transformer with\n your credentials.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "runFacebookT",
          "package": "fb",
          "signature": "Credentials-\u003e Manager-\u003e FacebookT Auth m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run computation in the FacebookT monad transformer with your credentials",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "runFacebookT",
          "normalized": "Credentials-\u003eManager-\u003eFacebookT Auth a b-\u003ea b",
          "package": "fb",
          "partial": "Facebook",
          "signature": "Credentials-\u003eManager-\u003eFacebookT Auth m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:runFacebookT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation in the \u003ccode\u003e\u003ca\u003eFacebookT\u003c/a\u003e\u003c/code\u003e monad without\n credentials.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "runNoAuthFacebookT",
          "package": "fb",
          "signature": "Manager -\u003e FacebookT NoAuth m a -\u003e m a",
          "source": "src/Facebook-Monad.html#runNoAuthFacebookT",
          "type": "function"
        },
        "index": {
          "description": "Run computation in the FacebookT monad without credentials",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "runNoAuthFacebookT",
          "normalized": "Manager-\u003eFacebookT NoAuth a b-\u003ea b",
          "package": "fb",
          "partial": "No Auth Facebook",
          "signature": "Manager-\u003eFacebookT NoAuth m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:runNoAuthFacebookT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a raw \u003ccode\u003eGET\u003c/code\u003e request to the /search endpoint of Facebook&#8217;s\n Graph API.  Returns a raw JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "searchObjects",
          "package": "fb",
          "signature": "Text-\u003e Text-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m (Pager a)",
          "type": "function"
        },
        "index": {
          "description": "Make raw GET request to the search endpoint of Facebook Graph API Returns raw JSON Value",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "searchObjects",
          "normalized": "Text-\u003eText-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b(Pager c)",
          "package": "fb",
          "partial": "Objects",
          "signature": "Text-\u003eText-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m(Pager a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:searchObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch pages by keyword. The user access token is optional.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "searchPages",
          "package": "fb",
          "signature": "Text-\u003e [Argument]-\u003e Maybe UserAccessToken-\u003e FacebookT anyAuth m (Pager Page)",
          "type": "function"
        },
        "index": {
          "description": "Search pages by keyword The user access token is optional",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "searchPages",
          "normalized": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b(Pager Page)",
          "package": "fb",
          "partial": "Pages",
          "signature": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m(Pager Page)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:searchPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch users by keyword.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "searchUsers",
          "package": "fb",
          "signature": "Text -\u003e [Argument] -\u003e Maybe UserAccessToken -\u003e FacebookT anyAuth m (Pager User)",
          "source": "src/Facebook-Object-User.html#searchUsers",
          "type": "function"
        },
        "index": {
          "description": "Search users by keyword",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "searchUsers",
          "normalized": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT a b(Pager User)",
          "package": "fb",
          "partial": "Users",
          "signature": "Text-\u003e[Argument]-\u003eMaybe UserAccessToken-\u003eFacebookT anyAuth m(Pager User)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:searchUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWho is tagged.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "tagId",
          "package": "fb",
          "signature": "Id",
          "source": "src/Facebook-Graph.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "Who is tagged",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tagId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tagId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the tagged person.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "tagName",
          "package": "fb",
          "signature": "Text",
          "source": "src/Facebook-Graph.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "Name of the tagged person",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tagName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "tuAccessToken",
          "package": "fb",
          "signature": "Maybe AccessTokenData",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tuAccessToken",
          "package": "fb",
          "partial": "Access Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuAccessToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "tuEmail",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tuEmail",
          "package": "fb",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "tuId",
          "package": "fb",
          "signature": "UserId",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tuId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "tuLoginUrl",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tuLoginUrl",
          "package": "fb",
          "partial": "Login Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuLoginUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "tuPassword",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-TestUsers.html#TestUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "tuPassword",
          "package": "fb",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:tuPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "unFQLList",
          "package": "fb",
          "signature": "[a]",
          "source": "src/Facebook-FQL.html#FQLList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "unFQLList",
          "normalized": "[a]",
          "package": "fb",
          "partial": "FQLList",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFQLList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "unFQLObject",
          "package": "fb",
          "signature": "a",
          "source": "src/Facebook-FQL.html#FQLObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "unFQLObject",
          "package": "fb",
          "partial": "FQLObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFQLObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "unFQLTime",
          "package": "fb",
          "signature": "UTCTime",
          "source": "src/Facebook-FQL.html#FQLTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "unFQLTime",
          "package": "fb",
          "partial": "FQLTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFQLTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "unFbUTCTime",
          "package": "fb",
          "signature": "UTCTime",
          "source": "src/Facebook-Types.html#FbUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "unFbUTCTime",
          "package": "fb",
          "partial": "Fb UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unFbUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e back from a \u003ccode\u003e\u003ca\u003ePermission\u003c/a\u003e\u003c/code\u003e.  Most of\n the time you won't need to use this function, but you may\n need it if you're a library author.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "unPermission",
          "package": "fb",
          "signature": "Permission -\u003e Text",
          "source": "src/Facebook-Auth.html#unPermission",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the Text back from Permission Most of the time you won need to use this function but you may need it if you re library author",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "unPermission",
          "normalized": "Permission-\u003eText",
          "package": "fb",
          "partial": "Permission",
          "signature": "Permission-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:unPermission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userEmail",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userEmail",
          "package": "fb",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userFirstName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userFirstName",
          "package": "fb",
          "partial": "First Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userFirstName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userGender",
          "package": "fb",
          "signature": "Maybe Gender",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userGender",
          "package": "fb",
          "partial": "Gender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userId",
          "package": "fb",
          "signature": "UserId",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userId",
          "package": "fb",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userLastName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userLastName",
          "package": "fb",
          "partial": "Last Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userLastName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userLocale",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userLocale",
          "package": "fb",
          "partial": "Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userLocation",
          "package": "fb",
          "signature": "Maybe Place",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userLocation",
          "package": "fb",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userMiddleName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userMiddleName",
          "package": "fb",
          "partial": "Middle Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userMiddleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userName",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userName",
          "package": "fb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userUsername",
          "package": "fb",
          "signature": "Maybe Text",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userUsername",
          "package": "fb",
          "partial": "Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facebook",
          "name": "userVerified",
          "package": "fb",
          "signature": "Maybe Bool",
          "source": "src/Facebook-Object-User.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "userVerified",
          "package": "fb",
          "partial": "Verified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:userVerified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifies the input's authenticity (i.e. it comes from\n Facebook) and integrity by calculating its HMAC-SHA1 (using\n your application secret as the key) and verifying that it\n matches the value from the HTTP request's \u003ccode\u003eX-Hub-Signature\u003c/code\u003e\n header's value.  If it's not valid, \u003ccode\u003eNothing\u003c/code\u003e is returned,\n otherwise \u003ccode\u003eJust data\u003c/code\u003e is returned where \u003ccode\u003edata\u003c/code\u003e is the original\n data.\n\u003c/p\u003e",
          "module": "Facebook",
          "name": "verifyRealTimeUpdateNotifications",
          "package": "fb",
          "signature": "ByteString-\u003e ByteString-\u003e FacebookT Auth m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Verifies the input authenticity i.e it comes from Facebook and integrity by calculating its HMAC-SHA1 using your application secret as the key and verifying that it matches the value from the HTTP request X-Hub-Signature header value If it not valid Nothing is returned otherwise Just data is returned where data is the original data",
          "hierarchy": "Facebook",
          "module": "Facebook",
          "name": "verifyRealTimeUpdateNotifications",
          "normalized": "ByteString-\u003eByteString-\u003eFacebookT Auth a(Maybe ByteString)",
          "package": "fb",
          "partial": "Real Time Update Notifications",
          "signature": "ByteString-\u003eByteString-\u003eFacebookT Auth m(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fb/docs/Facebook.html#v:verifyRealTimeUpdateNotifications"
      }
    }
  ]
]