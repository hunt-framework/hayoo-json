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
        "word": "playlists"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Playlist",
          "name": "Playlist",
          "package": "playlists",
          "source": "src/Text-Playlist.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "Playlist",
          "package": "playlists",
          "partial": "Playlist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaylist formats.\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "Format",
          "package": "playlists",
          "source": "src/Text-Playlist-Types.html#Format",
          "type": "data"
        },
        "index": {
          "description": "Playlist formats",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "Format",
          "package": "playlists",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of \u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "Playlist",
          "package": "playlists",
          "source": "src/Text-Playlist-Types.html#Playlist",
          "type": "type"
        },
        "index": {
          "description": "list of Track",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "Playlist",
          "package": "playlists",
          "partial": "Playlist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#t:Playlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single music file or streaming URL.\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "Track",
          "package": "playlists",
          "source": "src/Text-Playlist-Types.html#Track",
          "type": "data"
        },
        "index": {
          "description": "single music file or streaming URL",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "Track",
          "package": "playlists",
          "partial": "Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#t:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eM3U and M3U8. \u003ca\u003ehttp://en.wikipedia.org/wiki/M3U\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "M3U",
          "package": "playlists",
          "signature": "M3U",
          "source": "src/Text-Playlist-Types.html#Format",
          "type": "function"
        },
        "index": {
          "description": "M3U and M3U8 http en.wikipedia.org wiki M3U",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "M3U",
          "package": "playlists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:M3U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/PLS_(file_format)\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "PLS",
          "package": "playlists",
          "signature": "PLS",
          "source": "src/Text-Playlist-Types.html#Format",
          "type": "function"
        },
        "index": {
          "description": "http en.wikipedia.org wiki PLS file format",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "PLS",
          "package": "playlists",
          "partial": "PLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:PLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Playlist",
          "name": "Track",
          "package": "playlists",
          "signature": "Track",
          "source": "src/Text-Playlist-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "Track",
          "package": "playlists",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a lazy \u003ccode\u003eByteString\u003c/code\u003e containing playlist data from the\n given playlist and in the given format.\n\u003c/p\u003e\u003cpre\u003e BL.putStr $ generatePlaylist M3U somePlaylist\n\u003c/pre\u003e",
          "module": "Text.Playlist",
          "name": "generatePlaylist",
          "package": "playlists",
          "signature": "Format -\u003e Playlist -\u003e ByteString",
          "source": "src/Text-Playlist.html#generatePlaylist",
          "type": "function"
        },
        "index": {
          "description": "Generate lazy ByteString containing playlist data from the given playlist and in the given format BL.putStr generatePlaylist M3U somePlaylist",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "generatePlaylist",
          "normalized": "Format-\u003ePlaylist-\u003eByteString",
          "package": "playlists",
          "partial": "Playlist",
          "signature": "Format-\u003ePlaylist-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:generatePlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a playlist from a \u003ccode\u003eByteString\u003c/code\u003e.  Parsing may fail in which\n case an error message is returned in \u003ccode\u003eLeft\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e content \u003c- BS.getContents\n case parsePlaylist M3U content of\n  Left err -\u003e fail $ \"failed to parse playlist: \" ++ err\n  Right x  -\u003e return x\n\u003c/pre\u003e",
          "module": "Text.Playlist",
          "name": "parsePlaylist",
          "package": "playlists",
          "signature": "Format -\u003e ByteString -\u003e Either String Playlist",
          "source": "src/Text-Playlist.html#parsePlaylist",
          "type": "function"
        },
        "index": {
          "description": "Parse playlist from ByteString Parsing may fail in which case an error message is returned in Left content BS.getContents case parsePlaylist M3U content of Left err fail failed to parse playlist err Right return",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "parsePlaylist",
          "normalized": "Format-\u003eByteString-\u003eEither String Playlist",
          "package": "playlists",
          "partial": "Playlist",
          "signature": "Format-\u003eByteString-\u003eEither String Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:parsePlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional title.\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "trackTitle",
          "package": "playlists",
          "signature": "Maybe Text",
          "source": "src/Text-Playlist-Types.html#Track",
          "type": "function"
        },
        "index": {
          "description": "Optional title",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "trackTitle",
          "package": "playlists",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:trackTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL for a file or streaming resource.\n\u003c/p\u003e",
          "module": "Text.Playlist",
          "name": "trackURL",
          "package": "playlists",
          "signature": "Text",
          "source": "src/Text-Playlist-Types.html#Track",
          "type": "function"
        },
        "index": {
          "description": "URL for file or streaming resource",
          "hierarchy": "Text Playlist",
          "module": "Text.Playlist",
          "name": "trackURL",
          "package": "playlists",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/playlists/docs/Text-Playlist.html#v:trackURL"
      }
    }
  ]
]