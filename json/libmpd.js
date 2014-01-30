[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtensions and shortcuts to the standard MPD command set.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "module",
        "fct-source": "src/Network-MPD-Commands-Extensions.html",
        "fct-type": "module",
        "title": "Extensions"
      },
      "index": {
        "description": "Extensions and shortcuts to the standard MPD command set",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "Extensions",
        "normalized": "",
        "package": "libmpd",
        "partial": "Extensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:addMany",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of songs/folders to a playlist.\n Should be more efficient than running \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e many times.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e [Path] -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#addMany",
        "fct-type": "function",
        "title": "addMany"
      },
      "index": {
        "description": "Add list of songs folders to playlist Should be more efficient than running add many times",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "addMany",
        "normalized": "PlaylistName-\u003e[Path]-\u003ea()",
        "package": "libmpd",
        "partial": "Many",
        "signature": "PlaylistName-\u003e[Path]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:getPlaylist",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current playlist.\n Equivalent to \u003ccode\u003eplaylistinfo Nothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "m [Song]",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#getPlaylist",
        "fct-type": "function",
        "title": "getPlaylist"
      },
      "index": {
        "description": "Retrieve the current playlist Equivalent to playlistinfo Nothing",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "getPlaylist",
        "normalized": "a[Song]",
        "package": "libmpd",
        "partial": "Playlist",
        "signature": "m[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:listAlbum",
      "description": {
        "fct-descr": "\u003cp\u003eList the songs in an album of some artist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "Artist -\u003e Album -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#listAlbum",
        "fct-type": "function",
        "title": "listAlbum"
      },
      "index": {
        "description": "List the songs in an album of some artist",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "listAlbum",
        "normalized": "Artist-\u003eAlbum-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Album",
        "signature": "Artist-\u003eAlbum-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:listAlbums",
      "description": {
        "fct-descr": "\u003cp\u003eList the albums in the database, optionally matching a given\n artist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Artist -\u003e m [Album]",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#listAlbums",
        "fct-type": "function",
        "title": "listAlbums"
      },
      "index": {
        "description": "List the albums in the database optionally matching given artist",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "listAlbums",
        "normalized": "Maybe Artist-\u003ea[Album]",
        "package": "libmpd",
        "partial": "Albums",
        "signature": "Maybe Artist-\u003em[Album]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:listArtists",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a list of songs from a playlist.\n If there is a duplicate then no further songs will be deleted, so\n take care to avoid them (see \u003ccode\u003eprune\u003c/code\u003e for this).\n\u003c/p\u003e\u003cp\u003eList the artists in the database.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "m [Artist]",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#listArtists",
        "fct-type": "function",
        "title": "listArtists"
      },
      "index": {
        "description": "Delete list of songs from playlist If there is duplicate then no further songs will be deleted so take care to avoid them see prune for this List the artists in the database",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "listArtists",
        "normalized": "a[Artist]",
        "package": "libmpd",
        "partial": "Artists",
        "signature": "m[Artist]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:toggle",
      "description": {
        "fct-descr": "\u003cp\u003eToggles play/pause. Plays if stopped.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#toggle",
        "fct-type": "function",
        "title": "toggle"
      },
      "index": {
        "description": "Toggles play pause Plays if stopped",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "toggle",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:updateId",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, but returns the update job id.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "[Path] -\u003e m Integer",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#updateId",
        "fct-type": "function",
        "title": "updateId"
      },
      "index": {
        "description": "Like update but returns the update job id",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "updateId",
        "normalized": "[Path]-\u003ea Integer",
        "package": "libmpd",
        "partial": "Id",
        "signature": "[Path]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Commands-Extensions.html#v:volume",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease or decrease volume by a given percent, e.g.\n 'volume 10' will increase the volume by 10 percent, while\n 'volume (-10)' will decrease it by the same amount.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Commands.Extensions",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands-Extensions.html#volume",
        "fct-type": "function",
        "title": "volume"
      },
      "index": {
        "description": "Increase or decrease volume by given percent e.g volume will increase the volume by percent while volume will decrease it by the same amount",
        "hierarchy": "Network MPD Commands Extensions",
        "module": "Network.MPD.Commands.Extensions",
        "name": "volume",
        "normalized": "Int-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core datatypes and operations are defined here, including the\n primary instance of the \u003ccode\u003e\u003ca\u003eMonadMPD\u003c/a\u003e\u003c/code\u003e class, \u003ccode\u003e\u003ca\u003eMPD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "module",
        "fct-source": "src/Network-MPD-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "The core datatypes and operations are defined here including the primary instance of the MonadMPD class MPD",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Core",
        "normalized": "",
        "package": "libmpd",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:ACKType",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents various MPD errors (aka. ACKs).\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "data",
        "title": "ACKType"
      },
      "index": {
        "description": "Represents various MPD errors aka ACKs",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "ACKType",
        "normalized": "",
        "package": "libmpd",
        "partial": "ACKType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Host",
      "description": {
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core.html#Host",
        "fct-type": "type",
        "title": "Host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Host",
        "normalized": "",
        "package": "libmpd",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:MPD",
      "description": {
        "fct-descr": "\u003cp\u003eThe main implementation of an MPD client.  It actually connects\n   to a server and interacts with it.\n\u003c/p\u003e\u003cp\u003eTo use the error throwing/catching capabilities:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Error (throwError, catchError)\n\u003c/pre\u003e\u003cp\u003eTo run IO actions within the MPD monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Trans (liftIO)\n\u003c/pre\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Core.html#MPD",
        "fct-type": "data",
        "title": "MPD"
      },
      "index": {
        "description": "The main implementation of an MPD client It actually connects to server and interacts with it To use the error throwing catching capabilities import Control.Monad.Error throwError catchError To run IO actions within the MPD monad import Control.Monad.Trans liftIO",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "MPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:MPDError",
      "description": {
        "fct-descr": "\u003cp\u003eThe MPDError type is used to signal errors, both from the MPD and\n otherwise.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "data",
        "title": "MPDError"
      },
      "index": {
        "description": "The MPDError type is used to signal errors both from the MPD and otherwise",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "MPDError",
        "normalized": "",
        "package": "libmpd",
        "partial": "MPDError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:MonadMPD",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass to allow for multiple implementations of a connection\n   to an MPD server.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "class",
        "fct-source": "src/Network-MPD-Core-Class.html#MonadMPD",
        "fct-type": "class",
        "title": "MonadMPD"
      },
      "index": {
        "description": "typeclass to allow for multiple implementations of connection to an MPD server",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "MonadMPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "Monad MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Password",
      "description": {
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core-Class.html#Password",
        "fct-type": "type",
        "title": "Password"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Password",
        "normalized": "",
        "package": "libmpd",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Port",
      "description": {
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Port",
        "normalized": "",
        "package": "libmpd",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eA response is either an \u003ccode\u003e\u003ca\u003eMPDError\u003c/a\u003e\u003c/code\u003e or some result.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core.html#Response",
        "fct-type": "type",
        "title": "Response"
      },
      "index": {
        "description": "response is either an MPDError or some result",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Response",
        "normalized": "",
        "package": "libmpd",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:ACK",
      "description": {
        "fct-descr": "\u003cp\u003eACK type and a message from the\n   server\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "ACK ACKType String",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "ACK"
      },
      "index": {
        "description": "ACK type and message from the server",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "ACK",
        "normalized": "",
        "package": "libmpd",
        "partial": "ACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Auth",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication required (ACK 4)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "Auth",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "Auth"
      },
      "index": {
        "description": "Authentication required ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Auth",
        "normalized": "",
        "package": "libmpd",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Busy",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate already running (ACK 54)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "Busy",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "Busy"
      },
      "index": {
        "description": "Update already running ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Busy",
        "normalized": "",
        "package": "libmpd",
        "partial": "Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Custom",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for misc. errors\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "Custom String",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "Used for misc errors",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Custom",
        "normalized": "",
        "package": "libmpd",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:FileExists",
      "description": {
        "fct-descr": "\u003cp\u003eFile already exists (ACK 56)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "FileExists",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "FileExists"
      },
      "index": {
        "description": "File already exists ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "FileExists",
        "normalized": "",
        "package": "libmpd",
        "partial": "File Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:FileNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eFile or directory not found ACK 50)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "FileNotFound",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "FileNotFound"
      },
      "index": {
        "description": "File or directory not found ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "FileNotFound",
        "normalized": "",
        "package": "libmpd",
        "partial": "File Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:InvalidArgument",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid argument passed (ACK 2)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "InvalidArgument",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "InvalidArgument"
      },
      "index": {
        "description": "Invalid argument passed ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "InvalidArgument",
        "normalized": "",
        "package": "libmpd",
        "partial": "Invalid Argument",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:InvalidPassword",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid password supplied (ACK 3)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "InvalidPassword",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "InvalidPassword"
      },
      "index": {
        "description": "Invalid password supplied ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "InvalidPassword",
        "normalized": "",
        "package": "libmpd",
        "partial": "Invalid Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:NoMPD",
      "description": {
        "fct-descr": "\u003cp\u003eMPD not responding\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "NoMPD",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "NoMPD"
      },
      "index": {
        "description": "MPD not responding",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "NoMPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "No MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:NotPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eAn operation requiring playback\n   got interrupted (ACK 55)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "NotPlaying",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "NotPlaying"
      },
      "index": {
        "description": "An operation requiring playback got interrupted ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "NotPlaying",
        "normalized": "",
        "package": "libmpd",
        "partial": "Not Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:PlaylistLoad",
      "description": {
        "fct-descr": "\u003cp\u003ePlaylist loading failed (ACK 53)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistLoad",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "PlaylistLoad"
      },
      "index": {
        "description": "Playlist loading failed ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "PlaylistLoad",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Load",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:PlaylistMax",
      "description": {
        "fct-descr": "\u003cp\u003ePlaylist at maximum size (ACK 51)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistMax",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "PlaylistMax"
      },
      "index": {
        "description": "Playlist at maximum size ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "PlaylistMax",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:System",
      "description": {
        "fct-descr": "\u003cp\u003eA system error (ACK 52)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "System",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "System"
      },
      "index": {
        "description": "system error ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "System",
        "normalized": "",
        "package": "libmpd",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:TimedOut",
      "description": {
        "fct-descr": "\u003cp\u003eThe connection timed out\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "TimedOut",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "TimedOut"
      },
      "index": {
        "description": "The connection timed out",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "TimedOut",
        "normalized": "",
        "package": "libmpd",
        "partial": "Timed Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:Unexpected",
      "description": {
        "fct-descr": "\u003cp\u003eMPD returned an unexpected response.\n   This is a bug, either in the library or\n   in MPD itself.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "Unexpected String",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "Unexpected"
      },
      "index": {
        "description": "MPD returned an unexpected response This is bug either in the library or in MPD itself",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "Unexpected",
        "normalized": "",
        "package": "libmpd",
        "partial": "Unexpected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:UnknownACK",
      "description": {
        "fct-descr": "\u003cp\u003eAn unknown ACK (aka. bug)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "UnknownACK",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "UnknownACK"
      },
      "index": {
        "description": "An unknown ACK aka bug",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "UnknownACK",
        "normalized": "",
        "package": "libmpd",
        "partial": "Unknown ACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:UnknownCommand",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown command (ACK 5)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "UnknownCommand",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "UnknownCommand"
      },
      "index": {
        "description": "Unknown command ACK",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "UnknownCommand",
        "normalized": "",
        "package": "libmpd",
        "partial": "Unknown Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Core-Class.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "Close the connection",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "close",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getHandle",
      "description": {
        "fct-descr": "\u003cp\u003eGet underlying Handle (or Nothing, if no connection is estabilished)\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "m (Maybe Handle)",
        "fct-source": "src/Network-MPD-Core-Class.html#getHandle",
        "fct-type": "method",
        "title": "getHandle"
      },
      "index": {
        "description": "Get underlying Handle or Nothing if no connection is estabilished",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "getHandle",
        "normalized": "",
        "package": "libmpd",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getPassword",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a password to send to the server should it ask for\n   one.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "m Password",
        "fct-source": "src/Network-MPD-Core-Class.html#getPassword",
        "fct-type": "method",
        "title": "getPassword"
      },
      "index": {
        "description": "Produce password to send to the server should it ask for one",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "getPassword",
        "normalized": "",
        "package": "libmpd",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getResponse",
      "description": {
        "fct-descr": "\u003cp\u003eSend a command to the MPD server and return the result.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "String -\u003e m [ByteString]",
        "fct-source": "src/Network-MPD-Core.html#getResponse",
        "fct-type": "function",
        "title": "getResponse"
      },
      "index": {
        "description": "Send command to the MPD server and return the result",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "getResponse",
        "normalized": "String-\u003ea[ByteString]",
        "package": "libmpd",
        "partial": "Response",
        "signature": "String-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:getVersion",
      "description": {
        "fct-descr": "\u003cp\u003eGet MPD protocol version\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "m (Int, Int, Int)",
        "fct-source": "src/Network-MPD-Core-Class.html#getVersion",
        "fct-type": "method",
        "title": "getVersion"
      },
      "index": {
        "description": "Get MPD protocol version",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "getVersion",
        "normalized": "a(Int,Int,Int)",
        "package": "libmpd",
        "partial": "Version",
        "signature": "m(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003eKill the server. Obviously, the connection is then invalid.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Core.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "Kill the server Obviously the connection is then invalid",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "kill",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eOpen (or re-open) a connection to the MPD server.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Core-Class.html#open",
        "fct-type": "method",
        "title": "open"
      },
      "index": {
        "description": "Open or re-open connection to the MPD server",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "open",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a string to the server and return its response.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "String -\u003e m [ByteString]",
        "fct-source": "src/Network-MPD-Core-Class.html#send",
        "fct-type": "method",
        "title": "send"
      },
      "index": {
        "description": "Send string to the server and return its response",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "send",
        "normalized": "String-\u003ea[ByteString]",
        "package": "libmpd",
        "partial": "",
        "signature": "String-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:setPassword",
      "description": {
        "fct-descr": "\u003cp\u003eAlters password to be sent to the server.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "Password -\u003e m ()",
        "fct-source": "src/Network-MPD-Core-Class.html#setPassword",
        "fct-type": "method",
        "title": "setPassword"
      },
      "index": {
        "description": "Alters password to be sent to the server",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "setPassword",
        "normalized": "Password-\u003ea()",
        "package": "libmpd",
        "partial": "Password",
        "signature": "Password-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD-Core.html#v:withMPDEx",
      "description": {
        "fct-descr": "\u003cp\u003eThe most configurable API for running an MPD action.\n\u003c/p\u003e",
        "fct-module": "Network.MPD.Core",
        "fct-package": "libmpd",
        "fct-signature": "Host -\u003e Port -\u003e Password -\u003e MPD a -\u003e IO (Response a)",
        "fct-source": "src/Network-MPD-Core.html#withMPDEx",
        "fct-type": "function",
        "title": "withMPDEx"
      },
      "index": {
        "description": "The most configurable API for running an MPD action",
        "hierarchy": "Network MPD Core",
        "module": "Network.MPD.Core",
        "name": "withMPDEx",
        "normalized": "Host-\u003ePort-\u003ePassword-\u003eMPD a-\u003eIO(Response a)",
        "package": "libmpd",
        "partial": "MPDEx",
        "signature": "Host-\u003ePort-\u003ePassword-\u003eMPD a-\u003eIO(Response a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn MPD client library. MPD is a daemon for playing music that is\n controlled over a network socket. Its site is at \u003ca\u003ehttp://www.musicpd.org/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo use the library, do:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import qualified Network.MPD as MPD\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "module",
        "fct-source": "src/Network-MPD.html",
        "fct-type": "module",
        "title": "MPD"
      },
      "index": {
        "description": "An MPD client library MPD is daemon for playing music that is controlled over network socket Its site is at http www.musicpd.org To use the library do LANGUAGE OverloadedStrings import qualified Network.MPD as MPD",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ACKType",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents various MPD errors (aka. ACKs).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "data",
        "title": "ACKType"
      },
      "index": {
        "description": "Represents various MPD errors aka ACKs",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "ACKType",
        "normalized": "",
        "package": "libmpd",
        "partial": "ACKType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Album",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Commands-Types.html#Album",
        "fct-type": "type",
        "title": "Album"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Album",
        "normalized": "",
        "package": "libmpd",
        "partial": "Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Artist",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Commands-Types.html#Artist",
        "fct-type": "type",
        "title": "Artist"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Artist",
        "normalized": "",
        "package": "libmpd",
        "partial": "Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Count",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the result of running \u003ccode\u003ecount\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Count",
        "fct-type": "data",
        "title": "Count"
      },
      "index": {
        "description": "Represents the result of running count",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Count",
        "normalized": "",
        "package": "libmpd",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Device",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents an output device.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Device",
        "fct-type": "data",
        "title": "Device"
      },
      "index": {
        "description": "Represents an output device",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Device",
        "normalized": "",
        "package": "libmpd",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Host",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core.html#Host",
        "fct-type": "type",
        "title": "Host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Host",
        "normalized": "",
        "package": "libmpd",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Id",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "newtype",
        "fct-source": "src/Network-MPD-Commands-Types.html#Id",
        "fct-type": "newtype",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Id",
        "normalized": "",
        "package": "libmpd",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:LsResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of the lsInfo operation\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#LsResult",
        "fct-type": "data",
        "title": "LsResult"
      },
      "index": {
        "description": "Result of the lsInfo operation",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "LsResult",
        "normalized": "",
        "package": "libmpd",
        "partial": "Ls Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:MPD",
      "description": {
        "fct-descr": "\u003cp\u003eThe main implementation of an MPD client.  It actually connects\n   to a server and interacts with it.\n\u003c/p\u003e\u003cp\u003eTo use the error throwing/catching capabilities:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Error (throwError, catchError)\n\u003c/pre\u003e\u003cp\u003eTo run IO actions within the MPD monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Trans (liftIO)\n\u003c/pre\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Core.html#MPD",
        "fct-type": "data",
        "title": "MPD"
      },
      "index": {
        "description": "The main implementation of an MPD client It actually connects to server and interacts with it To use the error throwing catching capabilities import Control.Monad.Error throwError catchError To run IO actions within the MPD monad import Control.Monad.Trans liftIO",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:MPDError",
      "description": {
        "fct-descr": "\u003cp\u003eThe MPDError type is used to signal errors, both from the MPD and\n otherwise.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "data",
        "title": "MPDError"
      },
      "index": {
        "description": "The MPDError type is used to signal errors both from the MPD and otherwise",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MPDError",
        "normalized": "",
        "package": "libmpd",
        "partial": "MPDError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Metadata",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable metadata types/scope modifiers, used for searching the\n database for entries with certain metadata values.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "data",
        "title": "Metadata"
      },
      "index": {
        "description": "Available metadata types scope modifiers used for searching the database for entries with certain metadata values",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Metadata",
        "normalized": "",
        "package": "libmpd",
        "partial": "Metadata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:MonadMPD",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass to allow for multiple implementations of a connection\n   to an MPD server.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "class",
        "fct-source": "src/Network-MPD-Core-Class.html#MonadMPD",
        "fct-type": "class",
        "title": "MonadMPD"
      },
      "index": {
        "description": "typeclass to allow for multiple implementations of connection to an MPD server",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MonadMPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "Monad MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ObjectType",
      "description": {
        "fct-descr": "\u003cp\u003eObject types.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#ObjectType",
        "fct-type": "data",
        "title": "ObjectType"
      },
      "index": {
        "description": "Object types",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "ObjectType",
        "normalized": "",
        "package": "libmpd",
        "partial": "Object Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Password",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core-Class.html#Password",
        "fct-type": "type",
        "title": "Password"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Password",
        "normalized": "",
        "package": "libmpd",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for commands which require a path within the database.\n If empty, the root path is used.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "newtype",
        "fct-source": "src/Network-MPD-Commands-Types.html#Path",
        "fct-type": "newtype",
        "title": "Path"
      },
      "index": {
        "description": "Used for commands which require path within the database If empty the root path is used",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Path",
        "normalized": "",
        "package": "libmpd",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:PlaylistName",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for commands which require a playlist name.\n If empty, the current playlist is used.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "newtype",
        "fct-source": "src/Network-MPD-Commands-Types.html#PlaylistName",
        "fct-type": "newtype",
        "title": "PlaylistName"
      },
      "index": {
        "description": "Used for commands which require playlist name If empty the current playlist is used",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "PlaylistName",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Port",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Port",
        "normalized": "",
        "package": "libmpd",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eAn interface for creating MPD queries.\n\u003c/p\u003e\u003cp\u003eFor example, to match any song where the value of artist is \"Foo\", we\n use:\n\u003c/p\u003e\u003cpre\u003e Artist =? \"Foo\"\n\u003c/pre\u003e\u003cp\u003eWe can also compose queries, thus narrowing the search. For example, to\n match any song where the value of artist is \"Foo\" and the value of album\n is \"Bar\", we use:\n\u003c/p\u003e\u003cpre\u003e Artist =? \"Foo\" \u003c&\u003e Album =? \"Bar\"\n\u003c/pre\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "An interface for creating MPD queries For example to match any song where the value of artist is Foo we use Artist Foo We can also compose queries thus narrowing the search For example to match any song where the value of artist is Foo and the value of album is Bar we use Artist Foo Album Bar",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Query",
        "normalized": "",
        "package": "libmpd",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ReplayGainMode",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
        "fct-type": "data",
        "title": "ReplayGainMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "ReplayGainMode",
        "normalized": "",
        "package": "libmpd",
        "partial": "Replay Gain Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eA response is either an \u003ccode\u003e\u003ca\u003eMPDError\u003c/a\u003e\u003c/code\u003e or some result.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Core.html#Response",
        "fct-type": "type",
        "title": "Response"
      },
      "index": {
        "description": "response is either an MPDError or some result",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Response",
        "normalized": "",
        "package": "libmpd",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Seconds",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Commands-Types.html#Seconds",
        "fct-type": "type",
        "title": "Seconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Seconds",
        "normalized": "",
        "package": "libmpd",
        "partial": "Seconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Song",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a single song item.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "data",
        "title": "Song"
      },
      "index": {
        "description": "Represents single song item",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Song",
        "normalized": "",
        "package": "libmpd",
        "partial": "Song",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the different playback states.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "Represents the different playback states",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "State",
        "normalized": "",
        "package": "libmpd",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Stats",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for database statistics.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "data",
        "title": "Stats"
      },
      "index": {
        "description": "Container for database statistics",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Stats",
        "normalized": "",
        "package": "libmpd",
        "partial": "Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for MPD status.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Container for MPD status",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Status",
        "normalized": "",
        "package": "libmpd",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Subsystem",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the various MPD subsystems.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "data",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "data",
        "title": "Subsystem"
      },
      "index": {
        "description": "Represents the various MPD subsystems",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Subsystem",
        "normalized": "",
        "package": "libmpd",
        "partial": "Subsystem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Title",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "type",
        "fct-source": "src/Network-MPD-Commands-Types.html#Title",
        "fct-type": "type",
        "title": "Title"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Title",
        "normalized": "",
        "package": "libmpd",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:ToString",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for values that can be converted to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "class",
        "fct-source": "src/Network-MPD-Commands-Types.html#ToString",
        "fct-type": "class",
        "title": "ToString"
      },
      "index": {
        "description": "type class for values that can be converted to String",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "ToString",
        "normalized": "",
        "package": "libmpd",
        "partial": "To String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA metadata value.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "newtype",
        "fct-source": "src/Network-MPD-Commands-Types.html#Value",
        "fct-type": "newtype",
        "title": "Value"
      },
      "index": {
        "description": "metadata value",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Value",
        "normalized": "",
        "package": "libmpd",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:-60--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine queries.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e Query -\u003e Query",
        "fct-source": "src/Network-MPD-Commands-Query.html#%3C%26%3E",
        "fct-type": "function",
        "title": "(\u003c&\u003e)"
      },
      "index": {
        "description": "Combine queries",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "(\u003c&\u003e) \u003c&\u003e",
        "normalized": "Query-\u003eQuery-\u003eQuery",
        "package": "libmpd",
        "partial": "",
        "signature": "Query-\u003eQuery-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:-61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a query.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Metadata -\u003e Value -\u003e Query",
        "fct-source": "src/Network-MPD-Commands-Query.html#%3D%3F",
        "fct-type": "function",
        "title": "(=?)"
      },
      "index": {
        "description": "Create query",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "(=?) =?",
        "normalized": "Metadata-\u003eValue-\u003eQuery",
        "package": "libmpd",
        "partial": "",
        "signature": "Metadata-\u003eValue-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:ACK",
      "description": {
        "fct-descr": "\u003cp\u003eACK type and a message from the\n   server\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ACK ACKType String",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "ACK"
      },
      "index": {
        "description": "ACK type and message from the server",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "ACK",
        "normalized": "",
        "package": "libmpd",
        "partial": "ACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Album",
      "description": {
        "fct-descr": "\u003cp\u003eArtistSort\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Album",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Album"
      },
      "index": {
        "description": "ArtistSort",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Album",
        "normalized": "",
        "package": "libmpd",
        "partial": "Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:AlbumMode",
      "description": {
        "fct-descr": "\u003cp\u003ePer album mode\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "AlbumMode",
        "fct-source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
        "fct-type": "function",
        "title": "AlbumMode"
      },
      "index": {
        "description": "Per album mode",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "AlbumMode",
        "normalized": "",
        "package": "libmpd",
        "partial": "Album Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Artist",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Artist",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Artist"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Artist",
        "normalized": "",
        "package": "libmpd",
        "partial": "Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Auth",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication required (ACK 4)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Auth",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "Auth"
      },
      "index": {
        "description": "Authentication required ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Auth",
        "normalized": "",
        "package": "libmpd",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Busy",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate already running (ACK 54)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Busy",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "Busy"
      },
      "index": {
        "description": "Update already running ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Busy",
        "normalized": "",
        "package": "libmpd",
        "partial": "Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Composer",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Composer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Composer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Composer",
        "normalized": "",
        "package": "libmpd",
        "partial": "Composer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Count",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Count",
        "fct-source": "src/Network-MPD-Commands-Types.html#Count",
        "fct-type": "function",
        "title": "Count"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Count",
        "normalized": "",
        "package": "libmpd",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Custom",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for misc. errors\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Custom String",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "Used for misc errors",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Custom",
        "normalized": "",
        "package": "libmpd",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:DatabaseS",
      "description": {
        "fct-descr": "\u003cp\u003eThe song database\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "DatabaseS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "DatabaseS"
      },
      "index": {
        "description": "The song database",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "DatabaseS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Date",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Date",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Date",
        "normalized": "",
        "package": "libmpd",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Device",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Device",
        "fct-source": "src/Network-MPD-Commands-Types.html#Device",
        "fct-type": "function",
        "title": "Device"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Device",
        "normalized": "",
        "package": "libmpd",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Disc",
      "description": {
        "fct-descr": "\u003cp\u003eComment\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Disc",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Disc"
      },
      "index": {
        "description": "Comment",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Disc",
        "normalized": "",
        "package": "libmpd",
        "partial": "Disc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:FileExists",
      "description": {
        "fct-descr": "\u003cp\u003eFile already exists (ACK 56)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "FileExists",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "FileExists"
      },
      "index": {
        "description": "File already exists ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "FileExists",
        "normalized": "",
        "package": "libmpd",
        "partial": "File Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:FileNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eFile or directory not found ACK 50)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "FileNotFound",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "FileNotFound"
      },
      "index": {
        "description": "File or directory not found ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "FileNotFound",
        "normalized": "",
        "package": "libmpd",
        "partial": "File Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Genre",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Genre",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Genre"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Genre",
        "normalized": "",
        "package": "libmpd",
        "partial": "Genre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Id",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Id Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Id",
        "normalized": "",
        "package": "libmpd",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:InvalidArgument",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid argument passed (ACK 2)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "InvalidArgument",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "InvalidArgument"
      },
      "index": {
        "description": "Invalid argument passed ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "InvalidArgument",
        "normalized": "",
        "package": "libmpd",
        "partial": "Invalid Argument",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:InvalidPassword",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid password supplied (ACK 3)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "InvalidPassword",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "InvalidPassword"
      },
      "index": {
        "description": "Invalid password supplied ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "InvalidPassword",
        "normalized": "",
        "package": "libmpd",
        "partial": "Invalid Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:LsDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eDirectory\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "LsDirectory Path",
        "fct-source": "src/Network-MPD-Commands-Types.html#LsResult",
        "fct-type": "function",
        "title": "LsDirectory"
      },
      "index": {
        "description": "Directory",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "LsDirectory",
        "normalized": "",
        "package": "libmpd",
        "partial": "Ls Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:LsPlaylist",
      "description": {
        "fct-descr": "\u003cp\u003ePlaylist\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "LsPlaylist PlaylistName",
        "fct-source": "src/Network-MPD-Commands-Types.html#LsResult",
        "fct-type": "function",
        "title": "LsPlaylist"
      },
      "index": {
        "description": "Playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "LsPlaylist",
        "normalized": "",
        "package": "libmpd",
        "partial": "Ls Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:LsSong",
      "description": {
        "fct-descr": "\u003cp\u003eSong\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "LsSong Song",
        "fct-source": "src/Network-MPD-Commands-Types.html#LsResult",
        "fct-type": "function",
        "title": "LsSong"
      },
      "index": {
        "description": "Song",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "LsSong",
        "normalized": "",
        "package": "libmpd",
        "partial": "Ls Song",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:MUSICBRAINZ_ARTISTID",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "MUSICBRAINZ_ARTISTID",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "MUSICBRAINZ_ARTISTID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MUSICBRAINZ_ARTISTID",
        "normalized": "",
        "package": "libmpd",
        "partial": "MUSICBRAINZ ARTISTID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:MUSICBRAINZ_TRACKID",
      "description": {
        "fct-descr": "\u003cp\u003eMUSICBRAINZ_ALBUMID\n | MUSICBRAINZ_ALBUMARTISTID\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "MUSICBRAINZ_TRACKID",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "MUSICBRAINZ_TRACKID"
      },
      "index": {
        "description": "MUSICBRAINZ ALBUMID MUSICBRAINZ ALBUMARTISTID",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MUSICBRAINZ_TRACKID",
        "normalized": "",
        "package": "libmpd",
        "partial": "MUSICBRAINZ TRACKID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:MixerS",
      "description": {
        "fct-descr": "\u003cp\u003eThe volume mixer\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "MixerS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "MixerS"
      },
      "index": {
        "description": "The volume mixer",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "MixerS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Mixer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Name",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Name",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Name",
        "normalized": "",
        "package": "libmpd",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:NoMPD",
      "description": {
        "fct-descr": "\u003cp\u003eMPD not responding\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "NoMPD",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "NoMPD"
      },
      "index": {
        "description": "MPD not responding",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "NoMPD",
        "normalized": "",
        "package": "libmpd",
        "partial": "No MPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:NotPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eAn operation requiring playback\n   got interrupted (ACK 55)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "NotPlaying",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "NotPlaying"
      },
      "index": {
        "description": "An operation requiring playback got interrupted ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "NotPlaying",
        "normalized": "",
        "package": "libmpd",
        "partial": "Not Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Off",
      "description": {
        "fct-descr": "\u003cp\u003eDisable replay gain\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Off",
        "fct-source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
        "fct-type": "function",
        "title": "Off"
      },
      "index": {
        "description": "Disable replay gain",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Off",
        "normalized": "",
        "package": "libmpd",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:OptionsS",
      "description": {
        "fct-descr": "\u003cp\u003ePlayback options\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "OptionsS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "OptionsS"
      },
      "index": {
        "description": "Playback options",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "OptionsS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:OutputS",
      "description": {
        "fct-descr": "\u003cp\u003eAudio outputs\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "OutputS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "OutputS"
      },
      "index": {
        "description": "Audio outputs",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "OutputS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Path",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path ByteString",
        "fct-source": "src/Network-MPD-Commands-Types.html#Path",
        "fct-type": "function",
        "title": "Path"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Path",
        "normalized": "",
        "package": "libmpd",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Paused",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Paused",
        "fct-source": "src/Network-MPD-Commands-Types.html#State",
        "fct-type": "function",
        "title": "Paused"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Paused",
        "normalized": "",
        "package": "libmpd",
        "partial": "Paused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Performer",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Performer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Performer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Performer",
        "normalized": "",
        "package": "libmpd",
        "partial": "Performer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlayerS",
      "description": {
        "fct-descr": "\u003cp\u003eThe player\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlayerS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "PlayerS"
      },
      "index": {
        "description": "The player",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "PlayerS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Player",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Playing",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Playing",
        "fct-source": "src/Network-MPD-Commands-Types.html#State",
        "fct-type": "function",
        "title": "Playing"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Playing",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistLoad",
      "description": {
        "fct-descr": "\u003cp\u003ePlaylist loading failed (ACK 53)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistLoad",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "PlaylistLoad"
      },
      "index": {
        "description": "Playlist loading failed ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "PlaylistLoad",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Load",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistMax",
      "description": {
        "fct-descr": "\u003cp\u003ePlaylist at maximum size (ACK 51)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistMax",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "PlaylistMax"
      },
      "index": {
        "description": "Playlist at maximum size ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "PlaylistMax",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistName",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName ByteString",
        "fct-source": "src/Network-MPD-Commands-Types.html#PlaylistName",
        "fct-type": "function",
        "title": "PlaylistName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "PlaylistName",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:PlaylistS",
      "description": {
        "fct-descr": "\u003cp\u003eThe current playlist\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "PlaylistS"
      },
      "index": {
        "description": "The current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "PlaylistS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Song",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Song",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "Song"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Song",
        "normalized": "",
        "package": "libmpd",
        "partial": "Song",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:SongObj",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "SongObj",
        "fct-source": "src/Network-MPD-Commands-Types.html#ObjectType",
        "fct-type": "function",
        "title": "SongObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "SongObj",
        "normalized": "",
        "package": "libmpd",
        "partial": "Song Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Stats",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Stats",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "Stats"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Stats",
        "normalized": "",
        "package": "libmpd",
        "partial": "Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Status",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Status",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Status",
        "normalized": "",
        "package": "libmpd",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Stopped",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Stopped",
        "fct-source": "src/Network-MPD-Commands-Types.html#State",
        "fct-type": "function",
        "title": "Stopped"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Stopped",
        "normalized": "",
        "package": "libmpd",
        "partial": "Stopped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:StoredPlaylistS",
      "description": {
        "fct-descr": "\u003cp\u003eStored playlists\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "StoredPlaylistS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "StoredPlaylistS"
      },
      "index": {
        "description": "Stored playlists",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "StoredPlaylistS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Stored Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:System",
      "description": {
        "fct-descr": "\u003cp\u003eA system error (ACK 52)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "System",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "System"
      },
      "index": {
        "description": "system error ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "System",
        "normalized": "",
        "package": "libmpd",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:TimedOut",
      "description": {
        "fct-descr": "\u003cp\u003eThe connection timed out\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "TimedOut",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "TimedOut"
      },
      "index": {
        "description": "The connection timed out",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "TimedOut",
        "normalized": "",
        "package": "libmpd",
        "partial": "Timed Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Title",
      "description": {
        "fct-descr": "\u003cp\u003eAlbumArtist\n | AlbumArtistSort\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Title",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Title"
      },
      "index": {
        "description": "AlbumArtist AlbumArtistSort",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Title",
        "normalized": "",
        "package": "libmpd",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Track",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Track",
        "fct-source": "src/Network-MPD-Commands-Types.html#Metadata",
        "fct-type": "function",
        "title": "Track"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Track",
        "normalized": "",
        "package": "libmpd",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:TrackMode",
      "description": {
        "fct-descr": "\u003cp\u003ePer track mode\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "TrackMode",
        "fct-source": "src/Network-MPD-Commands-Types.html#ReplayGainMode",
        "fct-type": "function",
        "title": "TrackMode"
      },
      "index": {
        "description": "Per track mode",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "TrackMode",
        "normalized": "",
        "package": "libmpd",
        "partial": "Track Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Unexpected",
      "description": {
        "fct-descr": "\u003cp\u003eMPD returned an unexpected response.\n   This is a bug, either in the library or\n   in MPD itself.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Unexpected String",
        "fct-source": "src/Network-MPD-Core-Error.html#MPDError",
        "fct-type": "function",
        "title": "Unexpected"
      },
      "index": {
        "description": "MPD returned an unexpected response This is bug either in the library or in MPD itself",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Unexpected",
        "normalized": "",
        "package": "libmpd",
        "partial": "Unexpected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:UnknownACK",
      "description": {
        "fct-descr": "\u003cp\u003eAn unknown ACK (aka. bug)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "UnknownACK",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "UnknownACK"
      },
      "index": {
        "description": "An unknown ACK aka bug",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "UnknownACK",
        "normalized": "",
        "package": "libmpd",
        "partial": "Unknown ACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:UnknownCommand",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown command (ACK 5)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "UnknownCommand",
        "fct-source": "src/Network-MPD-Core-Error.html#ACKType",
        "fct-type": "function",
        "title": "UnknownCommand"
      },
      "index": {
        "description": "Unknown command ACK",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "UnknownCommand",
        "normalized": "",
        "package": "libmpd",
        "partial": "Unknown Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:UpdateS",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase updates\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "UpdateS",
        "fct-source": "src/Network-MPD-Commands-Types.html#Subsystem",
        "fct-type": "function",
        "title": "UpdateS"
      },
      "index": {
        "description": "Database updates",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "UpdateS",
        "normalized": "",
        "package": "libmpd",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:Value",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Value ByteString",
        "fct-source": "src/Network-MPD-Commands-Types.html#Value",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "Value",
        "normalized": "",
        "package": "libmpd",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eadd_\u003c/a\u003e\u003c/code\u003e but returns a list of the files added.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path -\u003e m [Path]",
        "fct-source": "src/Network-MPD-Commands.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Like add but returns list of the files added",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "add",
        "normalized": "Path-\u003ea[Path]",
        "package": "libmpd",
        "partial": "",
        "signature": "Path-\u003em[Path]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:addId",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e, but returns a playlist id.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path-\u003e Maybe Integer-\u003e m Id",
        "fct-type": "function",
        "title": "addId"
      },
      "index": {
        "description": "Like add but returns playlist id",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "addId",
        "normalized": "Path-\u003eMaybe Integer-\u003ea Id",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Path-\u003eMaybe Integer-\u003em Id"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:add_",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a song (or a whole directory) to the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#add_",
        "fct-type": "function",
        "title": "add_"
      },
      "index": {
        "description": "Add song or whole directory to the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "add_",
        "normalized": "Path-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Path-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:anything",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty query. Matches anything.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query",
        "fct-source": "src/Network-MPD-Commands-Query.html#anything",
        "fct-type": "function",
        "title": "anything"
      },
      "index": {
        "description": "An empty query Matches anything",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "anything",
        "normalized": "",
        "package": "libmpd",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:cPlaytime",
      "description": {
        "fct-descr": "\u003cp\u003eTotal play time of matching songs\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds",
        "fct-source": "src/Network-MPD-Commands-Types.html#Count",
        "fct-type": "function",
        "title": "cPlaytime"
      },
      "index": {
        "description": "Total play time of matching songs",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "cPlaytime",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playtime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:cSongs",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of songs matching the query\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Count",
        "fct-type": "function",
        "title": "cSongs"
      },
      "index": {
        "description": "Number of songs matching the query",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "cSongs",
        "normalized": "",
        "package": "libmpd",
        "partial": "Songs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eClear the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Clear the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "clear",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:clearError",
      "description": {
        "fct-descr": "\u003cp\u003eClear the current error message in status.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#clearError",
        "fct-type": "function",
        "title": "clearError"
      },
      "index": {
        "description": "Clear the current error message in status",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "clearError",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "Error",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Core-Class.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close the connection",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "close",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:commands",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of available commands.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [String]",
        "fct-source": "src/Network-MPD-Commands.html#commands",
        "fct-type": "function",
        "title": "commands"
      },
      "index": {
        "description": "Retrieve list of available commands",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "commands",
        "normalized": "a[String]",
        "package": "libmpd",
        "partial": "",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eSet consume mode\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Set consume mode",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "consume",
        "normalized": "Bool-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of entries matching a query.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e m Count",
        "fct-source": "src/Network-MPD-Commands.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Count the number of entries matching query",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "count",
        "normalized": "Query-\u003ea Count",
        "package": "libmpd",
        "partial": "",
        "signature": "Query-\u003em Count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:crossfade",
      "description": {
        "fct-descr": "\u003cp\u003eSet crossfading between songs.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#crossfade",
        "fct-type": "function",
        "title": "crossfade"
      },
      "index": {
        "description": "Set crossfading between songs",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "crossfade",
        "normalized": "Seconds-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Seconds-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:currentSong",
      "description": {
        "fct-descr": "\u003cp\u003eGet the currently playing song.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m (Maybe Song)",
        "fct-source": "src/Network-MPD-Commands.html#currentSong",
        "fct-type": "function",
        "title": "currentSong"
      },
      "index": {
        "description": "Get the currently playing song",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "currentSong",
        "normalized": "",
        "package": "libmpd",
        "partial": "Song",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:dOutputEnabled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MPD-Commands-Types.html#Device",
        "fct-type": "function",
        "title": "dOutputEnabled"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "dOutputEnabled",
        "normalized": "",
        "package": "libmpd",
        "partial": "Output Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:dOutputID",
      "description": {
        "fct-descr": "\u003cp\u003eOutput's ID number\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Device",
        "fct-type": "function",
        "title": "dOutputID"
      },
      "index": {
        "description": "Output ID number",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "dOutputID",
        "normalized": "",
        "package": "libmpd",
        "partial": "Output ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:dOutputName",
      "description": {
        "fct-descr": "\u003cp\u003eOutput's name as defined in the MPD\n   configuration file\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "String",
        "fct-source": "src/Network-MPD-Commands-Types.html#Device",
        "fct-type": "function",
        "title": "dOutputName"
      },
      "index": {
        "description": "Output name as defined in the MPD configuration file",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "dOutputName",
        "normalized": "",
        "package": "libmpd",
        "partial": "Output Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:decoders",
      "description": {
        "fct-descr": "\u003cp\u003eRetreive a list of decoder plugins with associated suffix and mime types.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [(String, [(String, String)])]",
        "fct-source": "src/Network-MPD-Commands.html#decoders",
        "fct-type": "function",
        "title": "decoders"
      },
      "index": {
        "description": "Retreive list of decoder plugins with associated suffix and mime types",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "decoders",
        "normalized": "a[(String,[(String,String)])]",
        "package": "libmpd",
        "partial": "",
        "signature": "m[(String,[(String,String)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultCount",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Count",
        "fct-source": "src/Network-MPD-Commands-Types.html#defaultCount",
        "fct-type": "function",
        "title": "defaultCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "defaultCount",
        "normalized": "",
        "package": "libmpd",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultDevice",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Device",
        "fct-source": "src/Network-MPD-Commands-Types.html#defaultDevice",
        "fct-type": "function",
        "title": "defaultDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "defaultDevice",
        "normalized": "",
        "package": "libmpd",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultSong",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path -\u003e Song",
        "fct-source": "src/Network-MPD-Commands-Types.html#defaultSong",
        "fct-type": "function",
        "title": "defaultSong"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "defaultSong",
        "normalized": "Path-\u003eSong",
        "package": "libmpd",
        "partial": "Song",
        "signature": "Path-\u003eSong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultStats",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Stats",
        "fct-source": "src/Network-MPD-Commands-Types.html#defaultStats",
        "fct-type": "function",
        "title": "defaultStats"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "defaultStats",
        "normalized": "",
        "package": "libmpd",
        "partial": "Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:defaultStatus",
      "description": {
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Status",
        "fct-source": "src/Network-MPD-Commands-Types.html#defaultStatus",
        "fct-type": "function",
        "title": "defaultStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "defaultStatus",
        "normalized": "",
        "package": "libmpd",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a song from the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove song from the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "delete",
        "normalized": "Int-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:deleteId",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a song from the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Id -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#deleteId",
        "fct-type": "function",
        "title": "deleteId"
      },
      "index": {
        "description": "Remove song from the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "deleteId",
        "normalized": "Id-\u003ea()",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Id-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:disableOutput",
      "description": {
        "fct-descr": "\u003cp\u003eTurn off an output device.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#disableOutput",
        "fct-type": "function",
        "title": "disableOutput"
      },
      "index": {
        "description": "Turn off an output device",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "disableOutput",
        "normalized": "Int-\u003ea()",
        "package": "libmpd",
        "partial": "Output",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:enableOutput",
      "description": {
        "fct-descr": "\u003cp\u003eTurn on an output device.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#enableOutput",
        "fct-type": "function",
        "title": "enableOutput"
      },
      "index": {
        "description": "Turn on an output device",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "enableOutput",
        "normalized": "Int-\u003ea()",
        "package": "libmpd",
        "partial": "Output",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eSearch the database for entries exactly matching a query.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Search the database for entries exactly matching query",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "find",
        "normalized": "Query-\u003ea[Song]",
        "package": "libmpd",
        "partial": "",
        "signature": "Query-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:findAdd",
      "description": {
        "fct-descr": "\u003cp\u003eAdds songs matching a query to the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#findAdd",
        "fct-type": "function",
        "title": "findAdd"
      },
      "index": {
        "description": "Adds songs matching query to the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "findAdd",
        "normalized": "Query-\u003ea()",
        "package": "libmpd",
        "partial": "Add",
        "signature": "Query-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:idle",
      "description": {
        "fct-descr": "\u003cp\u003eWait until there is a noteworthy change in one or more of MPD's\n susbystems.\n\u003c/p\u003e\u003cp\u003eThe first argument is a list of subsystems that should be considered.  An\n empty list specifies that all subsystems should be considered.\n\u003c/p\u003e\u003cp\u003eA list of subsystems that have noteworthy changes is returned.\n\u003c/p\u003e\u003cp\u003eNote that running this command will block until either \u003ccode\u003e\u003ca\u003eidle\u003c/a\u003e\u003c/code\u003e returns or is\n cancelled by \u003ccode\u003e\u003ca\u003enoidle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "[Subsystem] -\u003e m [Subsystem]",
        "fct-source": "src/Network-MPD-Commands.html#idle",
        "fct-type": "function",
        "title": "idle"
      },
      "index": {
        "description": "Wait until there is noteworthy change in one or more of MPD susbystems The first argument is list of subsystems that should be considered An empty list specifies that all subsystems should be considered list of subsystems that have noteworthy changes is returned Note that running this command will block until either idle returns or is cancelled by noidle",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "idle",
        "normalized": "[Subsystem]-\u003ea[Subsystem]",
        "package": "libmpd",
        "partial": "",
        "signature": "[Subsystem]-\u003em[Subsystem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003eKill the server. Obviously, the connection is then invalid.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Core.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "Kill the server Obviously the connection is then invalid",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "kill",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eList all tags of the specified type.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Metadata-\u003e Query-\u003e m [Value]",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "List all tags of the specified type",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "list",
        "normalized": "Metadata-\u003eQuery-\u003ea[Value]",
        "package": "libmpd",
        "partial": "",
        "signature": "Metadata-\u003eQuery-\u003em[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listAll",
      "description": {
        "fct-descr": "\u003cp\u003eList the songs (without metadata) in a database directory recursively.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path -\u003e m [Path]",
        "fct-source": "src/Network-MPD-Commands.html#listAll",
        "fct-type": "function",
        "title": "listAll"
      },
      "index": {
        "description": "List the songs without metadata in database directory recursively",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "listAll",
        "normalized": "Path-\u003ea[Path]",
        "package": "libmpd",
        "partial": "All",
        "signature": "Path-\u003em[Path]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listAllInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRecursive \u003ccode\u003e\u003ca\u003elsInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path -\u003e m [LsResult]",
        "fct-source": "src/Network-MPD-Commands.html#listAllInfo",
        "fct-type": "function",
        "title": "listAllInfo"
      },
      "index": {
        "description": "Recursive lsInfo",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "listAllInfo",
        "normalized": "Path-\u003ea[LsResult]",
        "package": "libmpd",
        "partial": "All Info",
        "signature": "Path-\u003em[LsResult]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listPlaylist",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of files in a given playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e m [Path]",
        "fct-source": "src/Network-MPD-Commands.html#listPlaylist",
        "fct-type": "function",
        "title": "listPlaylist"
      },
      "index": {
        "description": "Retrieve list of files in given playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "listPlaylist",
        "normalized": "PlaylistName-\u003ea[Path]",
        "package": "libmpd",
        "partial": "Playlist",
        "signature": "PlaylistName-\u003em[Path]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listPlaylistInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve metadata for files in a given playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#listPlaylistInfo",
        "fct-type": "function",
        "title": "listPlaylistInfo"
      },
      "index": {
        "description": "Retrieve metadata for files in given playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "listPlaylistInfo",
        "normalized": "PlaylistName-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Playlist Info",
        "signature": "PlaylistName-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:listPlaylists",
      "description": {
        "fct-descr": "\u003cp\u003eRetreive a list of stored playlists.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [PlaylistName]",
        "fct-source": "src/Network-MPD-Commands.html#listPlaylists",
        "fct-type": "function",
        "title": "listPlaylists"
      },
      "index": {
        "description": "Retreive list of stored playlists",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "listPlaylists",
        "normalized": "a[PlaylistName]",
        "package": "libmpd",
        "partial": "Playlists",
        "signature": "m[PlaylistName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an existing playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Load an existing playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "load",
        "normalized": "PlaylistName-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "PlaylistName-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:lsInfo",
      "description": {
        "fct-descr": "\u003cp\u003eNon-recursively list the contents of a database directory.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path -\u003e m [LsResult]",
        "fct-source": "src/Network-MPD-Commands.html#lsInfo",
        "fct-type": "function",
        "title": "lsInfo"
      },
      "index": {
        "description": "Non-recursively list the contents of database directory",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "lsInfo",
        "normalized": "Path-\u003ea[LsResult]",
        "package": "libmpd",
        "partial": "Info",
        "signature": "Path-\u003em[LsResult]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:move",
      "description": {
        "fct-descr": "\u003cp\u003eMove a song to a given position in the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#move",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "Move song to given position in the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "move",
        "normalized": "Int-\u003eInt-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Int-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:moveId",
      "description": {
        "fct-descr": "\u003cp\u003eMove a song from (songid) to (playlist index) in the playlist. If to is\n negative, it is relative to the current song in the playlist (if there is one).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Id -\u003e Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#moveId",
        "fct-type": "function",
        "title": "moveId"
      },
      "index": {
        "description": "Move song from songid to playlist index in the playlist If to is negative it is relative to the current song in the playlist if there is one",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "moveId",
        "normalized": "Id-\u003eInt-\u003ea()",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Id-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003ePlay the next song.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Play the next song",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "next",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:noidle",
      "description": {
        "fct-descr": "\u003cp\u003eCancel \u003ccode\u003e\u003ca\u003eidle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#noidle",
        "fct-type": "function",
        "title": "noidle"
      },
      "index": {
        "description": "Cancel idle",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "noidle",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:notCommands",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of unavailable (due to access restrictions) commands.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [String]",
        "fct-source": "src/Network-MPD-Commands.html#notCommands",
        "fct-type": "function",
        "title": "notCommands"
      },
      "index": {
        "description": "Retrieve list of unavailable due to access restrictions commands",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "notCommands",
        "normalized": "a[String]",
        "package": "libmpd",
        "partial": "Commands",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:outputs",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve information for all output devices.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [Device]",
        "fct-source": "src/Network-MPD-Commands.html#outputs",
        "fct-type": "function",
        "title": "outputs"
      },
      "index": {
        "description": "Retrieve information for all output devices",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "outputs",
        "normalized": "a[Device]",
        "package": "libmpd",
        "partial": "",
        "signature": "m[Device]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:password",
      "description": {
        "fct-descr": "\u003cp\u003eSend password to server to authenticate session.\n Password is sent as plain text.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#password",
        "fct-type": "function",
        "title": "password"
      },
      "index": {
        "description": "Send password to server to authenticate session Password is sent as plain text",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "password",
        "normalized": "String-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:pause",
      "description": {
        "fct-descr": "\u003cp\u003ePause playing.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "Pause playing",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "pause",
        "normalized": "Bool-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:ping",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that the server is still responding.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#ping",
        "fct-type": "function",
        "title": "ping"
      },
      "index": {
        "description": "Check that the server is still responding",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "ping",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:plChanges",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of changed songs currently in the playlist since\n a given playlist version.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#plChanges",
        "fct-type": "function",
        "title": "plChanges"
      },
      "index": {
        "description": "Retrieve list of changed songs currently in the playlist since given playlist version",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "plChanges",
        "normalized": "Integer-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Changes",
        "signature": "Integer-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:plChangesPosId",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eplChanges\u003c/a\u003e\u003c/code\u003e but only returns positions and ids.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer -\u003e m [(Int, Id)]",
        "fct-source": "src/Network-MPD-Commands.html#plChangesPosId",
        "fct-type": "function",
        "title": "plChangesPosId"
      },
      "index": {
        "description": "Like plChanges but only returns positions and ids",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "plChangesPosId",
        "normalized": "Integer-\u003ea[(Int,Id)]",
        "package": "libmpd",
        "partial": "Changes Pos Id",
        "signature": "Integer-\u003em[(Int,Id)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:play",
      "description": {
        "fct-descr": "\u003cp\u003eBegin/continue playing.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#play",
        "fct-type": "function",
        "title": "play"
      },
      "index": {
        "description": "Begin continue playing",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "play",
        "normalized": "Maybe Int-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Maybe Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playId",
      "description": {
        "fct-descr": "\u003cp\u003ePlay a file with given id.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Id -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#playId",
        "fct-type": "function",
        "title": "playId"
      },
      "index": {
        "description": "Play file with given id",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playId",
        "normalized": "Id-\u003ea()",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Id-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlist",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve file paths and positions of songs in the current playlist.\n Note that this command is only included for completeness sake; it's\n deprecated and likely to disappear at any time, please use \u003ccode\u003e\u003ca\u003eplaylistInfo\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [(Int, Path)]",
        "fct-source": "src/Network-MPD-Commands.html#playlist",
        "fct-type": "function",
        "title": "playlist"
      },
      "index": {
        "description": "Retrieve file paths and positions of songs in the current playlist Note that this command is only included for completeness sake it deprecated and likely to disappear at any time please use playlistInfo instead",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlist",
        "normalized": "a[(Int,Path)]",
        "package": "libmpd",
        "partial": "",
        "signature": "m[(Int,Path)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistAdd",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eplaylistAdd\u003c/a\u003e\u003c/code\u003e but returns a list of the files added.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e Path -\u003e m [Path]",
        "fct-source": "src/Network-MPD-Commands.html#playlistAdd",
        "fct-type": "function",
        "title": "playlistAdd"
      },
      "index": {
        "description": "Like playlistAdd but returns list of the files added",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistAdd",
        "normalized": "PlaylistName-\u003ePath-\u003ea[Path]",
        "package": "libmpd",
        "partial": "Add",
        "signature": "PlaylistName-\u003ePath-\u003em[Path]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistAdd_",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a song (or a whole directory) to a stored playlist.\n Will create a new playlist if the one specified does not already exist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e Path -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#playlistAdd_",
        "fct-type": "function",
        "title": "playlistAdd_"
      },
      "index": {
        "description": "Add song or whole directory to stored playlist Will create new playlist if the one specified does not already exist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistAdd_",
        "normalized": "PlaylistName-\u003ePath-\u003ea()",
        "package": "libmpd",
        "partial": "Add",
        "signature": "PlaylistName-\u003ePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistClear",
      "description": {
        "fct-descr": "\u003cp\u003eClear a playlist. If the specified playlist does not exist, it will be\n created.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#playlistClear",
        "fct-type": "function",
        "title": "playlistClear"
      },
      "index": {
        "description": "Clear playlist If the specified playlist does not exist it will be created",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistClear",
        "normalized": "PlaylistName-\u003ea()",
        "package": "libmpd",
        "partial": "Clear",
        "signature": "PlaylistName-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistDelete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a song from a playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName-\u003e Integer-\u003e m ()",
        "fct-type": "function",
        "title": "playlistDelete"
      },
      "index": {
        "description": "Remove song from playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistDelete",
        "normalized": "PlaylistName-\u003eInteger-\u003ea()",
        "package": "libmpd",
        "partial": "Delete",
        "signature": "PlaylistName-\u003eInteger-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistFind",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for songs in the current playlist with strict matching.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#playlistFind",
        "fct-type": "function",
        "title": "playlistFind"
      },
      "index": {
        "description": "Search for songs in the current playlist with strict matching",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistFind",
        "normalized": "Query-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Find",
        "signature": "Query-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistId",
      "description": {
        "fct-descr": "\u003cp\u003eDisplays a list of songs in the playlist.\n If id is specified, only its info is returned.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Id -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#playlistId",
        "fct-type": "function",
        "title": "playlistId"
      },
      "index": {
        "description": "Displays list of songs in the playlist If id is specified only its info is returned",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistId",
        "normalized": "Maybe Id-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Maybe Id-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve metadata for songs in the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe (Int, Int) -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#playlistInfo",
        "fct-type": "function",
        "title": "playlistInfo"
      },
      "index": {
        "description": "Retrieve metadata for songs in the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistInfo",
        "normalized": "Maybe(Int,Int)-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Info",
        "signature": "Maybe(Int,Int)-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistMove",
      "description": {
        "fct-descr": "\u003cp\u003eMove a song to a given position in the playlist specified.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e Integer -\u003e Integer -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#playlistMove",
        "fct-type": "function",
        "title": "playlistMove"
      },
      "index": {
        "description": "Move song to given position in the playlist specified",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistMove",
        "normalized": "PlaylistName-\u003eInteger-\u003eInteger-\u003ea()",
        "package": "libmpd",
        "partial": "Move",
        "signature": "PlaylistName-\u003eInteger-\u003eInteger-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:playlistSearch",
      "description": {
        "fct-descr": "\u003cp\u003eSearch case-insensitively with partial matches for songs in the\n current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#playlistSearch",
        "fct-type": "function",
        "title": "playlistSearch"
      },
      "index": {
        "description": "Search case-insensitively with partial matches for songs in the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "playlistSearch",
        "normalized": "Query-\u003ea[Song]",
        "package": "libmpd",
        "partial": "Search",
        "signature": "Query-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:previous",
      "description": {
        "fct-descr": "\u003cp\u003ePlay the previous song.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#previous",
        "fct-type": "function",
        "title": "previous"
      },
      "index": {
        "description": "Play the previous song",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "previous",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:random",
      "description": {
        "fct-descr": "\u003cp\u003eSet random playing.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#random",
        "fct-type": "function",
        "title": "random"
      },
      "index": {
        "description": "Set random playing",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "random",
        "normalized": "Bool-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:rename",
      "description": {
        "fct-descr": "\u003cp\u003eRename an existing playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName-\u003e PlaylistName-\u003e m ()",
        "fct-type": "function",
        "title": "rename"
      },
      "index": {
        "description": "Rename an existing playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "rename",
        "normalized": "PlaylistName-\u003ePlaylistName-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "PlaylistName-\u003ePlaylistName-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eSet repeating.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Set repeating",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "repeat",
        "normalized": "Bool-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:replayGainMode",
      "description": {
        "fct-descr": "\u003cp\u003eSet the replay gain mode.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ReplayGainMode -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#replayGainMode",
        "fct-type": "function",
        "title": "replayGainMode"
      },
      "index": {
        "description": "Set the replay gain mode",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "replayGainMode",
        "normalized": "ReplayGainMode-\u003ea()",
        "package": "libmpd",
        "partial": "Gain Mode",
        "signature": "ReplayGainMode-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:replayGainStatus",
      "description": {
        "fct-descr": "\u003cp\u003eGet the replay gain options.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [String]",
        "fct-source": "src/Network-MPD-Commands.html#replayGainStatus",
        "fct-type": "function",
        "title": "replayGainStatus"
      },
      "index": {
        "description": "Get the replay gain options",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "replayGainStatus",
        "normalized": "a[String]",
        "package": "libmpd",
        "partial": "Gain Status",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:rescan",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e but also rescans unmodified files.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "[Path] -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#rescan",
        "fct-type": "function",
        "title": "rescan"
      },
      "index": {
        "description": "Like update but also rescans unmodified files",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "rescan",
        "normalized": "[Path]-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "[Path]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:rm",
      "description": {
        "fct-descr": "\u003cp\u003eDelete existing playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#rm",
        "fct-type": "function",
        "title": "rm"
      },
      "index": {
        "description": "Delete existing playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "rm",
        "normalized": "PlaylistName-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "PlaylistName-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eSave the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "PlaylistName -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Save the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "save",
        "normalized": "PlaylistName-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "PlaylistName-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch the database using case insensitive matching.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Query -\u003e m [Song]",
        "fct-source": "src/Network-MPD-Commands.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search the database using case insensitive matching",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "search",
        "normalized": "Query-\u003ea[Song]",
        "package": "libmpd",
        "partial": "",
        "signature": "Query-\u003em[Song]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:seek",
      "description": {
        "fct-descr": "\u003cp\u003eSeek to some point in a song.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e Seconds -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#seek",
        "fct-type": "function",
        "title": "seek"
      },
      "index": {
        "description": "Seek to some point in song",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "seek",
        "normalized": "Int-\u003eSeconds-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Int-\u003eSeconds-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:seekId",
      "description": {
        "fct-descr": "\u003cp\u003eSeek to some point in a song (id version)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Id -\u003e Seconds -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#seekId",
        "fct-type": "function",
        "title": "seekId"
      },
      "index": {
        "description": "Seek to some point in song id version",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "seekId",
        "normalized": "Id-\u003eSeconds-\u003ea()",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Id-\u003eSeconds-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:setVolume",
      "description": {
        "fct-descr": "\u003cp\u003eSet the volume (0-100 percent).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#setVolume",
        "fct-type": "function",
        "title": "setVolume"
      },
      "index": {
        "description": "Set the volume percent",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "setVolume",
        "normalized": "Int-\u003ea()",
        "package": "libmpd",
        "partial": "Volume",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgAddTag",
      "description": {
        "fct-descr": "\u003cp\u003eAdd metadata tag value.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Metadata -\u003e Value -\u003e Song -\u003e Song",
        "fct-source": "src/Network-MPD-Commands-Types.html#sgAddTag",
        "fct-type": "function",
        "title": "sgAddTag"
      },
      "index": {
        "description": "Add metadata tag value",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgAddTag",
        "normalized": "Metadata-\u003eValue-\u003eSong-\u003eSong",
        "package": "libmpd",
        "partial": "Add Tag",
        "signature": "Metadata-\u003eValue-\u003eSong-\u003eSong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgFilePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Path",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "sgFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgFilePath",
        "normalized": "",
        "package": "libmpd",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgGetTag",
      "description": {
        "fct-descr": "\u003cp\u003eGet list of specific tag type\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Metadata -\u003e Song -\u003e Maybe [Value]",
        "fct-source": "src/Network-MPD-Commands-Types.html#sgGetTag",
        "fct-type": "function",
        "title": "sgGetTag"
      },
      "index": {
        "description": "Get list of specific tag type",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgGetTag",
        "normalized": "Metadata-\u003eSong-\u003eMaybe[Value]",
        "package": "libmpd",
        "partial": "Get Tag",
        "signature": "Metadata-\u003eSong-\u003eMaybe[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgId",
      "description": {
        "fct-descr": "\u003cp\u003eId in playlist\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Id",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "sgId"
      },
      "index": {
        "description": "Id in playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgId",
        "normalized": "",
        "package": "libmpd",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgIndex",
      "description": {
        "fct-descr": "\u003cp\u003ePosition in playlist\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "sgIndex"
      },
      "index": {
        "description": "Position in playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgIndex",
        "normalized": "",
        "package": "libmpd",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgLastModified",
      "description": {
        "fct-descr": "\u003cp\u003eLast modification date\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "sgLastModified"
      },
      "index": {
        "description": "Last modification date",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgLastModified",
        "normalized": "",
        "package": "libmpd",
        "partial": "Last Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of the song in seconds\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "sgLength"
      },
      "index": {
        "description": "Length of the song in seconds",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgLength",
        "normalized": "",
        "package": "libmpd",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:sgTags",
      "description": {
        "fct-descr": "\u003cp\u003eMap of available tags (multiple occurences of one tag type allowed)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Map Metadata [Value]",
        "fct-source": "src/Network-MPD-Commands-Types.html#Song",
        "fct-type": "function",
        "title": "sgTags"
      },
      "index": {
        "description": "Map of available tags multiple occurences of one tag type allowed",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "sgTags",
        "normalized": "Map Metadata[Value]",
        "package": "libmpd",
        "partial": "Tags",
        "signature": "Map Metadata[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:shuffle",
      "description": {
        "fct-descr": "\u003cp\u003eShuffle the playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe (Int, Int)-\u003e m ()",
        "fct-type": "function",
        "title": "shuffle"
      },
      "index": {
        "description": "Shuffle the playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "shuffle",
        "normalized": "Maybe(Int,Int)-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Maybe(Int,Int)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:single",
      "description": {
        "fct-descr": "\u003cp\u003eSet single mode\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#single",
        "fct-type": "function",
        "title": "single"
      },
      "index": {
        "description": "Set single mode",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "single",
        "normalized": "Bool-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stAudio",
      "description": {
        "fct-descr": "\u003cp\u003eSamplerate/bits/channels for the chosen output device\n   (see mpd.conf).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "(Int, Int, Int)",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stAudio"
      },
      "index": {
        "description": "Samplerate bits channels for the chosen output device see mpd.conf",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stAudio",
        "normalized": "(Int,Int,Int)",
        "package": "libmpd",
        "partial": "Audio",
        "signature": "(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stBitrate",
      "description": {
        "fct-descr": "\u003cp\u003eBitrate (in kilobytes per second) of playing song (if any).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stBitrate"
      },
      "index": {
        "description": "Bitrate in kilobytes per second of playing song if any",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stBitrate",
        "normalized": "",
        "package": "libmpd",
        "partial": "Bitrate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stConsume",
      "description": {
        "fct-descr": "\u003cp\u003eIf True, a song will be removed after it has been played.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stConsume"
      },
      "index": {
        "description": "If True song will be removed after it has been played",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stConsume",
        "normalized": "",
        "package": "libmpd",
        "partial": "Consume",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stError",
      "description": {
        "fct-descr": "\u003cp\u003eLast error message (if any).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stError"
      },
      "index": {
        "description": "Last error message if any",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stError",
        "normalized": "",
        "package": "libmpd",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stMixRampDelay",
      "description": {
        "fct-descr": "\u003cp\u003eMixRamp extra delay in seconds\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Double",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stMixRampDelay"
      },
      "index": {
        "description": "MixRamp extra delay in seconds",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stMixRampDelay",
        "normalized": "",
        "package": "libmpd",
        "partial": "Mix Ramp Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stMixRampdB",
      "description": {
        "fct-descr": "\u003cp\u003eMixRamp threshold in dB\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Double",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stMixRampdB"
      },
      "index": {
        "description": "MixRamp threshold in dB",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stMixRampdB",
        "normalized": "",
        "package": "libmpd",
        "partial": "Mix Rampd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stNextSongID",
      "description": {
        "fct-descr": "\u003cp\u003eNext song's playlist ID.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Id",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stNextSongID"
      },
      "index": {
        "description": "Next song playlist ID",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stNextSongID",
        "normalized": "",
        "package": "libmpd",
        "partial": "Next Song ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stNextSongPos",
      "description": {
        "fct-descr": "\u003cp\u003eNext song's position in the playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stNextSongPos"
      },
      "index": {
        "description": "Next song position in the playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stNextSongPos",
        "normalized": "",
        "package": "libmpd",
        "partial": "Next Song Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stPlaylistLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of items in the current playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stPlaylistLength"
      },
      "index": {
        "description": "The number of items in the current playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stPlaylistLength",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stPlaylistVersion",
      "description": {
        "fct-descr": "\u003cp\u003eA value that is incremented by the server every time the\n   playlist changes.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stPlaylistVersion"
      },
      "index": {
        "description": "value that is incremented by the server every time the playlist changes",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stPlaylistVersion",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playlist Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stRandom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stRandom",
        "normalized": "",
        "package": "libmpd",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stRepeat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stRepeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stRepeat",
        "normalized": "",
        "package": "libmpd",
        "partial": "Repeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stSingle",
      "description": {
        "fct-descr": "\u003cp\u003eIf True, MPD will play only one song and stop after finishing it.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Bool",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stSingle"
      },
      "index": {
        "description": "If True MPD will play only one song and stop after finishing it",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stSingle",
        "normalized": "",
        "package": "libmpd",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stSongID",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent song's playlist ID.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Id",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stSongID"
      },
      "index": {
        "description": "Current song playlist ID",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stSongID",
        "normalized": "",
        "package": "libmpd",
        "partial": "Song ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stSongPos",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent song's position in the playlist.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stSongPos"
      },
      "index": {
        "description": "Current song position in the playlist",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stSongPos",
        "normalized": "",
        "package": "libmpd",
        "partial": "Song Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "State",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stState",
        "normalized": "",
        "package": "libmpd",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime elapsed/total time.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "(Double, Seconds)",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stTime"
      },
      "index": {
        "description": "Time elapsed total time",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stTime",
        "normalized": "(Double,Seconds)",
        "package": "libmpd",
        "partial": "Time",
        "signature": "(Double,Seconds)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stUpdatingDb",
      "description": {
        "fct-descr": "\u003cp\u003eJob ID of currently running update (if any).\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stUpdatingDb"
      },
      "index": {
        "description": "Job ID of currently running update if any",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stUpdatingDb",
        "normalized": "",
        "package": "libmpd",
        "partial": "Updating Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stVolume",
      "description": {
        "fct-descr": "\u003cp\u003eA percentage (0-100)\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stVolume"
      },
      "index": {
        "description": "percentage",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stVolume",
        "normalized": "",
        "package": "libmpd",
        "partial": "Volume",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stXFadeWidth",
      "description": {
        "fct-descr": "\u003cp\u003eCrossfade time.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds",
        "fct-source": "src/Network-MPD-Commands-Types.html#Status",
        "fct-type": "function",
        "title": "stXFadeWidth"
      },
      "index": {
        "description": "Crossfade time",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stXFadeWidth",
        "normalized": "",
        "package": "libmpd",
        "partial": "XFade Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stats",
      "description": {
        "fct-descr": "\u003cp\u003eGet server statistics.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m Stats",
        "fct-source": "src/Network-MPD-Commands.html#stats",
        "fct-type": "function",
        "title": "stats"
      },
      "index": {
        "description": "Get server statistics",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stats",
        "normalized": "",
        "package": "libmpd",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eGet the server's status.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m Status",
        "fct-source": "src/Network-MPD-Commands.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Get the server status",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "status",
        "normalized": "",
        "package": "libmpd",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerDelete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a sticker value from the specified object.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ObjectType-\u003e String-\u003e String-\u003e m ()",
        "fct-type": "function",
        "title": "stickerDelete"
      },
      "index": {
        "description": "Delete sticker value from the specified object",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stickerDelete",
        "normalized": "ObjectType-\u003eString-\u003eString-\u003ea()",
        "package": "libmpd",
        "partial": "Delete",
        "signature": "ObjectType-\u003eString-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerFind",
      "description": {
        "fct-descr": "\u003cp\u003eSearches the sticker database for stickers with the specified name, below\n the specified path.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ObjectType-\u003e String-\u003e String-\u003e m [(String, String)]",
        "fct-type": "function",
        "title": "stickerFind"
      },
      "index": {
        "description": "Searches the sticker database for stickers with the specified name below the specified path",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stickerFind",
        "normalized": "ObjectType-\u003eString-\u003eString-\u003ea[(String,String)]",
        "package": "libmpd",
        "partial": "Find",
        "signature": "ObjectType-\u003eString-\u003eString-\u003em[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerGet",
      "description": {
        "fct-descr": "\u003cp\u003eReads a sticker value for the specified object.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ObjectType-\u003e String-\u003e String-\u003e m [String]",
        "fct-type": "function",
        "title": "stickerGet"
      },
      "index": {
        "description": "Reads sticker value for the specified object",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stickerGet",
        "normalized": "ObjectType-\u003eString-\u003eString-\u003ea[String]",
        "package": "libmpd",
        "partial": "Get",
        "signature": "ObjectType-\u003eString-\u003eString-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerList",
      "description": {
        "fct-descr": "\u003cp\u003eLists the stickers for the specified object.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ObjectType-\u003e String-\u003e m [(String, String)]",
        "fct-type": "function",
        "title": "stickerList"
      },
      "index": {
        "description": "Lists the stickers for the specified object",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stickerList",
        "normalized": "ObjectType-\u003eString-\u003ea[(String,String)]",
        "package": "libmpd",
        "partial": "List",
        "signature": "ObjectType-\u003eString-\u003em[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stickerSet",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a sticker value to the specified object.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "ObjectType-\u003e String-\u003e String-\u003e String-\u003e m ()",
        "fct-type": "function",
        "title": "stickerSet"
      },
      "index": {
        "description": "Adds sticker value to the specified object",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stickerSet",
        "normalized": "ObjectType-\u003eString-\u003eString-\u003eString-\u003ea()",
        "package": "libmpd",
        "partial": "Set",
        "signature": "ObjectType-\u003eString-\u003eString-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStop playing.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m ()",
        "fct-source": "src/Network-MPD-Commands.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stop playing",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stop",
        "normalized": "a()",
        "package": "libmpd",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsAlbums",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of albums.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsAlbums"
      },
      "index": {
        "description": "Number of albums",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsAlbums",
        "normalized": "",
        "package": "libmpd",
        "partial": "Albums",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsArtists",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of artists.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsArtists"
      },
      "index": {
        "description": "Number of artists",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsArtists",
        "normalized": "",
        "package": "libmpd",
        "partial": "Artists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsDbPlaytime",
      "description": {
        "fct-descr": "\u003cp\u003eTotal play time of all the songs in\n   the database.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsDbPlaytime"
      },
      "index": {
        "description": "Total play time of all the songs in the database",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsDbPlaytime",
        "normalized": "",
        "package": "libmpd",
        "partial": "Db Playtime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsDbUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eLast database update in UNIX time.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsDbUpdate"
      },
      "index": {
        "description": "Last database update in UNIX time",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsDbUpdate",
        "normalized": "",
        "package": "libmpd",
        "partial": "Db Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsPlaytime",
      "description": {
        "fct-descr": "\u003cp\u003eTotal playing time.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsPlaytime"
      },
      "index": {
        "description": "Total playing time",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsPlaytime",
        "normalized": "",
        "package": "libmpd",
        "partial": "Playtime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsSongs",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of songs.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Integer",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsSongs"
      },
      "index": {
        "description": "Number of songs",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsSongs",
        "normalized": "",
        "package": "libmpd",
        "partial": "Songs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:stsUptime",
      "description": {
        "fct-descr": "\u003cp\u003eDaemon uptime in seconds.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Seconds",
        "fct-source": "src/Network-MPD-Commands-Types.html#Stats",
        "fct-type": "function",
        "title": "stsUptime"
      },
      "index": {
        "description": "Daemon uptime in seconds",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "stsUptime",
        "normalized": "",
        "package": "libmpd",
        "partial": "Uptime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the positions of two songs.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "Swap the positions of two songs",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "swap",
        "normalized": "Int-\u003eInt-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "Int-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:swapId",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the positions of two songs (Id version\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Id -\u003e Id -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#swapId",
        "fct-type": "function",
        "title": "swapId"
      },
      "index": {
        "description": "Swap the positions of two songs Id version",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "swapId",
        "normalized": "Id-\u003eId-\u003ea()",
        "package": "libmpd",
        "partial": "Id",
        "signature": "Id-\u003eId-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:tagTypes",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of available song metadata.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [String]",
        "fct-source": "src/Network-MPD-Commands.html#tagTypes",
        "fct-type": "function",
        "title": "tagTypes"
      },
      "index": {
        "description": "Retrieve list of available song metadata",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "tagTypes",
        "normalized": "a[String]",
        "package": "libmpd",
        "partial": "Types",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert given value to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Network-MPD-Commands-Types.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "Convert given value to String",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "libmpd",
        "partial": "String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:toText",
      "description": {
        "fct-descr": "\u003cp\u003eConvert given value to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/Network-MPD-Commands-Types.html#toText",
        "fct-type": "method",
        "title": "toText"
      },
      "index": {
        "description": "Convert given value to Text",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "toText",
        "normalized": "a-\u003eText",
        "package": "libmpd",
        "partial": "Text",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:toUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eConvert given value an UTF-8 encoded \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Network-MPD-Commands-Types.html#toUtf8",
        "fct-type": "method",
        "title": "toUtf8"
      },
      "index": {
        "description": "Convert given value an UTF-8 encoded ByteString",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "toUtf8",
        "normalized": "a-\u003eByteString",
        "package": "libmpd",
        "partial": "Utf",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the server's database.\n If no paths are given, all paths will be scanned.\n Unreadable or non-existent paths are silently ignored.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "[Path] -\u003e m ()",
        "fct-source": "src/Network-MPD-Commands.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the server database If no paths are given all paths will be scanned Unreadable or non-existent paths are silently ignored",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "update",
        "normalized": "[Path]-\u003ea()",
        "package": "libmpd",
        "partial": "",
        "signature": "[Path]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:urlHandlers",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a list of supported urlhandlers.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "m [String]",
        "fct-source": "src/Network-MPD-Commands.html#urlHandlers",
        "fct-type": "function",
        "title": "urlHandlers"
      },
      "index": {
        "description": "Retrieve list of supported urlhandlers",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "urlHandlers",
        "normalized": "a[String]",
        "package": "libmpd",
        "partial": "Handlers",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:withMPD",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper for \u003ccode\u003e\u003ca\u003ewithMPDEx\u003c/a\u003e\u003c/code\u003e that uses localhost:6600 as the default\n host:port, or whatever is found in the environment variables MPD_HOST and\n MPD_PORT. If MPD_HOST is of the form \"password@host\" the password\n will be supplied as well.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e withMPD $ play Nothing\n withMPD $ add_ \"tool\" \u003e\u003e play Nothing \u003e\u003e currentSong\n\u003c/pre\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "MPD a -\u003e IO (Response a)",
        "fct-source": "src/Network-MPD.html#withMPD",
        "fct-type": "function",
        "title": "withMPD"
      },
      "index": {
        "description": "wrapper for withMPDEx that uses localhost as the default host port or whatever is found in the environment variables MPD HOST and MPD PORT If MPD HOST is of the form password@host the password will be supplied as well Examples withMPD play Nothing withMPD add tool play Nothing currentSong",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "withMPD",
        "normalized": "MPD a-\u003eIO(Response a)",
        "package": "libmpd",
        "partial": "MPD",
        "signature": "MPD a-\u003eIO(Response a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:withMPDEx",
      "description": {
        "fct-descr": "\u003cp\u003eThe most configurable API for running an MPD action.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Host -\u003e Port -\u003e Password -\u003e MPD a -\u003e IO (Response a)",
        "fct-source": "src/Network-MPD-Core.html#withMPDEx",
        "fct-type": "function",
        "title": "withMPDEx"
      },
      "index": {
        "description": "The most configurable API for running an MPD action",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "withMPDEx",
        "normalized": "Host-\u003ePort-\u003ePassword-\u003eMPD a-\u003eIO(Response a)",
        "package": "libmpd",
        "partial": "MPDEx",
        "signature": "Host-\u003ePort-\u003ePassword-\u003eMPD a-\u003eIO(Response a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/libmpd/docs/Network-MPD.html#v:withMPD_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithMPD\u003c/a\u003e\u003c/code\u003e, but takes optional arguments that override MPD_HOST and\n MPD_PORT.\n\u003c/p\u003e\u003cp\u003eThis is e.g. useful for clients that optionally take \u003ccode\u003e--port\u003c/code\u003e and \u003ccode\u003e--host\u003c/code\u003e\n as command line arguments, and fall back to \u003ccode\u003e\u003ca\u003ewithMPD\u003c/a\u003e\u003c/code\u003e's defaults if those\n arguments are not given.\n\u003c/p\u003e",
        "fct-module": "Network.MPD",
        "fct-package": "libmpd",
        "fct-signature": "Maybe String-\u003e Maybe String-\u003e MPD a-\u003e IO (Response a)",
        "fct-type": "function",
        "title": "withMPD_"
      },
      "index": {
        "description": "Same as withMPD but takes optional arguments that override MPD HOST and MPD PORT This is e.g useful for clients that optionally take port and host as command line arguments and fall back to withMPD defaults if those arguments are not given",
        "hierarchy": "Network MPD",
        "module": "Network.MPD",
        "name": "withMPD_",
        "normalized": "Maybe String-\u003eMaybe String-\u003eMPD a-\u003eIO(Response a)",
        "package": "libmpd",
        "partial": "MPD",
        "signature": "Maybe String-\u003eMaybe String-\u003eMPD a-\u003eIO(Response a)"
      }
    }
  }
]