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
        "word": "music-parts"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Parts",
          "name": "Parts",
          "package": "music-parts",
          "source": "src/Music-Parts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Parts",
          "module": "Music.Parts",
          "name": "Parts",
          "package": "music-parts",
          "partial": "Parts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-parts/docs/Music-Parts.html#"
      }
    }
  ]
]