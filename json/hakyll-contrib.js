[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple default configuration which behaves similar\n to a tool such as the Jekyll static site generator (\u003ca\u003ehttp://jekyllrb.com/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe idea is that you don't have to write your configuration yourself: you\n just follow some conventions, and Hakyll does the rest.\n\u003c/p\u003e\u003cp\u003eYou can generate a site which will serve as a good starting point by running\n the command-line tool:\n\u003c/p\u003e\u003cpre\u003e hakyll-contrib small-blog\n\u003c/pre\u003e\u003cp\u003eHakyll will then generate a simple example site for you. The necessary\n configuration is placed in the \u003ccode\u003esmall-blog.hs\u003c/code\u003e file. Compile and run it to create\n the demo site:\n\u003c/p\u003e\u003cpre\u003e ghc --make small-blog.hs\n ./small-blog build\n ./small-blog preview\n\u003c/pre\u003e\u003cp\u003eSo, in order to get your site going, you need to follow the conventions for\n the content on your site.\n\u003c/p\u003e\u003cp\u003eImages should be placed in the \u003ccode\u003eimages/\u003c/code\u003e or \u003ccode\u003eimg/\u003c/code\u003e folder. The are copied\n directly. Other static files (but not images) can be placed in \u003ccode\u003estatic/\u003c/code\u003e or\n \u003ccode\u003efiles/\u003c/code\u003e. The \u003ccode\u003efavicon.ico\u003c/code\u003e file is an exception, it is just placed in the\n top-level directory.\n\u003c/p\u003e\u003cp\u003eCSS files should be placed in \u003ccode\u003ecss/\u003c/code\u003e, and JavaScript files in \u003ccode\u003ejs/\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThen, we arrive at pages. You can create any number of pages on your site:\n just create files in one of the documents pandoc supports (\u003ccode\u003e.html\u003c/code\u003e,\n \u003ccode\u003e.markdown\u003c/code\u003e, \u003ccode\u003e.rst\u003c/code\u003e, \u003ccode\u003e.lhs\u003c/code\u003e...) in the top-level directory.\n\u003c/p\u003e\u003cp\u003eThese pages may use a number of preconfigured \u003ccode\u003e$key$\u003c/code\u003e's:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e$recentPosts$\u003c/code\u003e: A list of recent posts, displayed from most recent to\n   oldest. By default, 3 posts are shown, altough this can be configured using\n   the \u003ccode\u003e\u003ca\u003enumberOfRecentPosts\u003c/a\u003e\u003c/code\u003e field.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$allPosts$\u003c/code\u003e: A list of all posts, displayed from most recent to oldest.\n   This is very useful for creating an archive page.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$chronologicalPosts$\u003c/code\u003e: Similar to \u003ccode\u003e$allPosts$\u003c/code\u003e, but displays the posts in\n   chronological order.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example usage, look at the example site we generated using\n \u003ccode\u003ehakyll-contrib small-blog\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNow, one can wonder where these posts come from. Simple: all pages in the\n \u003ccode\u003eposts/\u003c/code\u003e directory are considered posts. Note that a naming format of\n\u003c/p\u003e\u003cpre\u003e posts/year-month-date-title.extension\n\u003c/pre\u003e\u003cp\u003eis mandatory. An example:\n\u003c/p\u003e\u003cpre\u003e posts/2011-06-19-hello-world.markdown\n\u003c/pre\u003e\u003cp\u003eThis allows Hakyll to parse the date easily, among other things. Again, look\n at the example site for some example posts.\n\u003c/p\u003e\u003cp\u003eAdditionaly, there is the \u003ccode\u003etemplates/\u003c/code\u003e folder. This folder holds the\n templates for your site. For a \u003ccode\u003esmall-blog\u003c/code\u003e configuration, your site should\n have \u003cem\u003eexactly\u003c/em\u003e three templates:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003etemplates/default.html\u003c/code\u003e: The main template. This should contain your\n   HTML doctype, head, etc.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etemplates/post.html\u003c/code\u003e: A template which is applied to every post before\n   it is rendered using the default template.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etemplates/post-item.html\u003c/code\u003e: A template which is applied to posts in\n   listings (e.g. \u003ccode\u003e$chronologicalPosts$\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAgain, the example should clarify things.\n\u003c/p\u003e\u003cp\u003eThis configuration should be enough to create a small personal website. But,\n we have only touched the surface of what is possible with Hakyll. For more\n information, check out the tutorials at: \u003ca\u003ehttp://jaspervdj.be/hakyll\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "module",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html",
        "fct-type": "module",
        "title": "SmallBlog"
      },
      "index": {
        "description": "This module provides simple default configuration which behaves similar to tool such as the Jekyll static site generator http jekyllrb.com The idea is that you don have to write your configuration yourself you just follow some conventions and Hakyll does the rest You can generate site which will serve as good starting point by running the command-line tool hakyll-contrib small-blog Hakyll will then generate simple example site for you The necessary configuration is placed in the small-blog.hs file Compile and run it to create the demo site ghc make small-blog.hs small-blog build small-blog preview So in order to get your site going you need to follow the conventions for the content on your site Images should be placed in the images or img folder The are copied directly Other static files but not images can be placed in static or files The favicon.ico file is an exception it is just placed in the top-level directory CSS files should be placed in css and JavaScript files in js Then we arrive at pages You can create any number of pages on your site just create files in one of the documents pandoc supports html markdown rst lhs in the top-level directory These pages may use number of preconfigured key recentPosts list of recent posts displayed from most recent to oldest By default posts are shown altough this can be configured using the numberOfRecentPosts field allPosts list of all posts displayed from most recent to oldest This is very useful for creating an archive page chronologicalPosts Similar to allPosts but displays the posts in chronological order For example usage look at the example site we generated using hakyll-contrib small-blog Now one can wonder where these posts come from Simple all pages in the posts directory are considered posts Note that naming format of posts year-month-date-title.extension is mandatory An example posts hello-world.markdown This allows Hakyll to parse the date easily among other things Again look at the example site for some example posts Additionaly there is the templates folder This folder holds the templates for your site For small-blog configuration your site should have exactly three templates templates default.html The main template This should contain your HTML doctype head etc templates post.html template which is applied to every post before it is rendered using the default template templates post-item.html template which is applied to posts in listings e.g chronologicalPosts Again the example should clarify things This configuration should be enough to create small personal website But we have only touched the surface of what is possible with Hakyll For more information check out the tutorials at http jaspervdj.be hakyll",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "SmallBlog",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Small Blog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#t:SmallBlogConfiguration",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration datatype for the \u003ccode\u003e\u003ca\u003esmallBlog\u003c/a\u003e\u003c/code\u003e ruleset\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "data",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#SmallBlogConfiguration",
        "fct-type": "data",
        "title": "SmallBlogConfiguration"
      },
      "index": {
        "description": "Configuration datatype for the smallBlog ruleset",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "SmallBlogConfiguration",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Small Blog Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:SmallBlogConfiguration",
      "description": {
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "SmallBlogConfiguration",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#SmallBlogConfiguration",
        "fct-type": "function",
        "title": "SmallBlogConfiguration"
      },
      "index": {
        "description": "",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "SmallBlogConfiguration",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Small Blog Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:atomFeed",
      "description": {
        "fct-descr": "\u003cp\u003eAtom feed configuration\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "Maybe FeedConfiguration",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#SmallBlogConfiguration",
        "fct-type": "function",
        "title": "atomFeed"
      },
      "index": {
        "description": "Atom feed configuration",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "atomFeed",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Feed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:defaultSmallBlogConfiguration",
      "description": {
        "fct-descr": "\u003cp\u003eDefaults for \u003ccode\u003e\u003ca\u003eSmallBlogConfiguration\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "SmallBlogConfiguration",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#defaultSmallBlogConfiguration",
        "fct-type": "function",
        "title": "defaultSmallBlogConfiguration"
      },
      "index": {
        "description": "Defaults for SmallBlogConfiguration",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "defaultSmallBlogConfiguration",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Small Blog Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:numberOfRecentPosts",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of recent posts that are available\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "Int",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#SmallBlogConfiguration",
        "fct-type": "function",
        "title": "numberOfRecentPosts"
      },
      "index": {
        "description": "Number of recent posts that are available",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "numberOfRecentPosts",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Of Recent Posts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:parserState",
      "description": {
        "fct-descr": "\u003cp\u003eParser state for pandoc, i.e. read options\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "ParserState",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#SmallBlogConfiguration",
        "fct-type": "function",
        "title": "parserState"
      },
      "index": {
        "description": "Parser state for pandoc i.e read options",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "parserState",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:smallBlog",
      "description": {
        "fct-descr": "\u003cp\u003eA default configuration for a small blog\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "Rules",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#smallBlog",
        "fct-type": "function",
        "title": "smallBlog"
      },
      "index": {
        "description": "default configuration for small blog",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "smallBlog",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Blog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:smallBlogWith",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003esmallBlog\u003c/a\u003e\u003c/code\u003e which allows setting a config\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "SmallBlogConfiguration -\u003e Rules",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#smallBlogWith",
        "fct-type": "function",
        "title": "smallBlogWith"
      },
      "index": {
        "description": "Version of smallBlog which allows setting config",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "smallBlogWith",
        "normalized": "SmallBlogConfiguration-\u003eRules",
        "package": "hakyll-contrib",
        "partial": "Blog With",
        "signature": "SmallBlogConfiguration-\u003eRules"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hakyll-contrib/docs/Hakyll-Contrib-SmallBlog.html#v:writerOptions",
      "description": {
        "fct-descr": "\u003cp\u003eWriter options for pandoc\n\u003c/p\u003e",
        "fct-module": "Hakyll.Contrib.SmallBlog",
        "fct-package": "hakyll-contrib",
        "fct-signature": "WriterOptions",
        "fct-source": "src/Hakyll-Contrib-SmallBlog.html#SmallBlogConfiguration",
        "fct-type": "function",
        "title": "writerOptions"
      },
      "index": {
        "description": "Writer options for pandoc",
        "hierarchy": "Hakyll Contrib SmallBlog",
        "module": "Hakyll.Contrib.SmallBlog",
        "name": "writerOptions",
        "normalized": "",
        "package": "hakyll-contrib",
        "partial": "Options",
        "signature": ""
      }
    }
  }
]