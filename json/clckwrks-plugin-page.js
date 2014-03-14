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
        "word": "clckwrks-plugin-page"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "API",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-API.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "API",
          "package": "clckwrks-plugin-page",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "PageId",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#PageId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "PageId",
          "package": "clckwrks-plugin-page",
          "partial": "Page Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#t:PageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Clckwrks.Page.API\",\"Clckwrks.Page.Types\"]",
          "name": "PageId",
          "package": "clckwrks-plugin-page",
          "signature": "PageId",
          "source": "src/Clckwrks-Page-Types.html#PageId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:PageId\",\"http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:PageId\"]"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "PageId",
          "package": "clckwrks-plugin-page",
          "partial": "Page Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:PageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "extractExcerpt",
          "package": "clckwrks-plugin-page",
          "signature": "Page -\u003e ClckT url m Content",
          "source": "src/Clckwrks-Page-API.html#extractExcerpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "extractExcerpt",
          "normalized": "Page-\u003eClckT a b Content",
          "package": "clckwrks-plugin-page",
          "partial": "Excerpt",
          "signature": "Page-\u003eClckT url m Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:extractExcerpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "getBlogTitle",
          "package": "clckwrks-plugin-page",
          "signature": "PageM Text",
          "source": "src/Clckwrks-Page-API.html#getBlogTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "getBlogTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Blog Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:getBlogTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "getPageMenu",
          "package": "clckwrks-plugin-page",
          "signature": "GenXML PageM",
          "source": "src/Clckwrks-Page-API.html#getPageMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "getPageMenu",
          "package": "clckwrks-plugin-page",
          "partial": "Page Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:getPageMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "getPageSummary",
          "package": "clckwrks-plugin-page",
          "signature": "PageId -\u003e PageM Content",
          "source": "src/Clckwrks-Page-API.html#getPageSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "getPageSummary",
          "normalized": "PageId-\u003ePageM Content",
          "package": "clckwrks-plugin-page",
          "partial": "Page Summary",
          "signature": "PageId-\u003ePageM Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:getPageSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "getPagesSummary",
          "package": "clckwrks-plugin-page",
          "signature": "PageM [(PageId, Text, Maybe Slug, UTCTime, UserId, PublishStatus)]",
          "source": "src/Clckwrks-Page-API.html#getPagesSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "getPagesSummary",
          "normalized": "PageM[(PageId,Text,Maybe Slug,UTCTime,UserId,PublishStatus)]",
          "package": "clckwrks-plugin-page",
          "partial": "Pages Summary",
          "signature": "PageM[(PageId,Text,Maybe Slug,UTCTime,UserId,PublishStatus)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:getPagesSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "getPosts",
          "package": "clckwrks-plugin-page",
          "signature": "XMLGenT PageM [Page]",
          "source": "src/Clckwrks-Page-API.html#getPosts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "getPosts",
          "normalized": "XMLGenT PageM[Page]",
          "package": "clckwrks-plugin-page",
          "partial": "Posts",
          "signature": "XMLGenT PageM[Page]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:getPosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.API",
          "name": "googleAnalytics",
          "package": "clckwrks-plugin-page",
          "signature": "XMLGenT PageM XML",
          "source": "src/Clckwrks-Page-API.html#googleAnalytics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "googleAnalytics",
          "package": "clckwrks-plugin-page",
          "partial": "Analytics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:googleAnalytics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Clckwrks.Page.API\",\"Clckwrks.Page.Types\"]",
          "name": "unPageId",
          "package": "clckwrks-plugin-page",
          "signature": "Integer",
          "source": "src/Clckwrks-Page-Types.html#PageId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:unPageId\",\"http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:unPageId\"]"
        },
        "index": {
          "hierarchy": "Clckwrks Page API",
          "module": "Clckwrks.Page.API",
          "name": "unPageId",
          "package": "clckwrks-plugin-page",
          "partial": "Page Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-API.html#v:unPageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "Acid",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "Acid",
          "package": "clckwrks-plugin-page",
          "partial": "Acid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "AllPosts",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#AllPosts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "AllPosts",
          "package": "clckwrks-plugin-page",
          "partial": "All Posts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:AllPosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "AllPublishedPages",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#AllPublishedPages",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "AllPublishedPages",
          "package": "clckwrks-plugin-page",
          "partial": "All Published Pages",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:AllPublishedPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "ClearOldUACCT",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#ClearOldUACCT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "ClearOldUACCT",
          "package": "clckwrks-plugin-page",
          "partial": "Clear Old UACCT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:ClearOldUACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetBlogTitle",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#GetBlogTitle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetBlogTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Get Blog Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:GetBlogTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetFeedConfig",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#GetFeedConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Get Feed Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:GetFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetOldUACCT",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#GetOldUACCT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetOldUACCT",
          "package": "clckwrks-plugin-page",
          "partial": "Get Old UACCT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:GetOldUACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetPageTitle",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#GetPageTitle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetPageTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Get Page Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:GetPageTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "IsPublishedPage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#IsPublishedPage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "IsPublishedPage",
          "package": "clckwrks-plugin-page",
          "partial": "Is Published Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:IsPublishedPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#NewPage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "partial": "New Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:NewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "PageById",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#PageById",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "PageById",
          "package": "clckwrks-plugin-page",
          "partial": "Page By Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:PageById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "PageState",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#PageState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "PageState",
          "package": "clckwrks-plugin-page",
          "partial": "Page State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:PageState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "PagesSummary",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#PagesSummary",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "PagesSummary",
          "package": "clckwrks-plugin-page",
          "partial": "Pages Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:PagesSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "SetFeedConfig",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#SetFeedConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "SetFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Set Feed Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:SetFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "UpdatePage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Acid.html#UpdatePage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "UpdatePage",
          "package": "clckwrks-plugin-page",
          "partial": "Update Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#t:UpdatePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "AllPosts",
          "package": "clckwrks-plugin-page",
          "signature": "AllPosts",
          "source": "src/Clckwrks-Page-Acid.html#AllPosts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "AllPosts",
          "package": "clckwrks-plugin-page",
          "partial": "All Posts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:AllPosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "AllPublishedPages",
          "package": "clckwrks-plugin-page",
          "signature": "AllPublishedPages",
          "source": "src/Clckwrks-Page-Acid.html#AllPublishedPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "AllPublishedPages",
          "package": "clckwrks-plugin-page",
          "partial": "All Published Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:AllPublishedPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "ClearOldUACCT",
          "package": "clckwrks-plugin-page",
          "signature": "ClearOldUACCT",
          "source": "src/Clckwrks-Page-Acid.html#ClearOldUACCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "ClearOldUACCT",
          "package": "clckwrks-plugin-page",
          "partial": "Clear Old UACCT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:ClearOldUACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetBlogTitle",
          "package": "clckwrks-plugin-page",
          "signature": "GetBlogTitle",
          "source": "src/Clckwrks-Page-Acid.html#GetBlogTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetBlogTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Get Blog Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:GetBlogTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetFeedConfig",
          "package": "clckwrks-plugin-page",
          "signature": "GetFeedConfig",
          "source": "src/Clckwrks-Page-Acid.html#GetFeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Get Feed Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:GetFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetOldUACCT",
          "package": "clckwrks-plugin-page",
          "signature": "GetOldUACCT",
          "source": "src/Clckwrks-Page-Acid.html#GetOldUACCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetOldUACCT",
          "package": "clckwrks-plugin-page",
          "partial": "Get Old UACCT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:GetOldUACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "GetPageTitle",
          "package": "clckwrks-plugin-page",
          "signature": "GetPageTitle PageId",
          "source": "src/Clckwrks-Page-Acid.html#GetPageTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "GetPageTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Get Page Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:GetPageTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "IsPublishedPage",
          "package": "clckwrks-plugin-page",
          "signature": "IsPublishedPage PageId",
          "source": "src/Clckwrks-Page-Acid.html#IsPublishedPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "IsPublishedPage",
          "package": "clckwrks-plugin-page",
          "partial": "Is Published Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:IsPublishedPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "signature": "NewPage PageKind UserId UUID UTCTime",
          "source": "src/Clckwrks-Page-Acid.html#NewPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "partial": "New Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:NewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "PageById",
          "package": "clckwrks-plugin-page",
          "signature": "PageById PageId",
          "source": "src/Clckwrks-Page-Acid.html#PageById",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "PageById",
          "package": "clckwrks-plugin-page",
          "partial": "Page By Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:PageById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "PagesSummary",
          "package": "clckwrks-plugin-page",
          "signature": "PagesSummary",
          "source": "src/Clckwrks-Page-Acid.html#PagesSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "PagesSummary",
          "package": "clckwrks-plugin-page",
          "partial": "Pages Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:PagesSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "SetFeedConfig",
          "package": "clckwrks-plugin-page",
          "signature": "SetFeedConfig FeedConfig",
          "source": "src/Clckwrks-Page-Acid.html#SetFeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "SetFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Set Feed Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:SetFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "UpdatePage",
          "package": "clckwrks-plugin-page",
          "signature": "UpdatePage Page",
          "source": "src/Clckwrks-Page-Acid.html#UpdatePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "UpdatePage",
          "package": "clckwrks-plugin-page",
          "partial": "Update Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:UpdatePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Acid",
          "name": "initialPageState",
          "package": "clckwrks-plugin-page",
          "signature": "IO PageState",
          "source": "src/Clckwrks-Page-Acid.html#initialPageState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Acid",
          "module": "Clckwrks.Page.Acid",
          "name": "initialPageState",
          "package": "clckwrks-plugin-page",
          "partial": "Page State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Acid.html#v:initialPageState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.EditFeedConfig",
          "name": "EditFeedConfig",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Admin-EditFeedConfig.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin EditFeedConfig",
          "module": "Clckwrks.Page.Admin.EditFeedConfig",
          "name": "EditFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Edit Feed Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-EditFeedConfig.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.EditFeedConfig",
          "name": "editFeedConfig",
          "package": "clckwrks-plugin-page",
          "signature": "PageURL -\u003e PageM Response",
          "source": "src/Clckwrks-Page-Admin-EditFeedConfig.html#editFeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin EditFeedConfig",
          "module": "Clckwrks.Page.Admin.EditFeedConfig",
          "name": "editFeedConfig",
          "normalized": "PageURL-\u003ePageM Response",
          "package": "clckwrks-plugin-page",
          "partial": "Feed Config",
          "signature": "PageURL-\u003ePageM Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-EditFeedConfig.html#v:editFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.EditFeedConfig",
          "name": "feedConfigForm",
          "package": "clckwrks-plugin-page",
          "signature": "FeedConfig -\u003e PageForm FeedConfig",
          "source": "src/Clckwrks-Page-Admin-EditFeedConfig.html#feedConfigForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin EditFeedConfig",
          "module": "Clckwrks.Page.Admin.EditFeedConfig",
          "name": "feedConfigForm",
          "normalized": "FeedConfig-\u003ePageForm FeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Config Form",
          "signature": "FeedConfig-\u003ePageForm FeedConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-EditFeedConfig.html#v:feedConfigForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.EditPage",
          "name": "EditPage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Admin-EditPage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin EditPage",
          "module": "Clckwrks.Page.Admin.EditPage",
          "name": "EditPage",
          "package": "clckwrks-plugin-page",
          "partial": "Edit Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-EditPage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.EditPage",
          "name": "editPage",
          "package": "clckwrks-plugin-page",
          "signature": "PageURL -\u003e PageId -\u003e PageM Response",
          "source": "src/Clckwrks-Page-Admin-EditPage.html#editPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin EditPage",
          "module": "Clckwrks.Page.Admin.EditPage",
          "name": "editPage",
          "normalized": "PageURL-\u003ePageId-\u003ePageM Response",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "signature": "PageURL-\u003ePageId-\u003ePageM Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-EditPage.html#v:editPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.NewPage",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Admin-NewPage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin NewPage",
          "module": "Clckwrks.Page.Admin.NewPage",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "partial": "New Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-NewPage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.NewPage",
          "name": "newPage",
          "package": "clckwrks-plugin-page",
          "signature": "PageKind -\u003e PageM Response",
          "source": "src/Clckwrks-Page-Admin-NewPage.html#newPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin NewPage",
          "module": "Clckwrks.Page.Admin.NewPage",
          "name": "newPage",
          "normalized": "PageKind-\u003ePageM Response",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "signature": "PageKind-\u003ePageM Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-NewPage.html#v:newPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.Pages",
          "name": "Pages",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Admin-Pages.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin Pages",
          "module": "Clckwrks.Page.Admin.Pages",
          "name": "Pages",
          "package": "clckwrks-plugin-page",
          "partial": "Pages",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-Pages.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.Pages",
          "name": "editList",
          "package": "clckwrks-plugin-page",
          "signature": "[(PageId, Text, Maybe Slug, UTCTime, UserId, PublishStatus)] -\u003e GenChildList PageM",
          "source": "src/Clckwrks-Page-Admin-Pages.html#editList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin Pages",
          "module": "Clckwrks.Page.Admin.Pages",
          "name": "editList",
          "normalized": "[(PageId,Text,Maybe Slug,UTCTime,UserId,PublishStatus)]-\u003eGenChildList PageM",
          "package": "clckwrks-plugin-page",
          "partial": "List",
          "signature": "[(PageId,Text,Maybe Slug,UTCTime,UserId,PublishStatus)]-\u003eGenChildList PageM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-Pages.html#v:editList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.Pages",
          "name": "pages",
          "package": "clckwrks-plugin-page",
          "signature": "PageM Response",
          "source": "src/Clckwrks-Page-Admin-Pages.html#pages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin Pages",
          "module": "Clckwrks.Page.Admin.Pages",
          "name": "pages",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-Pages.html#v:pages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.PreviewPage",
          "name": "PreviewPage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Admin-PreviewPage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin PreviewPage",
          "module": "Clckwrks.Page.Admin.PreviewPage",
          "name": "PreviewPage",
          "package": "clckwrks-plugin-page",
          "partial": "Preview Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-PreviewPage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Admin.PreviewPage",
          "name": "previewPage",
          "package": "clckwrks-plugin-page",
          "signature": "PageId -\u003e PageM Response",
          "source": "src/Clckwrks-Page-Admin-PreviewPage.html#previewPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Admin PreviewPage",
          "module": "Clckwrks.Page.Admin.PreviewPage",
          "name": "previewPage",
          "normalized": "PageId-\u003ePageM Response",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "signature": "PageId-\u003ePageM Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Admin-PreviewPage.html#v:previewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "Atom",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Atom.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "Atom",
          "package": "clckwrks-plugin-page",
          "partial": "Atom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "atom",
          "package": "clckwrks-plugin-page",
          "signature": "FeedConfig -\u003e [Page] -\u003e PageM XML",
          "source": "src/Clckwrks-Page-Atom.html#atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "atom",
          "normalized": "FeedConfig-\u003e[Page]-\u003ePageM XML",
          "package": "clckwrks-plugin-page",
          "signature": "FeedConfig-\u003e[Page]-\u003ePageM XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "atomContent",
          "package": "clckwrks-plugin-page",
          "signature": "Markup -\u003e PageM XML",
          "source": "src/Clckwrks-Page-Atom.html#atomContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "atomContent",
          "normalized": "Markup-\u003ePageM XML",
          "package": "clckwrks-plugin-page",
          "partial": "Content",
          "signature": "Markup-\u003ePageM XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#v:atomContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "atomDate",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime -\u003e String",
          "source": "src/Clckwrks-Page-Atom.html#atomDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "atomDate",
          "normalized": "UTCTime-\u003eString",
          "package": "clckwrks-plugin-page",
          "partial": "Date",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#v:atomDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "entry",
          "package": "clckwrks-plugin-page",
          "signature": "Page -\u003e PageM XML",
          "source": "src/Clckwrks-Page-Atom.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "entry",
          "normalized": "Page-\u003ePageM XML",
          "package": "clckwrks-plugin-page",
          "signature": "Page-\u003ePageM XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "handleAtomFeed",
          "package": "clckwrks-plugin-page",
          "signature": "PageM Response",
          "source": "src/Clckwrks-Page-Atom.html#handleAtomFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "handleAtomFeed",
          "package": "clckwrks-plugin-page",
          "partial": "Atom Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#v:handleAtomFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Atom",
          "name": "mostRecentUpdate",
          "package": "clckwrks-plugin-page",
          "signature": "[Page] -\u003e UTCTime",
          "source": "src/Clckwrks-Page-Atom.html#mostRecentUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Atom",
          "module": "Clckwrks.Page.Atom",
          "name": "mostRecentUpdate",
          "normalized": "[Page]-\u003eUTCTime",
          "package": "clckwrks-plugin-page",
          "partial": "Recent Update",
          "signature": "[Page]-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Atom.html#v:mostRecentUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.BlogPage",
          "name": "BlogPage",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-BlogPage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page BlogPage",
          "module": "Clckwrks.Page.BlogPage",
          "name": "BlogPage",
          "package": "clckwrks-plugin-page",
          "partial": "Blog Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-BlogPage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.BlogPage",
          "name": "blog",
          "package": "clckwrks-plugin-page",
          "signature": "PageM Response",
          "source": "src/Clckwrks-Page-BlogPage.html#blog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page BlogPage",
          "module": "Clckwrks.Page.BlogPage",
          "name": "blog",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-BlogPage.html#v:blog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.BlogPage",
          "name": "postHTML",
          "package": "clckwrks-plugin-page",
          "signature": "Page -\u003e XMLGenT PageM XML",
          "source": "src/Clckwrks-Page-BlogPage.html#postHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page BlogPage",
          "module": "Clckwrks.Page.BlogPage",
          "name": "postHTML",
          "normalized": "Page-\u003eXMLGenT PageM XML",
          "package": "clckwrks-plugin-page",
          "partial": "HTML",
          "signature": "Page-\u003eXMLGenT PageM XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-BlogPage.html#v:postHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.BlogPage",
          "name": "postsHTML",
          "package": "clckwrks-plugin-page",
          "signature": "XMLGenT PageM XML",
          "source": "src/Clckwrks-Page-BlogPage.html#postsHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page BlogPage",
          "module": "Clckwrks.Page.BlogPage",
          "name": "postsHTML",
          "package": "clckwrks-plugin-page",
          "partial": "HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-BlogPage.html#v:postsHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "Monad",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "Monad",
          "package": "clckwrks-plugin-page",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageAdminM",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageAdminM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageAdminM",
          "package": "clckwrks-plugin-page",
          "partial": "Page Admin",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageAdminM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageConfig",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Page Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageForm",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageForm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageForm",
          "package": "clckwrks-plugin-page",
          "partial": "Page Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageFormError",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageFormError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageFormError",
          "package": "clckwrks-plugin-page",
          "partial": "Page Form Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageFormError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageM",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageM",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageT",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageT",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageT'",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Monad.html#PageT%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageT'",
          "package": "clckwrks-plugin-page",
          "partial": "Page T'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#t:PageT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageCFE",
          "package": "clckwrks-plugin-page",
          "signature": "PageCFE (CommonFormError [Input])",
          "source": "src/Clckwrks-Page-Monad.html#PageFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageCFE",
          "normalized": "PageCFE(CommonFormError[Input])",
          "package": "clckwrks-plugin-page",
          "partial": "Page CFE",
          "signature": "PageCFE(CommonFormError[Input])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:PageCFE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageConfig",
          "package": "clckwrks-plugin-page",
          "signature": "PageConfig",
          "source": "src/Clckwrks-Page-Monad.html#PageConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Page Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:PageConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "PageErrorInternal",
          "package": "clckwrks-plugin-page",
          "signature": "PageErrorInternal",
          "source": "src/Clckwrks-Page-Monad.html#PageFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "PageErrorInternal",
          "package": "clckwrks-plugin-page",
          "partial": "Page Error Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:PageErrorInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "clckT2PageT",
          "package": "clckwrks-plugin-page",
          "signature": "ClckT url1 m a -\u003e PageT m a",
          "source": "src/Clckwrks-Page-Monad.html#clckT2PageT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "clckT2PageT",
          "normalized": "ClckT a b c-\u003ePageT b c",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "signature": "ClckT url m a-\u003ePageT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:clckT2PageT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "flattenURLClckT",
          "package": "clckwrks-plugin-page",
          "signature": "(url1 -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e ClckT url1 m a -\u003e ClckT url2 m a",
          "source": "src/Clckwrks-Page-Monad.html#flattenURLClckT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "flattenURLClckT",
          "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eClckT a b c-\u003eClckT a b c",
          "package": "clckwrks-plugin-page",
          "partial": "URLClck",
          "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eClckT url m a-\u003eClckT url m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:flattenURLClckT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert \u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eContent\u003c/a\u003e\u003c/code\u003e that can be embedded. Generally by running the pre-processors needed.\n markupToContent :: (Functor m, MonadIO m, Happstack m) =\u003e Markup -\u003e ClckT url m Content\n\u003c/p\u003e",
          "module": "Clckwrks.Page.Monad",
          "name": "markupToContent",
          "package": "clckwrks-plugin-page",
          "signature": "Markup -\u003e ClckT url m Content",
          "source": "src/Clckwrks-Page-Monad.html#markupToContent",
          "type": "function"
        },
        "index": {
          "description": "convert Markup to Content that can be embedded Generally by running the pre-processors needed markupToContent Functor MonadIO Happstack Markup ClckT url Content",
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "markupToContent",
          "normalized": "Markup-\u003eClckT a b Content",
          "package": "clckwrks-plugin-page",
          "partial": "To Content",
          "signature": "Markup-\u003eClckT url m Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:markupToContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "pageClckURL",
          "package": "clckwrks-plugin-page",
          "signature": "ClckURL -\u003e [(Text, Maybe Text)] -\u003e Text",
          "source": "src/Clckwrks-Page-Monad.html#PageConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "pageClckURL",
          "normalized": "ClckURL-\u003e[(Text,Maybe Text)]-\u003eText",
          "package": "clckwrks-plugin-page",
          "partial": "Clck URL",
          "signature": "ClckURL-\u003e[(Text,Maybe Text)]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:pageClckURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "pageState",
          "package": "clckwrks-plugin-page",
          "signature": "AcidState PageState",
          "source": "src/Clckwrks-Page-Monad.html#PageConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "pageState",
          "package": "clckwrks-plugin-page",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:pageState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "runPageT",
          "package": "clckwrks-plugin-page",
          "signature": "PageConfig -\u003e PageT m a -\u003e ClckT PageURL m a",
          "source": "src/Clckwrks-Page-Monad.html#runPageT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "runPageT",
          "normalized": "PageConfig-\u003ePageT a b-\u003eClckT PageURL a b",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "signature": "PageConfig-\u003ePageT m a-\u003eClckT PageURL m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:runPageT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Monad",
          "name": "runPageT''",
          "package": "clckwrks-plugin-page",
          "signature": "(PageURL -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e PageConfig -\u003e PageT m a -\u003e ClckT url m a",
          "source": "src/Clckwrks-Page-Monad.html#runPageT%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Monad",
          "module": "Clckwrks.Page.Monad",
          "name": "runPageT''",
          "normalized": "(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ePageConfig-\u003ePageT a b-\u003eClckT c a b",
          "package": "clckwrks-plugin-page",
          "partial": "Page T''",
          "signature": "(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ePageConfig-\u003ePageT m a-\u003eClckT url m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Monad.html#v:runPageT-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.NavBarCallback",
          "name": "NavBarCallback",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-NavBarCallback.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page NavBarCallback",
          "module": "Clckwrks.Page.NavBarCallback",
          "name": "NavBarCallback",
          "package": "clckwrks-plugin-page",
          "partial": "Nav Bar Callback",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-NavBarCallback.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.NavBarCallback",
          "name": "navBarCallback",
          "package": "clckwrks-plugin-page",
          "signature": "AcidState PageState -\u003e (PageURL -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e ClckT ClckURL IO (String, [NamedLink])",
          "source": "src/Clckwrks-Page-NavBarCallback.html#navBarCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page NavBarCallback",
          "module": "Clckwrks.Page.NavBarCallback",
          "name": "navBarCallback",
          "normalized": "AcidState PageState-\u003e(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eClckT ClckURL IO(String,[NamedLink])",
          "package": "clckwrks-plugin-page",
          "partial": "Bar Callback",
          "signature": "AcidState PageState-\u003e(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eClckT ClckURL IO(String,[NamedLink])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-NavBarCallback.html#v:navBarCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "Plugin",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Plugin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "Plugin",
          "package": "clckwrks-plugin-page",
          "partial": "Plugin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "addPageAdminMenu",
          "package": "clckwrks-plugin-page",
          "signature": "ClckT url IO ()",
          "source": "src/Clckwrks-Page-Plugin.html#addPageAdminMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "addPageAdminMenu",
          "normalized": "ClckT a IO()",
          "package": "clckwrks-plugin-page",
          "partial": "Page Admin Menu",
          "signature": "ClckT url IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#v:addPageAdminMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "migrateUACCT",
          "package": "clckwrks-plugin-page",
          "signature": "AcidState PageState -\u003e ClckT url IO ()",
          "source": "src/Clckwrks-Page-Plugin.html#migrateUACCT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "migrateUACCT",
          "normalized": "AcidState PageState-\u003eClckT a IO()",
          "package": "clckwrks-plugin-page",
          "partial": "UACCT",
          "signature": "AcidState PageState-\u003eClckT url IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#v:migrateUACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "pageHandler",
          "package": "clckwrks-plugin-page",
          "signature": "(PageURL -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e PageConfig -\u003e ClckPlugins -\u003e [Text] -\u003e ClckT ClckURL (ServerPartT IO) Response",
          "source": "src/Clckwrks-Page-Plugin.html#pageHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "pageHandler",
          "normalized": "(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ePageConfig-\u003eClckPlugins-\u003e[Text]-\u003eClckT ClckURL(ServerPartT IO)Response",
          "package": "clckwrks-plugin-page",
          "partial": "Handler",
          "signature": "(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ePageConfig-\u003eClckPlugins-\u003e[Text]-\u003eClckT ClckURL(ServerPartT IO)Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#v:pageHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "pageInit",
          "package": "clckwrks-plugin-page",
          "signature": "ClckPlugins -\u003e IO (Maybe Text)",
          "source": "src/Clckwrks-Page-Plugin.html#pageInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "pageInit",
          "normalized": "ClckPlugins-\u003eIO(Maybe Text)",
          "package": "clckwrks-plugin-page",
          "partial": "Init",
          "signature": "ClckPlugins-\u003eIO(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#v:pageInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "pagePlugin",
          "package": "clckwrks-plugin-page",
          "signature": "Plugin PageURL Theme (ClckT ClckURL (ServerPartT IO) Response) (ClckT ClckURL IO ()) ClckwrksConfig ClckPluginsSt",
          "source": "src/Clckwrks-Page-Plugin.html#pagePlugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "pagePlugin",
          "normalized": "Plugin PageURL Theme(ClckT ClckURL(ServerPartT IO)Response)(ClckT ClckURL IO())ClckwrksConfig ClckPluginsSt",
          "package": "clckwrks-plugin-page",
          "partial": "Plugin",
          "signature": "Plugin PageURL Theme(ClckT ClckURL(ServerPartT IO)Response)(ClckT ClckURL IO())ClckwrksConfig ClckPluginsSt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#v:pagePlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Plugin",
          "name": "plugin",
          "package": "clckwrks-plugin-page",
          "signature": "ClckPlugins-\u003e Text-\u003e IO (Maybe Text)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Plugin",
          "module": "Clckwrks.Page.Plugin",
          "name": "plugin",
          "normalized": "ClckPlugins-\u003eText-\u003eIO(Maybe Text)",
          "package": "clckwrks-plugin-page",
          "signature": "ClckPlugins-\u003eText-\u003eIO(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Plugin.html#v:plugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "PreProcess",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-PreProcess.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "PreProcess",
          "package": "clckwrks-plugin-page",
          "partial": "Pre Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "PageCmd",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-PreProcess.html#PageCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "PageCmd",
          "package": "clckwrks-plugin-page",
          "partial": "Page Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#t:PageCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "PageLink",
          "package": "clckwrks-plugin-page",
          "signature": "PageLink PageId (Maybe Text) Bool",
          "source": "src/Clckwrks-Page-PreProcess.html#PageCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "PageLink",
          "package": "clckwrks-plugin-page",
          "partial": "Page Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:PageLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "PageTitle",
          "package": "clckwrks-plugin-page",
          "signature": "PageTitle PageId",
          "source": "src/Clckwrks-Page-PreProcess.html#PageCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "PageTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Page Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:PageTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "applyCmd",
          "package": "clckwrks-plugin-page",
          "signature": "AcidState (EventState GetPageTitle) -\u003e (PageURL -\u003e [a] -\u003e Text) -\u003e PageCmd -\u003e m Builder",
          "source": "src/Clckwrks-Page-PreProcess.html#applyCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "applyCmd",
          "normalized": "AcidState(EventState GetPageTitle)-\u003e(PageURL-\u003e[a]-\u003eText)-\u003ePageCmd-\u003eb Builder",
          "package": "clckwrks-plugin-page",
          "partial": "Cmd",
          "signature": "AcidState(EventState GetPageTitle)-\u003e(PageURL-\u003e[a]-\u003eText)-\u003ePageCmd-\u003em Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:applyCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "pageCmd",
          "package": "clckwrks-plugin-page",
          "signature": "AcidState PageState -\u003e (PageURL -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e Text -\u003e ClckT url m Text",
          "source": "src/Clckwrks-Page-PreProcess.html#pageCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "pageCmd",
          "normalized": "AcidState PageState-\u003e(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eText-\u003eClckT a b Text",
          "package": "clckwrks-plugin-page",
          "partial": "Cmd",
          "signature": "AcidState PageState-\u003e(PageURL-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eText-\u003eClckT url m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:pageCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "parseAttr",
          "package": "clckwrks-plugin-page",
          "signature": "Text -\u003e Parser ()",
          "source": "src/Clckwrks-Page-PreProcess.html#parseAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "parseAttr",
          "normalized": "Text-\u003eParser()",
          "package": "clckwrks-plugin-page",
          "partial": "Attr",
          "signature": "Text-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:parseAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "parseCmd",
          "package": "clckwrks-plugin-page",
          "signature": "Parser PageCmd",
          "source": "src/Clckwrks-Page-PreProcess.html#parseCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "parseCmd",
          "package": "clckwrks-plugin-page",
          "partial": "Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:parseCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "qchar",
          "package": "clckwrks-plugin-page",
          "signature": "Parser Char",
          "source": "src/Clckwrks-Page-PreProcess.html#qchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "qchar",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:qchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "qtext",
          "package": "clckwrks-plugin-page",
          "signature": "Parser Text",
          "source": "src/Clckwrks-Page-PreProcess.html#qtext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "qtext",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:qtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.PreProcess",
          "name": "text",
          "package": "clckwrks-plugin-page",
          "signature": "Parser Text",
          "source": "src/Clckwrks-Page-PreProcess.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page PreProcess",
          "module": "Clckwrks.Page.PreProcess",
          "name": "text",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-PreProcess.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Route",
          "name": "Route",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Route.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Route",
          "module": "Clckwrks.Page.Route",
          "name": "Route",
          "package": "clckwrks-plugin-page",
          "partial": "Route",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Route.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Route",
          "name": "checkAuth",
          "package": "clckwrks-plugin-page",
          "signature": "PageURL -\u003e PageM PageURL",
          "source": "src/Clckwrks-Page-Route.html#checkAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Route",
          "module": "Clckwrks.Page.Route",
          "name": "checkAuth",
          "normalized": "PageURL-\u003ePageM PageURL",
          "package": "clckwrks-plugin-page",
          "partial": "Auth",
          "signature": "PageURL-\u003ePageM PageURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Route.html#v:checkAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Route",
          "name": "routePage",
          "package": "clckwrks-plugin-page",
          "signature": "PageURL -\u003e PageM Response",
          "source": "src/Clckwrks-Page-Route.html#routePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Route",
          "module": "Clckwrks.Page.Route",
          "name": "routePage",
          "normalized": "PageURL-\u003ePageM Response",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "signature": "PageURL-\u003ePageM Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Route.html#v:routePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eroutes for \u003ccode\u003eAdminURL\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Clckwrks.Page.Route",
          "name": "routePageAdmin",
          "package": "clckwrks-plugin-page",
          "signature": "PageAdminURL -\u003e PageM Response",
          "source": "src/Clckwrks-Page-Route.html#routePageAdmin",
          "type": "function"
        },
        "index": {
          "description": "routes for AdminURL",
          "hierarchy": "Clckwrks Page Route",
          "module": "Clckwrks.Page.Route",
          "name": "routePageAdmin",
          "normalized": "PageAdminURL-\u003ePageM Response",
          "package": "clckwrks-plugin-page",
          "partial": "Page Admin",
          "signature": "PageAdminURL-\u003ePageM Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Route.html#v:routePageAdmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Types",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Types",
          "package": "clckwrks-plugin-page",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "FeedConfig",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#FeedConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "FeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Feed Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:FeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Markup",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Markup",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Markup",
          "package": "clckwrks-plugin-page",
          "partial": "Markup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Markup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Markup_001",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Markup_001",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Markup_001",
          "package": "clckwrks-plugin-page",
          "partial": "Markup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Markup_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "PageId",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#PageId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "PageId",
          "package": "clckwrks-plugin-page",
          "partial": "Page Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:PageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "PageKind",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#PageKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "PageKind",
          "package": "clckwrks-plugin-page",
          "partial": "Page Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:PageKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page_001",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page_001",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Page_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page_002",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page_002",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Page_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page_3",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page_3",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Page_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Pages",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Pages",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Pages",
          "package": "clckwrks-plugin-page",
          "partial": "Pages",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Pages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "PreProcessor",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#PreProcessor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "PreProcessor",
          "package": "clckwrks-plugin-page",
          "partial": "Pre Processor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:PreProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "PublishStatus",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#PublishStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "PublishStatus",
          "package": "clckwrks-plugin-page",
          "partial": "Publish Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:PublishStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Slug",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-Types.html#Slug",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Slug",
          "package": "clckwrks-plugin-page",
          "partial": "Slug",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#t:Slug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Draft",
          "package": "clckwrks-plugin-page",
          "signature": "Draft",
          "source": "src/Clckwrks-Page-Types.html#PublishStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Draft",
          "package": "clckwrks-plugin-page",
          "partial": "Draft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Draft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "FeedConfig",
          "package": "clckwrks-plugin-page",
          "signature": "FeedConfig",
          "source": "src/Clckwrks-Page-Types.html#FeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "FeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Feed Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:FeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "HsColour",
          "package": "clckwrks-plugin-page",
          "signature": "HsColour",
          "source": "src/Clckwrks-Page-Types.html#PreProcessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "HsColour",
          "package": "clckwrks-plugin-page",
          "partial": "Hs Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:HsColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Markdown",
          "package": "clckwrks-plugin-page",
          "signature": "Markdown",
          "source": "src/Clckwrks-Page-Types.html#PreProcessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Markdown",
          "package": "clckwrks-plugin-page",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Markup",
          "package": "clckwrks-plugin-page",
          "signature": "Markup",
          "source": "src/Clckwrks-Page-Types.html#Markup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Markup",
          "package": "clckwrks-plugin-page",
          "partial": "Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Markup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Markup_001",
          "package": "clckwrks-plugin-page",
          "signature": "Markup_001",
          "source": "src/Clckwrks-Page-Types.html#Markup_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Markup_001",
          "package": "clckwrks-plugin-page",
          "partial": "Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Markup_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page",
          "package": "clckwrks-plugin-page",
          "signature": "Page",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page_001",
          "package": "clckwrks-plugin-page",
          "signature": "Page_001",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page_001",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Page_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page_002",
          "package": "clckwrks-plugin-page",
          "signature": "Page_002",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page_002",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Page_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Page_3",
          "package": "clckwrks-plugin-page",
          "signature": "Page_3",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Page_3",
          "package": "clckwrks-plugin-page",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Page_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "PlainPage",
          "package": "clckwrks-plugin-page",
          "signature": "PlainPage",
          "source": "src/Clckwrks-Page-Types.html#PageKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "PlainPage",
          "package": "clckwrks-plugin-page",
          "partial": "Plain Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:PlainPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Post",
          "package": "clckwrks-plugin-page",
          "signature": "Post",
          "source": "src/Clckwrks-Page-Types.html#PageKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Post",
          "package": "clckwrks-plugin-page",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Published",
          "package": "clckwrks-plugin-page",
          "signature": "Published",
          "source": "src/Clckwrks-Page-Types.html#PublishStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Published",
          "package": "clckwrks-plugin-page",
          "partial": "Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Published"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Revoked",
          "package": "clckwrks-plugin-page",
          "signature": "Revoked",
          "source": "src/Clckwrks-Page-Types.html#PublishStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Revoked",
          "package": "clckwrks-plugin-page",
          "partial": "Revoked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Revoked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Scheduled",
          "package": "clckwrks-plugin-page",
          "signature": "Scheduled",
          "source": "src/Clckwrks-Page-Types.html#PublishStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Scheduled",
          "package": "clckwrks-plugin-page",
          "partial": "Scheduled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Scheduled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "Slug",
          "package": "clckwrks-plugin-page",
          "signature": "Slug",
          "source": "src/Clckwrks-Page-Types.html#Slug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "Slug",
          "package": "clckwrks-plugin-page",
          "partial": "Slug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:Slug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "feedAuthorName",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#FeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "feedAuthorName",
          "package": "clckwrks-plugin-page",
          "partial": "Author Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:feedAuthorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "feedLink",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#FeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "feedLink",
          "package": "clckwrks-plugin-page",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:feedLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "feedTitle",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#FeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "feedTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:feedTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUUID which identifies this feed. Should probably never change\n    , feedCategory :: Set Text\n\u003c/p\u003e",
          "module": "Clckwrks.Page.Types",
          "name": "feedUUID",
          "package": "clckwrks-plugin-page",
          "signature": "UUID",
          "source": "src/Clckwrks-Page-Types.html#FeedConfig",
          "type": "function"
        },
        "index": {
          "description": "UUID which identifies this feed Should probably never change feedCategory Set Text",
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "feedUUID",
          "package": "clckwrks-plugin-page",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:feedUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "initialFeedConfig",
          "package": "clckwrks-plugin-page",
          "signature": "IO FeedConfig",
          "source": "src/Clckwrks-Page-Types.html#initialFeedConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "initialFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Feed Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:initialFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "markup",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Markup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "markup",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:markup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "markup_001",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Markup_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "markup_001",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:markup_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageAuthor",
          "package": "clckwrks-plugin-page",
          "signature": "UserId",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageAuthor",
          "package": "clckwrks-plugin-page",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageAuthor_002",
          "package": "clckwrks-plugin-page",
          "signature": "UserId",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageAuthor_002",
          "package": "clckwrks-plugin-page",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageAuthor_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageAuthor_3",
          "package": "clckwrks-plugin-page",
          "signature": "UserId",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageAuthor_3",
          "package": "clckwrks-plugin-page",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageAuthor_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageDate",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageDate",
          "package": "clckwrks-plugin-page",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageDate_001",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageDate_001",
          "package": "clckwrks-plugin-page",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageDate_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageDate_002",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageDate_002",
          "package": "clckwrks-plugin-page",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageDate_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageDate_3",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageDate_3",
          "package": "clckwrks-plugin-page",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageDate_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe Markup",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt",
          "package": "clckwrks-plugin-page",
          "partial": "Excerpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageExcerpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt_001",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe Markup",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt_001",
          "package": "clckwrks-plugin-page",
          "partial": "Excerpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageExcerpt_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt_002",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe Markup",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt_002",
          "package": "clckwrks-plugin-page",
          "partial": "Excerpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageExcerpt_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt_3",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe Markup",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageExcerpt_3",
          "package": "clckwrks-plugin-page",
          "partial": "Excerpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageExcerpt_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageId",
          "package": "clckwrks-plugin-page",
          "signature": "PageId",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageId",
          "package": "clckwrks-plugin-page",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageId_001",
          "package": "clckwrks-plugin-page",
          "signature": "PageId",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageId_001",
          "package": "clckwrks-plugin-page",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageId_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageId_002",
          "package": "clckwrks-plugin-page",
          "signature": "PageId",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageId_002",
          "package": "clckwrks-plugin-page",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageId_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageId_3",
          "package": "clckwrks-plugin-page",
          "signature": "PageId",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageId_3",
          "package": "clckwrks-plugin-page",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageId_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageKind",
          "package": "clckwrks-plugin-page",
          "signature": "PageKind",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageKind",
          "package": "clckwrks-plugin-page",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageKind_001",
          "package": "clckwrks-plugin-page",
          "signature": "PageKind",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageKind_001",
          "package": "clckwrks-plugin-page",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageKind_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageKind_002",
          "package": "clckwrks-plugin-page",
          "signature": "PageKind",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageKind_002",
          "package": "clckwrks-plugin-page",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageKind_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageKind_3",
          "package": "clckwrks-plugin-page",
          "signature": "PageKind",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageKind_3",
          "package": "clckwrks-plugin-page",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageKind_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageSlug",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe Slug",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageSlug",
          "package": "clckwrks-plugin-page",
          "partial": "Slug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageSlug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageSlug_3",
          "package": "clckwrks-plugin-page",
          "signature": "Maybe Slug",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageSlug_3",
          "package": "clckwrks-plugin-page",
          "partial": "Slug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageSlug_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc",
          "package": "clckwrks-plugin-page",
          "signature": "Markup",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc",
          "package": "clckwrks-plugin-page",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc_001",
          "package": "clckwrks-plugin-page",
          "signature": "Markup",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc_001",
          "package": "clckwrks-plugin-page",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageSrc_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc_002",
          "package": "clckwrks-plugin-page",
          "signature": "Markup",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc_002",
          "package": "clckwrks-plugin-page",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageSrc_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc_3",
          "package": "clckwrks-plugin-page",
          "signature": "Markup",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageSrc_3",
          "package": "clckwrks-plugin-page",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageSrc_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus",
          "package": "clckwrks-plugin-page",
          "signature": "PublishStatus",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus",
          "package": "clckwrks-plugin-page",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus_001",
          "package": "clckwrks-plugin-page",
          "signature": "PublishStatus",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus_001",
          "package": "clckwrks-plugin-page",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageStatus_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus_002",
          "package": "clckwrks-plugin-page",
          "signature": "PublishStatus",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus_002",
          "package": "clckwrks-plugin-page",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageStatus_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus_3",
          "package": "clckwrks-plugin-page",
          "signature": "PublishStatus",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageStatus_3",
          "package": "clckwrks-plugin-page",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageStatus_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageThemeStyleId",
          "package": "clckwrks-plugin-page",
          "signature": "ThemeStyleId",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageThemeStyleId",
          "package": "clckwrks-plugin-page",
          "partial": "Theme Style Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageThemeStyleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle",
          "package": "clckwrks-plugin-page",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle_001",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Page_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle_001",
          "package": "clckwrks-plugin-page",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageTitle_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle_002",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle_002",
          "package": "clckwrks-plugin-page",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageTitle_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle_3",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageTitle_3",
          "package": "clckwrks-plugin-page",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageTitle_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageUUID",
          "package": "clckwrks-plugin-page",
          "signature": "UUID",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageUUID",
          "package": "clckwrks-plugin-page",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageUUID_002",
          "package": "clckwrks-plugin-page",
          "signature": "UUID",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageUUID_002",
          "package": "clckwrks-plugin-page",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageUUID_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageUUID_3",
          "package": "clckwrks-plugin-page",
          "signature": "UUID",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageUUID_3",
          "package": "clckwrks-plugin-page",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageUUID_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageUpdated",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageUpdated",
          "package": "clckwrks-plugin-page",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageUpdated_002",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page_002",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageUpdated_002",
          "package": "clckwrks-plugin-page",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageUpdated_002"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "pageUpdated_3",
          "package": "clckwrks-plugin-page",
          "signature": "UTCTime",
          "source": "src/Clckwrks-Page-Types.html#Page_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "pageUpdated_3",
          "package": "clckwrks-plugin-page",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:pageUpdated_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "preProcessors",
          "package": "clckwrks-plugin-page",
          "signature": "[PreProcessor]",
          "source": "src/Clckwrks-Page-Types.html#Markup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "preProcessors",
          "normalized": "[PreProcessor]",
          "package": "clckwrks-plugin-page",
          "partial": "Processors",
          "signature": "[PreProcessor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:preProcessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "preProcessors_001",
          "package": "clckwrks-plugin-page",
          "signature": "[PreProcessor]",
          "source": "src/Clckwrks-Page-Types.html#Markup_001",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "preProcessors_001",
          "normalized": "[PreProcessor]",
          "package": "clckwrks-plugin-page",
          "partial": "Processors",
          "signature": "[PreProcessor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:preProcessors_001"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "publishStatusString",
          "package": "clckwrks-plugin-page",
          "signature": "PublishStatus -\u003e String",
          "source": "src/Clckwrks-Page-Types.html#publishStatusString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "publishStatusString",
          "normalized": "PublishStatus-\u003eString",
          "package": "clckwrks-plugin-page",
          "partial": "Status String",
          "signature": "PublishStatus-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:publishStatusString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "runPreProcessor",
          "package": "clckwrks-plugin-page",
          "signature": "PreProcessor -\u003e Trust -\u003e Text -\u003e m (Either Text Text)",
          "source": "src/Clckwrks-Page-Types.html#runPreProcessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "runPreProcessor",
          "normalized": "PreProcessor-\u003eTrust-\u003eText-\u003ea(Either Text Text)",
          "package": "clckwrks-plugin-page",
          "partial": "Pre Processor",
          "signature": "PreProcessor-\u003eTrust-\u003eText-\u003em(Either Text Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:runPreProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "runPreProcessors",
          "package": "clckwrks-plugin-page",
          "signature": "[PreProcessor] -\u003e Trust -\u003e Text -\u003e m (Either Text Text)",
          "source": "src/Clckwrks-Page-Types.html#runPreProcessors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "runPreProcessors",
          "normalized": "[PreProcessor]-\u003eTrust-\u003eText-\u003ea(Either Text Text)",
          "package": "clckwrks-plugin-page",
          "partial": "Pre Processors",
          "signature": "[PreProcessor]-\u003eTrust-\u003eText-\u003em(Either Text Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:runPreProcessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "slugify",
          "package": "clckwrks-plugin-page",
          "signature": "Text -\u003e Slug",
          "source": "src/Clckwrks-Page-Types.html#slugify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "slugify",
          "normalized": "Text-\u003eSlug",
          "package": "clckwrks-plugin-page",
          "signature": "Text-\u003eSlug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:slugify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "toSlug",
          "package": "clckwrks-plugin-page",
          "signature": "Text -\u003e Maybe Slug -\u003e Slug",
          "source": "src/Clckwrks-Page-Types.html#toSlug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "toSlug",
          "normalized": "Text-\u003eMaybe Slug-\u003eSlug",
          "package": "clckwrks-plugin-page",
          "partial": "Slug",
          "signature": "Text-\u003eMaybe Slug-\u003eSlug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:toSlug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "trust",
          "package": "clckwrks-plugin-page",
          "signature": "Trust",
          "source": "src/Clckwrks-Page-Types.html#Markup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "trust",
          "package": "clckwrks-plugin-page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:trust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.Types",
          "name": "unSlug",
          "package": "clckwrks-plugin-page",
          "signature": "Text",
          "source": "src/Clckwrks-Page-Types.html#Slug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page Types",
          "module": "Clckwrks.Page.Types",
          "name": "unSlug",
          "package": "clckwrks-plugin-page",
          "partial": "Slug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-Types.html#v:unSlug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "URL",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-URL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "URL",
          "package": "clckwrks-plugin-page",
          "partial": "URL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "PageAdminURL",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "PageAdminURL",
          "package": "clckwrks-plugin-page",
          "partial": "Page Admin URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#t:PageAdminURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "PageURL",
          "package": "clckwrks-plugin-page",
          "source": "src/Clckwrks-Page-URL.html#PageURL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "PageURL",
          "package": "clckwrks-plugin-page",
          "partial": "Page URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#t:PageURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "AtomFeed",
          "package": "clckwrks-plugin-page",
          "signature": "AtomFeed",
          "source": "src/Clckwrks-Page-URL.html#PageURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "AtomFeed",
          "package": "clckwrks-plugin-page",
          "partial": "Atom Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:AtomFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "Blog",
          "package": "clckwrks-plugin-page",
          "signature": "Blog",
          "source": "src/Clckwrks-Page-URL.html#PageURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "Blog",
          "package": "clckwrks-plugin-page",
          "partial": "Blog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:Blog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "EditFeedConfig",
          "package": "clckwrks-plugin-page",
          "signature": "EditFeedConfig",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "EditFeedConfig",
          "package": "clckwrks-plugin-page",
          "partial": "Edit Feed Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:EditFeedConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "EditPage",
          "package": "clckwrks-plugin-page",
          "signature": "EditPage PageId",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "EditPage",
          "package": "clckwrks-plugin-page",
          "partial": "Edit Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:EditPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "signature": "NewPage",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "NewPage",
          "package": "clckwrks-plugin-page",
          "partial": "New Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:NewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "NewPost",
          "package": "clckwrks-plugin-page",
          "signature": "NewPost",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "NewPost",
          "package": "clckwrks-plugin-page",
          "partial": "New Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:NewPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "PageAdmin",
          "package": "clckwrks-plugin-page",
          "signature": "PageAdmin PageAdminURL",
          "source": "src/Clckwrks-Page-URL.html#PageURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "PageAdmin",
          "package": "clckwrks-plugin-page",
          "partial": "Page Admin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:PageAdmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "Pages",
          "package": "clckwrks-plugin-page",
          "signature": "Pages",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "Pages",
          "package": "clckwrks-plugin-page",
          "partial": "Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:Pages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "PreviewPage",
          "package": "clckwrks-plugin-page",
          "signature": "PreviewPage PageId",
          "source": "src/Clckwrks-Page-URL.html#PageAdminURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "PreviewPage",
          "package": "clckwrks-plugin-page",
          "partial": "Preview Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:PreviewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "ViewPage",
          "package": "clckwrks-plugin-page",
          "signature": "ViewPage PageId",
          "source": "src/Clckwrks-Page-URL.html#PageURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "ViewPage",
          "package": "clckwrks-plugin-page",
          "partial": "View Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:ViewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clckwrks.Page.URL",
          "name": "ViewPageSlug",
          "package": "clckwrks-plugin-page",
          "signature": "ViewPageSlug PageId Slug",
          "source": "src/Clckwrks-Page-URL.html#PageURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clckwrks Page URL",
          "module": "Clckwrks.Page.URL",
          "name": "ViewPageSlug",
          "package": "clckwrks-plugin-page",
          "partial": "View Page Slug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clckwrks-plugin-page/docs/Clckwrks-Page-URL.html#v:ViewPageSlug"
      }
    }
  ]
]