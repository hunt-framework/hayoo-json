[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#",
      "description": {
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "module",
        "fct-source": "src/Text-Playlist.html",
        "fct-type": "module",
        "title": "Playlist"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "Playlist",
        "normalized": "",
        "package": "playlists",
        "partial": "Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003ePlaylist formats.\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "data",
        "fct-source": "src/Text-Playlist-Types.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "Playlist formats",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "Format",
        "normalized": "",
        "package": "playlists",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#t:Playlist",
      "description": {
        "fct-descr": "\u003cp\u003eA list of \u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "type",
        "fct-source": "src/Text-Playlist-Types.html#Playlist",
        "fct-type": "type",
        "title": "Playlist"
      },
      "index": {
        "description": "list of Track",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "Playlist",
        "normalized": "",
        "package": "playlists",
        "partial": "Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#t:Track",
      "description": {
        "fct-descr": "\u003cp\u003eA single music file or streaming URL.\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "data",
        "fct-source": "src/Text-Playlist-Types.html#Track",
        "fct-type": "data",
        "title": "Track"
      },
      "index": {
        "description": "single music file or streaming URL",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "Track",
        "normalized": "",
        "package": "playlists",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:M3U",
      "description": {
        "fct-descr": "\u003cp\u003eM3U and M3U8. \u003ca\u003ehttp://en.wikipedia.org/wiki/M3U\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "M3U",
        "fct-source": "src/Text-Playlist-Types.html#Format",
        "fct-type": "function",
        "title": "M3U"
      },
      "index": {
        "description": "M3U and M3U8 http en.wikipedia.org wiki M3U",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "M3U",
        "normalized": "",
        "package": "playlists",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:PLS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/PLS_(file_format)\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "PLS",
        "fct-source": "src/Text-Playlist-Types.html#Format",
        "fct-type": "function",
        "title": "PLS"
      },
      "index": {
        "description": "http en.wikipedia.org wiki PLS file format",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "PLS",
        "normalized": "",
        "package": "playlists",
        "partial": "PLS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:Track",
      "description": {
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "Track",
        "fct-source": "src/Text-Playlist-Types.html#Track",
        "fct-type": "function",
        "title": "Track"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "Track",
        "normalized": "",
        "package": "playlists",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:generatePlaylist",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a lazy \u003ccode\u003eByteString\u003c/code\u003e containing playlist data from the\n given playlist and in the given format.\n\u003c/p\u003e\u003cpre\u003e BL.putStr $ generatePlaylist M3U somePlaylist\n\u003c/pre\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "Format -\u003e Playlist -\u003e ByteString",
        "fct-source": "src/Text-Playlist.html#generatePlaylist",
        "fct-type": "function",
        "title": "generatePlaylist"
      },
      "index": {
        "description": "Generate lazy ByteString containing playlist data from the given playlist and in the given format BL.putStr generatePlaylist M3U somePlaylist",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "generatePlaylist",
        "normalized": "Format-\u003ePlaylist-\u003eByteString",
        "package": "playlists",
        "partial": "Playlist",
        "signature": "Format-\u003ePlaylist-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:parsePlaylist",
      "description": {
        "fct-descr": "\u003cp\u003eParse a playlist from a \u003ccode\u003eByteString\u003c/code\u003e.  Parsing may fail in which\n case an error message is returned in \u003ccode\u003eLeft\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e content \u003c- BS.getContents\n case parsePlaylist M3U content of\n  Left err -\u003e fail $ \"failed to parse playlist: \" ++ err\n  Right x  -\u003e return x\n\u003c/pre\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "Format -\u003e ByteString -\u003e Either String Playlist",
        "fct-source": "src/Text-Playlist.html#parsePlaylist",
        "fct-type": "function",
        "title": "parsePlaylist"
      },
      "index": {
        "description": "Parse playlist from ByteString Parsing may fail in which case an error message is returned in Left content BS.getContents case parsePlaylist M3U content of Left err fail failed to parse playlist err Right return",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "parsePlaylist",
        "normalized": "Format-\u003eByteString-\u003eEither String Playlist",
        "package": "playlists",
        "partial": "Playlist",
        "signature": "Format-\u003eByteString-\u003eEither String Playlist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:trackTitle",
      "description": {
        "fct-descr": "\u003cp\u003eOptional title.\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Text-Playlist-Types.html#Track",
        "fct-type": "function",
        "title": "trackTitle"
      },
      "index": {
        "description": "Optional title",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "trackTitle",
        "normalized": "",
        "package": "playlists",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:trackURL",
      "description": {
        "fct-descr": "\u003cp\u003eURL for a file or streaming resource.\n\u003c/p\u003e",
        "fct-module": "Text.Playlist",
        "fct-package": "playlists",
        "fct-signature": "Text",
        "fct-source": "src/Text-Playlist-Types.html#Track",
        "fct-type": "function",
        "title": "trackURL"
      },
      "index": {
        "description": "URL for file or streaming resource",
        "hierarchy": "Text Playlist",
        "module": "Text.Playlist",
        "name": "trackURL",
        "normalized": "",
        "package": "playlists",
        "partial": "URL",
        "signature": ""
      }
    }
  }
]