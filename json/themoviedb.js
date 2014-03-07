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
        "word": "themoviedb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some helper functions for loading an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e or\ncomplete \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e from the user's environment or from the file\nsystem.  Currently only POSIX systems are supported but patches are\nwelcome!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.API.TheMovieDB.Util",
          "name": "Util",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Util.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some helper functions for loading an API Key or complete Context from the user environment or from the file system Currently only POSIX systems are supported but patches are welcome",
          "hierarchy": "Network API TheMovieDB Util",
          "module": "Network.API.TheMovieDB.Util",
          "name": "Util",
          "package": "themoviedb",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003eloadKey\u003c/a\u003e\u003c/code\u003e to fetch an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e and wrap it into a default\n \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003emkContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB.Util",
          "name": "loadContext",
          "package": "themoviedb",
          "signature": "IO (Maybe Context)",
          "source": "src/Network-API-TheMovieDB-Util.html#loadContext",
          "type": "function"
        },
        "index": {
          "description": "Uses loadKey to fetch an API Key and wrap it into default Context using mkContext",
          "hierarchy": "Network API TheMovieDB Util",
          "module": "Network.API.TheMovieDB.Util",
          "name": "loadContext",
          "package": "themoviedb",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB-Util.html#v:loadContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e from the first of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eTMDB_KEY\u003c/code\u003e environment variable\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eXDG_CONFIG_HOME/tmdbkey\u003c/code\u003e file (where XDG_CONFIG_HOME is\n       an environment variable)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e~/.config/tmdbkey\u003c/code\u003e file\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e~/.tmdbkey\u003c/code\u003e file\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the key can't be loaded from any of those places the result will\n be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB.Util",
          "name": "loadKey",
          "package": "themoviedb",
          "signature": "IO (Maybe Key)",
          "source": "src/Network-API-TheMovieDB-Util.html#loadKey",
          "type": "function"
        },
        "index": {
          "description": "Fetch an API Key from the first of TMDB KEY environment variable XDG CONFIG HOME tmdbkey file where XDG CONFIG HOME is an environment variable config tmdbkey file tmdbkey file If the key can be loaded from any of those places the result will be Nothing",
          "hierarchy": "Network API TheMovieDB Util",
          "module": "Network.API.TheMovieDB.Util",
          "name": "loadKey",
          "package": "themoviedb",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB-Util.html#v:loadKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides some data types and functions for fetching movie\nmetadata from \u003ca\u003ehttp://TheMovieDB.com\u003c/a\u003e.  To use this library start by\nrequesting an API key from \u003ca\u003ehttp://docs.themoviedb.apiary.io\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA typical workflow while using this library is:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Place an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003emkContext\u003c/a\u003e\u003c/code\u003e or one of\n     the utility functions in \u003ca\u003eNetwork.API.TheMovieDB.Util\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Retrieve API \u003ccode\u003e\u003ca\u003eConfiguration\u003c/a\u003e\u003c/code\u003e information using either the\n     \u003ccode\u003e\u003ca\u003econfig\u003c/a\u003e\u003c/code\u003e function or the \u003ccode\u003e\u003ca\u003econfigErr\u003c/a\u003e\u003c/code\u003e function.\n\u003c/li\u003e\u003cli\u003e Search TheMovieDB using either the \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e function or the\n     \u003ccode\u003e\u003ca\u003esearchErr\u003c/a\u003e\u003c/code\u003e function.\n\u003c/li\u003e\u003cli\u003e Since the search functions don't return a full \u003ccode\u003e\u003ca\u003eMovie\u003c/a\u003e\u003c/code\u003e record\n     follow them up with the \u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e function or the \u003ccode\u003e\u003ca\u003efetchErr\u003c/a\u003e\u003c/code\u003e\n     function.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis library also includes an example executable in the \u003ccode\u003eexample\u003c/code\u003e\ndirectory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "TheMovieDB",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides some data types and functions for fetching movie metadata from http TheMovieDB.com To use this library start by requesting an API key from http docs.themoviedb.apiary.io typical workflow while using this library is Place an API Key inside Context using mkContext or one of the utility functions in Network.API.TheMovieDB.Util Retrieve API Configuration information using either the config function or the configErr function Search TheMovieDB using either the search function or the searchErr function Since the search functions don return full Movie record follow them up with the fetch function or the fetchErr function This library also includes an example executable in the example directory",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "TheMovieDB",
          "package": "themoviedb",
          "partial": "The Movie DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheMovieDB API tries to preserve bandwidth by omitting\n information (such as full URLs for poster images) from most of the\n API calls.  Therefore in order to construct a complete URL for a\n movie poster you'll need to use the \u003ccode\u003econfig\u003c/code\u003e or \u003ccode\u003econfigErr\u003c/code\u003e\n function to retrieve API configuration information.\n\u003c/p\u003e\u003cp\u003eA helper function is provided (\u003ccode\u003emoviePosterURLs\u003c/code\u003e) that constructs a\n list of all poster URLs given a \u003ccode\u003eMovie\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eConfiguration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "Configuration",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-Configuration.html#Configuration",
          "type": "data"
        },
        "index": {
          "description": "TheMovieDB API tries to preserve bandwidth by omitting information such as full URLs for poster images from most of the API calls Therefore in order to construct complete URL for movie poster you ll need to use the config or configErr function to retrieve API configuration information helper function is provided moviePosterURLs that constructs list of all poster URLs given Movie and Configuration",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Configuration",
          "package": "themoviedb",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData that needs to be given to the API functions.  Use the\n \u003ccode\u003e\u003ca\u003emkContext\u003c/a\u003e\u003c/code\u003e function to turn an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "Context",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-Context.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Data that needs to be given to the API functions Use the mkContext function to turn an API Key into Context",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Context",
          "package": "themoviedb",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible errors returned by the API.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "Error",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-API.html#Error",
          "type": "data"
        },
        "index": {
          "description": "Possible errors returned by the API",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Error",
          "package": "themoviedb",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata for a genre.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "Genre",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-Genre.html#Genre",
          "type": "data"
        },
        "index": {
          "description": "Metadata for genre",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Genre",
          "package": "themoviedb",
          "partial": "Genre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:Genre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for representing unique genre IDs.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "GenreID",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-Genre.html#GenreID",
          "type": "type"
        },
        "index": {
          "description": "Type for representing unique genre IDs",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "GenreID",
          "package": "themoviedb",
          "partial": "Genre ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:GenreID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for the API key issued by TheMovieDB.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "Key",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-API.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Type for the API key issued by TheMovieDB",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Key",
          "package": "themoviedb",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata for a movie.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003emoviePosterPath\u003c/a\u003e\u003c/code\u003e is an incomplete URL.  To construct a\n     complete URL you'll need to use the \u003ccode\u003e\u003ca\u003eConfiguration\u003c/a\u003e\u003c/code\u003e type.  You\n     can also use \u003ccode\u003e\u003ca\u003emoviePosterURLs\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "Movie",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "data"
        },
        "index": {
          "description": "Metadata for movie The moviePosterPath is an incomplete URL To construct complete URL you ll need to use the Configuration type You can also use moviePosterURLs",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Movie",
          "package": "themoviedb",
          "partial": "Movie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:Movie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for representing unique movie IDs.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "MovieID",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#MovieID",
          "type": "type"
        },
        "index": {
          "description": "Type for representing unique movie IDs",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "MovieID",
          "package": "themoviedb",
          "partial": "Movie ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:MovieID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA search query for TheMovieDB API.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "SearchQuery",
          "package": "themoviedb",
          "source": "src/Network-API-TheMovieDB-Types-API.html#SearchQuery",
          "type": "type"
        },
        "index": {
          "description": "search query for TheMovieDB API",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "SearchQuery",
          "package": "themoviedb",
          "partial": "Search Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#t:SearchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.API.TheMovieDB",
          "name": "Genre",
          "package": "themoviedb",
          "signature": "Genre",
          "source": "src/Network-API-TheMovieDB-Types-Genre.html#Genre",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Genre",
          "package": "themoviedb",
          "partial": "Genre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:Genre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.API.TheMovieDB",
          "name": "Movie",
          "package": "themoviedb",
          "signature": "Movie",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "Movie",
          "package": "themoviedb",
          "partial": "Movie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:Movie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork or HTTP error.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "NetworkError",
          "package": "themoviedb",
          "signature": "NetworkError String",
          "source": "src/Network-API-TheMovieDB-Types-API.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Network or HTTP error",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "NetworkError",
          "package": "themoviedb",
          "partial": "Network Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:NetworkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid or error response from the API.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "ParseError",
          "package": "themoviedb",
          "signature": "ParseError String",
          "source": "src/Network-API-TheMovieDB-Types-API.html#Error",
          "type": "function"
        },
        "index": {
          "description": "Invalid or error response from the API",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "ParseError",
          "package": "themoviedb",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "apiKey",
          "package": "themoviedb",
          "signature": "Context -\u003e Key",
          "source": "src/Network-API-TheMovieDB-Types-Context.html#apiKey",
          "type": "function"
        },
        "index": {
          "description": "Extract an API Key from Context",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "apiKey",
          "normalized": "Context-\u003eKey",
          "package": "themoviedb",
          "partial": "Key",
          "signature": "Context-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:apiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the API configuration information or fail.  For a function\n that returns an error instead of failing see \u003ccode\u003e\u003ca\u003econfigErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "config",
          "package": "themoviedb",
          "signature": "Context -\u003e IO Configuration",
          "source": "src/Network-API-TheMovieDB-Config.html#config",
          "type": "function"
        },
        "index": {
          "description": "Fetch the API configuration information or fail For function that returns an error instead of failing see configErr",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "config",
          "normalized": "Context-\u003eIO Configuration",
          "package": "themoviedb",
          "signature": "Context-\u003eIO Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the API configuration information such as base URLs for\n movie posters.  Results in either an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eConfiguration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "configErr",
          "package": "themoviedb",
          "signature": "Context -\u003e IO (Either Error Configuration)",
          "source": "src/Network-API-TheMovieDB-Config.html#configErr",
          "type": "function"
        },
        "index": {
          "description": "Fetch the API configuration information such as base URLs for movie posters Results in either an Error or Configuration",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "configErr",
          "normalized": "Context-\u003eIO(Either Error Configuration)",
          "package": "themoviedb",
          "partial": "Err",
          "signature": "Context-\u003eIO(Either Error Configuration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:configErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the metadata for the movie with the given ID and fail if\n any errors are encountered along the way.  For a function that\n returns an error instead of failing see \u003ccode\u003e\u003ca\u003efetchErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "fetch",
          "package": "themoviedb",
          "signature": "Context -\u003e MovieID -\u003e IO Movie",
          "source": "src/Network-API-TheMovieDB-Fetch.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "Fetch the metadata for the movie with the given ID and fail if any errors are encountered along the way For function that returns an error instead of failing see fetchErr",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "fetch",
          "normalized": "Context-\u003eMovieID-\u003eIO Movie",
          "package": "themoviedb",
          "signature": "Context-\u003eMovieID-\u003eIO Movie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the metadata for the movie with the given ID.  Returns\n either an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eMovie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "fetchErr",
          "package": "themoviedb",
          "signature": "Context -\u003e MovieID -\u003e IO (Either Error Movie)",
          "source": "src/Network-API-TheMovieDB-Fetch.html#fetchErr",
          "type": "function"
        },
        "index": {
          "description": "Fetch the metadata for the movie with the given ID Returns either an Error or Movie",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "fetchErr",
          "normalized": "Context-\u003eMovieID-\u003eIO(Either Error Movie)",
          "package": "themoviedb",
          "partial": "Err",
          "signature": "Context-\u003eMovieID-\u003eIO(Either Error Movie)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:fetchErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheMovieDB unique ID.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "genreID",
          "package": "themoviedb",
          "signature": "GenreID",
          "source": "src/Network-API-TheMovieDB-Types-Genre.html#Genre",
          "type": "function"
        },
        "index": {
          "description": "TheMovieDB unique ID",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "genreID",
          "package": "themoviedb",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:genreID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the genre.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "genreName",
          "package": "themoviedb",
          "signature": "String",
          "source": "src/Network-API-TheMovieDB-Types-Genre.html#Genre",
          "type": "function"
        },
        "index": {
          "description": "The name of the genre",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "genreName",
          "package": "themoviedb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:genreName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns an API \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e so that you can call the API\n functions such as \u003ccode\u003efetch\u003c/code\u003e and \u003ccode\u003esearch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "mkContext",
          "package": "themoviedb",
          "signature": "Key -\u003e Context",
          "source": "src/Network-API-TheMovieDB-Types-Context.html#mkContext",
          "type": "function"
        },
        "index": {
          "description": "Turns an API Key into Context so that you can call the API functions such as fetch and search",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "mkContext",
          "normalized": "Key-\u003eContext",
          "package": "themoviedb",
          "partial": "Context",
          "signature": "Key-\u003eContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:mkContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheMovieDB adult movie flag.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieAdult",
          "package": "themoviedb",
          "signature": "Bool",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "TheMovieDB adult movie flag",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieAdult",
          "package": "themoviedb",
          "partial": "Adult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieAdult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of \u003ccode\u003e\u003ca\u003eGenre\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieGenres",
          "package": "themoviedb",
          "signature": "[Genre]",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "List of Genre",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieGenres",
          "normalized": "[Genre]",
          "package": "themoviedb",
          "partial": "Genres",
          "signature": "[Genre]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieGenres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheMovieDB unique ID.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieID",
          "package": "themoviedb",
          "signature": "MovieID",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "TheMovieDB unique ID",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieID",
          "package": "themoviedb",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIMDB.com ID.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieIMDB",
          "package": "themoviedb",
          "signature": "String",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "IMDB.com ID",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieIMDB",
          "package": "themoviedb",
          "partial": "IMDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieIMDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort plot summary.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieOverview",
          "package": "themoviedb",
          "signature": "String",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "Short plot summary",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieOverview",
          "package": "themoviedb",
          "partial": "Overview",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieOverview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopularity ranking.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "moviePopularity",
          "package": "themoviedb",
          "signature": "Double",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "Popularity ranking",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "moviePopularity",
          "package": "themoviedb",
          "partial": "Popularity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:moviePopularity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncomplete URL for poster image.\n See \u003ccode\u003e\u003ca\u003emoviePosterURLs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "moviePosterPath",
          "package": "themoviedb",
          "signature": "String",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "Incomplete URL for poster image See moviePosterURLs",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "moviePosterPath",
          "package": "themoviedb",
          "partial": "Poster Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:moviePosterPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of URLs for all possible movie posters.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "moviePosterURLs",
          "package": "themoviedb",
          "signature": "Configuration -\u003e Movie -\u003e [String]",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#moviePosterURLs",
          "type": "function"
        },
        "index": {
          "description": "Return list of URLs for all possible movie posters",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "moviePosterURLs",
          "normalized": "Configuration-\u003eMovie-\u003e[String]",
          "package": "themoviedb",
          "partial": "Poster URLs",
          "signature": "Configuration-\u003eMovie-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:moviePosterURLs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMovie release date.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieReleaseDate",
          "package": "themoviedb",
          "signature": "Day",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "Movie release date",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieReleaseDate",
          "package": "themoviedb",
          "partial": "Release Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieReleaseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMovie length in minutes.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieRunTime",
          "package": "themoviedb",
          "signature": "Int",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "Movie length in minutes",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieRunTime",
          "package": "themoviedb",
          "partial": "Run Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieRunTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name/title of the movie.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "movieTitle",
          "package": "themoviedb",
          "signature": "String",
          "source": "src/Network-API-TheMovieDB-Types-Movie.html#Movie",
          "type": "function"
        },
        "index": {
          "description": "The name title of the movie",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "movieTitle",
          "package": "themoviedb",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:movieTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch TheMovieDB using the given query string and return a list\n of movies.  This function fails if there are any errors.  For a\n function that returns an error instead of failing see \u003ccode\u003e\u003ca\u003esearchErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe movies returned will not have all their fields completely\n filled out, to get a complete record you'll need to follow this\n call up with a call to \u003ccode\u003efetchErr\u003c/code\u003e or \u003ccode\u003efetch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "search",
          "package": "themoviedb",
          "signature": "Context -\u003e SearchQuery -\u003e IO [Movie]",
          "source": "src/Network-API-TheMovieDB-Search.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search TheMovieDB using the given query string and return list of movies This function fails if there are any errors For function that returns an error instead of failing see searchErr The movies returned will not have all their fields completely filled out to get complete record you ll need to follow this call up with call to fetchErr or fetch",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "search",
          "normalized": "Context-\u003eSearchQuery-\u003eIO[Movie]",
          "package": "themoviedb",
          "signature": "Context-\u003eSearchQuery-\u003eIO[Movie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch TheMovieDB using the given query string and return either\n an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e if something went wrong or a list of matching \u003ccode\u003e\u003ca\u003eMovie\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe movies returned will not have all their fields completely\n filled out, to get a complete record you'll need to follow this\n call up with a call to \u003ccode\u003efetchErr\u003c/code\u003e or \u003ccode\u003efetch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.API.TheMovieDB",
          "name": "searchErr",
          "package": "themoviedb",
          "signature": "Context -\u003e SearchQuery -\u003e IO (Either Error [Movie])",
          "source": "src/Network-API-TheMovieDB-Search.html#searchErr",
          "type": "function"
        },
        "index": {
          "description": "Search TheMovieDB using the given query string and return either an Error if something went wrong or list of matching Movie The movies returned will not have all their fields completely filled out to get complete record you ll need to follow this call up with call to fetchErr or fetch",
          "hierarchy": "Network API TheMovieDB",
          "module": "Network.API.TheMovieDB",
          "name": "searchErr",
          "normalized": "Context-\u003eSearchQuery-\u003eIO(Either Error[Movie])",
          "package": "themoviedb",
          "partial": "Err",
          "signature": "Context-\u003eSearchQuery-\u003eIO(Either Error[Movie])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/themoviedb/docs/Network-API-TheMovieDB.html#v:searchErr"
      }
    }
  ]
]