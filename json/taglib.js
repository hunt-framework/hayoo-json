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
        "word": "taglib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh level interface to read and write ID3 tag fields (album, artist,\n comment, genre, title, track number, year) and get audio properties (length,\n bit rate, sample rate, channels)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.TagLib",
          "name": "TagLib",
          "package": "taglib",
          "source": "src/Sound-TagLib.html",
          "type": "module"
        },
        "index": {
          "description": "High level interface to read and write ID3 tag fields album artist comment genre title track number year and get audio properties length bit rate sample rate channels",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "TagLib",
          "package": "taglib",
          "partial": "Tag Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.TagLib",
          "name": "AudioProperties",
          "package": "taglib",
          "source": "src/Sound-TagLib.html#AudioProperties",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "AudioProperties",
          "package": "taglib",
          "partial": "Audio Properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#t:AudioProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.TagLib",
          "name": "Tag",
          "package": "taglib",
          "source": "src/Sound-TagLib.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "Tag",
          "package": "taglib",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.TagLib",
          "name": "TagFile",
          "package": "taglib",
          "source": "src/Sound-TagLib.html#TagFile",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "TagFile",
          "package": "taglib",
          "partial": "Tag File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#t:TagFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an album string from a Tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "album",
          "package": "taglib",
          "signature": "Tag -\u003e IO String",
          "source": "src/Sound-TagLib.html#album",
          "type": "function"
        },
        "index": {
          "description": "Get an album string from Tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "album",
          "normalized": "Tag-\u003eIO String",
          "package": "taglib",
          "signature": "Tag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:album"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an artist string from a Tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "artist",
          "package": "taglib",
          "signature": "Tag -\u003e IO String",
          "source": "src/Sound-TagLib.html#artist",
          "type": "function"
        },
        "index": {
          "description": "Get an artist string from Tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "artist",
          "normalized": "Tag-\u003eIO String",
          "package": "taglib",
          "signature": "Tag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:artist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the AudioProperties from a TagFile\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "audioProperties",
          "package": "taglib",
          "signature": "TagFile -\u003e IO (Maybe AudioProperties)",
          "source": "src/Sound-TagLib.html#audioProperties",
          "type": "function"
        },
        "index": {
          "description": "Get the AudioProperties from TagFile",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "audioProperties",
          "normalized": "TagFile-\u003eIO(Maybe AudioProperties)",
          "package": "taglib",
          "partial": "Properties",
          "signature": "TagFile-\u003eIO(Maybe AudioProperties)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:audioProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the bitRate from AudioProperties\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "bitRate",
          "package": "taglib",
          "signature": "AudioProperties -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#bitRate",
          "type": "function"
        },
        "index": {
          "description": "Get the bitRate from AudioProperties",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "bitRate",
          "normalized": "AudioProperties-\u003eIO Integer",
          "package": "taglib",
          "partial": "Rate",
          "signature": "AudioProperties-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:bitRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of channels from AudioProperties\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "channels",
          "package": "taglib",
          "signature": "AudioProperties -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#channels",
          "type": "function"
        },
        "index": {
          "description": "Get the number of channels from AudioProperties",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "channels",
          "normalized": "AudioProperties-\u003eIO Integer",
          "package": "taglib",
          "signature": "AudioProperties-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:channels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the comment string from a Tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "comment",
          "package": "taglib",
          "signature": "Tag -\u003e IO String",
          "source": "src/Sound-TagLib.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Get the comment string from Tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "comment",
          "normalized": "Tag-\u003eIO String",
          "package": "taglib",
          "signature": "Tag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the duration (in seconds) from AudioProperties \nIn TagLib, this is named length.  This is renamed so that it doesn't conflict with the Prelude length\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "duration",
          "package": "taglib",
          "signature": "AudioProperties -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#duration",
          "type": "function"
        },
        "index": {
          "description": "Get the duration in seconds from AudioProperties In TagLib this is named length This is renamed so that it doesn conflict with the Prelude length",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "duration",
          "normalized": "AudioProperties-\u003eIO Integer",
          "package": "taglib",
          "signature": "AudioProperties-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the comment string from a Tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "genre",
          "package": "taglib",
          "signature": "Tag -\u003e IO String",
          "source": "src/Sound-TagLib.html#genre",
          "type": "function"
        },
        "index": {
          "description": "Get the comment string from Tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "genre",
          "normalized": "Tag-\u003eIO String",
          "package": "taglib",
          "signature": "Tag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:genre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a filename and possibly get a TagFile\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "open",
          "package": "taglib",
          "signature": "String -\u003e IO (Maybe TagFile)",
          "source": "src/Sound-TagLib.html#open",
          "type": "function"
        },
        "index": {
          "description": "Open filename and possibly get TagFile",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "open",
          "normalized": "String-\u003eIO(Maybe TagFile)",
          "package": "taglib",
          "signature": "String-\u003eIO(Maybe TagFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sampleRate from AudioProperties\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "sampleRate",
          "package": "taglib",
          "signature": "AudioProperties -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#sampleRate",
          "type": "function"
        },
        "index": {
          "description": "Get the sampleRate from AudioProperties",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "sampleRate",
          "normalized": "AudioProperties-\u003eIO Integer",
          "package": "taglib",
          "partial": "Rate",
          "signature": "AudioProperties-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:sampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave changes to a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "save",
          "package": "taglib",
          "signature": "TagFile -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save changes to tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "save",
          "normalized": "TagFile-\u003eIO Integer",
          "package": "taglib",
          "signature": "TagFile-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the album of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setAlbum",
          "package": "taglib",
          "signature": "Tag -\u003e String -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setAlbum",
          "type": "function"
        },
        "index": {
          "description": "Set the album of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setAlbum",
          "normalized": "Tag-\u003eString-\u003eIO()",
          "package": "taglib",
          "partial": "Album",
          "signature": "Tag-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the artist of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setArtist",
          "package": "taglib",
          "signature": "Tag -\u003e String -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setArtist",
          "type": "function"
        },
        "index": {
          "description": "Set the artist of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setArtist",
          "normalized": "Tag-\u003eString-\u003eIO()",
          "package": "taglib",
          "partial": "Artist",
          "signature": "Tag-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the comment of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setComment",
          "package": "taglib",
          "signature": "Tag -\u003e String -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setComment",
          "type": "function"
        },
        "index": {
          "description": "Set the comment of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setComment",
          "normalized": "Tag-\u003eString-\u003eIO()",
          "package": "taglib",
          "partial": "Comment",
          "signature": "Tag-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the genre of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setGenre",
          "package": "taglib",
          "signature": "Tag -\u003e String -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setGenre",
          "type": "function"
        },
        "index": {
          "description": "Set the genre of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setGenre",
          "normalized": "Tag-\u003eString-\u003eIO()",
          "package": "taglib",
          "partial": "Genre",
          "signature": "Tag-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setGenre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the title of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setTitle",
          "package": "taglib",
          "signature": "Tag -\u003e String -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setTitle",
          "type": "function"
        },
        "index": {
          "description": "Set the title of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setTitle",
          "normalized": "Tag-\u003eString-\u003eIO()",
          "package": "taglib",
          "partial": "Title",
          "signature": "Tag-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the track of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setTrack",
          "package": "taglib",
          "signature": "Tag -\u003e Integer -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setTrack",
          "type": "function"
        },
        "index": {
          "description": "Set the track of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setTrack",
          "normalized": "Tag-\u003eInteger-\u003eIO()",
          "package": "taglib",
          "partial": "Track",
          "signature": "Tag-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the year of a tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "setYear",
          "package": "taglib",
          "signature": "Tag -\u003e Integer -\u003e IO ()",
          "source": "src/Sound-TagLib.html#setYear",
          "type": "function"
        },
        "index": {
          "description": "Set the year of tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "setYear",
          "normalized": "Tag-\u003eInteger-\u003eIO()",
          "package": "taglib",
          "partial": "Year",
          "signature": "Tag-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:setYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Tag from a TagFile, if it has one\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "tag",
          "package": "taglib",
          "signature": "TagFile -\u003e IO (Maybe Tag)",
          "source": "src/Sound-TagLib.html#tag",
          "type": "function"
        },
        "index": {
          "description": "Get Tag from TagFile if it has one",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "tag",
          "normalized": "TagFile-\u003eIO(Maybe Tag)",
          "package": "taglib",
          "signature": "TagFile-\u003eIO(Maybe Tag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a title string from a Tag\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "title",
          "package": "taglib",
          "signature": "Tag -\u003e IO String",
          "source": "src/Sound-TagLib.html#title",
          "type": "function"
        },
        "index": {
          "description": "Get title string from Tag",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "title",
          "normalized": "Tag-\u003eIO String",
          "package": "taglib",
          "signature": "Tag-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the track number from a Tag.  Empty values will be 0\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "track",
          "package": "taglib",
          "signature": "Tag -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#track",
          "type": "function"
        },
        "index": {
          "description": "Get the track number from Tag Empty values will be",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "track",
          "normalized": "Tag-\u003eIO Integer",
          "package": "taglib",
          "signature": "Tag-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the year from a Tag.  Empty values will be 0\n\u003c/p\u003e",
          "module": "Sound.TagLib",
          "name": "year",
          "package": "taglib",
          "signature": "Tag -\u003e IO Integer",
          "source": "src/Sound-TagLib.html#year",
          "type": "function"
        },
        "index": {
          "description": "Get the year from Tag Empty values will be",
          "hierarchy": "Sound TagLib",
          "module": "Sound.TagLib",
          "name": "year",
          "normalized": "Tag-\u003eIO Integer",
          "package": "taglib",
          "signature": "Tag-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/taglib/docs/Sound-TagLib.html#v:year"
      }
    }
  ]
]