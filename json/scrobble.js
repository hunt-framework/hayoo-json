[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA client for scrobbling, based upon the Audioscrobbler Realtime\n Submission protocol v1.2\n \u003ca\u003ehttp://www.audioscrobbler.net/development/protocol/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n import Scrobble.Client\n import Data.Time\n\nexample = do\n   client \u003c- newClient Details\n     { detPassword = \"YOURPASS\"\n     , detUsername = \"YOURUSER\"\n     , detClient   = \"qlb\"\n     , detVersion  = \"0.9.2\"\n     , detServer   = defaultServer\n     }\n   nowPlaying client NowPlaying\n     { npArtist      = \"Kasabian\"\n     , npTrack       = \"Ladies and Gentlemen\"\n     , npAlbum       = Just \"West Ryder Pauper Lunatic Asylum\"\n     , npLength      = Just 288\n     , npPosition    = Nothing\n     , npMusicBrainz = Nothing\n     }\n   timestamp \u003c- getCurrentTime\n   submitTracks client\n                [Submission { subArtist      = \"Kasabian\"\n                            , subTrack       = \"Ladies and Gentlemen\"\n                            , subTimestamp   = timestamp\n                            , subSource      = UserChosen\n                            , subRating      = Nothing\n                            , subLength      = Just 288\n                            , subAlbum       = Just \"West Ryder Pauper Lunatic Asylum\"\n                            , subPosition    = Nothing\n                            , subMusicBrainz = Nothing\n                            }]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Scrobble.Client",
        "fct-package": "scrobble",
        "fct-signature": "module",
        "fct-source": "src/Scrobble-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "client for scrobbling based upon the Audioscrobbler Realtime Submission protocol v1.2 http www.audioscrobbler.net development protocol Example import Scrobble.Client import Data.Time example do client newClient Details detPassword YOURPASS detUsername YOURUSER detClient qlb detVersion detServer defaultServer nowPlaying client NowPlaying npArtist Kasabian npTrack Ladies and Gentlemen npAlbum Just West Ryder Pauper Lunatic Asylum npLength Just npPosition Nothing npMusicBrainz Nothing timestamp getCurrentTime submitTracks client Submission subArtist Kasabian subTrack Ladies and Gentlemen subTimestamp timestamp subSource UserChosen subRating Nothing subLength Just subAlbum Just West Ryder Pauper Lunatic Asylum subPosition Nothing subMusicBrainz Nothing",
        "hierarchy": "Scrobble Client",
        "module": "Scrobble.Client",
        "name": "Client",
        "normalized": "",
        "package": "scrobble",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:defaultServer",
      "description": {
        "fct-descr": "\u003cp\u003eDefault Audioscrobbler server: http:\u003cem/\u003epost.audioscrobbler.com/\n\u003c/p\u003e",
        "fct-module": "Scrobble.Client",
        "fct-package": "scrobble",
        "fct-signature": "URI",
        "fct-source": "src/Scrobble-Client.html#defaultServer",
        "fct-type": "function",
        "title": "defaultServer"
      },
      "index": {
        "description": "Default Audioscrobbler server http post.audioscrobbler.com",
        "hierarchy": "Scrobble Client",
        "module": "Scrobble.Client",
        "name": "defaultServer",
        "normalized": "",
        "package": "scrobble",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:newClient",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a client session. Throws \u003ca\u003eScrobblerError\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Client",
        "fct-package": "scrobble",
        "fct-signature": "Details -\u003e IO Client",
        "fct-source": "src/Scrobble-Client.html#newClient",
        "fct-type": "function",
        "title": "newClient"
      },
      "index": {
        "description": "Create client session Throws ScrobblerError",
        "hierarchy": "Scrobble Client",
        "module": "Scrobble.Client",
        "name": "newClient",
        "normalized": "Details-\u003eIO Client",
        "package": "scrobble",
        "partial": "Client",
        "signature": "Details-\u003eIO Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:nowPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eSend a now playing message.  Throws \u003ca\u003eScrobblerError\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Client",
        "fct-package": "scrobble",
        "fct-signature": "Client -\u003e NowPlaying -\u003e IO ()",
        "fct-source": "src/Scrobble-Client.html#nowPlaying",
        "fct-type": "function",
        "title": "nowPlaying"
      },
      "index": {
        "description": "Send now playing message Throws ScrobblerError",
        "hierarchy": "Scrobble Client",
        "module": "Scrobble.Client",
        "name": "nowPlaying",
        "normalized": "Client-\u003eNowPlaying-\u003eIO()",
        "package": "scrobble",
        "partial": "Playing",
        "signature": "Client-\u003eNowPlaying-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Client.html#v:submitTracks",
      "description": {
        "fct-descr": "\u003cp\u003eSubmit track(s).  Throws \u003ca\u003eScrobblerError\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Client",
        "fct-package": "scrobble",
        "fct-signature": "Client -\u003e [Submission] -\u003e IO ()",
        "fct-source": "src/Scrobble-Client.html#submitTracks",
        "fct-type": "function",
        "title": "submitTracks"
      },
      "index": {
        "description": "Submit track Throws ScrobblerError",
        "hierarchy": "Scrobble Client",
        "module": "Scrobble.Client",
        "name": "submitTracks",
        "normalized": "Client-\u003e[Submission]-\u003eIO()",
        "package": "scrobble",
        "partial": "Tracks",
        "signature": "Client-\u003e[Submission]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA server for scrobbling, based upon the Audioscrobbler Realtime\n Submission protocol v1.2\n \u003ca\u003ehttp://www.audioscrobbler.net/development/protocol/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Scrobble.Server",
        "fct-package": "scrobble",
        "fct-signature": "module",
        "fct-source": "src/Scrobble-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "server for scrobbling based upon the Audioscrobbler Realtime Submission protocol v1.2 http www.audioscrobbler.net development protocol",
        "hierarchy": "Scrobble Server",
        "module": "Scrobble.Server",
        "name": "Server",
        "normalized": "",
        "package": "scrobble",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Server.html#v:startScrobbleServer",
      "description": {
        "fct-descr": "\u003cp\u003eStart a scrobbling server.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Server",
        "fct-package": "scrobble",
        "fct-signature": "Config -\u003e Handlers -\u003e IO ()",
        "fct-source": "src/Scrobble-Server.html#startScrobbleServer",
        "fct-type": "function",
        "title": "startScrobbleServer"
      },
      "index": {
        "description": "Start scrobbling server",
        "hierarchy": "Scrobble Server",
        "module": "Scrobble.Server",
        "name": "startScrobbleServer",
        "normalized": "Config-\u003eHandlers-\u003eIO()",
        "package": "scrobble",
        "partial": "Scrobble Server",
        "signature": "Config-\u003eHandlers-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScrobbling data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "module",
        "fct-source": "src/Scrobble-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Scrobbling data types",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Types",
        "normalized": "",
        "package": "scrobble",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003eA scrobbling client.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "scrobbling client",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Client",
        "normalized": "",
        "package": "scrobble",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eServer configuration.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Server configuration",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Config",
        "normalized": "",
        "package": "scrobble",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Details",
      "description": {
        "fct-descr": "\u003cp\u003eDetails for creating a scrobbling client.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "data",
        "title": "Details"
      },
      "index": {
        "description": "Details for creating scrobbling client",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Details",
        "normalized": "",
        "package": "scrobble",
        "partial": "Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Handlers",
      "description": {
        "fct-descr": "\u003cp\u003eEvent handlers.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Handlers",
        "fct-type": "data",
        "title": "Handlers"
      },
      "index": {
        "description": "Event handlers",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Handlers",
        "normalized": "",
        "package": "scrobble",
        "partial": "Handlers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:NowPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eA now playing track.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "data",
        "title": "NowPlaying"
      },
      "index": {
        "description": "now playing track",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "NowPlaying",
        "normalized": "",
        "package": "scrobble",
        "partial": "Now Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Rating",
      "description": {
        "fct-descr": "\u003cp\u003eA rating of a track.\n\u003c/p\u003e\u003cp\u003eNote: Currently, a web-service must also be called to set love/ban\n status. We anticipate that this will be phased out soon, and the\n submission service will handle the whole process.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Rating",
        "fct-type": "data",
        "title": "Rating"
      },
      "index": {
        "description": "rating of track Note Currently web-service must also be called to set love ban status We anticipate that this will be phased out soon and the submission service will handle the whole process",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Rating",
        "normalized": "",
        "package": "scrobble",
        "partial": "Rating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eServer response.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "Server response",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Response",
        "normalized": "",
        "package": "scrobble",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:ScrobblerError",
      "description": {
        "fct-descr": "\u003cp\u003eScrobble exception.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "data",
        "title": "ScrobblerError"
      },
      "index": {
        "description": "Scrobble exception",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerError",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Session",
      "description": {
        "fct-descr": "\u003cp\u003eA scrobbling session.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "data",
        "title": "Session"
      },
      "index": {
        "description": "scrobbling session",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Session",
        "normalized": "",
        "package": "scrobble",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eThe source of the track. Required, must be one of the following\n codes:\n\u003c/p\u003e\u003cp\u003ePlease note, for the time being, sources other than P and L are not\n supported.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Source",
        "fct-type": "data",
        "title": "Source"
      },
      "index": {
        "description": "The source of the track Required must be one of the following codes Please note for the time being sources other than and are not supported",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Source",
        "normalized": "",
        "package": "scrobble",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#t:Submission",
      "description": {
        "fct-descr": "\u003cp\u003eA track submission.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "data",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "data",
        "title": "Submission"
      },
      "index": {
        "description": "track submission",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Submission",
        "normalized": "",
        "package": "scrobble",
        "partial": "Submission",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:BADAUTH",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "BADAUTH",
        "fct-source": "src/Scrobble-Types.html#Response",
        "fct-type": "function",
        "title": "BADAUTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "BADAUTH",
        "normalized": "",
        "package": "scrobble",
        "partial": "BADAUTH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:BADSESSION",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "BADSESSION",
        "fct-source": "src/Scrobble-Types.html#Response",
        "fct-type": "function",
        "title": "BADSESSION"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "BADSESSION",
        "normalized": "",
        "package": "scrobble",
        "partial": "BADSESSION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:BANNED",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "BANNED",
        "fct-source": "src/Scrobble-Types.html#Response",
        "fct-type": "function",
        "title": "BANNED"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "BANNED",
        "normalized": "",
        "package": "scrobble",
        "partial": "BANNED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Ban",
      "description": {
        "fct-descr": "\u003cp\u003eBan (only if source=L). This implies a skip, and the\n client should skip to the next track when a ban happens.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Ban",
        "fct-source": "src/Scrobble-Types.html#Rating",
        "fct-type": "function",
        "title": "Ban"
      },
      "index": {
        "description": "Ban only if source This implies skip and the client should skip to the next track when ban happens",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Ban",
        "normalized": "",
        "package": "scrobble",
        "partial": "Ban",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Client",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Client",
        "fct-source": "src/Scrobble-Types.html#Client",
        "fct-type": "function",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Client",
        "normalized": "",
        "package": "scrobble",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Config",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Config",
        "fct-source": "src/Scrobble-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Config",
        "normalized": "",
        "package": "scrobble",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Details",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Details",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "function",
        "title": "Details"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Details",
        "normalized": "",
        "package": "scrobble",
        "partial": "Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:FAILED",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "FAILED String",
        "fct-source": "src/Scrobble-Types.html#Response",
        "fct-type": "function",
        "title": "FAILED"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "FAILED",
        "normalized": "",
        "package": "scrobble",
        "partial": "FAILED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Handlers",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Handlers",
        "fct-source": "src/Scrobble-Types.html#Handlers",
        "fct-type": "function",
        "title": "Handlers"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Handlers",
        "normalized": "",
        "package": "scrobble",
        "partial": "Handlers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:LastFm",
      "description": {
        "fct-descr": "\u003cp\u003eLast.fm (any mode). In this case, the 5-digit Last.fm\n recommendation key must be appended to this source ID to\n prove the validity of the submission (for example,\n \u003ca\u003eo[0]=L1b48a\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "LastFm",
        "fct-source": "src/Scrobble-Types.html#Source",
        "fct-type": "function",
        "title": "LastFm"
      },
      "index": {
        "description": "Last.fm any mode In this case the digit Last.fm recommendation key must be appended to this source ID to prove the validity of the submission for example L1b48a",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "LastFm",
        "normalized": "",
        "package": "scrobble",
        "partial": "Last Fm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Love",
      "description": {
        "fct-descr": "\u003cp\u003eLove (on any mode if the user has manually loved the\n track). This implies a listen.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Love",
        "fct-source": "src/Scrobble-Types.html#Rating",
        "fct-type": "function",
        "title": "Love"
      },
      "index": {
        "description": "Love on any mode if the user has manually loved the track This implies listen",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Love",
        "normalized": "",
        "package": "scrobble",
        "partial": "Love",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:NonPersonlizedBroadcast",
      "description": {
        "fct-descr": "\u003cp\u003eNon-personalised broadcast\n (e.g. Shoutcast, BBC Radio 1)\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "NonPersonlizedBroadcast",
        "fct-source": "src/Scrobble-Types.html#Source",
        "fct-type": "function",
        "title": "NonPersonlizedBroadcast"
      },
      "index": {
        "description": "Non-personalised broadcast e.g Shoutcast BBC Radio",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "NonPersonlizedBroadcast",
        "normalized": "",
        "package": "scrobble",
        "partial": "Non Personlized Broadcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:NowPlaying",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "NowPlaying",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "NowPlaying"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "NowPlaying",
        "normalized": "",
        "package": "scrobble",
        "partial": "Now Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:OK",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "OK",
        "fct-source": "src/Scrobble-Types.html#Response",
        "fct-type": "function",
        "title": "OK"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "OK",
        "normalized": "",
        "package": "scrobble",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Personalized",
      "description": {
        "fct-descr": "\u003cp\u003ePersonalised recommendation except Last.fm\n (e.g. Pandora, Launchcast)\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Personalized",
        "fct-source": "src/Scrobble-Types.html#Source",
        "fct-type": "function",
        "title": "Personalized"
      },
      "index": {
        "description": "Personalised recommendation except Last.fm e.g Pandora Launchcast",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Personalized",
        "normalized": "",
        "package": "scrobble",
        "partial": "Personalized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerBadAuth",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerBadAuth",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerBadAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerBadAuth",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Bad Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerBadTime",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerBadTime",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerBadTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerBadTime",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Bad Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerBanned",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerBanned",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerBanned"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerBanned",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Banned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerFailed",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerFailed String",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerFailed",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerHardFail",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerHardFail",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerHardFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerHardFail",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Hard Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerNowPlayingFail",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerNowPlayingFail String",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerNowPlayingFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerNowPlayingFail",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Now Playing Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:ScrobblerSubmitFail",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "ScrobblerSubmitFail String",
        "fct-source": "src/Scrobble-Types.html#ScrobblerError",
        "fct-type": "function",
        "title": "ScrobblerSubmitFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "ScrobblerSubmitFail",
        "normalized": "",
        "package": "scrobble",
        "partial": "Scrobbler Submit Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Session",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Session",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "Session"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Session",
        "normalized": "",
        "package": "scrobble",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip (only if source=L).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Skip",
        "fct-source": "src/Scrobble-Types.html#Rating",
        "fct-type": "function",
        "title": "Skip"
      },
      "index": {
        "description": "Skip only if source",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Skip",
        "normalized": "",
        "package": "scrobble",
        "partial": "Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Submission",
      "description": {
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Submission",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "Submission"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Submission",
        "normalized": "",
        "package": "scrobble",
        "partial": "Submission",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eSource unknown.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Unknown",
        "fct-source": "src/Scrobble-Types.html#Source",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "Source unknown",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "Unknown",
        "normalized": "",
        "package": "scrobble",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:UserChosen",
      "description": {
        "fct-descr": "\u003cp\u003eChosen by the user\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "UserChosen",
        "fct-source": "src/Scrobble-Types.html#Source",
        "fct-type": "function",
        "title": "UserChosen"
      },
      "index": {
        "description": "Chosen by the user",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "UserChosen",
        "normalized": "",
        "package": "scrobble",
        "partial": "User Chosen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cfgExpire",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of seconds of inactivity before a session expires.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "NominalDiffTime",
        "fct-source": "src/Scrobble-Types.html#Config",
        "fct-type": "function",
        "title": "cfgExpire"
      },
      "index": {
        "description": "Number of seconds of inactivity before session expires",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "cfgExpire",
        "normalized": "",
        "package": "scrobble",
        "partial": "Expire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cfgHost",
      "description": {
        "fct-descr": "\u003cp\u003eHost name used for server (probably just localhost).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Config",
        "fct-type": "function",
        "title": "cfgHost"
      },
      "index": {
        "description": "Host name used for server probably just localhost",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "cfgHost",
        "normalized": "",
        "package": "scrobble",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cfgPort",
      "description": {
        "fct-descr": "\u003cp\u003ePort to listen on.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "PortNumber",
        "fct-source": "src/Scrobble-Types.html#Config",
        "fct-type": "function",
        "title": "cfgPort"
      },
      "index": {
        "description": "Port to listen on",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "cfgPort",
        "normalized": "",
        "package": "scrobble",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cliNowPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eNow playing URL to submit to.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "URI",
        "fct-source": "src/Scrobble-Types.html#Client",
        "fct-type": "function",
        "title": "cliNowPlaying"
      },
      "index": {
        "description": "Now playing URL to submit to",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "cliNowPlaying",
        "normalized": "",
        "package": "scrobble",
        "partial": "Now Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cliSubmit",
      "description": {
        "fct-descr": "\u003cp\u003eURL to submit listened tracks to.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "URI",
        "fct-source": "src/Scrobble-Types.html#Client",
        "fct-type": "function",
        "title": "cliSubmit"
      },
      "index": {
        "description": "URL to submit listened tracks to",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "cliSubmit",
        "normalized": "",
        "package": "scrobble",
        "partial": "Submit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:cliToken",
      "description": {
        "fct-descr": "\u003cp\u003eSession token.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Client",
        "fct-type": "function",
        "title": "cliToken"
      },
      "index": {
        "description": "Session token",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "cliToken",
        "normalized": "",
        "package": "scrobble",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detClient",
      "description": {
        "fct-descr": "\u003cp\u003eE.g. &#8220;qlb&#8221;.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "function",
        "title": "detClient"
      },
      "index": {
        "description": "E.g qlb",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "detClient",
        "normalized": "",
        "package": "scrobble",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "function",
        "title": "detPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "detPassword",
        "normalized": "",
        "package": "scrobble",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detServer",
      "description": {
        "fct-descr": "\u003cp\u003eSee defaultServer in \u003ca\u003eScrobble.Client\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "URI",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "function",
        "title": "detServer"
      },
      "index": {
        "description": "See defaultServer in Scrobble.Client",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "detServer",
        "normalized": "",
        "package": "scrobble",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detUsername",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "function",
        "title": "detUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "detUsername",
        "normalized": "",
        "package": "scrobble",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:detVersion",
      "description": {
        "fct-descr": "\u003cp\u003eE.g. &#8220;0.9.2&#8221;.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Details",
        "fct-type": "function",
        "title": "detVersion"
      },
      "index": {
        "description": "E.g",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "detVersion",
        "normalized": "",
        "package": "scrobble",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleExpire",
      "description": {
        "fct-descr": "\u003cp\u003eSession expiry.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Session -\u003e IO ()",
        "fct-source": "src/Scrobble-Types.html#Handlers",
        "fct-type": "function",
        "title": "handleExpire"
      },
      "index": {
        "description": "Session expiry",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "handleExpire",
        "normalized": "Session-\u003eIO()",
        "package": "scrobble",
        "partial": "Expire",
        "signature": "Session-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleHandshake",
      "description": {
        "fct-descr": "\u003cp\u003eInitial connection hand-shake.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Session -\u003e IO ()",
        "fct-source": "src/Scrobble-Types.html#Handlers",
        "fct-type": "function",
        "title": "handleHandshake"
      },
      "index": {
        "description": "Initial connection hand-shake",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "handleHandshake",
        "normalized": "Session-\u003eIO()",
        "package": "scrobble",
        "partial": "Handshake",
        "signature": "Session-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleNowPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eNow-playing notification.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Session -\u003e NowPlaying -\u003e IO ()",
        "fct-source": "src/Scrobble-Types.html#Handlers",
        "fct-type": "function",
        "title": "handleNowPlaying"
      },
      "index": {
        "description": "Now-playing notification",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "handleNowPlaying",
        "normalized": "Session-\u003eNowPlaying-\u003eIO()",
        "package": "scrobble",
        "partial": "Now Playing",
        "signature": "Session-\u003eNowPlaying-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:handleSubmissions",
      "description": {
        "fct-descr": "\u003cp\u003ePlayed tracks submission.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Session -\u003e [Submission] -\u003e IO Bool",
        "fct-source": "src/Scrobble-Types.html#Handlers",
        "fct-type": "function",
        "title": "handleSubmissions"
      },
      "index": {
        "description": "Played tracks submission",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "handleSubmissions",
        "normalized": "Session-\u003e[Submission]-\u003eIO Bool",
        "package": "scrobble",
        "partial": "Submissions",
        "signature": "Session-\u003e[Submission]-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npAlbum",
      "description": {
        "fct-descr": "\u003cp\u003eAlbum name (if any).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe String",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "npAlbum"
      },
      "index": {
        "description": "Album name if any",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "npAlbum",
        "normalized": "",
        "package": "scrobble",
        "partial": "Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npArtist",
      "description": {
        "fct-descr": "\u003cp\u003eArtist name.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "npArtist"
      },
      "index": {
        "description": "Artist name",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "npArtist",
        "normalized": "",
        "package": "scrobble",
        "partial": "Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npLength",
      "description": {
        "fct-descr": "\u003cp\u003eTrack length in seconds (if known).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "npLength"
      },
      "index": {
        "description": "Track length in seconds if known",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "npLength",
        "normalized": "",
        "package": "scrobble",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npMusicBrainz",
      "description": {
        "fct-descr": "\u003cp\u003eMusicBrainz track id (if known).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe String",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "npMusicBrainz"
      },
      "index": {
        "description": "MusicBrainz track id if known",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "npMusicBrainz",
        "normalized": "",
        "package": "scrobble",
        "partial": "Music Brainz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npPosition",
      "description": {
        "fct-descr": "\u003cp\u003eTrack position (if known).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "npPosition"
      },
      "index": {
        "description": "Track position if known",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "npPosition",
        "normalized": "",
        "package": "scrobble",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:npTrack",
      "description": {
        "fct-descr": "\u003cp\u003eTrack title.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#NowPlaying",
        "fct-type": "function",
        "title": "npTrack"
      },
      "index": {
        "description": "Track title",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "npTrack",
        "normalized": "",
        "package": "scrobble",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesClientId",
      "description": {
        "fct-descr": "\u003cp\u003eClient (music player's) id.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesClientId"
      },
      "index": {
        "description": "Client music player id",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesClientId",
        "normalized": "",
        "package": "scrobble",
        "partial": "Client Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesClientVer",
      "description": {
        "fct-descr": "\u003cp\u003eClient version.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesClientVer"
      },
      "index": {
        "description": "Client version",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesClientVer",
        "normalized": "",
        "package": "scrobble",
        "partial": "Client Ver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesHandshake",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the session require handshake?\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Bool",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesHandshake"
      },
      "index": {
        "description": "Does the session require handshake",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesHandshake",
        "normalized": "",
        "package": "scrobble",
        "partial": "Handshake",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eTimestamp of connection.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "UTCTime",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesTimestamp"
      },
      "index": {
        "description": "Timestamp of connection",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesTimestamp",
        "normalized": "",
        "package": "scrobble",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesToken",
      "description": {
        "fct-descr": "\u003cp\u003eSession token.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesToken"
      },
      "index": {
        "description": "Session token",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesToken",
        "normalized": "",
        "package": "scrobble",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesUser",
      "description": {
        "fct-descr": "\u003cp\u003eUsername.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesUser"
      },
      "index": {
        "description": "Username",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesUser",
        "normalized": "",
        "package": "scrobble",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:sesVersion",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of the protocol.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Session",
        "fct-type": "function",
        "title": "sesVersion"
      },
      "index": {
        "description": "Version of the protocol",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "sesVersion",
        "normalized": "",
        "package": "scrobble",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subAlbum",
      "description": {
        "fct-descr": "\u003cp\u003eAlbum (if any).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe String",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subAlbum"
      },
      "index": {
        "description": "Album if any",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subAlbum",
        "normalized": "",
        "package": "scrobble",
        "partial": "Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subArtist",
      "description": {
        "fct-descr": "\u003cp\u003eArtist name.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subArtist"
      },
      "index": {
        "description": "Artist name",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subArtist",
        "normalized": "",
        "package": "scrobble",
        "partial": "Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subLength",
      "description": {
        "fct-descr": "\u003cp\u003eTrack length (if any).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subLength"
      },
      "index": {
        "description": "Track length if any",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subLength",
        "normalized": "",
        "package": "scrobble",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subMusicBrainz",
      "description": {
        "fct-descr": "\u003cp\u003eMusicBrainz track id (if any).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe String",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subMusicBrainz"
      },
      "index": {
        "description": "MusicBrainz track id if any",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subMusicBrainz",
        "normalized": "",
        "package": "scrobble",
        "partial": "Music Brainz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subPosition",
      "description": {
        "fct-descr": "\u003cp\u003eTrack position in album (if any).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subPosition"
      },
      "index": {
        "description": "Track position in album if any",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subPosition",
        "normalized": "",
        "package": "scrobble",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subRating",
      "description": {
        "fct-descr": "\u003cp\u003eRating (if any).\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Maybe Rating",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subRating"
      },
      "index": {
        "description": "Rating if any",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subRating",
        "normalized": "",
        "package": "scrobble",
        "partial": "Rating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subSource",
      "description": {
        "fct-descr": "\u003cp\u003eSource of track.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "Source",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subSource"
      },
      "index": {
        "description": "Source of track",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subSource",
        "normalized": "",
        "package": "scrobble",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eTrack timestamp.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "UTCTime",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subTimestamp"
      },
      "index": {
        "description": "Track timestamp",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subTimestamp",
        "normalized": "",
        "package": "scrobble",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scrobble/docs/Scrobble-Types.html#v:subTrack",
      "description": {
        "fct-descr": "\u003cp\u003eTrack title.\n\u003c/p\u003e",
        "fct-module": "Scrobble.Types",
        "fct-package": "scrobble",
        "fct-signature": "String",
        "fct-source": "src/Scrobble-Types.html#Submission",
        "fct-type": "function",
        "title": "subTrack"
      },
      "index": {
        "description": "Track title",
        "hierarchy": "Scrobble Types",
        "module": "Scrobble.Types",
        "name": "subTrack",
        "normalized": "",
        "package": "scrobble",
        "partial": "Track",
        "signature": ""
      }
    }
  }
]