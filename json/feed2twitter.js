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
        "word": "feed2twitter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes several functions and data types to send feeds to\n Twitter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Feed2Twitter",
          "name": "Feed2Twitter",
          "package": "feed2twitter",
          "source": "src/Web-Feed2Twitter.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes several functions and data types to send feeds to Twitter",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "Feed2Twitter",
          "package": "feed2twitter",
          "partial": "Feed Twitter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration data for the \u003ccode\u003e\u003ca\u003efeed2twitter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "Config",
          "package": "feed2twitter",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration data for the feed2twitter function",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "Config",
          "package": "feed2twitter",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique identifier for a Tweet.\n Values of this type are stored in the cache file to make sure no duplicate\n messages are sent to Twitter.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "GUID",
          "package": "feed2twitter",
          "source": "src/Web-Feed2Twitter.html#GUID",
          "type": "type"
        },
        "index": {
          "description": "unique identifier for Tweet Values of this type are stored in the cache file to make sure no duplicate messages are sent to Twitter",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "GUID",
          "package": "feed2twitter",
          "partial": "GUID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#t:GUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a single tweet.\n In principle this should be \u003c= 140 characters, however, because Twitter uses\n a url-shortener, a tweet containing a url may exeed this limit.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "Tweet",
          "package": "feed2twitter",
          "source": "src/Web-Feed2Twitter.html#Tweet",
          "type": "type"
        },
        "index": {
          "description": "Represents single tweet In principle this should be characters however because Twitter uses url-shortener tweet containing url may exeed this limit",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "Tweet",
          "package": "feed2twitter",
          "partial": "Tweet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#t:Tweet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "Config",
          "package": "feed2twitter",
          "signature": "Config",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "Config",
          "package": "feed2twitter",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends an Atom feed to Twitter by using user-provided mapping function\n for individual entries.\n\u003c/p\u003e\u003cp\u003eThis is a specialized version of \u003ccode\u003e\u003ca\u003eitem2twitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "atom2twitter",
          "package": "feed2twitter",
          "signature": "Config -\u003e (Entry -\u003e Tweet) -\u003e IO ()",
          "source": "src/Web-Feed2Twitter.html#atom2twitter",
          "type": "function"
        },
        "index": {
          "description": "Sends an Atom feed to Twitter by using user-provided mapping function for individual entries This is specialized version of item2twitter",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "atom2twitter",
          "normalized": "Config-\u003e(Entry-\u003eTweet)-\u003eIO()",
          "package": "feed2twitter",
          "signature": "Config-\u003e(Entry-\u003eTweet)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:atom2twitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "cacheFile",
          "package": "feed2twitter",
          "signature": "FilePath",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "cacheFile",
          "package": "feed2twitter",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:cacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "cacheSize",
          "package": "feed2twitter",
          "signature": "Int",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "cacheSize",
          "package": "feed2twitter",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:cacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "debugMode",
          "package": "feed2twitter",
          "signature": "Bool",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "debugMode",
          "package": "feed2twitter",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:debugMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that does all the heavy lifting:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Downloads the feed provided in the config value.\n\u003c/li\u003e\u003cli\u003e Calls the provided user-function to map feed to a list of guids and tweets.\n\u003c/li\u003e\u003cli\u003e Filters out already posted tweets using guid cache.\n\u003c/li\u003e\u003cli\u003e Sends each tweet to Twitter and writes its guid to cache file.\n\u003c/li\u003e\u003cli\u003e Truncate cache file to size provided in config value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUser-function is responsible for generating guids for tweets and the order\n of tweets.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "feed2twitter",
          "package": "feed2twitter",
          "signature": "Config -\u003e (Feed -\u003e [(GUID, Tweet)]) -\u003e IO ()",
          "source": "src/Web-Feed2Twitter.html#feed2twitter",
          "type": "function"
        },
        "index": {
          "description": "Function that does all the heavy lifting Downloads the feed provided in the config value Calls the provided user-function to map feed to list of guids and tweets Filters out already posted tweets using guid cache Sends each tweet to Twitter and writes its guid to cache file Truncate cache file to size provided in config value User-function is responsible for generating guids for tweets and the order of tweets",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "feed2twitter",
          "normalized": "Config-\u003e(Feed-\u003e[(GUID,Tweet)])-\u003eIO()",
          "package": "feed2twitter",
          "signature": "Config-\u003e(Feed-\u003e[(GUID,Tweet)])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:feed2twitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "feedUrl",
          "package": "feed2twitter",
          "signature": "String",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "feedUrl",
          "package": "feed2twitter",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:feedUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends feed items to Twitter by using user-provided mapping function\n for individual items.\n\u003c/p\u003e\u003cp\u003eDefined in terms of \u003ccode\u003e\u003ca\u003efeed2twitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "item2twitter",
          "package": "feed2twitter",
          "signature": "Config -\u003e (Either Entry RSSItem -\u003e Tweet) -\u003e IO ()",
          "source": "src/Web-Feed2Twitter.html#item2twitter",
          "type": "function"
        },
        "index": {
          "description": "Sends feed items to Twitter by using user-provided mapping function for individual items Defined in terms of feed2twitter",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "item2twitter",
          "normalized": "Config-\u003e(Either Entry RSSItem-\u003eTweet)-\u003eIO()",
          "package": "feed2twitter",
          "signature": "Config-\u003e(Either Entry RSSItem-\u003eTweet)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:item2twitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "password",
          "package": "feed2twitter",
          "signature": "String",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "password",
          "package": "feed2twitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a RSS feed to Twitter by using user-provided mapping function\n for individual items.\n\u003c/p\u003e\u003cp\u003eThis is a specialized version of \u003ccode\u003e\u003ca\u003eitem2twitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "rss2twitter",
          "package": "feed2twitter",
          "signature": "Config -\u003e (RSSItem -\u003e Tweet) -\u003e IO ()",
          "source": "src/Web-Feed2Twitter.html#rss2twitter",
          "type": "function"
        },
        "index": {
          "description": "Sends RSS feed to Twitter by using user-provided mapping function for individual items This is specialized version of item2twitter",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "rss2twitter",
          "normalized": "Config-\u003e(RSSItem-\u003eTweet)-\u003eIO()",
          "package": "feed2twitter",
          "signature": "Config-\u003e(RSSItem-\u003eTweet)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:rss2twitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncates a string to 140 characters for a tweet.\n\u003c/p\u003e\u003cp\u003eWhen input is longer than 140 characters, puts an ellipsis at the end.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "trunc4tweet",
          "package": "feed2twitter",
          "signature": "String -\u003e String",
          "source": "src/Web-Feed2Twitter.html#trunc4tweet",
          "type": "function"
        },
        "index": {
          "description": "Truncates string to characters for tweet When input is longer than characters puts an ellipsis at the end",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "trunc4tweet",
          "normalized": "String-\u003eString",
          "package": "feed2twitter",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:trunc4tweet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncates a string to 120 characters, leaving room for a space and a url.\n Due to Twitter using a url-shortener, urls are assumed to max 20 characters.\n\u003c/p\u003e\u003cp\u003eWhen input is shorter than 120 characters, returns it with a space,\n otherwise truncates and puts an ellipsis and space at the end.\n\u003c/p\u003e",
          "module": "Web.Feed2Twitter",
          "name": "trunc4url",
          "package": "feed2twitter",
          "signature": "String -\u003e String",
          "source": "src/Web-Feed2Twitter.html#trunc4url",
          "type": "function"
        },
        "index": {
          "description": "Truncates string to characters leaving room for space and url Due to Twitter using url-shortener urls are assumed to max characters When input is shorter than characters returns it with space otherwise truncates and puts an ellipsis and space at the end",
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "trunc4url",
          "normalized": "String-\u003eString",
          "package": "feed2twitter",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:trunc4url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Feed2Twitter",
          "name": "username",
          "package": "feed2twitter",
          "signature": "String",
          "source": "src/Web-Feed2Twitter.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Feed2Twitter",
          "module": "Web.Feed2Twitter",
          "name": "username",
          "package": "feed2twitter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:username"
      }
    }
  ]
]