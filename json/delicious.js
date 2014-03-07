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
        "word": "delicious"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple GET/de-ref of URLs; abstracting out networking backend/package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Delicious.Fetch",
          "name": "Fetch",
          "package": "delicious",
          "source": "src/Network-Delicious-Fetch.html",
          "type": "module"
        },
        "index": {
          "description": "Simple GET de-ref of URLs abstracting out networking backend package",
          "hierarchy": "Network Delicious Fetch",
          "module": "Network.Delicious.Fetch",
          "name": "Fetch",
          "package": "delicious",
          "partial": "Fetch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Fetch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Fetch",
          "name": "URLString",
          "package": "delicious",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Delicious Fetch",
          "module": "Network.Delicious.Fetch",
          "name": "URLString",
          "package": "delicious",
          "partial": "URLString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Fetch.html#t:URLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadContentsURL\u003c/code\u003e fetches the content from the given URL, \u003ccode\u003eu\u003c/code\u003e.\n Via a standard, non-authenticated, \u003ccode\u003eGET\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Delicious.Fetch",
          "name": "readContentsURL",
          "package": "delicious",
          "signature": "String -\u003e URLString -\u003e IO String",
          "source": "src/Network-Delicious-Fetch.html#readContentsURL",
          "type": "function"
        },
        "index": {
          "description": "readContentsURL fetches the content from the given URL Via standard non-authenticated GET",
          "hierarchy": "Network Delicious Fetch",
          "module": "Network.Delicious.Fetch",
          "name": "readContentsURL",
          "normalized": "String-\u003eURLString-\u003eIO String",
          "package": "delicious",
          "partial": "Contents URL",
          "signature": "String-\u003eURLString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Fetch.html#v:readContentsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereadContentsURL\u003c/a\u003e\u003c/code\u003e, but HTTP authenticated using the supplied\n credentials.\n\u003c/p\u003e",
          "module": "Network.Delicious.Fetch",
          "name": "readUserContentsURL",
          "package": "delicious",
          "signature": "User -\u003e String -\u003e URLString -\u003e IO String",
          "source": "src/Network-Delicious-Fetch.html#readUserContentsURL",
          "type": "function"
        },
        "index": {
          "description": "Like readContentsURL but HTTP authenticated using the supplied credentials",
          "hierarchy": "Network Delicious Fetch",
          "module": "Network.Delicious.Fetch",
          "name": "readUserContentsURL",
          "normalized": "User-\u003eString-\u003eURLString-\u003eIO String",
          "package": "delicious",
          "partial": "User Contents URL",
          "signature": "User-\u003eString-\u003eURLString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Fetch.html#v:readUserContentsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess del.icio.us JSON services.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://del.icio.us/help/json/\u003c/a\u003e for more details on the API.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eYou can use JSON feeds at del.icio.us to fetch, remix, and mashup a\n variety of data for use in your own custom applications and\n browser-based presentation styles.\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Delicious.JSON",
          "name": "JSON",
          "package": "delicious",
          "source": "src/Network-Delicious-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "Access del.icio.us JSON services See http del.icio.us help json for more details on the API You can use JSON feeds at del.icio.us to fetch remix and mashup variety of data for use in your own custom applications and browser-based presentation styles",
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "JSON",
          "package": "delicious",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "HtmlFeed",
          "package": "delicious",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "HtmlFeed",
          "package": "delicious",
          "partial": "Html Feed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#t:HtmlFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure represening the the delicious tags associated with a url.\n\u003c/p\u003e",
          "module": "Network.Delicious.JSON",
          "name": "URLDetails",
          "package": "delicious",
          "source": "src/Network-Delicious-JSON.html#URLDetails",
          "type": "data"
        },
        "index": {
          "description": "structure represening the the delicious tags associated with url",
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "URLDetails",
          "package": "delicious",
          "partial": "URLDetails",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#t:URLDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "HtmlFeed",
          "package": "delicious",
          "signature": "HtmlFeed",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "HtmlFeed",
          "package": "delicious",
          "partial": "Html Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:HtmlFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "URLDetails",
          "package": "delicious",
          "signature": "URLDetails",
          "source": "src/Network-Delicious-JSON.html#URLDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "URLDetails",
          "package": "delicious",
          "partial": "URLDetails",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:URLDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "baseHtmlFeed",
          "package": "delicious",
          "signature": "HtmlFeed",
          "source": "src/Network-Delicious-JSON.html#baseHtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "baseHtmlFeed",
          "package": "delicious",
          "partial": "Html Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:baseHtmlFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "feed_html_url",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-JSON.html#feed_html_url",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "feed_html_url",
          "package": "delicious",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:feed_html_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getHotlist",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getHotlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getHotlist",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Hotlist",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getHotlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getHtmlForTag",
          "package": "delicious",
          "signature": "HtmlFeed -\u003e Maybe Tag -\u003e DM String",
          "source": "src/Network-Delicious-JSON.html#getHtmlForTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getHtmlForTag",
          "normalized": "HtmlFeed-\u003eMaybe Tag-\u003eDM String",
          "package": "delicious",
          "partial": "Html For Tag",
          "signature": "HtmlFeed-\u003eMaybe Tag-\u003eDM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getHtmlForTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getNetworkFans",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getNetworkFans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getNetworkFans",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Fans",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getNetworkFans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getNetworkMemberBookmarks",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getNetworkMemberBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getNetworkMemberBookmarks",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Member Bookmarks",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getNetworkMemberBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getNetworkMemberTaggedBookmarks",
          "package": "delicious",
          "signature": "String -\u003e [Tag] -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getNetworkMemberTaggedBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getNetworkMemberTaggedBookmarks",
          "normalized": "String-\u003e[Tag]-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Member Tagged Bookmarks",
          "signature": "String-\u003e[Tag]-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getNetworkMemberTaggedBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getNetworkMembers",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getNetworkMembers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getNetworkMembers",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Members",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getNetworkMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getPopularBookmarks",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getPopularBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getPopularBookmarks",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Popular Bookmarks",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getPopularBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getRecentBookmarks",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getRecentBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getRecentBookmarks",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Recent Bookmarks",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getRecentBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getSiteAlerts",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getSiteAlerts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getSiteAlerts",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Site Alerts",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getSiteAlerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getTagBookmarks",
          "package": "delicious",
          "signature": "Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getTagBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getTagBookmarks",
          "normalized": "Tag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Tag Bookmarks",
          "signature": "Tag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getTagBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getTagPopularBookmarks",
          "package": "delicious",
          "signature": "Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getTagPopularBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getTagPopularBookmarks",
          "normalized": "Tag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Tag Popular Bookmarks",
          "signature": "Tag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getTagPopularBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getTagsBookmarks",
          "package": "delicious",
          "signature": "[Tag] -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getTagsBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getTagsBookmarks",
          "normalized": "[Tag]-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Tags Bookmarks",
          "signature": "[Tag]-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getTagsBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getURLBookmarks",
          "package": "delicious",
          "signature": "URLString -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getURLBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getURLBookmarks",
          "normalized": "URLString-\u003eDM[Post]",
          "package": "delicious",
          "partial": "URLBookmarks",
          "signature": "URLString-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getURLBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve tags associated with a url from delicious.\n An example, extract the tags associated with \u003ccode\u003exmonad\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003e getURLSummary \"http://xmonad.org/\"\n\n       (URLDetails {total = 283\n                   ,tags = [(\"haskell\",176)\n                           ,(\"windowmanager\",133)\n                           ,(\"x11\",126)\n                           ,(\"linux\",116)\n                           ,(\"wm\",74)\n                           ,(\"software\",55)\n                           ,(\"gui\",39)\n                           ,(\"desktop\",26)\n                           ,(\"programming\",25)\n                           ,(\"opensource\",23)\n                           ,(\"xmonad\",20)]\n                   }\n\u003c/pre\u003e",
          "module": "Network.Delicious.JSON",
          "name": "getURLDetails",
          "package": "delicious",
          "signature": "String -\u003e DM URLDetails",
          "source": "src/Network-Delicious-JSON.html#getURLDetails",
          "type": "function"
        },
        "index": {
          "description": "Retrieve tags associated with url from delicious An example extract the tags associated with xmonad getURLSummary http xmonad.org URLDetails total tags haskell windowmanager x11 linux wm software gui desktop programming opensource xmonad",
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getURLDetails",
          "normalized": "String-\u003eDM URLDetails",
          "package": "delicious",
          "partial": "URLDetails",
          "signature": "String-\u003eDM URLDetails",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getURLDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getURLSummary",
          "package": "delicious",
          "signature": "URLString -\u003e DM URLDetails",
          "source": "src/Network-Delicious-JSON.html#getURLSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getURLSummary",
          "normalized": "URLString-\u003eDM URLDetails",
          "package": "delicious",
          "partial": "URLSummary",
          "signature": "URLString-\u003eDM URLDetails",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getURLSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserBookmarks",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserBookmarks",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Bookmarks",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserInboxBookmarks",
          "package": "delicious",
          "signature": "String -\u003e String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserInboxBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserInboxBookmarks",
          "normalized": "String-\u003eString-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Inbox Bookmarks",
          "signature": "String-\u003eString-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserInboxBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserInfo",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserInfo",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Info",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserPublicTags",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserPublicTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserPublicTags",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Public Tags",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserPublicTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserSubscriptions",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserSubscriptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserSubscriptions",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Subscriptions",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserSubscriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserTagBookmarks",
          "package": "delicious",
          "signature": "String -\u003e Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserTagBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserTagBookmarks",
          "normalized": "String-\u003eTag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Tag Bookmarks",
          "signature": "String-\u003eTag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserTagBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "getUserTaggedBookmarks",
          "package": "delicious",
          "signature": "String -\u003e [Tag] -\u003e DM [Post]",
          "source": "src/Network-Delicious-JSON.html#getUserTaggedBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "getUserTaggedBookmarks",
          "normalized": "String-\u003e[Tag]-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Tagged Bookmarks",
          "signature": "String-\u003e[Tag]-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:getUserTaggedBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hash",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-JSON.html#URLDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hash",
          "package": "delicious",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_aClass",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_aClass",
          "package": "delicious",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_aClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_bulletEnt",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_bulletEnt",
          "package": "delicious",
          "partial": "Ent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_bulletEnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_delUrl",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_delUrl",
          "package": "delicious",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_delUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_divClass",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_divClass",
          "package": "delicious",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_divClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_extended",
          "package": "delicious",
          "signature": "Bool",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_extended",
          "package": "delicious",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_extendedClass",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_extendedClass",
          "package": "delicious",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_extendedClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_extendedInDiv",
          "package": "delicious",
          "signature": "Maybe Bool",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_extendedInDiv",
          "package": "delicious",
          "partial": "In Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_extendedInDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_showTags",
          "package": "delicious",
          "signature": "Bool",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_showTags",
          "package": "delicious",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_showTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_tagClass",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_tagClass",
          "package": "delicious",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_tagClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_tagSep",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_tagSep",
          "package": "delicious",
          "partial": "Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_tagSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_tagSepClass",
          "package": "delicious",
          "signature": "Maybe String",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_tagSepClass",
          "package": "delicious",
          "partial": "Sep Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_tagSepClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "hf_withFeedButton",
          "package": "delicious",
          "signature": "Maybe Bool",
          "source": "src/Network-Delicious-JSON.html#HtmlFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "hf_withFeedButton",
          "package": "delicious",
          "partial": "Feed Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:hf_withFeedButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "tags",
          "package": "delicious",
          "signature": "[(String, Integer)]",
          "source": "src/Network-Delicious-JSON.html#URLDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "tags",
          "normalized": "[(String,Integer)]",
          "package": "delicious",
          "signature": "[(String,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "total",
          "package": "delicious",
          "signature": "Integer",
          "source": "src/Network-Delicious-JSON.html#URLDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "total",
          "package": "delicious",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.JSON",
          "name": "url",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-JSON.html#URLDetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious JSON",
          "module": "Network.Delicious.JSON",
          "name": "url",
          "package": "delicious",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-JSON.html#v:url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "RSS",
          "package": "delicious",
          "source": "src/Network-Delicious-RSS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "RSS",
          "package": "delicious",
          "partial": "RSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getHotlist",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getHotlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getHotlist",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Hotlist",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getHotlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getNetworkFans",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getNetworkFans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getNetworkFans",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Fans",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getNetworkFans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getNetworkMemberBookmarks",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getNetworkMemberBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getNetworkMemberBookmarks",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Member Bookmarks",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getNetworkMemberBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getNetworkMemberTaggedBookmarks",
          "package": "delicious",
          "signature": "String -\u003e [Tag] -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getNetworkMemberTaggedBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getNetworkMemberTaggedBookmarks",
          "normalized": "String-\u003e[Tag]-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Member Tagged Bookmarks",
          "signature": "String-\u003e[Tag]-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getNetworkMemberTaggedBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getNetworkMembers",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getNetworkMembers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getNetworkMembers",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Network Members",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getNetworkMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getPopularBookmarks",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getPopularBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getPopularBookmarks",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Popular Bookmarks",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getPopularBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getRecentBookmarks",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getRecentBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getRecentBookmarks",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Recent Bookmarks",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getRecentBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getSiteAlerts",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getSiteAlerts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getSiteAlerts",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "Site Alerts",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getSiteAlerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getTagBookmarks",
          "package": "delicious",
          "signature": "Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getTagBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getTagBookmarks",
          "normalized": "Tag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Tag Bookmarks",
          "signature": "Tag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getTagBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getTagPopularBookmarks",
          "package": "delicious",
          "signature": "Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getTagPopularBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getTagPopularBookmarks",
          "normalized": "Tag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Tag Popular Bookmarks",
          "signature": "Tag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getTagPopularBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getTagsBookmarks",
          "package": "delicious",
          "signature": "[Tag] -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getTagsBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getTagsBookmarks",
          "normalized": "[Tag]-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Tags Bookmarks",
          "signature": "[Tag]-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getTagsBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getURLBookmarks",
          "package": "delicious",
          "signature": "URLString -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getURLBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getURLBookmarks",
          "normalized": "URLString-\u003eDM[Post]",
          "package": "delicious",
          "partial": "URLBookmarks",
          "signature": "URLString-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getURLBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserBookmarks",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserBookmarks",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Bookmarks",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserInboxBookmarks",
          "package": "delicious",
          "signature": "String -\u003e String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserInboxBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserInboxBookmarks",
          "normalized": "String-\u003eString-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Inbox Bookmarks",
          "signature": "String-\u003eString-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserInboxBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserInfo",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserInfo",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Info",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserPublicTags",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserPublicTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserPublicTags",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Public Tags",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserPublicTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserSubscriptions",
          "package": "delicious",
          "signature": "String -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserSubscriptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserSubscriptions",
          "normalized": "String-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Subscriptions",
          "signature": "String-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserSubscriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserTagBookmarks",
          "package": "delicious",
          "signature": "String -\u003e Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserTagBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserTagBookmarks",
          "normalized": "String-\u003eTag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Tag Bookmarks",
          "signature": "String-\u003eTag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserTagBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.RSS",
          "name": "getUserTaggedBookmarks",
          "package": "delicious",
          "signature": "String -\u003e [Tag] -\u003e DM [Post]",
          "source": "src/Network-Delicious-RSS.html#getUserTaggedBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious RSS",
          "module": "Network.Delicious.RSS",
          "name": "getUserTaggedBookmarks",
          "normalized": "String-\u003e[Tag]-\u003eDM[Post]",
          "package": "delicious",
          "partial": "User Tagged Bookmarks",
          "signature": "String-\u003e[Tag]-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-RSS.html#v:getUserTaggedBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and data structures used by the Delicious API binding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Delicious.Types",
          "name": "Types",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types and data structures used by the Delicious API binding",
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Types",
          "package": "delicious",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Bundle",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#Bundle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Bundle",
          "package": "delicious",
          "partial": "Bundle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:Bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "DM",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#DM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "DM",
          "package": "delicious",
          "partial": "DM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:DM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "DateString",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#DateString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "DateString",
          "package": "delicious",
          "partial": "Date String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:DateString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Filter",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#Filter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Filter",
          "package": "delicious",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Post",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Post",
          "package": "delicious",
          "partial": "Post",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Tag",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#Tag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Tag",
          "package": "delicious",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "TagInfo",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#TagInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "TagInfo",
          "package": "delicious",
          "partial": "Tag Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:TagInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "TimeString",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#TimeString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "TimeString",
          "package": "delicious",
          "partial": "Time String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:TimeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "URLString",
          "package": "delicious",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "URLString",
          "package": "delicious",
          "partial": "URLString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:URLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "User",
          "package": "delicious",
          "source": "src/Network-Delicious-Types.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "User",
          "package": "delicious",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Bundle",
          "package": "delicious",
          "signature": "Bundle",
          "source": "src/Network-Delicious-Types.html#Bundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Bundle",
          "package": "delicious",
          "partial": "Bundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:Bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Filter",
          "package": "delicious",
          "signature": "Filter",
          "source": "src/Network-Delicious-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Filter",
          "package": "delicious",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "Post",
          "package": "delicious",
          "signature": "Post",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "Post",
          "package": "delicious",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "TagInfo",
          "package": "delicious",
          "signature": "TagInfo",
          "source": "src/Network-Delicious-Types.html#TagInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "TagInfo",
          "package": "delicious",
          "partial": "Tag Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:TagInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "User",
          "package": "delicious",
          "signature": "User",
          "source": "src/Network-Delicious-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "User",
          "package": "delicious",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "bundleName",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#Bundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "bundleName",
          "package": "delicious",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:bundleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "bundleTags",
          "package": "delicious",
          "signature": "[Tag]",
          "source": "src/Network-Delicious-Types.html#Bundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "bundleTags",
          "normalized": "[Tag]",
          "package": "delicious",
          "partial": "Tags",
          "signature": "[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:bundleTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "catchDM",
          "package": "delicious",
          "signature": "DM a -\u003e (IOError -\u003e DM a) -\u003e DM a",
          "source": "src/Network-Delicious-Types.html#catchDM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "catchDM",
          "normalized": "DM a-\u003e(IOError-\u003eDM a)-\u003eDM a",
          "package": "delicious",
          "partial": "DM",
          "signature": "DM a-\u003e(IOError-\u003eDM a)-\u003eDM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:catchDM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "filterCount",
          "package": "delicious",
          "signature": "Maybe Integer",
          "source": "src/Network-Delicious-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "filterCount",
          "package": "delicious",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:filterCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "filterDate",
          "package": "delicious",
          "signature": "Maybe DateString",
          "source": "src/Network-Delicious-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "filterDate",
          "package": "delicious",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:filterDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "filterTag",
          "package": "delicious",
          "signature": "Maybe Tag",
          "source": "src/Network-Delicious-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "filterTag",
          "package": "delicious",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:filterTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "filterURL",
          "package": "delicious",
          "signature": "Maybe URLString",
          "source": "src/Network-Delicious-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "filterURL",
          "package": "delicious",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:filterURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "getBase",
          "package": "delicious",
          "signature": "DM URLString",
          "source": "src/Network-Delicious-Types.html#getBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "getBase",
          "package": "delicious",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:getBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "getCount",
          "package": "delicious",
          "signature": "DM (Maybe Int)",
          "source": "src/Network-Delicious-Types.html#getCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "getCount",
          "package": "delicious",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:getCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "getUAgent",
          "package": "delicious",
          "signature": "DM URLString",
          "source": "src/Network-Delicious-Types.html#getUAgent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "getUAgent",
          "package": "delicious",
          "partial": "UAgent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:getUAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "getUser",
          "package": "delicious",
          "signature": "DM User",
          "source": "src/Network-Delicious-Types.html#getUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "getUser",
          "package": "delicious",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:getUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "liftIO",
          "package": "delicious",
          "signature": "IO a -\u003e DM a",
          "source": "src/Network-Delicious-Types.html#liftIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "liftIO",
          "normalized": "IO a-\u003eDM a",
          "package": "delicious",
          "partial": "IO",
          "signature": "IO a-\u003eDM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "nullFilter",
          "package": "delicious",
          "signature": "Filter",
          "source": "src/Network-Delicious-Types.html#nullFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "nullFilter",
          "package": "delicious",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:nullFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "nullPost",
          "package": "delicious",
          "signature": "Post",
          "source": "src/Network-Delicious-Types.html#nullPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "nullPost",
          "package": "delicious",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:nullPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "nullUser",
          "package": "delicious",
          "signature": "User",
          "source": "src/Network-Delicious-Types.html#nullUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "nullUser",
          "package": "delicious",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:nullUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postDesc",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postDesc",
          "package": "delicious",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postHash",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postHash",
          "package": "delicious",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postHref",
          "package": "delicious",
          "signature": "URLString",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postHref",
          "package": "delicious",
          "partial": "Href",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postHref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postNotes",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postNotes",
          "package": "delicious",
          "partial": "Notes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postStamp",
          "package": "delicious",
          "signature": "DateString",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postStamp",
          "package": "delicious",
          "partial": "Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postTags",
          "package": "delicious",
          "signature": "[Tag]",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postTags",
          "normalized": "[Tag]",
          "package": "delicious",
          "partial": "Tags",
          "signature": "[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "postUser",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#Post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "postUser",
          "package": "delicious",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:postUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "runDM",
          "package": "delicious",
          "signature": "User -\u003e DM a -\u003e IO a",
          "source": "src/Network-Delicious-Types.html#runDM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "runDM",
          "normalized": "User-\u003eDM a-\u003eIO a",
          "package": "delicious",
          "partial": "DM",
          "signature": "User-\u003eDM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:runDM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "runDelic",
          "package": "delicious",
          "signature": "User -\u003e URLString -\u003e DM a -\u003e IO a",
          "source": "src/Network-Delicious-Types.html#runDelic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "runDelic",
          "normalized": "User-\u003eURLString-\u003eDM a-\u003eIO a",
          "package": "delicious",
          "partial": "Delic",
          "signature": "User-\u003eURLString-\u003eDM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:runDelic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "tagName",
          "package": "delicious",
          "signature": "Tag",
          "source": "src/Network-Delicious-Types.html#TagInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "tagName",
          "package": "delicious",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "tagUses",
          "package": "delicious",
          "signature": "Integer",
          "source": "src/Network-Delicious-Types.html#TagInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "tagUses",
          "package": "delicious",
          "partial": "Uses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:tagUses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "userName",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "userName",
          "package": "delicious",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "userPass",
          "package": "delicious",
          "signature": "String",
          "source": "src/Network-Delicious-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "userPass",
          "package": "delicious",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:userPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "withCount",
          "package": "delicious",
          "signature": "Int -\u003e DM a -\u003e DM a",
          "source": "src/Network-Delicious-Types.html#withCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "withCount",
          "normalized": "Int-\u003eDM a-\u003eDM a",
          "package": "delicious",
          "partial": "Count",
          "signature": "Int-\u003eDM a-\u003eDM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:withCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "withUAgent",
          "package": "delicious",
          "signature": "String -\u003e DM a -\u003e DM a",
          "source": "src/Network-Delicious-Types.html#withUAgent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "withUAgent",
          "normalized": "String-\u003eDM a-\u003eDM a",
          "package": "delicious",
          "partial": "UAgent",
          "signature": "String-\u003eDM a-\u003eDM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:withUAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.Types",
          "name": "withUser",
          "package": "delicious",
          "signature": "User -\u003e DM a -\u003e DM a",
          "source": "src/Network-Delicious-Types.html#withUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious Types",
          "module": "Network.Delicious.Types",
          "name": "withUser",
          "normalized": "User-\u003eDM a-\u003eDM a",
          "package": "delicious",
          "partial": "User",
          "signature": "User-\u003eDM a-\u003eDM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-Types.html#v:withUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccessing a user's tags and bookmarks\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Delicious.User",
          "name": "User",
          "package": "delicious",
          "source": "src/Network-Delicious-User.html",
          "type": "module"
        },
        "index": {
          "description": "Accessing user tags and bookmarks",
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "User",
          "package": "delicious",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "addPost",
          "package": "delicious",
          "signature": "Post -\u003e Bool -\u003e Bool -\u003e DM ()",
          "source": "src/Network-Delicious-User.html#addPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "addPost",
          "normalized": "Post-\u003eBool-\u003eBool-\u003eDM()",
          "package": "delicious",
          "partial": "Post",
          "signature": "Post-\u003eBool-\u003eBool-\u003eDM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:addPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "deleteBundle",
          "package": "delicious",
          "signature": "String -\u003e DM ()",
          "source": "src/Network-Delicious-User.html#deleteBundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "deleteBundle",
          "normalized": "String-\u003eDM()",
          "package": "delicious",
          "partial": "Bundle",
          "signature": "String-\u003eDM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:deleteBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "deletePost",
          "package": "delicious",
          "signature": "URLString -\u003e DM ()",
          "source": "src/Network-Delicious-User.html#deletePost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "deletePost",
          "normalized": "URLString-\u003eDM()",
          "package": "delicious",
          "partial": "Post",
          "signature": "URLString-\u003eDM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:deletePost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "deleteTag",
          "package": "delicious",
          "signature": "Tag -\u003e DM ()",
          "source": "src/Network-Delicious-User.html#deleteTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "deleteTag",
          "normalized": "Tag-\u003eDM()",
          "package": "delicious",
          "partial": "Tag",
          "signature": "Tag-\u003eDM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:deleteTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getAll",
          "package": "delicious",
          "signature": "Maybe Tag -\u003e DM [Post]",
          "source": "src/Network-Delicious-User.html#getAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getAll",
          "normalized": "Maybe Tag-\u003eDM[Post]",
          "package": "delicious",
          "partial": "All",
          "signature": "Maybe Tag-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getAllHashes",
          "package": "delicious",
          "signature": "DM [Post]",
          "source": "src/Network-Delicious-User.html#getAllHashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getAllHashes",
          "normalized": "DM[Post]",
          "package": "delicious",
          "partial": "All Hashes",
          "signature": "DM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getAllHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getBundles",
          "package": "delicious",
          "signature": "DM [Bundle]",
          "source": "src/Network-Delicious-User.html#getBundles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getBundles",
          "normalized": "DM[Bundle]",
          "package": "delicious",
          "partial": "Bundles",
          "signature": "DM[Bundle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getBundles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getByDate",
          "package": "delicious",
          "signature": "Maybe Tag -\u003e DM [(DateString, Integer)]",
          "source": "src/Network-Delicious-User.html#getByDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getByDate",
          "normalized": "Maybe Tag-\u003eDM[(DateString,Integer)]",
          "package": "delicious",
          "partial": "By Date",
          "signature": "Maybe Tag-\u003eDM[(DateString,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getByDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getLastUpdate",
          "package": "delicious",
          "signature": "DM TimeString",
          "source": "src/Network-Delicious-User.html#getLastUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getLastUpdate",
          "package": "delicious",
          "partial": "Last Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getLastUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getPosts",
          "package": "delicious",
          "signature": "Filter -\u003e DM [Post]",
          "source": "src/Network-Delicious-User.html#getPosts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getPosts",
          "normalized": "Filter-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Posts",
          "signature": "Filter-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getPosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getRecent",
          "package": "delicious",
          "signature": "Maybe Tag -\u003e Maybe Integer -\u003e DM [Post]",
          "source": "src/Network-Delicious-User.html#getRecent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getRecent",
          "normalized": "Maybe Tag-\u003eMaybe Integer-\u003eDM[Post]",
          "package": "delicious",
          "partial": "Recent",
          "signature": "Maybe Tag-\u003eMaybe Integer-\u003eDM[Post]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getRecent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "getTags",
          "package": "delicious",
          "signature": "DM [TagInfo]",
          "source": "src/Network-Delicious-User.html#getTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "getTags",
          "normalized": "DM[TagInfo]",
          "package": "delicious",
          "partial": "Tags",
          "signature": "DM[TagInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:getTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "renameTag",
          "package": "delicious",
          "signature": "Tag -\u003e Tag -\u003e DM ()",
          "source": "src/Network-Delicious-User.html#renameTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "renameTag",
          "normalized": "Tag-\u003eTag-\u003eDM()",
          "package": "delicious",
          "partial": "Tag",
          "signature": "Tag-\u003eTag-\u003eDM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:renameTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "restReq",
          "package": "delicious",
          "signature": "String -\u003e [(String, String)] -\u003e DM (Either Element String)",
          "source": "src/Network-Delicious-User.html#restReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "restReq",
          "normalized": "String-\u003e[(String,String)]-\u003eDM(Either Element String)",
          "package": "delicious",
          "partial": "Req",
          "signature": "String-\u003e[(String,String)]-\u003eDM(Either Element String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:restReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious.User",
          "name": "setBundle",
          "package": "delicious",
          "signature": "String -\u003e [Tag] -\u003e DM ()",
          "source": "src/Network-Delicious-User.html#setBundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Delicious User",
          "module": "Network.Delicious.User",
          "name": "setBundle",
          "normalized": "String-\u003e[Tag]-\u003eDM()",
          "package": "delicious",
          "partial": "Bundle",
          "signature": "String-\u003e[Tag]-\u003eDM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious-User.html#v:setBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Delicious",
          "name": "Delicious",
          "package": "delicious",
          "source": "src/Network-Delicious.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Delicious",
          "module": "Network.Delicious",
          "name": "Delicious",
          "package": "delicious",
          "partial": "Delicious",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delicious/docs/Network-Delicious.html#"
      }
    }
  ]
]