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
        "word": "hscd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents SoundCloud applications as found at \u003ca\u003ehttp://soundcloud.com/apps\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.App",
          "name": "App",
          "package": "hscd",
          "source": "src/Network-SoundCloud-App.html",
          "type": "module"
        },
        "index": {
          "description": "Represents SoundCloud applications as found at http soundcloud.com apps",
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "App",
          "package": "hscd",
          "partial": "App",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON representation of applications\n\u003c/p\u003e",
          "module": "Network.SoundCloud.App",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-App.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "JSON representation of applications",
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.App",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-App.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.App",
          "name": "creator",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-App.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "creator",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a valid JSON string into an application\n \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.App",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-App.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode valid JSON string into an application JSON record",
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.App",
          "name": "external_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-App.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "external_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:external_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an application \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record given a public app URL\n as in \u003ca\u003ehttp://soundcloud.com/apps/app_name\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.SoundCloud.App",
          "name": "getJSON",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe JSON)",
          "source": "src/Network-SoundCloud-App.html#getJSON",
          "type": "function"
        },
        "index": {
          "description": "Get an application JSON record given public app URL as in http soundcloud.com apps app name",
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "getJSON",
          "normalized": "String-\u003eIO(Maybe JSON)",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eIO(Maybe JSON)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.App",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-App.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.App",
          "name": "permalink_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-App.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "permalink_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:permalink_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow general information about an application in the\n standard output\n\u003c/p\u003e",
          "module": "Network.SoundCloud.App",
          "name": "showInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud-App.html#showInfo",
          "type": "function"
        },
        "index": {
          "description": "Show general information about an application in the standard output",
          "hierarchy": "Network SoundCloud App",
          "module": "Network.SoundCloud.App",
          "name": "showInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-App.html#v:showInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents SoundCloud comments\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.Comment",
          "name": "Comment",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Comment.html",
          "type": "module"
        },
        "index": {
          "description": "Represents SoundCloud comments",
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "Comment",
          "package": "hscd",
          "partial": "Comment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents comment's JSON as a record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Comment",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "Represents comment JSON as record",
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "body",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "body",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "created_at",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "created_at",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:created_at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a comment's valid JSON string into\n a comment's \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Comment",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-Comment.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode comment valid JSON string into comment JSON record",
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a summary about a comment\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Comment",
          "name": "showComment",
          "package": "hscd",
          "signature": "JSON -\u003e String",
          "source": "src/Network-SoundCloud-Comment.html#showComment",
          "type": "function"
        },
        "index": {
          "description": "Show summary about comment",
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "showComment",
          "normalized": "JSON-\u003eString",
          "package": "hscd",
          "partial": "Comment",
          "signature": "JSON-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:showComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "timestamp",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "timestamp",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "track_id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "track_id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:track_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Comment",
          "name": "user",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Comment.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Comment",
          "module": "Network.SoundCloud.Comment",
          "name": "user",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Comment.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstants and URLs of the SoundCloud API resources\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "Const",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Const.html",
          "type": "module"
        },
        "index": {
          "description": "Constants and URLs of the SoundCloud API resources",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "Const",
          "package": "hscd",
          "partial": "Const",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for the authenticated user resources\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "apiMeURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#apiMeURLS",
          "type": "function"
        },
        "index": {
          "description": "Base URL for the authenticated user resources",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "apiMeURLS",
          "package": "hscd",
          "partial": "Me URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:apiMeURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL of the SoundCloud API\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "apiURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#apiURL",
          "type": "function"
        },
        "index": {
          "description": "Base URL of the SoundCloud API",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "apiURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:apiURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL of the SoundCloud API (Secure)\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "apiURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#apiURLS",
          "type": "function"
        },
        "index": {
          "description": "Base URL of the SoundCloud API Secure",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "apiURLS",
          "package": "hscd",
          "partial": "URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:apiURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for Applications\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "appsURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#appsURLS",
          "type": "function"
        },
        "index": {
          "description": "Base URL for Applications",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "appsURLS",
          "package": "hscd",
          "partial": "URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:appsURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL for the authentication interface\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "authURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#authURLS",
          "type": "function"
        },
        "index": {
          "description": "URL for the authentication interface",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "authURLS",
          "package": "hscd",
          "partial": "URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:authURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHScD SoundCloud API client ID\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "clientId",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#clientId",
          "type": "function"
        },
        "index": {
          "description": "HScD SoundCloud API client ID",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "clientId",
          "package": "hscd",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:clientId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for Comments\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "commentsURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#commentsURL",
          "type": "function"
        },
        "index": {
          "description": "Base URL for Comments",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "commentsURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:commentsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for Groups\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "groupsURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#groupsURL",
          "type": "function"
        },
        "index": {
          "description": "Base URL for Groups",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "groupsURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:groupsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL of the authenticated user activities, AKA dashboard\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "meActivitiesURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#meActivitiesURLS",
          "type": "function"
        },
        "index": {
          "description": "URL of the authenticated user activities AKA dashboard",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "meActivitiesURLS",
          "package": "hscd",
          "partial": "Activities URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:meActivitiesURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL of the authenticated user connections\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "meConnectionsURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#meConnectionsURLS",
          "type": "function"
        },
        "index": {
          "description": "URL of the authenticated user connections",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "meConnectionsURLS",
          "package": "hscd",
          "partial": "Connections URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:meConnectionsURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for Sets/Playlists\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "playlistsURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#playlistsURL",
          "type": "function"
        },
        "index": {
          "description": "Base URL for Sets Playlists",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "playlistsURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:playlistsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to the resource resolver\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "resolveURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#resolveURL",
          "type": "function"
        },
        "index": {
          "description": "URL to the resource resolver",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "resolveURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:resolveURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL of the OAuth2 token handler\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "tokenURLS",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#tokenURLS",
          "type": "function"
        },
        "index": {
          "description": "URL of the OAuth2 token handler",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "tokenURLS",
          "package": "hscd",
          "partial": "URLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:tokenURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for Tracks\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "tracksURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#tracksURL",
          "type": "function"
        },
        "index": {
          "description": "Base URL for Tracks",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "tracksURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:tracksURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase URL for Users\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Const",
          "name": "usersURL",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Const.html#usersURL",
          "type": "function"
        },
        "index": {
          "description": "Base URL for Users",
          "hierarchy": "Network SoundCloud Const",
          "module": "Network.SoundCloud.Const",
          "name": "usersURL",
          "package": "hscd",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Const.html#v:usersURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents Groups as in http:\u003cem/\u003esoundcloud.com/groups\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.Group",
          "name": "Group",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Group.html",
          "type": "module"
        },
        "index": {
          "description": "Represents Groups as in http soundcloud.com groups",
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "Group",
          "package": "hscd",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents group's JSON as a record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Group",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "Represents group JSON as record",
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "created_at",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "created_at",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:created_at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "creator",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "creator",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a group's valid JSON string into a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Group",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-Group.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode group valid JSON string into JSON record",
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "description",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "description",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a group record given a public URL\n as in http:\u003cem/\u003esoundcloud.com\u003cem\u003egroups\u003c/em\u003egroup_name\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Group",
          "name": "getJSON",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe JSON)",
          "source": "src/Network-SoundCloud-Group.html#getJSON",
          "type": "function"
        },
        "index": {
          "description": "Get group record given public URL as in http soundcloud.com groups group name",
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "getJSON",
          "normalized": "String-\u003eIO(Maybe JSON)",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eIO(Maybe JSON)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "name",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "name",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "permalink_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "permalink_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:permalink_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Group",
          "name": "short_description",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Group.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "short_description",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:short_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow general information about a group in the\n standard output\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Group",
          "name": "showInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud-Group.html#showInfo",
          "type": "function"
        },
        "index": {
          "description": "Show general information about group in the standard output",
          "hierarchy": "Network SoundCloud Group",
          "module": "Network.SoundCloud.Group",
          "name": "showInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Group.html#v:showInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMinimal representation of an user used when embedding users\n   information on other resources information\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.MiniUser",
          "name": "MiniUser",
          "package": "hscd",
          "source": "src/Network-SoundCloud-MiniUser.html",
          "type": "module"
        },
        "index": {
          "description": "Minimal representation of an user used when embedding users information on other resources information",
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "MiniUser",
          "package": "hscd",
          "partial": "Mini User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents mini user JSON as a record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.MiniUser",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "Represents mini user JSON as record",
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.MiniUser",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.MiniUser",
          "name": "avatar_url",
          "package": "hscd",
          "signature": "Maybe String",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "avatar_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:avatar_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record from a valid miniuser\n JSON string\n\u003c/p\u003e",
          "module": "Network.SoundCloud.MiniUser",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-MiniUser.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode JSON record from valid miniuser JSON string",
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.MiniUser",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.MiniUser",
          "name": "permalink_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "permalink_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:permalink_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.MiniUser",
          "name": "uri",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "uri",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.MiniUser",
          "name": "username",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-MiniUser.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud MiniUser",
          "module": "Network.SoundCloud.MiniUser",
          "name": "username",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-MiniUser.html#v:username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentations for track sets\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.Set",
          "name": "Set",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Set.html",
          "type": "module"
        },
        "index": {
          "description": "Representations for track sets",
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "Set",
          "package": "hscd",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents Set JSON as a record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Set",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "Represents Set JSON as record",
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "created_at",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "created_at",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:created_at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record from a valid set\n JSON string\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Set",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-Set.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode JSON record from valid set JSON string",
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "description",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "description",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "downloadable",
          "package": "hscd",
          "signature": "Maybe Bool",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "downloadable",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:downloadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "duration",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "duration",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "genre",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "genre",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:genre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a set \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record given it's public URL\n as in \u003ca\u003ehttp://soundcloud.com/artist/set_title\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Set",
          "name": "getJSON",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe JSON)",
          "source": "src/Network-SoundCloud-Set.html#getJSON",
          "type": "function"
        },
        "index": {
          "description": "Get set JSON record given it public URL as in http soundcloud.com artist set title",
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "getJSON",
          "normalized": "String-\u003eIO(Maybe JSON)",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eIO(Maybe JSON)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "license",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "license",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:license"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "permalink_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "permalink_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:permalink_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "playlist_type",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "playlist_type",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:playlist_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "release_day",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "release_day",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:release_day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "release_month",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "release_month",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:release_month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "release_year",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "release_year",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:release_year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "sharing",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "sharing",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow general information about a set in the\n standard output\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Set",
          "name": "showInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud-Set.html#showInfo",
          "type": "function"
        },
        "index": {
          "description": "Show general information about set in the standard output",
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "showInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:showInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a string with a summary description of a track\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Set",
          "name": "showTrack",
          "package": "hscd",
          "signature": "JSON -\u003e String",
          "source": "src/Network-SoundCloud-Set.html#showTrack",
          "type": "function"
        },
        "index": {
          "description": "Get string with summary description of track",
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "showTrack",
          "normalized": "JSON-\u003eString",
          "package": "hscd",
          "partial": "Track",
          "signature": "JSON-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:showTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "streamable",
          "package": "hscd",
          "signature": "Bool",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "streamable",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:streamable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "title",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "title",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "tracks",
          "package": "hscd",
          "signature": "[JSON]",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "tracks",
          "normalized": "[JSON]",
          "package": "hscd",
          "signature": "[JSON]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:tracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Set",
          "name": "user",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Set.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Set",
          "module": "Network.SoundCloud.Set",
          "name": "user",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Set.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements tracks related types and functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "Track",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Track.html",
          "type": "module"
        },
        "index": {
          "description": "Implements tracks related types and functions",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "Track",
          "package": "hscd",
          "partial": "Track",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple record to parse download_url from a track's JSON\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "DownloadJSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Track.html#DownloadJSON",
          "type": "data"
        },
        "index": {
          "description": "Simple record to parse download url from track JSON",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "DownloadJSON",
          "package": "hscd",
          "partial": "Download JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#t:DownloadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a track's JSON as a record\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "Represent track JSON as record",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "DownloadJSON",
          "package": "hscd",
          "signature": "DownloadJSON",
          "source": "src/Network-SoundCloud-Track.html#DownloadJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "DownloadJSON",
          "package": "hscd",
          "partial": "Download JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:DownloadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "bpm",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "bpm",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:bpm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "comment_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "comment_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:comment_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "created_at",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "created_at",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:created_at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ca\u003eNetwork.SoundCloud.Comment\u003c/a\u003e \u003ccode\u003eJSON\u003c/code\u003e list given a track id\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "decodeComments",
          "package": "hscd",
          "signature": "String -\u003e Maybe [JSON]",
          "source": "src/Network-SoundCloud-Track.html#decodeComments",
          "type": "function"
        },
        "index": {
          "description": "Decode Network.SoundCloud.Comment JSON list given track id",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "decodeComments",
          "normalized": "String-\u003eMaybe[JSON]",
          "package": "hscd",
          "partial": "Comments",
          "signature": "String-\u003eMaybe[JSON]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:decodeComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eDownloadJSON\u003c/a\u003e\u003c/code\u003e record out of a track's JSON\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "decodeDownloadJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe DownloadJSON",
          "source": "src/Network-SoundCloud-Track.html#decodeDownloadJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode DownloadJSON record out of track JSON",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "decodeDownloadJSON",
          "normalized": "String-\u003eMaybe DownloadJSON",
          "package": "hscd",
          "partial": "Download JSON",
          "signature": "String-\u003eMaybe DownloadJSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:decodeDownloadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record from a track valid JSON string\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-Track.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode JSON record from track valid JSON string",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "description",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "description",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "download_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "download_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:download_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "download_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#DownloadJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "download_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:download_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "downloadable",
          "package": "hscd",
          "signature": "Bool",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "downloadable",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:downloadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "duration",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "duration",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "favoritings_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "favoritings_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:favoritings_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch a downloadable track\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "fetch",
          "package": "hscd",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/Network-SoundCloud-Track.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "Fetch downloadable track",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "fetch",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hscd",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "genre",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "genre",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:genre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the track id, get its comments as a list of \u003ca\u003eNetwork.SoundCloud.Comment\u003c/a\u003e \u003ccode\u003eJSON\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "getComments",
          "package": "hscd",
          "signature": "Int -\u003e IO (Maybe [JSON])",
          "source": "src/Network-SoundCloud-Track.html#getComments",
          "type": "function"
        },
        "index": {
          "description": "Given the track id get its comments as list of Network.SoundCloud.Comment JSON",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "getComments",
          "normalized": "Int-\u003eIO(Maybe[JSON])",
          "package": "hscd",
          "partial": "Comments",
          "signature": "Int-\u003eIO(Maybe[JSON])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:getComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record given a track URL\n as in \u003ca\u003ehttp://soundcloud.com/artist/track_title\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "getJSON",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe JSON)",
          "source": "src/Network-SoundCloud-Track.html#getJSON",
          "type": "function"
        },
        "index": {
          "description": "Get JSON record given track URL as in http soundcloud.com artist track title",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "getJSON",
          "normalized": "String-\u003eIO(Maybe JSON)",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eIO(Maybe JSON)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "label_id",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "label_id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:label_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "label_name",
          "package": "hscd",
          "signature": "Maybe String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "label_name",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:label_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "license",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "license",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:license"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "original_content_size",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "original_content_size",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:original_content_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "original_format",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "original_format",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:original_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "permalink_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "permalink_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:permalink_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "playback_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "playback_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:playback_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "release_day",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "release_day",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:release_day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "release_month",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "release_month",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:release_month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "release_year",
          "package": "hscd",
          "signature": "Maybe Int",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "release_year",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:release_year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "sharing",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "sharing",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow general information about the track at the given URL\n in the standard output\n\u003c/p\u003e",
          "module": "Network.SoundCloud.Track",
          "name": "showInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud-Track.html#showInfo",
          "type": "function"
        },
        "index": {
          "description": "Show general information about the track at the given URL in the standard output",
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "showInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:showInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "stream_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "stream_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:stream_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "streamable",
          "package": "hscd",
          "signature": "Bool",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "streamable",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:streamable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "tag_list",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "tag_list",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:tag_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "title",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "title",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "track_type",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "track_type",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:track_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.Track",
          "name": "user",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-Track.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud Track",
          "module": "Network.SoundCloud.Track",
          "name": "user",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Track.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements users related types and functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.User",
          "name": "User",
          "package": "hscd",
          "source": "src/Network-SoundCloud-User.html",
          "type": "module"
        },
        "index": {
          "description": "Implements users related types and functions",
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "User",
          "package": "hscd",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord representation of a user's JSON\n\u003c/p\u003e",
          "module": "Network.SoundCloud.User",
          "name": "JSON",
          "package": "hscd",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "Record representation of user JSON",
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "JSON",
          "package": "hscd",
          "signature": "JSON",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "JSON",
          "package": "hscd",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "city",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "city",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:city"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "country",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "country",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:country"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record out of a user's valid JSON string\n\u003c/p\u003e",
          "module": "Network.SoundCloud.User",
          "name": "decodeJSON",
          "package": "hscd",
          "signature": "String -\u003e Maybe JSON",
          "source": "src/Network-SoundCloud-User.html#decodeJSON",
          "type": "function"
        },
        "index": {
          "description": "Decode JSON record out of user valid JSON string",
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "decodeJSON",
          "normalized": "String-\u003eMaybe JSON",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:decodeJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "description",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "description",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "followers_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "followers_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:followers_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "followings_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "followings_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:followings_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "full_name",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "full_name",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:full_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e record given an user URL\n as in \u003ca\u003ehttp://soundcloud.com/artist\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.SoundCloud.User",
          "name": "getJSON",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe JSON)",
          "source": "src/Network-SoundCloud-User.html#getJSON",
          "type": "function"
        },
        "index": {
          "description": "Get JSON record given an user URL as in http soundcloud.com artist",
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "getJSON",
          "normalized": "String-\u003eIO(Maybe JSON)",
          "package": "hscd",
          "partial": "JSON",
          "signature": "String-\u003eIO(Maybe JSON)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "id",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "id",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "online",
          "package": "hscd",
          "signature": "Bool",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "online",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:online"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "permalink_url",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "permalink_url",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:permalink_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "playlist_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "playlist_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:playlist_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "public_favorites_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "public_favorites_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:public_favorites_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a summary of an user information in the standard output\n given the user's URL\n\u003c/p\u003e",
          "module": "Network.SoundCloud.User",
          "name": "showInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud-User.html#showInfo",
          "type": "function"
        },
        "index": {
          "description": "Show summary of an user information in the standard output given the user URL",
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "showInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:showInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "track_count",
          "package": "hscd",
          "signature": "Int",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "track_count",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:track_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "uri",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "uri",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "website",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "website",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:website"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SoundCloud.User",
          "name": "website_title",
          "package": "hscd",
          "signature": "String",
          "source": "src/Network-SoundCloud-User.html#JSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SoundCloud User",
          "module": "Network.SoundCloud.User",
          "name": "website_title",
          "package": "hscd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-User.html#v:website_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral functions used by other modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud.Util",
          "name": "Util",
          "package": "hscd",
          "source": "src/Network-SoundCloud-Util.html",
          "type": "module"
        },
        "index": {
          "description": "General functions used by other modules",
          "hierarchy": "Network SoundCloud Util",
          "module": "Network.SoundCloud.Util",
          "name": "Util",
          "package": "hscd",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an URL as a first parameter, and a path as a second,\n issue a \u003ccode\u003eGET\u003c/code\u003e request to the \u003ccode\u003eURL\u003c/code\u003e and save the response body\n to a file at \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.SoundCloud.Util\",\"Network.SoundCloud\"]",
          "name": "scFetch",
          "package": "hscd",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/Network-SoundCloud-Util.html#scFetch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scFetch\",\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scFetch\"]"
        },
        "index": {
          "description": "Given an URL as first parameter and path as second issue GET request to the URL and save the response body to file at path",
          "hierarchy": "Network SoundCloud Util",
          "module": "Network.SoundCloud.Util",
          "name": "scFetch",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hscd",
          "partial": "Fetch",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a \u003ccode\u003eGET\u003c/code\u003e HTTP request to the passed URL recursing\n over redirections\n\u003c/p\u003e",
          "module": "[\"Network.SoundCloud.Util\",\"Network.SoundCloud\"]",
          "name": "scRecursiveGet",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/Network-SoundCloud-Util.html#scRecursiveGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scRecursiveGet\",\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scRecursiveGet\"]"
        },
        "index": {
          "description": "Issue GET HTTP request to the passed URL recursing over redirections",
          "hierarchy": "Network SoundCloud Util",
          "module": "Network.SoundCloud.Util",
          "name": "scRecursiveGet",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "hscd",
          "partial": "Recursive Get",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scRecursiveGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the API url of a resource given its public URL.\n In example, for a public URL like:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://soundcloud.com/user/track\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIt returns the API URL:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://api.soundcloud.com/tracks/track_id.json?client_id=foo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Network.SoundCloud.Util\",\"Network.SoundCloud\"]",
          "name": "scResolve",
          "package": "hscd",
          "signature": "String -\u003e IO String",
          "source": "src/Network-SoundCloud-Util.html#scResolve",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scResolve\",\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scResolve\"]"
        },
        "index": {
          "description": "Get the API url of resource given its public URL In example for public URL like http soundcloud.com user track It returns the API URL http api.soundcloud.com tracks track id.json client id foo",
          "hierarchy": "Network SoundCloud Util",
          "module": "Network.SoundCloud.Util",
          "name": "scResolve",
          "normalized": "String-\u003eIO String",
          "package": "hscd",
          "partial": "Resolve",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scResolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an arbitrary resource URL, returns the type of the\n resource.\n\u003c/p\u003e\u003cp\u003eThe response can be one of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003etrack\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003euser\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eset\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003egroup\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ecomment\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eapp\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003enothing\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Network.SoundCloud.Util\",\"Network.SoundCloud\"]",
          "name": "scResourceType",
          "package": "hscd",
          "signature": "String -\u003e String",
          "source": "src/Network-SoundCloud-Util.html#scResourceType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scResourceType\",\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scResourceType\"]"
        },
        "index": {
          "description": "Given an arbitrary resource URL returns the type of the resource The response can be one of track user set group comment app nothing",
          "hierarchy": "Network SoundCloud Util",
          "module": "Network.SoundCloud.Util",
          "name": "scResourceType",
          "normalized": "String-\u003eString",
          "package": "hscd",
          "partial": "Resource Type",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scResourceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a \u003ccode\u003eGET\u003c/code\u003e HTTP request to the passed URL returning\n \u003ccode\u003eNothing\u003c/code\u003e if a response code different than 2XX is found.\n\u003c/p\u003e",
          "module": "[\"Network.SoundCloud.Util\",\"Network.SoundCloud\"]",
          "name": "scSimpleGet",
          "package": "hscd",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/Network-SoundCloud-Util.html#scSimpleGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scSimpleGet\",\"http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scSimpleGet\"]"
        },
        "index": {
          "description": "Issue GET HTTP request to the passed URL returning Nothing if response code different than XX is found",
          "hierarchy": "Network SoundCloud Util",
          "module": "Network.SoundCloud.Util",
          "name": "scSimpleGet",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "hscd",
          "partial": "Simple Get",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud-Util.html#v:scSimpleGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eNetwork.SoundCloud\u003c/code\u003e module provides functions and types to access\n   the soundcloud.com public API.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eResource Modules\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe library is composed by a set of modules implementing datatypes and\n   functions for the resources available through the API. Namely,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.App\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.Comment\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.Group\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.MiniUser\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.Set\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.Track\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.User\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eEvery resource module defines at least a \u003ccode\u003eJSON\u003c/code\u003e record and the \u003ccode\u003egetJSON\u003c/code\u003e and \u003ccode\u003edecodeJSON\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBase Modules\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe base modules provide values and functions that are to be used by the rest of the modules in the\n   library. The base modules are,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.Const\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eNetwork.SoundCloud.Util\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eAPI Documentation\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eDocumentation of the SoundCloud's API can be found at \u003ca\u003ehttp://developers.soundcloud.com/docs/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SoundCloud",
          "name": "SoundCloud",
          "package": "hscd",
          "source": "src/Network-SoundCloud.html",
          "type": "module"
        },
        "index": {
          "description": "The Network.SoundCloud module provides functions and types to access the soundcloud.com public API Resource Modules The library is composed by set of modules implementing datatypes and functions for the resources available through the API Namely Network.SoundCloud.App Network.SoundCloud.Comment Network.SoundCloud.Group Network.SoundCloud.MiniUser Network.SoundCloud.Set Network.SoundCloud.Track Network.SoundCloud.User Every resource module defines at least JSON record and the getJSON and decodeJSON functions Base Modules The base modules provide values and functions that are to be used by the rest of the modules in the library The base modules are Network.SoundCloud.Const Network.SoundCloud.Util API Documentation Documentation of the SoundCloud API can be found at http developers.soundcloud.com docs",
          "hierarchy": "Network SoundCloud",
          "module": "Network.SoundCloud",
          "name": "SoundCloud",
          "package": "hscd",
          "partial": "Sound Cloud",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow information about the resource pointed by the given API URL\n\u003c/p\u003e",
          "module": "Network.SoundCloud",
          "name": "scResourceShowInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud.html#scResourceShowInfo",
          "type": "function"
        },
        "index": {
          "description": "Show information about the resource pointed by the given API URL",
          "hierarchy": "Network SoundCloud",
          "module": "Network.SoundCloud",
          "name": "scResourceShowInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Resource Show Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scResourceShowInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow information about a resource given its public URL\n\u003c/p\u003e",
          "module": "Network.SoundCloud",
          "name": "scShowInfo",
          "package": "hscd",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-SoundCloud.html#scShowInfo",
          "type": "function"
        },
        "index": {
          "description": "Show information about resource given its public URL",
          "hierarchy": "Network SoundCloud",
          "module": "Network.SoundCloud",
          "name": "scShowInfo",
          "normalized": "String-\u003eIO()",
          "package": "hscd",
          "partial": "Show Info",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hscd/docs/Network-SoundCloud.html#v:scShowInfo"
      }
    }
  ]
]