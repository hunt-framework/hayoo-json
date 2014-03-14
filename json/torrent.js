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
        "word": "torrent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.SHA1",
          "name": "3Asha1",
          "package": "torrent",
          "signature": "ByteString -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent SHA1",
          "module": "Data.Torrent.SHA1",
          "name": "3Asha1",
          "normalized": "ByteString-\u003eByteString",
          "package": "torrent",
          "partial": "Asha",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent-SHA1.html#v:3Asha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Scrape",
          "name": "3AScrapeInfo",
          "package": "torrent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Torrent Scrape",
          "module": "Data.Torrent.Scrape",
          "name": "3AScrapeInfo",
          "package": "torrent",
          "partial": "AScrape Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent-Scrape.html#t:3AScrapeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Scrape",
          "name": "3AparseScrapeInfo",
          "package": "torrent",
          "signature": "ByteString -\u003e Maybe ScrapeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Scrape",
          "module": "Data.Torrent.Scrape",
          "name": "3AparseScrapeInfo",
          "normalized": "ByteString-\u003eMaybe ScrapeInfo",
          "package": "torrent",
          "partial": "Aparse Scrape Info",
          "signature": "ByteString-\u003eMaybe ScrapeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent-Scrape.html#v:3AparseScrapeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent.Scrape",
          "name": "3AscrapeUrl",
          "package": "torrent",
          "signature": "ByteString -\u003e [String] -\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent Scrape",
          "module": "Data.Torrent.Scrape",
          "name": "3AscrapeUrl",
          "normalized": "ByteString-\u003e[String]-\u003eMaybe String",
          "package": "torrent",
          "partial": "Ascrape Url",
          "signature": "ByteString-\u003e[String]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent-Scrape.html#v:3AscrapeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "3ATorrent",
          "package": "torrent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "3ATorrent",
          "package": "torrent",
          "partial": "ATorrent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent.html#t:3ATorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "3ATorrentFile",
          "package": "torrent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "3ATorrentFile",
          "package": "torrent",
          "partial": "ATorrent File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent.html#t:3ATorrentFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "3ATorrentInfo",
          "package": "torrent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "3ATorrentInfo",
          "package": "torrent",
          "partial": "ATorrent Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent.html#t:3ATorrentInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "3AreadTorrent",
          "package": "torrent",
          "signature": "ByteString -\u003e Either String Torrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "3AreadTorrent",
          "normalized": "ByteString-\u003eEither String Torrent",
          "package": "torrent",
          "partial": "Aread Torrent",
          "signature": "ByteString-\u003eEither String Torrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent.html#v:3AreadTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "3AserializeTorrent",
          "package": "torrent",
          "signature": "Torrent -\u003e BEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "3AserializeTorrent",
          "normalized": "Torrent-\u003eBEncode",
          "package": "torrent",
          "partial": "Aserialize Torrent",
          "signature": "Torrent-\u003eBEncode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent.html#v:3AserializeTorrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Torrent",
          "name": "3AtorrentSize",
          "package": "torrent",
          "signature": "Torrent -\u003e Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Torrent",
          "module": "Data.Torrent",
          "name": "3AtorrentSize",
          "normalized": "Torrent-\u003eInt",
          "package": "torrent",
          "partial": "Atorrent Size",
          "signature": "Torrent-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torrent/docs/Data-Torrent.html#v:3AtorrentSize"
      }
    }
  ]
]