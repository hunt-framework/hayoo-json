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
        "word": "rdioh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Auth",
          "name": "Auth",
          "package": "rdioh",
          "source": "src/Rdioh-Auth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "Auth",
          "package": "rdioh",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Auth",
          "name": "accUrl",
          "package": "rdioh",
          "signature": "Request",
          "source": "src/Rdioh-Auth.html#accUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "accUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:accUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Auth",
          "name": "app",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e Application",
          "source": "src/Rdioh-Auth.html#app",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "app",
          "normalized": "String-\u003eString-\u003eApplication",
          "package": "rdioh",
          "signature": "String-\u003eString-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Auth",
          "name": "authUrl",
          "package": "rdioh",
          "signature": "Token -\u003e [Char]",
          "source": "src/Rdioh-Auth.html#authUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "authUrl",
          "normalized": "Token-\u003e[Char]",
          "package": "rdioh",
          "partial": "Url",
          "signature": "Token-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:authUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Auth",
          "name": "reqUrl",
          "package": "rdioh",
          "signature": "Request",
          "source": "src/Rdioh-Auth.html#reqUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "reqUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:reqUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Auth",
          "name": "srvUrl",
          "package": "rdioh",
          "signature": "ByteString -\u003e Request",
          "source": "src/Rdioh-Auth.html#srvUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "srvUrl",
          "normalized": "ByteString-\u003eRequest",
          "package": "rdioh",
          "partial": "Url",
          "signature": "ByteString-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:srvUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a key and a secret. Does three-legged auth and returns an auth token. You can just use \u003ccode\u003erunRdioWithAuth\u003c/code\u003e in most cases.\n\u003c/p\u003e",
          "module": "Rdioh.Auth",
          "name": "threeLegToken",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e m Token",
          "source": "src/Rdioh-Auth.html#threeLegToken",
          "type": "function"
        },
        "index": {
          "description": "Takes key and secret Does three-legged auth and returns an auth token You can just use runRdioWithAuth in most cases",
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "threeLegToken",
          "normalized": "String-\u003eString-\u003ea Token",
          "package": "rdioh",
          "partial": "Leg Token",
          "signature": "String-\u003eString-\u003em Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:threeLegToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a key and a secret. Returns a two-legged auth token. You can\n just use \u003ccode\u003erunRdio\u003c/code\u003e in most cases.\n\u003c/p\u003e",
          "module": "Rdioh.Auth",
          "name": "twoLegToken",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e Token",
          "source": "src/Rdioh-Auth.html#twoLegToken",
          "type": "function"
        },
        "index": {
          "description": "Takes key and secret Returns two-legged auth token You can just use runRdio in most cases",
          "hierarchy": "Rdioh Auth",
          "module": "Rdioh.Auth",
          "name": "twoLegToken",
          "normalized": "String-\u003eString-\u003eToken",
          "package": "rdioh",
          "partial": "Leg Token",
          "signature": "String-\u003eString-\u003eToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Auth.html#v:twoLegToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Models",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Models",
          "package": "rdioh",
          "partial": "Models",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Activity",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Activity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Activity",
          "package": "rdioh",
          "partial": "Activity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Activity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Album",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Album",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Album",
          "package": "rdioh",
          "partial": "Album",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumExtra",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#AlbumExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumExtra",
          "package": "rdioh",
          "partial": "Album Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:AlbumExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Artist",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Artist",
          "package": "rdioh",
          "partial": "Artist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistExtra",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#ArtistExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistExtra",
          "package": "rdioh",
          "partial": "Artist Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:ArtistExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistStation",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistStation",
          "package": "rdioh",
          "partial": "Artist Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:ArtistStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistTopSongsStation",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistTopSongsStation",
          "package": "rdioh",
          "partial": "Artist Top Songs Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:ArtistTopSongsStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollaborationMode",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#CollaborationMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollaborationMode",
          "package": "rdioh",
          "partial": "Collaboration Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:CollaborationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollectionAlbum",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollectionAlbum",
          "package": "rdioh",
          "partial": "Collection Album",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:CollectionAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollectionArtist",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollectionArtist",
          "package": "rdioh",
          "partial": "Collection Artist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:CollectionArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Gender",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Gender",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Gender",
          "package": "rdioh",
          "partial": "Gender",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "HeavyRotationStation",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "HeavyRotationStation",
          "package": "rdioh",
          "partial": "Heavy Rotation Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:HeavyRotationStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "HeavyRotationUserStation",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "HeavyRotationUserStation",
          "package": "rdioh",
          "partial": "Heavy Rotation User Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:HeavyRotationUserStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Label",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Label",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Label",
          "package": "rdioh",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "LabelStation",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "LabelStation",
          "package": "rdioh",
          "partial": "Label Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:LabelStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Playlist",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Playlist",
          "package": "rdioh",
          "partial": "Playlist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Playlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlaylistExtra",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlaylistExtra",
          "package": "rdioh",
          "partial": "Playlist Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:PlaylistExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlaylistType",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#PlaylistType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlaylistType",
          "package": "rdioh",
          "partial": "Playlist Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:PlaylistType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "RdioResponse",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#RdioResponse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "RdioResponse",
          "package": "rdioh",
          "partial": "Rdio Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:RdioResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Reason",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Reason",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Reason",
          "package": "rdioh",
          "partial": "Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Scope",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Scope",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Scope",
          "package": "rdioh",
          "partial": "Scope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "SearchResults",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#SearchResults",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "SearchResults",
          "package": "rdioh",
          "partial": "Search Results",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:SearchResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Timeframe",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Timeframe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Timeframe",
          "package": "rdioh",
          "partial": "Timeframe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Timeframe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Track",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Track",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Track",
          "package": "rdioh",
          "partial": "Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "TrackExtra",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "TrackExtra",
          "package": "rdioh",
          "partial": "Track Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:TrackExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Update",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#Update",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Update",
          "package": "rdioh",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UpdateType",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UpdateType",
          "package": "rdioh",
          "partial": "Update Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:UpdateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "User",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "User",
          "package": "rdioh",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserCollectionStation",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserCollectionStation",
          "package": "rdioh",
          "partial": "User Collection Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:UserCollectionStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserExtra",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserExtra",
          "package": "rdioh",
          "partial": "User Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:UserExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserPlaylists",
          "package": "rdioh",
          "source": "src/Rdioh-Models.html#UserPlaylists",
          "type": "data"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserPlaylists",
          "package": "rdioh",
          "partial": "User Playlists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#t:UserPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Activity",
          "package": "rdioh",
          "signature": "Activity",
          "source": "src/Rdioh-Models.html#Activity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Activity",
          "package": "rdioh",
          "partial": "Activity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Activity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Album",
          "package": "rdioh",
          "signature": "Album",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Album",
          "package": "rdioh",
          "partial": "Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumBigIcon",
          "package": "rdioh",
          "signature": "AlbumBigIcon",
          "source": "src/Rdioh-Models.html#AlbumExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumBigIcon",
          "package": "rdioh",
          "partial": "Album Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AlbumBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumCount",
          "package": "rdioh",
          "signature": "AlbumCount",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumCount",
          "package": "rdioh",
          "partial": "Album Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AlbumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumIframeUrl",
          "package": "rdioh",
          "signature": "AlbumIframeUrl",
          "source": "src/Rdioh-Models.html#AlbumExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumIframeUrl",
          "package": "rdioh",
          "partial": "Album Iframe Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AlbumIframeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumIsCompilation",
          "package": "rdioh",
          "signature": "AlbumIsCompilation",
          "source": "src/Rdioh-Models.html#AlbumExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumIsCompilation",
          "package": "rdioh",
          "partial": "Album Is Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AlbumIsCompilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumLabel",
          "package": "rdioh",
          "signature": "AlbumLabel",
          "source": "src/Rdioh-Models.html#AlbumExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumLabel",
          "package": "rdioh",
          "partial": "Album Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AlbumLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AlbumReleaseDateISO",
          "package": "rdioh",
          "signature": "AlbumReleaseDateISO",
          "source": "src/Rdioh-Models.html#AlbumExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AlbumReleaseDateISO",
          "package": "rdioh",
          "partial": "Album Release Date ISO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AlbumReleaseDateISO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "AllScope",
          "package": "rdioh",
          "signature": "AllScope",
          "source": "src/Rdioh-Models.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "AllScope",
          "package": "rdioh",
          "partial": "All Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:AllScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Artist",
          "package": "rdioh",
          "signature": "Artist",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Artist",
          "package": "rdioh",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistAlbumCount",
          "package": "rdioh",
          "signature": "ArtistAlbumCount",
          "source": "src/Rdioh-Models.html#ArtistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistAlbumCount",
          "package": "rdioh",
          "partial": "Artist Album Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ArtistAlbumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistCount",
          "package": "rdioh",
          "signature": "ArtistCount",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistCount",
          "package": "rdioh",
          "partial": "Artist Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ArtistCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistStation",
          "package": "rdioh",
          "signature": "ArtistStation",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistStation",
          "package": "rdioh",
          "partial": "Artist Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ArtistStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ArtistTopSongsStation",
          "package": "rdioh",
          "signature": "ArtistTopSongsStation",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ArtistTopSongsStation",
          "package": "rdioh",
          "partial": "Artist Top Songs Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ArtistTopSongsStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Collab",
          "package": "rdioh",
          "signature": "Collab",
          "source": "src/Rdioh-Models.html#PlaylistType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Collab",
          "package": "rdioh",
          "partial": "Collab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Collab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollaborationWithAll",
          "package": "rdioh",
          "signature": "CollaborationWithAll",
          "source": "src/Rdioh-Models.html#CollaborationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollaborationWithAll",
          "package": "rdioh",
          "partial": "Collaboration With All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:CollaborationWithAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollaborationWithFollowed",
          "package": "rdioh",
          "signature": "CollaborationWithFollowed",
          "source": "src/Rdioh-Models.html#CollaborationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollaborationWithFollowed",
          "package": "rdioh",
          "partial": "Collaboration With Followed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:CollaborationWithFollowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollectionAlbum",
          "package": "rdioh",
          "signature": "CollectionAlbum",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollectionAlbum",
          "package": "rdioh",
          "partial": "Collection Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:CollectionAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollectionArtist",
          "package": "rdioh",
          "signature": "CollectionArtist",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollectionArtist",
          "package": "rdioh",
          "partial": "Collection Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:CollectionArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollectionKey",
          "package": "rdioh",
          "signature": "CollectionKey",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollectionKey",
          "package": "rdioh",
          "partial": "Collection Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:CollectionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "CollectionUrl",
          "package": "rdioh",
          "signature": "CollectionUrl",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "CollectionUrl",
          "package": "rdioh",
          "partial": "Collection Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:CollectionUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "DisplayName",
          "package": "rdioh",
          "signature": "DisplayName",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "DisplayName",
          "package": "rdioh",
          "partial": "Display Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:DisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Female",
          "package": "rdioh",
          "signature": "Female",
          "source": "src/Rdioh-Models.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Female",
          "package": "rdioh",
          "partial": "Female",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Female"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "FollowersUrl",
          "package": "rdioh",
          "signature": "FollowersUrl",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "FollowersUrl",
          "package": "rdioh",
          "partial": "Followers Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:FollowersUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "FollowingUrl",
          "package": "rdioh",
          "signature": "FollowingUrl",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "FollowingUrl",
          "package": "rdioh",
          "partial": "Following Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:FollowingUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "FriendScope",
          "package": "rdioh",
          "signature": "FriendScope",
          "source": "src/Rdioh-Models.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "FriendScope",
          "package": "rdioh",
          "partial": "Friend Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:FriendScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "HeavyRotationKey",
          "package": "rdioh",
          "signature": "HeavyRotationKey",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "HeavyRotationKey",
          "package": "rdioh",
          "partial": "Heavy Rotation Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:HeavyRotationKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "HeavyRotationStation",
          "package": "rdioh",
          "signature": "HeavyRotationStation",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "HeavyRotationStation",
          "package": "rdioh",
          "partial": "Heavy Rotation Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:HeavyRotationStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "HeavyRotationUserStation",
          "package": "rdioh",
          "signature": "HeavyRotationUserStation",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "HeavyRotationUserStation",
          "package": "rdioh",
          "partial": "Heavy Rotation User Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:HeavyRotationUserStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsInCollection",
          "package": "rdioh",
          "signature": "IsInCollection",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsInCollection",
          "package": "rdioh",
          "partial": "Is In Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsOnCompilation",
          "package": "rdioh",
          "signature": "IsOnCompilation",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsOnCompilation",
          "package": "rdioh",
          "partial": "Is On Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsOnCompilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsPublished",
          "package": "rdioh",
          "signature": "IsPublished",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsPublished",
          "package": "rdioh",
          "partial": "Is Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsSubscriber",
          "package": "rdioh",
          "signature": "IsSubscriber",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsSubscriber",
          "package": "rdioh",
          "partial": "Is Subscriber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsSubscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsTrial",
          "package": "rdioh",
          "signature": "IsTrial",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsTrial",
          "package": "rdioh",
          "partial": "Is Trial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsTrial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsUnlimited",
          "package": "rdioh",
          "signature": "IsUnlimited",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsUnlimited",
          "package": "rdioh",
          "partial": "Is Unlimited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsUnlimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "IsViewable",
          "package": "rdioh",
          "signature": "IsViewable",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "IsViewable",
          "package": "rdioh",
          "partial": "Is Viewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:IsViewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Isrcs",
          "package": "rdioh",
          "signature": "Isrcs",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Isrcs",
          "package": "rdioh",
          "partial": "Isrcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Isrcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Label",
          "package": "rdioh",
          "signature": "Label",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Label",
          "package": "rdioh",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "LabelStation",
          "package": "rdioh",
          "signature": "LabelStation",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "LabelStation",
          "package": "rdioh",
          "partial": "Label Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:LabelStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "LastSongPlayTime",
          "package": "rdioh",
          "signature": "LastSongPlayTime",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "LastSongPlayTime",
          "package": "rdioh",
          "partial": "Last Song Play Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:LastSongPlayTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "LastSongPlayed",
          "package": "rdioh",
          "signature": "LastSongPlayed",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "LastSongPlayed",
          "package": "rdioh",
          "partial": "Last Song Played",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:LastSongPlayed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "LastWeek",
          "package": "rdioh",
          "signature": "LastWeek",
          "source": "src/Rdioh-Models.html#Timeframe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "LastWeek",
          "package": "rdioh",
          "partial": "Last Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:LastWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Male",
          "package": "rdioh",
          "signature": "Male",
          "source": "src/Rdioh-Models.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Male",
          "package": "rdioh",
          "partial": "Male",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Male"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "NetworkHeavyRotationKey",
          "package": "rdioh",
          "signature": "NetworkHeavyRotationKey",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "NetworkHeavyRotationKey",
          "package": "rdioh",
          "partial": "Network Heavy Rotation Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:NetworkHeavyRotationKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "NoCollaboration",
          "package": "rdioh",
          "signature": "NoCollaboration",
          "source": "src/Rdioh-Models.html#CollaborationMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "NoCollaboration",
          "package": "rdioh",
          "partial": "No Collaboration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:NoCollaboration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "OrderedAlbum",
          "package": "rdioh",
          "signature": "OrderedAlbum",
          "source": "src/Rdioh-Models.html#Reason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "OrderedAlbum",
          "package": "rdioh",
          "partial": "Ordered Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:OrderedAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Owned",
          "package": "rdioh",
          "signature": "Owned",
          "source": "src/Rdioh-Models.html#PlaylistType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Owned",
          "package": "rdioh",
          "partial": "Owned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Owned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlBigIcon",
          "package": "rdioh",
          "signature": "PlBigIcon",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlBigIcon",
          "package": "rdioh",
          "partial": "Pl Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlDescription",
          "package": "rdioh",
          "signature": "PlDescription",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlDescription",
          "package": "rdioh",
          "partial": "Pl Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlIframeUrl",
          "package": "rdioh",
          "signature": "PlIframeUrl",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlIframeUrl",
          "package": "rdioh",
          "partial": "Pl Iframe Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlIframeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlTrackKeys",
          "package": "rdioh",
          "signature": "PlTrackKeys",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlTrackKeys",
          "package": "rdioh",
          "partial": "Pl Track Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlTracks",
          "package": "rdioh",
          "signature": "PlTracks",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlTracks",
          "package": "rdioh",
          "partial": "Pl Tracks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlayCount",
          "package": "rdioh",
          "signature": "PlayCount",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlayCount",
          "package": "rdioh",
          "partial": "Play Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlayCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Playlist",
          "package": "rdioh",
          "signature": "Playlist",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Playlist",
          "package": "rdioh",
          "partial": "Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Playlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "PlaylistsUrl",
          "package": "rdioh",
          "signature": "PlaylistsUrl",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "PlaylistsUrl",
          "package": "rdioh",
          "partial": "Playlists Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:PlaylistsUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "RdioResponse",
          "package": "rdioh",
          "signature": "RdioResponse",
          "source": "src/Rdioh-Models.html#RdioResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "RdioResponse",
          "package": "rdioh",
          "partial": "Rdio Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:RdioResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ReasonNotViewable",
          "package": "rdioh",
          "signature": "ReasonNotViewable",
          "source": "src/Rdioh-Models.html#PlaylistExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ReasonNotViewable",
          "package": "rdioh",
          "partial": "Reason Not Viewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ReasonNotViewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ReviewCount",
          "package": "rdioh",
          "signature": "ReviewCount",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ReviewCount",
          "package": "rdioh",
          "partial": "Review Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ReviewCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "SearchResults",
          "package": "rdioh",
          "signature": "SearchResults",
          "source": "src/Rdioh-Models.html#SearchResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "SearchResults",
          "package": "rdioh",
          "partial": "Search Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:SearchResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Subscribed",
          "package": "rdioh",
          "signature": "Subscribed",
          "source": "src/Rdioh-Models.html#PlaylistType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Subscribed",
          "package": "rdioh",
          "partial": "Subscribed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Subscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ThisWeek",
          "package": "rdioh",
          "signature": "ThisWeek",
          "source": "src/Rdioh-Models.html#Timeframe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ThisWeek",
          "package": "rdioh",
          "partial": "This Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ThisWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "TooFewSongs",
          "package": "rdioh",
          "signature": "TooFewSongs",
          "source": "src/Rdioh-Models.html#Reason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "TooFewSongs",
          "package": "rdioh",
          "partial": "Too Few Songs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:TooFewSongs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Track",
          "package": "rdioh",
          "signature": "Track",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Track",
          "package": "rdioh",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "TrackBigIcon",
          "package": "rdioh",
          "signature": "TrackBigIcon",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "TrackBigIcon",
          "package": "rdioh",
          "partial": "Track Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:TrackBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "TrackCount",
          "package": "rdioh",
          "signature": "TrackCount",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "TrackCount",
          "package": "rdioh",
          "partial": "Track Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:TrackCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "TrackIframeUrl",
          "package": "rdioh",
          "signature": "TrackIframeUrl",
          "source": "src/Rdioh-Models.html#TrackExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "TrackIframeUrl",
          "package": "rdioh",
          "partial": "Track Iframe Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:TrackIframeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "TwoWeeks",
          "package": "rdioh",
          "signature": "TwoWeeks",
          "source": "src/Rdioh-Models.html#Timeframe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "TwoWeeks",
          "package": "rdioh",
          "partial": "Two Weeks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:TwoWeeks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UCommentOnAlbum",
          "package": "rdioh",
          "signature": "UCommentOnAlbum",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UCommentOnAlbum",
          "package": "rdioh",
          "partial": "UComment On Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UCommentOnAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UCommentOnArtist",
          "package": "rdioh",
          "signature": "UCommentOnArtist",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UCommentOnArtist",
          "package": "rdioh",
          "partial": "UComment On Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UCommentOnArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UCommentOnPlaylist",
          "package": "rdioh",
          "signature": "UCommentOnPlaylist",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UCommentOnPlaylist",
          "package": "rdioh",
          "partial": "UComment On Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UCommentOnPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UCommentOnTrack",
          "package": "rdioh",
          "signature": "UCommentOnTrack",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UCommentOnTrack",
          "package": "rdioh",
          "partial": "UComment On Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UCommentOnTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UFriendAdded",
          "package": "rdioh",
          "signature": "UFriendAdded",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UFriendAdded",
          "package": "rdioh",
          "partial": "UFriend Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UFriendAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UTrackAddedToCollection",
          "package": "rdioh",
          "signature": "UTrackAddedToCollection",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UTrackAddedToCollection",
          "package": "rdioh",
          "partial": "UTrack Added To Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UTrackAddedToCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UTrackAddedToPlaylist",
          "package": "rdioh",
          "signature": "UTrackAddedToPlaylist",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UTrackAddedToPlaylist",
          "package": "rdioh",
          "partial": "UTrack Added To Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UTrackAddedToPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UTrackAddedViaMatchCollection",
          "package": "rdioh",
          "signature": "UTrackAddedViaMatchCollection",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UTrackAddedViaMatchCollection",
          "package": "rdioh",
          "partial": "UTrack Added Via Match Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UTrackAddedViaMatchCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UTrackSynced",
          "package": "rdioh",
          "signature": "UTrackSynced",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UTrackSynced",
          "package": "rdioh",
          "partial": "UTrack Synced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UTrackSynced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UUserJoined",
          "package": "rdioh",
          "signature": "UUserJoined",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UUserJoined",
          "package": "rdioh",
          "partial": "UUser Joined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UUserJoined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UUserSubscribed",
          "package": "rdioh",
          "signature": "UUserSubscribed",
          "source": "src/Rdioh-Models.html#UpdateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UUserSubscribed",
          "package": "rdioh",
          "partial": "UUser Subscribed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UUserSubscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Update",
          "package": "rdioh",
          "signature": "Update",
          "source": "src/Rdioh-Models.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Update",
          "package": "rdioh",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "User",
          "package": "rdioh",
          "signature": "User",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "User",
          "package": "rdioh",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserCollectionStation",
          "package": "rdioh",
          "signature": "UserCollectionStation",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserCollectionStation",
          "package": "rdioh",
          "partial": "User Collection Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UserCollectionStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserPlaylists",
          "package": "rdioh",
          "signature": "UserPlaylists",
          "source": "src/Rdioh-Models.html#UserPlaylists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserPlaylists",
          "package": "rdioh",
          "partial": "User Playlists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UserPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserPreference",
          "package": "rdioh",
          "signature": "UserPreference",
          "source": "src/Rdioh-Models.html#Reason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserPreference",
          "package": "rdioh",
          "partial": "User Preference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UserPreference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "UserScope",
          "package": "rdioh",
          "signature": "UserScope",
          "source": "src/Rdioh-Models.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "UserScope",
          "package": "rdioh",
          "partial": "User Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:UserScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Username",
          "package": "rdioh",
          "signature": "Username",
          "source": "src/Rdioh-Models.html#UserExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Username",
          "package": "rdioh",
          "partial": "Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "Viewable",
          "package": "rdioh",
          "signature": "Viewable",
          "source": "src/Rdioh-Models.html#Reason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "Viewable",
          "package": "rdioh",
          "partial": "Viewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:Viewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "activityUser",
          "package": "rdioh",
          "signature": "User",
          "source": "src/Rdioh-Models.html#Activity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "activityUser",
          "package": "rdioh",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:activityUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumArtist",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumArtist",
          "package": "rdioh",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumArtistKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumArtistKey",
          "package": "rdioh",
          "partial": "Artist Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumArtistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumArtistUrl",
          "package": "rdioh",
          "partial": "Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumBigIcon",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumBigIcon",
          "package": "rdioh",
          "partial": "Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumLabel",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumLabel",
          "package": "rdioh",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "albumUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "albumUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:albumUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistAlbumCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistAlbumCount",
          "package": "rdioh",
          "partial": "Album Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistAlbumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "artistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "artistUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:artistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asAlbumCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asAlbumCount",
          "package": "rdioh",
          "partial": "Album Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asAlbumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asArtistName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asArtistName",
          "package": "rdioh",
          "partial": "Artist Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asArtistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asArtistUrl",
          "package": "rdioh",
          "partial": "Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asCount",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asHasRadio",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asHasRadio",
          "package": "rdioh",
          "partial": "Has Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asHasRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asRadioKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asRadioKey",
          "package": "rdioh",
          "partial": "Radio Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asRadioKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asReloadOnRepeat",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asReloadOnRepeat",
          "package": "rdioh",
          "partial": "Reload On Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asReloadOnRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asTopSongsKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asTopSongsKey",
          "package": "rdioh",
          "partial": "Top Songs Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asTopSongsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asTracks",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asTracks",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Tracks",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "asUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "asUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:asUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssAlbumCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssAlbumCount",
          "package": "rdioh",
          "partial": "Album Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssAlbumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssArtistName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssArtistName",
          "package": "rdioh",
          "partial": "Artist Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssArtistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssArtistUrl",
          "package": "rdioh",
          "partial": "Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssCount",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssHasRadio",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssHasRadio",
          "package": "rdioh",
          "partial": "Has Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssHasRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssRadioKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssRadioKey",
          "package": "rdioh",
          "partial": "Radio Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssRadioKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssReloadOnRepeat",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssReloadOnRepeat",
          "package": "rdioh",
          "partial": "Reload On Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssReloadOnRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssTopSongsKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssTopSongsKey",
          "package": "rdioh",
          "partial": "Top Songs Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssTopSongsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssTracks",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssTracks",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Tracks",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "atssUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#ArtistTopSongsStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "atssUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:atssUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "canSample",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "canSample",
          "package": "rdioh",
          "partial": "Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:canSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "canStream",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "canStream",
          "package": "rdioh",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:canStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "canTether",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "canTether",
          "package": "rdioh",
          "partial": "Tether",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:canTether"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colAlbumArtistKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colAlbumArtistKey",
          "package": "rdioh",
          "partial": "Album Artist Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colAlbumArtistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colAlbumArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colAlbumArtistUrl",
          "package": "rdioh",
          "partial": "Album Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colAlbumArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colAlbumCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colAlbumCount",
          "package": "rdioh",
          "partial": "Album Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colAlbumCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colAlbumKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colAlbumKey",
          "package": "rdioh",
          "partial": "Album Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colAlbumKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colAlbumUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colAlbumUrl",
          "package": "rdioh",
          "partial": "Album Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colAlbumUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtist",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtist",
          "package": "rdioh",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistArtistKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistArtistKey",
          "package": "rdioh",
          "partial": "Artist Artist Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistArtistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistArtistUrl",
          "package": "rdioh",
          "partial": "Artist Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistBaseIcon",
          "package": "rdioh",
          "partial": "Artist Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistCollectionUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistCollectionUrl",
          "package": "rdioh",
          "partial": "Artist Collection Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistCollectionUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistHasRadio",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistHasRadio",
          "package": "rdioh",
          "partial": "Artist Has Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistHasRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistIcon",
          "package": "rdioh",
          "partial": "Artist Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistKey",
          "package": "rdioh",
          "partial": "Artist Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistLength",
          "package": "rdioh",
          "partial": "Artist Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistName",
          "package": "rdioh",
          "partial": "Artist Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistRadioKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistRadioKey",
          "package": "rdioh",
          "partial": "Artist Radio Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistRadioKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistShortUrl",
          "package": "rdioh",
          "partial": "Artist Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistTopSongsKey",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistTopSongsKey",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Artist Top Songs Key",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistTopSongsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistUrl",
          "package": "rdioh",
          "partial": "Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistUserKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistUserKey",
          "package": "rdioh",
          "partial": "Artist User Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistUserKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colArtistUserName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colArtistUserName",
          "package": "rdioh",
          "partial": "Artist User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colArtistUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colBigIcon",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colBigIcon",
          "package": "rdioh",
          "partial": "Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colCanSample",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colCanSample",
          "package": "rdioh",
          "partial": "Can Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colCanSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colCanStream",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colCanStream",
          "package": "rdioh",
          "partial": "Can Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colCanStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colCanTether",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colCanTether",
          "package": "rdioh",
          "partial": "Can Tether",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colCanTether"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colCollectionUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colCollectionUrl",
          "package": "rdioh",
          "partial": "Collection Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colCollectionUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#CollectionArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colDisplayDate",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colDisplayDate",
          "package": "rdioh",
          "partial": "Display Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colDisplayDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colDuration",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colDuration",
          "package": "rdioh",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colEmbedUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colEmbedUrl",
          "package": "rdioh",
          "partial": "Embed Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colEmbedUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colIframeUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colIframeUrl",
          "package": "rdioh",
          "partial": "Iframe Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colIframeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colIsClean",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colIsClean",
          "package": "rdioh",
          "partial": "Is Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colIsClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colIsCompilation",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colIsCompilation",
          "package": "rdioh",
          "partial": "Is Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colIsCompilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colIsExplicit",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colIsExplicit",
          "package": "rdioh",
          "partial": "Is Explicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colIsExplicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colItemTrackKeys",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colItemTrackKeys",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Item Track Keys",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colItemTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colLabel",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colLabel",
          "package": "rdioh",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colPrice",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colPrice",
          "package": "rdioh",
          "partial": "Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colReleaseDate",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colReleaseDate",
          "package": "rdioh",
          "partial": "Release Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colReleaseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colReleaseDateISO",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colReleaseDateISO",
          "package": "rdioh",
          "partial": "Release Date ISO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colReleaseDateISO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colTrackKeys",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colTrackKeys",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colUpcs",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colUpcs",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Upcs",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colUpcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colUserGender",
          "package": "rdioh",
          "signature": "Maybe Gender",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colUserGender",
          "package": "rdioh",
          "partial": "User Gender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colUserGender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colUserKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colUserKey",
          "package": "rdioh",
          "partial": "User Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colUserKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "colUserName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#CollectionAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "colUserName",
          "package": "rdioh",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:colUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "collectionKey",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "collectionKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:collectionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "collectionUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "collectionUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:collectionUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "date",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "date",
          "package": "rdioh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "displayDate",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "displayDate",
          "package": "rdioh",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:displayDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "displayName",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "displayName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:displayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "duration",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "duration",
          "package": "rdioh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "embedUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "embedUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:embedUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "firstName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "firstName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:firstName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "followersUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "followersUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:followersUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "followingUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "followingUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:followingUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "gender",
          "package": "rdioh",
          "signature": "Gender",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "gender",
          "package": "rdioh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hasRadio",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hasRadio",
          "package": "rdioh",
          "partial": "Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hasRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "heavyRotationKey",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "heavyRotationKey",
          "package": "rdioh",
          "partial": "Rotation Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:heavyRotationKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsCount",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsReloadOnRepeat",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsReloadOnRepeat",
          "package": "rdioh",
          "partial": "Reload On Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsReloadOnRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsTracks",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsTracks",
          "package": "rdioh",
          "partial": "Tracks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrsUser",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrsUser",
          "package": "rdioh",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrsUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusCount",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusReloadOnRepeat",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusReloadOnRepeat",
          "package": "rdioh",
          "partial": "Reload On Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusReloadOnRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusTracks",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusTracks",
          "package": "rdioh",
          "partial": "Tracks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "hrusUser",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#HeavyRotationUserStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "hrusUser",
          "package": "rdioh",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:hrusUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "iframeUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "iframeUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:iframeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isClean",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isClean",
          "package": "rdioh",
          "partial": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isCompilation",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isCompilation",
          "package": "rdioh",
          "partial": "Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isCompilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isExplicit",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isExplicit",
          "package": "rdioh",
          "partial": "Explicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isExplicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isInCollection",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isInCollection",
          "package": "rdioh",
          "partial": "In Collection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isOnCompilation",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isOnCompilation",
          "package": "rdioh",
          "partial": "On Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isOnCompilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isPublished",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isPublished",
          "package": "rdioh",
          "partial": "Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isSubscriber",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isSubscriber",
          "package": "rdioh",
          "partial": "Subscriber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isSubscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isTrial",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isTrial",
          "package": "rdioh",
          "partial": "Trial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isTrial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isUnlimited",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isUnlimited",
          "package": "rdioh",
          "partial": "Unlimited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isUnlimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isViewable",
          "package": "rdioh",
          "signature": "Maybe Bool",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isViewable",
          "package": "rdioh",
          "partial": "Viewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isViewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "isrcs",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "isrcs",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:isrcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "labelHasRadio",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "labelHasRadio",
          "package": "rdioh",
          "partial": "Has Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:labelHasRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "labelKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "labelKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:labelKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "labelName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "labelName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:labelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "labelRadioKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "labelRadioKey",
          "package": "rdioh",
          "partial": "Radio Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:labelRadioKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "labelShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "labelShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:labelShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "labelUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "labelUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:labelUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lastName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lastName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lastName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lastSongPlayTime",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lastSongPlayTime",
          "package": "rdioh",
          "partial": "Song Play Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lastSongPlayTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lastSongPlayed",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lastSongPlayed",
          "package": "rdioh",
          "partial": "Song Played",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lastSongPlayed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lastUpdated",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lastUpdated",
          "package": "rdioh",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lastUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "libraryVersion",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "libraryVersion",
          "package": "rdioh",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:libraryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsCount",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsHasRadio",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsHasRadio",
          "package": "rdioh",
          "partial": "Has Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsHasRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsLabelName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsLabelName",
          "package": "rdioh",
          "partial": "Label Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsLabelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsLabelUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsLabelUrl",
          "package": "rdioh",
          "partial": "Label Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsLabelUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsRadioKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsRadioKey",
          "package": "rdioh",
          "partial": "Radio Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsRadioKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsReloadOnRepeat",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsReloadOnRepeat",
          "package": "rdioh",
          "partial": "Reload On Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsReloadOnRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsTracks",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsTracks",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Tracks",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "lsUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#LabelStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "lsUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:lsUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "networkHeavyRotationKey",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "networkHeavyRotationKey",
          "package": "rdioh",
          "partial": "Heavy Rotation Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:networkHeavyRotationKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "owner",
          "package": "rdioh",
          "signature": "User",
          "source": "src/Rdioh-Models.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "owner",
          "package": "rdioh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:owner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plBaseIcon",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plBigIcon",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plBigIcon",
          "package": "rdioh",
          "partial": "Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plDescription",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plDescription",
          "package": "rdioh",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plEmbedUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plEmbedUrl",
          "package": "rdioh",
          "partial": "Embed Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plEmbedUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plIFrameUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plIFrameUrl",
          "package": "rdioh",
          "partial": "IFrame Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plIFrameUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plIcon",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plLength",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plOwner",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plOwner",
          "package": "rdioh",
          "partial": "Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plOwnerIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plOwnerIcon",
          "package": "rdioh",
          "partial": "Owner Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plOwnerIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plOwnerKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plOwnerKey",
          "package": "rdioh",
          "partial": "Owner Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plOwnerKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plOwnerUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plOwnerUrl",
          "package": "rdioh",
          "partial": "Owner Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plOwnerUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plShortUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plShortUrl",
          "package": "rdioh",
          "partial": "Short Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plShortUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plTracks",
          "package": "rdioh",
          "signature": "Maybe [Track]",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plTracks",
          "normalized": "Maybe[Track]",
          "package": "rdioh",
          "partial": "Tracks",
          "signature": "Maybe[Track]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "plUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "plUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:plUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "playCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "playCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:playCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "playlistsUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "playlistsUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:playlistsUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "price",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "price",
          "package": "rdioh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:price"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "radioKey",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "radioKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:radioKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "rdioResult",
          "package": "rdioh",
          "signature": "v",
          "source": "src/Rdioh-Models.html#RdioResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "rdioResult",
          "package": "rdioh",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:rdioResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "rdioStatus",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#RdioResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "rdioStatus",
          "package": "rdioh",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:rdioStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "reasonNotViewable",
          "package": "rdioh",
          "signature": "Maybe Reason",
          "source": "src/Rdioh-Models.html#Playlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "reasonNotViewable",
          "package": "rdioh",
          "partial": "Not Viewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:reasonNotViewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "releaseDate",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "releaseDate",
          "package": "rdioh",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:releaseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "releaseDateISO",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "releaseDateISO",
          "package": "rdioh",
          "partial": "Date ISO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:releaseDateISO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "results",
          "package": "rdioh",
          "signature": "[v]",
          "source": "src/Rdioh-Models.html#SearchResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "results",
          "normalized": "[a]",
          "package": "rdioh",
          "signature": "[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "reviewCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "reviewCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:reviewCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "topSongsKey",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "topSongsKey",
          "package": "rdioh",
          "partial": "Songs Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:topSongsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackAlbum",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackAlbum",
          "package": "rdioh",
          "partial": "Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackAlbumArtist",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackAlbumArtist",
          "package": "rdioh",
          "partial": "Album Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackAlbumArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackAlbumArtistKey",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackAlbumArtistKey",
          "package": "rdioh",
          "partial": "Album Artist Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackAlbumArtistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackAlbumKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackAlbumKey",
          "package": "rdioh",
          "partial": "Album Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackAlbumKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackAlbumUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackAlbumUrl",
          "package": "rdioh",
          "partial": "Album Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackAlbumUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackArtist",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackArtist",
          "package": "rdioh",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackArtistKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackArtistKey",
          "package": "rdioh",
          "partial": "Artist Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackArtistKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackArtistUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackArtistUrl",
          "package": "rdioh",
          "partial": "Artist Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackArtistUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackBigIcon",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackBigIcon",
          "package": "rdioh",
          "partial": "Big Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackBigIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackCanDownload",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackCanDownload",
          "package": "rdioh",
          "partial": "Can Download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackCanDownload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackCanDownloadAlbumOnly",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackCanDownloadAlbumOnly",
          "package": "rdioh",
          "partial": "Can Download Album Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackCanDownloadAlbumOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackCanSample",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackCanSample",
          "package": "rdioh",
          "partial": "Can Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackCanSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackCanStream",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackCanStream",
          "package": "rdioh",
          "partial": "Can Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackCanStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackCanTether",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackCanTether",
          "package": "rdioh",
          "partial": "Can Tether",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackCanTether"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackCount",
          "package": "rdioh",
          "signature": "Maybe Int",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackDuration",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackDuration",
          "package": "rdioh",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackEmbedUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackEmbedUrl",
          "package": "rdioh",
          "partial": "Embed Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackEmbedUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackIframeUrl",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackIframeUrl",
          "package": "rdioh",
          "partial": "Iframe Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackIframeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackIsClean",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackIsClean",
          "package": "rdioh",
          "partial": "Is Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackIsClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackIsExplicit",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackIsExplicit",
          "package": "rdioh",
          "partial": "Is Explicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackIsExplicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackKeys",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#Album",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackKeys",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Keys",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackNum",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackNum",
          "package": "rdioh",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackPrice",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackPrice",
          "package": "rdioh",
          "partial": "Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "trackUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "trackUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:trackUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsCount",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsCount",
          "package": "rdioh",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsLength",
          "package": "rdioh",
          "signature": "Int",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsLength",
          "package": "rdioh",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsName",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsName",
          "package": "rdioh",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsReloadOnRepeat",
          "package": "rdioh",
          "signature": "Bool",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsReloadOnRepeat",
          "package": "rdioh",
          "partial": "Reload On Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsReloadOnRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsTrackKeys",
          "package": "rdioh",
          "signature": "Maybe [String]",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsTrackKeys",
          "normalized": "Maybe[String]",
          "package": "rdioh",
          "partial": "Track Keys",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsTrackKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsTracks",
          "package": "rdioh",
          "signature": "[String]",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsTracks",
          "normalized": "[String]",
          "package": "rdioh",
          "partial": "Tracks",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "ucsUser",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#UserCollectionStation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "ucsUser",
          "package": "rdioh",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:ucsUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "upCollab",
          "package": "rdioh",
          "signature": "[Playlist]",
          "source": "src/Rdioh-Models.html#UserPlaylists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "upCollab",
          "normalized": "[Playlist]",
          "package": "rdioh",
          "partial": "Collab",
          "signature": "[Playlist]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:upCollab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "upOwned",
          "package": "rdioh",
          "signature": "[Playlist]",
          "source": "src/Rdioh-Models.html#UserPlaylists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "upOwned",
          "normalized": "[Playlist]",
          "package": "rdioh",
          "partial": "Owned",
          "signature": "[Playlist]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:upOwned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "upSubscribed",
          "package": "rdioh",
          "signature": "[Playlist]",
          "source": "src/Rdioh-Models.html#UserPlaylists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "upSubscribed",
          "normalized": "[Playlist]",
          "package": "rdioh",
          "partial": "Subscribed",
          "signature": "[Playlist]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:upSubscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "updateType",
          "package": "rdioh",
          "signature": "UpdateType",
          "source": "src/Rdioh-Models.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "updateType",
          "package": "rdioh",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:updateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "updates",
          "package": "rdioh",
          "signature": "[Update]",
          "source": "src/Rdioh-Models.html#Activity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "updates",
          "normalized": "[Update]",
          "package": "rdioh",
          "signature": "[Update]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "userBaseIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "userBaseIcon",
          "package": "rdioh",
          "partial": "Base Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:userBaseIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "userIcon",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "userIcon",
          "package": "rdioh",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:userIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "userKey",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "userKey",
          "package": "rdioh",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:userKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "userUrl",
          "package": "rdioh",
          "signature": "String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "userUrl",
          "package": "rdioh",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:userUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Models",
          "name": "username",
          "package": "rdioh",
          "signature": "Maybe String",
          "source": "src/Rdioh-Models.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh Models",
          "module": "Rdioh.Models",
          "name": "username",
          "package": "rdioh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Models.html#v:username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Util",
          "name": "Util",
          "package": "rdioh",
          "source": "src/Rdioh-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Rdioh Util",
          "module": "Rdioh.Util",
          "name": "Util",
          "package": "rdioh",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused internally to easily convert different Rdio types to params for\n | requests. You can use \u003ccode\u003etoParam\u003c/code\u003e to do this if you want.\n\u003c/p\u003e",
          "module": "Rdioh.Util",
          "name": "Param",
          "package": "rdioh",
          "source": "src/Rdioh-Util.html#Param",
          "type": "class"
        },
        "index": {
          "description": "used internally to easily convert different Rdio types to params for requests You can use toParam to do this if you want",
          "hierarchy": "Rdioh Util",
          "module": "Rdioh.Util",
          "name": "Param",
          "package": "rdioh",
          "partial": "Param",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Util.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused internally\n\u003c/p\u003e",
          "module": "Rdioh.Util",
          "name": "(\u003c+\u003e)",
          "package": "rdioh",
          "signature": "[(String, String)] -\u003e (String, Maybe p) -\u003e [(String, String)]",
          "source": "src/Rdioh-Util.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "used internally",
          "hierarchy": "Rdioh Util",
          "module": "Rdioh.Util",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "[(String,String)]-\u003e(String,Maybe a)-\u003e[(String,String)]",
          "package": "rdioh",
          "signature": "[(String,String)]-\u003e(String,Maybe p)-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Util.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh.Util",
          "name": "toParam",
          "package": "rdioh",
          "signature": "a -\u003e String",
          "source": "src/Rdioh-Util.html#toParam",
          "type": "method"
        },
        "index": {
          "hierarchy": "Rdioh Util",
          "module": "Rdioh.Util",
          "name": "toParam",
          "normalized": "a-\u003eString",
          "package": "rdioh",
          "partial": "Param",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Util.html#v:toParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused internally to convert a list of parameters to a string that can be passed via GET/POST\n\u003c/p\u003e",
          "module": "Rdioh.Util",
          "name": "toParams",
          "package": "rdioh",
          "signature": "[(String, String)] -\u003e String",
          "source": "src/Rdioh-Util.html#toParams",
          "type": "function"
        },
        "index": {
          "description": "used internally to convert list of parameters to string that can be passed via GET POST",
          "hierarchy": "Rdioh Util",
          "module": "Rdioh.Util",
          "name": "toParams",
          "normalized": "[(String,String)]-\u003eString",
          "package": "rdioh",
          "partial": "Params",
          "signature": "[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh-Util.html#v:toParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "Rdioh",
          "package": "rdioh",
          "source": "src/Rdioh.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "Rdioh",
          "package": "rdioh",
          "partial": "Rdioh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eRdio\u003c/code\u003e monad...just a wrapper around a \u003ccode\u003eReaderT\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "Rdio",
          "package": "rdioh",
          "source": "src/Rdioh.html#Rdio",
          "type": "type"
        },
        "index": {
          "description": "The Rdio monad...just wrapper around ReaderT monad",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "Rdio",
          "package": "rdioh",
          "partial": "Rdio",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#t:Rdio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a user key. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "addFriend",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#addFriend",
          "type": "function"
        },
        "index": {
          "description": "Takes user key Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "addFriend",
          "normalized": "String-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "Friend",
          "signature": "String-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:addFriend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a list of keys of tracks or playlists. *Requires\n authentication*.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "addToCollection",
          "package": "rdioh",
          "signature": "[String] -\u003e Rdio (Either String Object)",
          "source": "src/Rdioh.html#addToCollection",
          "type": "function"
        },
        "index": {
          "description": "Takes list of keys of tracks or playlists Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "addToCollection",
          "normalized": "[String]-\u003eRdio(Either String Object)",
          "package": "rdioh",
          "partial": "To Collection",
          "signature": "[String]-\u003eRdio(Either String Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:addToCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a playlist key, a list of track keys to add to the playlist,\n [extras] (optional).\n Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "addToPlaylist",
          "package": "rdioh",
          "signature": "String -\u003e [String] -\u003e [PlaylistExtra] -\u003e Rdio (Either String Playlist)",
          "source": "src/Rdioh.html#addToPlaylist",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key list of track keys to add to the playlist extras optional Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "addToPlaylist",
          "normalized": "String-\u003e[String]-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "package": "rdioh",
          "partial": "To Playlist",
          "signature": "String-\u003e[String]-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:addToPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a name, a description, a list of track keys to start the\n playlist with, [extras] (optional). Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "createPlaylist",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e [String] -\u003e [PlaylistExtra] -\u003e Rdio (Either String Playlist)",
          "source": "src/Rdioh.html#createPlaylist",
          "type": "function"
        },
        "index": {
          "description": "Takes name description list of track keys to start the playlist with extras optional Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "createPlaylist",
          "normalized": "String-\u003eString-\u003e[String]-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "package": "rdioh",
          "partial": "Playlist",
          "signature": "String-\u003eString-\u003e[String]-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:createPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "currentUser",
          "package": "rdioh",
          "signature": "[UserExtra] -\u003e Rdio (Either String User)",
          "source": "src/Rdioh.html#currentUser",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "currentUser",
          "normalized": "[UserExtra]-\u003eRdio(Either String User)",
          "package": "rdioh",
          "partial": "User",
          "signature": "[UserExtra]-\u003eRdio(Either String User)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:currentUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a playlist key. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "deletePlaylist",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#deletePlaylist",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "deletePlaylist",
          "normalized": "String-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "Playlist",
          "signature": "String-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:deletePlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: an email address, [extras] (optional).\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "findUserByEmail",
          "package": "rdioh",
          "signature": "String -\u003e [UserExtra] -\u003e Rdio (Either String User)",
          "source": "src/Rdioh.html#findUserByEmail",
          "type": "function"
        },
        "index": {
          "description": "Takes an email address extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "findUserByEmail",
          "normalized": "String-\u003e[UserExtra]-\u003eRdio(Either String User)",
          "package": "rdioh",
          "partial": "User By Email",
          "signature": "String-\u003e[UserExtra]-\u003eRdio(Either String User)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:findUserByEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: user name, [extras] (optional).\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "findUserByName",
          "package": "rdioh",
          "signature": "String -\u003e [UserExtra] -\u003e Rdio (Either String User)",
          "source": "src/Rdioh.html#findUserByName",
          "type": "function"
        },
        "index": {
          "description": "Takes user name extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "findUserByName",
          "normalized": "String-\u003e[UserExtra]-\u003eRdio(Either String User)",
          "package": "rdioh",
          "partial": "User By Name",
          "signature": "String-\u003e[UserExtra]-\u003eRdio(Either String User)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:findUserByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: [keys], [extras] (optional)\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "get",
          "package": "rdioh",
          "signature": "[String] -\u003e [String] -\u003e Rdio (Either String a)",
          "source": "src/Rdioh.html#get",
          "type": "function"
        },
        "index": {
          "description": "Takes keys extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "get",
          "normalized": "[String]-\u003e[String]-\u003eRdio(Either String a)",
          "package": "rdioh",
          "signature": "[String]-\u003e[String]-\u003eRdio(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a user key, a scope.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getActivityStream",
          "package": "rdioh",
          "signature": "String -\u003e Scope -\u003e Rdio (Either String Activity)",
          "source": "src/Rdioh.html#getActivityStream",
          "type": "function"
        },
        "index": {
          "description": "Takes user key scope",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getActivityStream",
          "normalized": "String-\u003eScope-\u003eRdio(Either String Activity)",
          "package": "rdioh",
          "partial": "Activity Stream",
          "signature": "String-\u003eScope-\u003eRdio(Either String Activity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getActivityStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getActivityStream'",
          "package": "rdioh",
          "signature": "String -\u003e Scope -\u003e Maybe Int -\u003e Maybe Int -\u003e Rdio (Either String Activity)",
          "source": "src/Rdioh.html#getActivityStream%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getActivityStream'",
          "normalized": "String-\u003eScope-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String Activity)",
          "package": "rdioh",
          "partial": "Activity Stream'",
          "signature": "String-\u003eScope-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String Activity)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getActivityStream-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a UPC code, [extras] (optional)\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getAlbumsByUPC",
          "package": "rdioh",
          "signature": "Int -\u003e [AlbumExtra] -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsByUPC",
          "type": "function"
        },
        "index": {
          "description": "Takes UPC code extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsByUPC",
          "normalized": "Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums By UPC",
          "signature": "Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsByUPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: A key of an artist\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getAlbumsForArtist",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsForArtist",
          "type": "function"
        },
        "index": {
          "description": "Takes key of an artist",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsForArtist",
          "normalized": "String-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums For Artist",
          "signature": "String-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsForArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getAlbumsForArtist'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe Bool -\u003e [AlbumExtra] -\u003e Maybe Int -\u003e Maybe Int -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsForArtist%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsForArtist'",
          "normalized": "String-\u003eMaybe Bool-\u003e[AlbumExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums For Artist'",
          "signature": "String-\u003eMaybe Bool-\u003e[AlbumExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsForArtist-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: an artist key. Requires authentication OR use \u003ccode\u003egetAlbumsForArtistInCollection'\u003c/code\u003e and pass in a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getAlbumsForArtistInCollection",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsForArtistInCollection",
          "type": "function"
        },
        "index": {
          "description": "Takes an artist key Requires authentication OR use getAlbumsForArtistInCollection and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsForArtistInCollection",
          "normalized": "String-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums For Artist In Collection",
          "signature": "String-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsForArtistInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getAlbumsForArtistInCollection'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe String -\u003e [AlbumExtra] -\u003e Maybe String -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsForArtistInCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsForArtistInCollection'",
          "normalized": "String-\u003eMaybe String-\u003e[AlbumExtra]-\u003eMaybe String-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums For Artist In Collection'",
          "signature": "String-\u003eMaybe String-\u003e[AlbumExtra]-\u003eMaybe String-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsForArtistInCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a key of a label\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getAlbumsForLabel",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsForLabel",
          "type": "function"
        },
        "index": {
          "description": "Takes key of label",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsForLabel",
          "normalized": "String-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums For Label",
          "signature": "String-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsForLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getAlbumsForLabel'",
          "package": "rdioh",
          "signature": "String -\u003e [AlbumExtra] -\u003e Maybe Int -\u003e Maybe Int -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsForLabel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsForLabel'",
          "normalized": "String-\u003e[AlbumExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums For Label'",
          "signature": "String-\u003e[AlbumExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsForLabel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication OR use \u003ccode\u003egetAlbumsInCollection'\u003c/code\u003e and pass in\n a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getAlbumsInCollection",
          "package": "rdioh",
          "signature": "Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsInCollection",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication OR use getAlbumsInCollection and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsInCollection",
          "normalized": "Rdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums In Collection",
          "signature": "Rdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getAlbumsInCollection'",
          "package": "rdioh",
          "signature": "Maybe String -\u003e Maybe Int -\u003e Maybe Int -\u003e Maybe String -\u003e Maybe String -\u003e [AlbumExtra] -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getAlbumsInCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getAlbumsInCollection'",
          "normalized": "Maybe String-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe String-\u003eMaybe String-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Albums In Collection'",
          "signature": "Maybe String-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe String-\u003eMaybe String-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getAlbumsInCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a key of a label\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getArtistsForLabel",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getArtistsForLabel",
          "type": "function"
        },
        "index": {
          "description": "Takes key of label",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getArtistsForLabel",
          "normalized": "String-\u003eRdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Artists For Label",
          "signature": "String-\u003eRdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getArtistsForLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getArtistsForLabel'",
          "package": "rdioh",
          "signature": "String -\u003e [ArtistExtra] -\u003e Maybe Int -\u003e Maybe Int -\u003e Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getArtistsForLabel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getArtistsForLabel'",
          "normalized": "String-\u003e[ArtistExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Artists For Label'",
          "signature": "String-\u003e[ArtistExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getArtistsForLabel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication OR use \u003ccode\u003egetArtistsInCollection'\u003c/code\u003e and pass in\n a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getArtistsInCollection",
          "package": "rdioh",
          "signature": "Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getArtistsInCollection",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication OR use getArtistsInCollection and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getArtistsInCollection",
          "normalized": "Rdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Artists In Collection",
          "signature": "Rdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getArtistsInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getArtistsInCollection'",
          "package": "rdioh",
          "signature": "Maybe String -\u003e Maybe Int -\u003e Maybe Int -\u003e Maybe String -\u003e Maybe String -\u003e [ArtistExtra] -\u003e Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getArtistsInCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getArtistsInCollection'",
          "normalized": "Maybe String-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe String-\u003eMaybe String-\u003e[ArtistExtra]-\u003eRdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Artists In Collection'",
          "signature": "Maybe String-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe String-\u003eMaybe String-\u003e[ArtistExtra]-\u003eRdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getArtistsInCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getHeavyRotationAlbums",
          "package": "rdioh",
          "signature": "Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getHeavyRotationAlbums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getHeavyRotationAlbums",
          "normalized": "Rdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Heavy Rotation Albums",
          "signature": "Rdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getHeavyRotationAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getHeavyRotationAlbums'",
          "package": "rdioh",
          "signature": "Maybe String -\u003e Maybe Bool -\u003e Maybe Int -\u003e Maybe Int -\u003e Maybe Int -\u003e [AlbumExtra] -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getHeavyRotationAlbums%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getHeavyRotationAlbums'",
          "normalized": "Maybe String-\u003eMaybe Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Heavy Rotation Albums'",
          "signature": "Maybe String-\u003eMaybe Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getHeavyRotationAlbums-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getHeavyRotationArtists",
          "package": "rdioh",
          "signature": "Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getHeavyRotationArtists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getHeavyRotationArtists",
          "normalized": "Rdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Heavy Rotation Artists",
          "signature": "Rdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getHeavyRotationArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getHeavyRotationArtists'",
          "package": "rdioh",
          "signature": "Maybe String -\u003e Maybe Bool -\u003e Maybe Int -\u003e Maybe Int -\u003e Maybe Int -\u003e [ArtistExtra] -\u003e Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getHeavyRotationArtists%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getHeavyRotationArtists'",
          "normalized": "Maybe String-\u003eMaybe Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe Int-\u003e[ArtistExtra]-\u003eRdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Heavy Rotation Artists'",
          "signature": "Maybe String-\u003eMaybe Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe Int-\u003e[ArtistExtra]-\u003eRdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getHeavyRotationArtists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getNewReleases",
          "package": "rdioh",
          "signature": "Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getNewReleases",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getNewReleases",
          "normalized": "Rdio(Either String[Album])",
          "package": "rdioh",
          "partial": "New Releases",
          "signature": "Rdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getNewReleases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getNewReleases'",
          "package": "rdioh",
          "signature": "Maybe Timeframe -\u003e Maybe Int -\u003e Maybe Int -\u003e [AlbumExtra] -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getNewReleases%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getNewReleases'",
          "normalized": "Maybe Timeframe-\u003eMaybe Int-\u003eMaybe Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "New Releases'",
          "signature": "Maybe Timeframe-\u003eMaybe Int-\u003eMaybe Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getNewReleases-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: short code (everything after the http:\u003cem/\u003erd.io\u003cem\u003ex\u003c/em\u003e), [extras]\n (optional)\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getObjectFromShortCode",
          "package": "rdioh",
          "signature": "String -\u003e [String] -\u003e Rdio (Either String a)",
          "source": "src/Rdioh.html#getObjectFromShortCode",
          "type": "function"
        },
        "index": {
          "description": "Takes short code everything after the http rd.io extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getObjectFromShortCode",
          "normalized": "String-\u003e[String]-\u003eRdio(Either String a)",
          "package": "rdioh",
          "partial": "Object From Short Code",
          "signature": "String-\u003e[String]-\u003eRdio(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getObjectFromShortCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: url (everything after http:\u003cem/\u003erdio.com/), [extras] (optional)\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getObjectFromUrl",
          "package": "rdioh",
          "signature": "String -\u003e [String] -\u003e Rdio (Either String a)",
          "source": "src/Rdioh.html#getObjectFromUrl",
          "type": "function"
        },
        "index": {
          "description": "Takes url everything after http rdio.com extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getObjectFromUrl",
          "normalized": "String-\u003e[String]-\u003eRdio(Either String a)",
          "package": "rdioh",
          "partial": "Object From Url",
          "signature": "String-\u003e[String]-\u003eRdio(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getObjectFromUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getOfflineTracks",
          "package": "rdioh",
          "signature": "Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getOfflineTracks",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getOfflineTracks",
          "normalized": "Rdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Offline Tracks",
          "signature": "Rdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getOfflineTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getOfflineTracks'",
          "package": "rdioh",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e [TrackExtra] -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getOfflineTracks%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getOfflineTracks'",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Offline Tracks'",
          "signature": "Maybe Int-\u003eMaybe Int-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getOfflineTracks-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: the domain that the playback SWF will be embedded in\n (optional).\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getPlaybackToken",
          "package": "rdioh",
          "signature": "Maybe String -\u003e Rdio (Either String String)",
          "source": "src/Rdioh.html#getPlaybackToken",
          "type": "function"
        },
        "index": {
          "description": "Takes the domain that the playback SWF will be embedded in optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getPlaybackToken",
          "normalized": "Maybe String-\u003eRdio(Either String String)",
          "package": "rdioh",
          "partial": "Playback Token",
          "signature": "Maybe String-\u003eRdio(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getPlaybackToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication OR use \u003ccode\u003egetPlaylists'\u003c/code\u003e and pass in a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getPlaylists",
          "package": "rdioh",
          "signature": "Rdio (Either String UserPlaylists)",
          "source": "src/Rdioh.html#getPlaylists",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication OR use getPlaylists and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getPlaylists",
          "package": "rdioh",
          "partial": "Playlists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getPlaylists'",
          "package": "rdioh",
          "signature": "Maybe String -\u003e [PlaylistExtra] -\u003e Maybe Bool -\u003e Rdio (Either String UserPlaylists)",
          "source": "src/Rdioh.html#getPlaylists%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getPlaylists'",
          "normalized": "Maybe String-\u003e[PlaylistExtra]-\u003eMaybe Bool-\u003eRdio(Either String UserPlaylists)",
          "package": "rdioh",
          "partial": "Playlists'",
          "signature": "Maybe String-\u003e[PlaylistExtra]-\u003eMaybe Bool-\u003eRdio(Either String UserPlaylists)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getPlaylists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartAlbums",
          "package": "rdioh",
          "signature": "Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getTopChartAlbums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartAlbums",
          "normalized": "Rdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Top Chart Albums",
          "signature": "Rdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartAlbums'",
          "package": "rdioh",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e [AlbumExtra] -\u003e Rdio (Either String [Album])",
          "source": "src/Rdioh.html#getTopChartAlbums%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartAlbums'",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "package": "rdioh",
          "partial": "Top Chart Albums'",
          "signature": "Maybe Int-\u003eMaybe Int-\u003e[AlbumExtra]-\u003eRdio(Either String[Album])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartAlbums-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartArtists",
          "package": "rdioh",
          "signature": "Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getTopChartArtists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartArtists",
          "normalized": "Rdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Top Chart Artists",
          "signature": "Rdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartArtists'",
          "package": "rdioh",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e [ArtistExtra] -\u003e Rdio (Either String [Artist])",
          "source": "src/Rdioh.html#getTopChartArtists%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartArtists'",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003e[ArtistExtra]-\u003eRdio(Either String[Artist])",
          "package": "rdioh",
          "partial": "Top Chart Artists'",
          "signature": "Maybe Int-\u003eMaybe Int-\u003e[ArtistExtra]-\u003eRdio(Either String[Artist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartArtists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartPlaylists",
          "package": "rdioh",
          "signature": "Rdio (Either String [Playlist])",
          "source": "src/Rdioh.html#getTopChartPlaylists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartPlaylists",
          "normalized": "Rdio(Either String[Playlist])",
          "package": "rdioh",
          "partial": "Top Chart Playlists",
          "signature": "Rdio(Either String[Playlist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartPlaylists'",
          "package": "rdioh",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e [PlaylistExtra] -\u003e Rdio (Either String [Playlist])",
          "source": "src/Rdioh.html#getTopChartPlaylists%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartPlaylists'",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003e[PlaylistExtra]-\u003eRdio(Either String[Playlist])",
          "package": "rdioh",
          "partial": "Top Chart Playlists'",
          "signature": "Maybe Int-\u003eMaybe Int-\u003e[PlaylistExtra]-\u003eRdio(Either String[Playlist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartPlaylists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartTracks",
          "package": "rdioh",
          "signature": "Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTopChartTracks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartTracks",
          "normalized": "Rdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Top Chart Tracks",
          "signature": "Rdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTopChartTracks'",
          "package": "rdioh",
          "signature": "Maybe Int -\u003e Maybe Int -\u003e [TrackExtra] -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTopChartTracks%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTopChartTracks'",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Top Chart Tracks'",
          "signature": "Maybe Int-\u003eMaybe Int-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTopChartTracks-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: an ISRC code, [extras] (optional)\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getTracksByISRC",
          "package": "rdioh",
          "signature": "String -\u003e [TrackExtra] -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksByISRC",
          "type": "function"
        },
        "index": {
          "description": "Takes an ISRC code extras optional",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksByISRC",
          "normalized": "String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks By ISRC",
          "signature": "String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksByISRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: an album key. Requires authentication OR use \u003ccode\u003egetTracksForAlbumInCollection'\u003c/code\u003e and pass in a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getTracksForAlbumInCollection",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksForAlbumInCollection",
          "type": "function"
        },
        "index": {
          "description": "Takes an album key Requires authentication OR use getTracksForAlbumInCollection and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksForAlbumInCollection",
          "normalized": "String-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks For Album In Collection",
          "signature": "String-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksForAlbumInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTracksForAlbumInCollection'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe String -\u003e [TrackExtra] -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksForAlbumInCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksForAlbumInCollection'",
          "normalized": "String-\u003eMaybe String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks For Album In Collection'",
          "signature": "String-\u003eMaybe String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksForAlbumInCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: an artist key\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getTracksForArtist",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksForArtist",
          "type": "function"
        },
        "index": {
          "description": "Takes an artist key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksForArtist",
          "normalized": "String-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks For Artist",
          "signature": "String-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksForArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTracksForArtist'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe Bool -\u003e [TrackExtra] -\u003e Maybe Int -\u003e Maybe Int -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksForArtist%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksForArtist'",
          "normalized": "String-\u003eMaybe Bool-\u003e[TrackExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks For Artist'",
          "signature": "String-\u003eMaybe Bool-\u003e[TrackExtra]-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksForArtist-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: an artist key. Requires authentication OR use \u003ccode\u003egetTracksForArtistInCollection'\u003c/code\u003e and pass in a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getTracksForArtistInCollection",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksForArtistInCollection",
          "type": "function"
        },
        "index": {
          "description": "Takes an artist key Requires authentication OR use getTracksForArtistInCollection and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksForArtistInCollection",
          "normalized": "String-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks For Artist In Collection",
          "signature": "String-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksForArtistInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTracksForArtistInCollection'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe String -\u003e [TrackExtra] -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksForArtistInCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksForArtistInCollection'",
          "normalized": "String-\u003eMaybe String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks For Artist In Collection'",
          "signature": "String-\u003eMaybe String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksForArtistInCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication OR use \u003ccode\u003egetTracksInCollection'\u003c/code\u003e and pass in\n a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getTracksInCollection",
          "package": "rdioh",
          "signature": "Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksInCollection",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication OR use getTracksInCollection and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksInCollection",
          "normalized": "Rdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks In Collection",
          "signature": "Rdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksInCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getTracksInCollection'",
          "package": "rdioh",
          "signature": "Maybe String -\u003e Maybe Int -\u003e Maybe Int -\u003e Maybe String -\u003e Maybe String -\u003e [TrackExtra] -\u003e Rdio (Either String [Track])",
          "source": "src/Rdioh.html#getTracksInCollection%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getTracksInCollection'",
          "normalized": "Maybe String-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe String-\u003eMaybe String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "package": "rdioh",
          "partial": "Tracks In Collection'",
          "signature": "Maybe String-\u003eMaybe Int-\u003eMaybe Int-\u003eMaybe String-\u003eMaybe String-\u003e[TrackExtra]-\u003eRdio(Either String[Track])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getTracksInCollection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires authentication OR use \u003ccode\u003egetUserPlaylists'\u003c/code\u003e and pass in a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "getUserPlaylists",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [Playlist])",
          "source": "src/Rdioh.html#getUserPlaylists",
          "type": "function"
        },
        "index": {
          "description": "Requires authentication OR use getUserPlaylists and pass in user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getUserPlaylists",
          "normalized": "String-\u003eRdio(Either String[Playlist])",
          "package": "rdioh",
          "partial": "User Playlists",
          "signature": "String-\u003eRdio(Either String[Playlist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getUserPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "getUserPlaylists'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe PlaylistType -\u003e Maybe String -\u003e Maybe Int -\u003e Maybe Int -\u003e [PlaylistExtra] -\u003e Rdio (Either String [Playlist])",
          "source": "src/Rdioh.html#getUserPlaylists%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "getUserPlaylists'",
          "normalized": "String-\u003eMaybe PlaylistType-\u003eMaybe String-\u003eMaybe Int-\u003eMaybe Int-\u003e[PlaylistExtra]-\u003eRdio(Either String[Playlist])",
          "package": "rdioh",
          "partial": "User Playlists'",
          "signature": "String-\u003eMaybe PlaylistType-\u003eMaybe String-\u003eMaybe Int-\u003eMaybe Int-\u003e[PlaylistExtra]-\u003eRdio(Either String[Playlist])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:getUserPlaylists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused internally\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "mkExtras",
          "package": "rdioh",
          "signature": "[e] -\u003e (String, String)",
          "source": "src/Rdioh.html#mkExtras",
          "type": "function"
        },
        "index": {
          "description": "used internally",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "mkExtras",
          "normalized": "[a]-\u003e(String,String)",
          "package": "rdioh",
          "partial": "Extras",
          "signature": "[e]-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:mkExtras"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a user key. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "removeFriend",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#removeFriend",
          "type": "function"
        },
        "index": {
          "description": "Takes user key Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "removeFriend",
          "normalized": "String-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "Friend",
          "signature": "String-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:removeFriend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a list of track or playlist keys. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "removeFromCollection",
          "package": "rdioh",
          "signature": "[String] -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#removeFromCollection",
          "type": "function"
        },
        "index": {
          "description": "Takes list of track or playlist keys Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "removeFromCollection",
          "normalized": "[String]-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "From Collection",
          "signature": "[String]-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:removeFromCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes:\n - a playlist key\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the index of the first item to remove\n\u003c/li\u003e\u003cli\u003e number of tracks to remove\n\u003c/li\u003e\u003cli\u003e the keys of the tracks to remove (redundancy to prevent accidental\n deletion)\n\u003c/li\u003e\u003cli\u003e [extras] (optional)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRequires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "removeFromPlaylist",
          "package": "rdioh",
          "signature": "String -\u003e Int -\u003e Int -\u003e Int -\u003e [PlaylistExtra] -\u003e Rdio (Either String Playlist)",
          "source": "src/Rdioh.html#removeFromPlaylist",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key the index of the first item to remove number of tracks to remove the keys of the tracks to remove redundancy to prevent accidental deletion extras optional Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "removeFromPlaylist",
          "normalized": "String-\u003eInt-\u003eInt-\u003eInt-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "package": "rdioh",
          "partial": "From Playlist",
          "signature": "String-\u003eInt-\u003eInt-\u003eInt-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:removeFromPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a key, a secret, a function to run.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "runRdio",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e Rdio a -\u003e IO a",
          "source": "src/Rdioh.html#runRdio",
          "type": "function"
        },
        "index": {
          "description": "Takes key secret function to run",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "runRdio",
          "normalized": "String-\u003eString-\u003eRdio a-\u003eIO a",
          "package": "rdioh",
          "partial": "Rdio",
          "signature": "String-\u003eString-\u003eRdio a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:runRdio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003erunRdio\u003c/code\u003e, but with 3-legged authentication i.e. the user will\n | have to authorize your app.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "runRdioWithAuth",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e Rdio a -\u003e IO a",
          "source": "src/Rdioh.html#runRdioWithAuth",
          "type": "function"
        },
        "index": {
          "description": "Same as runRdio but with legged authentication i.e the user will have to authorize your app",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "runRdioWithAuth",
          "normalized": "String-\u003eString-\u003eRdio a-\u003eIO a",
          "package": "rdioh",
          "partial": "Rdio With Auth",
          "signature": "String-\u003eString-\u003eRdio a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:runRdioWithAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a arbitrary request to rdio's api. Return type should\n | be an instance of \u003ccode\u003eFromJSON\u003c/code\u003e, and you need to specify the type. Example:\n\u003c/p\u003e\u003cpre\u003e result \u003c- (runRequest [(\"method\", \"getTopCharts\"), (\"type\", \"Artist\")] :: Rdio (Either String [Artist]))\n\u003c/pre\u003e",
          "module": "Rdioh",
          "name": "runRequest",
          "package": "rdioh",
          "signature": "[(String, String)] -\u003e Rdio (Either String v)",
          "source": "src/Rdioh.html#runRequest",
          "type": "function"
        },
        "index": {
          "description": "Send arbitrary request to rdio api Return type should be an instance of FromJSON and you need to specify the type Example result runRequest method getTopCharts type Artist Rdio Either String Artist",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "runRequest",
          "normalized": "[(String,String)]-\u003eRdio(Either String a)",
          "package": "rdioh",
          "partial": "Request",
          "signature": "[(String,String)]-\u003eRdio(Either String v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:runRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a query, a type (\"Artist\", \"Album\", \"Track\", \"Playlist\", or\n \"User\")\n This method can return any of those types, so you need to specify what\n you want returned. Example:\n\u003c/p\u003e\u003cpre\u003e search \"Radiohead\" \"Artist\" :: Rdio (Either String [Artist])\n\u003c/pre\u003e",
          "module": "Rdioh",
          "name": "search",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e Rdio (Either String [a])",
          "source": "src/Rdioh.html#search",
          "type": "function"
        },
        "index": {
          "description": "Takes query type Artist Album Track Playlist or User This method can return any of those types so you need to specify what you want returned Example search Radiohead Artist Rdio Either String Artist",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "search",
          "normalized": "String-\u003eString-\u003eRdio(Either String[a])",
          "package": "rdioh",
          "signature": "String-\u003eString-\u003eRdio(Either String[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "search'",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e Maybe Bool -\u003e Maybe Int -\u003e Maybe Int -\u003e Rdio (Either String [a])",
          "source": "src/Rdioh.html#search%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "search'",
          "normalized": "String-\u003eString-\u003eMaybe Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[a])",
          "package": "rdioh",
          "signature": "String-\u003eString-\u003eMaybe Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eRdio(Either String[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:search-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a list of track or playlist keys. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "setAvailableOffline",
          "package": "rdioh",
          "signature": "[String] -\u003e Bool -\u003e Rdio (Either String Object)",
          "source": "src/Rdioh.html#setAvailableOffline",
          "type": "function"
        },
        "index": {
          "description": "Takes list of track or playlist keys Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "setAvailableOffline",
          "normalized": "[String]-\u003eBool-\u003eRdio(Either String Object)",
          "package": "rdioh",
          "partial": "Available Offline",
          "signature": "[String]-\u003eBool-\u003eRdio(Either String Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:setAvailableOffline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a playlist key, a boolean (true == collaborating, false == not\n collaborating). Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "setPlaylistCollaborating",
          "package": "rdioh",
          "signature": "String -\u003e Bool -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#setPlaylistCollaborating",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key boolean true collaborating false not collaborating Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "setPlaylistCollaborating",
          "normalized": "String-\u003eBool-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "Playlist Collaborating",
          "signature": "String-\u003eBool-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:setPlaylistCollaborating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a playlist key, a collaboration mode. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "setPlaylistCollaborationMode",
          "package": "rdioh",
          "signature": "String -\u003e CollaborationMode -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#setPlaylistCollaborationMode",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key collaboration mode Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "setPlaylistCollaborationMode",
          "normalized": "String-\u003eCollaborationMode-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "Playlist Collaboration Mode",
          "signature": "String-\u003eCollaborationMode-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:setPlaylistCollaborationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a playlist key, a name, a description. Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "setPlaylistFields",
          "package": "rdioh",
          "signature": "String -\u003e String -\u003e String -\u003e Rdio (Either String Bool)",
          "source": "src/Rdioh.html#setPlaylistFields",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key name description Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "setPlaylistFields",
          "normalized": "String-\u003eString-\u003eString-\u003eRdio(Either String Bool)",
          "package": "rdioh",
          "partial": "Playlist Fields",
          "signature": "String-\u003eString-\u003eString-\u003eRdio(Either String Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:setPlaylistFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a playlist key, a list of track keys, [extras] (optional).\n Requires authentication.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "setPlaylistOrder",
          "package": "rdioh",
          "signature": "String -\u003e [String] -\u003e [PlaylistExtra] -\u003e Rdio (Either String Playlist)",
          "source": "src/Rdioh.html#setPlaylistOrder",
          "type": "function"
        },
        "index": {
          "description": "Takes playlist key list of track keys extras optional Requires authentication",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "setPlaylistOrder",
          "normalized": "String-\u003e[String]-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "package": "rdioh",
          "partial": "Playlist Order",
          "signature": "String-\u003e[String]-\u003e[PlaylistExtra]-\u003eRdio(Either String Playlist)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:setPlaylistOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "userFollowers",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [User])",
          "source": "src/Rdioh.html#userFollowers",
          "type": "function"
        },
        "index": {
          "description": "Takes user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "userFollowers",
          "normalized": "String-\u003eRdio(Either String[User])",
          "package": "rdioh",
          "partial": "Followers",
          "signature": "String-\u003eRdio(Either String[User])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:userFollowers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "userFollowers'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe Int -\u003e Maybe Int -\u003e [UserExtra] -\u003e Maybe String -\u003e Rdio (Either String [User])",
          "source": "src/Rdioh.html#userFollowers%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "userFollowers'",
          "normalized": "String-\u003eMaybe Int-\u003eMaybe Int-\u003e[UserExtra]-\u003eMaybe String-\u003eRdio(Either String[User])",
          "package": "rdioh",
          "partial": "Followers'",
          "signature": "String-\u003eMaybe Int-\u003eMaybe Int-\u003e[UserExtra]-\u003eMaybe String-\u003eRdio(Either String[User])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:userFollowers-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes: a user key.\n\u003c/p\u003e",
          "module": "Rdioh",
          "name": "userFollowing",
          "package": "rdioh",
          "signature": "String -\u003e Rdio (Either String [User])",
          "source": "src/Rdioh.html#userFollowing",
          "type": "function"
        },
        "index": {
          "description": "Takes user key",
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "userFollowing",
          "normalized": "String-\u003eRdio(Either String[User])",
          "package": "rdioh",
          "partial": "Following",
          "signature": "String-\u003eRdio(Either String[User])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:userFollowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rdioh",
          "name": "userFollowing'",
          "package": "rdioh",
          "signature": "String -\u003e Maybe Int -\u003e Maybe Int -\u003e [UserExtra] -\u003e Maybe String -\u003e Rdio (Either String [User])",
          "source": "src/Rdioh.html#userFollowing%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rdioh",
          "module": "Rdioh",
          "name": "userFollowing'",
          "normalized": "String-\u003eMaybe Int-\u003eMaybe Int-\u003e[UserExtra]-\u003eMaybe String-\u003eRdio(Either String[User])",
          "package": "rdioh",
          "partial": "Following'",
          "signature": "String-\u003eMaybe Int-\u003eMaybe Int-\u003e[UserExtra]-\u003eMaybe String-\u003eRdio(Either String[User])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdioh/docs/Rdioh.html#v:userFollowing-39-"
      }
    }
  ]
]