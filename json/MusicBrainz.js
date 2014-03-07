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
        "word": "MusicBrainz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "WebService",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-JSON-WebService.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz JSON WebService",
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "WebService",
          "package": "MusicBrainz",
          "partial": "Web Service",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-JSON-WebService.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "getRecordingById",
          "package": "MusicBrainz",
          "signature": "MBID -\u003e m (Either String Recording)",
          "source": "src/Network-Protocol-MusicBrainz-JSON-WebService.html#getRecordingById",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz JSON WebService",
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "getRecordingById",
          "normalized": "MBID-\u003ea(Either String Recording)",
          "package": "MusicBrainz",
          "partial": "Recording By Id",
          "signature": "MBID-\u003em(Either String Recording)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-JSON-WebService.html#v:getRecordingById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "getReleaseById",
          "package": "MusicBrainz",
          "signature": "MBID -\u003e m (Either String Release)",
          "source": "src/Network-Protocol-MusicBrainz-JSON-WebService.html#getReleaseById",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz JSON WebService",
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "getReleaseById",
          "normalized": "MBID-\u003ea(Either String Release)",
          "package": "MusicBrainz",
          "partial": "Release By Id",
          "signature": "MBID-\u003em(Either String Release)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-JSON-WebService.html#v:getReleaseById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "searchReleasesByArtistAndRelease",
          "package": "MusicBrainz",
          "signature": "Text -\u003e Text -\u003e Maybe Int -\u003e Maybe Int -\u003e m (Either String [(Int, Release)])",
          "source": "src/Network-Protocol-MusicBrainz-JSON-WebService.html#searchReleasesByArtistAndRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz JSON WebService",
          "module": "Network.Protocol.MusicBrainz.JSON.WebService",
          "name": "searchReleasesByArtistAndRelease",
          "normalized": "Text-\u003eText-\u003eMaybe Int-\u003eMaybe Int-\u003ea(Either String[(Int,Release)])",
          "package": "MusicBrainz",
          "partial": "Releases By Artist And Release",
          "signature": "Text-\u003eText-\u003eMaybe Int-\u003eMaybe Int-\u003em(Either String[(Int,Release)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-JSON-WebService.html#v:searchReleasesByArtistAndRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Types",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Types",
          "package": "MusicBrainz",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Area",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Area",
          "package": "MusicBrainz",
          "partial": "Area",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Artist",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Artist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Artist",
          "package": "MusicBrainz",
          "partial": "Artist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ArtistCredit",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ArtistCredit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ArtistCredit",
          "package": "MusicBrainz",
          "partial": "Artist Credit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:ArtistCredit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "CoverArtArchive",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#CoverArtArchive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "CoverArtArchive",
          "package": "MusicBrainz",
          "partial": "Cover Art Archive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:CoverArtArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ISO3166Code",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ISO3166Code",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ISO3166Code",
          "package": "MusicBrainz",
          "partial": "ISO Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:ISO3166Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Label",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Label",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Label",
          "package": "MusicBrainz",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "LabelInfo",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#LabelInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "LabelInfo",
          "package": "MusicBrainz",
          "partial": "Label Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:LabelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "MBID",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#MBID",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "MBID",
          "package": "MusicBrainz",
          "partial": "MBID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:MBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Medium",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Medium",
          "package": "MusicBrainz",
          "partial": "Medium",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Medium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Recording",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Recording",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Recording",
          "package": "MusicBrainz",
          "partial": "Recording",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Recording"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Release",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Release",
          "package": "MusicBrainz",
          "partial": "Release",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseEvent",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseEvent",
          "package": "MusicBrainz",
          "partial": "Release Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:ReleaseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseGroup",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseGroup",
          "package": "MusicBrainz",
          "partial": "Release Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:ReleaseGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "TextRepresentation",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#TextRepresentation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "TextRepresentation",
          "package": "MusicBrainz",
          "partial": "Text Representation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:TextRepresentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Track",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Track",
          "package": "MusicBrainz",
          "partial": "Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#t:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Area",
          "package": "MusicBrainz",
          "signature": "Area",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Area",
          "package": "MusicBrainz",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Artist",
          "package": "MusicBrainz",
          "signature": "Artist",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Artist",
          "package": "MusicBrainz",
          "partial": "Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ArtistCredit",
          "package": "MusicBrainz",
          "signature": "ArtistCredit",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ArtistCredit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ArtistCredit",
          "package": "MusicBrainz",
          "partial": "Artist Credit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:ArtistCredit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "CoverArtArchive",
          "package": "MusicBrainz",
          "signature": "CoverArtArchive",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#CoverArtArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "CoverArtArchive",
          "package": "MusicBrainz",
          "partial": "Cover Art Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:CoverArtArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ISO3166Code",
          "package": "MusicBrainz",
          "signature": "ISO3166Code",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ISO3166Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ISO3166Code",
          "package": "MusicBrainz",
          "partial": "ISO Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:ISO3166Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Label",
          "package": "MusicBrainz",
          "signature": "Label",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Label",
          "package": "MusicBrainz",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "LabelInfo",
          "package": "MusicBrainz",
          "signature": "LabelInfo",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "LabelInfo",
          "package": "MusicBrainz",
          "partial": "Label Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:LabelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "MBID",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#MBID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "MBID",
          "package": "MusicBrainz",
          "partial": "MBID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:MBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Medium",
          "package": "MusicBrainz",
          "signature": "Medium",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Medium",
          "package": "MusicBrainz",
          "partial": "Medium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Medium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Recording",
          "package": "MusicBrainz",
          "signature": "Recording",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Recording",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Recording",
          "package": "MusicBrainz",
          "partial": "Recording",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Recording"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Release",
          "package": "MusicBrainz",
          "signature": "Release",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Release",
          "package": "MusicBrainz",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseEvent",
          "package": "MusicBrainz",
          "signature": "ReleaseEvent",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseEvent",
          "package": "MusicBrainz",
          "partial": "Release Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:ReleaseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseGroup",
          "package": "MusicBrainz",
          "signature": "ReleaseGroup",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "ReleaseGroup",
          "package": "MusicBrainz",
          "partial": "Release Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:ReleaseGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "TextRepresentation",
          "package": "MusicBrainz",
          "signature": "TextRepresentation",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#TextRepresentation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "TextRepresentation",
          "package": "MusicBrainz",
          "partial": "Text Representation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:TextRepresentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Track",
          "package": "MusicBrainz",
          "signature": "Track",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "Track",
          "package": "MusicBrainz",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaISO3166_1Codes",
          "package": "MusicBrainz",
          "signature": "[ISO3166Code]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaISO3166_1Codes",
          "normalized": "[ISO Code]",
          "package": "MusicBrainz",
          "partial": "ISO Codes",
          "signature": "[ISO Code]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_areaISO3166_1Codes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaISO3166_2Codes",
          "package": "MusicBrainz",
          "signature": "[ISO3166Code]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaISO3166_2Codes",
          "normalized": "[ISO Code]",
          "package": "MusicBrainz",
          "partial": "ISO Codes",
          "signature": "[ISO Code]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_areaISO3166_2Codes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaISO3166_3Codes",
          "package": "MusicBrainz",
          "signature": "[ISO3166Code]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaISO3166_3Codes",
          "normalized": "[ISO Code]",
          "package": "MusicBrainz",
          "partial": "ISO Codes",
          "signature": "[ISO Code]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_areaISO3166_3Codes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaId",
          "package": "MusicBrainz",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_areaId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaName",
          "package": "MusicBrainz",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_areaName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaSortName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_areaSortName",
          "package": "MusicBrainz",
          "partial": "Sort Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_areaSortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistCreditArtist",
          "package": "MusicBrainz",
          "signature": "Artist",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ArtistCredit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistCreditArtist",
          "package": "MusicBrainz",
          "partial": "Credit Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistCreditArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistCreditJoinPhrase",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ArtistCredit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistCreditJoinPhrase",
          "package": "MusicBrainz",
          "partial": "Credit Join Phrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistCreditJoinPhrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistCreditName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ArtistCredit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistCreditName",
          "package": "MusicBrainz",
          "partial": "Credit Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistCreditName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistDisambiguation",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistDisambiguation",
          "package": "MusicBrainz",
          "partial": "Disambiguation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistDisambiguation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistId",
          "package": "MusicBrainz",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistName",
          "package": "MusicBrainz",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistSortName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Artist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_artistSortName",
          "package": "MusicBrainz",
          "partial": "Sort Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_artistSortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveArtwork",
          "package": "MusicBrainz",
          "signature": "Maybe Bool",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#CoverArtArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveArtwork",
          "package": "MusicBrainz",
          "partial": "Art Archive Artwork",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_coverArtArchiveArtwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveBack",
          "package": "MusicBrainz",
          "signature": "Maybe Bool",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#CoverArtArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveBack",
          "package": "MusicBrainz",
          "partial": "Art Archive Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_coverArtArchiveBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveCount",
          "package": "MusicBrainz",
          "signature": "Maybe Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#CoverArtArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveCount",
          "package": "MusicBrainz",
          "partial": "Art Archive Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_coverArtArchiveCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveFront",
          "package": "MusicBrainz",
          "signature": "Maybe Bool",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#CoverArtArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_coverArtArchiveFront",
          "package": "MusicBrainz",
          "partial": "Art Archive Front",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_coverArtArchiveFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelId",
          "package": "MusicBrainz",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_labelId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelInfoCatalogNumber",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelInfoCatalogNumber",
          "package": "MusicBrainz",
          "partial": "Info Catalog Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_labelInfoCatalogNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelInfoLabel",
          "package": "MusicBrainz",
          "signature": "Label",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelInfoLabel",
          "package": "MusicBrainz",
          "partial": "Info Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_labelInfoLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelLabelCode",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelLabelCode",
          "package": "MusicBrainz",
          "partial": "Label Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_labelLabelCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelName",
          "package": "MusicBrainz",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_labelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelSortName",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_labelSortName",
          "package": "MusicBrainz",
          "partial": "Sort Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_labelSortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumFormat",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumFormat",
          "package": "MusicBrainz",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_mediumFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumPosition",
          "package": "MusicBrainz",
          "signature": "Maybe Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumPosition",
          "package": "MusicBrainz",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_mediumPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTitle",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTitle",
          "package": "MusicBrainz",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_mediumTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTrackCount",
          "package": "MusicBrainz",
          "signature": "Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTrackCount",
          "package": "MusicBrainz",
          "partial": "Track Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_mediumTrackCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTrackList",
          "package": "MusicBrainz",
          "signature": "Maybe [Track]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTrackList",
          "normalized": "Maybe[Track]",
          "package": "MusicBrainz",
          "partial": "Track List",
          "signature": "Maybe[Track]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_mediumTrackList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTrackOffset",
          "package": "MusicBrainz",
          "signature": "Maybe Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Medium",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_mediumTrackOffset",
          "package": "MusicBrainz",
          "partial": "Track Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_mediumTrackOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingArtistCredit",
          "package": "MusicBrainz",
          "signature": "[ArtistCredit]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Recording",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingArtistCredit",
          "normalized": "[ArtistCredit]",
          "package": "MusicBrainz",
          "partial": "Artist Credit",
          "signature": "[ArtistCredit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_recordingArtistCredit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Recording",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingId",
          "package": "MusicBrainz",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_recordingId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingLength",
          "package": "MusicBrainz",
          "signature": "Maybe Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Recording",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingLength",
          "package": "MusicBrainz",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_recordingLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingTitle",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Recording",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_recordingTitle",
          "package": "MusicBrainz",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_recordingTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseASIN",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseASIN",
          "package": "MusicBrainz",
          "partial": "ASIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseASIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseArtistCredit",
          "package": "MusicBrainz",
          "signature": "[ArtistCredit]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseArtistCredit",
          "normalized": "[ArtistCredit]",
          "package": "MusicBrainz",
          "partial": "Artist Credit",
          "signature": "[ArtistCredit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseArtistCredit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseBarcode",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseBarcode",
          "package": "MusicBrainz",
          "partial": "Barcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseBarcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseCountry",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseCountry",
          "package": "MusicBrainz",
          "partial": "Country",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseCountry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseCoverArtArchive",
          "package": "MusicBrainz",
          "signature": "Maybe CoverArtArchive",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseCoverArtArchive",
          "package": "MusicBrainz",
          "partial": "Cover Art Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseCoverArtArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseDate",
          "package": "MusicBrainz",
          "signature": "Maybe Day",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseDate",
          "package": "MusicBrainz",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseEventArea",
          "package": "MusicBrainz",
          "signature": "Maybe Area",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseEventArea",
          "package": "MusicBrainz",
          "partial": "Event Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseEventArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseEventDate",
          "package": "MusicBrainz",
          "signature": "Maybe Day",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseEventDate",
          "package": "MusicBrainz",
          "partial": "Event Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseEventDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseEvents",
          "package": "MusicBrainz",
          "signature": "[ReleaseEvent]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseEvents",
          "normalized": "[ReleaseEvent]",
          "package": "MusicBrainz",
          "partial": "Events",
          "signature": "[ReleaseEvent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupArtistCredit",
          "package": "MusicBrainz",
          "signature": "[ArtistCredit]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupArtistCredit",
          "normalized": "[ArtistCredit]",
          "package": "MusicBrainz",
          "partial": "Group Artist Credit",
          "signature": "[ArtistCredit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseGroupArtistCredit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupFirstReleaseDate",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupFirstReleaseDate",
          "package": "MusicBrainz",
          "partial": "Group First Release Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseGroupFirstReleaseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupId",
          "package": "MusicBrainz",
          "partial": "Group Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseGroupId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupPrimaryType",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupPrimaryType",
          "package": "MusicBrainz",
          "partial": "Group Primary Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseGroupPrimaryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupTitle",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupTitle",
          "package": "MusicBrainz",
          "partial": "Group Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseGroupTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupType",
          "package": "MusicBrainz",
          "signature": "Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ReleaseGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseGroupType",
          "package": "MusicBrainz",
          "partial": "Group Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseGroupType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseId",
          "package": "MusicBrainz",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseMedia",
          "package": "MusicBrainz",
          "signature": "Vector Medium",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseMedia",
          "package": "MusicBrainz",
          "partial": "Media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releasePackaging",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releasePackaging",
          "package": "MusicBrainz",
          "partial": "Packaging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releasePackaging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseQuality",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseQuality",
          "package": "MusicBrainz",
          "partial": "Quality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseStatus",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseStatus",
          "package": "MusicBrainz",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseTextRepresentation",
          "package": "MusicBrainz",
          "signature": "Maybe TextRepresentation",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseTextRepresentation",
          "package": "MusicBrainz",
          "partial": "Text Representation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseTextRepresentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseTitle",
          "package": "MusicBrainz",
          "signature": "Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_releaseTitle",
          "package": "MusicBrainz",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_releaseTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_textRepLanguage",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#TextRepresentation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_textRepLanguage",
          "package": "MusicBrainz",
          "partial": "Rep Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_textRepLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_textRepScript",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#TextRepresentation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_textRepScript",
          "package": "MusicBrainz",
          "partial": "Rep Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_textRepScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackArtistCredit",
          "package": "MusicBrainz",
          "signature": "[ArtistCredit]",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackArtistCredit",
          "normalized": "[ArtistCredit]",
          "package": "MusicBrainz",
          "partial": "Artist Credit",
          "signature": "[ArtistCredit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_trackArtistCredit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackId",
          "package": "MusicBrainz",
          "signature": "MBID",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackId",
          "package": "MusicBrainz",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_trackId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackLength",
          "package": "MusicBrainz",
          "signature": "Maybe Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackLength",
          "package": "MusicBrainz",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_trackLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackNumber",
          "package": "MusicBrainz",
          "signature": "Maybe Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackNumber",
          "package": "MusicBrainz",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_trackNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackPosition",
          "package": "MusicBrainz",
          "signature": "Maybe Integer",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackPosition",
          "package": "MusicBrainz",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_trackPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackRecording",
          "package": "MusicBrainz",
          "signature": "Recording",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "_trackRecording",
          "package": "MusicBrainz",
          "partial": "Recording",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:_trackRecording"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "unISO3166Code",
          "package": "MusicBrainz",
          "signature": "Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#ISO3166Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "unISO3166Code",
          "package": "MusicBrainz",
          "partial": "ISO Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:unISO3166Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "unMBID",
          "package": "MusicBrainz",
          "signature": "Text",
          "source": "src/Network-Protocol-MusicBrainz-Types.html#MBID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Types",
          "module": "Network.Protocol.MusicBrainz.Types",
          "name": "unMBID",
          "package": "MusicBrainz",
          "partial": "MBID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Types.html#v:unMBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Utils",
          "name": "Utils",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Utils",
          "module": "Network.Protocol.MusicBrainz.Utils",
          "name": "Utils",
          "package": "MusicBrainz",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Utils",
          "name": "nameCreditsToArtistName",
          "package": "MusicBrainz",
          "signature": "[ArtistCredit] -\u003e Text",
          "source": "src/Network-Protocol-MusicBrainz-Utils.html#nameCreditsToArtistName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Utils",
          "module": "Network.Protocol.MusicBrainz.Utils",
          "name": "nameCreditsToArtistName",
          "normalized": "[ArtistCredit]-\u003eText",
          "package": "MusicBrainz",
          "partial": "Credits To Artist Name",
          "signature": "[ArtistCredit]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Utils.html#v:nameCreditsToArtistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.Utils",
          "name": "nameCreditsToArtistSortName",
          "package": "MusicBrainz",
          "signature": "[ArtistCredit] -\u003e Text",
          "source": "src/Network-Protocol-MusicBrainz-Utils.html#nameCreditsToArtistSortName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz Utils",
          "module": "Network.Protocol.MusicBrainz.Utils",
          "name": "nameCreditsToArtistSortName",
          "normalized": "[ArtistCredit]-\u003eText",
          "package": "MusicBrainz",
          "partial": "Credits To Artist Sort Name",
          "signature": "[ArtistCredit]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-Utils.html#v:nameCreditsToArtistSortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "WebService",
          "package": "MusicBrainz",
          "source": "src/Network-Protocol-MusicBrainz-XML2-WebService.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz XML2 WebService",
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "WebService",
          "package": "MusicBrainz",
          "partial": "Web Service",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-XML2-WebService.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "getRecordingById",
          "package": "MusicBrainz",
          "signature": "MBID -\u003e m Recording",
          "source": "src/Network-Protocol-MusicBrainz-XML2-WebService.html#getRecordingById",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz XML2 WebService",
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "getRecordingById",
          "normalized": "MBID-\u003ea Recording",
          "package": "MusicBrainz",
          "partial": "Recording By Id",
          "signature": "MBID-\u003em Recording",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-XML2-WebService.html#v:getRecordingById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "getReleaseById",
          "package": "MusicBrainz",
          "signature": "MBID -\u003e m Release",
          "source": "src/Network-Protocol-MusicBrainz-XML2-WebService.html#getReleaseById",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz XML2 WebService",
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "getReleaseById",
          "normalized": "MBID-\u003ea Release",
          "package": "MusicBrainz",
          "partial": "Release By Id",
          "signature": "MBID-\u003em Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-XML2-WebService.html#v:getReleaseById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "searchReleasesByArtistAndRelease",
          "package": "MusicBrainz",
          "signature": "Text -\u003e Text -\u003e Maybe Int -\u003e Maybe Int -\u003e m [(Int, Release)]",
          "source": "src/Network-Protocol-MusicBrainz-XML2-WebService.html#searchReleasesByArtistAndRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol MusicBrainz XML2 WebService",
          "module": "Network.Protocol.MusicBrainz.XML2.WebService",
          "name": "searchReleasesByArtistAndRelease",
          "normalized": "Text-\u003eText-\u003eMaybe Int-\u003eMaybe Int-\u003ea[(Int,Release)]",
          "package": "MusicBrainz",
          "partial": "Releases By Artist And Release",
          "signature": "Text-\u003eText-\u003eMaybe Int-\u003eMaybe Int-\u003em[(Int,Release)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MusicBrainz/docs/Network-Protocol-MusicBrainz-XML2-WebService.html#v:searchReleasesByArtistAndRelease"
      }
    }
  ]
]