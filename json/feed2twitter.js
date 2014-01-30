[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes several functions and data types to send feeds to\n Twitter.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "module",
        "fct-source": "src/Web-Feed2Twitter.html",
        "fct-type": "module",
        "title": "Feed2Twitter"
      },
      "index": {
        "description": "This module exposes several functions and data types to send feeds to Twitter",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "Feed2Twitter",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Feed Twitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration data for the \u003ccode\u003e\u003ca\u003efeed2twitter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "data",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration data for the feed2twitter function",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "Config",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#t:GUID",
      "description": {
        "fct-descr": "\u003cp\u003eA unique identifier for a Tweet.\n Values of this type are stored in the cache file to make sure no duplicate\n messages are sent to Twitter.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "type",
        "fct-source": "src/Web-Feed2Twitter.html#GUID",
        "fct-type": "type",
        "title": "GUID"
      },
      "index": {
        "description": "unique identifier for Tweet Values of this type are stored in the cache file to make sure no duplicate messages are sent to Twitter",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "GUID",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "GUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#t:Tweet",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a single tweet.\n In principle this should be \u003c= 140 characters, however, because Twitter uses\n a url-shortener, a tweet containing a url may exeed this limit.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "type",
        "fct-source": "src/Web-Feed2Twitter.html#Tweet",
        "fct-type": "type",
        "title": "Tweet"
      },
      "index": {
        "description": "Represents single tweet In principle this should be characters however because Twitter uses url-shortener tweet containing url may exeed this limit",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "Tweet",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Tweet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:Config",
      "description": {
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Config",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "Config",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:atom2twitter",
      "description": {
        "fct-descr": "\u003cp\u003eSends an Atom feed to Twitter by using user-provided mapping function\n for individual entries.\n\u003c/p\u003e\u003cp\u003eThis is a specialized version of \u003ccode\u003e\u003ca\u003eitem2twitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Config -\u003e (Entry -\u003e Tweet) -\u003e IO ()",
        "fct-source": "src/Web-Feed2Twitter.html#atom2twitter",
        "fct-type": "function",
        "title": "atom2twitter"
      },
      "index": {
        "description": "Sends an Atom feed to Twitter by using user-provided mapping function for individual entries This is specialized version of item2twitter",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "atom2twitter",
        "normalized": "Config-\u003e(Entry-\u003eTweet)-\u003eIO()",
        "package": "feed2twitter",
        "partial": "",
        "signature": "Config-\u003e(Entry-\u003eTweet)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:cacheFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "FilePath",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "cacheFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "cacheFile",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:cacheSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Int",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "cacheSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "cacheSize",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:debugMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Bool",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "debugMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "debugMode",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:feed2twitter",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that does all the heavy lifting:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Downloads the feed provided in the config value.\n\u003c/li\u003e\u003cli\u003e Calls the provided user-function to map feed to a list of guids and tweets.\n\u003c/li\u003e\u003cli\u003e Filters out already posted tweets using guid cache.\n\u003c/li\u003e\u003cli\u003e Sends each tweet to Twitter and writes its guid to cache file.\n\u003c/li\u003e\u003cli\u003e Truncate cache file to size provided in config value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUser-function is responsible for generating guids for tweets and the order\n of tweets.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Config -\u003e (Feed -\u003e [(GUID, Tweet)]) -\u003e IO ()",
        "fct-source": "src/Web-Feed2Twitter.html#feed2twitter",
        "fct-type": "function",
        "title": "feed2twitter"
      },
      "index": {
        "description": "Function that does all the heavy lifting Downloads the feed provided in the config value Calls the provided user-function to map feed to list of guids and tweets Filters out already posted tweets using guid cache Sends each tweet to Twitter and writes its guid to cache file Truncate cache file to size provided in config value User-function is responsible for generating guids for tweets and the order of tweets",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "feed2twitter",
        "normalized": "Config-\u003e(Feed-\u003e[(GUID,Tweet)])-\u003eIO()",
        "package": "feed2twitter",
        "partial": "",
        "signature": "Config-\u003e(Feed-\u003e[(GUID,Tweet)])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:feedUrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "String",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "feedUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "feedUrl",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:item2twitter",
      "description": {
        "fct-descr": "\u003cp\u003eSends feed items to Twitter by using user-provided mapping function\n for individual items.\n\u003c/p\u003e\u003cp\u003eDefined in terms of \u003ccode\u003e\u003ca\u003efeed2twitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Config -\u003e (Either Entry RSSItem -\u003e Tweet) -\u003e IO ()",
        "fct-source": "src/Web-Feed2Twitter.html#item2twitter",
        "fct-type": "function",
        "title": "item2twitter"
      },
      "index": {
        "description": "Sends feed items to Twitter by using user-provided mapping function for individual items Defined in terms of feed2twitter",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "item2twitter",
        "normalized": "Config-\u003e(Either Entry RSSItem-\u003eTweet)-\u003eIO()",
        "package": "feed2twitter",
        "partial": "",
        "signature": "Config-\u003e(Either Entry RSSItem-\u003eTweet)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:password",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "String",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "password"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "password",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:rss2twitter",
      "description": {
        "fct-descr": "\u003cp\u003eSends a RSS feed to Twitter by using user-provided mapping function\n for individual items.\n\u003c/p\u003e\u003cp\u003eThis is a specialized version of \u003ccode\u003e\u003ca\u003eitem2twitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "Config -\u003e (RSSItem -\u003e Tweet) -\u003e IO ()",
        "fct-source": "src/Web-Feed2Twitter.html#rss2twitter",
        "fct-type": "function",
        "title": "rss2twitter"
      },
      "index": {
        "description": "Sends RSS feed to Twitter by using user-provided mapping function for individual items This is specialized version of item2twitter",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "rss2twitter",
        "normalized": "Config-\u003e(RSSItem-\u003eTweet)-\u003eIO()",
        "package": "feed2twitter",
        "partial": "",
        "signature": "Config-\u003e(RSSItem-\u003eTweet)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:trunc4tweet",
      "description": {
        "fct-descr": "\u003cp\u003eTruncates a string to 140 characters for a tweet.\n\u003c/p\u003e\u003cp\u003eWhen input is longer than 140 characters, puts an ellipsis at the end.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Web-Feed2Twitter.html#trunc4tweet",
        "fct-type": "function",
        "title": "trunc4tweet"
      },
      "index": {
        "description": "Truncates string to characters for tweet When input is longer than characters puts an ellipsis at the end",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "trunc4tweet",
        "normalized": "String-\u003eString",
        "package": "feed2twitter",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:trunc4url",
      "description": {
        "fct-descr": "\u003cp\u003eTruncates a string to 120 characters, leaving room for a space and a url.\n Due to Twitter using a url-shortener, urls are assumed to max 20 characters.\n\u003c/p\u003e\u003cp\u003eWhen input is shorter than 120 characters, returns it with a space,\n otherwise truncates and puts an ellipsis and space at the end.\n\u003c/p\u003e",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Web-Feed2Twitter.html#trunc4url",
        "fct-type": "function",
        "title": "trunc4url"
      },
      "index": {
        "description": "Truncates string to characters leaving room for space and url Due to Twitter using url-shortener urls are assumed to max characters When input is shorter than characters returns it with space otherwise truncates and puts an ellipsis and space at the end",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "trunc4url",
        "normalized": "String-\u003eString",
        "package": "feed2twitter",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/feed2twitter/docs/Web-Feed2Twitter.html#v:username",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Feed2Twitter",
        "fct-package": "feed2twitter",
        "fct-signature": "String",
        "fct-source": "src/Web-Feed2Twitter.html#Config",
        "fct-type": "function",
        "title": "username"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Feed2Twitter",
        "module": "Web.Feed2Twitter",
        "name": "username",
        "normalized": "",
        "package": "feed2twitter",
        "partial": "",
        "signature": ""
      }
    }
  }
]