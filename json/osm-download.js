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
        "word": "osm-download"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "OSM",
          "package": "osm-download",
          "source": "src/Network-OSM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "OSM",
          "package": "osm-download",
          "partial": "OSM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "Frame",
          "package": "osm-download",
          "source": "src/Network-OSM.html#Frame",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "Frame",
          "package": "osm-download",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Monad transformer allowing you acquire OSM maps\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "OSM",
          "package": "osm-download",
          "source": "src/Network-OSM.html#OSM",
          "type": "data"
        },
        "index": {
          "description": "Monad transformer allowing you acquire OSM maps",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "OSM",
          "package": "osm-download",
          "partial": "OSM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:OSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cacheing operations run in their own monad that describe the\n location of the cache, the tile server URL, and the worker threads\n the retrieve tiles.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "OSMConfig",
          "package": "osm-download",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "data"
        },
        "index": {
          "description": "The cacheing operations run in their own monad that describe the location of the cache the tile server URL and the worker threads the retrieve tiles",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "OSMConfig",
          "package": "osm-download",
          "partial": "OSMConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:OSMConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe OSM operations maintain a list of tiles needing refreshed (for\n local caching), the state of the local cache, and initial\n configuration options.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "OSMState",
          "package": "osm-download",
          "source": "src/Network-OSM.html#OSMState",
          "type": "data"
        },
        "index": {
          "description": "The OSM operations maintain list of tiles needing refreshed for local caching the state of the local cache and initial configuration options",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "OSMState",
          "package": "osm-download",
          "partial": "OSMState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:OSMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe coordinates associated with any particular GPS location\n can be computed using \u003ccode\u003e\u003ca\u003edetermineTileCoords\u003c/a\u003e\u003c/code\u003e and converted into tile ids\n using \u003ccode\u003e\u003ca\u003eselectedTiles\u003c/a\u003e\u003c/code\u003e before final download with \u003ccode\u003e\u003ca\u003edownloadTiles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTileCoords describes the range of tiles needed to completely display an area\n (the area must be rectangular).\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "TileCoords",
          "package": "osm-download",
          "source": "src/Network-OSM.html#TileCoords",
          "type": "data"
        },
        "index": {
          "description": "The coordinates associated with any particular GPS location can be computed using determineTileCoords and converted into tile ids using selectedTiles before final download with downloadTiles TileCoords describes the range of tiles needed to completely display an area the area must be rectangular",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "TileCoords",
          "package": "osm-download",
          "partial": "Tile Coords",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:TileCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA TileID, along with a zoom level, uniquely identifies a single\n OSM map tile.  The standard size is 256x256 pixels for such a tile.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "TileID",
          "package": "osm-download",
          "source": "src/Network-OSM.html#TileID",
          "type": "newtype"
        },
        "index": {
          "description": "TileID along with zoom level uniquely identifies single OSM map tile The standard size is x256 pixels for such tile",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "TileID",
          "package": "osm-download",
          "partial": "Tile ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:TileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "Zoom",
          "package": "osm-download",
          "source": "src/Network-OSM.html#Zoom",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "Zoom",
          "package": "osm-download",
          "partial": "Zoom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#t:Zoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "Frame",
          "package": "osm-download",
          "signature": "Frame",
          "source": "src/Network-OSM.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "Frame",
          "package": "osm-download",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "OSMCfg",
          "package": "osm-download",
          "signature": "OSMCfg",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "OSMCfg",
          "package": "osm-download",
          "partial": "OSMCfg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:OSMCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "TID",
          "package": "osm-download",
          "signature": "TID",
          "source": "src/Network-OSM.html#TileID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "TID",
          "package": "osm-download",
          "partial": "TID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:TID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "TileCoords",
          "package": "osm-download",
          "signature": "TileCoords",
          "source": "src/Network-OSM.html#TileCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "TileCoords",
          "package": "osm-download",
          "partial": "Tile Coords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:TileCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "baseUrl",
          "package": "osm-download",
          "signature": "String",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "baseUrl",
          "package": "osm-download",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:baseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath of the tile cache\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "cache",
          "package": "osm-download",
          "signature": "Text",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "description": "Path of the tile cache",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "cache",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "center",
          "package": "osm-download",
          "signature": "Point",
          "source": "src/Network-OSM.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "center",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "coordForPixelPos",
          "package": "osm-download",
          "signature": "(t, t) -\u003e TileCoords -\u003e Zoom -\u003e Point",
          "source": "src/Network-OSM.html#coordForPixelPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "coordForPixelPos",
          "normalized": "(a,a)-\u003eTileCoords-\u003eZoom-\u003ePoint",
          "package": "osm-download",
          "partial": "For Pixel Pos",
          "signature": "(t,t)-\u003eTileCoords-\u003eZoom-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:coordForPixelPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default configuration using the main OSM server as a tile server\n and a cabal-generated directory for the cache directory\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "defaultOSMConfig",
          "package": "osm-download",
          "signature": "IO OSMConfig",
          "source": "src/Network-OSM.html#defaultOSMConfig",
          "type": "function"
        },
        "index": {
          "description": "default configuration using the main OSM server as tile server and cabal-generated directory for the cache directory",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "defaultOSMConfig",
          "package": "osm-download",
          "partial": "OSMConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:defaultOSMConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the rectangular map region to download based on GPS points and a zoom level\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "determineTileCoords",
          "package": "osm-download",
          "signature": "[Point] -\u003e Zoom -\u003e Maybe TileCoords",
          "source": "src/Network-OSM.html#determineTileCoords",
          "type": "function"
        },
        "index": {
          "description": "Computes the rectangular map region to download based on GPS points and zoom level",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "determineTileCoords",
          "normalized": "[Point]-\u003eZoom-\u003eMaybe TileCoords",
          "package": "osm-download",
          "partial": "Tile Coords",
          "signature": "[Point]-\u003eZoom-\u003eMaybe TileCoords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:determineTileCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the tile server base URL,\n the set of coordinates that must appear within the map boundaries, and users\n the \u003ccode\u003e\u003ca\u003edownloadTiles\u003c/a\u003e\u003c/code\u003e function to acquire all the necessary tiles.\n\u003c/p\u003e\u003cp\u003eThe returned files should all be in an approriate grid for row/column display.\n See the test files of Main.hs and Main2.hs for examples of Repa stiching tiles\n into a single image or side by side display of individual tiles.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "downloadBestFitTiles",
          "package": "osm-download",
          "signature": "String -\u003e [Point] -\u003e IO [[Either Status ByteString]]",
          "source": "src/Network-OSM.html#downloadBestFitTiles",
          "type": "function"
        },
        "index": {
          "description": "Takes the tile server base URL the set of coordinates that must appear within the map boundaries and users the downloadTiles function to acquire all the necessary tiles The returned files should all be in an approriate grid for row column display See the test files of Main.hs and Main2.hs for examples of Repa stiching tiles into single image or side by side display of individual tiles",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "downloadBestFitTiles",
          "normalized": "String-\u003e[Point]-\u003eIO[[Either Status ByteString]]",
          "package": "osm-download",
          "partial": "Best Fit Tiles",
          "signature": "String-\u003e[Point]-\u003eIO[[Either Status ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:downloadBestFitTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload a single tile form a given OSM server URL.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "downloadTile",
          "package": "osm-download",
          "signature": "String -\u003e Zoom -\u003e TileID -\u003e IO (Either Status ByteString)",
          "source": "src/Network-OSM.html#downloadTile",
          "type": "function"
        },
        "index": {
          "description": "Download single tile form given OSM server URL",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "downloadTile",
          "normalized": "String-\u003eZoom-\u003eTileID-\u003eIO(Either Status ByteString)",
          "package": "osm-download",
          "partial": "Tile",
          "signature": "String-\u003eZoom-\u003eTileID-\u003eIO(Either Status ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:downloadTile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the boundaries of the OSM tiles and downloads the tiles,\n keeping them in proper grid patterns for latter stiching or\n side-by-side display.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "downloadTiles",
          "package": "osm-download",
          "signature": "String -\u003e Zoom -\u003e [[TileID]] -\u003e IO [[Either Status ByteString]]",
          "source": "src/Network-OSM.html#downloadTiles",
          "type": "function"
        },
        "index": {
          "description": "Takes the boundaries of the OSM tiles and downloads the tiles keeping them in proper grid patterns for latter stiching or side-by-side display",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "downloadTiles",
          "normalized": "String-\u003eZoom-\u003e[[TileID]]-\u003eIO[[Either Status ByteString]]",
          "package": "osm-download",
          "partial": "Tiles",
          "signature": "String-\u003eZoom-\u003e[[TileID]]-\u003eIO[[Either Status ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:downloadTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevalOSM allows you to query an OSM server and the local cache.\n Take note - the \u003ccode\u003e\u003ca\u003eOSMConfig\u003c/a\u003e\u003c/code\u003e thread limit is enforced per-evalOSM.\n Running many evalOSM processes can result in a violation of the\n limit and incur admin wrath.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "evalOSM",
          "package": "osm-download",
          "signature": "OSM a -\u003e OSMConfig -\u003e IO a",
          "source": "src/Network-OSM.html#evalOSM",
          "type": "function"
        },
        "index": {
          "description": "evalOSM allows you to query an OSM server and the local cache Take note the OSMConfig thread limit is enforced per-evalOSM Running many evalOSM processes can result in violation of the limit and incur admin wrath",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "evalOSM",
          "normalized": "OSM a-\u003eOSMConfig-\u003eIO a",
          "package": "osm-download",
          "partial": "OSM",
          "signature": "OSM a-\u003eOSMConfig-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:evalOSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "frameZoom",
          "package": "osm-download",
          "signature": "Zoom",
          "source": "src/Network-OSM.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "frameZoom",
          "package": "osm-download",
          "partial": "Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:frameZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edownloadBestFitTiles\u003c/a\u003e\u003c/code\u003e but uses the cached copies when available.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "getBestFitTiles",
          "package": "osm-download",
          "signature": "[Point] -\u003e OSM [[Either Status ByteString]]",
          "source": "src/Network-OSM.html#getBestFitTiles",
          "type": "function"
        },
        "index": {
          "description": "Like downloadBestFitTiles but uses the cached copies when available",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "getBestFitTiles",
          "normalized": "[Point]-\u003eOSM[[Either Status ByteString]]",
          "package": "osm-download",
          "partial": "Best Fit Tiles",
          "signature": "[Point]-\u003eOSM[[Either Status ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:getBestFitTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "getFrameHeight",
          "package": "osm-download",
          "signature": "Frame -\u003e Int",
          "source": "src/Network-OSM.html#getFrameHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "getFrameHeight",
          "normalized": "Frame-\u003eInt",
          "package": "osm-download",
          "partial": "Frame Height",
          "signature": "Frame-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:getFrameHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edownloadTile\u003c/a\u003e\u003c/code\u003e but uses a cached copy when available.\n Downloaded copies are added to the cache.\n\u003c/p\u003e\u003cp\u003eWhen the cached copy is out of date it will still be returned but a\n new copy will be downloaded and added to the cache concurrently.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "getTile",
          "package": "osm-download",
          "signature": "TileID -\u003e Zoom -\u003e OSM (Either Status ByteString)",
          "source": "src/Network-OSM.html#getTile",
          "type": "function"
        },
        "index": {
          "description": "Like downloadTile but uses cached copy when available Downloaded copies are added to the cache When the cached copy is out of date it will still be returned but new copy will be downloaded and added to the cache concurrently",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "getTile",
          "normalized": "TileID-\u003eZoom-\u003eOSM(Either Status ByteString)",
          "package": "osm-download",
          "partial": "Tile",
          "signature": "TileID-\u003eZoom-\u003eOSM(Either Status ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:getTile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edownloadTiles\u003c/a\u003e\u003c/code\u003e but uses the cached copies when available\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "getTiles",
          "package": "osm-download",
          "signature": "[[TileID]] -\u003e Zoom -\u003e OSM [[Either Status ByteString]]",
          "source": "src/Network-OSM.html#getTiles",
          "type": "function"
        },
        "index": {
          "description": "Like downloadTiles but uses the cached copies when available",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "getTiles",
          "normalized": "[[TileID]]-\u003eZoom-\u003eOSM[[Either Status ByteString]]",
          "package": "osm-download",
          "partial": "Tiles",
          "signature": "[[TileID]]-\u003eZoom-\u003eOSM[[Either Status ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:getTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "height",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "height",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "maxX",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#TileCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "maxX",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:maxX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "maxY",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#TileCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "maxY",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:maxY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "minX",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#TileCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "minX",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:minX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "minY",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#TileCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "minY",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:minY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if we should use the network to\n download Tiles\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "networkEnabled",
          "package": "osm-download",
          "signature": "Bool",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "description": "True if we should use the network to download Tiles",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "networkEnabled",
          "package": "osm-download",
          "partial": "Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:networkEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to take if the tile is not cached.\n   Return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e val for a default value.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to wait for a tile server.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "noCacheAction",
          "package": "osm-download",
          "signature": "Maybe (TileID -\u003e Zoom -\u003e IO (Either Status ByteString))",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "description": "Action to take if the tile is not cached Return Just val for default value Return Nothing to wait for tile server",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "noCacheAction",
          "normalized": "Maybe(TileID-\u003eZoom-\u003eIO(Either Status ByteString))",
          "package": "osm-download",
          "partial": "Cache Action",
          "signature": "Maybe(TileID-\u003eZoom-\u003eIO(Either Status ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:noCacheAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of threads the tile downloading\n   can concurrently run in.  Tileserver\n   admins request this be no more than 2.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "nrConcurrentDownloads",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "description": "Number of threads the tile downloading can concurrently run in Tileserver admins request this be no more than",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "nrConcurrentDownloads",
          "package": "osm-download",
          "partial": "Concurrent Downloads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:nrConcurrentDownloads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMax download queue size\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "nrQueuedDownloads",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#OSMConfig",
          "type": "function"
        },
        "index": {
          "description": "Max download queue size",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "nrQueuedDownloads",
          "package": "osm-download",
          "partial": "Queued Downloads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:nrQueuedDownloads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe suggested copyright text in accordance with\n \u003ca\u003ehttp://wiki.openstreetmap.org/wiki/Legal_FAQ\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "osmCopyrightText",
          "package": "osm-download",
          "signature": "String",
          "source": "src/Network-OSM.html#osmCopyrightText",
          "type": "function"
        },
        "index": {
          "description": "The suggested copyright text in accordance with http wiki.openstreetmap.org wiki Legal FAQ",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "osmCopyrightText",
          "package": "osm-download",
          "partial": "Copyright Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:osmCopyrightText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe official OSM tile server.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "osmTileURL",
          "package": "osm-download",
          "signature": "String",
          "source": "src/Network-OSM.html#osmTileURL",
          "type": "function"
        },
        "index": {
          "description": "The official OSM tile server",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "osmTileURL",
          "package": "osm-download",
          "partial": "Tile URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:osmTileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "pixel2point",
          "package": "osm-download",
          "signature": "Frame -\u003e (Int, Int) -\u003e Point",
          "source": "src/Network-OSM.html#pixel2point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "pixel2point",
          "normalized": "Frame-\u003e(Int,Int)-\u003ePoint",
          "package": "osm-download",
          "signature": "Frame-\u003e(Int,Int)-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:pixel2point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a coordinate, the OSM tile boundaries, and a zoom level then\n generates (x,y) points to be placed on the Image. The origin is\n the bottom left of the picture.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "pixelPosForCoord",
          "package": "osm-download",
          "signature": "Point -\u003e TileCoords -\u003e Zoom -\u003e (t, t)",
          "source": "src/Network-OSM.html#pixelPosForCoord",
          "type": "function"
        },
        "index": {
          "description": "Takes coordinate the OSM tile boundaries and zoom level then generates points to be placed on the Image The origin is the bottom left of the picture",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "pixelPosForCoord",
          "normalized": "Point-\u003eTileCoords-\u003eZoom-\u003e(a,a)",
          "package": "osm-download",
          "partial": "Pos For Coord",
          "signature": "Point-\u003eTileCoords-\u003eZoom-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:pixelPosForCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the position of the coordinate in the frame with the origin as\n the lower left (note this is different from the lower level operations!)\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "point2pixel",
          "package": "osm-download",
          "signature": "Frame -\u003e Point -\u003e (Int, Int)",
          "source": "src/Network-OSM.html#point2pixel",
          "type": "function"
        },
        "index": {
          "description": "Gives the position of the coordinate in the frame with the origin as the lower left note this is different from the lower level operations",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "point2pixel",
          "normalized": "Frame-\u003ePoint-\u003e(Int,Int)",
          "package": "osm-download",
          "signature": "Frame-\u003ePoint-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:point2pixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOSM defined method of converting a coordinate and zoom level to a tile\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "point2tile",
          "package": "osm-download",
          "signature": "Point -\u003e Zoom -\u003e TileID",
          "source": "src/Network-OSM.html#point2tile",
          "type": "function"
        },
        "index": {
          "description": "OSM defined method of converting coordinate and zoom level to tile",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "point2tile",
          "normalized": "Point-\u003eZoom-\u003eTileID",
          "package": "osm-download",
          "signature": "Point-\u003eZoom-\u003eTileID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:point2tile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a width, height and center, compute the tiles needed to fill\n the display.\n\u003c/p\u003e\u003cp\u003eTHIS ASSUMES tiles are 256x256 pixels!\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "selectTilesForFrame",
          "package": "osm-download",
          "signature": "Frame -\u003e [[TileID]]",
          "source": "src/Network-OSM.html#selectTilesForFrame",
          "type": "function"
        },
        "index": {
          "description": "Given width height and center compute the tiles needed to fill the display THIS ASSUMES tiles are x256 pixels",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "selectTilesForFrame",
          "normalized": "Frame-\u003e[[TileID]]",
          "package": "osm-download",
          "partial": "Tiles For Frame",
          "signature": "Frame-\u003e[[TileID]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:selectTilesForFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the boundaries of the OSM tiles, and generates\n a list of the encompassed OSM tiles.\n\u003c/p\u003e",
          "module": "Network.OSM",
          "name": "selectedTiles",
          "package": "osm-download",
          "signature": "TileCoords -\u003e [[TileID]]",
          "source": "src/Network-OSM.html#selectedTiles",
          "type": "function"
        },
        "index": {
          "description": "Takes the boundaries of the OSM tiles and generates list of the encompassed OSM tiles",
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "selectedTiles",
          "normalized": "TileCoords-\u003e[[TileID]]",
          "package": "osm-download",
          "partial": "Tiles",
          "signature": "TileCoords-\u003e[[TileID]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:selectedTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "tile2point",
          "package": "osm-download",
          "signature": "TileID -\u003e Zoom -\u003e Point",
          "source": "src/Network-OSM.html#tile2point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "tile2point",
          "normalized": "TileID-\u003eZoom-\u003ePoint",
          "package": "osm-download",
          "signature": "TileID-\u003eZoom-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:tile2point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "tileCoordsForFrame",
          "package": "osm-download",
          "signature": "Frame -\u003e TileCoords",
          "source": "src/Network-OSM.html#tileCoordsForFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "tileCoordsForFrame",
          "normalized": "Frame-\u003eTileCoords",
          "package": "osm-download",
          "partial": "Coords For Frame",
          "signature": "Frame-\u003eTileCoords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:tileCoordsForFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "unTID",
          "package": "osm-download",
          "signature": "(Int, Int)",
          "source": "src/Network-OSM.html#TileID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "unTID",
          "normalized": "(Int,Int)",
          "package": "osm-download",
          "partial": "TID",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:unTID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.OSM",
          "name": "width",
          "package": "osm-download",
          "signature": "Int",
          "source": "src/Network-OSM.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network OSM",
          "module": "Network.OSM",
          "name": "width",
          "package": "osm-download",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osm-download/docs/Network-OSM.html#v:width"
      }
    }
  ]
]