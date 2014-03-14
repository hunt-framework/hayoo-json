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
        "word": "libmpd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtensions and shortcuts to the standard MPD command set.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "Extensions",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Extensions.html",
          "type": "module"
        },
        "index": {
          "description": "Extensions and shortcuts to the standard MPD command set",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "Extensions",
          "package": "libmpd",
          "partial": "Extensions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of songs/folders to a playlist.\n Should be more efficient than running \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e many times.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "addMany",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e [Path] -\u003e m ()",
          "source": "src/Network-MPD-Commands-Extensions.html#addMany",
          "type": "function"
        },
        "index": {
          "description": "Add list of songs folders to playlist Should be more efficient than running add many times",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "addMany",
          "normalized": "PlaylistName-\u003e[Path]-\u003ea()",
          "package": "libmpd",
          "partial": "Many",
          "signature": "PlaylistName-\u003e[Path]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:addMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current playlist.\n Equivalent to \u003ccode\u003eplaylistinfo Nothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "getPlaylist",
          "package": "libmpd",
          "signature": "m [Song]",
          "source": "src/Network-MPD-Commands-Extensions.html#getPlaylist",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current playlist Equivalent to playlistinfo Nothing",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "getPlaylist",
          "normalized": "a[Song]",
          "package": "libmpd",
          "partial": "Playlist",
          "signature": "m[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:getPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the songs in an album of some artist.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "listAlbum",
          "package": "libmpd",
          "signature": "Artist -\u003e Album -\u003e m [Song]",
          "source": "src/Network-MPD-Commands-Extensions.html#listAlbum",
          "type": "function"
        },
        "index": {
          "description": "List the songs in an album of some artist",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "listAlbum",
          "normalized": "Artist-\u003eAlbum-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Album",
          "signature": "Artist-\u003eAlbum-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:listAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the albums in the database, optionally matching a given\n artist.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "listAlbums",
          "package": "libmpd",
          "signature": "Maybe Artist -\u003e m [Album]",
          "source": "src/Network-MPD-Commands-Extensions.html#listAlbums",
          "type": "function"
        },
        "index": {
          "description": "List the albums in the database optionally matching given artist",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "listAlbums",
          "normalized": "Maybe Artist-\u003ea[Album]",
          "package": "libmpd",
          "partial": "Albums",
          "signature": "Maybe Artist-\u003em[Album]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:listAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a list of songs from a playlist.\n If there is a duplicate then no further songs will be deleted, so\n take care to avoid them (see \u003ccode\u003eprune\u003c/code\u003e for this).\n\u003c/p\u003e\u003cp\u003eList the artists in the database.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "listArtists",
          "package": "libmpd",
          "signature": "m [Artist]",
          "source": "src/Network-MPD-Commands-Extensions.html#listArtists",
          "type": "function"
        },
        "index": {
          "description": "Delete list of songs from playlist If there is duplicate then no further songs will be deleted so take care to avoid them see prune for this List the artists in the database",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "listArtists",
          "normalized": "a[Artist]",
          "package": "libmpd",
          "partial": "Artists",
          "signature": "m[Artist]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:listArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggles play/pause. Plays if stopped.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "toggle",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands-Extensions.html#toggle",
          "type": "function"
        },
        "index": {
          "description": "Toggles play pause Plays if stopped",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "toggle",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:toggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, but returns the update job id.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "updateId",
          "package": "libmpd",
          "signature": "[Path] -\u003e m Integer",
          "source": "src/Network-MPD-Commands-Extensions.html#updateId",
          "type": "function"
        },
        "index": {
          "description": "Like update but returns the update job id",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "updateId",
          "normalized": "[Path]-\u003ea Integer",
          "package": "libmpd",
          "partial": "Id",
          "signature": "[Path]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:updateId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease or decrease volume by a given percent, e.g.\n 'volume 10' will increase the volume by 10 percent, while\n 'volume (-10)' will decrease it by the same amount.\n\u003c/p\u003e",
          "module": "Network.MPD.Commands.Extensions",
          "name": "volume",
          "package": "libmpd",
          "signature": "Int -\u003e m ()",
          "source": "src/Network-MPD-Commands-Extensions.html#volume",
          "type": "function"
        },
        "index": {
          "description": "Increase or decrease volume by given percent e.g volume will increase the volume by percent while volume will decrease it by the same amount",
          "hierarchy": "Network MPD Commands Extensions",
          "module": "Network.MPD.Commands.Extensions",
          "name": "volume",
          "normalized": "Int-\u003ea()",
          "package": "libmpd",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core datatypes and operations are defined here, including the\n primary instance of the \u003ccode\u003e\u003ca\u003eMonadMPD\u003c/a\u003e\u003c/code\u003e class, \u003ccode\u003e\u003ca\u003eMPD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MPD.Core",
          "name": "Core",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The core datatypes and operations are defined here including the primary instance of the MonadMPD class MPD",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Core",
          "package": "libmpd",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents various MPD errors (aka. ACKs).\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "ACKType",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "data"
        },
        "index": {
          "description": "Represents various MPD errors aka ACKs",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "ACKType",
          "package": "libmpd",
          "partial": "ACKType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:ACKType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD.Core",
          "name": "Host",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#Host",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Host",
          "package": "libmpd",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main implementation of an MPD client.  It actually connects\n   to a server and interacts with it.\n\u003c/p\u003e\u003cp\u003eTo use the error throwing/catching capabilities:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Error (throwError, catchError)\n\u003c/pre\u003e\u003cp\u003eTo run IO actions within the MPD monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Trans (liftIO)\n\u003c/pre\u003e",
          "module": "Network.MPD.Core",
          "name": "MPD",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#MPD",
          "type": "data"
        },
        "index": {
          "description": "The main implementation of an MPD client It actually connects to server and interacts with it To use the error throwing catching capabilities import Control.Monad.Error throwError catchError To run IO actions within the MPD monad import Control.Monad.Trans liftIO",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "MPD",
          "package": "libmpd",
          "partial": "MPD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:MPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe MPDError type is used to signal errors, both from the MPD and\n otherwise.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "MPDError",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "data"
        },
        "index": {
          "description": "The MPDError type is used to signal errors both from the MPD and otherwise",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "MPDError",
          "package": "libmpd",
          "partial": "MPDError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:MPDError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass to allow for multiple implementations of a connection\n   to an MPD server.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "MonadMPD",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Class.html#MonadMPD",
          "type": "class"
        },
        "index": {
          "description": "typeclass to allow for multiple implementations of connection to an MPD server",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "MonadMPD",
          "package": "libmpd",
          "partial": "Monad MPD",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:MonadMPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD.Core",
          "name": "Password",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Class.html#Password",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Password",
          "package": "libmpd",
          "partial": "Password",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD.Core",
          "name": "Port",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Port",
          "package": "libmpd",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA response is either an \u003ccode\u003e\u003ca\u003eMPDError\u003c/a\u003e\u003c/code\u003e or some result.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "Response",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#Response",
          "type": "type"
        },
        "index": {
          "description": "response is either an MPDError or some result",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Response",
          "package": "libmpd",
          "partial": "Response",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eACK type and a message from the\n   server\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "ACK",
          "package": "libmpd",
          "signature": "ACK ACKType String",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:ACK\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:ACK\"]"
        },
        "index": {
          "description": "ACK type and message from the server",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "ACK",
          "package": "libmpd",
          "partial": "ACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:ACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication required (ACK 4)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "Auth",
          "package": "libmpd",
          "signature": "Auth",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Auth\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Auth\"]"
        },
        "index": {
          "description": "Authentication required ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Auth",
          "package": "libmpd",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate already running (ACK 54)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "Busy",
          "package": "libmpd",
          "signature": "Busy",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Busy\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Busy\"]"
        },
        "index": {
          "description": "Update already running ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Busy",
          "package": "libmpd",
          "partial": "Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Busy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for misc. errors\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "Custom",
          "package": "libmpd",
          "signature": "Custom String",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Custom\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Custom\"]"
        },
        "index": {
          "description": "Used for misc errors",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Custom",
          "package": "libmpd",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile already exists (ACK 56)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "FileExists",
          "package": "libmpd",
          "signature": "FileExists",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:FileExists\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:FileExists\"]"
        },
        "index": {
          "description": "File already exists ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "FileExists",
          "package": "libmpd",
          "partial": "File Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:FileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile or directory not found ACK 50)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "FileNotFound",
          "package": "libmpd",
          "signature": "FileNotFound",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:FileNotFound\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:FileNotFound\"]"
        },
        "index": {
          "description": "File or directory not found ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "FileNotFound",
          "package": "libmpd",
          "partial": "File Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:FileNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid argument passed (ACK 2)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "InvalidArgument",
          "package": "libmpd",
          "signature": "InvalidArgument",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:InvalidArgument\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:InvalidArgument\"]"
        },
        "index": {
          "description": "Invalid argument passed ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "InvalidArgument",
          "package": "libmpd",
          "partial": "Invalid Argument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:InvalidArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid password supplied (ACK 3)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "InvalidPassword",
          "package": "libmpd",
          "signature": "InvalidPassword",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:InvalidPassword\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:InvalidPassword\"]"
        },
        "index": {
          "description": "Invalid password supplied ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "InvalidPassword",
          "package": "libmpd",
          "partial": "Invalid Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:InvalidPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMPD not responding\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "NoMPD",
          "package": "libmpd",
          "signature": "NoMPD",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:NoMPD\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:NoMPD\"]"
        },
        "index": {
          "description": "MPD not responding",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "NoMPD",
          "package": "libmpd",
          "partial": "No MPD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:NoMPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operation requiring playback\n   got interrupted (ACK 55)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "NotPlaying",
          "package": "libmpd",
          "signature": "NotPlaying",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:NotPlaying\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:NotPlaying\"]"
        },
        "index": {
          "description": "An operation requiring playback got interrupted ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "NotPlaying",
          "package": "libmpd",
          "partial": "Not Playing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:NotPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaylist loading failed (ACK 53)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "PlaylistLoad",
          "package": "libmpd",
          "signature": "PlaylistLoad",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:PlaylistLoad\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistLoad\"]"
        },
        "index": {
          "description": "Playlist loading failed ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "PlaylistLoad",
          "package": "libmpd",
          "partial": "Playlist Load",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:PlaylistLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaylist at maximum size (ACK 51)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "PlaylistMax",
          "package": "libmpd",
          "signature": "PlaylistMax",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:PlaylistMax\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistMax\"]"
        },
        "index": {
          "description": "Playlist at maximum size ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "PlaylistMax",
          "package": "libmpd",
          "partial": "Playlist Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:PlaylistMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA system error (ACK 52)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "System",
          "package": "libmpd",
          "signature": "System",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:System\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:System\"]"
        },
        "index": {
          "description": "system error ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "System",
          "package": "libmpd",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:System"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe connection timed out\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "TimedOut",
          "package": "libmpd",
          "signature": "TimedOut",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:TimedOut\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:TimedOut\"]"
        },
        "index": {
          "description": "The connection timed out",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "TimedOut",
          "package": "libmpd",
          "partial": "Timed Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:TimedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMPD returned an unexpected response.\n   This is a bug, either in the library or\n   in MPD itself.\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "Unexpected",
          "package": "libmpd",
          "signature": "Unexpected String",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Unexpected\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Unexpected\"]"
        },
        "index": {
          "description": "MPD returned an unexpected response This is bug either in the library or in MPD itself",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "Unexpected",
          "package": "libmpd",
          "partial": "Unexpected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unknown ACK (aka. bug)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "UnknownACK",
          "package": "libmpd",
          "signature": "UnknownACK",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:UnknownACK\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:UnknownACK\"]"
        },
        "index": {
          "description": "An unknown ACK aka bug",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "UnknownACK",
          "package": "libmpd",
          "partial": "Unknown ACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:UnknownACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown command (ACK 5)\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "UnknownCommand",
          "package": "libmpd",
          "signature": "UnknownCommand",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:UnknownCommand\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:UnknownCommand\"]"
        },
        "index": {
          "description": "Unknown command ACK",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "UnknownCommand",
          "package": "libmpd",
          "partial": "Unknown Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:UnknownCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "close",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Core-Class.html#close",
          "type": "method"
        },
        "index": {
          "description": "Close the connection",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "close",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet underlying Handle (or Nothing, if no connection is estabilished)\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "getHandle",
          "package": "libmpd",
          "signature": "m (Maybe Handle)",
          "source": "src/Network-MPD-Core-Class.html#getHandle",
          "type": "method"
        },
        "index": {
          "description": "Get underlying Handle or Nothing if no connection is estabilished",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "getHandle",
          "package": "libmpd",
          "partial": "Handle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a password to send to the server should it ask for\n   one.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "getPassword",
          "package": "libmpd",
          "signature": "m Password",
          "source": "src/Network-MPD-Core-Class.html#getPassword",
          "type": "method"
        },
        "index": {
          "description": "Produce password to send to the server should it ask for one",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "getPassword",
          "package": "libmpd",
          "partial": "Password",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a command to the MPD server and return the result.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "getResponse",
          "package": "libmpd",
          "signature": "String -\u003e m [ByteString]",
          "source": "src/Network-MPD-Core.html#getResponse",
          "type": "function"
        },
        "index": {
          "description": "Send command to the MPD server and return the result",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "getResponse",
          "normalized": "String-\u003ea[ByteString]",
          "package": "libmpd",
          "partial": "Response",
          "signature": "String-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet MPD protocol version\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "getVersion",
          "package": "libmpd",
          "signature": "m (Int, Int, Int)",
          "source": "src/Network-MPD-Core-Class.html#getVersion",
          "type": "method"
        },
        "index": {
          "description": "Get MPD protocol version",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "getVersion",
          "normalized": "a(Int,Int,Int)",
          "package": "libmpd",
          "partial": "Version",
          "signature": "m(Int,Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill the server. Obviously, the connection is then invalid.\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "kill",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Core.html#kill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:kill\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:kill\"]"
        },
        "index": {
          "description": "Kill the server Obviously the connection is then invalid",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "kill",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen (or re-open) a connection to the MPD server.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "open",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Core-Class.html#open",
          "type": "method"
        },
        "index": {
          "description": "Open or re-open connection to the MPD server",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "open",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a string to the server and return its response.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "send",
          "package": "libmpd",
          "signature": "String -\u003e m [ByteString]",
          "source": "src/Network-MPD-Core-Class.html#send",
          "type": "method"
        },
        "index": {
          "description": "Send string to the server and return its response",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "send",
          "normalized": "String-\u003ea[ByteString]",
          "package": "libmpd",
          "signature": "String-\u003em[ByteString]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlters password to be sent to the server.\n\u003c/p\u003e",
          "module": "Network.MPD.Core",
          "name": "setPassword",
          "package": "libmpd",
          "signature": "Password -\u003e m ()",
          "source": "src/Network-MPD-Core-Class.html#setPassword",
          "type": "method"
        },
        "index": {
          "description": "Alters password to be sent to the server",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "setPassword",
          "normalized": "Password-\u003ea()",
          "package": "libmpd",
          "partial": "Password",
          "signature": "Password-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:setPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most configurable API for running an MPD action.\n\u003c/p\u003e",
          "module": "[\"Network.MPD.Core\",\"Network.MPD\"]",
          "name": "withMPDEx",
          "package": "libmpd",
          "signature": "Host -\u003e Port -\u003e Password -\u003e MPD a -\u003e IO (Response a)",
          "source": "src/Network-MPD-Core.html#withMPDEx",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:withMPDEx\",\"http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:withMPDEx\"]"
        },
        "index": {
          "description": "The most configurable API for running an MPD action",
          "hierarchy": "Network MPD Core",
          "module": "Network.MPD.Core",
          "name": "withMPDEx",
          "normalized": "Host-\u003ePort-\u003ePassword-\u003eMPD a-\u003eIO(Response a)",
          "package": "libmpd",
          "partial": "MPDEx",
          "signature": "Host-\u003ePort-\u003ePassword-\u003eMPD a-\u003eIO(Response a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:withMPDEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn MPD client library. MPD is a daemon for playing music that is\n controlled over a network socket. Its site is at \u003ca\u003ehttp://www.musicpd.org/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo use the library, do:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import qualified Network.MPD as MPD\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.MPD",
          "name": "MPD",
          "package": "libmpd",
          "source": "src/Network-MPD.html",
          "type": "module"
        },
        "index": {
          "description": "An MPD client library MPD is daemon for playing music that is controlled over network socket Its site is at http www.musicpd.org To use the library do LANGUAGE OverloadedStrings import qualified Network.MPD as MPD",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MPD",
          "package": "libmpd",
          "partial": "MPD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents various MPD errors (aka. ACKs).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "ACKType",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Error.html#ACKType",
          "type": "data"
        },
        "index": {
          "description": "Represents various MPD errors aka ACKs",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "ACKType",
          "package": "libmpd",
          "partial": "ACKType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ACKType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Album",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Album",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Album",
          "package": "libmpd",
          "partial": "Album",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Artist",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Artist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Artist",
          "package": "libmpd",
          "partial": "Artist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the result of running \u003ccode\u003ecount\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Count",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Count",
          "type": "data"
        },
        "index": {
          "description": "Represents the result of running count",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Count",
          "package": "libmpd",
          "partial": "Count",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an output device.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Device",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Device",
          "type": "data"
        },
        "index": {
          "description": "Represents an output device",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Device",
          "package": "libmpd",
          "partial": "Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Host",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#Host",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Host",
          "package": "libmpd",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Id",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Id",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Id",
          "package": "libmpd",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of the lsInfo operation\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "LsResult",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#LsResult",
          "type": "data"
        },
        "index": {
          "description": "Result of the lsInfo operation",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "LsResult",
          "package": "libmpd",
          "partial": "Ls Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:LsResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main implementation of an MPD client.  It actually connects\n   to a server and interacts with it.\n\u003c/p\u003e\u003cp\u003eTo use the error throwing/catching capabilities:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Error (throwError, catchError)\n\u003c/pre\u003e\u003cp\u003eTo run IO actions within the MPD monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Trans (liftIO)\n\u003c/pre\u003e",
          "module": "Network.MPD",
          "name": "MPD",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#MPD",
          "type": "data"
        },
        "index": {
          "description": "The main implementation of an MPD client It actually connects to server and interacts with it To use the error throwing catching capabilities import Control.Monad.Error throwError catchError To run IO actions within the MPD monad import Control.Monad.Trans liftIO",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MPD",
          "package": "libmpd",
          "partial": "MPD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:MPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe MPDError type is used to signal errors, both from the MPD and\n otherwise.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "MPDError",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Error.html#MPDError",
          "type": "data"
        },
        "index": {
          "description": "The MPDError type is used to signal errors both from the MPD and otherwise",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MPDError",
          "package": "libmpd",
          "partial": "MPDError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:MPDError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable metadata types/scope modifiers, used for searching the\n database for entries with certain metadata values.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Metadata",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "data"
        },
        "index": {
          "description": "Available metadata types scope modifiers used for searching the database for entries with certain metadata values",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Metadata",
          "package": "libmpd",
          "partial": "Metadata",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass to allow for multiple implementations of a connection\n   to an MPD server.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "MonadMPD",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Class.html#MonadMPD",
          "type": "class"
        },
        "index": {
          "description": "typeclass to allow for multiple implementations of connection to an MPD server",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MonadMPD",
          "package": "libmpd",
          "partial": "Monad MPD",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:MonadMPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject types.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "ObjectType",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#ObjectType",
          "type": "data"
        },
        "index": {
          "description": "Object types",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "ObjectType",
          "package": "libmpd",
          "partial": "Object Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Password",
          "package": "libmpd",
          "source": "src/Network-MPD-Core-Class.html#Password",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Password",
          "package": "libmpd",
          "partial": "Password",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for commands which require a path within the database.\n If empty, the root path is used.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Path",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Path",
          "type": "newtype"
        },
        "index": {
          "description": "Used for commands which require path within the database If empty the root path is used",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Path",
          "package": "libmpd",
          "partial": "Path",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for commands which require a playlist name.\n If empty, the current playlist is used.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "PlaylistName",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#PlaylistName",
          "type": "newtype"
        },
        "index": {
          "description": "Used for commands which require playlist name If empty the current playlist is used",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "PlaylistName",
          "package": "libmpd",
          "partial": "Playlist Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:PlaylistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Port",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Port",
          "package": "libmpd",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface for creating MPD queries.\n\u003c/p\u003e\u003cp\u003eFor example, to match any song where the value of artist is \"Foo\", we\n use:\n\u003c/p\u003e\u003cpre\u003e Artist =? \"Foo\"\n\u003c/pre\u003e\u003cp\u003eWe can also compose queries, thus narrowing the search. For example, to\n match any song where the value of artist is \"Foo\" and the value of album\n is \"Bar\", we use:\n\u003c/p\u003e\u003cpre\u003e Artist =? \"Foo\" \u003c&\u003e Album =? \"Bar\"\n\u003c/pre\u003e",
          "module": "Network.MPD",
          "name": "Query",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Query.html#Query",
          "type": "data"
        },
        "index": {
          "description": "An interface for creating MPD queries For example to match any song where the value of artist is Foo we use Artist Foo We can also compose queries thus narrowing the search For example to match any song where the value of artist is Foo and the value of album is Bar we use Artist Foo Album Bar",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Query",
          "package": "libmpd",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "ReplayGainMode",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "ReplayGainMode",
          "package": "libmpd",
          "partial": "Replay Gain Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ReplayGainMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA response is either an \u003ccode\u003e\u003ca\u003eMPDError\u003c/a\u003e\u003c/code\u003e or some result.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Response",
          "package": "libmpd",
          "source": "src/Network-MPD-Core.html#Response",
          "type": "type"
        },
        "index": {
          "description": "response is either an MPDError or some result",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Response",
          "package": "libmpd",
          "partial": "Response",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Seconds",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Seconds",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Seconds",
          "package": "libmpd",
          "partial": "Seconds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a single song item.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Song",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "data"
        },
        "index": {
          "description": "Represents single song item",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Song",
          "package": "libmpd",
          "partial": "Song",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Song"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the different playback states.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "State",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#State",
          "type": "data"
        },
        "index": {
          "description": "Represents the different playback states",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "State",
          "package": "libmpd",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for database statistics.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Stats",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "data"
        },
        "index": {
          "description": "Container for database statistics",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Stats",
          "package": "libmpd",
          "partial": "Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for MPD status.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Status",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "data"
        },
        "index": {
          "description": "Container for MPD status",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Status",
          "package": "libmpd",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the various MPD subsystems.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Subsystem",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "data"
        },
        "index": {
          "description": "Represents the various MPD subsystems",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Subsystem",
          "package": "libmpd",
          "partial": "Subsystem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Subsystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Title",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Title",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Title",
          "package": "libmpd",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for values that can be converted to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "ToString",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#ToString",
          "type": "class"
        },
        "index": {
          "description": "type class for values that can be converted to String",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "ToString",
          "package": "libmpd",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA metadata value.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Value",
          "package": "libmpd",
          "source": "src/Network-MPD-Commands-Types.html#Value",
          "type": "newtype"
        },
        "index": {
          "description": "metadata value",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Value",
          "package": "libmpd",
          "partial": "Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine queries.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "(\u003c&\u003e)",
          "package": "libmpd",
          "signature": "Query -\u003e Query -\u003e Query",
          "source": "src/Network-MPD-Commands-Query.html#%3C%26%3E",
          "type": "function"
        },
        "index": {
          "description": "Combine queries",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "(\u003c&\u003e) \u003c&\u003e",
          "normalized": "Query-\u003eQuery-\u003eQuery",
          "package": "libmpd",
          "signature": "Query-\u003eQuery-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:-60--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a query.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "(=?)",
          "package": "libmpd",
          "signature": "Metadata -\u003e Value -\u003e Query",
          "source": "src/Network-MPD-Commands-Query.html#%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Create query",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "(=?) =?",
          "normalized": "Metadata-\u003eValue-\u003eQuery",
          "package": "libmpd",
          "signature": "Metadata-\u003eValue-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:-61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArtistSort\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Album",
          "package": "libmpd",
          "signature": "Album",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "ArtistSort",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Album",
          "package": "libmpd",
          "partial": "Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer album mode\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "AlbumMode",
          "package": "libmpd",
          "signature": "AlbumMode",
          "source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
          "type": "function"
        },
        "index": {
          "description": "Per album mode",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "AlbumMode",
          "package": "libmpd",
          "partial": "Album Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:AlbumMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Artist",
          "package": "libmpd",
          "signature": "Artist",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Artist",
          "package": "libmpd",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Composer",
          "package": "libmpd",
          "signature": "Composer",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Composer",
          "package": "libmpd",
          "partial": "Composer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Composer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Count",
          "package": "libmpd",
          "signature": "Count",
          "source": "src/Network-MPD-Commands-Types.html#Count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Count",
          "package": "libmpd",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe song database\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "DatabaseS",
          "package": "libmpd",
          "signature": "DatabaseS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "The song database",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "DatabaseS",
          "package": "libmpd",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:DatabaseS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Date",
          "package": "libmpd",
          "signature": "Date",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Date",
          "package": "libmpd",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Device",
          "package": "libmpd",
          "signature": "Device",
          "source": "src/Network-MPD-Commands-Types.html#Device",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Device",
          "package": "libmpd",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Disc",
          "package": "libmpd",
          "signature": "Disc",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "Comment",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Disc",
          "package": "libmpd",
          "partial": "Disc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Disc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Genre",
          "package": "libmpd",
          "signature": "Genre",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Genre",
          "package": "libmpd",
          "partial": "Genre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Genre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Id",
          "package": "libmpd",
          "signature": "Id Int",
          "source": "src/Network-MPD-Commands-Types.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Id",
          "package": "libmpd",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "LsDirectory",
          "package": "libmpd",
          "signature": "LsDirectory Path",
          "source": "src/Network-MPD-Commands-Types.html#LsResult",
          "type": "function"
        },
        "index": {
          "description": "Directory",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "LsDirectory",
          "package": "libmpd",
          "partial": "Ls Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:LsDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaylist\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "LsPlaylist",
          "package": "libmpd",
          "signature": "LsPlaylist PlaylistName",
          "source": "src/Network-MPD-Commands-Types.html#LsResult",
          "type": "function"
        },
        "index": {
          "description": "Playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "LsPlaylist",
          "package": "libmpd",
          "partial": "Ls Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:LsPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSong\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "LsSong",
          "package": "libmpd",
          "signature": "LsSong Song",
          "source": "src/Network-MPD-Commands-Types.html#LsResult",
          "type": "function"
        },
        "index": {
          "description": "Song",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "LsSong",
          "package": "libmpd",
          "partial": "Ls Song",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:LsSong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "MUSICBRAINZ_ARTISTID",
          "package": "libmpd",
          "signature": "MUSICBRAINZ_ARTISTID",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MUSICBRAINZ_ARTISTID",
          "package": "libmpd",
          "partial": "MUSICBRAINZ ARTISTID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:MUSICBRAINZ_ARTISTID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMUSICBRAINZ_ALBUMID\n | MUSICBRAINZ_ALBUMARTISTID\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "MUSICBRAINZ_TRACKID",
          "package": "libmpd",
          "signature": "MUSICBRAINZ_TRACKID",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "MUSICBRAINZ ALBUMID MUSICBRAINZ ALBUMARTISTID",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MUSICBRAINZ_TRACKID",
          "package": "libmpd",
          "partial": "MUSICBRAINZ TRACKID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:MUSICBRAINZ_TRACKID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe volume mixer\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "MixerS",
          "package": "libmpd",
          "signature": "MixerS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "The volume mixer",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "MixerS",
          "package": "libmpd",
          "partial": "Mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:MixerS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Name",
          "package": "libmpd",
          "signature": "Name",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Name",
          "package": "libmpd",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable replay gain\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Off",
          "package": "libmpd",
          "signature": "Off",
          "source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
          "type": "function"
        },
        "index": {
          "description": "Disable replay gain",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Off",
          "package": "libmpd",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlayback options\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "OptionsS",
          "package": "libmpd",
          "signature": "OptionsS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "Playback options",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "OptionsS",
          "package": "libmpd",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:OptionsS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudio outputs\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "OutputS",
          "package": "libmpd",
          "signature": "OutputS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "Audio outputs",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "OutputS",
          "package": "libmpd",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:OutputS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Path",
          "package": "libmpd",
          "signature": "Path ByteString",
          "source": "src/Network-MPD-Commands-Types.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Path",
          "package": "libmpd",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Paused",
          "package": "libmpd",
          "signature": "Paused",
          "source": "src/Network-MPD-Commands-Types.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Paused",
          "package": "libmpd",
          "partial": "Paused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Paused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Performer",
          "package": "libmpd",
          "signature": "Performer",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Performer",
          "package": "libmpd",
          "partial": "Performer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Performer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe player\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "PlayerS",
          "package": "libmpd",
          "signature": "PlayerS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "The player",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "PlayerS",
          "package": "libmpd",
          "partial": "Player",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlayerS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Playing",
          "package": "libmpd",
          "signature": "Playing",
          "source": "src/Network-MPD-Commands-Types.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Playing",
          "package": "libmpd",
          "partial": "Playing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Playing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "PlaylistName",
          "package": "libmpd",
          "signature": "PlaylistName ByteString",
          "source": "src/Network-MPD-Commands-Types.html#PlaylistName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "PlaylistName",
          "package": "libmpd",
          "partial": "Playlist Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current playlist\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "PlaylistS",
          "package": "libmpd",
          "signature": "PlaylistS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "The current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "PlaylistS",
          "package": "libmpd",
          "partial": "Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Song",
          "package": "libmpd",
          "signature": "Song",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Song",
          "package": "libmpd",
          "partial": "Song",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Song"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "SongObj",
          "package": "libmpd",
          "signature": "SongObj",
          "source": "src/Network-MPD-Commands-Types.html#ObjectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "SongObj",
          "package": "libmpd",
          "partial": "Song Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:SongObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Stats",
          "package": "libmpd",
          "signature": "Stats",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Stats",
          "package": "libmpd",
          "partial": "Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Status",
          "package": "libmpd",
          "signature": "Status",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Status",
          "package": "libmpd",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Stopped",
          "package": "libmpd",
          "signature": "Stopped",
          "source": "src/Network-MPD-Commands-Types.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Stopped",
          "package": "libmpd",
          "partial": "Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Stopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStored playlists\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "StoredPlaylistS",
          "package": "libmpd",
          "signature": "StoredPlaylistS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "Stored playlists",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "StoredPlaylistS",
          "package": "libmpd",
          "partial": "Stored Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:StoredPlaylistS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlbumArtist\n | AlbumArtistSort\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "Title",
          "package": "libmpd",
          "signature": "Title",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "description": "AlbumArtist AlbumArtistSort",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Title",
          "package": "libmpd",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Track",
          "package": "libmpd",
          "signature": "Track",
          "source": "src/Network-MPD-Commands-Types.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Track",
          "package": "libmpd",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer track mode\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "TrackMode",
          "package": "libmpd",
          "signature": "TrackMode",
          "source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
          "type": "function"
        },
        "index": {
          "description": "Per track mode",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "TrackMode",
          "package": "libmpd",
          "partial": "Track Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:TrackMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase updates\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "UpdateS",
          "package": "libmpd",
          "signature": "UpdateS",
          "source": "src/Network-MPD-Commands-Types.html#Subsystem",
          "type": "function"
        },
        "index": {
          "description": "Database updates",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "UpdateS",
          "package": "libmpd",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:UpdateS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "Value",
          "package": "libmpd",
          "signature": "Value ByteString",
          "source": "src/Network-MPD-Commands-Types.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "Value",
          "package": "libmpd",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eadd_\u003c/a\u003e\u003c/code\u003e but returns a list of the files added.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "add",
          "package": "libmpd",
          "signature": "Path -\u003e m [Path]",
          "source": "src/Network-MPD-Commands.html#add",
          "type": "function"
        },
        "index": {
          "description": "Like add but returns list of the files added",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "add",
          "normalized": "Path-\u003ea[Path]",
          "package": "libmpd",
          "signature": "Path-\u003em[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e, but returns a playlist id.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "addId",
          "package": "libmpd",
          "signature": "Path-\u003e Maybe Integer-\u003e m Id",
          "type": "function"
        },
        "index": {
          "description": "Like add but returns playlist id",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "addId",
          "normalized": "Path-\u003eMaybe Integer-\u003ea Id",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Path-\u003eMaybe Integer-\u003em Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:addId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a song (or a whole directory) to the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "add_",
          "package": "libmpd",
          "signature": "Path -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#add_",
          "type": "function"
        },
        "index": {
          "description": "Add song or whole directory to the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "add_",
          "normalized": "Path-\u003ea()",
          "package": "libmpd",
          "signature": "Path-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:add_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty query. Matches anything.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "anything",
          "package": "libmpd",
          "signature": "Query",
          "source": "src/Network-MPD-Commands-Query.html#anything",
          "type": "function"
        },
        "index": {
          "description": "An empty query Matches anything",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "anything",
          "package": "libmpd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:anything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal play time of matching songs\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "cPlaytime",
          "package": "libmpd",
          "signature": "Seconds",
          "source": "src/Network-MPD-Commands-Types.html#Count",
          "type": "function"
        },
        "index": {
          "description": "Total play time of matching songs",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "cPlaytime",
          "package": "libmpd",
          "partial": "Playtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:cPlaytime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of songs matching the query\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "cSongs",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Count",
          "type": "function"
        },
        "index": {
          "description": "Number of songs matching the query",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "cSongs",
          "package": "libmpd",
          "partial": "Songs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:cSongs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "clear",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Clear the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "clear",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the current error message in status.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "clearError",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#clearError",
          "type": "function"
        },
        "index": {
          "description": "Clear the current error message in status",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "clearError",
          "normalized": "a()",
          "package": "libmpd",
          "partial": "Error",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:clearError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "close",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Core-Class.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close the connection",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "close",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of available commands.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "commands",
          "package": "libmpd",
          "signature": "m [String]",
          "source": "src/Network-MPD-Commands.html#commands",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of available commands",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "commands",
          "normalized": "a[String]",
          "package": "libmpd",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:commands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet consume mode\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "consume",
          "package": "libmpd",
          "signature": "Bool -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#consume",
          "type": "function"
        },
        "index": {
          "description": "Set consume mode",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "consume",
          "normalized": "Bool-\u003ea()",
          "package": "libmpd",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of entries matching a query.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "count",
          "package": "libmpd",
          "signature": "Query -\u003e m Count",
          "source": "src/Network-MPD-Commands.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count the number of entries matching query",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "count",
          "normalized": "Query-\u003ea Count",
          "package": "libmpd",
          "signature": "Query-\u003em Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet crossfading between songs.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "crossfade",
          "package": "libmpd",
          "signature": "Seconds -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#crossfade",
          "type": "function"
        },
        "index": {
          "description": "Set crossfading between songs",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "crossfade",
          "normalized": "Seconds-\u003ea()",
          "package": "libmpd",
          "signature": "Seconds-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:crossfade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the currently playing song.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "currentSong",
          "package": "libmpd",
          "signature": "m (Maybe Song)",
          "source": "src/Network-MPD-Commands.html#currentSong",
          "type": "function"
        },
        "index": {
          "description": "Get the currently playing song",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "currentSong",
          "package": "libmpd",
          "partial": "Song",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:currentSong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "dOutputEnabled",
          "package": "libmpd",
          "signature": "Bool",
          "source": "src/Network-MPD-Commands-Types.html#Device",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "dOutputEnabled",
          "package": "libmpd",
          "partial": "Output Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:dOutputEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput's ID number\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "dOutputID",
          "package": "libmpd",
          "signature": "Int",
          "source": "src/Network-MPD-Commands-Types.html#Device",
          "type": "function"
        },
        "index": {
          "description": "Output ID number",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "dOutputID",
          "package": "libmpd",
          "partial": "Output ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:dOutputID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput's name as defined in the MPD\n   configuration file\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "dOutputName",
          "package": "libmpd",
          "signature": "String",
          "source": "src/Network-MPD-Commands-Types.html#Device",
          "type": "function"
        },
        "index": {
          "description": "Output name as defined in the MPD configuration file",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "dOutputName",
          "package": "libmpd",
          "partial": "Output Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:dOutputName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetreive a list of decoder plugins with associated suffix and mime types.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "decoders",
          "package": "libmpd",
          "signature": "m [(String, [(String, String)])]",
          "source": "src/Network-MPD-Commands.html#decoders",
          "type": "function"
        },
        "index": {
          "description": "Retreive list of decoder plugins with associated suffix and mime types",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "decoders",
          "normalized": "a[(String,[(String,String)])]",
          "package": "libmpd",
          "signature": "m[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:decoders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "defaultCount",
          "package": "libmpd",
          "signature": "Count",
          "source": "src/Network-MPD-Commands-Types.html#defaultCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "defaultCount",
          "package": "libmpd",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "defaultDevice",
          "package": "libmpd",
          "signature": "Device",
          "source": "src/Network-MPD-Commands-Types.html#defaultDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "defaultDevice",
          "package": "libmpd",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "defaultSong",
          "package": "libmpd",
          "signature": "Path -\u003e Song",
          "source": "src/Network-MPD-Commands-Types.html#defaultSong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "defaultSong",
          "normalized": "Path-\u003eSong",
          "package": "libmpd",
          "partial": "Song",
          "signature": "Path-\u003eSong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultSong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "defaultStats",
          "package": "libmpd",
          "signature": "Stats",
          "source": "src/Network-MPD-Commands-Types.html#defaultStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "defaultStats",
          "package": "libmpd",
          "partial": "Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "defaultStatus",
          "package": "libmpd",
          "signature": "Status",
          "source": "src/Network-MPD-Commands-Types.html#defaultStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "defaultStatus",
          "package": "libmpd",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a song from the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "delete",
          "package": "libmpd",
          "signature": "Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove song from the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "delete",
          "normalized": "Int-\u003ea()",
          "package": "libmpd",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a song from the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "deleteId",
          "package": "libmpd",
          "signature": "Id -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#deleteId",
          "type": "function"
        },
        "index": {
          "description": "Remove song from the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "deleteId",
          "normalized": "Id-\u003ea()",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Id-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:deleteId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn off an output device.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "disableOutput",
          "package": "libmpd",
          "signature": "Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#disableOutput",
          "type": "function"
        },
        "index": {
          "description": "Turn off an output device",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "disableOutput",
          "normalized": "Int-\u003ea()",
          "package": "libmpd",
          "partial": "Output",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:disableOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn on an output device.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "enableOutput",
          "package": "libmpd",
          "signature": "Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#enableOutput",
          "type": "function"
        },
        "index": {
          "description": "Turn on an output device",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "enableOutput",
          "normalized": "Int-\u003ea()",
          "package": "libmpd",
          "partial": "Output",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:enableOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch the database for entries exactly matching a query.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "find",
          "package": "libmpd",
          "signature": "Query -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#find",
          "type": "function"
        },
        "index": {
          "description": "Search the database for entries exactly matching query",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "find",
          "normalized": "Query-\u003ea[Song]",
          "package": "libmpd",
          "signature": "Query-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds songs matching a query to the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "findAdd",
          "package": "libmpd",
          "signature": "Query -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#findAdd",
          "type": "function"
        },
        "index": {
          "description": "Adds songs matching query to the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "findAdd",
          "normalized": "Query-\u003ea()",
          "package": "libmpd",
          "partial": "Add",
          "signature": "Query-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:findAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until there is a noteworthy change in one or more of MPD's\n susbystems.\n\u003c/p\u003e\u003cp\u003eThe first argument is a list of subsystems that should be considered.  An\n empty list specifies that all subsystems should be considered.\n\u003c/p\u003e\u003cp\u003eA list of subsystems that have noteworthy changes is returned.\n\u003c/p\u003e\u003cp\u003eNote that running this command will block until either \u003ccode\u003e\u003ca\u003eidle\u003c/a\u003e\u003c/code\u003e returns or is\n cancelled by \u003ccode\u003e\u003ca\u003enoidle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "idle",
          "package": "libmpd",
          "signature": "[Subsystem] -\u003e m [Subsystem]",
          "source": "src/Network-MPD-Commands.html#idle",
          "type": "function"
        },
        "index": {
          "description": "Wait until there is noteworthy change in one or more of MPD susbystems The first argument is list of subsystems that should be considered An empty list specifies that all subsystems should be considered list of subsystems that have noteworthy changes is returned Note that running this command will block until either idle returns or is cancelled by noidle",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "idle",
          "normalized": "[Subsystem]-\u003ea[Subsystem]",
          "package": "libmpd",
          "signature": "[Subsystem]-\u003em[Subsystem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:idle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all tags of the specified type.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "list",
          "package": "libmpd",
          "signature": "Metadata-\u003e Query-\u003e m [Value]",
          "type": "function"
        },
        "index": {
          "description": "List all tags of the specified type",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "list",
          "normalized": "Metadata-\u003eQuery-\u003ea[Value]",
          "package": "libmpd",
          "signature": "Metadata-\u003eQuery-\u003em[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the songs (without metadata) in a database directory recursively.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "listAll",
          "package": "libmpd",
          "signature": "Path -\u003e m [Path]",
          "source": "src/Network-MPD-Commands.html#listAll",
          "type": "function"
        },
        "index": {
          "description": "List the songs without metadata in database directory recursively",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "listAll",
          "normalized": "Path-\u003ea[Path]",
          "package": "libmpd",
          "partial": "All",
          "signature": "Path-\u003em[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive \u003ccode\u003e\u003ca\u003elsInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "listAllInfo",
          "package": "libmpd",
          "signature": "Path -\u003e m [LsResult]",
          "source": "src/Network-MPD-Commands.html#listAllInfo",
          "type": "function"
        },
        "index": {
          "description": "Recursive lsInfo",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "listAllInfo",
          "normalized": "Path-\u003ea[LsResult]",
          "package": "libmpd",
          "partial": "All Info",
          "signature": "Path-\u003em[LsResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listAllInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of files in a given playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "listPlaylist",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e m [Path]",
          "source": "src/Network-MPD-Commands.html#listPlaylist",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of files in given playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "listPlaylist",
          "normalized": "PlaylistName-\u003ea[Path]",
          "package": "libmpd",
          "partial": "Playlist",
          "signature": "PlaylistName-\u003em[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve metadata for files in a given playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "listPlaylistInfo",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#listPlaylistInfo",
          "type": "function"
        },
        "index": {
          "description": "Retrieve metadata for files in given playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "listPlaylistInfo",
          "normalized": "PlaylistName-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Playlist Info",
          "signature": "PlaylistName-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listPlaylistInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetreive a list of stored playlists.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "listPlaylists",
          "package": "libmpd",
          "signature": "m [PlaylistName]",
          "source": "src/Network-MPD-Commands.html#listPlaylists",
          "type": "function"
        },
        "index": {
          "description": "Retreive list of stored playlists",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "listPlaylists",
          "normalized": "a[PlaylistName]",
          "package": "libmpd",
          "partial": "Playlists",
          "signature": "m[PlaylistName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an existing playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "load",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#load",
          "type": "function"
        },
        "index": {
          "description": "Load an existing playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "load",
          "normalized": "PlaylistName-\u003ea()",
          "package": "libmpd",
          "signature": "PlaylistName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-recursively list the contents of a database directory.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "lsInfo",
          "package": "libmpd",
          "signature": "Path -\u003e m [LsResult]",
          "source": "src/Network-MPD-Commands.html#lsInfo",
          "type": "function"
        },
        "index": {
          "description": "Non-recursively list the contents of database directory",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "lsInfo",
          "normalized": "Path-\u003ea[LsResult]",
          "package": "libmpd",
          "partial": "Info",
          "signature": "Path-\u003em[LsResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:lsInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a song to a given position in the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "move",
          "package": "libmpd",
          "signature": "Int -\u003e Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#move",
          "type": "function"
        },
        "index": {
          "description": "Move song to given position in the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "move",
          "normalized": "Int-\u003eInt-\u003ea()",
          "package": "libmpd",
          "signature": "Int-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a song from (songid) to (playlist index) in the playlist. If to is\n negative, it is relative to the current song in the playlist (if there is one).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "moveId",
          "package": "libmpd",
          "signature": "Id -\u003e Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#moveId",
          "type": "function"
        },
        "index": {
          "description": "Move song from songid to playlist index in the playlist If to is negative it is relative to the current song in the playlist if there is one",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "moveId",
          "normalized": "Id-\u003eInt-\u003ea()",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Id-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:moveId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay the next song.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "next",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#next",
          "type": "function"
        },
        "index": {
          "description": "Play the next song",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "next",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel \u003ccode\u003e\u003ca\u003eidle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "noidle",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#noidle",
          "type": "function"
        },
        "index": {
          "description": "Cancel idle",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "noidle",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:noidle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of unavailable (due to access restrictions) commands.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "notCommands",
          "package": "libmpd",
          "signature": "m [String]",
          "source": "src/Network-MPD-Commands.html#notCommands",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of unavailable due to access restrictions commands",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "notCommands",
          "normalized": "a[String]",
          "package": "libmpd",
          "partial": "Commands",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:notCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve information for all output devices.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "outputs",
          "package": "libmpd",
          "signature": "m [Device]",
          "source": "src/Network-MPD-Commands.html#outputs",
          "type": "function"
        },
        "index": {
          "description": "Retrieve information for all output devices",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "outputs",
          "normalized": "a[Device]",
          "package": "libmpd",
          "signature": "m[Device]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:outputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend password to server to authenticate session.\n Password is sent as plain text.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "password",
          "package": "libmpd",
          "signature": "String -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#password",
          "type": "function"
        },
        "index": {
          "description": "Send password to server to authenticate session Password is sent as plain text",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "password",
          "normalized": "String-\u003ea()",
          "package": "libmpd",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause playing.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "pause",
          "package": "libmpd",
          "signature": "Bool -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#pause",
          "type": "function"
        },
        "index": {
          "description": "Pause playing",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "pause",
          "normalized": "Bool-\u003ea()",
          "package": "libmpd",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the server is still responding.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "ping",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#ping",
          "type": "function"
        },
        "index": {
          "description": "Check that the server is still responding",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "ping",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of changed songs currently in the playlist since\n a given playlist version.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "plChanges",
          "package": "libmpd",
          "signature": "Integer -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#plChanges",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of changed songs currently in the playlist since given playlist version",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "plChanges",
          "normalized": "Integer-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Changes",
          "signature": "Integer-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:plChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eplChanges\u003c/a\u003e\u003c/code\u003e but only returns positions and ids.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "plChangesPosId",
          "package": "libmpd",
          "signature": "Integer -\u003e m [(Int, Id)]",
          "source": "src/Network-MPD-Commands.html#plChangesPosId",
          "type": "function"
        },
        "index": {
          "description": "Like plChanges but only returns positions and ids",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "plChangesPosId",
          "normalized": "Integer-\u003ea[(Int,Id)]",
          "package": "libmpd",
          "partial": "Changes Pos Id",
          "signature": "Integer-\u003em[(Int,Id)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:plChangesPosId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin/continue playing.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "play",
          "package": "libmpd",
          "signature": "Maybe Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#play",
          "type": "function"
        },
        "index": {
          "description": "Begin continue playing",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "play",
          "normalized": "Maybe Int-\u003ea()",
          "package": "libmpd",
          "signature": "Maybe Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a file with given id.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playId",
          "package": "libmpd",
          "signature": "Id -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#playId",
          "type": "function"
        },
        "index": {
          "description": "Play file with given id",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playId",
          "normalized": "Id-\u003ea()",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Id-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve file paths and positions of songs in the current playlist.\n Note that this command is only included for completeness sake; it's\n deprecated and likely to disappear at any time, please use \u003ccode\u003e\u003ca\u003eplaylistInfo\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlist",
          "package": "libmpd",
          "signature": "m [(Int, Path)]",
          "source": "src/Network-MPD-Commands.html#playlist",
          "type": "function"
        },
        "index": {
          "description": "Retrieve file paths and positions of songs in the current playlist Note that this command is only included for completeness sake it deprecated and likely to disappear at any time please use playlistInfo instead",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlist",
          "normalized": "a[(Int,Path)]",
          "package": "libmpd",
          "signature": "m[(Int,Path)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eplaylistAdd\u003c/a\u003e\u003c/code\u003e but returns a list of the files added.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistAdd",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e Path -\u003e m [Path]",
          "source": "src/Network-MPD-Commands.html#playlistAdd",
          "type": "function"
        },
        "index": {
          "description": "Like playlistAdd but returns list of the files added",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistAdd",
          "normalized": "PlaylistName-\u003ePath-\u003ea[Path]",
          "package": "libmpd",
          "partial": "Add",
          "signature": "PlaylistName-\u003ePath-\u003em[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a song (or a whole directory) to a stored playlist.\n Will create a new playlist if the one specified does not already exist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistAdd_",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e Path -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#playlistAdd_",
          "type": "function"
        },
        "index": {
          "description": "Add song or whole directory to stored playlist Will create new playlist if the one specified does not already exist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistAdd_",
          "normalized": "PlaylistName-\u003ePath-\u003ea()",
          "package": "libmpd",
          "partial": "Add",
          "signature": "PlaylistName-\u003ePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistAdd_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear a playlist. If the specified playlist does not exist, it will be\n created.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistClear",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#playlistClear",
          "type": "function"
        },
        "index": {
          "description": "Clear playlist If the specified playlist does not exist it will be created",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistClear",
          "normalized": "PlaylistName-\u003ea()",
          "package": "libmpd",
          "partial": "Clear",
          "signature": "PlaylistName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a song from a playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistDelete",
          "package": "libmpd",
          "signature": "PlaylistName-\u003e Integer-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Remove song from playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistDelete",
          "normalized": "PlaylistName-\u003eInteger-\u003ea()",
          "package": "libmpd",
          "partial": "Delete",
          "signature": "PlaylistName-\u003eInteger-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for songs in the current playlist with strict matching.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistFind",
          "package": "libmpd",
          "signature": "Query -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#playlistFind",
          "type": "function"
        },
        "index": {
          "description": "Search for songs in the current playlist with strict matching",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistFind",
          "normalized": "Query-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Find",
          "signature": "Query-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays a list of songs in the playlist.\n If id is specified, only its info is returned.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistId",
          "package": "libmpd",
          "signature": "Maybe Id -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#playlistId",
          "type": "function"
        },
        "index": {
          "description": "Displays list of songs in the playlist If id is specified only its info is returned",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistId",
          "normalized": "Maybe Id-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Maybe Id-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve metadata for songs in the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistInfo",
          "package": "libmpd",
          "signature": "Maybe (Int, Int) -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#playlistInfo",
          "type": "function"
        },
        "index": {
          "description": "Retrieve metadata for songs in the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistInfo",
          "normalized": "Maybe(Int,Int)-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Info",
          "signature": "Maybe(Int,Int)-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a song to a given position in the playlist specified.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistMove",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e Integer -\u003e Integer -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#playlistMove",
          "type": "function"
        },
        "index": {
          "description": "Move song to given position in the playlist specified",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistMove",
          "normalized": "PlaylistName-\u003eInteger-\u003eInteger-\u003ea()",
          "package": "libmpd",
          "partial": "Move",
          "signature": "PlaylistName-\u003eInteger-\u003eInteger-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch case-insensitively with partial matches for songs in the\n current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "playlistSearch",
          "package": "libmpd",
          "signature": "Query -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#playlistSearch",
          "type": "function"
        },
        "index": {
          "description": "Search case-insensitively with partial matches for songs in the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "playlistSearch",
          "normalized": "Query-\u003ea[Song]",
          "package": "libmpd",
          "partial": "Search",
          "signature": "Query-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay the previous song.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "previous",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#previous",
          "type": "function"
        },
        "index": {
          "description": "Play the previous song",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "previous",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:previous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet random playing.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "random",
          "package": "libmpd",
          "signature": "Bool -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#random",
          "type": "function"
        },
        "index": {
          "description": "Set random playing",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "random",
          "normalized": "Bool-\u003ea()",
          "package": "libmpd",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename an existing playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "rename",
          "package": "libmpd",
          "signature": "PlaylistName-\u003e PlaylistName-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Rename an existing playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "rename",
          "normalized": "PlaylistName-\u003ePlaylistName-\u003ea()",
          "package": "libmpd",
          "signature": "PlaylistName-\u003ePlaylistName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet repeating.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "repeat",
          "package": "libmpd",
          "signature": "Bool -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Set repeating",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "repeat",
          "normalized": "Bool-\u003ea()",
          "package": "libmpd",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the replay gain mode.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "replayGainMode",
          "package": "libmpd",
          "signature": "ReplayGainMode -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#replayGainMode",
          "type": "function"
        },
        "index": {
          "description": "Set the replay gain mode",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "replayGainMode",
          "normalized": "ReplayGainMode-\u003ea()",
          "package": "libmpd",
          "partial": "Gain Mode",
          "signature": "ReplayGainMode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:replayGainMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the replay gain options.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "replayGainStatus",
          "package": "libmpd",
          "signature": "m [String]",
          "source": "src/Network-MPD-Commands.html#replayGainStatus",
          "type": "function"
        },
        "index": {
          "description": "Get the replay gain options",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "replayGainStatus",
          "normalized": "a[String]",
          "package": "libmpd",
          "partial": "Gain Status",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:replayGainStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e but also rescans unmodified files.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "rescan",
          "package": "libmpd",
          "signature": "[Path] -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#rescan",
          "type": "function"
        },
        "index": {
          "description": "Like update but also rescans unmodified files",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "rescan",
          "normalized": "[Path]-\u003ea()",
          "package": "libmpd",
          "signature": "[Path]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:rescan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete existing playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "rm",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#rm",
          "type": "function"
        },
        "index": {
          "description": "Delete existing playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "rm",
          "normalized": "PlaylistName-\u003ea()",
          "package": "libmpd",
          "signature": "PlaylistName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "save",
          "package": "libmpd",
          "signature": "PlaylistName -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "save",
          "normalized": "PlaylistName-\u003ea()",
          "package": "libmpd",
          "signature": "PlaylistName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch the database using case insensitive matching.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "search",
          "package": "libmpd",
          "signature": "Query -\u003e m [Song]",
          "source": "src/Network-MPD-Commands.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search the database using case insensitive matching",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "search",
          "normalized": "Query-\u003ea[Song]",
          "package": "libmpd",
          "signature": "Query-\u003em[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek to some point in a song.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "seek",
          "package": "libmpd",
          "signature": "Int -\u003e Seconds -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#seek",
          "type": "function"
        },
        "index": {
          "description": "Seek to some point in song",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "seek",
          "normalized": "Int-\u003eSeconds-\u003ea()",
          "package": "libmpd",
          "signature": "Int-\u003eSeconds-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek to some point in a song (id version)\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "seekId",
          "package": "libmpd",
          "signature": "Id -\u003e Seconds -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#seekId",
          "type": "function"
        },
        "index": {
          "description": "Seek to some point in song id version",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "seekId",
          "normalized": "Id-\u003eSeconds-\u003ea()",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Id-\u003eSeconds-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:seekId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the volume (0-100 percent).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "setVolume",
          "package": "libmpd",
          "signature": "Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#setVolume",
          "type": "function"
        },
        "index": {
          "description": "Set the volume percent",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "setVolume",
          "normalized": "Int-\u003ea()",
          "package": "libmpd",
          "partial": "Volume",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:setVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd metadata tag value.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgAddTag",
          "package": "libmpd",
          "signature": "Metadata -\u003e Value -\u003e Song -\u003e Song",
          "source": "src/Network-MPD-Commands-Types.html#sgAddTag",
          "type": "function"
        },
        "index": {
          "description": "Add metadata tag value",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgAddTag",
          "normalized": "Metadata-\u003eValue-\u003eSong-\u003eSong",
          "package": "libmpd",
          "partial": "Add Tag",
          "signature": "Metadata-\u003eValue-\u003eSong-\u003eSong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgAddTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "sgFilePath",
          "package": "libmpd",
          "signature": "Path",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgFilePath",
          "package": "libmpd",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet list of specific tag type\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgGetTag",
          "package": "libmpd",
          "signature": "Metadata -\u003e Song -\u003e Maybe [Value]",
          "source": "src/Network-MPD-Commands-Types.html#sgGetTag",
          "type": "function"
        },
        "index": {
          "description": "Get list of specific tag type",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgGetTag",
          "normalized": "Metadata-\u003eSong-\u003eMaybe[Value]",
          "package": "libmpd",
          "partial": "Get Tag",
          "signature": "Metadata-\u003eSong-\u003eMaybe[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgGetTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eId in playlist\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgId",
          "package": "libmpd",
          "signature": "Maybe Id",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Id in playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgId",
          "package": "libmpd",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in playlist\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgIndex",
          "package": "libmpd",
          "signature": "Maybe Int",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Position in playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgIndex",
          "package": "libmpd",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast modification date\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgLastModified",
          "package": "libmpd",
          "signature": "Maybe UTCTime",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Last modification date",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgLastModified",
          "package": "libmpd",
          "partial": "Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgLastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the song in seconds\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgLength",
          "package": "libmpd",
          "signature": "Seconds",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Length of the song in seconds",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgLength",
          "package": "libmpd",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of available tags (multiple occurences of one tag type allowed)\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "sgTags",
          "package": "libmpd",
          "signature": "Map Metadata [Value]",
          "source": "src/Network-MPD-Commands-Types.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Map of available tags multiple occurences of one tag type allowed",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "sgTags",
          "normalized": "Map Metadata[Value]",
          "package": "libmpd",
          "partial": "Tags",
          "signature": "Map Metadata[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle the playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "shuffle",
          "package": "libmpd",
          "signature": "Maybe (Int, Int)-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Shuffle the playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "shuffle",
          "normalized": "Maybe(Int,Int)-\u003ea()",
          "package": "libmpd",
          "signature": "Maybe(Int,Int)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet single mode\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "single",
          "package": "libmpd",
          "signature": "Bool -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#single",
          "type": "function"
        },
        "index": {
          "description": "Set single mode",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "single",
          "normalized": "Bool-\u003ea()",
          "package": "libmpd",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSamplerate/bits/channels for the chosen output device\n   (see mpd.conf).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stAudio",
          "package": "libmpd",
          "signature": "(Int, Int, Int)",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Samplerate bits channels for the chosen output device see mpd.conf",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stAudio",
          "normalized": "(Int,Int,Int)",
          "package": "libmpd",
          "partial": "Audio",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitrate (in kilobytes per second) of playing song (if any).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stBitrate",
          "package": "libmpd",
          "signature": "Int",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Bitrate in kilobytes per second of playing song if any",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stBitrate",
          "package": "libmpd",
          "partial": "Bitrate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stBitrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, a song will be removed after it has been played.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stConsume",
          "package": "libmpd",
          "signature": "Bool",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "If True song will be removed after it has been played",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stConsume",
          "package": "libmpd",
          "partial": "Consume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stConsume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast error message (if any).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stError",
          "package": "libmpd",
          "signature": "Maybe String",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Last error message if any",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stError",
          "package": "libmpd",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMixRamp extra delay in seconds\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stMixRampDelay",
          "package": "libmpd",
          "signature": "Double",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "MixRamp extra delay in seconds",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stMixRampDelay",
          "package": "libmpd",
          "partial": "Mix Ramp Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stMixRampDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMixRamp threshold in dB\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stMixRampdB",
          "package": "libmpd",
          "signature": "Double",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "MixRamp threshold in dB",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stMixRampdB",
          "package": "libmpd",
          "partial": "Mix Rampd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stMixRampdB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNext song's playlist ID.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stNextSongID",
          "package": "libmpd",
          "signature": "Maybe Id",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Next song playlist ID",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stNextSongID",
          "package": "libmpd",
          "partial": "Next Song ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stNextSongID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNext song's position in the playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stNextSongPos",
          "package": "libmpd",
          "signature": "Maybe Int",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Next song position in the playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stNextSongPos",
          "package": "libmpd",
          "partial": "Next Song Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stNextSongPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of items in the current playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stPlaylistLength",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "The number of items in the current playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stPlaylistLength",
          "package": "libmpd",
          "partial": "Playlist Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stPlaylistLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value that is incremented by the server every time the\n   playlist changes.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stPlaylistVersion",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "value that is incremented by the server every time the playlist changes",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stPlaylistVersion",
          "package": "libmpd",
          "partial": "Playlist Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stPlaylistVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "stRandom",
          "package": "libmpd",
          "signature": "Bool",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stRandom",
          "package": "libmpd",
          "partial": "Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "stRepeat",
          "package": "libmpd",
          "signature": "Bool",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stRepeat",
          "package": "libmpd",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, MPD will play only one song and stop after finishing it.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stSingle",
          "package": "libmpd",
          "signature": "Bool",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "If True MPD will play only one song and stop after finishing it",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stSingle",
          "package": "libmpd",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent song's playlist ID.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stSongID",
          "package": "libmpd",
          "signature": "Maybe Id",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Current song playlist ID",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stSongID",
          "package": "libmpd",
          "partial": "Song ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stSongID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent song's position in the playlist.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stSongPos",
          "package": "libmpd",
          "signature": "Maybe Int",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Current song position in the playlist",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stSongPos",
          "package": "libmpd",
          "partial": "Song Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stSongPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MPD",
          "name": "stState",
          "package": "libmpd",
          "signature": "State",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stState",
          "package": "libmpd",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime elapsed/total time.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stTime",
          "package": "libmpd",
          "signature": "(Double, Seconds)",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Time elapsed total time",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stTime",
          "normalized": "(Double,Seconds)",
          "package": "libmpd",
          "partial": "Time",
          "signature": "(Double,Seconds)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob ID of currently running update (if any).\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stUpdatingDb",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Job ID of currently running update if any",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stUpdatingDb",
          "package": "libmpd",
          "partial": "Updating Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stUpdatingDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA percentage (0-100)\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stVolume",
          "package": "libmpd",
          "signature": "Int",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "percentage",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stVolume",
          "package": "libmpd",
          "partial": "Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrossfade time.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stXFadeWidth",
          "package": "libmpd",
          "signature": "Seconds",
          "source": "src/Network-MPD-Commands-Types.html#Status",
          "type": "function"
        },
        "index": {
          "description": "Crossfade time",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stXFadeWidth",
          "package": "libmpd",
          "partial": "XFade Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stXFadeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet server statistics.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stats",
          "package": "libmpd",
          "signature": "m Stats",
          "source": "src/Network-MPD-Commands.html#stats",
          "type": "function"
        },
        "index": {
          "description": "Get server statistics",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stats",
          "package": "libmpd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the server's status.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "status",
          "package": "libmpd",
          "signature": "m Status",
          "source": "src/Network-MPD-Commands.html#status",
          "type": "function"
        },
        "index": {
          "description": "Get the server status",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "status",
          "package": "libmpd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a sticker value from the specified object.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stickerDelete",
          "package": "libmpd",
          "signature": "ObjectType-\u003e String-\u003e String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Delete sticker value from the specified object",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stickerDelete",
          "normalized": "ObjectType-\u003eString-\u003eString-\u003ea()",
          "package": "libmpd",
          "partial": "Delete",
          "signature": "ObjectType-\u003eString-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches the sticker database for stickers with the specified name, below\n the specified path.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stickerFind",
          "package": "libmpd",
          "signature": "ObjectType-\u003e String-\u003e String-\u003e m [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "Searches the sticker database for stickers with the specified name below the specified path",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stickerFind",
          "normalized": "ObjectType-\u003eString-\u003eString-\u003ea[(String,String)]",
          "package": "libmpd",
          "partial": "Find",
          "signature": "ObjectType-\u003eString-\u003eString-\u003em[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a sticker value for the specified object.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stickerGet",
          "package": "libmpd",
          "signature": "ObjectType-\u003e String-\u003e String-\u003e m [String]",
          "type": "function"
        },
        "index": {
          "description": "Reads sticker value for the specified object",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stickerGet",
          "normalized": "ObjectType-\u003eString-\u003eString-\u003ea[String]",
          "package": "libmpd",
          "partial": "Get",
          "signature": "ObjectType-\u003eString-\u003eString-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists the stickers for the specified object.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stickerList",
          "package": "libmpd",
          "signature": "ObjectType-\u003e String-\u003e m [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "Lists the stickers for the specified object",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stickerList",
          "normalized": "ObjectType-\u003eString-\u003ea[(String,String)]",
          "package": "libmpd",
          "partial": "List",
          "signature": "ObjectType-\u003eString-\u003em[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a sticker value to the specified object.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stickerSet",
          "package": "libmpd",
          "signature": "ObjectType-\u003e String-\u003e String-\u003e String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Adds sticker value to the specified object",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stickerSet",
          "normalized": "ObjectType-\u003eString-\u003eString-\u003eString-\u003ea()",
          "package": "libmpd",
          "partial": "Set",
          "signature": "ObjectType-\u003eString-\u003eString-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop playing.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stop",
          "package": "libmpd",
          "signature": "m ()",
          "source": "src/Network-MPD-Commands.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stop playing",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stop",
          "normalized": "a()",
          "package": "libmpd",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of albums.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsAlbums",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Number of albums",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsAlbums",
          "package": "libmpd",
          "partial": "Albums",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of artists.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsArtists",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Number of artists",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsArtists",
          "package": "libmpd",
          "partial": "Artists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal play time of all the songs in\n   the database.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsDbPlaytime",
          "package": "libmpd",
          "signature": "Seconds",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Total play time of all the songs in the database",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsDbPlaytime",
          "package": "libmpd",
          "partial": "Db Playtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsDbPlaytime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast database update in UNIX time.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsDbUpdate",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Last database update in UNIX time",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsDbUpdate",
          "package": "libmpd",
          "partial": "Db Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsDbUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal playing time.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsPlaytime",
          "package": "libmpd",
          "signature": "Seconds",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Total playing time",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsPlaytime",
          "package": "libmpd",
          "partial": "Playtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsPlaytime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of songs.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsSongs",
          "package": "libmpd",
          "signature": "Integer",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Number of songs",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsSongs",
          "package": "libmpd",
          "partial": "Songs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsSongs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDaemon uptime in seconds.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "stsUptime",
          "package": "libmpd",
          "signature": "Seconds",
          "source": "src/Network-MPD-Commands-Types.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Daemon uptime in seconds",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "stsUptime",
          "package": "libmpd",
          "partial": "Uptime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsUptime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the positions of two songs.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "swap",
          "package": "libmpd",
          "signature": "Int -\u003e Int -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swap the positions of two songs",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "swap",
          "normalized": "Int-\u003eInt-\u003ea()",
          "package": "libmpd",
          "signature": "Int-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the positions of two songs (Id version\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "swapId",
          "package": "libmpd",
          "signature": "Id -\u003e Id -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#swapId",
          "type": "function"
        },
        "index": {
          "description": "Swap the positions of two songs Id version",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "swapId",
          "normalized": "Id-\u003eId-\u003ea()",
          "package": "libmpd",
          "partial": "Id",
          "signature": "Id-\u003eId-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:swapId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of available song metadata.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "tagTypes",
          "package": "libmpd",
          "signature": "m [String]",
          "source": "src/Network-MPD-Commands.html#tagTypes",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of available song metadata",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "tagTypes",
          "normalized": "a[String]",
          "package": "libmpd",
          "partial": "Types",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:tagTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert given value to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "toString",
          "package": "libmpd",
          "signature": "a -\u003e String",
          "source": "src/Network-MPD-Commands-Types.html#toString",
          "type": "method"
        },
        "index": {
          "description": "Convert given value to String",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "libmpd",
          "partial": "String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert given value to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "toText",
          "package": "libmpd",
          "signature": "a -\u003e Text",
          "source": "src/Network-MPD-Commands-Types.html#toText",
          "type": "method"
        },
        "index": {
          "description": "Convert given value to Text",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "toText",
          "normalized": "a-\u003eText",
          "package": "libmpd",
          "partial": "Text",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert given value an UTF-8 encoded \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "toUtf8",
          "package": "libmpd",
          "signature": "a -\u003e ByteString",
          "source": "src/Network-MPD-Commands-Types.html#toUtf8",
          "type": "method"
        },
        "index": {
          "description": "Convert given value an UTF-8 encoded ByteString",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "toUtf8",
          "normalized": "a-\u003eByteString",
          "package": "libmpd",
          "partial": "Utf",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:toUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the server's database.\n If no paths are given, all paths will be scanned.\n Unreadable or non-existent paths are silently ignored.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "update",
          "package": "libmpd",
          "signature": "[Path] -\u003e m ()",
          "source": "src/Network-MPD-Commands.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the server database If no paths are given all paths will be scanned Unreadable or non-existent paths are silently ignored",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "update",
          "normalized": "[Path]-\u003ea()",
          "package": "libmpd",
          "signature": "[Path]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of supported urlhandlers.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "urlHandlers",
          "package": "libmpd",
          "signature": "m [String]",
          "source": "src/Network-MPD-Commands.html#urlHandlers",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of supported urlhandlers",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "urlHandlers",
          "normalized": "a[String]",
          "package": "libmpd",
          "partial": "Handlers",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:urlHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for \u003ccode\u003e\u003ca\u003ewithMPDEx\u003c/a\u003e\u003c/code\u003e that uses localhost:6600 as the default\n host:port, or whatever is found in the environment variables MPD_HOST and\n MPD_PORT. If MPD_HOST is of the form \"password@host\" the password\n will be supplied as well.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e withMPD $ play Nothing\n withMPD $ add_ \"tool\" \u003e\u003e play Nothing \u003e\u003e currentSong\n\u003c/pre\u003e",
          "module": "Network.MPD",
          "name": "withMPD",
          "package": "libmpd",
          "signature": "MPD a -\u003e IO (Response a)",
          "source": "src/Network-MPD.html#withMPD",
          "type": "function"
        },
        "index": {
          "description": "wrapper for withMPDEx that uses localhost as the default host port or whatever is found in the environment variables MPD HOST and MPD PORT If MPD HOST is of the form password@host the password will be supplied as well Examples withMPD play Nothing withMPD add tool play Nothing currentSong",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "withMPD",
          "normalized": "MPD a-\u003eIO(Response a)",
          "package": "libmpd",
          "partial": "MPD",
          "signature": "MPD a-\u003eIO(Response a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:withMPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithMPD\u003c/a\u003e\u003c/code\u003e, but takes optional arguments that override MPD_HOST and\n MPD_PORT.\n\u003c/p\u003e\u003cp\u003eThis is e.g. useful for clients that optionally take \u003ccode\u003e--port\u003c/code\u003e and \u003ccode\u003e--host\u003c/code\u003e\n as command line arguments, and fall back to \u003ccode\u003e\u003ca\u003ewithMPD\u003c/a\u003e\u003c/code\u003e's defaults if those\n arguments are not given.\n\u003c/p\u003e",
          "module": "Network.MPD",
          "name": "withMPD_",
          "package": "libmpd",
          "signature": "Maybe String-\u003e Maybe String-\u003e MPD a-\u003e IO (Response a)",
          "type": "function"
        },
        "index": {
          "description": "Same as withMPD but takes optional arguments that override MPD HOST and MPD PORT This is e.g useful for clients that optionally take port and host as command line arguments and fall back to withMPD defaults if those arguments are not given",
          "hierarchy": "Network MPD",
          "module": "Network.MPD",
          "name": "withMPD_",
          "normalized": "Maybe String-\u003eMaybe String-\u003eMPD a-\u003eIO(Response a)",
          "package": "libmpd",
          "partial": "MPD",
          "signature": "Maybe String-\u003eMaybe String-\u003eMPD a-\u003eIO(Response a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:withMPD_"
      }
    }
  ]
]