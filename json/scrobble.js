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
        "word": "scrobble"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA client for scrobbling, based upon the Audioscrobbler Realtime\n Submission protocol v1.2\n \u003ca\u003ehttp://www.audioscrobbler.net/development/protocol/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n import Scrobble.Client\n import Data.Time\n\nexample = do\n   client \u003c- newClient Details\n     { detPassword = \"YOURPASS\"\n     , detUsername = \"YOURUSER\"\n     , detClient   = \"qlb\"\n     , detVersion  = \"0.9.2\"\n     , detServer   = defaultServer\n     }\n   nowPlaying client NowPlaying\n     { npArtist      = \"Kasabian\"\n     , npTrack       = \"Ladies and Gentlemen\"\n     , npAlbum       = Just \"West Ryder Pauper Lunatic Asylum\"\n     , npLength      = Just 288\n     , npPosition    = Nothing\n     , npMusicBrainz = Nothing\n     }\n   timestamp \u003c- getCurrentTime\n   submitTracks client\n                [Submission { subArtist      = \"Kasabian\"\n                            , subTrack       = \"Ladies and Gentlemen\"\n                            , subTimestamp   = timestamp\n                            , subSource      = UserChosen\n                            , subRating      = Nothing\n                            , subLength      = Just 288\n                            , subAlbum       = Just \"West Ryder Pauper Lunatic Asylum\"\n                            , subPosition    = Nothing\n                            , subMusicBrainz = Nothing\n                            }]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Scrobble.Client",
          "name": "Client",
          "package": "scrobble",
          "source": "src/Scrobble-Client.html",
          "type": "module"
        },
        "index": {
          "description": "client for scrobbling based upon the Audioscrobbler Realtime Submission protocol v1.2 http www.audioscrobbler.net development protocol Example import Scrobble.Client import Data.Time example do client newClient Details detPassword YOURPASS detUsername YOURUSER detClient qlb detVersion detServer defaultServer nowPlaying client NowPlaying npArtist Kasabian npTrack Ladies and Gentlemen npAlbum Just West Ryder Pauper Lunatic Asylum npLength Just npPosition Nothing npMusicBrainz Nothing timestamp getCurrentTime submitTracks client Submission subArtist Kasabian subTrack Ladies and Gentlemen subTimestamp timestamp subSource UserChosen subRating Nothing subLength Just subAlbum Just West Ryder Pauper Lunatic Asylum subPosition Nothing subMusicBrainz Nothing",
          "hierarchy": "Scrobble Client",
          "module": "Scrobble.Client",
          "name": "Client",
          "package": "scrobble",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Audioscrobbler server: http:\u003cem/\u003epost.audioscrobbler.com/\n\u003c/p\u003e",
          "module": "Scrobble.Client",
          "name": "defaultServer",
          "package": "scrobble",
          "signature": "URI",
          "source": "src/Scrobble-Client.html#defaultServer",
          "type": "function"
        },
        "index": {
          "description": "Default Audioscrobbler server http post.audioscrobbler.com",
          "hierarchy": "Scrobble Client",
          "module": "Scrobble.Client",
          "name": "defaultServer",
          "package": "scrobble",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:defaultServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a client session. Throws \u003ca\u003eScrobblerError\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Scrobble.Client",
          "name": "newClient",
          "package": "scrobble",
          "signature": "Details -\u003e IO Client",
          "source": "src/Scrobble-Client.html#newClient",
          "type": "function"
        },
        "index": {
          "description": "Create client session Throws ScrobblerError",
          "hierarchy": "Scrobble Client",
          "module": "Scrobble.Client",
          "name": "newClient",
          "normalized": "Details-\u003eIO Client",
          "package": "scrobble",
          "partial": "Client",
          "signature": "Details-\u003eIO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:newClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a now playing message.  Throws \u003ca\u003eScrobblerError\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Scrobble.Client",
          "name": "nowPlaying",
          "package": "scrobble",
          "signature": "Client -\u003e NowPlaying -\u003e IO ()",
          "source": "src/Scrobble-Client.html#nowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Send now playing message Throws ScrobblerError",
          "hierarchy": "Scrobble Client",
          "module": "Scrobble.Client",
          "name": "nowPlaying",
          "normalized": "Client-\u003eNowPlaying-\u003eIO()",
          "package": "scrobble",
          "partial": "Playing",
          "signature": "Client-\u003eNowPlaying-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:nowPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmit track(s).  Throws \u003ca\u003eScrobblerError\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Scrobble.Client",
          "name": "submitTracks",
          "package": "scrobble",
          "signature": "Client -\u003e [Submission] -\u003e IO ()",
          "source": "src/Scrobble-Client.html#submitTracks",
          "type": "function"
        },
        "index": {
          "description": "Submit track Throws ScrobblerError",
          "hierarchy": "Scrobble Client",
          "module": "Scrobble.Client",
          "name": "submitTracks",
          "normalized": "Client-\u003e[Submission]-\u003eIO()",
          "package": "scrobble",
          "partial": "Tracks",
          "signature": "Client-\u003e[Submission]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:submitTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA server for scrobbling, based upon the Audioscrobbler Realtime\n Submission protocol v1.2\n \u003ca\u003ehttp://www.audioscrobbler.net/development/protocol/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Scrobble.Server",
          "name": "Server",
          "package": "scrobble",
          "source": "src/Scrobble-Server.html",
          "type": "module"
        },
        "index": {
          "description": "server for scrobbling based upon the Audioscrobbler Realtime Submission protocol v1.2 http www.audioscrobbler.net development protocol",
          "hierarchy": "Scrobble Server",
          "module": "Scrobble.Server",
          "name": "Server",
          "package": "scrobble",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a scrobbling server.\n\u003c/p\u003e",
          "module": "Scrobble.Server",
          "name": "startScrobbleServer",
          "package": "scrobble",
          "signature": "Config -\u003e Handlers -\u003e IO ()",
          "source": "src/Scrobble-Server.html#startScrobbleServer",
          "type": "function"
        },
        "index": {
          "description": "Start scrobbling server",
          "hierarchy": "Scrobble Server",
          "module": "Scrobble.Server",
          "name": "startScrobbleServer",
          "normalized": "Config-\u003eHandlers-\u003eIO()",
          "package": "scrobble",
          "partial": "Scrobble Server",
          "signature": "Config-\u003eHandlers-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Server.html#v:startScrobbleServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScrobbling data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Scrobble.Types",
          "name": "Types",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Scrobbling data types",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Types",
          "package": "scrobble",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scrobbling client.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Client",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Client",
          "type": "data"
        },
        "index": {
          "description": "scrobbling client",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Client",
          "package": "scrobble",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer configuration.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Config",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Server configuration",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Config",
          "package": "scrobble",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetails for creating a scrobbling client.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Details",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Details",
          "type": "data"
        },
        "index": {
          "description": "Details for creating scrobbling client",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Details",
          "package": "scrobble",
          "partial": "Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Details"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent handlers.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Handlers",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Handlers",
          "type": "data"
        },
        "index": {
          "description": "Event handlers",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Handlers",
          "package": "scrobble",
          "partial": "Handlers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Handlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA now playing track.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "NowPlaying",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "data"
        },
        "index": {
          "description": "now playing track",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "NowPlaying",
          "package": "scrobble",
          "partial": "Now Playing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:NowPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rating of a track.\n\u003c/p\u003e\u003cp\u003eNote: Currently, a web-service must also be called to set love/ban\n status. We anticipate that this will be phased out soon, and the\n submission service will handle the whole process.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Rating",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Rating",
          "type": "data"
        },
        "index": {
          "description": "rating of track Note Currently web-service must also be called to set love ban status We anticipate that this will be phased out soon and the submission service will handle the whole process",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Rating",
          "package": "scrobble",
          "partial": "Rating",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Rating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer response.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Response",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "Server response",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Response",
          "package": "scrobble",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScrobble exception.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "ScrobblerError",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "data"
        },
        "index": {
          "description": "Scrobble exception",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerError",
          "package": "scrobble",
          "partial": "Scrobbler Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:ScrobblerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scrobbling session.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Session",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Session",
          "type": "data"
        },
        "index": {
          "description": "scrobbling session",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Session",
          "package": "scrobble",
          "partial": "Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source of the track. Required, must be one of the following\n codes:\n\u003c/p\u003e\u003cp\u003ePlease note, for the time being, sources other than P and L are not\n supported.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Source",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Source",
          "type": "data"
        },
        "index": {
          "description": "The source of the track Required must be one of the following codes Please note for the time being sources other than and are not supported",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Source",
          "package": "scrobble",
          "partial": "Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA track submission.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Submission",
          "package": "scrobble",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "data"
        },
        "index": {
          "description": "track submission",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Submission",
          "package": "scrobble",
          "partial": "Submission",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Submission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "BADAUTH",
          "package": "scrobble",
          "signature": "BADAUTH",
          "source": "src/Scrobble-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "BADAUTH",
          "package": "scrobble",
          "partial": "BADAUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:BADAUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "BADSESSION",
          "package": "scrobble",
          "signature": "BADSESSION",
          "source": "src/Scrobble-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "BADSESSION",
          "package": "scrobble",
          "partial": "BADSESSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:BADSESSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "BANNED",
          "package": "scrobble",
          "signature": "BANNED",
          "source": "src/Scrobble-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "BANNED",
          "package": "scrobble",
          "partial": "BANNED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:BANNED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBan (only if source=L). This implies a skip, and the\n client should skip to the next track when a ban happens.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Ban",
          "package": "scrobble",
          "signature": "Ban",
          "source": "src/Scrobble-Types.html#Rating",
          "type": "function"
        },
        "index": {
          "description": "Ban only if source This implies skip and the client should skip to the next track when ban happens",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Ban",
          "package": "scrobble",
          "partial": "Ban",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Ban"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "Client",
          "package": "scrobble",
          "signature": "Client",
          "source": "src/Scrobble-Types.html#Client",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Client",
          "package": "scrobble",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "Config",
          "package": "scrobble",
          "signature": "Config",
          "source": "src/Scrobble-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Config",
          "package": "scrobble",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "Details",
          "package": "scrobble",
          "signature": "Details",
          "source": "src/Scrobble-Types.html#Details",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Details",
          "package": "scrobble",
          "partial": "Details",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Details"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "FAILED",
          "package": "scrobble",
          "signature": "FAILED String",
          "source": "src/Scrobble-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "FAILED",
          "package": "scrobble",
          "partial": "FAILED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:FAILED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "Handlers",
          "package": "scrobble",
          "signature": "Handlers",
          "source": "src/Scrobble-Types.html#Handlers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Handlers",
          "package": "scrobble",
          "partial": "Handlers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Handlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast.fm (any mode). In this case, the 5-digit Last.fm\n recommendation key must be appended to this source ID to\n prove the validity of the submission (for example,\n \u003ca\u003eo[0]=L1b48a\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "LastFm",
          "package": "scrobble",
          "signature": "LastFm",
          "source": "src/Scrobble-Types.html#Source",
          "type": "function"
        },
        "index": {
          "description": "Last.fm any mode In this case the digit Last.fm recommendation key must be appended to this source ID to prove the validity of the submission for example L1b48a",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "LastFm",
          "package": "scrobble",
          "partial": "Last Fm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:LastFm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLove (on any mode if the user has manually loved the\n track). This implies a listen.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Love",
          "package": "scrobble",
          "signature": "Love",
          "source": "src/Scrobble-Types.html#Rating",
          "type": "function"
        },
        "index": {
          "description": "Love on any mode if the user has manually loved the track This implies listen",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Love",
          "package": "scrobble",
          "partial": "Love",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Love"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-personalised broadcast\n (e.g. Shoutcast, BBC Radio 1)\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "NonPersonlizedBroadcast",
          "package": "scrobble",
          "signature": "NonPersonlizedBroadcast",
          "source": "src/Scrobble-Types.html#Source",
          "type": "function"
        },
        "index": {
          "description": "Non-personalised broadcast e.g Shoutcast BBC Radio",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "NonPersonlizedBroadcast",
          "package": "scrobble",
          "partial": "Non Personlized Broadcast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:NonPersonlizedBroadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "NowPlaying",
          "package": "scrobble",
          "signature": "NowPlaying",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "NowPlaying",
          "package": "scrobble",
          "partial": "Now Playing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:NowPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "OK",
          "package": "scrobble",
          "signature": "OK",
          "source": "src/Scrobble-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "OK",
          "package": "scrobble",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersonalised recommendation except Last.fm\n (e.g. Pandora, Launchcast)\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Personalized",
          "package": "scrobble",
          "signature": "Personalized",
          "source": "src/Scrobble-Types.html#Source",
          "type": "function"
        },
        "index": {
          "description": "Personalised recommendation except Last.fm e.g Pandora Launchcast",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Personalized",
          "package": "scrobble",
          "partial": "Personalized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Personalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerBadAuth",
          "package": "scrobble",
          "signature": "ScrobblerBadAuth",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerBadAuth",
          "package": "scrobble",
          "partial": "Scrobbler Bad Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerBadAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerBadTime",
          "package": "scrobble",
          "signature": "ScrobblerBadTime",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerBadTime",
          "package": "scrobble",
          "partial": "Scrobbler Bad Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerBadTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerBanned",
          "package": "scrobble",
          "signature": "ScrobblerBanned",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerBanned",
          "package": "scrobble",
          "partial": "Scrobbler Banned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerBanned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerFailed",
          "package": "scrobble",
          "signature": "ScrobblerFailed String",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerFailed",
          "package": "scrobble",
          "partial": "Scrobbler Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerHardFail",
          "package": "scrobble",
          "signature": "ScrobblerHardFail",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerHardFail",
          "package": "scrobble",
          "partial": "Scrobbler Hard Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerHardFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerNowPlayingFail",
          "package": "scrobble",
          "signature": "ScrobblerNowPlayingFail String",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerNowPlayingFail",
          "package": "scrobble",
          "partial": "Scrobbler Now Playing Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerNowPlayingFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "ScrobblerSubmitFail",
          "package": "scrobble",
          "signature": "ScrobblerSubmitFail String",
          "source": "src/Scrobble-Types.html#ScrobblerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "ScrobblerSubmitFail",
          "package": "scrobble",
          "partial": "Scrobbler Submit Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerSubmitFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "Session",
          "package": "scrobble",
          "signature": "Session",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Session",
          "package": "scrobble",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip (only if source=L).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Skip",
          "package": "scrobble",
          "signature": "Skip",
          "source": "src/Scrobble-Types.html#Rating",
          "type": "function"
        },
        "index": {
          "description": "Skip only if source",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Skip",
          "package": "scrobble",
          "partial": "Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "Submission",
          "package": "scrobble",
          "signature": "Submission",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Submission",
          "package": "scrobble",
          "partial": "Submission",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Submission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource unknown.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "Unknown",
          "package": "scrobble",
          "signature": "Unknown",
          "source": "src/Scrobble-Types.html#Source",
          "type": "function"
        },
        "index": {
          "description": "Source unknown",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "Unknown",
          "package": "scrobble",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChosen by the user\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "UserChosen",
          "package": "scrobble",
          "signature": "UserChosen",
          "source": "src/Scrobble-Types.html#Source",
          "type": "function"
        },
        "index": {
          "description": "Chosen by the user",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "UserChosen",
          "package": "scrobble",
          "partial": "User Chosen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:UserChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of seconds of inactivity before a session expires.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "cfgExpire",
          "package": "scrobble",
          "signature": "NominalDiffTime",
          "source": "src/Scrobble-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Number of seconds of inactivity before session expires",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "cfgExpire",
          "package": "scrobble",
          "partial": "Expire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cfgExpire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name used for server (probably just localhost).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "cfgHost",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Host name used for server probably just localhost",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "cfgHost",
          "package": "scrobble",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cfgHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort to listen on.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "cfgPort",
          "package": "scrobble",
          "signature": "PortNumber",
          "source": "src/Scrobble-Types.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Port to listen on",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "cfgPort",
          "package": "scrobble",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cfgPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNow playing URL to submit to.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "cliNowPlaying",
          "package": "scrobble",
          "signature": "URI",
          "source": "src/Scrobble-Types.html#Client",
          "type": "function"
        },
        "index": {
          "description": "Now playing URL to submit to",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "cliNowPlaying",
          "package": "scrobble",
          "partial": "Now Playing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cliNowPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to submit listened tracks to.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "cliSubmit",
          "package": "scrobble",
          "signature": "URI",
          "source": "src/Scrobble-Types.html#Client",
          "type": "function"
        },
        "index": {
          "description": "URL to submit listened tracks to",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "cliSubmit",
          "package": "scrobble",
          "partial": "Submit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cliSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession token.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "cliToken",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Client",
          "type": "function"
        },
        "index": {
          "description": "Session token",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "cliToken",
          "package": "scrobble",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cliToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE.g. &#8220;qlb&#8221;.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "detClient",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Details",
          "type": "function"
        },
        "index": {
          "description": "E.g qlb",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "detClient",
          "package": "scrobble",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "detPassword",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Details",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "detPassword",
          "package": "scrobble",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee defaultServer in \u003ca\u003eScrobble.Client\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "detServer",
          "package": "scrobble",
          "signature": "URI",
          "source": "src/Scrobble-Types.html#Details",
          "type": "function"
        },
        "index": {
          "description": "See defaultServer in Scrobble.Client",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "detServer",
          "package": "scrobble",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scrobble.Types",
          "name": "detUsername",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Details",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "detUsername",
          "package": "scrobble",
          "partial": "Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE.g. &#8220;0.9.2&#8221;.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "detVersion",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Details",
          "type": "function"
        },
        "index": {
          "description": "E.g",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "detVersion",
          "package": "scrobble",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession expiry.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "handleExpire",
          "package": "scrobble",
          "signature": "Session -\u003e IO ()",
          "source": "src/Scrobble-Types.html#Handlers",
          "type": "function"
        },
        "index": {
          "description": "Session expiry",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "handleExpire",
          "normalized": "Session-\u003eIO()",
          "package": "scrobble",
          "partial": "Expire",
          "signature": "Session-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleExpire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial connection hand-shake.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "handleHandshake",
          "package": "scrobble",
          "signature": "Session -\u003e IO ()",
          "source": "src/Scrobble-Types.html#Handlers",
          "type": "function"
        },
        "index": {
          "description": "Initial connection hand-shake",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "handleHandshake",
          "normalized": "Session-\u003eIO()",
          "package": "scrobble",
          "partial": "Handshake",
          "signature": "Session-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleHandshake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNow-playing notification.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "handleNowPlaying",
          "package": "scrobble",
          "signature": "Session -\u003e NowPlaying -\u003e IO ()",
          "source": "src/Scrobble-Types.html#Handlers",
          "type": "function"
        },
        "index": {
          "description": "Now-playing notification",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "handleNowPlaying",
          "normalized": "Session-\u003eNowPlaying-\u003eIO()",
          "package": "scrobble",
          "partial": "Now Playing",
          "signature": "Session-\u003eNowPlaying-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleNowPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlayed tracks submission.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "handleSubmissions",
          "package": "scrobble",
          "signature": "Session -\u003e [Submission] -\u003e IO Bool",
          "source": "src/Scrobble-Types.html#Handlers",
          "type": "function"
        },
        "index": {
          "description": "Played tracks submission",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "handleSubmissions",
          "normalized": "Session-\u003e[Submission]-\u003eIO Bool",
          "package": "scrobble",
          "partial": "Submissions",
          "signature": "Session-\u003e[Submission]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleSubmissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlbum name (if any).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "npAlbum",
          "package": "scrobble",
          "signature": "Maybe String",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Album name if any",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "npAlbum",
          "package": "scrobble",
          "partial": "Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArtist name.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "npArtist",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Artist name",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "npArtist",
          "package": "scrobble",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack length in seconds (if known).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "npLength",
          "package": "scrobble",
          "signature": "Maybe Integer",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Track length in seconds if known",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "npLength",
          "package": "scrobble",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMusicBrainz track id (if known).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "npMusicBrainz",
          "package": "scrobble",
          "signature": "Maybe String",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "description": "MusicBrainz track id if known",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "npMusicBrainz",
          "package": "scrobble",
          "partial": "Music Brainz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npMusicBrainz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack position (if known).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "npPosition",
          "package": "scrobble",
          "signature": "Maybe Integer",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Track position if known",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "npPosition",
          "package": "scrobble",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack title.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "npTrack",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#NowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Track title",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "npTrack",
          "package": "scrobble",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient (music player's) id.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesClientId",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Client music player id",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesClientId",
          "package": "scrobble",
          "partial": "Client Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesClientId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient version.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesClientVer",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Client version",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesClientVer",
          "package": "scrobble",
          "partial": "Client Ver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesClientVer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the session require handshake?\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesHandshake",
          "package": "scrobble",
          "signature": "Bool",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Does the session require handshake",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesHandshake",
          "package": "scrobble",
          "partial": "Handshake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesHandshake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimestamp of connection.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesTimestamp",
          "package": "scrobble",
          "signature": "UTCTime",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Timestamp of connection",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesTimestamp",
          "package": "scrobble",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession token.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesToken",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Session token",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesToken",
          "package": "scrobble",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsername.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesUser",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Username",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesUser",
          "package": "scrobble",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of the protocol.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "sesVersion",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Session",
          "type": "function"
        },
        "index": {
          "description": "Version of the protocol",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "sesVersion",
          "package": "scrobble",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlbum (if any).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subAlbum",
          "package": "scrobble",
          "signature": "Maybe String",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Album if any",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subAlbum",
          "package": "scrobble",
          "partial": "Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArtist name.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subArtist",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Artist name",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subArtist",
          "package": "scrobble",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack length (if any).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subLength",
          "package": "scrobble",
          "signature": "Maybe Integer",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Track length if any",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subLength",
          "package": "scrobble",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMusicBrainz track id (if any).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subMusicBrainz",
          "package": "scrobble",
          "signature": "Maybe String",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "MusicBrainz track id if any",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subMusicBrainz",
          "package": "scrobble",
          "partial": "Music Brainz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subMusicBrainz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack position in album (if any).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subPosition",
          "package": "scrobble",
          "signature": "Maybe Integer",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Track position in album if any",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subPosition",
          "package": "scrobble",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRating (if any).\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subRating",
          "package": "scrobble",
          "signature": "Maybe Rating",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Rating if any",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subRating",
          "package": "scrobble",
          "partial": "Rating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subRating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource of track.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subSource",
          "package": "scrobble",
          "signature": "Source",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Source of track",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subSource",
          "package": "scrobble",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack timestamp.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subTimestamp",
          "package": "scrobble",
          "signature": "UTCTime",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Track timestamp",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subTimestamp",
          "package": "scrobble",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack title.\n\u003c/p\u003e",
          "module": "Scrobble.Types",
          "name": "subTrack",
          "package": "scrobble",
          "signature": "String",
          "source": "src/Scrobble-Types.html#Submission",
          "type": "function"
        },
        "index": {
          "description": "Track title",
          "hierarchy": "Scrobble Types",
          "module": "Scrobble.Types",
          "name": "subTrack",
          "package": "scrobble",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subTrack"
      }
    }
  ]
]