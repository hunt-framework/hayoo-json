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
        "word": "hakyll-convert"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Blogger",
          "name": "Blogger",
          "package": "hakyll-convert",
          "source": "src/Hakyll-Convert-Blogger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "Blogger",
          "package": "hakyll-convert",
          "partial": "Blogger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA post and its comments\n\u003c/p\u003e",
          "module": "Hakyll.Convert.Blogger",
          "name": "FullPost",
          "package": "hakyll-convert",
          "source": "src/Hakyll-Convert-Blogger.html#FullPost",
          "type": "data"
        },
        "index": {
          "description": "post and its comments",
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "FullPost",
          "package": "hakyll-convert",
          "partial": "Full Post",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#t:FullPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Blogger",
          "name": "FullPost",
          "package": "hakyll-convert",
          "signature": "FullPost",
          "source": "src/Hakyll-Convert-Blogger.html#FullPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "FullPost",
          "package": "hakyll-convert",
          "partial": "Full Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#v:FullPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Blogger",
          "name": "distill",
          "package": "hakyll-convert",
          "signature": "FullPost -\u003e DistilledPost",
          "source": "src/Hakyll-Convert-Blogger.html#distill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "distill",
          "normalized": "FullPost-\u003eDistilledPost",
          "package": "hakyll-convert",
          "signature": "FullPost-\u003eDistilledPost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#v:distill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Blogger",
          "name": "fpComments",
          "package": "hakyll-convert",
          "signature": "[Entry]",
          "source": "src/Hakyll-Convert-Blogger.html#FullPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "fpComments",
          "normalized": "[Entry]",
          "package": "hakyll-convert",
          "partial": "Comments",
          "signature": "[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#v:fpComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Blogger",
          "name": "fpPost",
          "package": "hakyll-convert",
          "signature": "Entry",
          "source": "src/Hakyll-Convert-Blogger.html#FullPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "fpPost",
          "package": "hakyll-convert",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#v:fpPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Blogger",
          "name": "fpUri",
          "package": "hakyll-convert",
          "signature": "String",
          "source": "src/Hakyll-Convert-Blogger.html#FullPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "fpUri",
          "package": "hakyll-convert",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#v:fpUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only published posts\n\u003c/p\u003e",
          "module": "Hakyll.Convert.Blogger",
          "name": "readPosts",
          "package": "hakyll-convert",
          "signature": "FilePath -\u003e IO (Maybe [FullPost])",
          "source": "src/Hakyll-Convert-Blogger.html#readPosts",
          "type": "function"
        },
        "index": {
          "description": "Returns only published posts",
          "hierarchy": "Hakyll Convert Blogger",
          "module": "Hakyll.Convert.Blogger",
          "name": "readPosts",
          "normalized": "FilePath-\u003eIO(Maybe[FullPost])",
          "package": "hakyll-convert",
          "partial": "Posts",
          "signature": "FilePath-\u003eIO(Maybe[FullPost])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Blogger.html#v:readPosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "Common",
          "package": "hakyll-convert",
          "source": "src/Hakyll-Convert-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "Common",
          "package": "hakyll-convert",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "DistilledPost",
          "package": "hakyll-convert",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "DistilledPost",
          "package": "hakyll-convert",
          "partial": "Distilled Post",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#t:DistilledPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "DistilledPost",
          "package": "hakyll-convert",
          "signature": "DistilledPost",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "DistilledPost",
          "package": "hakyll-convert",
          "partial": "Distilled Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:DistilledPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "dpBody",
          "package": "hakyll-convert",
          "signature": "Text",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "dpBody",
          "package": "hakyll-convert",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:dpBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategories are coarser-grained than tags; you might be\n   interested in ignoring tags and just focusing on categories\n   in cases where you have lots of little uninteresting tags.\n\u003c/p\u003e",
          "module": "Hakyll.Convert.Common",
          "name": "dpCategories",
          "package": "hakyll-convert",
          "signature": "[Text]",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "description": "Categories are coarser-grained than tags you might be interested in ignoring tags and just focusing on categories in cases where you have lots of little uninteresting tags",
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "dpCategories",
          "normalized": "[Text]",
          "package": "hakyll-convert",
          "partial": "Categories",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:dpCategories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "dpDate",
          "package": "hakyll-convert",
          "signature": "Text",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "dpDate",
          "package": "hakyll-convert",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:dpDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "dpTags",
          "package": "hakyll-convert",
          "signature": "[Text]",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "dpTags",
          "normalized": "[Text]",
          "package": "hakyll-convert",
          "partial": "Tags",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:dpTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "dpTitle",
          "package": "hakyll-convert",
          "signature": "Maybe Text",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "dpTitle",
          "package": "hakyll-convert",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:dpTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Common",
          "name": "dpUri",
          "package": "hakyll-convert",
          "signature": "String",
          "source": "src/Hakyll-Convert-Common.html#DistilledPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Common",
          "module": "Hakyll.Convert.Common",
          "name": "dpUri",
          "package": "hakyll-convert",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Common.html#v:dpUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Wordpress",
          "name": "Wordpress",
          "package": "hakyll-convert",
          "source": "src/Hakyll-Convert-Wordpress.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Convert Wordpress",
          "module": "Hakyll.Convert.Wordpress",
          "name": "Wordpress",
          "package": "hakyll-convert",
          "partial": "Wordpress",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Wordpress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Convert.Wordpress",
          "name": "distill",
          "package": "hakyll-convert",
          "signature": "RSSItem -\u003e DistilledPost",
          "source": "src/Hakyll-Convert-Wordpress.html#distill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Convert Wordpress",
          "module": "Hakyll.Convert.Wordpress",
          "name": "distill",
          "normalized": "RSSItem-\u003eDistilledPost",
          "package": "hakyll-convert",
          "signature": "RSSItem-\u003eDistilledPost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Wordpress.html#v:distill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only public posts\n\u003c/p\u003e",
          "module": "Hakyll.Convert.Wordpress",
          "name": "readPosts",
          "package": "hakyll-convert",
          "signature": "FilePath -\u003e IO (Maybe [RSSItem])",
          "source": "src/Hakyll-Convert-Wordpress.html#readPosts",
          "type": "function"
        },
        "index": {
          "description": "Returns only public posts",
          "hierarchy": "Hakyll Convert Wordpress",
          "module": "Hakyll.Convert.Wordpress",
          "name": "readPosts",
          "normalized": "FilePath-\u003eIO(Maybe[RSSItem])",
          "package": "hakyll-convert",
          "partial": "Posts",
          "signature": "FilePath-\u003eIO(Maybe[RSSItem])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll-convert/docs/Hakyll-Convert-Wordpress.html#v:readPosts"
      }
    }
  ]
]