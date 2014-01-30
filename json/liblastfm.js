[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm album API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Album as Album\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Album.html",
        "fct-type": "module",
        "title": "Album"
      },
      "index": {
        "description": "Lastfm album API This module is intended to be imported qualified import qualified Network.Lastfm.Album as Album",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "Album",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#t:ArtistAlbumOrMBID",
      "description": {
        "fct-descr": "\u003cp\u003eUnify (\u003ccode\u003e\u003ca\u003eArtist\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eAlbum\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;) and (\u003ccode\u003e\u003ca\u003eMBID\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;)\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "class",
        "fct-source": "src/Network-Lastfm-Album.html#ArtistAlbumOrMBID",
        "fct-type": "class",
        "title": "ArtistAlbumOrMBID"
      },
      "index": {
        "description": "Unify Artist Album and MBID",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "ArtistAlbumOrMBID",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Artist Album Or MBID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:addTags",
      "description": {
        "fct-descr": "\u003cp\u003eTag an album using a list of user supplied tags.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.addTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Album -\u003e [Tag] -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Album.html#addTags",
        "fct-type": "function",
        "title": "addTags"
      },
      "index": {
        "description": "Tag an album using list of user supplied tags http www.last.fm api show album.addTags",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "addTags",
        "normalized": "Request a(Artist-\u003eAlbum-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Tags",
        "signature": "Request f(Artist-\u003eAlbum-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getBuyLinks",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of Buy Links for a particular Album. It is\n required that you supply either the artist and track params or the mbid parameter.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getBuylinks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Country -\u003e a)",
        "fct-source": "src/Network-Lastfm-Album.html#getBuyLinks",
        "fct-type": "function",
        "title": "getBuyLinks"
      },
      "index": {
        "description": "Get list of Buy Links for particular Album It is required that you supply either the artist and track params or the mbid parameter Optional autocorrect http www.last.fm api show album.getBuylinks",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "getBuyLinks",
        "normalized": "Request a(Country-\u003eb)",
        "package": "liblastfm",
        "partial": "Buy Links",
        "signature": "Request f(Country-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet the metadata for an album on Last.fm using the album name or\n a musicbrainz id. See playlist.fetch on how to get the album playlist.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusername\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elanguage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getInfo\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a",
        "fct-source": "src/Network-Lastfm-Album.html#getInfo",
        "fct-type": "function",
        "title": "getInfo"
      },
      "index": {
        "description": "Get the metadata for an album on Last.fm using the album name or musicbrainz id See playlist.fetch on how to get the album playlist Optional autocorrect username language http www.last.fm api show album.getInfo",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "getInfo",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getShouts",
      "description": {
        "fct-descr": "\u003cp\u003eGet shouts for this album.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getShouts\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a",
        "fct-source": "src/Network-Lastfm-Album.html#getShouts",
        "fct-type": "function",
        "title": "getShouts"
      },
      "index": {
        "description": "Get shouts for this album Optional autocorrect limit page http www.last.fm api show album.getShouts",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "getShouts",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Shouts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the tags applied by an individual user to an album on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a",
        "fct-source": "src/Network-Lastfm-Album.html#getTags",
        "fct-type": "function",
        "title": "getTags"
      },
      "index": {
        "description": "Get the tags applied by an individual user to an album on Last.fm Optional autocorrect user http www.last.fm api show album.getTags",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "getTags",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:getTopTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tags for an album on Last.fm, ordered by popularity.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a",
        "fct-source": "src/Network-Lastfm-Album.html#getTopTags",
        "fct-type": "function",
        "title": "getTopTags"
      },
      "index": {
        "description": "Get the top tags for an album on Last.fm ordered by popularity Optional autocorrect http www.last.fm api show album.getTopTags",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "getTopTags",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Top Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:removeTag",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a user's tag from an album.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.removeTag\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Album -\u003e Tag -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Album.html#removeTag",
        "fct-type": "function",
        "title": "removeTag"
      },
      "index": {
        "description": "Remove user tag from an album http www.last.fm api show album.removeTag",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "removeTag",
        "normalized": "Request a(Artist-\u003eAlbum-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Tag",
        "signature": "Request f(Artist-\u003eAlbum-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for an album by name. Returns album matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.search\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Album -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Album.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search for an album by name Returns album matches sorted by relevance Optional limit page http www.last.fm api show album.search",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "search",
        "normalized": "Request a(Album-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Album-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Album.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003eShare an album with one or more Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecipient\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/album.share\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Album",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Album -\u003e Artist -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Album.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "Share an album with one or more Last.fm users or other friends Optional public message recipient http www.last.fm api show album.share",
        "hierarchy": "Network Lastfm Album",
        "module": "Network.Lastfm.Album",
        "name": "share",
        "normalized": "Request a(Album-\u003eArtist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Album-\u003eArtist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm artist API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Artist as Artist\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Artist.html",
        "fct-type": "module",
        "title": "Artist"
      },
      "index": {
        "description": "Lastfm artist API This module is intended to be imported qualified import qualified Network.Lastfm.Artist as Artist",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "Artist",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#t:ArtistOrMBID",
      "description": {
        "fct-descr": "\u003cp\u003eUnify (\u003ccode\u003e\u003ca\u003eArtist\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;) and (\u003ccode\u003e\u003ca\u003eMBID\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;)\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "class",
        "fct-source": "src/Network-Lastfm-Artist.html#ArtistOrMBID",
        "fct-type": "class",
        "title": "ArtistOrMBID"
      },
      "index": {
        "description": "Unify Artist and MBID",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "ArtistOrMBID",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Artist Or MBID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:addTags",
      "description": {
        "fct-descr": "\u003cp\u003eTag an artist with one or more user supplied tags.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.addTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e [Tag] -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Artist.html#addTags",
        "fct-type": "function",
        "title": "addTags"
      },
      "index": {
        "description": "Tag an artist with one or more user supplied tags http www.last.fm api show artist.addTags",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "addTags",
        "normalized": "Request a(Artist-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Tags",
        "signature": "Request f(Artist-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getCorrection",
      "description": {
        "fct-descr": "\u003cp\u003eUse the last.fm corrections data to check whether the\n supplied artist has a correction to a canonical artist\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getCorrection\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getCorrection",
        "fct-type": "function",
        "title": "getCorrection"
      },
      "index": {
        "description": "Use the last.fm corrections data to check whether the supplied artist has correction to canonical artist http www.last.fm api show artist.getCorrection",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getCorrection",
        "normalized": "Request a(Artist-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Correction",
        "signature": "Request f(Artist-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of upcoming events for this artist. Easily\n integratable into calendars, using the ical standard (see feeds section below).\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003epages\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getEvents",
        "fct-type": "function",
        "title": "getEvents"
      },
      "index": {
        "description": "Get list of upcoming events for this artist Easily integratable into calendars using the ical standard see feeds section below Optional autocorrect limit pages festivalsonly http www.last.fm api show artist.getEvents",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getEvents",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Events",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet the metadata for an artist. Includes biography.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elanguage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusername\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getInfo\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getInfo",
        "fct-type": "function",
        "title": "getInfo"
      },
      "index": {
        "description": "Get the metadata for an artist Includes biography Optional language autocorrect username http www.last.fm api show artist.getInfo",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getInfo",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Info",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getPastEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a paginated list of all the events this artist has played at in the past.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getPastEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getPastEvents",
        "fct-type": "function",
        "title": "getPastEvents"
      },
      "index": {
        "description": "Get paginated list of all the events this artist has played at in the past Optional page autocorrect limit http www.last.fm api show artist.getPastEvents",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getPastEvents",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Past Events",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getPodcast",
      "description": {
        "fct-descr": "\u003cp\u003eGet a podcast of free mp3s based on an artist\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getPodcast\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getPodcast",
        "fct-type": "function",
        "title": "getPodcast"
      },
      "index": {
        "description": "Get podcast of free mp3s based on an artist Optional autocorrect http www.last.fm api show artist.getPodcast",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getPodcast",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Podcast",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getShouts",
      "description": {
        "fct-descr": "\u003cp\u003eGet shouts for this artist. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional:\u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getShouts\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getShouts",
        "fct-type": "function",
        "title": "getShouts"
      },
      "index": {
        "description": "Get shouts for this artist Also available as an rss feed Optional autocorrect limit page http www.last.fm api show artist.getShouts",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getShouts",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Shouts",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getSimilar",
      "description": {
        "fct-descr": "\u003cp\u003eGet all the artists similar to this artist\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getSimilar\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getSimilar",
        "fct-type": "function",
        "title": "getSimilar"
      },
      "index": {
        "description": "Get all the artists similar to this artist Optional limit autocorrect http www.last.fm api show artist.getSimilar",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getSimilar",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Similar",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the tags applied by an individual user to an artist on Last.fm.\n If accessed as an authenticated service \u003cem\u003eand\u003c/em\u003e you don't supply a\n user parameter then this service will return tags for\n the authenticated user. To retrieve the list of top tags applied\n to an artist by all users use \u003ccode\u003e\u003ca\u003egetTopTags\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003euser\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e r)",
        "fct-source": "src/Network-Lastfm-Artist.html#getTags",
        "fct-type": "function",
        "title": "getTags"
      },
      "index": {
        "description": "Get the tags applied by an individual user to an artist on Last.fm If accessed as an authenticated service and you don supply user parameter then this service will return tags for the authenticated user To retrieve the list of top tags applied to an artist by all users use getTopTags Optional user autocorrect http www.last.fm api show artist.getTags",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getTags",
        "normalized": "Request a(b-\u003eAPIKey-\u003ec)",
        "package": "liblastfm",
        "partial": "Tags",
        "signature": "Request f(a-\u003eAPIKey-\u003er)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopAlbums",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top albums for an artist on Last.fm, ordered by popularity.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopAlbums\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getTopAlbums",
        "fct-type": "function",
        "title": "getTopAlbums"
      },
      "index": {
        "description": "Get the top albums for an artist on Last.fm ordered by popularity Optional autocorrect page limit http www.last.fm api show artist.getTopAlbums",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getTopAlbums",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Albums",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopFans",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top fans for an artist on Last.fm, based on listening data.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopFans\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getTopFans",
        "fct-type": "function",
        "title": "getTopFans"
      },
      "index": {
        "description": "Get the top fans for an artist on Last.fm based on listening data Optional autocorrect http www.last.fm api show artist.getTopFans",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getTopFans",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Fans",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tags for an artist on Last.fm, ordered by popularity.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getTopTags",
        "fct-type": "function",
        "title": "getTopTags"
      },
      "index": {
        "description": "Get the top tags for an artist on Last.fm ordered by popularity Optional autocorrect http www.last.fm api show artist.getTopTags",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getTopTags",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tags",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:getTopTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tracks by an artist on Last.fm, ordered by popularity\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (a -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#getTopTracks",
        "fct-type": "function",
        "title": "getTopTracks"
      },
      "index": {
        "description": "Get the top tracks by an artist on Last.fm ordered by popularity Optional autocorrect page limit http www.last.fm api show artist.getTopTracks",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "getTopTracks",
        "normalized": "Request a(b-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tracks",
        "signature": "Request f(a-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:removeTag",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a user's tag from an artist.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.removeTag\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Tag -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Artist.html#removeTag",
        "fct-type": "function",
        "title": "removeTag"
      },
      "index": {
        "description": "Remove user tag from an artist http www.last.fm api show artist.removeTag",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "removeTag",
        "normalized": "Request a(Artist-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Tag",
        "signature": "Request f(Artist-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for an artist by name. Returns artist matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.search\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Artist.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search for an artist by name Returns artist matches sorted by relevance Optional limit page http www.last.fm api show artist.search",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "search",
        "normalized": "Request a(Artist-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003eShare an artist with Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.share\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Artist.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "Share an artist with Last.fm users or other friends Optional message public http www.last.fm api show artist.share",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "share",
        "normalized": "Request a(Artist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Artist.html#v:shout",
      "description": {
        "fct-descr": "\u003cp\u003eShout in this artist's shoutbox\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/artist.shout\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Artist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Message -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Artist.html#shout",
        "fct-type": "function",
        "title": "shout"
      },
      "index": {
        "description": "Shout in this artist shoutbox http www.last.fm api show artist.shout",
        "hierarchy": "Network Lastfm Artist",
        "module": "Network.Lastfm.Artist",
        "name": "shout",
        "normalized": "Request a(Artist-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm authentication procedure helpers\n\u003c/p\u003e\u003cp\u003eBasically, lastfm provides 3 ways to authenticate user:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e web application - \u003ca\u003ehttp://www.last.fm/api/webauth\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e desktop application - \u003ca\u003ehttp://www.last.fm/api/desktopauth\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e modile application - \u003ca\u003ehttp://www.last.fm/api/mobileauth\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that you can use any of them in your\n application despite their names\n\u003c/p\u003e\u003cp\u003eHow to get session key for yourself for debug with GHCi:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Network.Lastfm\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Network.Lastfm.Authentication\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elastfm $ getToken \u003c*\u003e apiKey \"__API_KEY__\" \u003c* json\n\u003c/code\u003e\u003c/strong\u003eJust (Object fromList [(\"token\",String \"__TOKEN__\")])\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn . link $ apiKey \"__API_KEY__\" \u003c* token \"__TOKEN__\"\n\u003c/code\u003e\u003c/strong\u003ehttp://www.last.fm/api/auth/?api_key=__API_KEY__&token=__TOKEN__\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e-- Click that link ^^^\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elastfm . sign \"__SECRET__\" $ getSession \u003c*\u003e token \"__TOKEN__\" \u003c*\u003e apiKey \"__API_KEY__\"  \u003c* json\n\u003c/code\u003e\u003c/strong\u003eJust (Object fromList [(\"session\",Object fromList [(\"name\",String \"__USER__\"),(\"subscriber\",String \"0\"),(\"key\",String \"__SESSION_KEY__\")])])\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Authentication",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Authentication.html",
        "fct-type": "module",
        "title": "Authentication"
      },
      "index": {
        "description": "Lastfm authentication procedure helpers Basically lastfm provides ways to authenticate user web application http www.last.fm api webauth desktop application http www.last.fm api desktopauth modile application http www.last.fm api mobileauth Note that you can use any of them in your application despite their names How to get session key for yourself for debug with GHCi import Network.Lastfm import Network.Lastfm.Authentication set XOverloadedStrings lastfm getToken apiKey API KEY json Just Object fromList token String TOKEN putStrLn link apiKey API KEY token TOKEN http www.last.fm api auth api key API KEY token TOKEN Click that link lastfm sign SECRET getSession token TOKEN apiKey API KEY json Just Object fromList session Object fromList name String USER subscriber String key String SESSION KEY",
        "hierarchy": "Network Lastfm Authentication",
        "module": "Network.Lastfm.Authentication",
        "name": "Authentication",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Authentication",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:getMobileSession",
      "description": {
        "fct-descr": "\u003cp\u003eGet session key\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Authentication",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Username -\u003e Password -\u003e APIKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Authentication.html#getMobileSession",
        "fct-type": "function",
        "title": "getMobileSession"
      },
      "index": {
        "description": "Get session key",
        "hierarchy": "Network Lastfm Authentication",
        "module": "Network.Lastfm.Authentication",
        "name": "getMobileSession",
        "normalized": "Request a(Username-\u003ePassword-\u003eAPIKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Mobile Session",
        "signature": "Request f(Username-\u003ePassword-\u003eAPIKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:getSession",
      "description": {
        "fct-descr": "\u003cp\u003eGet session key\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Authentication",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Token -\u003e APIKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Authentication.html#getSession",
        "fct-type": "function",
        "title": "getSession"
      },
      "index": {
        "description": "Get session key",
        "hierarchy": "Network Lastfm Authentication",
        "module": "Network.Lastfm.Authentication",
        "name": "getSession",
        "normalized": "Request a(Token-\u003eAPIKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Session",
        "signature": "Request f(Token-\u003eAPIKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:getToken",
      "description": {
        "fct-descr": "\u003cp\u003eGet authorization token\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Authentication",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Authentication.html#getToken",
        "fct-type": "function",
        "title": "getToken"
      },
      "index": {
        "description": "Get authorization token",
        "hierarchy": "Network Lastfm Authentication",
        "module": "Network.Lastfm.Authentication",
        "name": "getToken",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Token",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Authentication.html#v:link",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct link user should follow to approve application\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Authentication",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a -\u003e String",
        "fct-source": "src/Network-Lastfm-Authentication.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "Construct link user should follow to approve application",
        "hierarchy": "Network Lastfm Authentication",
        "module": "Network.Lastfm.Authentication",
        "name": "link",
        "normalized": "Request a b-\u003eString",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm chart API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Chart as Chart\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Chart.html",
        "fct-type": "module",
        "title": "Chart"
      },
      "index": {
        "description": "Lastfm chart API This module is intended to be imported qualified import qualified Network.Lastfm.Chart as Chart",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "Chart",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getHypedArtists",
      "description": {
        "fct-descr": "\u003cp\u003eGet the hyped artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getHypedArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Chart.html#getHypedArtists",
        "fct-type": "function",
        "title": "getHypedArtists"
      },
      "index": {
        "description": "Get the hyped artists chart Optional page limit http www.last.fm api show chart.getHypedArtists",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "getHypedArtists",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Hyped Artists",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getHypedTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getHypedTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Chart.html#getHypedTracks",
        "fct-type": "function",
        "title": "getHypedTracks"
      },
      "index": {
        "description": "Get the top artists chart Optional page limit http www.last.fm api show chart.getHypedTracks",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "getHypedTracks",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Hyped Tracks",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getLovedTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the most loved tracks chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getLovedTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Chart.html#getLovedTracks",
        "fct-type": "function",
        "title": "getLovedTracks"
      },
      "index": {
        "description": "Get the most loved tracks chart Optional page limit http www.last.fm api show chart.getLovedTracks",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "getLovedTracks",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Loved Tracks",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getTopArtists",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Chart.html#getTopArtists",
        "fct-type": "function",
        "title": "getTopArtists"
      },
      "index": {
        "description": "Get the top artists chart Optional page limit http www.last.fm api show chart.getTopArtists",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "getTopArtists",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Artists",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getTopTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top artists chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Chart.html#getTopTags",
        "fct-type": "function",
        "title": "getTopTags"
      },
      "index": {
        "description": "Get the top artists chart Optional page limit http www.last.fm api show chart.getTopTags",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "getTopTags",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tags",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Chart.html#v:getTopTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tracks chart\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/chart.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Chart",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Chart.html#getTopTracks",
        "fct-type": "function",
        "title": "getTopTracks"
      },
      "index": {
        "description": "Get the top tracks chart Optional page limit http www.last.fm api show chart.getTopTracks",
        "hierarchy": "Network Lastfm Chart",
        "module": "Network.Lastfm.Chart",
        "name": "getTopTracks",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tracks",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm event API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Event as Event\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "Lastfm event API This module is intended to be imported qualified import qualified Network.Lastfm.Event as Event",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "Event",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:attend",
      "description": {
        "fct-descr": "\u003cp\u003eSet a user's attendance status for an event.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.attend\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Event -\u003e Status -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Event.html#attend",
        "fct-type": "function",
        "title": "attend"
      },
      "index": {
        "description": "Set user attendance status for an event http www.last.fm api show event.attend",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "attend",
        "normalized": "Request a(Event-\u003eStatus-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Event-\u003eStatus-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:getAttendees",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of attendees for an event.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.getAttendees\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Event -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Event.html#getAttendees",
        "fct-type": "function",
        "title": "getAttendees"
      },
      "index": {
        "description": "Get list of attendees for an event Optional page limit http www.last.fm api show event.getAttendees",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "getAttendees",
        "normalized": "Request a(Event-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Attendees",
        "signature": "Request f(Event-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:getInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet the metadata for an event on Last.fm. Includes attendance and lineup information.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.getInfo\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Event -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Event.html#getInfo",
        "fct-type": "function",
        "title": "getInfo"
      },
      "index": {
        "description": "Get the metadata for an event on Last.fm Includes attendance and lineup information http www.last.fm api show event.getInfo",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "getInfo",
        "normalized": "Request a(Event-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Info",
        "signature": "Request f(Event-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:getShouts",
      "description": {
        "fct-descr": "\u003cp\u003eGet shouts for this event. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.getShouts\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Event -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Event.html#getShouts",
        "fct-type": "function",
        "title": "getShouts"
      },
      "index": {
        "description": "Get shouts for this event Also available as an rss feed Optional page limit http www.last.fm api show event.getShouts",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "getShouts",
        "normalized": "Request a(Event-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Shouts",
        "signature": "Request f(Event-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003eShare an event with one or more Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.share\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Event -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Event.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "Share an event with one or more Last.fm users or other friends Optional public message http www.last.fm api show event.share",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "share",
        "normalized": "Request a(Event-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Event-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Event.html#v:shout",
      "description": {
        "fct-descr": "\u003cp\u003eShout in this event's shoutbox\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/event.shout\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Event",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Event -\u003e Message -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Event.html#shout",
        "fct-type": "function",
        "title": "shout"
      },
      "index": {
        "description": "Shout in this event shoutbox http www.last.fm api show event.shout",
        "hierarchy": "Network Lastfm Event",
        "module": "Network.Lastfm.Event",
        "name": "shout",
        "normalized": "Request a(Event-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Event-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm geo API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Geo as Geo\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Geo.html",
        "fct-type": "module",
        "title": "Geo"
      },
      "index": {
        "description": "Lastfm geo API This module is intended to be imported qualified import qualified Network.Lastfm.Geo as Geo",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "Geo",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Geo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet all events in a specific location by country or city name.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elongitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elatitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elocation\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getEvents",
        "fct-type": "function",
        "title": "getEvents"
      },
      "index": {
        "description": "Get all events in specific location by country or city name Optional longitude latitude location distance page tag festivalsonly limit http www.last.fm api show geo.getEvents",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getEvents",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Events",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroArtistChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a chart of artists for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroArtistChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroArtistChart",
        "fct-type": "function",
        "title": "getMetroArtistChart"
      },
      "index": {
        "description": "Get chart of artists for metro Optional start end page limit http www.last.fm api show geo.getMetroArtistChart",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroArtistChart",
        "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Artist Chart",
        "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroHypeArtistChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a chart of hyped (up and coming) artists for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroHypeArtistChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroHypeArtistChart",
        "fct-type": "function",
        "title": "getMetroHypeArtistChart"
      },
      "index": {
        "description": "Get chart of hyped up and coming artists for metro Optional start end page limit http www.last.fm api show geo.getMetroHypeArtistChart",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroHypeArtistChart",
        "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Hype Artist Chart",
        "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroHypeTrackChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a chart of tracks for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroHypeTrackChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroHypeTrackChart",
        "fct-type": "function",
        "title": "getMetroHypeTrackChart"
      },
      "index": {
        "description": "Get chart of tracks for metro Optional start end page limit http www.last.fm api show geo.getMetroHypeTrackChart",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroHypeTrackChart",
        "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Hype Track Chart",
        "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroTrackChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a chart of tracks for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroTrackChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroTrackChart",
        "fct-type": "function",
        "title": "getMetroTrackChart"
      },
      "index": {
        "description": "Get chart of tracks for metro Optional start end page limit http www.last.fm api show geo.getMetroTrackChart",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroTrackChart",
        "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Track Chart",
        "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroUniqueArtistChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a chart of the artists which make that metro unique\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroUniqueArtistChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroUniqueArtistChart",
        "fct-type": "function",
        "title": "getMetroUniqueArtistChart"
      },
      "index": {
        "description": "Get chart of the artists which make that metro unique Optional start end page limit http www.last.fm api show geo.getMetroUniqueArtistChart",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroUniqueArtistChart",
        "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Unique Artist Chart",
        "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroUniqueTrackChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a chart of tracks for a metro\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroUniqueTrackChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroUniqueTrackChart",
        "fct-type": "function",
        "title": "getMetroUniqueTrackChart"
      },
      "index": {
        "description": "Get chart of tracks for metro Optional start end page limit http www.last.fm api show geo.getMetroUniqueTrackChart",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroUniqueTrackChart",
        "normalized": "Request a(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Unique Track Chart",
        "signature": "Request f(Metro-\u003eCountry-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetroWeeklyChartlist",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of available chart periods for this metro,\n expressed as date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetroWeeklyChartlist\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Metro -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetroWeeklyChartlist",
        "fct-type": "function",
        "title": "getMetroWeeklyChartlist"
      },
      "index": {
        "description": "Get list of available chart periods for this metro expressed as date ranges which can be sent to the chart services http www.last.fm api show geo.getMetroWeeklyChartlist",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetroWeeklyChartlist",
        "normalized": "Request a(Metro-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metro Weekly Chartlist",
        "signature": "Request f(Metro-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getMetros",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of valid countries and metros for use in the other webservices\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ecountry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getMetros\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getMetros",
        "fct-type": "function",
        "title": "getMetros"
      },
      "index": {
        "description": "Get list of valid countries and metros for use in the other webservices Optional country http www.last.fm api show geo.getMetros",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getMetros",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Metros",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getTopArtists",
      "description": {
        "fct-descr": "\u003cp\u003eGet the most popular artists on Last.fm by country\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getTopArtists",
        "fct-type": "function",
        "title": "getTopArtists"
      },
      "index": {
        "description": "Get the most popular artists on Last.fm by country Optional limit page http www.last.fm api show geo.getTopArtists",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getTopArtists",
        "normalized": "Request a(Country-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Artists",
        "signature": "Request f(Country-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Geo.html#v:getTopTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the most popular tracks on Last.fm last week by country\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/geo.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Geo",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Country -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Geo.html#getTopTracks",
        "fct-type": "function",
        "title": "getTopTracks"
      },
      "index": {
        "description": "Get the most popular tracks on Last.fm last week by country Optional limit page http www.last.fm api show geo.getTopTracks",
        "hierarchy": "Network Lastfm Geo",
        "module": "Network.Lastfm.Geo",
        "name": "getTopTracks",
        "normalized": "Request a(Country-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tracks",
        "signature": "Request f(Country-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm group API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Group as Group\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Group.html",
        "fct-type": "module",
        "title": "Group"
      },
      "index": {
        "description": "Lastfm group API This module is intended to be imported qualified import qualified Network.Lastfm.Group as Group",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "Group",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getHype",
      "description": {
        "fct-descr": "\u003cp\u003eGet the hype list for a group\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getHype\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Group.html#getHype",
        "fct-type": "function",
        "title": "getHype"
      },
      "index": {
        "description": "Get the hype list for group http www.last.fm api show group.getHype",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "getHype",
        "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Hype",
        "signature": "Request f(Group-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getMembers",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of members for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getMembers\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Group.html#getMembers",
        "fct-type": "function",
        "title": "getMembers"
      },
      "index": {
        "description": "Get list of members for this group Optional page limit http www.last.fm api show group.getMembers",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "getMembers",
        "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Members",
        "signature": "Request f(Group-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyAlbumChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet an album chart for a group, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyAlbumChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Group.html#getWeeklyAlbumChart",
        "fct-type": "function",
        "title": "getWeeklyAlbumChart"
      },
      "index": {
        "description": "Get an album chart for group for given date range If no date range is supplied it will return the most recent album chart for this group Optional from to http www.last.fm api show group.getWeeklyAlbumChart",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "getWeeklyAlbumChart",
        "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Album Chart",
        "signature": "Request f(Group-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyArtistChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet an artist chart for a group, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyArtistChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Group.html#getWeeklyArtistChart",
        "fct-type": "function",
        "title": "getWeeklyArtistChart"
      },
      "index": {
        "description": "Get an artist chart for group for given date range If no date range is supplied it will return the most recent album chart for this group Optional from to http www.last.fm api show group.getWeeklyArtistChart",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "getWeeklyArtistChart",
        "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Artist Chart",
        "signature": "Request f(Group-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyChartList",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of available charts for this group, expressed as\n date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyChartList\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Group.html#getWeeklyChartList",
        "fct-type": "function",
        "title": "getWeeklyChartList"
      },
      "index": {
        "description": "Get list of available charts for this group expressed as date ranges which can be sent to the chart services http www.last.fm api show group.getWeeklyChartList",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "getWeeklyChartList",
        "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Chart List",
        "signature": "Request f(Group-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Group.html#v:getWeeklyTrackChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a track chart for a group, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this group.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/group.getWeeklyTrackChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Group",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Group -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Group.html#getWeeklyTrackChart",
        "fct-type": "function",
        "title": "getWeeklyTrackChart"
      },
      "index": {
        "description": "Get track chart for group for given date range If no date range is supplied it will return the most recent album chart for this group Optional from to http www.last.fm api show group.getWeeklyTrackChart",
        "hierarchy": "Network Lastfm Group",
        "module": "Network.Lastfm.Group",
        "name": "getWeeklyTrackChart",
        "normalized": "Request a(Group-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Track Chart",
        "signature": "Request f(Group-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eliblastfm internals\n\u003c/p\u003e\u003cp\u003eYou shouldn't need to import this module unless you are doing something interesting.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "liblastfm internals You shouldn need to import this module unless you are doing something interesting",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eResponse format: either JSON or XML\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "Response format either JSON or XML",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "Format",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:R",
      "description": {
        "fct-descr": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003elow-level representation\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "Lastfm API request data type low-level representation",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "R",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Ready",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that is ready to be sent\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Ready",
        "fct-type": "data",
        "title": "Ready"
      },
      "index": {
        "description": "Request that is ready to be sent",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "Ready",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Ready",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e is authentication state. Might be \u003ccode\u003eSend\u003c/code\u003e which indicates\n that you may send this request already or \u003ccode\u003e\u003ca\u003eSign\u003c/a\u003e\u003c/code\u003e, when request signature\n isn't computed yet\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ef\u003c/code\u003e is response format. liblastfm currently supports \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eXML\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Lastfm-Internal.html#Request",
        "fct-type": "newtype",
        "title": "Request"
      },
      "index": {
        "description": "Lastfm API request data type is authentication state Might be Send which indicates that you may send this request already or Sign when request signature isn computed yet is response format liblastfm currently supports JSON or XML",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "Request",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#t:Sign",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that requires signing procedure\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Sign",
        "fct-type": "data",
        "title": "Sign"
      },
      "index": {
        "description": "Request that requires signing procedure",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "Sign",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Sign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:JSON",
      "description": {
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "JSON",
        "fct-source": "src/Network-Lastfm-Internal.html#Format",
        "fct-type": "function",
        "title": "JSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "JSON",
        "normalized": "",
        "package": "liblastfm",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:R",
      "description": {
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "R",
        "fct-source": "src/Network-Lastfm-Internal.html#R",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "R",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:Request",
      "description": {
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "Request",
        "fct-source": "src/Network-Lastfm-Internal.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "Request",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:XML",
      "description": {
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "XML",
        "fct-source": "src/Network-Lastfm-Internal.html#Format",
        "fct-type": "function",
        "title": "XML"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "XML",
        "normalized": "",
        "package": "liblastfm",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:_host",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "!Text",
        "fct-source": "src/Network-Lastfm-Internal.html#R",
        "fct-type": "function",
        "title": "_host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "_host",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:_method",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "!ByteString",
        "fct-source": "src/Network-Lastfm-Internal.html#R",
        "fct-type": "function",
        "title": "_method"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "_method",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:_query",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "!(Map Text Text)",
        "fct-source": "src/Network-Lastfm-Internal.html#R",
        "fct-type": "function",
        "title": "_query"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "_query",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:absorbQuery",
      "description": {
        "fct-descr": "\u003cp\u003eAbsorbing a bunch of queries, useful in batch operations\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "t (Request f b) -\u003e Request f a",
        "fct-source": "src/Network-Lastfm-Internal.html#absorbQuery",
        "fct-type": "function",
        "title": "absorbQuery"
      },
      "index": {
        "description": "Absorbing bunch of queries useful in batch operations",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "absorbQuery",
        "normalized": "a(Request b c)-\u003eRequest b d",
        "package": "liblastfm",
        "partial": "Query",
        "signature": "t(Request f b)-\u003eRequest f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:coerce",
      "description": {
        "fct-descr": "\u003cp\u003eCopypaste from \u003ca\u003eControl.Lens.Internal.Getter\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "f a -\u003e f b",
        "fct-source": "src/Network-Lastfm-Internal.html#coerce",
        "fct-type": "function",
        "title": "coerce"
      },
      "index": {
        "description": "Copypaste from Control.Lens.Internal.Getter",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "coerce",
        "normalized": "a b-\u003ea c",
        "package": "liblastfm",
        "partial": "",
        "signature": "f a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e_host\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "(Text -\u003e f Text) -\u003e R h -\u003e f (R h)",
        "fct-source": "src/Network-Lastfm-Internal.html#host",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "Request host",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "host",
        "normalized": "(Text-\u003ea Text)-\u003eR b-\u003ea(R b)",
        "package": "liblastfm",
        "partial": "",
        "signature": "(Text-\u003ef Text)-\u003eR h-\u003ef(R h)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:indexedWith",
      "description": {
        "fct-descr": "\u003cp\u003eTransforming Request to the \u003ca\u003earray notation\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "Int -\u003e Request f a -\u003e Request f a",
        "fct-source": "src/Network-Lastfm-Internal.html#indexedWith",
        "fct-type": "function",
        "title": "indexedWith"
      },
      "index": {
        "description": "Transforming Request to the array notation",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "indexedWith",
        "normalized": "Int-\u003eRequest a b-\u003eRequest a b",
        "package": "liblastfm",
        "partial": "With",
        "signature": "Int-\u003eRequest f a-\u003eRequest f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:method",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e HTTP \u003ccode\u003e\u003ca\u003e_method\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "(ByteString -\u003e f ByteString) -\u003e R h -\u003e f (R h)",
        "fct-source": "src/Network-Lastfm-Internal.html#method",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "Request HTTP method",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "method",
        "normalized": "(ByteString-\u003ea ByteString)-\u003eR b-\u003ea(R b)",
        "package": "liblastfm",
        "partial": "",
        "signature": "(ByteString-\u003ef ByteString)-\u003eR h-\u003ef(R h)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e_query\u003c/a\u003e\u003c/code\u003e string\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "(Map Text Text -\u003e f (Map Text Text)) -\u003e R h -\u003e f (R h)",
        "fct-source": "src/Network-Lastfm-Internal.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Request query string",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "query",
        "normalized": "(Map Text Text-\u003ea(Map Text Text))-\u003eR b-\u003ea(R b)",
        "package": "liblastfm",
        "partial": "",
        "signature": "(Map Text Text-\u003ef(Map Text Text))-\u003eR h-\u003ef(R h)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct String from request for networking\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "R f -\u003e String",
        "fct-source": "src/Network-Lastfm-Internal.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Construct String from request for networking",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "render",
        "normalized": "R a-\u003eString",
        "package": "liblastfm",
        "partial": "",
        "signature": "R f-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:unRequest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "Const (Dual (Endo (R f))) a",
        "fct-source": "src/Network-Lastfm-Internal.html#Request",
        "fct-type": "function",
        "title": "unRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "unRequest",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:unwrap",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrapping from interesting \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e) instance\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a -\u003e R f -\u003e R f",
        "fct-source": "src/Network-Lastfm-Internal.html#unwrap",
        "fct-type": "function",
        "title": "unwrap"
      },
      "index": {
        "description": "Unwrapping from interesting Monoid instance",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "unwrap",
        "normalized": "Request a b-\u003eR a-\u003eR a",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f a-\u003eR f-\u003eR f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Internal.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eWrapping to interesting \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e) instance\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Internal",
        "fct-package": "liblastfm",
        "fct-signature": "(R f -\u003e R f) -\u003e Request f a",
        "fct-source": "src/Network-Lastfm-Internal.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Wrapping to interesting Monoid instance",
        "hierarchy": "Network Lastfm Internal",
        "module": "Network.Lastfm.Internal",
        "name": "wrap",
        "normalized": "(R a-\u003eR a)-\u003eRequest a b",
        "package": "liblastfm",
        "partial": "",
        "signature": "(R f-\u003eR f)-\u003eRequest f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm library API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Library as Library\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Library.html",
        "fct-type": "module",
        "title": "Library"
      },
      "index": {
        "description": "Lastfm library API This module is intended to be imported qualified import qualified Network.Lastfm.Library as Library",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "Library",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Library",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:addAlbum",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an album or collection of albums to a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.addAlbum\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "NonEmpty (Request f LibraryAlbum) -\u003e Request f (APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#addAlbum",
        "fct-type": "function",
        "title": "addAlbum"
      },
      "index": {
        "description": "Add an album or collection of albums to user Last.fm library http www.last.fm api show library.addAlbum",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "addAlbum",
        "normalized": "NonEmpty(Request a LibraryAlbum)-\u003eRequest a(APIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Album",
        "signature": "NonEmpty(Request f LibraryAlbum)-\u003eRequest f(APIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:addArtist",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an artist to a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.addArtist\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "NonEmpty (Request f LibraryArtist) -\u003e Request f (APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#addArtist",
        "fct-type": "function",
        "title": "addArtist"
      },
      "index": {
        "description": "Add an artist to user Last.fm library http www.last.fm api show library.addArtist",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "addArtist",
        "normalized": "NonEmpty(Request a LibraryArtist)-\u003eRequest a(APIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Artist",
        "signature": "NonEmpty(Request f LibraryArtist)-\u003eRequest f(APIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:addTrack",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a track to a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.addTrack\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#addTrack",
        "fct-type": "function",
        "title": "addTrack"
      },
      "index": {
        "description": "Add track to user Last.fm library http www.last.fm api show library.addTrack",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "addTrack",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Track",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:albumItem",
      "description": {
        "fct-descr": "\u003cp\u003eWhat artist to add to library?\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Album -\u003e LibraryAlbum)",
        "fct-source": "src/Network-Lastfm-Library.html#albumItem",
        "fct-type": "function",
        "title": "albumItem"
      },
      "index": {
        "description": "What artist to add to library",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "albumItem",
        "normalized": "Request a(Artist-\u003eAlbum-\u003eLibraryAlbum)",
        "package": "liblastfm",
        "partial": "Item",
        "signature": "Request f(Artist-\u003eAlbum-\u003eLibraryAlbum)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:artistItem",
      "description": {
        "fct-descr": "\u003cp\u003eWhat album to add to library?\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e LibraryArtist)",
        "fct-source": "src/Network-Lastfm-Library.html#artistItem",
        "fct-type": "function",
        "title": "artistItem"
      },
      "index": {
        "description": "What album to add to library",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "artistItem",
        "normalized": "Request a(Artist-\u003eLibraryArtist)",
        "package": "liblastfm",
        "partial": "Item",
        "signature": "Request f(Artist-\u003eLibraryArtist)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:getAlbums",
      "description": {
        "fct-descr": "\u003cp\u003eA paginated list of all the albums in a user's library, with play counts and tag counts.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eartist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.getAlbums\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Library.html#getAlbums",
        "fct-type": "function",
        "title": "getAlbums"
      },
      "index": {
        "description": "paginated list of all the albums in user library with play counts and tag counts Optional artist limit page http www.last.fm api show library.getAlbums",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "getAlbums",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Albums",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:getArtists",
      "description": {
        "fct-descr": "\u003cp\u003eA paginated list of all the artists in a user's library, with play counts and tag counts.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.getArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Library.html#getArtists",
        "fct-type": "function",
        "title": "getArtists"
      },
      "index": {
        "description": "paginated list of all the artists in user library with play counts and tag counts Optional limit page http www.last.fm api show library.getArtists",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "getArtists",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Artists",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:getTracks",
      "description": {
        "fct-descr": "\u003cp\u003eA paginated list of all the tracks in a user's library, with play counts and tag counts.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eartist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealbum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.getTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Library.html#getTracks",
        "fct-type": "function",
        "title": "getTracks"
      },
      "index": {
        "description": "paginated list of all the tracks in user library with play counts and tag counts Optional artist album page limit http www.last.fm api show library.getTracks",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "getTracks",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Tracks",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeAlbum",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an album from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeAlbum\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Album -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#removeAlbum",
        "fct-type": "function",
        "title": "removeAlbum"
      },
      "index": {
        "description": "Remove an album from user Last.fm library http www.last.fm api show library.removeAlbum",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "removeAlbum",
        "normalized": "Request a(Artist-\u003eAlbum-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Album",
        "signature": "Request f(Artist-\u003eAlbum-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeArtist",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an artist from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeArtist\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#removeArtist",
        "fct-type": "function",
        "title": "removeArtist"
      },
      "index": {
        "description": "Remove an artist from user Last.fm library http www.last.fm api show library.removeArtist",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "removeArtist",
        "normalized": "Request a(Artist-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Artist",
        "signature": "Request f(Artist-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeScrobble",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a scrobble from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeScrobble\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e Timestamp -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#removeScrobble",
        "fct-type": "function",
        "title": "removeScrobble"
      },
      "index": {
        "description": "Remove scrobble from user Last.fm library http www.last.fm api show library.removeScrobble",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "removeScrobble",
        "normalized": "Request a(Artist-\u003eTrack-\u003eTimestamp-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Scrobble",
        "signature": "Request f(Artist-\u003eTrack-\u003eTimestamp-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Library.html#v:removeTrack",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a track from a user's Last.fm library\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/library.removeTrack\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Library",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Library.html#removeTrack",
        "fct-type": "function",
        "title": "removeTrack"
      },
      "index": {
        "description": "Remove track from user Last.fm library http www.last.fm api show library.removeTrack",
        "hierarchy": "Network Lastfm Library",
        "module": "Network.Lastfm.Library",
        "name": "removeTrack",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Track",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Playlist.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm playlist API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Playlist as Playlist\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Playlist",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Playlist.html",
        "fct-type": "module",
        "title": "Playlist"
      },
      "index": {
        "description": "Lastfm playlist API This module is intended to be imported qualified import qualified Network.Lastfm.Playlist as Playlist",
        "hierarchy": "Network Lastfm Playlist",
        "module": "Network.Lastfm.Playlist",
        "name": "Playlist",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Playlist.html#v:addTrack",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a track to a Last.fm user's playlist\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/playlist.addTrack\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Playlist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Playlist -\u003e Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Playlist.html#addTrack",
        "fct-type": "function",
        "title": "addTrack"
      },
      "index": {
        "description": "Add track to Last.fm user playlist http www.last.fm api show playlist.addTrack",
        "hierarchy": "Network Lastfm Playlist",
        "module": "Network.Lastfm.Playlist",
        "name": "addTrack",
        "normalized": "Request a(Playlist-\u003eArtist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Track",
        "signature": "Request f(Playlist-\u003eArtist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Playlist.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Last.fm playlist on behalf of a user\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edescription\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/playlist.create\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Playlist",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Playlist.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "Create Last.fm playlist on behalf of user Optional title description http www.last.fm api show playlist.create",
        "hierarchy": "Network Lastfm Playlist",
        "module": "Network.Lastfm.Playlist",
        "name": "create",
        "normalized": "Request a(APIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(APIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm radio API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Radio as Radio\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Radio",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Radio.html",
        "fct-type": "module",
        "title": "Radio"
      },
      "index": {
        "description": "Lastfm radio API This module is intended to be imported qualified import qualified Network.Lastfm.Radio as Radio",
        "hierarchy": "Network Lastfm Radio",
        "module": "Network.Lastfm.Radio",
        "name": "Radio",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Radio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#v:getPlaylist",
      "description": {
        "fct-descr": "\u003cp\u003eFetch new radio content periodically in an XSPF format.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ediscovery\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ertp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebuyLinks\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/radio.getPlaylist\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Radio",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Multiplier -\u003e Bitrate -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Radio.html#getPlaylist",
        "fct-type": "function",
        "title": "getPlaylist"
      },
      "index": {
        "description": "Fetch new radio content periodically in an XSPF format Optional discovery rtp buyLinks http www.last.fm api show radio.getPlaylist",
        "hierarchy": "Network Lastfm Radio",
        "module": "Network.Lastfm.Radio",
        "name": "getPlaylist",
        "normalized": "Request a(Multiplier-\u003eBitrate-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Playlist",
        "signature": "Request f(Multiplier-\u003eBitrate-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eResolve the name of a resource into a station depending on which resource\n it is most likely to represent.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/radio.search\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Radio",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Name -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Radio.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Resolve the name of resource into station depending on which resource it is most likely to represent http www.last.fm api show radio.search",
        "hierarchy": "Network Lastfm Radio",
        "module": "Network.Lastfm.Radio",
        "name": "search",
        "normalized": "Request a(Name-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Name-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Radio.html#v:tune",
      "description": {
        "fct-descr": "\u003cp\u003eTune in to a Last.fm radio station.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elanguage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/radio.tune\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Radio",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Station -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Radio.html#tune",
        "fct-type": "function",
        "title": "tune"
      },
      "index": {
        "description": "Tune in to Last.fm radio station Optional language http www.last.fm api show radio.tune",
        "hierarchy": "Network Lastfm Radio",
        "module": "Network.Lastfm.Radio",
        "name": "tune",
        "normalized": "Request a(Station-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Station-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest construction\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Request.html",
        "fct-type": "module",
        "title": "Request"
      },
      "index": {
        "description": "Request construction",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Request",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:APIKey",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#APIKey",
        "fct-type": "data",
        "title": "APIKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "APIKey",
        "normalized": "",
        "package": "liblastfm",
        "partial": "APIKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Album",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Album",
        "fct-type": "data",
        "title": "Album"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Album",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:AlbumArtist",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#AlbumArtist",
        "fct-type": "data",
        "title": "AlbumArtist"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "AlbumArtist",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Album Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Artist",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Artist",
        "fct-type": "data",
        "title": "Artist"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Artist",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Autocorrect",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Autocorrect",
        "fct-type": "data",
        "title": "Autocorrect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Autocorrect",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Autocorrect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Bitrate",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Bitrate",
        "fct-type": "data",
        "title": "Bitrate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Bitrate",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Bitrate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:BuyLinks",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#BuyLinks",
        "fct-type": "data",
        "title": "BuyLinks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "BuyLinks",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Buy Links",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Callback",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Callback",
        "fct-type": "data",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Callback",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:ChosenByUser",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#ChosenByUser",
        "fct-type": "data",
        "title": "ChosenByUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "ChosenByUser",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Chosen By User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Context",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Context",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Country",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Country",
        "fct-type": "data",
        "title": "Country"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Country",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Country",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Description",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Description",
        "fct-type": "data",
        "title": "Description"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Description",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Discovery",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Discovery",
        "fct-type": "data",
        "title": "Discovery"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Discovery",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Discovery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Distance",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Distance",
        "fct-type": "data",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Distance",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Duration",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Duration",
        "fct-type": "data",
        "title": "Duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Duration",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Duration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:End",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#End",
        "fct-type": "data",
        "title": "End"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "End",
        "normalized": "",
        "package": "liblastfm",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:EndTimestamp",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#EndTimestamp",
        "fct-type": "data",
        "title": "EndTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "EndTimestamp",
        "normalized": "",
        "package": "liblastfm",
        "partial": "End Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Event",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Event",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Festivals",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Festivals",
        "fct-type": "data",
        "title": "Festivals"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Festivals",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Festivals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Fingerprint",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Fingerprint",
        "fct-type": "data",
        "title": "Fingerprint"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Fingerprint",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Fingerprint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eResponse format: either JSON or XML\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "Response format either JSON or XML",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Format",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:From",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#From",
        "fct-type": "data",
        "title": "From"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "From",
        "normalized": "",
        "package": "liblastfm",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Group",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Group",
        "fct-type": "data",
        "title": "Group"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Group",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Language",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Language",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Latitude",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Latitude",
        "fct-type": "data",
        "title": "Latitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Latitude",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Latitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:LibraryAlbum",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#LibraryAlbum",
        "fct-type": "data",
        "title": "LibraryAlbum"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "LibraryAlbum",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Library Album",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:LibraryArtist",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#LibraryArtist",
        "fct-type": "data",
        "title": "LibraryArtist"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "LibraryArtist",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Library Artist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Limit",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Limit",
        "fct-type": "data",
        "title": "Limit"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Limit",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Location",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Location",
        "fct-type": "data",
        "title": "Location"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Location",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Longitude",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Longitude",
        "fct-type": "data",
        "title": "Longitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Longitude",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Longitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:MBID",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#MBID",
        "fct-type": "data",
        "title": "MBID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "MBID",
        "normalized": "",
        "package": "liblastfm",
        "partial": "MBID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Message",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Message",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Metro",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Metro",
        "fct-type": "data",
        "title": "Metro"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Metro",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Metro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Multiplier",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Multiplier",
        "fct-type": "data",
        "title": "Multiplier"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Multiplier",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Multiplier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Name",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Name",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Page",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Page",
        "fct-type": "data",
        "title": "Page"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Page",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Password",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Password",
        "fct-type": "data",
        "title": "Password"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Password",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Playlist",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Playlist",
        "fct-type": "data",
        "title": "Playlist"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Playlist",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Playlist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Public",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Public",
        "fct-type": "data",
        "title": "Public"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Public",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Public",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:R",
      "description": {
        "fct-descr": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003elow-level representation\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "Lastfm API request data type low-level representation",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "R",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:RTP",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#RTP",
        "fct-type": "data",
        "title": "RTP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "RTP",
        "normalized": "",
        "package": "liblastfm",
        "partial": "RTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Ready",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that is ready to be sent\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Ready",
        "fct-type": "data",
        "title": "Ready"
      },
      "index": {
        "description": "Request that is ready to be sent",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Ready",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Ready",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:RecentTracks",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#RecentTracks",
        "fct-type": "data",
        "title": "RecentTracks"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "RecentTracks",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Recent Tracks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Recipient",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Recipient",
        "fct-type": "data",
        "title": "Recipient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Recipient",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Recipient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eLastfm API request data type\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e is authentication state. Might be \u003ccode\u003eSend\u003c/code\u003e which indicates\n that you may send this request already or \u003ccode\u003e\u003ca\u003eSign\u003c/a\u003e\u003c/code\u003e, when request signature\n isn't computed yet\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ef\u003c/code\u003e is response format. liblastfm currently supports \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eXML\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "Lastfm API request data type is authentication state Might be Send which indicates that you may send this request already or Sign when request signature isn computed yet is response format liblastfm currently supports JSON or XML",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Request",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Scrobble",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Scrobble",
        "fct-type": "data",
        "title": "Scrobble"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Scrobble",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Scrobble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:SessionKey",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#SessionKey",
        "fct-type": "data",
        "title": "SessionKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "SessionKey",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Session Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Sign",
      "description": {
        "fct-descr": "\u003cp\u003eRequest that requires signing procedure\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Internal.html#Sign",
        "fct-type": "data",
        "title": "Sign"
      },
      "index": {
        "description": "Request that requires signing procedure",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Sign",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Sign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Start",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Start",
        "fct-type": "data",
        "title": "Start"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Start",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:StartTimestamp",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#StartTimestamp",
        "fct-type": "data",
        "title": "StartTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "StartTimestamp",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Start Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Station",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Station",
        "fct-type": "data",
        "title": "Station"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Station",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Station",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Status",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Status",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:StreamId",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#StreamId",
        "fct-type": "data",
        "title": "StreamId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "StreamId",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Stream Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Tag",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Tag",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:TaggingType",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#TaggingType",
        "fct-type": "data",
        "title": "TaggingType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "TaggingType",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Tagging Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Targeted",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "class",
        "fct-source": "src/Network-Lastfm-Request.html#Targeted",
        "fct-type": "class",
        "title": "Targeted"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Targeted",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Targeted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Timestamp",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Timestamp",
        "fct-type": "data",
        "title": "Timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Timestamp",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Title",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Title",
        "fct-type": "data",
        "title": "Title"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Title",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:To",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#To",
        "fct-type": "data",
        "title": "To"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "To",
        "normalized": "",
        "package": "liblastfm",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Token",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Token",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Track",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Track",
        "fct-type": "data",
        "title": "Track"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Track",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:TrackNumber",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#TrackNumber",
        "fct-type": "data",
        "title": "TrackNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "TrackNumber",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Track Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:UseRecs",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#UseRecs",
        "fct-type": "data",
        "title": "UseRecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "UseRecs",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Use Recs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:User",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#User",
        "fct-type": "data",
        "title": "User"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "User",
        "normalized": "",
        "package": "liblastfm",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Username",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Username",
        "fct-type": "data",
        "title": "Username"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Username",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:Venue",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#Venue",
        "fct-type": "data",
        "title": "Venue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Venue",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Venue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#t:VenueName",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "data",
        "fct-source": "src/Network-Lastfm-Request.html#VenueName",
        "fct-type": "data",
        "title": "VenueName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "VenueName",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Venue Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:Attending",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Attending",
        "fct-source": "src/Network-Lastfm-Request.html#Status",
        "fct-type": "function",
        "title": "Attending"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Attending",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Attending",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:B128",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "B128",
        "fct-source": "src/Network-Lastfm-Request.html#Bitrate",
        "fct-type": "function",
        "title": "B128"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "B128",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:B64",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "B64",
        "fct-source": "src/Network-Lastfm-Request.html#Bitrate",
        "fct-type": "function",
        "title": "B64"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "B64",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:JSON",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "JSON",
        "fct-source": "src/Network-Lastfm-Internal.html#Format",
        "fct-type": "function",
        "title": "JSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "JSON",
        "normalized": "",
        "package": "liblastfm",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:M1",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "M1",
        "fct-source": "src/Network-Lastfm-Request.html#Multiplier",
        "fct-type": "function",
        "title": "M1"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "M1",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:M2",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "M2",
        "fct-source": "src/Network-Lastfm-Request.html#Multiplier",
        "fct-type": "function",
        "title": "M2"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "M2",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:Maybe",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Maybe",
        "fct-source": "src/Network-Lastfm-Request.html#Status",
        "fct-type": "function",
        "title": "Maybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "Maybe",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:NotAttending",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "NotAttending",
        "fct-source": "src/Network-Lastfm-Request.html#Status",
        "fct-type": "function",
        "title": "NotAttending"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "NotAttending",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Not Attending",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:XML",
      "description": {
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "XML",
        "fct-source": "src/Network-Lastfm-Internal.html#Format",
        "fct-type": "function",
        "title": "XML"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "XML",
        "normalized": "",
        "package": "liblastfm",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:album",
      "description": {
        "fct-descr": "\u003cp\u003eAdd album parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Album",
        "fct-source": "src/Network-Lastfm-Request.html#album",
        "fct-type": "function",
        "title": "album"
      },
      "index": {
        "description": "Add album parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "album",
        "normalized": "Text-\u003eRequest a Album",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Album"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:albumArtist",
      "description": {
        "fct-descr": "\u003cp\u003eAdd albumArtist parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f AlbumArtist",
        "fct-source": "src/Network-Lastfm-Request.html#albumArtist",
        "fct-type": "function",
        "title": "albumArtist"
      },
      "index": {
        "description": "Add albumArtist parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "albumArtist",
        "normalized": "Text-\u003eRequest a AlbumArtist",
        "package": "liblastfm",
        "partial": "Artist",
        "signature": "Text-\u003eRequest f AlbumArtist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:api",
      "description": {
        "fct-descr": "\u003cp\u003eChange request API method\n\u003c/p\u003e\u003cp\u003ePrimarily used in API call wrappers, not intended for usage by library user\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f a",
        "fct-source": "src/Network-Lastfm-Request.html#api",
        "fct-type": "function",
        "title": "api"
      },
      "index": {
        "description": "Change request API method Primarily used in API call wrappers not intended for usage by library user",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "api",
        "normalized": "Text-\u003eRequest a b",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:apiKey",
      "description": {
        "fct-descr": "\u003cp\u003eChange request API key\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f APIKey",
        "fct-source": "src/Network-Lastfm-Request.html#apiKey",
        "fct-type": "function",
        "title": "apiKey"
      },
      "index": {
        "description": "Change request API key",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "apiKey",
        "normalized": "Text-\u003eRequest a APIKey",
        "package": "liblastfm",
        "partial": "Key",
        "signature": "Text-\u003eRequest f APIKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:artist",
      "description": {
        "fct-descr": "\u003cp\u003eAdd artist parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Artist",
        "fct-source": "src/Network-Lastfm-Request.html#artist",
        "fct-type": "function",
        "title": "artist"
      },
      "index": {
        "description": "Add artist parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "artist",
        "normalized": "Text-\u003eRequest a Artist",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Artist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:artists",
      "description": {
        "fct-descr": "\u003cp\u003eAdd artists parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "[Text] -\u003e Request f [Artist]",
        "fct-source": "src/Network-Lastfm-Request.html#artists",
        "fct-type": "function",
        "title": "artists"
      },
      "index": {
        "description": "Add artists parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "artists",
        "normalized": "[Text]-\u003eRequest a[Artist]",
        "package": "liblastfm",
        "partial": "",
        "signature": "[Text]-\u003eRequest f[Artist]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:autocorrect",
      "description": {
        "fct-descr": "\u003cp\u003eAdd autocorrect parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f Autocorrect",
        "fct-source": "src/Network-Lastfm-Request.html#autocorrect",
        "fct-type": "function",
        "title": "autocorrect"
      },
      "index": {
        "description": "Add autocorrect parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "autocorrect",
        "normalized": "Bool-\u003eRequest a Autocorrect",
        "package": "liblastfm",
        "partial": "",
        "signature": "Bool-\u003eRequest f Autocorrect"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:bitrate",
      "description": {
        "fct-descr": "\u003cp\u003eAdd bitrate parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bitrate -\u003e Request f Bitrate",
        "fct-source": "src/Network-Lastfm-Request.html#bitrate",
        "fct-type": "function",
        "title": "bitrate"
      },
      "index": {
        "description": "Add bitrate parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "bitrate",
        "normalized": "Bitrate-\u003eRequest a Bitrate",
        "package": "liblastfm",
        "partial": "",
        "signature": "Bitrate-\u003eRequest f Bitrate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:buyLinks",
      "description": {
        "fct-descr": "\u003cp\u003eAdd buyLinks parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f BuyLinks",
        "fct-source": "src/Network-Lastfm-Request.html#buyLinks",
        "fct-type": "function",
        "title": "buyLinks"
      },
      "index": {
        "description": "Add buyLinks parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "buyLinks",
        "normalized": "Bool-\u003eRequest a BuyLinks",
        "package": "liblastfm",
        "partial": "Links",
        "signature": "Bool-\u003eRequest f BuyLinks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:callback",
      "description": {
        "fct-descr": "\u003cp\u003eAdd callback link parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Callback",
        "fct-source": "src/Network-Lastfm-Request.html#callback",
        "fct-type": "function",
        "title": "callback"
      },
      "index": {
        "description": "Add callback link parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "callback",
        "normalized": "Text-\u003eRequest a Callback",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Callback"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:chosenByUser",
      "description": {
        "fct-descr": "\u003cp\u003eAdd chosenByUser parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f ChosenByUser",
        "fct-source": "src/Network-Lastfm-Request.html#chosenByUser",
        "fct-type": "function",
        "title": "chosenByUser"
      },
      "index": {
        "description": "Add chosenByUser parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "chosenByUser",
        "normalized": "Bool-\u003eRequest a ChosenByUser",
        "package": "liblastfm",
        "partial": "By User",
        "signature": "Bool-\u003eRequest f ChosenByUser"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:comparison",
      "description": {
        "fct-descr": "\u003cp\u003eAdd comparison parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f a -\u003e Request f a",
        "fct-source": "src/Network-Lastfm-Request.html#comparison",
        "fct-type": "function",
        "title": "comparison"
      },
      "index": {
        "description": "Add comparison parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "comparison",
        "normalized": "Int-\u003eRequest a b-\u003eRequest a b",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f a-\u003eRequest f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:context",
      "description": {
        "fct-descr": "\u003cp\u003eAdd context parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Context",
        "fct-source": "src/Network-Lastfm-Request.html#context",
        "fct-type": "function",
        "title": "context"
      },
      "index": {
        "description": "Add context parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "context",
        "normalized": "Text-\u003eRequest a Context",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Context"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:country",
      "description": {
        "fct-descr": "\u003cp\u003eAdd country parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Country",
        "fct-source": "src/Network-Lastfm-Request.html#country",
        "fct-type": "function",
        "title": "country"
      },
      "index": {
        "description": "Add country parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "country",
        "normalized": "Text-\u003eRequest a Country",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Country"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:description",
      "description": {
        "fct-descr": "\u003cp\u003eAdd description parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Description",
        "fct-source": "src/Network-Lastfm-Request.html#description",
        "fct-type": "function",
        "title": "description"
      },
      "index": {
        "description": "Add description parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "description",
        "normalized": "Text-\u003eRequest a Description",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Description"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:discovery",
      "description": {
        "fct-descr": "\u003cp\u003eAdd group parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f Discovery",
        "fct-source": "src/Network-Lastfm-Request.html#discovery",
        "fct-type": "function",
        "title": "discovery"
      },
      "index": {
        "description": "Add group parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "discovery",
        "normalized": "Bool-\u003eRequest a Discovery",
        "package": "liblastfm",
        "partial": "",
        "signature": "Bool-\u003eRequest f Discovery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:distance",
      "description": {
        "fct-descr": "\u003cp\u003eAdd distance parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Distance",
        "fct-source": "src/Network-Lastfm-Request.html#distance",
        "fct-type": "function",
        "title": "distance"
      },
      "index": {
        "description": "Add distance parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "distance",
        "normalized": "Int-\u003eRequest a Distance",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Distance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:duration",
      "description": {
        "fct-descr": "\u003cp\u003eAdd duration parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Duration",
        "fct-source": "src/Network-Lastfm-Request.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "Add duration parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "duration",
        "normalized": "Int-\u003eRequest a Duration",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Duration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:end",
      "description": {
        "fct-descr": "\u003cp\u003eAdd end parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f End",
        "fct-source": "src/Network-Lastfm-Request.html#end",
        "fct-type": "function",
        "title": "end"
      },
      "index": {
        "description": "Add end parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "end",
        "normalized": "Int-\u003eRequest a End",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f End"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:endTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eAdd endTimestamp parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f EndTimestamp",
        "fct-source": "src/Network-Lastfm-Request.html#endTimestamp",
        "fct-type": "function",
        "title": "endTimestamp"
      },
      "index": {
        "description": "Add endTimestamp parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "endTimestamp",
        "normalized": "Int-\u003eRequest a EndTimestamp",
        "package": "liblastfm",
        "partial": "Timestamp",
        "signature": "Int-\u003eRequest f EndTimestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:event",
      "description": {
        "fct-descr": "\u003cp\u003eAdd event parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Event",
        "fct-source": "src/Network-Lastfm-Request.html#event",
        "fct-type": "function",
        "title": "event"
      },
      "index": {
        "description": "Add event parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "event",
        "normalized": "Int-\u003eRequest a Event",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Event"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:festivalsonly",
      "description": {
        "fct-descr": "\u003cp\u003eAdd festivalsonly parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f Festivals",
        "fct-source": "src/Network-Lastfm-Request.html#festivalsonly",
        "fct-type": "function",
        "title": "festivalsonly"
      },
      "index": {
        "description": "Add festivalsonly parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "festivalsonly",
        "normalized": "Bool-\u003eRequest a Festivals",
        "package": "liblastfm",
        "partial": "",
        "signature": "Bool-\u003eRequest f Festivals"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:fingerprint",
      "description": {
        "fct-descr": "\u003cp\u003eAdd fingerprint parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Fingerprint",
        "fct-source": "src/Network-Lastfm-Request.html#fingerprint",
        "fct-type": "function",
        "title": "fingerprint"
      },
      "index": {
        "description": "Add fingerprint parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "fingerprint",
        "normalized": "Int-\u003eRequest a Fingerprint",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Fingerprint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:from",
      "description": {
        "fct-descr": "\u003cp\u003eAdd from parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f From",
        "fct-source": "src/Network-Lastfm-Request.html#from",
        "fct-type": "function",
        "title": "from"
      },
      "index": {
        "description": "Add from parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "from",
        "normalized": "Int-\u003eRequest a From",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f From"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eChange html _method to GET\n\u003c/p\u003e\u003cp\u003ePrimarily used in API call wrappers, not intended for usage by library user\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a",
        "fct-source": "src/Network-Lastfm-Request.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Change html method to GET Primarily used in API call wrappers not intended for usage by library user",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "get",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eAdd group parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Group",
        "fct-source": "src/Network-Lastfm-Request.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Add group parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "group",
        "normalized": "Text-\u003eRequest a Group",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Group"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:json",
      "description": {
        "fct-descr": "\u003cp\u003eChange API response format to JSON\n\u003c/p\u003e\u003cp\u003eThis is a little helper. It's actually enough\n to specialize Format manually\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Request JSON a",
        "fct-source": "src/Network-Lastfm-Request.html#json",
        "fct-type": "function",
        "title": "json"
      },
      "index": {
        "description": "Change API response format to JSON This is little helper It actually enough to specialize Format manually",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "json",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:language",
      "description": {
        "fct-descr": "\u003cp\u003eAdd language parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Language",
        "fct-source": "src/Network-Lastfm-Request.html#language",
        "fct-type": "function",
        "title": "language"
      },
      "index": {
        "description": "Add language parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "language",
        "normalized": "Text-\u003eRequest a Language",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Language"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:latitude",
      "description": {
        "fct-descr": "\u003cp\u003eAdd latitude parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Latitude",
        "fct-source": "src/Network-Lastfm-Request.html#latitude",
        "fct-type": "function",
        "title": "latitude"
      },
      "index": {
        "description": "Add latitude parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "latitude",
        "normalized": "Text-\u003eRequest a Latitude",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Latitude"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:limit",
      "description": {
        "fct-descr": "\u003cp\u003eAdd limit parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Limit",
        "fct-source": "src/Network-Lastfm-Request.html#limit",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "Add limit parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "limit",
        "normalized": "Int-\u003eRequest a Limit",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Limit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:location",
      "description": {
        "fct-descr": "\u003cp\u003eAdd location parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Location",
        "fct-source": "src/Network-Lastfm-Request.html#location",
        "fct-type": "function",
        "title": "location"
      },
      "index": {
        "description": "Add location parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "location",
        "normalized": "Text-\u003eRequest a Location",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Location"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:longitude",
      "description": {
        "fct-descr": "\u003cp\u003eAdd longitude parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Longitude",
        "fct-source": "src/Network-Lastfm-Request.html#longitude",
        "fct-type": "function",
        "title": "longitude"
      },
      "index": {
        "description": "Add longitude parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "longitude",
        "normalized": "Text-\u003eRequest a Longitude",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Longitude"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:mbid",
      "description": {
        "fct-descr": "\u003cp\u003eAdd MBID parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f MBID",
        "fct-source": "src/Network-Lastfm-Request.html#mbid",
        "fct-type": "function",
        "title": "mbid"
      },
      "index": {
        "description": "Add MBID parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "mbid",
        "normalized": "Text-\u003eRequest a MBID",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f MBID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:message",
      "description": {
        "fct-descr": "\u003cp\u003eAdd message parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Message",
        "fct-source": "src/Network-Lastfm-Request.html#message",
        "fct-type": "function",
        "title": "message"
      },
      "index": {
        "description": "Add message parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "message",
        "normalized": "Text-\u003eRequest a Message",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Message"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:metro",
      "description": {
        "fct-descr": "\u003cp\u003eAdd metro parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Metro",
        "fct-source": "src/Network-Lastfm-Request.html#metro",
        "fct-type": "function",
        "title": "metro"
      },
      "index": {
        "description": "Add metro parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "metro",
        "normalized": "Text-\u003eRequest a Metro",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Metro"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:multiplier",
      "description": {
        "fct-descr": "\u003cp\u003eAdd multiplier parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Multiplier -\u003e Request f Multiplier",
        "fct-source": "src/Network-Lastfm-Request.html#multiplier",
        "fct-type": "function",
        "title": "multiplier"
      },
      "index": {
        "description": "Add multiplier parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "multiplier",
        "normalized": "Multiplier-\u003eRequest a Multiplier",
        "package": "liblastfm",
        "partial": "",
        "signature": "Multiplier-\u003eRequest f Multiplier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eAdd name parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Name",
        "fct-source": "src/Network-Lastfm-Request.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Add name parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "name",
        "normalized": "Text-\u003eRequest a Name",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:page",
      "description": {
        "fct-descr": "\u003cp\u003eAdd page parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Page",
        "fct-source": "src/Network-Lastfm-Request.html#page",
        "fct-type": "function",
        "title": "page"
      },
      "index": {
        "description": "Add page parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "page",
        "normalized": "Int-\u003eRequest a Page",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Page"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:password",
      "description": {
        "fct-descr": "\u003cp\u003eAdd password parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Password",
        "fct-source": "src/Network-Lastfm-Request.html#password",
        "fct-type": "function",
        "title": "password"
      },
      "index": {
        "description": "Add password parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "password",
        "normalized": "Text-\u003eRequest a Password",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Password"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:playlist",
      "description": {
        "fct-descr": "\u003cp\u003eAdd playlistID parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Playlist",
        "fct-source": "src/Network-Lastfm-Request.html#playlist",
        "fct-type": "function",
        "title": "playlist"
      },
      "index": {
        "description": "Add playlistID parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "playlist",
        "normalized": "Int-\u003eRequest a Playlist",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Playlist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eChange html _method to POST\n\u003c/p\u003e\u003cp\u003ePrimarily used in API call wrappers, not intended for usage by library user\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Request f a",
        "fct-source": "src/Network-Lastfm-Request.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Change html method to POST Primarily used in API call wrappers not intended for usage by library user",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "post",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:public",
      "description": {
        "fct-descr": "\u003cp\u003eAdd public parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f Public",
        "fct-source": "src/Network-Lastfm-Request.html#public",
        "fct-type": "function",
        "title": "public"
      },
      "index": {
        "description": "Add public parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "public",
        "normalized": "Bool-\u003eRequest a Public",
        "package": "liblastfm",
        "partial": "",
        "signature": "Bool-\u003eRequest f Public"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:recentTracks",
      "description": {
        "fct-descr": "\u003cp\u003eAdd recentTracks parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f RecentTracks",
        "fct-source": "src/Network-Lastfm-Request.html#recentTracks",
        "fct-type": "function",
        "title": "recentTracks"
      },
      "index": {
        "description": "Add recentTracks parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "recentTracks",
        "normalized": "Bool-\u003eRequest a RecentTracks",
        "package": "liblastfm",
        "partial": "Tracks",
        "signature": "Bool-\u003eRequest f RecentTracks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:recipient",
      "description": {
        "fct-descr": "\u003cp\u003eAdd recipient parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Recipient",
        "fct-source": "src/Network-Lastfm-Request.html#recipient",
        "fct-type": "function",
        "title": "recipient"
      },
      "index": {
        "description": "Add recipient parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "recipient",
        "normalized": "Text-\u003eRequest a Recipient",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Recipient"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:rtp",
      "description": {
        "fct-descr": "\u003cp\u003eAdd rtp parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f RTP",
        "fct-source": "src/Network-Lastfm-Request.html#rtp",
        "fct-type": "function",
        "title": "rtp"
      },
      "index": {
        "description": "Add rtp parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "rtp",
        "normalized": "Bool-\u003eRequest a RTP",
        "package": "liblastfm",
        "partial": "",
        "signature": "Bool-\u003eRequest f RTP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:sessionKey",
      "description": {
        "fct-descr": "\u003cp\u003eChange request session key\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f SessionKey",
        "fct-source": "src/Network-Lastfm-Request.html#sessionKey",
        "fct-type": "function",
        "title": "sessionKey"
      },
      "index": {
        "description": "Change request session key",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "sessionKey",
        "normalized": "Text-\u003eRequest a SessionKey",
        "package": "liblastfm",
        "partial": "Key",
        "signature": "Text-\u003eRequest f SessionKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003eAdd start parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Start",
        "fct-source": "src/Network-Lastfm-Request.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "Add start parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "start",
        "normalized": "Int-\u003eRequest a Start",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Start"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:startTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eAdd startTimestamp parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f StartTimestamp",
        "fct-source": "src/Network-Lastfm-Request.html#startTimestamp",
        "fct-type": "function",
        "title": "startTimestamp"
      },
      "index": {
        "description": "Add startTimestamp parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "startTimestamp",
        "normalized": "Int-\u003eRequest a StartTimestamp",
        "package": "liblastfm",
        "partial": "Timestamp",
        "signature": "Int-\u003eRequest f StartTimestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:station",
      "description": {
        "fct-descr": "\u003cp\u003eAdd station parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Station",
        "fct-source": "src/Network-Lastfm-Request.html#station",
        "fct-type": "function",
        "title": "station"
      },
      "index": {
        "description": "Add station parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "station",
        "normalized": "Text-\u003eRequest a Station",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Station"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eAdd status parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Status -\u003e Request f Status",
        "fct-source": "src/Network-Lastfm-Request.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Add status parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "status",
        "normalized": "Status-\u003eRequest a Status",
        "package": "liblastfm",
        "partial": "",
        "signature": "Status-\u003eRequest f Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:streamId",
      "description": {
        "fct-descr": "\u003cp\u003eAdd streamId parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f StreamId",
        "fct-source": "src/Network-Lastfm-Request.html#streamId",
        "fct-type": "function",
        "title": "streamId"
      },
      "index": {
        "description": "Add streamId parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "streamId",
        "normalized": "Int-\u003eRequest a StreamId",
        "package": "liblastfm",
        "partial": "Id",
        "signature": "Int-\u003eRequest f StreamId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eAdd tag parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Tag",
        "fct-source": "src/Network-Lastfm-Request.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "Add tag parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "tag",
        "normalized": "Text-\u003eRequest a Tag",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:taggingType",
      "description": {
        "fct-descr": "\u003cp\u003eAdd taggingType parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f TaggingType",
        "fct-source": "src/Network-Lastfm-Request.html#taggingType",
        "fct-type": "function",
        "title": "taggingType"
      },
      "index": {
        "description": "Add taggingType parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "taggingType",
        "normalized": "Text-\u003eRequest a TaggingType",
        "package": "liblastfm",
        "partial": "Type",
        "signature": "Text-\u003eRequest f TaggingType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:tags",
      "description": {
        "fct-descr": "\u003cp\u003eAdd tags parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "[Text] -\u003e Request f [Tag]",
        "fct-source": "src/Network-Lastfm-Request.html#tags",
        "fct-type": "function",
        "title": "tags"
      },
      "index": {
        "description": "Add tags parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "tags",
        "normalized": "[Text]-\u003eRequest a[Tag]",
        "package": "liblastfm",
        "partial": "",
        "signature": "[Text]-\u003eRequest f[Tag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:timestamp",
      "description": {
        "fct-descr": "\u003cp\u003eAdd timestamp parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Timestamp",
        "fct-source": "src/Network-Lastfm-Request.html#timestamp",
        "fct-type": "function",
        "title": "timestamp"
      },
      "index": {
        "description": "Add timestamp parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "timestamp",
        "normalized": "Int-\u003eRequest a Timestamp",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Timestamp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:title",
      "description": {
        "fct-descr": "\u003cp\u003eAdd title parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Title",
        "fct-source": "src/Network-Lastfm-Request.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "Add title parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "title",
        "normalized": "Text-\u003eRequest a Title",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Title"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:to",
      "description": {
        "fct-descr": "\u003cp\u003eAdd to parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f To",
        "fct-source": "src/Network-Lastfm-Request.html#to",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "Add to parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "to",
        "normalized": "Int-\u003eRequest a To",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f To"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:token",
      "description": {
        "fct-descr": "\u003cp\u003eAdd token parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Token",
        "fct-source": "src/Network-Lastfm-Request.html#token",
        "fct-type": "function",
        "title": "token"
      },
      "index": {
        "description": "Add token parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "token",
        "normalized": "Text-\u003eRequest a Token",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Token"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:track",
      "description": {
        "fct-descr": "\u003cp\u003eAdd track parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Track",
        "fct-source": "src/Network-Lastfm-Request.html#track",
        "fct-type": "function",
        "title": "track"
      },
      "index": {
        "description": "Add track parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "track",
        "normalized": "Text-\u003eRequest a Track",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Track"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:trackNumber",
      "description": {
        "fct-descr": "\u003cp\u003eAdd trackNumber parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f TrackNumber",
        "fct-source": "src/Network-Lastfm-Request.html#trackNumber",
        "fct-type": "function",
        "title": "trackNumber"
      },
      "index": {
        "description": "Add trackNumber parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "trackNumber",
        "normalized": "Int-\u003eRequest a TrackNumber",
        "package": "liblastfm",
        "partial": "Number",
        "signature": "Int-\u003eRequest f TrackNumber"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:useRecs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd useRecs parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Bool -\u003e Request f UseRecs",
        "fct-source": "src/Network-Lastfm-Request.html#useRecs",
        "fct-type": "function",
        "title": "useRecs"
      },
      "index": {
        "description": "Add useRecs parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "useRecs",
        "normalized": "Bool-\u003eRequest a UseRecs",
        "package": "liblastfm",
        "partial": "Recs",
        "signature": "Bool-\u003eRequest f UseRecs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:user",
      "description": {
        "fct-descr": "\u003cp\u003eAdd user parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f User",
        "fct-source": "src/Network-Lastfm-Request.html#user",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "Add user parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "user",
        "normalized": "Text-\u003eRequest a User",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f User"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:username",
      "description": {
        "fct-descr": "\u003cp\u003eAdd username parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f Username",
        "fct-source": "src/Network-Lastfm-Request.html#username",
        "fct-type": "function",
        "title": "username"
      },
      "index": {
        "description": "Add username parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "username",
        "normalized": "Text-\u003eRequest a Username",
        "package": "liblastfm",
        "partial": "",
        "signature": "Text-\u003eRequest f Username"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:venue",
      "description": {
        "fct-descr": "\u003cp\u003eAdd venue parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Int64 -\u003e Request f Venue",
        "fct-source": "src/Network-Lastfm-Request.html#venue",
        "fct-type": "function",
        "title": "venue"
      },
      "index": {
        "description": "Add venue parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "venue",
        "normalized": "Int-\u003eRequest a Venue",
        "package": "liblastfm",
        "partial": "",
        "signature": "Int-\u003eRequest f Venue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:venueName",
      "description": {
        "fct-descr": "\u003cp\u003eAdd venue parameter\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Text -\u003e Request f VenueName",
        "fct-source": "src/Network-Lastfm-Request.html#venueName",
        "fct-type": "function",
        "title": "venueName"
      },
      "index": {
        "description": "Add venue parameter",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "venueName",
        "normalized": "Text-\u003eRequest a VenueName",
        "package": "liblastfm",
        "partial": "Name",
        "signature": "Text-\u003eRequest f VenueName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Request.html#v:xml",
      "description": {
        "fct-descr": "\u003cp\u003eChange API response format to XML\n\u003c/p\u003e\u003cp\u003eThis is a little helper. It's actually enough\n to specialize Format manually\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Request",
        "fct-package": "liblastfm",
        "fct-signature": "Request XML a",
        "fct-source": "src/Network-Lastfm-Request.html#xml",
        "fct-type": "function",
        "title": "xml"
      },
      "index": {
        "description": "Change API response format to XML This is little helper It actually enough to specialize Format manually",
        "hierarchy": "Network Lastfm Request",
        "module": "Network.Lastfm.Request",
        "name": "xml",
        "normalized": "",
        "package": "liblastfm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRequest sending and Response parsing\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Response.html",
        "fct-type": "module",
        "title": "Response"
      },
      "index": {
        "description": "Request sending and Response parsing",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "Response",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#t:Secret",
      "description": {
        "fct-descr": "\u003cp\u003eApplication secret\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Lastfm-Response.html#Secret",
        "fct-type": "newtype",
        "title": "Secret"
      },
      "index": {
        "description": "Application secret",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "Secret",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Secret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#t:Supported",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSupported\u003c/a\u003e\u003c/code\u003e provides parsing for a chosen \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e is parsed to aeson's \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eXML\u003c/a\u003e\u003c/code\u003e is to lazy \u003ccode\u003eByteString\u003c/code\u003e\n (in other words, parsing XML is left to the user)\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "class",
        "fct-source": "src/Network-Lastfm-Response.html#Supported",
        "fct-type": "class",
        "title": "Supported"
      },
      "index": {
        "description": "Supported provides parsing for chosen Format JSON is parsed to aeson Value XML is to lazy ByteString in other words parsing XML is left to the user",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "Supported",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Supported",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:Secret",
      "description": {
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "Secret Text",
        "fct-source": "src/Network-Lastfm-Response.html#Secret",
        "fct-type": "function",
        "title": "Secret"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "Secret",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Secret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:finalize",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "Request f Ready -\u003e R f",
        "fct-source": "src/Network-Lastfm-Response.html#finalize",
        "fct-type": "function",
        "title": "finalize"
      },
      "index": {
        "description": "Get from Request",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "finalize",
        "normalized": "Request a Ready-\u003eR a",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f Ready-\u003eR f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:lastfm",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and parse the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "Request f Ready -\u003e IO (Response f)",
        "fct-source": "src/Network-Lastfm-Response.html#lastfm",
        "fct-type": "function",
        "title": "lastfm"
      },
      "index": {
        "description": "Send Request and parse the Response",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "lastfm",
        "normalized": "Request a Ready-\u003eIO(Response a)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f Ready-\u003eIO(Response f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:lastfm-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e and parse \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the supplied function\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "(Proxy f -\u003e ByteString -\u003e ResponseHeaders -\u003e a) -\u003e R f -\u003e IO a",
        "fct-source": "src/Network-Lastfm-Response.html#lastfm%27",
        "fct-type": "function",
        "title": "lastfm'"
      },
      "index": {
        "description": "Send and parse Response with the supplied function",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "lastfm'",
        "normalized": "(Proxy a-\u003eByteString-\u003eResponseHeaders-\u003eb)-\u003eR a-\u003eIO b",
        "package": "liblastfm",
        "partial": "",
        "signature": "(Proxy f-\u003eByteString-\u003eResponseHeaders-\u003ea)-\u003eR f-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:lastfm_",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e without parsing the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "Request f Ready -\u003e IO ()",
        "fct-source": "src/Network-Lastfm-Response.html#lastfm_",
        "fct-type": "function",
        "title": "lastfm_"
      },
      "index": {
        "description": "Send Request without parsing the Response",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "lastfm_",
        "normalized": "Request a Ready-\u003eIO()",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f Ready-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Response.html#v:sign",
      "description": {
        "fct-descr": "\u003cp\u003eSign \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eSecret\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Response",
        "fct-package": "liblastfm",
        "fct-signature": "Secret -\u003e Request f Sign -\u003e Request f Ready",
        "fct-source": "src/Network-Lastfm-Response.html#sign",
        "fct-type": "function",
        "title": "sign"
      },
      "index": {
        "description": "Sign Request with Secret",
        "hierarchy": "Network Lastfm Response",
        "module": "Network.Lastfm.Response",
        "name": "sign",
        "normalized": "Secret-\u003eRequest a Sign-\u003eRequest a Ready",
        "package": "liblastfm",
        "partial": "",
        "signature": "Secret-\u003eRequest f Sign-\u003eRequest f Ready"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm tag API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Tag as Tag\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Tag.html",
        "fct-type": "module",
        "title": "Tag"
      },
      "index": {
        "description": "Lastfm tag API This module is intended to be imported qualified import qualified Network.Lastfm.Tag as Tag",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet the metadata for a tag\n\u003c/p\u003e\u003cp\u003eOptional: language\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getInfo\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getInfo",
        "fct-type": "function",
        "title": "getInfo"
      },
      "index": {
        "description": "Get the metadata for tag Optional language http www.last.fm api show tag.getInfo",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getInfo",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Info",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getSimilar",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for tags similar to this one. Returns tags ranked by similarity, based on listening data.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getSimilar\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getSimilar",
        "fct-type": "function",
        "title": "getSimilar"
      },
      "index": {
        "description": "Search for tags similar to this one Returns tags ranked by similarity based on listening data http www.last.fm api show tag.getSimilar",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getSimilar",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Similar",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopAlbums",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top albums tagged by this tag, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopAlbums\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getTopAlbums",
        "fct-type": "function",
        "title": "getTopAlbums"
      },
      "index": {
        "description": "Get the top albums tagged by this tag ordered by tag count Optional limit page http www.last.fm api show tag.getTopAlbums",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getTopAlbums",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Albums",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopArtists",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top artists tagged by this tag, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getTopArtists",
        "fct-type": "function",
        "title": "getTopArtists"
      },
      "index": {
        "description": "Get the top artists tagged by this tag ordered by tag count Optional limit page http www.last.fm api show tag.getTopArtists",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getTopArtists",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Artists",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopTags",
      "description": {
        "fct-descr": "\u003cp\u003eFetches the top global tags on Last.fm, sorted by popularity (number of times used)\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getTopTags",
        "fct-type": "function",
        "title": "getTopTags"
      },
      "index": {
        "description": "Fetches the top global tags on Last.fm sorted by popularity number of times used http www.last.fm api show tag.getTopTags",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getTopTags",
        "normalized": "Request a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tags",
        "signature": "Request f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getTopTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tracks tagged by this tag, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getTopTracks",
        "fct-type": "function",
        "title": "getTopTracks"
      },
      "index": {
        "description": "Get the top tracks tagged by this tag ordered by tag count Optional limit page http www.last.fm api show tag.getTopTracks",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getTopTracks",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tracks",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getWeeklyArtistChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet an artist chart for a tag, for a given date range.\n If no date range is supplied, it will return the most recent artist chart for this tag.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getWeeklyArtistChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getWeeklyArtistChart",
        "fct-type": "function",
        "title": "getWeeklyArtistChart"
      },
      "index": {
        "description": "Get an artist chart for tag for given date range If no date range is supplied it will return the most recent artist chart for this tag Optional from to limit http www.last.fm api show tag.getWeeklyArtistChart",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getWeeklyArtistChart",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Artist Chart",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:getWeeklyChartList",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of available charts for this tag, expressed as\n date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.getWeeklyChartList\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#getWeeklyChartList",
        "fct-type": "function",
        "title": "getWeeklyChartList"
      },
      "index": {
        "description": "Get list of available charts for this tag expressed as date ranges which can be sent to the chart services http www.last.fm api show tag.getWeeklyChartList",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "getWeeklyChartList",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Chart List",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tag.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for a tag by name. Returns matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tag.search\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tag",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Tag -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tag.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search for tag by name Returns matches sorted by relevance Optional limit page http www.last.fm api show tag.search",
        "hierarchy": "Network Lastfm Tag",
        "module": "Network.Lastfm.Tag",
        "name": "search",
        "normalized": "Request a(Tag-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Tag-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tasteometer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm tasteometer API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Tasteometer as Tasteometer\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Tasteometer",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Tasteometer.html",
        "fct-type": "module",
        "title": "Tasteometer"
      },
      "index": {
        "description": "Lastfm tasteometer API This module is intended to be imported qualified import qualified Network.Lastfm.Tasteometer as Tasteometer",
        "hierarchy": "Network Lastfm Tasteometer",
        "module": "Network.Lastfm.Tasteometer",
        "name": "Tasteometer",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Tasteometer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Tasteometer.html#v:compare",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Tasteometer score from two inputs, along with a list of shared artists.\n If the input is a user some additional information is returned.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/tasteometer.compare\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Tasteometer",
        "fct-package": "liblastfm",
        "fct-signature": "Request f u -\u003e Request f v -\u003e Request f (APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Tasteometer.html#compare",
        "fct-type": "function",
        "title": "compare"
      },
      "index": {
        "description": "Get Tasteometer score from two inputs along with list of shared artists If the input is user some additional information is returned Optional limit http www.last.fm api show tasteometer.compare",
        "hierarchy": "Network Lastfm Tasteometer",
        "module": "Network.Lastfm.Tasteometer",
        "name": "compare",
        "normalized": "Request a b-\u003eRequest a c-\u003eRequest a(APIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f u-\u003eRequest f v-\u003eRequest f(APIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm track API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Track as Track\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Track.html",
        "fct-type": "module",
        "title": "Track"
      },
      "index": {
        "description": "Lastfm track API This module is intended to be imported qualified import qualified Network.Lastfm.Track as Track",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "Track",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#t:ArtistTrackOrMBID",
      "description": {
        "fct-descr": "\u003cp\u003eUnify (\u003ccode\u003e\u003ca\u003eArtist\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;) and (\u003ccode\u003e\u003ca\u003eMBID\u003c/a\u003e\u003c/code\u003e -\u003e &#8230;)\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "class",
        "fct-source": "src/Network-Lastfm-Track.html#ArtistTrackOrMBID",
        "fct-type": "class",
        "title": "ArtistTrackOrMBID"
      },
      "index": {
        "description": "Unify Artist Track and MBID",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "ArtistTrackOrMBID",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Artist Track Or MBID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:addTags",
      "description": {
        "fct-descr": "\u003cp\u003eTag a track using a list of user supplied tags.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.addTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e [Tag] -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#addTags",
        "fct-type": "function",
        "title": "addTags"
      },
      "index": {
        "description": "Tag track using list of user supplied tags http www.last.fm api show track.addTags",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "addTags",
        "normalized": "Request a(Artist-\u003eTrack-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Tags",
        "signature": "Request f(Artist-\u003eTrack-\u003e[Tag]-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:ban",
      "description": {
        "fct-descr": "\u003cp\u003eBan a track for a given user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.ban\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#ban",
        "fct-type": "function",
        "title": "ban"
      },
      "index": {
        "description": "Ban track for given user profile http www.last.fm api show track.ban",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "ban",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getBuyLinks",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of Buy Links for a particular track.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getBuylinks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Country -\u003e t)",
        "fct-source": "src/Network-Lastfm-Track.html#getBuyLinks",
        "fct-type": "function",
        "title": "getBuyLinks"
      },
      "index": {
        "description": "Get list of Buy Links for particular track Optional autocorrect http www.last.fm api show track.getBuylinks",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getBuyLinks",
        "normalized": "Request a(Country-\u003eb)",
        "package": "liblastfm",
        "partial": "Buy Links",
        "signature": "Request f(Country-\u003et)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getCorrection",
      "description": {
        "fct-descr": "\u003cp\u003eUse the last.fm corrections data to check whether\n the supplied track has a correction to a canonical track.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getCorrection\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Track.html#getCorrection",
        "fct-type": "function",
        "title": "getCorrection"
      },
      "index": {
        "description": "Use the last.fm corrections data to check whether the supplied track has correction to canonical track http www.last.fm api show track.getCorrection",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getCorrection",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Correction",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getFingerprintMetadata",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve track metadata associated with a fingerprint id\n generated by the Last.fm Fingerprinter. Returns track\n elements, along with a \u003ccode\u003erank\u003c/code\u003e value between 0 and 1 reflecting the confidence for each match.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getFingerprintMetadata\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Fingerprint -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Track.html#getFingerprintMetadata",
        "fct-type": "function",
        "title": "getFingerprintMetadata"
      },
      "index": {
        "description": "Retrieve track metadata associated with fingerprint id generated by the Last.fm Fingerprinter Returns track elements along with rank value between and reflecting the confidence for each match http www.last.fm api show track.getFingerprintMetadata",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getFingerprintMetadata",
        "normalized": "Request a(Fingerprint-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Fingerprint Metadata",
        "signature": "Request f(Fingerprint-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet the metadata for a track on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eusername\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getInfo\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f t",
        "fct-source": "src/Network-Lastfm-Track.html#getInfo",
        "fct-type": "function",
        "title": "getInfo"
      },
      "index": {
        "description": "Get the metadata for track on Last.fm Optional autocorrect username http www.last.fm api show track.getInfo",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getInfo",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getShouts",
      "description": {
        "fct-descr": "\u003cp\u003eGet shouts for this track. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getShouts\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f t",
        "fct-source": "src/Network-Lastfm-Track.html#getShouts",
        "fct-type": "function",
        "title": "getShouts"
      },
      "index": {
        "description": "Get shouts for this track Also available as an rss feed Optional autocorrect limit page http www.last.fm api show track.getShouts",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getShouts",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Shouts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getSimilar",
      "description": {
        "fct-descr": "\u003cp\u003eGet the similar tracks for this track on Last.fm, based on listening data.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getSimilar\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f t",
        "fct-source": "src/Network-Lastfm-Track.html#getSimilar",
        "fct-type": "function",
        "title": "getSimilar"
      },
      "index": {
        "description": "Get the similar tracks for this track on Last.fm based on listening data Optional autocorrect limit http www.last.fm api show track.getSimilar",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getSimilar",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Similar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the tags applied by an individual user to a track on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f t",
        "fct-source": "src/Network-Lastfm-Track.html#getTags",
        "fct-type": "function",
        "title": "getTags"
      },
      "index": {
        "description": "Get the tags applied by an individual user to track on Last.fm Optional autocorrect user http www.last.fm api show track.getTags",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getTags",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getTopFans",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top fans for this track on Last.fm, based on listening data.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getTopFans\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f t",
        "fct-source": "src/Network-Lastfm-Track.html#getTopFans",
        "fct-type": "function",
        "title": "getTopFans"
      },
      "index": {
        "description": "Get the top fans for this track on Last.fm based on listening data Optional autocorrect http www.last.fm api show track.getTopFans",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getTopFans",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Top Fans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:getTopTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tags for this track on Last.fm, ordered by tag count.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eautocorrect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f t",
        "fct-source": "src/Network-Lastfm-Track.html#getTopTags",
        "fct-type": "function",
        "title": "getTopTags"
      },
      "index": {
        "description": "Get the top tags for this track on Last.fm ordered by tag count Optional autocorrect http www.last.fm api show track.getTopTags",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "getTopTags",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Top Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:item",
      "description": {
        "fct-descr": "\u003cp\u003eWhat track to scrobble?\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ealbum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealbumArtist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echosenByUser\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003econtext\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eduration\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003embid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estreamId\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etrackNumber\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e Timestamp -\u003e Scrobble)",
        "fct-source": "src/Network-Lastfm-Track.html#item",
        "fct-type": "function",
        "title": "item"
      },
      "index": {
        "description": "What track to scrobble Optional album albumArtist chosenByUser context duration mbid streamId trackNumber",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "item",
        "normalized": "Request a(Artist-\u003eTrack-\u003eTimestamp-\u003eScrobble)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eTrack-\u003eTimestamp-\u003eScrobble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:love",
      "description": {
        "fct-descr": "\u003cp\u003eLove a track for a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.love\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#love",
        "fct-type": "function",
        "title": "love"
      },
      "index": {
        "description": "Love track for user profile http www.last.fm api show track.love",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "love",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:removeTag",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a user's tag from a track.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.removeTag\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e Tag -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#removeTag",
        "fct-type": "function",
        "title": "removeTag"
      },
      "index": {
        "description": "Remove user tag from track http www.last.fm api show track.removeTag",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "removeTag",
        "normalized": "Request a(Artist-\u003eTrack-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Tag",
        "signature": "Request f(Artist-\u003eTrack-\u003eTag-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:scrobble",
      "description": {
        "fct-descr": "\u003cp\u003eAdd played tracks to the user profile.\n\u003c/p\u003e\u003cp\u003eScrobbles 50 first list elements\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.scrobble\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "NonEmpty (Request f Scrobble) -\u003e Request f (APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#scrobble",
        "fct-type": "function",
        "title": "scrobble"
      },
      "index": {
        "description": "Add played tracks to the user profile Scrobbles first list elements http www.last.fm api show track.scrobble",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "scrobble",
        "normalized": "NonEmpty(Request a Scrobble)-\u003eRequest a(APIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "NonEmpty(Request f Scrobble)-\u003eRequest f(APIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for a track by track name. Returns track matches sorted by relevance.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003eartist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.search\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Track -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Track.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search for track by track name Returns track matches sorted by relevance Optional artist limit page http www.last.fm api show track.search",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "search",
        "normalized": "Request a(Track-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Track-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003eShare a track twith one or more Last.fm users or other friends.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epublic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emessage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecipient\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.share\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e Recipient -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "Share track twith one or more Last.fm users or other friends Optional public message recipient http www.last.fm api show track.share",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "share",
        "normalized": "Request a(Artist-\u003eTrack-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eTrack-\u003eRecipient-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:unban",
      "description": {
        "fct-descr": "\u003cp\u003eUnban a track for a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.unban\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#unban",
        "fct-type": "function",
        "title": "unban"
      },
      "index": {
        "description": "Unban track for user profile http www.last.fm api show track.unban",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "unban",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:unlove",
      "description": {
        "fct-descr": "\u003cp\u003eUnlove a track for a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.unlove\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#unlove",
        "fct-type": "function",
        "title": "unlove"
      },
      "index": {
        "description": "Unlove track for user profile http www.last.fm api show track.unlove",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "unlove",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Track.html#v:updateNowPlaying",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to notify Last.fm that a user has started listening\n to a track. Parameter names are case sensitive.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003ealbum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealbumArtist\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003econtext\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eduration\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003embid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etrackNumber\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/track.updateNowPlaying\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Track",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Artist -\u003e Track -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-Track.html#updateNowPlaying",
        "fct-type": "function",
        "title": "updateNowPlaying"
      },
      "index": {
        "description": "Used to notify Last.fm that user has started listening to track Parameter names are case sensitive Optional album albumArtist context duration mbid trackNumber http www.last.fm api show track.updateNowPlaying",
        "hierarchy": "Network Lastfm Track",
        "module": "Network.Lastfm.Track",
        "name": "updateNowPlaying",
        "normalized": "Request a(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Now Playing",
        "signature": "Request f(Artist-\u003eTrack-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm user API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.User as User\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-User.html",
        "fct-type": "module",
        "title": "User"
      },
      "index": {
        "description": "Lastfm user API This module is intended to be imported qualified import qualified Network.Lastfm.User as User",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "User",
        "normalized": "",
        "package": "liblastfm",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getArtistTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of tracks by a given artist scrobbled by this user\n , including scrobble time. Can be limited to specific timeranges, defaults to all time.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003estartTimestamp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eendTimestamp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getArtistTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e Artist -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getArtistTracks",
        "fct-type": "function",
        "title": "getArtistTracks"
      },
      "index": {
        "description": "Get list of tracks by given artist scrobbled by this user including scrobble time Can be limited to specific timeranges defaults to all time Optional startTimestamp page endTimestamp http www.last.fm api show user.getArtistTracks",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getArtistTracks",
        "normalized": "Request a(User-\u003eArtist-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Artist Tracks",
        "signature": "Request f(User-\u003eArtist-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getBannedTracks",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the tracks banned by the user\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getBannedTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getBannedTracks",
        "fct-type": "function",
        "title": "getBannedTracks"
      },
      "index": {
        "description": "Returns the tracks banned by the user Optional limit page http www.last.fm api show user.getBannedTracks",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getBannedTracks",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Banned Tracks",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of upcoming events that this user is attending.\n Easily integratable into calendars, using the ical standard (see 'more formats' section below).\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getEvents",
        "fct-type": "function",
        "title": "getEvents"
      },
      "index": {
        "description": "Get list of upcoming events that this user is attending Easily integratable into calendars using the ical standard see more formats section below Optional page festivalsonly limit http www.last.fm api show user.getEvents",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getEvents",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Events",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getFriends",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of the user's friends on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003erecenttracks\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getFriends\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getFriends",
        "fct-type": "function",
        "title": "getFriends"
      },
      "index": {
        "description": "Get list of the user friends on Last.fm Optional recenttracks limit page http www.last.fm api show user.getFriends",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getFriends",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Friends",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about a user profile.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getInfo\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getInfo",
        "fct-type": "function",
        "title": "getInfo"
      },
      "index": {
        "description": "Get information about user profile http www.last.fm api show user.getInfo",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getInfo",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Info",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getLovedTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last 50 tracks loved by a user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getLovedTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getLovedTracks",
        "fct-type": "function",
        "title": "getLovedTracks"
      },
      "index": {
        "description": "Get the last tracks loved by user Optional limit page http www.last.fm api show user.getLovedTracks",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getLovedTracks",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Loved Tracks",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getNeighbours",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of a user's neighbours on Last.fm.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getNeighbours\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getNeighbours",
        "fct-type": "function",
        "title": "getNeighbours"
      },
      "index": {
        "description": "Get list of user neighbours on Last.fm Optional limit http www.last.fm api show user.getNeighbours",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getNeighbours",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Neighbours",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getNewReleases",
      "description": {
        "fct-descr": "\u003cp\u003eGets a list of forthcoming releases based on a user's musical taste.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003euserecs\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getNewReleases\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getNewReleases",
        "fct-type": "function",
        "title": "getNewReleases"
      },
      "index": {
        "description": "Gets list of forthcoming releases based on user musical taste Optional userecs http www.last.fm api show user.getNewReleases",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getNewReleases",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "New Releases",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getPastEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a paginated list of all events a user has attended in the past.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getPastEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getPastEvents",
        "fct-type": "function",
        "title": "getPastEvents"
      },
      "index": {
        "description": "Get paginated list of all events user has attended in the past Optional page limit http www.last.fm api show user.getPastEvents",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getPastEvents",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Past Events",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getPersonalTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user's personal tags\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003etaggingtype\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getPersonalTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e Tag -\u003e TaggingType -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getPersonalTags",
        "fct-type": "function",
        "title": "getPersonalTags"
      },
      "index": {
        "description": "Get the user personal tags Optional taggingtype limit page http www.last.fm api show user.getPersonalTags",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getPersonalTags",
        "normalized": "Request a(User-\u003eTag-\u003eTaggingType-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Personal Tags",
        "signature": "Request f(User-\u003eTag-\u003eTaggingType-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getPlaylists",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of a user's playlists on Last.fm.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getPlaylists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getPlaylists",
        "fct-type": "function",
        "title": "getPlaylists"
      },
      "index": {
        "description": "Get list of user playlists on Last.fm http www.last.fm api show user.getPlaylists",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getPlaylists",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Playlists",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecentStations",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of the recent Stations listened to by this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecentStations\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-User.html#getRecentStations",
        "fct-type": "function",
        "title": "getRecentStations"
      },
      "index": {
        "description": "Get list of the recent Stations listened to by this user Optional limit page http www.last.fm api show user.getRecentStations",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getRecentStations",
        "normalized": "Request a(User-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Recent Stations",
        "signature": "Request f(User-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecentTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of the recent tracks listened to by this user.\n Also includes the currently playing track with the nowplaying=\u003ca\u003etrue\u003c/a\u003e\n attribute if the user is currently listening.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eextended\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecentTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getRecentTracks",
        "fct-type": "function",
        "title": "getRecentTracks"
      },
      "index": {
        "description": "Get list of the recent tracks listened to by this user Also includes the currently playing track with the nowplaying true attribute if the user is currently listening Optional limit page from extended to http www.last.fm api show user.getRecentTracks",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getRecentTracks",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Recent Tracks",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecommendedArtists",
      "description": {
        "fct-descr": "\u003cp\u003eGet Last.fm artist recommendations for a user\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecommendedArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-User.html#getRecommendedArtists",
        "fct-type": "function",
        "title": "getRecommendedArtists"
      },
      "index": {
        "description": "Get Last.fm artist recommendations for user Optional page limit http www.last.fm api show user.getRecommendedArtists",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getRecommendedArtists",
        "normalized": "Request a(APIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Recommended Artists",
        "signature": "Request f(APIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getRecommendedEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a paginated list of all events recommended to a user by Last.fm, based on their listening profile.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elatitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elongitude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecountry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getRecommendedEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-User.html#getRecommendedEvents",
        "fct-type": "function",
        "title": "getRecommendedEvents"
      },
      "index": {
        "description": "Get paginated list of all events recommended to user by Last.fm based on their listening profile Optional limit page latitude longitude festivalsonly country http www.last.fm api show user.getRecommendedEvents",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getRecommendedEvents",
        "normalized": "Request a(APIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "Recommended Events",
        "signature": "Request f(APIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getShouts",
      "description": {
        "fct-descr": "\u003cp\u003eGet shouts for this user. Also available as an rss feed.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getShouts\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getShouts",
        "fct-type": "function",
        "title": "getShouts"
      },
      "index": {
        "description": "Get shouts for this user Also available as an rss feed Optional page limit http www.last.fm api show user.getShouts",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getShouts",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Shouts",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopAlbums",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top albums listened to by a user.\n You can stipulate a time period. Sends the overall chart by default.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003eperiod\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopAlbums\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getTopAlbums",
        "fct-type": "function",
        "title": "getTopAlbums"
      },
      "index": {
        "description": "Get the top albums listened to by user You can stipulate time period Sends the overall chart by default Optional period limit page http www.last.fm api show user.getTopAlbums",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getTopAlbums",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Albums",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopArtists",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top artists listened to by a user.\n You can stipulate a time period. Sends the overall chart by default.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003eperiod\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopArtists\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getTopArtists",
        "fct-type": "function",
        "title": "getTopArtists"
      },
      "index": {
        "description": "Get the top artists listened to by user You can stipulate time period Sends the overall chart by default Optional period limit page http www.last.fm api show user.getTopArtists",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getTopArtists",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Artists",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopTags",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tags used by this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopTags\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getTopTags",
        "fct-type": "function",
        "title": "getTopTags"
      },
      "index": {
        "description": "Get the top tags used by this user Optional limit http www.last.fm api show user.getTopTags",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getTopTags",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tags",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getTopTracks",
      "description": {
        "fct-descr": "\u003cp\u003eGet the top tracks listened to by a user.\n You can stipulate a time period. Sends the overall chart by default.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003eperiod\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getTopTracks\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getTopTracks",
        "fct-type": "function",
        "title": "getTopTracks"
      },
      "index": {
        "description": "Get the top tracks listened to by user You can stipulate time period Sends the overall chart by default Optional period limit page http www.last.fm api show user.getTopTracks",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getTopTracks",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Top Tracks",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyAlbumChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet an album chart for a user profile, for a given date range.\n If no date range is supplied, it will return the most recent album chart for this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyAlbumChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getWeeklyAlbumChart",
        "fct-type": "function",
        "title": "getWeeklyAlbumChart"
      },
      "index": {
        "description": "Get an album chart for user profile for given date range If no date range is supplied it will return the most recent album chart for this user Optional from to http www.last.fm api show user.getWeeklyAlbumChart",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getWeeklyAlbumChart",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Album Chart",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyArtistChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet an artist chart for a user profile, for a given date range.\n If no date range is supplied, it will return the most recent artist chart for this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyArtistChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getWeeklyArtistChart",
        "fct-type": "function",
        "title": "getWeeklyArtistChart"
      },
      "index": {
        "description": "Get an artist chart for user profile for given date range If no date range is supplied it will return the most recent artist chart for this user Optional from to http www.last.fm api show user.getWeeklyArtistChart",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getWeeklyArtistChart",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Artist Chart",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyChartList",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of available charts for this user, expressed as\n date ranges which can be sent to the chart services.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyChartList\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getWeeklyChartList",
        "fct-type": "function",
        "title": "getWeeklyChartList"
      },
      "index": {
        "description": "Get list of available charts for this user expressed as date ranges which can be sent to the chart services http www.last.fm api show user.getWeeklyChartList",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getWeeklyChartList",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Chart List",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:getWeeklyTrackChart",
      "description": {
        "fct-descr": "\u003cp\u003eGet a track chart for a user profile, for a given date range.\n If no date range is supplied, it will return the most recent track chart for this user.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.getWeeklyTrackChart\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-User.html#getWeeklyTrackChart",
        "fct-type": "function",
        "title": "getWeeklyTrackChart"
      },
      "index": {
        "description": "Get track chart for user profile for given date range If no date range is supplied it will return the most recent track chart for this user Optional from to http www.last.fm api show user.getWeeklyTrackChart",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "getWeeklyTrackChart",
        "normalized": "Request a(User-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Weekly Track Chart",
        "signature": "Request f(User-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-User.html#v:shout",
      "description": {
        "fct-descr": "\u003cp\u003eShout on this user's shoutbox\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/user.shout\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.User",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (User -\u003e Message -\u003e APIKey -\u003e SessionKey -\u003e Sign)",
        "fct-source": "src/Network-Lastfm-User.html#shout",
        "fct-type": "function",
        "title": "shout"
      },
      "index": {
        "description": "Shout on this user shoutbox http www.last.fm api show user.shout",
        "hierarchy": "Network Lastfm User",
        "module": "Network.Lastfm.User",
        "name": "shout",
        "normalized": "Request a(User-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(User-\u003eMessage-\u003eAPIKey-\u003eSessionKey-\u003eSign)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm venue API\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Network.Lastfm.Venue as Venue\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm.Venue",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm-Venue.html",
        "fct-type": "module",
        "title": "Venue"
      },
      "index": {
        "description": "Lastfm venue API This module is intended to be imported qualified import qualified Network.Lastfm.Venue as Venue",
        "hierarchy": "Network Lastfm Venue",
        "module": "Network.Lastfm.Venue",
        "name": "Venue",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Venue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#v:getEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of upcoming events at this venue.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/venue.getEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Venue",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Venue -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Venue.html#getEvents",
        "fct-type": "function",
        "title": "getEvents"
      },
      "index": {
        "description": "Get list of upcoming events at this venue Optional festivalsonly http www.last.fm api show venue.getEvents",
        "hierarchy": "Network Lastfm Venue",
        "module": "Network.Lastfm.Venue",
        "name": "getEvents",
        "normalized": "Request a(Venue-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Events",
        "signature": "Request f(Venue-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#v:getPastEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGet a paginated list of all the events held at this venue in the past.\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003efestivalsonly\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/venue.getPastEvents\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Venue",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (Venue -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Venue.html#getPastEvents",
        "fct-type": "function",
        "title": "getPastEvents"
      },
      "index": {
        "description": "Get paginated list of all the events held at this venue in the past Optional festivalsonly page limit http www.last.fm api show venue.getPastEvents",
        "hierarchy": "Network Lastfm Venue",
        "module": "Network.Lastfm.Venue",
        "name": "getPastEvents",
        "normalized": "Request a(Venue-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "Past Events",
        "signature": "Request f(Venue-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm-Venue.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for a venue by venue name\n\u003c/p\u003e\u003cp\u003eOptional: \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecountry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.last.fm/api/show/venue.search\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Lastfm.Venue",
        "fct-package": "liblastfm",
        "fct-signature": "Request f (VenueName -\u003e APIKey -\u003e Ready)",
        "fct-source": "src/Network-Lastfm-Venue.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search for venue by venue name Optional page limit country http www.last.fm api show venue.search",
        "hierarchy": "Network Lastfm Venue",
        "module": "Network.Lastfm.Venue",
        "name": "search",
        "normalized": "Request a(VenueName-\u003eAPIKey-\u003eReady)",
        "package": "liblastfm",
        "partial": "",
        "signature": "Request f(VenueName-\u003eAPIKey-\u003eReady)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/liblastfm/docs/Network-Lastfm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLastfm API interface\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Lastfm",
        "fct-package": "liblastfm",
        "fct-signature": "module",
        "fct-source": "src/Network-Lastfm.html",
        "fct-type": "module",
        "title": "Lastfm"
      },
      "index": {
        "description": "Lastfm API interface",
        "hierarchy": "Network Lastfm",
        "module": "Network.Lastfm",
        "name": "Lastfm",
        "normalized": "",
        "package": "liblastfm",
        "partial": "Lastfm",
        "signature": ""
      }
    }
  }
]