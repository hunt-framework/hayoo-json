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
        "word": "liblastfm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm album API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Album as Album\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Album",
          "name": "Album",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Album.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm album API This module is intended to be imported qualified import qualified Network.Lastfm.Album as Album",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "Album",
          "package": "liblastfm",
          "partial": "Album",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify (\u003ccode\u003e\u003ca\u003eArtist\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eAlbum\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;) and (\u003ccode\u003e\u003ca\u003eMBID\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;)\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "ArtistAlbumOrMBID",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Album.html#ArtistAlbumOrMBID",
          "type": "class"
        },
        "index": {
          "description": "Unify Artist Album and MBID",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "ArtistAlbumOrMBID",
          "package": "liblastfm",
          "partial": "Artist Album Or MBID",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#t:ArtistAlbumOrMBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag an album using a list of user supplied tags.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.addTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "addTags",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Album -\u003e [Tag] -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Album.html#addTags",
          "type": "function"
        },
        "index": {
          "description": "Tag an album using list of user supplied tags http www.last.fm api show album.addTags",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "addTags",
          "normalized": "Request a(Artist-\u003eAlbum-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Tags",
          "signature": "Request f(Artist-\u003eAlbum-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:addTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of Buy Links for a particular Album. It is\n required that you supply either the artist and track params or the mbid parameter.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getBuylinks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "getBuyLinks",
          "package": "liblastfm",
          "signature": "Request f (Country -\u003e a)",
          "source": "src/Network-Lastfm-Album.html#getBuyLinks",
          "type": "function"
        },
        "index": {
          "description": "Get list of Buy Links for particular Album It is required that you supply either the artist and track params or the mbid parameter Optional autocorrect http www.last.fm api show album.getBuylinks",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "getBuyLinks",
          "normalized": "Request a(Country-\u003eb)",
          "package": "liblastfm",
          "partial": "Buy Links",
          "signature": "Request f(Country-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getBuyLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the metadata for an album on Last.fm using the album name or\n a musicbrainz id. See playlist.fetch on how to get the album playlist.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusername\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elanguage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getInfo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "getInfo",
          "package": "liblastfm",
          "signature": "Request f a",
          "source": "src/Network-Lastfm-Album.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the metadata for an album on Last.fm using the album name or musicbrainz id See playlist.fetch on how to get the album playlist Optional autocorrect username language http www.last.fm api show album.getInfo",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "getInfo",
          "package": "liblastfm",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet shouts for this album.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getShouts\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "getShouts",
          "package": "liblastfm",
          "signature": "Request f a",
          "source": "src/Network-Lastfm-Album.html#getShouts",
          "type": "function"
        },
        "index": {
          "description": "Get shouts for this album Optional autocorrect limit page http www.last.fm api show album.getShouts",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "getShouts",
          "package": "liblastfm",
          "partial": "Shouts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getShouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tags applied by an individual user to an album on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "getTags",
          "package": "liblastfm",
          "signature": "Request f a",
          "source": "src/Network-Lastfm-Album.html#getTags",
          "type": "function"
        },
        "index": {
          "description": "Get the tags applied by an individual user to an album on Last.fm Optional autocorrect user http www.last.fm api show album.getTags",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "getTags",
          "package": "liblastfm",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tags for an album on Last.fm, ordered by popularity.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "getTopTags",
          "package": "liblastfm",
          "signature": "Request f a",
          "source": "src/Network-Lastfm-Album.html#getTopTags",
          "type": "function"
        },
        "index": {
          "description": "Get the top tags for an album on Last.fm ordered by popularity Optional autocorrect http www.last.fm api show album.getTopTags",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "getTopTags",
          "package": "liblastfm",
          "partial": "Top Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getTopTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a user's tag from an album.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.removeTag\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "removeTag",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Album -\u003e Tag -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Album.html#removeTag",
          "type": "function"
        },
        "index": {
          "description": "Remove user tag from an album http www.last.fm api show album.removeTag",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "removeTag",
          "normalized": "Request a(Artist-\u003eAlbum-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Tag",
          "signature": "Request f(Artist-\u003eAlbum-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:removeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for an album by name. Returns album matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.search\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "search",
          "package": "liblastfm",
          "signature": "Request f (Album -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Album.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search for an album by name Returns album matches sorted by relevance Optional limit page http www.last.fm api show album.search",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "search",
          "normalized": "Request a(Album-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f(Album-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare an album with one or more Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecipient\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.share\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Album",
          "name": "share",
          "package": "liblastfm",
          "signature": "Request f (Album -\u003e Artist -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Album.html#share",
          "type": "function"
        },
        "index": {
          "description": "Share an album with one or more Last.fm users or other friends Optional public message recipient http www.last.fm api show album.share",
          "hierarchy": "Network Lastfm Album",
          "module": "Network.Lastfm.Album",
          "name": "share",
          "normalized": "Request a(Album-\u003eArtist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Album-\u003eArtist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm artist API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Artist as Artist\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "Artist",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Artist.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm artist API This module is intended to be imported qualified import qualified Network.Lastfm.Artist as Artist",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "Artist",
          "package": "liblastfm",
          "partial": "Artist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify (\u003ccode\u003e\u003ca\u003eArtist\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;) and (\u003ccode\u003e\u003ca\u003eMBID\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;)\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "ArtistOrMBID",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Artist.html#ArtistOrMBID",
          "type": "class"
        },
        "index": {
          "description": "Unify Artist and MBID",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "ArtistOrMBID",
          "package": "liblastfm",
          "partial": "Artist Or MBID",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#t:ArtistOrMBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag an artist with one or more user supplied tags.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.addTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "addTags",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e [Tag] -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Artist.html#addTags",
          "type": "function"
        },
        "index": {
          "description": "Tag an artist with one or more user supplied tags http www.last.fm api show artist.addTags",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "addTags",
          "normalized": "Request a(Artist-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Tags",
          "signature": "Request f(Artist-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:addTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the last.fm corrections data to check whether the\n supplied artist has a correction to a canonical artist\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getCorrection\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getCorrection",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getCorrection",
          "type": "function"
        },
        "index": {
          "description": "Use the last.fm corrections data to check whether the supplied artist has correction to canonical artist http www.last.fm api show artist.getCorrection",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getCorrection",
          "normalized": "Request a(Artist-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Correction",
          "signature": "Request f(Artist-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of upcoming events for this artist. Easily\n integratable into calendars, using the ical standard (see feeds section below).\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003epages\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getEvents",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getEvents",
          "type": "function"
        },
        "index": {
          "description": "Get list of upcoming events for this artist Easily integratable into calendars using the ical standard see feeds section below Optional autocorrect limit pages festivalsonly http www.last.fm api show artist.getEvents",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getEvents",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Events",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the metadata for an artist. Includes biography.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elanguage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusername\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getInfo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getInfo",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the metadata for an artist Includes biography Optional language autocorrect username http www.last.fm api show artist.getInfo",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getInfo",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Info",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a paginated list of all the events this artist has played at in the past.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getPastEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getPastEvents",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getPastEvents",
          "type": "function"
        },
        "index": {
          "description": "Get paginated list of all the events this artist has played at in the past Optional page autocorrect limit http www.last.fm api show artist.getPastEvents",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getPastEvents",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Past Events",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getPastEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a podcast of free mp3s based on an artist\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getPodcast\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getPodcast",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getPodcast",
          "type": "function"
        },
        "index": {
          "description": "Get podcast of free mp3s based on an artist Optional autocorrect http www.last.fm api show artist.getPodcast",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getPodcast",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Podcast",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getPodcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet shouts for this artist. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional:\u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getShouts\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getShouts",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getShouts",
          "type": "function"
        },
        "index": {
          "description": "Get shouts for this artist Also available as an rss feed Optional autocorrect limit page http www.last.fm api show artist.getShouts",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getShouts",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Shouts",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getShouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the artists similar to this artist\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getSimilar\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getSimilar",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getSimilar",
          "type": "function"
        },
        "index": {
          "description": "Get all the artists similar to this artist Optional limit autocorrect http www.last.fm api show artist.getSimilar",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getSimilar",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Similar",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getSimilar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tags applied by an individual user to an artist on Last.fm.\n If accessed as an authenticated service \u003cem\u003eand\u003c/em\u003e you don't supply a\n user parameter then this service will return tags for\n the authenticated user. To retrieve the list of top tags applied\n to an artist by all users use \u003ccode\u003e\u003ca\u003egetTopTags\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003euser\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getTags",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e r)",
          "source": "src/Network-Lastfm-Artist.html#getTags",
          "type": "function"
        },
        "index": {
          "description": "Get the tags applied by an individual user to an artist on Last.fm If accessed as an authenticated service and you don supply user parameter then this service will return tags for the authenticated user To retrieve the list of top tags applied to an artist by all users use getTopTags Optional user autocorrect http www.last.fm api show artist.getTags",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getTags",
          "normalized": "Request a(b-\u003eAPIKey-\u003ec)",
          "package": "liblastfm",
          "partial": "Tags",
          "signature": "Request f(a-\u003eAPIKey-\u003er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top albums for an artist on Last.fm, ordered by popularity.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopAlbums\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getTopAlbums",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getTopAlbums",
          "type": "function"
        },
        "index": {
          "description": "Get the top albums for an artist on Last.fm ordered by popularity Optional autocorrect page limit http www.last.fm api show artist.getTopAlbums",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getTopAlbums",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Albums",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top fans for an artist on Last.fm, based on listening data.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopFans\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getTopFans",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getTopFans",
          "type": "function"
        },
        "index": {
          "description": "Get the top fans for an artist on Last.fm based on listening data Optional autocorrect http www.last.fm api show artist.getTopFans",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getTopFans",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Fans",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopFans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tags for an artist on Last.fm, ordered by popularity.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getTopTags",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getTopTags",
          "type": "function"
        },
        "index": {
          "description": "Get the top tags for an artist on Last.fm ordered by popularity Optional autocorrect http www.last.fm api show artist.getTopTags",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getTopTags",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tags",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tracks by an artist on Last.fm, ordered by popularity\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "getTopTracks",
          "package": "liblastfm",
          "signature": "Request f (a -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#getTopTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the top tracks by an artist on Last.fm ordered by popularity Optional autocorrect page limit http www.last.fm api show artist.getTopTracks",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "getTopTracks",
          "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tracks",
          "signature": "Request f(a-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a user's tag from an artist.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.removeTag\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "removeTag",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Tag -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Artist.html#removeTag",
          "type": "function"
        },
        "index": {
          "description": "Remove user tag from an artist http www.last.fm api show artist.removeTag",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "removeTag",
          "normalized": "Request a(Artist-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Tag",
          "signature": "Request f(Artist-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:removeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for an artist by name. Returns artist matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.search\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "search",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Artist.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search for an artist by name Returns artist matches sorted by relevance Optional limit page http www.last.fm api show artist.search",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "search",
          "normalized": "Request a(Artist-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare an artist with Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.share\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "share",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Artist.html#share",
          "type": "function"
        },
        "index": {
          "description": "Share an artist with Last.fm users or other friends Optional message public http www.last.fm api show artist.share",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "share",
          "normalized": "Request a(Artist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShout in this artist's shoutbox\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.shout\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Artist",
          "name": "shout",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Message -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Artist.html#shout",
          "type": "function"
        },
        "index": {
          "description": "Shout in this artist shoutbox http www.last.fm api show artist.shout",
          "hierarchy": "Network Lastfm Artist",
          "module": "Network.Lastfm.Artist",
          "name": "shout",
          "normalized": "Request a(Artist-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:shout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm authentication procedure helpers\n\u003c/p\u003e\u003cp\u003eBasically, lastfm provides 3 ways to authenticate user:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e web application - \u003ca\u003ehttp://www.last.fm/api/webauth\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e desktop application - \u003ca\u003ehttp://www.last.fm/api/desktopauth\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e modile application - \u003ca\u003ehttp://www.last.fm/api/mobileauth\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that you can use any of them in your\n application despite their names\n\u003c/p\u003e\u003cp\u003eHow to get session key for yourself for debug with GHCi:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Network.Lastfm\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Network.Lastfm.Authentication\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elastfm $ getToken \u003c*\u003e apiKey \"__API_KEY__\" \u003c* json\n\u003c/code\u003e\u003c/strong\u003eJust (Object fromList [(\"token\",String \"__TOKEN__\")])\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn . link $ apiKey \"__API_KEY__\" \u003c* token \"__TOKEN__\"\n\u003c/code\u003e\u003c/strong\u003ehttp://www.last.fm/api/auth/?api_key=__API_KEY__&token=__TOKEN__\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e-- Click that link ^^^\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elastfm . sign \"__SECRET__\" $ getSession \u003c*\u003e token \"__TOKEN__\" \u003c*\u003e apiKey \"__API_KEY__\"  \u003c* json\n\u003c/code\u003e\u003c/strong\u003eJust (Object fromList [(\"session\",Object fromList [(\"name\",String \"__USER__\"),(\"subscriber\",String \"0\"),(\"key\",String \"__SESSION_KEY__\")])])\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Authentication",
          "name": "Authentication",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Authentication.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm authentication procedure helpers Basically lastfm provides ways to authenticate user web application http www.last.fm api webauth desktop application http www.last.fm api desktopauth modile application http www.last.fm api mobileauth Note that you can use any of them in your application despite their names How to get session key for yourself for debug with GHCi import Network.Lastfm import Network.Lastfm.Authentication set XOverloadedStrings lastfm getToken apiKey API KEY json Just Object fromList token String TOKEN putStrLn link apiKey API KEY token TOKEN http www.last.fm api auth api key API KEY token TOKEN Click that link lastfm sign SECRET getSession token TOKEN apiKey API KEY json Just Object fromList session Object fromList name String USER subscriber String key String SESSION KEY",
          "hierarchy": "Network Lastfm Authentication",
          "module": "Network.Lastfm.Authentication",
          "name": "Authentication",
          "package": "liblastfm",
          "partial": "Authentication",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet session key\n\u003c/p\u003e",
          "module": "Network.Lastfm.Authentication",
          "name": "getMobileSession",
          "package": "liblastfm",
          "signature": "Request f (Username -\u003e Password -\u003e APIKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Authentication.html#getMobileSession",
          "type": "function"
        },
        "index": {
          "description": "Get session key",
          "hierarchy": "Network Lastfm Authentication",
          "module": "Network.Lastfm.Authentication",
          "name": "getMobileSession",
          "normalized": "Request a(Username-\u003ePassword-\u003eAPIKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Mobile Session",
          "signature": "Request f(Username-\u003ePassword-\u003eAPIKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:getMobileSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet session key\n\u003c/p\u003e",
          "module": "Network.Lastfm.Authentication",
          "name": "getSession",
          "package": "liblastfm",
          "signature": "Request f (Token -\u003e APIKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Authentication.html#getSession",
          "type": "function"
        },
        "index": {
          "description": "Get session key",
          "hierarchy": "Network Lastfm Authentication",
          "module": "Network.Lastfm.Authentication",
          "name": "getSession",
          "normalized": "Request a(Token-\u003eAPIKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Session",
          "signature": "Request f(Token-\u003eAPIKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet authorization token\n\u003c/p\u003e",
          "module": "Network.Lastfm.Authentication",
          "name": "getToken",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Authentication.html#getToken",
          "type": "function"
        },
        "index": {
          "description": "Get authorization token",
          "hierarchy": "Network Lastfm Authentication",
          "module": "Network.Lastfm.Authentication",
          "name": "getToken",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Token",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:getToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct link user should follow to approve application\n\u003c/p\u003e",
          "module": "Network.Lastfm.Authentication",
          "name": "link",
          "package": "liblastfm",
          "signature": "Request f a -\u003e String",
          "source": "src/Network-Lastfm-Authentication.html#link",
          "type": "function"
        },
        "index": {
          "description": "Construct link user should follow to approve application",
          "hierarchy": "Network Lastfm Authentication",
          "module": "Network.Lastfm.Authentication",
          "name": "link",
          "normalized": "Request a b-\u003eString",
          "package": "liblastfm",
          "signature": "Request f a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm chart API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Chart as Chart\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "Chart",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Chart.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm chart API This module is intended to be imported qualified import qualified Network.Lastfm.Chart as Chart",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "Chart",
          "package": "liblastfm",
          "partial": "Chart",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the hyped artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getHypedArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "getHypedArtists",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Chart.html#getHypedArtists",
          "type": "function"
        },
        "index": {
          "description": "Get the hyped artists chart Optional page limit http www.last.fm api show chart.getHypedArtists",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "getHypedArtists",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Hyped Artists",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getHypedArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getHypedTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "getHypedTracks",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Chart.html#getHypedTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the top artists chart Optional page limit http www.last.fm api show chart.getHypedTracks",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "getHypedTracks",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Hyped Tracks",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getHypedTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the most loved tracks chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getLovedTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "getLovedTracks",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Chart.html#getLovedTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the most loved tracks chart Optional page limit http www.last.fm api show chart.getLovedTracks",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "getLovedTracks",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Loved Tracks",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getLovedTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "getTopArtists",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Chart.html#getTopArtists",
          "type": "function"
        },
        "index": {
          "description": "Get the top artists chart Optional page limit http www.last.fm api show chart.getTopArtists",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "getTopArtists",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Artists",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getTopArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "getTopTags",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Chart.html#getTopTags",
          "type": "function"
        },
        "index": {
          "description": "Get the top artists chart Optional page limit http www.last.fm api show chart.getTopTags",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "getTopTags",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tags",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getTopTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tracks chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Chart",
          "name": "getTopTracks",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Chart.html#getTopTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the top tracks chart Optional page limit http www.last.fm api show chart.getTopTracks",
          "hierarchy": "Network Lastfm Chart",
          "module": "Network.Lastfm.Chart",
          "name": "getTopTracks",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tracks",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getTopTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm event API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Event as Event\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Event",
          "name": "Event",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Event.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm event API This module is intended to be imported qualified import qualified Network.Lastfm.Event as Event",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "Event",
          "package": "liblastfm",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a user's attendance status for an event.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.attend\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Event",
          "name": "attend",
          "package": "liblastfm",
          "signature": "Request f (Event -\u003e Status -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Event.html#attend",
          "type": "function"
        },
        "index": {
          "description": "Set user attendance status for an event http www.last.fm api show event.attend",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "attend",
          "normalized": "Request a(Event-\u003eStatus-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Event-\u003eStatus-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:attend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of attendees for an event.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.getAttendees\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Event",
          "name": "getAttendees",
          "package": "liblastfm",
          "signature": "Request f (Event -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Event.html#getAttendees",
          "type": "function"
        },
        "index": {
          "description": "Get list of attendees for an event Optional page limit http www.last.fm api show event.getAttendees",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "getAttendees",
          "normalized": "Request a(Event-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Attendees",
          "signature": "Request f(Event-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:getAttendees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the metadata for an event on Last.fm. Includes attendance and lineup information.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.getInfo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Event",
          "name": "getInfo",
          "package": "liblastfm",
          "signature": "Request f (Event -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Event.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the metadata for an event on Last.fm Includes attendance and lineup information http www.last.fm api show event.getInfo",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "getInfo",
          "normalized": "Request a(Event-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Info",
          "signature": "Request f(Event-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet shouts for this event. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.getShouts\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Event",
          "name": "getShouts",
          "package": "liblastfm",
          "signature": "Request f (Event -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Event.html#getShouts",
          "type": "function"
        },
        "index": {
          "description": "Get shouts for this event Also available as an rss feed Optional page limit http www.last.fm api show event.getShouts",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "getShouts",
          "normalized": "Request a(Event-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Shouts",
          "signature": "Request f(Event-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:getShouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare an event with one or more Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.share\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Event",
          "name": "share",
          "package": "liblastfm",
          "signature": "Request f (Event -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Event.html#share",
          "type": "function"
        },
        "index": {
          "description": "Share an event with one or more Last.fm users or other friends Optional public message http www.last.fm api show event.share",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "share",
          "normalized": "Request a(Event-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Event-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShout in this event's shoutbox\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.shout\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Event",
          "name": "shout",
          "package": "liblastfm",
          "signature": "Request f (Event -\u003e Message -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Event.html#shout",
          "type": "function"
        },
        "index": {
          "description": "Shout in this event shoutbox http www.last.fm api show event.shout",
          "hierarchy": "Network Lastfm Event",
          "module": "Network.Lastfm.Event",
          "name": "shout",
          "normalized": "Request a(Event-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Event-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:shout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm geo API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Geo as Geo\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "Geo",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Geo.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm geo API This module is intended to be imported qualified import qualified Network.Lastfm.Geo as Geo",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "Geo",
          "package": "liblastfm",
          "partial": "Geo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all events in a specific location by country or city name.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elongitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elatitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getEvents",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getEvents",
          "type": "function"
        },
        "index": {
          "description": "Get all events in specific location by country or city name Optional longitude latitude location distance page tag festivalsonly limit http www.last.fm api show geo.getEvents",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getEvents",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Events",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a chart of artists for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroArtistChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroArtistChart",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroArtistChart",
          "type": "function"
        },
        "index": {
          "description": "Get chart of artists for metro Optional start end page limit http www.last.fm api show geo.getMetroArtistChart",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroArtistChart",
          "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Artist Chart",
          "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroArtistChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a chart of hyped (up and coming) artists for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroHypeArtistChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroHypeArtistChart",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroHypeArtistChart",
          "type": "function"
        },
        "index": {
          "description": "Get chart of hyped up and coming artists for metro Optional start end page limit http www.last.fm api show geo.getMetroHypeArtistChart",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroHypeArtistChart",
          "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Hype Artist Chart",
          "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroHypeArtistChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a chart of tracks for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroHypeTrackChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroHypeTrackChart",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroHypeTrackChart",
          "type": "function"
        },
        "index": {
          "description": "Get chart of tracks for metro Optional start end page limit http www.last.fm api show geo.getMetroHypeTrackChart",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroHypeTrackChart",
          "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Hype Track Chart",
          "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroHypeTrackChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a chart of tracks for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroTrackChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroTrackChart",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroTrackChart",
          "type": "function"
        },
        "index": {
          "description": "Get chart of tracks for metro Optional start end page limit http www.last.fm api show geo.getMetroTrackChart",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroTrackChart",
          "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Track Chart",
          "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroTrackChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a chart of the artists which make that metro unique\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroUniqueArtistChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroUniqueArtistChart",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroUniqueArtistChart",
          "type": "function"
        },
        "index": {
          "description": "Get chart of the artists which make that metro unique Optional start end page limit http www.last.fm api show geo.getMetroUniqueArtistChart",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroUniqueArtistChart",
          "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Unique Artist Chart",
          "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroUniqueArtistChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a chart of tracks for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroUniqueTrackChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroUniqueTrackChart",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroUniqueTrackChart",
          "type": "function"
        },
        "index": {
          "description": "Get chart of tracks for metro Optional start end page limit http www.last.fm api show geo.getMetroUniqueTrackChart",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroUniqueTrackChart",
          "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Unique Track Chart",
          "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroUniqueTrackChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of available chart periods for this metro,\n expressed as date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroWeeklyChartlist\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroWeeklyChartlist",
          "package": "liblastfm",
          "signature": "Request f (Metro -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetroWeeklyChartlist",
          "type": "function"
        },
        "index": {
          "description": "Get list of available chart periods for this metro expressed as date ranges which can be sent to the chart services http www.last.fm api show geo.getMetroWeeklyChartlist",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetroWeeklyChartlist",
          "normalized": "Request a(Metro-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metro Weekly Chartlist",
          "signature": "Request f(Metro-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroWeeklyChartlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of valid countries and metros for use in the other webservices\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ecountry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetros\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getMetros",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getMetros",
          "type": "function"
        },
        "index": {
          "description": "Get list of valid countries and metros for use in the other webservices Optional country http www.last.fm api show geo.getMetros",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getMetros",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Metros",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the most popular artists on Last.fm by country\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getTopArtists",
          "package": "liblastfm",
          "signature": "Request f (Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getTopArtists",
          "type": "function"
        },
        "index": {
          "description": "Get the most popular artists on Last.fm by country Optional limit page http www.last.fm api show geo.getTopArtists",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getTopArtists",
          "normalized": "Request a(Country-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Artists",
          "signature": "Request f(Country-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getTopArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the most popular tracks on Last.fm last week by country\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Geo",
          "name": "getTopTracks",
          "package": "liblastfm",
          "signature": "Request f (Country -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Geo.html#getTopTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the most popular tracks on Last.fm last week by country Optional limit page http www.last.fm api show geo.getTopTracks",
          "hierarchy": "Network Lastfm Geo",
          "module": "Network.Lastfm.Geo",
          "name": "getTopTracks",
          "normalized": "Request a(Country-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tracks",
          "signature": "Request f(Country-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getTopTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm group API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Group as Group\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Group",
          "name": "Group",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Group.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm group API This module is intended to be imported qualified import qualified Network.Lastfm.Group as Group",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "Group",
          "package": "liblastfm",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the hype list for a group\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getHype\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Group",
          "name": "getHype",
          "package": "liblastfm",
          "signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Group.html#getHype",
          "type": "function"
        },
        "index": {
          "description": "Get the hype list for group http www.last.fm api show group.getHype",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "getHype",
          "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Hype",
          "signature": "Request f(Group-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getHype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of members for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getMembers\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Group",
          "name": "getMembers",
          "package": "liblastfm",
          "signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Group.html#getMembers",
          "type": "function"
        },
        "index": {
          "description": "Get list of members for this group Optional page limit http www.last.fm api show group.getMembers",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "getMembers",
          "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Members",
          "signature": "Request f(Group-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an album chart for a group, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyAlbumChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyAlbumChart",
          "package": "liblastfm",
          "signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Group.html#getWeeklyAlbumChart",
          "type": "function"
        },
        "index": {
          "description": "Get an album chart for group for given date range If no date range is supplied it will return the most recent album chart for this group Optional from to http www.last.fm api show group.getWeeklyAlbumChart",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyAlbumChart",
          "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Album Chart",
          "signature": "Request f(Group-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyAlbumChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an artist chart for a group, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyArtistChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyArtistChart",
          "package": "liblastfm",
          "signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Group.html#getWeeklyArtistChart",
          "type": "function"
        },
        "index": {
          "description": "Get an artist chart for group for given date range If no date range is supplied it will return the most recent album chart for this group Optional from to http www.last.fm api show group.getWeeklyArtistChart",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyArtistChart",
          "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Artist Chart",
          "signature": "Request f(Group-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyArtistChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of available charts for this group, expressed as\n date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyChartList\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyChartList",
          "package": "liblastfm",
          "signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Group.html#getWeeklyChartList",
          "type": "function"
        },
        "index": {
          "description": "Get list of available charts for this group expressed as date ranges which can be sent to the chart services http www.last.fm api show group.getWeeklyChartList",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyChartList",
          "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Chart List",
          "signature": "Request f(Group-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyChartList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a track chart for a group, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyTrackChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyTrackChart",
          "package": "liblastfm",
          "signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Group.html#getWeeklyTrackChart",
          "type": "function"
        },
        "index": {
          "description": "Get track chart for group for given date range If no date range is supplied it will return the most recent album chart for this group Optional from to http www.last.fm api show group.getWeeklyTrackChart",
          "hierarchy": "Network Lastfm Group",
          "module": "Network.Lastfm.Group",
          "name": "getWeeklyTrackChart",
          "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Track Chart",
          "signature": "Request f(Group-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyTrackChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eliblastfm internals\n\u003c/p\u003e\u003cp\u003eYou shouldn't need to import this module unless you are doing something interesting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "Internal",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "liblastfm internals You shouldn need to import this module unless you are doing something interesting",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "Internal",
          "package": "liblastfm",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse format: either JSON or XML\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "Format",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Format",
          "type": "data"
        },
        "index": {
          "description": "Response format either JSON or XML",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "Format",
          "package": "liblastfm",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003elow-level representation\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "R",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#R",
          "type": "data"
        },
        "index": {
          "description": "Lastfm API request data type low-level representation",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "R",
          "package": "liblastfm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that is ready to be sent\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "Ready",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Ready",
          "type": "data"
        },
        "index": {
          "description": "Request that is ready to be sent",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "Ready",
          "package": "liblastfm",
          "partial": "Ready",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Ready"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e is authentication state. Might be \u003ccode\u003eSend\u003c/code\u003e which indicates\n that you may send this request already or \u003ccode\u003e\u003ca\u003eSign\u003c/a\u003e\u003c/code\u003e, when request signature\n isn't computed yet\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ef\u003c/code\u003e is response format. liblastfm currently supports \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eXML\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "Request",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Request",
          "type": "newtype"
        },
        "index": {
          "description": "Lastfm API request data type is authentication state Might be Send which indicates that you may send this request already or Sign when request signature isn computed yet is response format liblastfm currently supports JSON or XML",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "Request",
          "package": "liblastfm",
          "partial": "Request",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that requires signing procedure\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "Sign",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Sign",
          "type": "data"
        },
        "index": {
          "description": "Request that requires signing procedure",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "Sign",
          "package": "liblastfm",
          "partial": "Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Lastfm.Internal\",\"Network.Lastfm.Request\"]",
          "name": "JSON",
          "package": "liblastfm",
          "signature": "JSON",
          "source": "src/Network-Lastfm-Internal.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:JSON\",\"http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:JSON\"]"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "JSON",
          "package": "liblastfm",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Internal",
          "name": "R",
          "package": "liblastfm",
          "signature": "R",
          "source": "src/Network-Lastfm-Internal.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "R",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Internal",
          "name": "Request",
          "package": "liblastfm",
          "signature": "Request",
          "source": "src/Network-Lastfm-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "Request",
          "package": "liblastfm",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Lastfm.Internal\",\"Network.Lastfm.Request\"]",
          "name": "XML",
          "package": "liblastfm",
          "signature": "XML",
          "source": "src/Network-Lastfm-Internal.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:XML\",\"http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:XML\"]"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "XML",
          "package": "liblastfm",
          "partial": "XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:XML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Internal",
          "name": "_host",
          "package": "liblastfm",
          "signature": "Text",
          "source": "src/Network-Lastfm-Internal.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "_host",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:_host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Internal",
          "name": "_method",
          "package": "liblastfm",
          "signature": "ByteString",
          "source": "src/Network-Lastfm-Internal.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "_method",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:_method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Internal",
          "name": "_query",
          "package": "liblastfm",
          "signature": "(Map Text Text)",
          "source": "src/Network-Lastfm-Internal.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "_query",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:_query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsorbing a bunch of queries, useful in batch operations\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "absorbQuery",
          "package": "liblastfm",
          "signature": "t (Request f b) -\u003e Request f a",
          "source": "src/Network-Lastfm-Internal.html#absorbQuery",
          "type": "function"
        },
        "index": {
          "description": "Absorbing bunch of queries useful in batch operations",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "absorbQuery",
          "normalized": "a(Request b c)-\u003eRequest b d",
          "package": "liblastfm",
          "partial": "Query",
          "signature": "t(Request f b)-\u003eRequest f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:absorbQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopypaste from \u003ca\u003eControl.Lens.Internal.Getter\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "coerce",
          "package": "liblastfm",
          "signature": "f a -\u003e f b",
          "source": "src/Network-Lastfm-Internal.html#coerce",
          "type": "function"
        },
        "index": {
          "description": "Copypaste from Control.Lens.Internal.Getter",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "coerce",
          "normalized": "a b-\u003ea c",
          "package": "liblastfm",
          "signature": "f a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e_host\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "host",
          "package": "liblastfm",
          "signature": "(Text -\u003e f Text) -\u003e R h -\u003e f (R h)",
          "source": "src/Network-Lastfm-Internal.html#host",
          "type": "function"
        },
        "index": {
          "description": "Request host",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "host",
          "normalized": "(Text-\u003ea Text)-\u003eR b-\u003ea(R b)",
          "package": "liblastfm",
          "signature": "(Text-\u003ef Text)-\u003eR h-\u003ef(R h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforming Request to the \u003ca\u003earray notation\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "indexedWith",
          "package": "liblastfm",
          "signature": "Int -\u003e Request f a -\u003e Request f a",
          "source": "src/Network-Lastfm-Internal.html#indexedWith",
          "type": "function"
        },
        "index": {
          "description": "Transforming Request to the array notation",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "indexedWith",
          "normalized": "Int-\u003eRequest a b-\u003eRequest a b",
          "package": "liblastfm",
          "partial": "With",
          "signature": "Int-\u003eRequest f a-\u003eRequest f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:indexedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e HTTP \u003ccode\u003e\u003ca\u003e_method\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "method",
          "package": "liblastfm",
          "signature": "(ByteString -\u003e f ByteString) -\u003e R h -\u003e f (R h)",
          "source": "src/Network-Lastfm-Internal.html#method",
          "type": "function"
        },
        "index": {
          "description": "Request HTTP method",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "method",
          "normalized": "(ByteString-\u003ea ByteString)-\u003eR b-\u003ea(R b)",
          "package": "liblastfm",
          "signature": "(ByteString-\u003ef ByteString)-\u003eR h-\u003ef(R h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e_query\u003c/a\u003e\u003c/code\u003e string\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "query",
          "package": "liblastfm",
          "signature": "(Map Text Text -\u003e f (Map Text Text)) -\u003e R h -\u003e f (R h)",
          "source": "src/Network-Lastfm-Internal.html#query",
          "type": "function"
        },
        "index": {
          "description": "Request query string",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "query",
          "normalized": "(Map Text Text-\u003ea(Map Text Text))-\u003eR b-\u003ea(R b)",
          "package": "liblastfm",
          "signature": "(Map Text Text-\u003ef(Map Text Text))-\u003eR h-\u003ef(R h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct String from request for networking\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "render",
          "package": "liblastfm",
          "signature": "R f -\u003e String",
          "source": "src/Network-Lastfm-Internal.html#render",
          "type": "function"
        },
        "index": {
          "description": "Construct String from request for networking",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "render",
          "normalized": "R a-\u003eString",
          "package": "liblastfm",
          "signature": "R f-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Internal",
          "name": "unRequest",
          "package": "liblastfm",
          "signature": "Const (Dual (Endo (R f))) a",
          "source": "src/Network-Lastfm-Internal.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "unRequest",
          "package": "liblastfm",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:unRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrapping from interesting \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e) instance\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "unwrap",
          "package": "liblastfm",
          "signature": "Request f a -\u003e R f -\u003e R f",
          "source": "src/Network-Lastfm-Internal.html#unwrap",
          "type": "function"
        },
        "index": {
          "description": "Unwrapping from interesting Monoid instance",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "unwrap",
          "normalized": "Request a b-\u003eR a-\u003eR a",
          "package": "liblastfm",
          "signature": "Request f a-\u003eR f-\u003eR f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapping to interesting \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e) instance\n\u003c/p\u003e",
          "module": "Network.Lastfm.Internal",
          "name": "wrap",
          "package": "liblastfm",
          "signature": "(R f -\u003e R f) -\u003e Request f a",
          "source": "src/Network-Lastfm-Internal.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Wrapping to interesting Monoid instance",
          "hierarchy": "Network Lastfm Internal",
          "module": "Network.Lastfm.Internal",
          "name": "wrap",
          "normalized": "(R a-\u003eR a)-\u003eRequest a b",
          "package": "liblastfm",
          "signature": "(R f-\u003eR f)-\u003eRequest f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm library API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Library as Library\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Library",
          "name": "Library",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Library.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm library API This module is intended to be imported qualified import qualified Network.Lastfm.Library as Library",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "Library",
          "package": "liblastfm",
          "partial": "Library",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an album or collection of albums to a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.addAlbum\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "addAlbum",
          "package": "liblastfm",
          "signature": "NonEmpty (Request f LibraryAlbum) -\u003e Request f (APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#addAlbum",
          "type": "function"
        },
        "index": {
          "description": "Add an album or collection of albums to user Last.fm library http www.last.fm api show library.addAlbum",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "addAlbum",
          "normalized": "NonEmpty(Request a LibraryAlbum)-\u003eRequest a(APIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Album",
          "signature": "NonEmpty(Request f LibraryAlbum)-\u003eRequest f(APIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:addAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an artist to a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.addArtist\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "addArtist",
          "package": "liblastfm",
          "signature": "NonEmpty (Request f LibraryArtist) -\u003e Request f (APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#addArtist",
          "type": "function"
        },
        "index": {
          "description": "Add an artist to user Last.fm library http www.last.fm api show library.addArtist",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "addArtist",
          "normalized": "NonEmpty(Request a LibraryArtist)-\u003eRequest a(APIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Artist",
          "signature": "NonEmpty(Request f LibraryArtist)-\u003eRequest f(APIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:addArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a track to a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.addTrack\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "addTrack",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#addTrack",
          "type": "function"
        },
        "index": {
          "description": "Add track to user Last.fm library http www.last.fm api show library.addTrack",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "addTrack",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Track",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:addTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat artist to add to library?\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "albumItem",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Album -\u003e LibraryAlbum)",
          "source": "src/Network-Lastfm-Library.html#albumItem",
          "type": "function"
        },
        "index": {
          "description": "What artist to add to library",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "albumItem",
          "normalized": "Request a(Artist-\u003eAlbum-\u003eLibraryAlbum)",
          "package": "liblastfm",
          "partial": "Item",
          "signature": "Request f(Artist-\u003eAlbum-\u003eLibraryAlbum)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:albumItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat album to add to library?\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "artistItem",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e LibraryArtist)",
          "source": "src/Network-Lastfm-Library.html#artistItem",
          "type": "function"
        },
        "index": {
          "description": "What album to add to library",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "artistItem",
          "normalized": "Request a(Artist-\u003eLibraryArtist)",
          "package": "liblastfm",
          "partial": "Item",
          "signature": "Request f(Artist-\u003eLibraryArtist)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:artistItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA paginated list of all the albums in a user's library, with play counts and tag counts.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eartist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.getAlbums\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "getAlbums",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Library.html#getAlbums",
          "type": "function"
        },
        "index": {
          "description": "paginated list of all the albums in user library with play counts and tag counts Optional artist limit page http www.last.fm api show library.getAlbums",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "getAlbums",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Albums",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:getAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA paginated list of all the artists in a user's library, with play counts and tag counts.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.getArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "getArtists",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Library.html#getArtists",
          "type": "function"
        },
        "index": {
          "description": "paginated list of all the artists in user library with play counts and tag counts Optional limit page http www.last.fm api show library.getArtists",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "getArtists",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Artists",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:getArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA paginated list of all the tracks in a user's library, with play counts and tag counts.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eartist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealbum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.getTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "getTracks",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Library.html#getTracks",
          "type": "function"
        },
        "index": {
          "description": "paginated list of all the tracks in user library with play counts and tag counts Optional artist album page limit http www.last.fm api show library.getTracks",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "getTracks",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Tracks",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:getTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an album from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeAlbum\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "removeAlbum",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Album -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#removeAlbum",
          "type": "function"
        },
        "index": {
          "description": "Remove an album from user Last.fm library http www.last.fm api show library.removeAlbum",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "removeAlbum",
          "normalized": "Request a(Artist-\u003eAlbum-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Album",
          "signature": "Request f(Artist-\u003eAlbum-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an artist from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeArtist\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "removeArtist",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#removeArtist",
          "type": "function"
        },
        "index": {
          "description": "Remove an artist from user Last.fm library http www.last.fm api show library.removeArtist",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "removeArtist",
          "normalized": "Request a(Artist-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Artist",
          "signature": "Request f(Artist-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a scrobble from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeScrobble\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "removeScrobble",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e Timestamp -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#removeScrobble",
          "type": "function"
        },
        "index": {
          "description": "Remove scrobble from user Last.fm library http www.last.fm api show library.removeScrobble",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "removeScrobble",
          "normalized": "Request a(Artist-\u003eTrack-\u003eTimestamp-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Scrobble",
          "signature": "Request f(Artist-\u003eTrack-\u003eTimestamp-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeScrobble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a track from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeTrack\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Library",
          "name": "removeTrack",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Library.html#removeTrack",
          "type": "function"
        },
        "index": {
          "description": "Remove track from user Last.fm library http www.last.fm api show library.removeTrack",
          "hierarchy": "Network Lastfm Library",
          "module": "Network.Lastfm.Library",
          "name": "removeTrack",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Track",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm playlist API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Playlist as Playlist\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Playlist",
          "name": "Playlist",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Playlist.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm playlist API This module is intended to be imported qualified import qualified Network.Lastfm.Playlist as Playlist",
          "hierarchy": "Network Lastfm Playlist",
          "module": "Network.Lastfm.Playlist",
          "name": "Playlist",
          "package": "liblastfm",
          "partial": "Playlist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Playlist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a track to a Last.fm user's playlist\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/playlist.addTrack\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Playlist",
          "name": "addTrack",
          "package": "liblastfm",
          "signature": "Request f (Playlist -\u003e Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Playlist.html#addTrack",
          "type": "function"
        },
        "index": {
          "description": "Add track to Last.fm user playlist http www.last.fm api show playlist.addTrack",
          "hierarchy": "Network Lastfm Playlist",
          "module": "Network.Lastfm.Playlist",
          "name": "addTrack",
          "normalized": "Request a(Playlist-\u003eArtist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Track",
          "signature": "Request f(Playlist-\u003eArtist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Playlist.html#v:addTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Last.fm playlist on behalf of a user\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edescription\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/playlist.create\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Playlist",
          "name": "create",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Playlist.html#create",
          "type": "function"
        },
        "index": {
          "description": "Create Last.fm playlist on behalf of user Optional title description http www.last.fm api show playlist.create",
          "hierarchy": "Network Lastfm Playlist",
          "module": "Network.Lastfm.Playlist",
          "name": "create",
          "normalized": "Request a(APIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(APIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Playlist.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm radio API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Radio as Radio\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Radio",
          "name": "Radio",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Radio.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm radio API This module is intended to be imported qualified import qualified Network.Lastfm.Radio as Radio",
          "hierarchy": "Network Lastfm Radio",
          "module": "Network.Lastfm.Radio",
          "name": "Radio",
          "package": "liblastfm",
          "partial": "Radio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch new radio content periodically in an XSPF format.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ediscovery\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ertp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebuyLinks\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/radio.getPlaylist\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Radio",
          "name": "getPlaylist",
          "package": "liblastfm",
          "signature": "Request f (Multiplier -\u003e Bitrate -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Radio.html#getPlaylist",
          "type": "function"
        },
        "index": {
          "description": "Fetch new radio content periodically in an XSPF format Optional discovery rtp buyLinks http www.last.fm api show radio.getPlaylist",
          "hierarchy": "Network Lastfm Radio",
          "module": "Network.Lastfm.Radio",
          "name": "getPlaylist",
          "normalized": "Request a(Multiplier-\u003eBitrate-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Playlist",
          "signature": "Request f(Multiplier-\u003eBitrate-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#v:getPlaylist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve the name of a resource into a station depending on which resource\n it is most likely to represent.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/radio.search\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Radio",
          "name": "search",
          "package": "liblastfm",
          "signature": "Request f (Name -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Radio.html#search",
          "type": "function"
        },
        "index": {
          "description": "Resolve the name of resource into station depending on which resource it is most likely to represent http www.last.fm api show radio.search",
          "hierarchy": "Network Lastfm Radio",
          "module": "Network.Lastfm.Radio",
          "name": "search",
          "normalized": "Request a(Name-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f(Name-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTune in to a Last.fm radio station.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elanguage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/radio.tune\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Radio",
          "name": "tune",
          "package": "liblastfm",
          "signature": "Request f (Station -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Radio.html#tune",
          "type": "function"
        },
        "index": {
          "description": "Tune in to Last.fm radio station Optional language http www.last.fm api show radio.tune",
          "hierarchy": "Network Lastfm Radio",
          "module": "Network.Lastfm.Radio",
          "name": "tune",
          "normalized": "Request a(Station-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Station-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#v:tune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest construction\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Request",
          "name": "Request",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html",
          "type": "module"
        },
        "index": {
          "description": "Request construction",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Request",
          "package": "liblastfm",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "APIKey",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#APIKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "APIKey",
          "package": "liblastfm",
          "partial": "APIKey",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:APIKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Album",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Album",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Album",
          "package": "liblastfm",
          "partial": "Album",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "AlbumArtist",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#AlbumArtist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "AlbumArtist",
          "package": "liblastfm",
          "partial": "Album Artist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:AlbumArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Artist",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Artist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Artist",
          "package": "liblastfm",
          "partial": "Artist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Autocorrect",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Autocorrect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Autocorrect",
          "package": "liblastfm",
          "partial": "Autocorrect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Autocorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Bitrate",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Bitrate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Bitrate",
          "package": "liblastfm",
          "partial": "Bitrate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Bitrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "BuyLinks",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#BuyLinks",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "BuyLinks",
          "package": "liblastfm",
          "partial": "Buy Links",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:BuyLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Callback",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Callback",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Callback",
          "package": "liblastfm",
          "partial": "Callback",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "ChosenByUser",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#ChosenByUser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "ChosenByUser",
          "package": "liblastfm",
          "partial": "Chosen By User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:ChosenByUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Context",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Context",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Context",
          "package": "liblastfm",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Country",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Country",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Country",
          "package": "liblastfm",
          "partial": "Country",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Country"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Description",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Description",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Description",
          "package": "liblastfm",
          "partial": "Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Discovery",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Discovery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Discovery",
          "package": "liblastfm",
          "partial": "Discovery",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Discovery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Distance",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Distance",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Distance",
          "package": "liblastfm",
          "partial": "Distance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Duration",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Duration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Duration",
          "package": "liblastfm",
          "partial": "Duration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "End",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#End",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "End",
          "package": "liblastfm",
          "partial": "End",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "EndTimestamp",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#EndTimestamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "EndTimestamp",
          "package": "liblastfm",
          "partial": "End Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:EndTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Event",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Event",
          "package": "liblastfm",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Festivals",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Festivals",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Festivals",
          "package": "liblastfm",
          "partial": "Festivals",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Festivals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Fingerprint",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Fingerprint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Fingerprint",
          "package": "liblastfm",
          "partial": "Fingerprint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse format: either JSON or XML\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "Format",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Format",
          "type": "data"
        },
        "index": {
          "description": "Response format either JSON or XML",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Format",
          "package": "liblastfm",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "From",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#From",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "From",
          "package": "liblastfm",
          "partial": "From",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Group",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Group",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Group",
          "package": "liblastfm",
          "partial": "Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Language",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Language",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Language",
          "package": "liblastfm",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Latitude",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Latitude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Latitude",
          "package": "liblastfm",
          "partial": "Latitude",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "LibraryAlbum",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#LibraryAlbum",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "LibraryAlbum",
          "package": "liblastfm",
          "partial": "Library Album",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:LibraryAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "LibraryArtist",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#LibraryArtist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "LibraryArtist",
          "package": "liblastfm",
          "partial": "Library Artist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:LibraryArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Limit",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Limit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Limit",
          "package": "liblastfm",
          "partial": "Limit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Location",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Location",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Location",
          "package": "liblastfm",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Longitude",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Longitude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Longitude",
          "package": "liblastfm",
          "partial": "Longitude",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "MBID",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#MBID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "MBID",
          "package": "liblastfm",
          "partial": "MBID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:MBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Message",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Message",
          "package": "liblastfm",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Metro",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Metro",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Metro",
          "package": "liblastfm",
          "partial": "Metro",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Metro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Multiplier",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Multiplier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Multiplier",
          "package": "liblastfm",
          "partial": "Multiplier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Multiplier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Name",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Name",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Name",
          "package": "liblastfm",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Page",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Page",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Page",
          "package": "liblastfm",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Password",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Password",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Password",
          "package": "liblastfm",
          "partial": "Password",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Playlist",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Playlist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Playlist",
          "package": "liblastfm",
          "partial": "Playlist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Playlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Public",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Public",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Public",
          "package": "liblastfm",
          "partial": "Public",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003elow-level representation\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "R",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#R",
          "type": "data"
        },
        "index": {
          "description": "Lastfm API request data type low-level representation",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "R",
          "package": "liblastfm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "RTP",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#RTP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "RTP",
          "package": "liblastfm",
          "partial": "RTP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:RTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that is ready to be sent\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "Ready",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Ready",
          "type": "data"
        },
        "index": {
          "description": "Request that is ready to be sent",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Ready",
          "package": "liblastfm",
          "partial": "Ready",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Ready"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "RecentTracks",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#RecentTracks",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "RecentTracks",
          "package": "liblastfm",
          "partial": "Recent Tracks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:RecentTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Recipient",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Recipient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Recipient",
          "package": "liblastfm",
          "partial": "Recipient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Recipient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e is authentication state. Might be \u003ccode\u003eSend\u003c/code\u003e which indicates\n that you may send this request already or \u003ccode\u003e\u003ca\u003eSign\u003c/a\u003e\u003c/code\u003e, when request signature\n isn't computed yet\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ef\u003c/code\u003e is response format. liblastfm currently supports \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eXML\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "Request",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Lastfm API request data type is authentication state Might be Send which indicates that you may send this request already or Sign when request signature isn computed yet is response format liblastfm currently supports JSON or XML",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Request",
          "package": "liblastfm",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Scrobble",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Scrobble",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Scrobble",
          "package": "liblastfm",
          "partial": "Scrobble",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Scrobble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "SessionKey",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#SessionKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "SessionKey",
          "package": "liblastfm",
          "partial": "Session Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:SessionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest that requires signing procedure\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "Sign",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Internal.html#Sign",
          "type": "data"
        },
        "index": {
          "description": "Request that requires signing procedure",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Sign",
          "package": "liblastfm",
          "partial": "Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Start",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Start",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Start",
          "package": "liblastfm",
          "partial": "Start",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "StartTimestamp",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#StartTimestamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "StartTimestamp",
          "package": "liblastfm",
          "partial": "Start Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:StartTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Station",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Station",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Station",
          "package": "liblastfm",
          "partial": "Station",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Station"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Status",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Status",
          "package": "liblastfm",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "StreamId",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#StreamId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "StreamId",
          "package": "liblastfm",
          "partial": "Stream Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:StreamId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Tag",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Tag",
          "package": "liblastfm",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "TaggingType",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#TaggingType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "TaggingType",
          "package": "liblastfm",
          "partial": "Tagging Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:TaggingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Targeted",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Targeted",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Targeted",
          "package": "liblastfm",
          "partial": "Targeted",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Targeted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Timestamp",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Timestamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Timestamp",
          "package": "liblastfm",
          "partial": "Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Title",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Title",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Title",
          "package": "liblastfm",
          "partial": "Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "To",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#To",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "To",
          "package": "liblastfm",
          "partial": "To",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Token",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Token",
          "package": "liblastfm",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Track",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Track",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Track",
          "package": "liblastfm",
          "partial": "Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "TrackNumber",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#TrackNumber",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "TrackNumber",
          "package": "liblastfm",
          "partial": "Track Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:TrackNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "UseRecs",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#UseRecs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "UseRecs",
          "package": "liblastfm",
          "partial": "Use Recs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:UseRecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "User",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "User",
          "package": "liblastfm",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Username",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Username",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Username",
          "package": "liblastfm",
          "partial": "Username",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Venue",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#Venue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Venue",
          "package": "liblastfm",
          "partial": "Venue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Venue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "VenueName",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Request.html#VenueName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "VenueName",
          "package": "liblastfm",
          "partial": "Venue Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:VenueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Attending",
          "package": "liblastfm",
          "signature": "Attending",
          "source": "src/Network-Lastfm-Request.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Attending",
          "package": "liblastfm",
          "partial": "Attending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:Attending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "B128",
          "package": "liblastfm",
          "signature": "B128",
          "source": "src/Network-Lastfm-Request.html#Bitrate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "B128",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:B128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "B64",
          "package": "liblastfm",
          "signature": "B64",
          "source": "src/Network-Lastfm-Request.html#Bitrate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "B64",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:B64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "M1",
          "package": "liblastfm",
          "signature": "M1",
          "source": "src/Network-Lastfm-Request.html#Multiplier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "M1",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:M1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "M2",
          "package": "liblastfm",
          "signature": "M2",
          "source": "src/Network-Lastfm-Request.html#Multiplier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "M2",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:M2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "Maybe",
          "package": "liblastfm",
          "signature": "Maybe",
          "source": "src/Network-Lastfm-Request.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "Maybe",
          "package": "liblastfm",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Request",
          "name": "NotAttending",
          "package": "liblastfm",
          "signature": "NotAttending",
          "source": "src/Network-Lastfm-Request.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "NotAttending",
          "package": "liblastfm",
          "partial": "Not Attending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:NotAttending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd album parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "album",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Album",
          "source": "src/Network-Lastfm-Request.html#album",
          "type": "function"
        },
        "index": {
          "description": "Add album parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "album",
          "normalized": "Text-\u003eRequest a Album",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Album",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd albumArtist parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "albumArtist",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f AlbumArtist",
          "source": "src/Network-Lastfm-Request.html#albumArtist",
          "type": "function"
        },
        "index": {
          "description": "Add albumArtist parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "albumArtist",
          "normalized": "Text-\u003eRequest a AlbumArtist",
          "package": "liblastfm",
          "partial": "Artist",
          "signature": "Text-\u003eRequest f AlbumArtist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:albumArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange request API method\n\u003c/p\u003e\u003cp\u003ePrimarily used in API call wrappers, not intended for usage by library user\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "api",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f a",
          "source": "src/Network-Lastfm-Request.html#api",
          "type": "function"
        },
        "index": {
          "description": "Change request API method Primarily used in API call wrappers not intended for usage by library user",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "api",
          "normalized": "Text-\u003eRequest a b",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:api"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange request API key\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "apiKey",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f APIKey",
          "source": "src/Network-Lastfm-Request.html#apiKey",
          "type": "function"
        },
        "index": {
          "description": "Change request API key",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "apiKey",
          "normalized": "Text-\u003eRequest a APIKey",
          "package": "liblastfm",
          "partial": "Key",
          "signature": "Text-\u003eRequest f APIKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:apiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd artist parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "artist",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Artist",
          "source": "src/Network-Lastfm-Request.html#artist",
          "type": "function"
        },
        "index": {
          "description": "Add artist parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "artist",
          "normalized": "Text-\u003eRequest a Artist",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Artist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd artists parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "artists",
          "package": "liblastfm",
          "signature": "[Text] -\u003e Request f [Artist]",
          "source": "src/Network-Lastfm-Request.html#artists",
          "type": "function"
        },
        "index": {
          "description": "Add artists parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "artists",
          "normalized": "[Text]-\u003eRequest a[Artist]",
          "package": "liblastfm",
          "signature": "[Text]-\u003eRequest f[Artist]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:artists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd autocorrect parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "autocorrect",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f Autocorrect",
          "source": "src/Network-Lastfm-Request.html#autocorrect",
          "type": "function"
        },
        "index": {
          "description": "Add autocorrect parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "autocorrect",
          "normalized": "Bool-\u003eRequest a Autocorrect",
          "package": "liblastfm",
          "signature": "Bool-\u003eRequest f Autocorrect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:autocorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd bitrate parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "bitrate",
          "package": "liblastfm",
          "signature": "Bitrate -\u003e Request f Bitrate",
          "source": "src/Network-Lastfm-Request.html#bitrate",
          "type": "function"
        },
        "index": {
          "description": "Add bitrate parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "bitrate",
          "normalized": "Bitrate-\u003eRequest a Bitrate",
          "package": "liblastfm",
          "signature": "Bitrate-\u003eRequest f Bitrate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:bitrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd buyLinks parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "buyLinks",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f BuyLinks",
          "source": "src/Network-Lastfm-Request.html#buyLinks",
          "type": "function"
        },
        "index": {
          "description": "Add buyLinks parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "buyLinks",
          "normalized": "Bool-\u003eRequest a BuyLinks",
          "package": "liblastfm",
          "partial": "Links",
          "signature": "Bool-\u003eRequest f BuyLinks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:buyLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd callback link parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "callback",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Callback",
          "source": "src/Network-Lastfm-Request.html#callback",
          "type": "function"
        },
        "index": {
          "description": "Add callback link parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "callback",
          "normalized": "Text-\u003eRequest a Callback",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Callback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd chosenByUser parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "chosenByUser",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f ChosenByUser",
          "source": "src/Network-Lastfm-Request.html#chosenByUser",
          "type": "function"
        },
        "index": {
          "description": "Add chosenByUser parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "chosenByUser",
          "normalized": "Bool-\u003eRequest a ChosenByUser",
          "package": "liblastfm",
          "partial": "By User",
          "signature": "Bool-\u003eRequest f ChosenByUser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:chosenByUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd comparison parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "comparison",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f a -\u003e Request f a",
          "source": "src/Network-Lastfm-Request.html#comparison",
          "type": "function"
        },
        "index": {
          "description": "Add comparison parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "comparison",
          "normalized": "Int-\u003eRequest a b-\u003eRequest a b",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f a-\u003eRequest f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:comparison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd context parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "context",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Context",
          "source": "src/Network-Lastfm-Request.html#context",
          "type": "function"
        },
        "index": {
          "description": "Add context parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "context",
          "normalized": "Text-\u003eRequest a Context",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd country parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "country",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Country",
          "source": "src/Network-Lastfm-Request.html#country",
          "type": "function"
        },
        "index": {
          "description": "Add country parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "country",
          "normalized": "Text-\u003eRequest a Country",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Country",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:country"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd description parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "description",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Description",
          "source": "src/Network-Lastfm-Request.html#description",
          "type": "function"
        },
        "index": {
          "description": "Add description parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "description",
          "normalized": "Text-\u003eRequest a Description",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd group parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "discovery",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f Discovery",
          "source": "src/Network-Lastfm-Request.html#discovery",
          "type": "function"
        },
        "index": {
          "description": "Add group parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "discovery",
          "normalized": "Bool-\u003eRequest a Discovery",
          "package": "liblastfm",
          "signature": "Bool-\u003eRequest f Discovery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:discovery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd distance parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "distance",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Distance",
          "source": "src/Network-Lastfm-Request.html#distance",
          "type": "function"
        },
        "index": {
          "description": "Add distance parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "distance",
          "normalized": "Int-\u003eRequest a Distance",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd duration parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "duration",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Duration",
          "source": "src/Network-Lastfm-Request.html#duration",
          "type": "function"
        },
        "index": {
          "description": "Add duration parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "duration",
          "normalized": "Int-\u003eRequest a Duration",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd end parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "end",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f End",
          "source": "src/Network-Lastfm-Request.html#end",
          "type": "function"
        },
        "index": {
          "description": "Add end parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "end",
          "normalized": "Int-\u003eRequest a End",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd endTimestamp parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "endTimestamp",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f EndTimestamp",
          "source": "src/Network-Lastfm-Request.html#endTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Add endTimestamp parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "endTimestamp",
          "normalized": "Int-\u003eRequest a EndTimestamp",
          "package": "liblastfm",
          "partial": "Timestamp",
          "signature": "Int-\u003eRequest f EndTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:endTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd event parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "event",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Event",
          "source": "src/Network-Lastfm-Request.html#event",
          "type": "function"
        },
        "index": {
          "description": "Add event parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "event",
          "normalized": "Int-\u003eRequest a Event",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd festivalsonly parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "festivalsonly",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f Festivals",
          "source": "src/Network-Lastfm-Request.html#festivalsonly",
          "type": "function"
        },
        "index": {
          "description": "Add festivalsonly parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "festivalsonly",
          "normalized": "Bool-\u003eRequest a Festivals",
          "package": "liblastfm",
          "signature": "Bool-\u003eRequest f Festivals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:festivalsonly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd fingerprint parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "fingerprint",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Fingerprint",
          "source": "src/Network-Lastfm-Request.html#fingerprint",
          "type": "function"
        },
        "index": {
          "description": "Add fingerprint parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "fingerprint",
          "normalized": "Int-\u003eRequest a Fingerprint",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Fingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd from parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "from",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f From",
          "source": "src/Network-Lastfm-Request.html#from",
          "type": "function"
        },
        "index": {
          "description": "Add from parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "from",
          "normalized": "Int-\u003eRequest a From",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange html _method to GET\n\u003c/p\u003e\u003cp\u003ePrimarily used in API call wrappers, not intended for usage by library user\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "get",
          "package": "liblastfm",
          "signature": "Request f a",
          "source": "src/Network-Lastfm-Request.html#get",
          "type": "function"
        },
        "index": {
          "description": "Change html method to GET Primarily used in API call wrappers not intended for usage by library user",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "get",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd group parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "group",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Group",
          "source": "src/Network-Lastfm-Request.html#group",
          "type": "function"
        },
        "index": {
          "description": "Add group parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "group",
          "normalized": "Text-\u003eRequest a Group",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange API response format to JSON\n\u003c/p\u003e\u003cp\u003eThis is a little helper. It's actually enough\n to specialize Format manually\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "json",
          "package": "liblastfm",
          "signature": "Request JSON a",
          "source": "src/Network-Lastfm-Request.html#json",
          "type": "function"
        },
        "index": {
          "description": "Change API response format to JSON This is little helper It actually enough to specialize Format manually",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "json",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd language parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "language",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Language",
          "source": "src/Network-Lastfm-Request.html#language",
          "type": "function"
        },
        "index": {
          "description": "Add language parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "language",
          "normalized": "Text-\u003eRequest a Language",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd latitude parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "latitude",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Latitude",
          "source": "src/Network-Lastfm-Request.html#latitude",
          "type": "function"
        },
        "index": {
          "description": "Add latitude parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "latitude",
          "normalized": "Text-\u003eRequest a Latitude",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Latitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd limit parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "limit",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Limit",
          "source": "src/Network-Lastfm-Request.html#limit",
          "type": "function"
        },
        "index": {
          "description": "Add limit parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "limit",
          "normalized": "Int-\u003eRequest a Limit",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd location parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "location",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Location",
          "source": "src/Network-Lastfm-Request.html#location",
          "type": "function"
        },
        "index": {
          "description": "Add location parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "location",
          "normalized": "Text-\u003eRequest a Location",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd longitude parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "longitude",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Longitude",
          "source": "src/Network-Lastfm-Request.html#longitude",
          "type": "function"
        },
        "index": {
          "description": "Add longitude parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "longitude",
          "normalized": "Text-\u003eRequest a Longitude",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Longitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd MBID parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "mbid",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f MBID",
          "source": "src/Network-Lastfm-Request.html#mbid",
          "type": "function"
        },
        "index": {
          "description": "Add MBID parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "mbid",
          "normalized": "Text-\u003eRequest a MBID",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f MBID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:mbid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd message parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "message",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Message",
          "source": "src/Network-Lastfm-Request.html#message",
          "type": "function"
        },
        "index": {
          "description": "Add message parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "message",
          "normalized": "Text-\u003eRequest a Message",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd metro parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "metro",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Metro",
          "source": "src/Network-Lastfm-Request.html#metro",
          "type": "function"
        },
        "index": {
          "description": "Add metro parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "metro",
          "normalized": "Text-\u003eRequest a Metro",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Metro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:metro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd multiplier parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "multiplier",
          "package": "liblastfm",
          "signature": "Multiplier -\u003e Request f Multiplier",
          "source": "src/Network-Lastfm-Request.html#multiplier",
          "type": "function"
        },
        "index": {
          "description": "Add multiplier parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "multiplier",
          "normalized": "Multiplier-\u003eRequest a Multiplier",
          "package": "liblastfm",
          "signature": "Multiplier-\u003eRequest f Multiplier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:multiplier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd name parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "name",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Name",
          "source": "src/Network-Lastfm-Request.html#name",
          "type": "function"
        },
        "index": {
          "description": "Add name parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "name",
          "normalized": "Text-\u003eRequest a Name",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd page parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "page",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Page",
          "source": "src/Network-Lastfm-Request.html#page",
          "type": "function"
        },
        "index": {
          "description": "Add page parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "page",
          "normalized": "Int-\u003eRequest a Page",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd password parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "password",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Password",
          "source": "src/Network-Lastfm-Request.html#password",
          "type": "function"
        },
        "index": {
          "description": "Add password parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "password",
          "normalized": "Text-\u003eRequest a Password",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd playlistID parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "playlist",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Playlist",
          "source": "src/Network-Lastfm-Request.html#playlist",
          "type": "function"
        },
        "index": {
          "description": "Add playlistID parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "playlist",
          "normalized": "Int-\u003eRequest a Playlist",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Playlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:playlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange html _method to POST\n\u003c/p\u003e\u003cp\u003ePrimarily used in API call wrappers, not intended for usage by library user\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "post",
          "package": "liblastfm",
          "signature": "Request f a",
          "source": "src/Network-Lastfm-Request.html#post",
          "type": "function"
        },
        "index": {
          "description": "Change html method to POST Primarily used in API call wrappers not intended for usage by library user",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "post",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd public parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "public",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f Public",
          "source": "src/Network-Lastfm-Request.html#public",
          "type": "function"
        },
        "index": {
          "description": "Add public parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "public",
          "normalized": "Bool-\u003eRequest a Public",
          "package": "liblastfm",
          "signature": "Bool-\u003eRequest f Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd recentTracks parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "recentTracks",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f RecentTracks",
          "source": "src/Network-Lastfm-Request.html#recentTracks",
          "type": "function"
        },
        "index": {
          "description": "Add recentTracks parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "recentTracks",
          "normalized": "Bool-\u003eRequest a RecentTracks",
          "package": "liblastfm",
          "partial": "Tracks",
          "signature": "Bool-\u003eRequest f RecentTracks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:recentTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd recipient parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "recipient",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Recipient",
          "source": "src/Network-Lastfm-Request.html#recipient",
          "type": "function"
        },
        "index": {
          "description": "Add recipient parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "recipient",
          "normalized": "Text-\u003eRequest a Recipient",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Recipient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:recipient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd rtp parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "rtp",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f RTP",
          "source": "src/Network-Lastfm-Request.html#rtp",
          "type": "function"
        },
        "index": {
          "description": "Add rtp parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "rtp",
          "normalized": "Bool-\u003eRequest a RTP",
          "package": "liblastfm",
          "signature": "Bool-\u003eRequest f RTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:rtp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange request session key\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "sessionKey",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f SessionKey",
          "source": "src/Network-Lastfm-Request.html#sessionKey",
          "type": "function"
        },
        "index": {
          "description": "Change request session key",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "sessionKey",
          "normalized": "Text-\u003eRequest a SessionKey",
          "package": "liblastfm",
          "partial": "Key",
          "signature": "Text-\u003eRequest f SessionKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:sessionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd start parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "start",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Start",
          "source": "src/Network-Lastfm-Request.html#start",
          "type": "function"
        },
        "index": {
          "description": "Add start parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "start",
          "normalized": "Int-\u003eRequest a Start",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd startTimestamp parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "startTimestamp",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f StartTimestamp",
          "source": "src/Network-Lastfm-Request.html#startTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Add startTimestamp parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "startTimestamp",
          "normalized": "Int-\u003eRequest a StartTimestamp",
          "package": "liblastfm",
          "partial": "Timestamp",
          "signature": "Int-\u003eRequest f StartTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:startTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd station parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "station",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Station",
          "source": "src/Network-Lastfm-Request.html#station",
          "type": "function"
        },
        "index": {
          "description": "Add station parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "station",
          "normalized": "Text-\u003eRequest a Station",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:station"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd status parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "status",
          "package": "liblastfm",
          "signature": "Status -\u003e Request f Status",
          "source": "src/Network-Lastfm-Request.html#status",
          "type": "function"
        },
        "index": {
          "description": "Add status parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "status",
          "normalized": "Status-\u003eRequest a Status",
          "package": "liblastfm",
          "signature": "Status-\u003eRequest f Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd streamId parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "streamId",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f StreamId",
          "source": "src/Network-Lastfm-Request.html#streamId",
          "type": "function"
        },
        "index": {
          "description": "Add streamId parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "streamId",
          "normalized": "Int-\u003eRequest a StreamId",
          "package": "liblastfm",
          "partial": "Id",
          "signature": "Int-\u003eRequest f StreamId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:streamId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd tag parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "tag",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Tag",
          "source": "src/Network-Lastfm-Request.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Add tag parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "tag",
          "normalized": "Text-\u003eRequest a Tag",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd taggingType parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "taggingType",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f TaggingType",
          "source": "src/Network-Lastfm-Request.html#taggingType",
          "type": "function"
        },
        "index": {
          "description": "Add taggingType parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "taggingType",
          "normalized": "Text-\u003eRequest a TaggingType",
          "package": "liblastfm",
          "partial": "Type",
          "signature": "Text-\u003eRequest f TaggingType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:taggingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd tags parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "tags",
          "package": "liblastfm",
          "signature": "[Text] -\u003e Request f [Tag]",
          "source": "src/Network-Lastfm-Request.html#tags",
          "type": "function"
        },
        "index": {
          "description": "Add tags parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "tags",
          "normalized": "[Text]-\u003eRequest a[Tag]",
          "package": "liblastfm",
          "signature": "[Text]-\u003eRequest f[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd timestamp parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "timestamp",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Timestamp",
          "source": "src/Network-Lastfm-Request.html#timestamp",
          "type": "function"
        },
        "index": {
          "description": "Add timestamp parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "timestamp",
          "normalized": "Int-\u003eRequest a Timestamp",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd title parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "title",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Title",
          "source": "src/Network-Lastfm-Request.html#title",
          "type": "function"
        },
        "index": {
          "description": "Add title parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "title",
          "normalized": "Text-\u003eRequest a Title",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "to",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f To",
          "source": "src/Network-Lastfm-Request.html#to",
          "type": "function"
        },
        "index": {
          "description": "Add to parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "to",
          "normalized": "Int-\u003eRequest a To",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd token parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "token",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Token",
          "source": "src/Network-Lastfm-Request.html#token",
          "type": "function"
        },
        "index": {
          "description": "Add token parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "token",
          "normalized": "Text-\u003eRequest a Token",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd track parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "track",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Track",
          "source": "src/Network-Lastfm-Request.html#track",
          "type": "function"
        },
        "index": {
          "description": "Add track parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "track",
          "normalized": "Text-\u003eRequest a Track",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd trackNumber parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "trackNumber",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f TrackNumber",
          "source": "src/Network-Lastfm-Request.html#trackNumber",
          "type": "function"
        },
        "index": {
          "description": "Add trackNumber parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "trackNumber",
          "normalized": "Int-\u003eRequest a TrackNumber",
          "package": "liblastfm",
          "partial": "Number",
          "signature": "Int-\u003eRequest f TrackNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:trackNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd useRecs parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "useRecs",
          "package": "liblastfm",
          "signature": "Bool -\u003e Request f UseRecs",
          "source": "src/Network-Lastfm-Request.html#useRecs",
          "type": "function"
        },
        "index": {
          "description": "Add useRecs parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "useRecs",
          "normalized": "Bool-\u003eRequest a UseRecs",
          "package": "liblastfm",
          "partial": "Recs",
          "signature": "Bool-\u003eRequest f UseRecs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:useRecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd user parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "user",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f User",
          "source": "src/Network-Lastfm-Request.html#user",
          "type": "function"
        },
        "index": {
          "description": "Add user parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "user",
          "normalized": "Text-\u003eRequest a User",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd username parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "username",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f Username",
          "source": "src/Network-Lastfm-Request.html#username",
          "type": "function"
        },
        "index": {
          "description": "Add username parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "username",
          "normalized": "Text-\u003eRequest a Username",
          "package": "liblastfm",
          "signature": "Text-\u003eRequest f Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:username"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd venue parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "venue",
          "package": "liblastfm",
          "signature": "Int64 -\u003e Request f Venue",
          "source": "src/Network-Lastfm-Request.html#venue",
          "type": "function"
        },
        "index": {
          "description": "Add venue parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "venue",
          "normalized": "Int-\u003eRequest a Venue",
          "package": "liblastfm",
          "signature": "Int-\u003eRequest f Venue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:venue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd venue parameter\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "venueName",
          "package": "liblastfm",
          "signature": "Text -\u003e Request f VenueName",
          "source": "src/Network-Lastfm-Request.html#venueName",
          "type": "function"
        },
        "index": {
          "description": "Add venue parameter",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "venueName",
          "normalized": "Text-\u003eRequest a VenueName",
          "package": "liblastfm",
          "partial": "Name",
          "signature": "Text-\u003eRequest f VenueName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:venueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange API response format to XML\n\u003c/p\u003e\u003cp\u003eThis is a little helper. It's actually enough\n to specialize Format manually\n\u003c/p\u003e",
          "module": "Network.Lastfm.Request",
          "name": "xml",
          "package": "liblastfm",
          "signature": "Request XML a",
          "source": "src/Network-Lastfm-Request.html#xml",
          "type": "function"
        },
        "index": {
          "description": "Change API response format to XML This is little helper It actually enough to specialize Format manually",
          "hierarchy": "Network Lastfm Request",
          "module": "Network.Lastfm.Request",
          "name": "xml",
          "package": "liblastfm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest sending and Response parsing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Response",
          "name": "Response",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Response.html",
          "type": "module"
        },
        "index": {
          "description": "Request sending and Response parsing",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "Response",
          "package": "liblastfm",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication secret\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "Secret",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Response.html#Secret",
          "type": "newtype"
        },
        "index": {
          "description": "Application secret",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "Secret",
          "package": "liblastfm",
          "partial": "Secret",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#t:Secret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSupported\u003c/a\u003e\u003c/code\u003e provides parsing for a chosen \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e is parsed to aeson's \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eXML\u003c/a\u003e\u003c/code\u003e is to lazy \u003ccode\u003eByteString\u003c/code\u003e\n (in other words, parsing XML is left to the user)\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "Supported",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Response.html#Supported",
          "type": "class"
        },
        "index": {
          "description": "Supported provides parsing for chosen Format JSON is parsed to aeson Value XML is to lazy ByteString in other words parsing XML is left to the user",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "Supported",
          "package": "liblastfm",
          "partial": "Supported",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#t:Supported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Lastfm.Response",
          "name": "Secret",
          "package": "liblastfm",
          "signature": "Secret Text",
          "source": "src/Network-Lastfm-Response.html#Secret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "Secret",
          "package": "liblastfm",
          "partial": "Secret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:Secret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "finalize",
          "package": "liblastfm",
          "signature": "Request f Ready -\u003e R f",
          "source": "src/Network-Lastfm-Response.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "Get from Request",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "finalize",
          "normalized": "Request a Ready-\u003eR a",
          "package": "liblastfm",
          "signature": "Request f Ready-\u003eR f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and parse the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "lastfm",
          "package": "liblastfm",
          "signature": "Request f Ready -\u003e IO (Response f)",
          "source": "src/Network-Lastfm-Response.html#lastfm",
          "type": "function"
        },
        "index": {
          "description": "Send Request and parse the Response",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "lastfm",
          "normalized": "Request a Ready-\u003eIO(Response a)",
          "package": "liblastfm",
          "signature": "Request f Ready-\u003eIO(Response f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:lastfm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e and parse \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the supplied function\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "lastfm'",
          "package": "liblastfm",
          "signature": "(Proxy f -\u003e ByteString -\u003e ResponseHeaders -\u003e a) -\u003e R f -\u003e IO a",
          "source": "src/Network-Lastfm-Response.html#lastfm%27",
          "type": "function"
        },
        "index": {
          "description": "Send and parse Response with the supplied function",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "lastfm'",
          "normalized": "(Proxy a-\u003eByteString-\u003eResponseHeaders-\u003eb)-\u003eR a-\u003eIO b",
          "package": "liblastfm",
          "signature": "(Proxy f-\u003eByteString-\u003eResponseHeaders-\u003ea)-\u003eR f-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:lastfm-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e without parsing the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "lastfm_",
          "package": "liblastfm",
          "signature": "Request f Ready -\u003e IO ()",
          "source": "src/Network-Lastfm-Response.html#lastfm_",
          "type": "function"
        },
        "index": {
          "description": "Send Request without parsing the Response",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "lastfm_",
          "normalized": "Request a Ready-\u003eIO()",
          "package": "liblastfm",
          "signature": "Request f Ready-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:lastfm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eSecret\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Response",
          "name": "sign",
          "package": "liblastfm",
          "signature": "Secret -\u003e Request f Sign -\u003e Request f Ready",
          "source": "src/Network-Lastfm-Response.html#sign",
          "type": "function"
        },
        "index": {
          "description": "Sign Request with Secret",
          "hierarchy": "Network Lastfm Response",
          "module": "Network.Lastfm.Response",
          "name": "sign",
          "normalized": "Secret-\u003eRequest a Sign-\u003eRequest a Ready",
          "package": "liblastfm",
          "signature": "Secret-\u003eRequest f Sign-\u003eRequest f Ready",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm tag API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Tag as Tag\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "Tag",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Tag.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm tag API This module is intended to be imported qualified import qualified Network.Lastfm.Tag as Tag",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "Tag",
          "package": "liblastfm",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the metadata for a tag\n\u003c/p\u003e\u003cp\u003eOptional: language\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getInfo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getInfo",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the metadata for tag Optional language http www.last.fm api show tag.getInfo",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getInfo",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Info",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for tags similar to this one. Returns tags ranked by similarity, based on listening data.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getSimilar\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getSimilar",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getSimilar",
          "type": "function"
        },
        "index": {
          "description": "Search for tags similar to this one Returns tags ranked by similarity based on listening data http www.last.fm api show tag.getSimilar",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getSimilar",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Similar",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getSimilar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top albums tagged by this tag, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopAlbums\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getTopAlbums",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getTopAlbums",
          "type": "function"
        },
        "index": {
          "description": "Get the top albums tagged by this tag ordered by tag count Optional limit page http www.last.fm api show tag.getTopAlbums",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getTopAlbums",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Albums",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top artists tagged by this tag, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getTopArtists",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getTopArtists",
          "type": "function"
        },
        "index": {
          "description": "Get the top artists tagged by this tag ordered by tag count Optional limit page http www.last.fm api show tag.getTopArtists",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getTopArtists",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Artists",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches the top global tags on Last.fm, sorted by popularity (number of times used)\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getTopTags",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getTopTags",
          "type": "function"
        },
        "index": {
          "description": "Fetches the top global tags on Last.fm sorted by popularity number of times used http www.last.fm api show tag.getTopTags",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getTopTags",
          "normalized": "Request a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tags",
          "signature": "Request f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tracks tagged by this tag, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getTopTracks",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getTopTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the top tracks tagged by this tag ordered by tag count Optional limit page http www.last.fm api show tag.getTopTracks",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getTopTracks",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tracks",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an artist chart for a tag, for a given date range.\n If no date range is supplied, it will return the most recent artist chart for this tag.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getWeeklyArtistChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getWeeklyArtistChart",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getWeeklyArtistChart",
          "type": "function"
        },
        "index": {
          "description": "Get an artist chart for tag for given date range If no date range is supplied it will return the most recent artist chart for this tag Optional from to limit http www.last.fm api show tag.getWeeklyArtistChart",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getWeeklyArtistChart",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Artist Chart",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getWeeklyArtistChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of available charts for this tag, expressed as\n date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getWeeklyChartList\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "getWeeklyChartList",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#getWeeklyChartList",
          "type": "function"
        },
        "index": {
          "description": "Get list of available charts for this tag expressed as date ranges which can be sent to the chart services http www.last.fm api show tag.getWeeklyChartList",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "getWeeklyChartList",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Chart List",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getWeeklyChartList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for a tag by name. Returns matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.search\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tag",
          "name": "search",
          "package": "liblastfm",
          "signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tag.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search for tag by name Returns matches sorted by relevance Optional limit page http www.last.fm api show tag.search",
          "hierarchy": "Network Lastfm Tag",
          "module": "Network.Lastfm.Tag",
          "name": "search",
          "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm tasteometer API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Tasteometer as Tasteometer\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Tasteometer",
          "name": "Tasteometer",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Tasteometer.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm tasteometer API This module is intended to be imported qualified import qualified Network.Lastfm.Tasteometer as Tasteometer",
          "hierarchy": "Network Lastfm Tasteometer",
          "module": "Network.Lastfm.Tasteometer",
          "name": "Tasteometer",
          "package": "liblastfm",
          "partial": "Tasteometer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tasteometer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Tasteometer score from two inputs, along with a list of shared artists.\n If the input is a user some additional information is returned.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tasteometer.compare\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Tasteometer",
          "name": "compare",
          "package": "liblastfm",
          "signature": "Request f u -\u003e Request f v -\u003e Request f (APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Tasteometer.html#compare",
          "type": "function"
        },
        "index": {
          "description": "Get Tasteometer score from two inputs along with list of shared artists If the input is user some additional information is returned Optional limit http www.last.fm api show tasteometer.compare",
          "hierarchy": "Network Lastfm Tasteometer",
          "module": "Network.Lastfm.Tasteometer",
          "name": "compare",
          "normalized": "Request a b-\u003eRequest a c-\u003eRequest a(APIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f u-\u003eRequest f v-\u003eRequest f(APIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tasteometer.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm track API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Track as Track\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Track",
          "name": "Track",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Track.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm track API This module is intended to be imported qualified import qualified Network.Lastfm.Track as Track",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "Track",
          "package": "liblastfm",
          "partial": "Track",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify (\u003ccode\u003e\u003ca\u003eArtist\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;) and (\u003ccode\u003e\u003ca\u003eMBID\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;)\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "ArtistTrackOrMBID",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Track.html#ArtistTrackOrMBID",
          "type": "class"
        },
        "index": {
          "description": "Unify Artist Track and MBID",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "ArtistTrackOrMBID",
          "package": "liblastfm",
          "partial": "Artist Track Or MBID",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#t:ArtistTrackOrMBID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag a track using a list of user supplied tags.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.addTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "addTags",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e [Tag] -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#addTags",
          "type": "function"
        },
        "index": {
          "description": "Tag track using list of user supplied tags http www.last.fm api show track.addTags",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "addTags",
          "normalized": "Request a(Artist-\u003eTrack-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Tags",
          "signature": "Request f(Artist-\u003eTrack-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:addTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBan a track for a given user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.ban\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "ban",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#ban",
          "type": "function"
        },
        "index": {
          "description": "Ban track for given user profile http www.last.fm api show track.ban",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "ban",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:ban"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of Buy Links for a particular track.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getBuylinks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getBuyLinks",
          "package": "liblastfm",
          "signature": "Request f (Country -\u003e t)",
          "source": "src/Network-Lastfm-Track.html#getBuyLinks",
          "type": "function"
        },
        "index": {
          "description": "Get list of Buy Links for particular track Optional autocorrect http www.last.fm api show track.getBuylinks",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getBuyLinks",
          "normalized": "Request a(Country-\u003eb)",
          "package": "liblastfm",
          "partial": "Buy Links",
          "signature": "Request f(Country-\u003et)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getBuyLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the last.fm corrections data to check whether\n the supplied track has a correction to a canonical track.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getCorrection\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getCorrection",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Track.html#getCorrection",
          "type": "function"
        },
        "index": {
          "description": "Use the last.fm corrections data to check whether the supplied track has correction to canonical track http www.last.fm api show track.getCorrection",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getCorrection",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Correction",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve track metadata associated with a fingerprint id\n generated by the Last.fm Fingerprinter. Returns track\n elements, along with a \u003ccode\u003erank\u003c/code\u003e value between 0 and 1 reflecting the confidence for each match.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getFingerprintMetadata\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getFingerprintMetadata",
          "package": "liblastfm",
          "signature": "Request f (Fingerprint -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Track.html#getFingerprintMetadata",
          "type": "function"
        },
        "index": {
          "description": "Retrieve track metadata associated with fingerprint id generated by the Last.fm Fingerprinter Returns track elements along with rank value between and reflecting the confidence for each match http www.last.fm api show track.getFingerprintMetadata",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getFingerprintMetadata",
          "normalized": "Request a(Fingerprint-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Fingerprint Metadata",
          "signature": "Request f(Fingerprint-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getFingerprintMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the metadata for a track on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusername\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getInfo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getInfo",
          "package": "liblastfm",
          "signature": "Request f t",
          "source": "src/Network-Lastfm-Track.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Get the metadata for track on Last.fm Optional autocorrect username http www.last.fm api show track.getInfo",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getInfo",
          "package": "liblastfm",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet shouts for this track. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getShouts\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getShouts",
          "package": "liblastfm",
          "signature": "Request f t",
          "source": "src/Network-Lastfm-Track.html#getShouts",
          "type": "function"
        },
        "index": {
          "description": "Get shouts for this track Also available as an rss feed Optional autocorrect limit page http www.last.fm api show track.getShouts",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getShouts",
          "package": "liblastfm",
          "partial": "Shouts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getShouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the similar tracks for this track on Last.fm, based on listening data.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getSimilar\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getSimilar",
          "package": "liblastfm",
          "signature": "Request f t",
          "source": "src/Network-Lastfm-Track.html#getSimilar",
          "type": "function"
        },
        "index": {
          "description": "Get the similar tracks for this track on Last.fm based on listening data Optional autocorrect limit http www.last.fm api show track.getSimilar",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getSimilar",
          "package": "liblastfm",
          "partial": "Similar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getSimilar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tags applied by an individual user to a track on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getTags",
          "package": "liblastfm",
          "signature": "Request f t",
          "source": "src/Network-Lastfm-Track.html#getTags",
          "type": "function"
        },
        "index": {
          "description": "Get the tags applied by an individual user to track on Last.fm Optional autocorrect user http www.last.fm api show track.getTags",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getTags",
          "package": "liblastfm",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top fans for this track on Last.fm, based on listening data.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getTopFans\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getTopFans",
          "package": "liblastfm",
          "signature": "Request f t",
          "source": "src/Network-Lastfm-Track.html#getTopFans",
          "type": "function"
        },
        "index": {
          "description": "Get the top fans for this track on Last.fm based on listening data Optional autocorrect http www.last.fm api show track.getTopFans",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getTopFans",
          "package": "liblastfm",
          "partial": "Top Fans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getTopFans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tags for this track on Last.fm, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "getTopTags",
          "package": "liblastfm",
          "signature": "Request f t",
          "source": "src/Network-Lastfm-Track.html#getTopTags",
          "type": "function"
        },
        "index": {
          "description": "Get the top tags for this track on Last.fm ordered by tag count Optional autocorrect http www.last.fm api show track.getTopTags",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "getTopTags",
          "package": "liblastfm",
          "partial": "Top Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getTopTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat track to scrobble?\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ealbum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealbumArtist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echosenByUser\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003econtext\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eduration\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003embid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estreamId\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etrackNumber\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "item",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e Timestamp -\u003e Scrobble)",
          "source": "src/Network-Lastfm-Track.html#item",
          "type": "function"
        },
        "index": {
          "description": "What track to scrobble Optional album albumArtist chosenByUser context duration mbid streamId trackNumber",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "item",
          "normalized": "Request a(Artist-\u003eTrack-\u003eTimestamp-\u003eScrobble)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eTrack-\u003eTimestamp-\u003eScrobble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLove a track for a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.love\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "love",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#love",
          "type": "function"
        },
        "index": {
          "description": "Love track for user profile http www.last.fm api show track.love",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "love",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:love"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a user's tag from a track.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.removeTag\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "removeTag",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e Tag -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#removeTag",
          "type": "function"
        },
        "index": {
          "description": "Remove user tag from track http www.last.fm api show track.removeTag",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "removeTag",
          "normalized": "Request a(Artist-\u003eTrack-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Tag",
          "signature": "Request f(Artist-\u003eTrack-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:removeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd played tracks to the user profile.\n\u003c/p\u003e\u003cp\u003eScrobbles 50 first list elements\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.scrobble\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "scrobble",
          "package": "liblastfm",
          "signature": "NonEmpty (Request f Scrobble) -\u003e Request f (APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#scrobble",
          "type": "function"
        },
        "index": {
          "description": "Add played tracks to the user profile Scrobbles first list elements http www.last.fm api show track.scrobble",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "scrobble",
          "normalized": "NonEmpty(Request a Scrobble)-\u003eRequest a(APIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "NonEmpty(Request f Scrobble)-\u003eRequest f(APIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:scrobble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for a track by track name. Returns track matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eartist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.search\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "search",
          "package": "liblastfm",
          "signature": "Request f (Track -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Track.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search for track by track name Returns track matches sorted by relevance Optional artist limit page http www.last.fm api show track.search",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "search",
          "normalized": "Request a(Track-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f(Track-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare a track twith one or more Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecipient\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.share\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "share",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#share",
          "type": "function"
        },
        "index": {
          "description": "Share track twith one or more Last.fm users or other friends Optional public message recipient http www.last.fm api show track.share",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "share",
          "normalized": "Request a(Artist-\u003eTrack-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eTrack-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnban a track for a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.unban\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "unban",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#unban",
          "type": "function"
        },
        "index": {
          "description": "Unban track for user profile http www.last.fm api show track.unban",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "unban",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:unban"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlove a track for a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.unlove\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "unlove",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#unlove",
          "type": "function"
        },
        "index": {
          "description": "Unlove track for user profile http www.last.fm api show track.unlove",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "unlove",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:unlove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to notify Last.fm that a user has started listening\n to a track. Parameter names are case sensitive.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ealbum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealbumArtist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003econtext\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eduration\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003embid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etrackNumber\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.updateNowPlaying\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Track",
          "name": "updateNowPlaying",
          "package": "liblastfm",
          "signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-Track.html#updateNowPlaying",
          "type": "function"
        },
        "index": {
          "description": "Used to notify Last.fm that user has started listening to track Parameter names are case sensitive Optional album albumArtist context duration mbid trackNumber http www.last.fm api show track.updateNowPlaying",
          "hierarchy": "Network Lastfm Track",
          "module": "Network.Lastfm.Track",
          "name": "updateNowPlaying",
          "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Now Playing",
          "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:updateNowPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm user API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.User as User\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.User",
          "name": "User",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-User.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm user API This module is intended to be imported qualified import qualified Network.Lastfm.User as User",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "User",
          "package": "liblastfm",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of tracks by a given artist scrobbled by this user\n , including scrobble time. Can be limited to specific timeranges, defaults to all time.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estartTimestamp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eendTimestamp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getArtistTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getArtistTracks",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e Artist -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getArtistTracks",
          "type": "function"
        },
        "index": {
          "description": "Get list of tracks by given artist scrobbled by this user including scrobble time Can be limited to specific timeranges defaults to all time Optional startTimestamp page endTimestamp http www.last.fm api show user.getArtistTracks",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getArtistTracks",
          "normalized": "Request a(User-\u003eArtist-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Artist Tracks",
          "signature": "Request f(User-\u003eArtist-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getArtistTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the tracks banned by the user\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getBannedTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getBannedTracks",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getBannedTracks",
          "type": "function"
        },
        "index": {
          "description": "Returns the tracks banned by the user Optional limit page http www.last.fm api show user.getBannedTracks",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getBannedTracks",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Banned Tracks",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getBannedTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of upcoming events that this user is attending.\n Easily integratable into calendars, using the ical standard (see 'more formats' section below).\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getEvents",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getEvents",
          "type": "function"
        },
        "index": {
          "description": "Get list of upcoming events that this user is attending Easily integratable into calendars using the ical standard see more formats section below Optional page festivalsonly limit http www.last.fm api show user.getEvents",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getEvents",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Events",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the user's friends on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003erecenttracks\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getFriends\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getFriends",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getFriends",
          "type": "function"
        },
        "index": {
          "description": "Get list of the user friends on Last.fm Optional recenttracks limit page http www.last.fm api show user.getFriends",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getFriends",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Friends",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getFriends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getInfo\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getInfo",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Get information about user profile http www.last.fm api show user.getInfo",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getInfo",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Info",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last 50 tracks loved by a user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getLovedTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getLovedTracks",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getLovedTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the last tracks loved by user Optional limit page http www.last.fm api show user.getLovedTracks",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getLovedTracks",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Loved Tracks",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getLovedTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of a user's neighbours on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getNeighbours\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getNeighbours",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getNeighbours",
          "type": "function"
        },
        "index": {
          "description": "Get list of user neighbours on Last.fm Optional limit http www.last.fm api show user.getNeighbours",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getNeighbours",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Neighbours",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getNeighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a list of forthcoming releases based on a user's musical taste.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003euserecs\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getNewReleases\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getNewReleases",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getNewReleases",
          "type": "function"
        },
        "index": {
          "description": "Gets list of forthcoming releases based on user musical taste Optional userecs http www.last.fm api show user.getNewReleases",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getNewReleases",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "New Releases",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getNewReleases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a paginated list of all events a user has attended in the past.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getPastEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getPastEvents",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getPastEvents",
          "type": "function"
        },
        "index": {
          "description": "Get paginated list of all events user has attended in the past Optional page limit http www.last.fm api show user.getPastEvents",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getPastEvents",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Past Events",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getPastEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user's personal tags\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003etaggingtype\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getPersonalTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getPersonalTags",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e Tag -\u003e TaggingType -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getPersonalTags",
          "type": "function"
        },
        "index": {
          "description": "Get the user personal tags Optional taggingtype limit page http www.last.fm api show user.getPersonalTags",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getPersonalTags",
          "normalized": "Request a(User-\u003eTag-\u003eTaggingType-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Personal Tags",
          "signature": "Request f(User-\u003eTag-\u003eTaggingType-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getPersonalTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of a user's playlists on Last.fm.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getPlaylists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getPlaylists",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getPlaylists",
          "type": "function"
        },
        "index": {
          "description": "Get list of user playlists on Last.fm http www.last.fm api show user.getPlaylists",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getPlaylists",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Playlists",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getPlaylists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the recent Stations listened to by this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecentStations\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getRecentStations",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-User.html#getRecentStations",
          "type": "function"
        },
        "index": {
          "description": "Get list of the recent Stations listened to by this user Optional limit page http www.last.fm api show user.getRecentStations",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getRecentStations",
          "normalized": "Request a(User-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Recent Stations",
          "signature": "Request f(User-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecentStations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the recent tracks listened to by this user.\n Also includes the currently playing track with the nowplaying=\u003ca\u003etrue\u003c/a\u003e\n attribute if the user is currently listening.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eextended\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecentTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getRecentTracks",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getRecentTracks",
          "type": "function"
        },
        "index": {
          "description": "Get list of the recent tracks listened to by this user Also includes the currently playing track with the nowplaying true attribute if the user is currently listening Optional limit page from extended to http www.last.fm api show user.getRecentTracks",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getRecentTracks",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Recent Tracks",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecentTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Last.fm artist recommendations for a user\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecommendedArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getRecommendedArtists",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-User.html#getRecommendedArtists",
          "type": "function"
        },
        "index": {
          "description": "Get Last.fm artist recommendations for user Optional page limit http www.last.fm api show user.getRecommendedArtists",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getRecommendedArtists",
          "normalized": "Request a(APIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Recommended Artists",
          "signature": "Request f(APIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecommendedArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a paginated list of all events recommended to a user by Last.fm, based on their listening profile.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elatitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elongitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecountry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecommendedEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getRecommendedEvents",
          "package": "liblastfm",
          "signature": "Request f (APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-User.html#getRecommendedEvents",
          "type": "function"
        },
        "index": {
          "description": "Get paginated list of all events recommended to user by Last.fm based on their listening profile Optional limit page latitude longitude festivalsonly country http www.last.fm api show user.getRecommendedEvents",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getRecommendedEvents",
          "normalized": "Request a(APIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "partial": "Recommended Events",
          "signature": "Request f(APIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecommendedEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet shouts for this user. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getShouts\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getShouts",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getShouts",
          "type": "function"
        },
        "index": {
          "description": "Get shouts for this user Also available as an rss feed Optional page limit http www.last.fm api show user.getShouts",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getShouts",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Shouts",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getShouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top albums listened to by a user.\n You can stipulate a time period. Sends the overall chart by default.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003eperiod\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopAlbums\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getTopAlbums",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getTopAlbums",
          "type": "function"
        },
        "index": {
          "description": "Get the top albums listened to by user You can stipulate time period Sends the overall chart by default Optional period limit page http www.last.fm api show user.getTopAlbums",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getTopAlbums",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Albums",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopAlbums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top artists listened to by a user.\n You can stipulate a time period. Sends the overall chart by default.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003eperiod\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getTopArtists",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getTopArtists",
          "type": "function"
        },
        "index": {
          "description": "Get the top artists listened to by user You can stipulate time period Sends the overall chart by default Optional period limit page http www.last.fm api show user.getTopArtists",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getTopArtists",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Artists",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopArtists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tags used by this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getTopTags",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getTopTags",
          "type": "function"
        },
        "index": {
          "description": "Get the top tags used by this user Optional limit http www.last.fm api show user.getTopTags",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getTopTags",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tags",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the top tracks listened to by a user.\n You can stipulate a time period. Sends the overall chart by default.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003eperiod\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getTopTracks",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getTopTracks",
          "type": "function"
        },
        "index": {
          "description": "Get the top tracks listened to by user You can stipulate time period Sends the overall chart by default Optional period limit page http www.last.fm api show user.getTopTracks",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getTopTracks",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Top Tracks",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an album chart for a user profile, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyAlbumChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyAlbumChart",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getWeeklyAlbumChart",
          "type": "function"
        },
        "index": {
          "description": "Get an album chart for user profile for given date range If no date range is supplied it will return the most recent album chart for this user Optional from to http www.last.fm api show user.getWeeklyAlbumChart",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyAlbumChart",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Album Chart",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyAlbumChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an artist chart for a user profile, for a given date range.\n If no date range is supplied, it will return the most recent artist chart for this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyArtistChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyArtistChart",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getWeeklyArtistChart",
          "type": "function"
        },
        "index": {
          "description": "Get an artist chart for user profile for given date range If no date range is supplied it will return the most recent artist chart for this user Optional from to http www.last.fm api show user.getWeeklyArtistChart",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyArtistChart",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Artist Chart",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyArtistChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of available charts for this user, expressed as\n date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyChartList\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyChartList",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getWeeklyChartList",
          "type": "function"
        },
        "index": {
          "description": "Get list of available charts for this user expressed as date ranges which can be sent to the chart services http www.last.fm api show user.getWeeklyChartList",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyChartList",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Chart List",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyChartList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a track chart for a user profile, for a given date range.\n If no date range is supplied, it will return the most recent track chart for this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyTrackChart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyTrackChart",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-User.html#getWeeklyTrackChart",
          "type": "function"
        },
        "index": {
          "description": "Get track chart for user profile for given date range If no date range is supplied it will return the most recent track chart for this user Optional from to http www.last.fm api show user.getWeeklyTrackChart",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "getWeeklyTrackChart",
          "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Weekly Track Chart",
          "signature": "Request f(User-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyTrackChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShout on this user's shoutbox\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.shout\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.User",
          "name": "shout",
          "package": "liblastfm",
          "signature": "Request f (User -\u003e Message -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
          "source": "src/Network-Lastfm-User.html#shout",
          "type": "function"
        },
        "index": {
          "description": "Shout on this user shoutbox http www.last.fm api show user.shout",
          "hierarchy": "Network Lastfm User",
          "module": "Network.Lastfm.User",
          "name": "shout",
          "normalized": "Request a(User-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "package": "liblastfm",
          "signature": "Request f(User-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:shout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm venue API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Venue as Venue\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Lastfm.Venue",
          "name": "Venue",
          "package": "liblastfm",
          "source": "src/Network-Lastfm-Venue.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm venue API This module is intended to be imported qualified import qualified Network.Lastfm.Venue as Venue",
          "hierarchy": "Network Lastfm Venue",
          "module": "Network.Lastfm.Venue",
          "name": "Venue",
          "package": "liblastfm",
          "partial": "Venue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of upcoming events at this venue.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/venue.getEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Venue",
          "name": "getEvents",
          "package": "liblastfm",
          "signature": "Request f (Venue -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Venue.html#getEvents",
          "type": "function"
        },
        "index": {
          "description": "Get list of upcoming events at this venue Optional festivalsonly http www.last.fm api show venue.getEvents",
          "hierarchy": "Network Lastfm Venue",
          "module": "Network.Lastfm.Venue",
          "name": "getEvents",
          "normalized": "Request a(Venue-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Events",
          "signature": "Request f(Venue-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#v:getEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a paginated list of all the events held at this venue in the past.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/venue.getPastEvents\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Venue",
          "name": "getPastEvents",
          "package": "liblastfm",
          "signature": "Request f (Venue -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Venue.html#getPastEvents",
          "type": "function"
        },
        "index": {
          "description": "Get paginated list of all the events held at this venue in the past Optional festivalsonly page limit http www.last.fm api show venue.getPastEvents",
          "hierarchy": "Network Lastfm Venue",
          "module": "Network.Lastfm.Venue",
          "name": "getPastEvents",
          "normalized": "Request a(Venue-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "partial": "Past Events",
          "signature": "Request f(Venue-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#v:getPastEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for a venue by venue name\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecountry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/venue.search\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Lastfm.Venue",
          "name": "search",
          "package": "liblastfm",
          "signature": "Request f (VenueName -\u003e APIKey -\u003e Ready)",
          "source": "src/Network-Lastfm-Venue.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search for venue by venue name Optional page limit country http www.last.fm api show venue.search",
          "hierarchy": "Network Lastfm Venue",
          "module": "Network.Lastfm.Venue",
          "name": "search",
          "normalized": "Request a(VenueName-\u003eAPIKey-\u003eReady)",
          "package": "liblastfm",
          "signature": "Request f(VenueName-\u003eAPIKey-\u003eReady)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm API interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Lastfm",
          "name": "Lastfm",
          "package": "liblastfm",
          "source": "src/Network-Lastfm.html",
          "type": "module"
        },
        "index": {
          "description": "Lastfm API interface",
          "hierarchy": "Network Lastfm",
          "module": "Network.Lastfm",
          "name": "Lastfm",
          "package": "liblastfm",
          "partial": "Lastfm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm.html#"
      }
    }
  ]
]