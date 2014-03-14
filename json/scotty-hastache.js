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
        "word": "scotty-hastache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHastache templating for Scotty\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE OverloadedStrings #-}\nmodule Main where\n\nimport Text.Hastache\nimport Web.Scotty.Trans as S\nimport Web.Scotty.Hastache\n\nmain :: IO ()\nmain = scottyH' 3000 $ do\n  setTemplatesDir \"templates\"\n  -- ^ Setting up the director with templates\n  get \"/:word\" $ do\n    beam \u003c- param \"word\"\n    setH \"action\" $ MuVariable (beam :: String)\n    -- ^ \"action\" will be binded to the contents of 'beam'\n    hastache \"greet.html\"\n\u003c/pre\u003e\u003cp\u003eGiven the following template:\n\u003c/p\u003e\u003cpre\u003e\n\u003ch1\u003eScotty, {{action}} me up!\u003c/h1\u003e\n\u003c/pre\u003e\u003cp\u003eUpon the \u003ccode\u003eGET /beam\u003c/code\u003e the result will be:\n\u003c/p\u003e\u003cpre\u003e\n\u003ch1\u003eScotty, beam me up!\u003c/h1\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "Hastache",
          "package": "scotty-hastache",
          "source": "src/Web-Scotty-Hastache.html",
          "type": "module"
        },
        "index": {
          "description": "Hastache templating for Scotty LANGUAGE OverloadedStrings module Main where import Text.Hastache import Web.Scotty.Trans as import Web.Scotty.Hastache main IO main scottyH do setTemplatesDir templates Setting up the director with templates get word do beam param word setH action MuVariable beam String action will be binded to the contents of beam hastache greet.html Given the following template h1 Scotty action me up h1 Upon the GET beam the result will be h1 Scotty beam me up h1",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "Hastache",
          "package": "scotty-hastache",
          "partial": "Hastache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for \u003ccode\u003eScottyT e HState\u003c/code\u003e; with custom exception types\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "ActionH",
          "package": "scotty-hastache",
          "source": "src/Web-Scotty-Hastache.html#ActionH",
          "type": "type"
        },
        "index": {
          "description": "type synonym for ScottyT HState with custom exception types",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "ActionH",
          "package": "scotty-hastache",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ActionH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Hastache",
          "name": "ActionH'",
          "package": "scotty-hastache",
          "source": "src/Web-Scotty-Hastache.html#ActionH%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "ActionH'",
          "package": "scotty-hastache",
          "partial": "Action H'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ActionH-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState with the Hastache config\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "HState",
          "package": "scotty-hastache",
          "source": "src/Web-Scotty-Hastache.html#HState",
          "type": "type"
        },
        "index": {
          "description": "State with the Hastache config",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "HState",
          "package": "scotty-hastache",
          "partial": "HState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:HState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for \u003ccode\u003eScottyT e HState\u003c/code\u003e; with custom exception types\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "ScottyH",
          "package": "scotty-hastache",
          "source": "src/Web-Scotty-Hastache.html#ScottyH",
          "type": "type"
        },
        "index": {
          "description": "type synonym for ScottyT HState with custom exception types",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "ScottyH",
          "package": "scotty-hastache",
          "partial": "Scotty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ScottyH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Hastache",
          "name": "ScottyH'",
          "package": "scotty-hastache",
          "source": "src/Web-Scotty-Hastache.html#ScottyH%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "ScottyH'",
          "package": "scotty-hastache",
          "partial": "Scotty H'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ScottyH-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a function, just like \u003ccode\u003e\u003ca\u003ehtml\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n It takes a name of the template (the path is computed using the \n information about the templates dir and template files extension) \n and renders it using Hastache.\n\u003c/p\u003e\u003cp\u003eThe variables that have been initialized using \u003ccode\u003e\u003ca\u003esetH\u003c/a\u003e\u003c/code\u003e are \n substituted for their values, uninitialized variables are \n considered to be empty/null.\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "hastache",
          "package": "scotty-hastache",
          "signature": "FilePath -\u003e ActionH e ()",
          "source": "src/Web-Scotty-Hastache.html#hastache",
          "type": "function"
        },
        "index": {
          "description": "This is function just like html or text It takes name of the template the path is computed using the information about the templates dir and template files extension and renders it using Hastache The variables that have been initialized using setH are substituted for their values uninitialized variables are considered to be empty null",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "hastache",
          "normalized": "FilePath-\u003eActionH a()",
          "package": "scotty-hastache",
          "signature": "FilePath-\u003eActionH e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:hastache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Hastache",
          "name": "mkHStateRunners",
          "package": "scotty-hastache",
          "signature": "MuConfig IO -\u003e IO (forall a.  HState a -\u003e IO a, HState Response -\u003e IO Response)",
          "source": "src/Web-Scotty-Hastache.html#mkHStateRunners",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "mkHStateRunners",
          "normalized": "MuConfig IO-\u003eIO(a b HState c-\u003eIO c,HState Response-\u003eIO Response)",
          "package": "scotty-hastache",
          "partial": "HState Runners",
          "signature": "MuConfig IO-\u003eIO(forall a. HState a-\u003eIO a,HState Response-\u003eIO Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:mkHStateRunners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the Hastache configuration as whole\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "modifyHastacheConfig",
          "package": "scotty-hastache",
          "signature": "(MuConfig IO -\u003e MuConfig IO) -\u003e ScottyH e ()",
          "source": "src/Web-Scotty-Hastache.html#modifyHastacheConfig",
          "type": "function"
        },
        "index": {
          "description": "Modify the Hastache configuration as whole",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "modifyHastacheConfig",
          "normalized": "(MuConfig IO-\u003eMuConfig IO)-\u003eScottyH a()",
          "package": "scotty-hastache",
          "partial": "Hastache Config",
          "signature": "(MuConfig IO-\u003eMuConfig IO)-\u003eScottyH e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:modifyHastacheConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe runner to use instead of \u003ccode\u003escotty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "scottyH",
          "package": "scotty-hastache",
          "signature": "Port -\u003e ScottyH e () -\u003e IO ()",
          "source": "src/Web-Scotty-Hastache.html#scottyH",
          "type": "function"
        },
        "index": {
          "description": "The runner to use instead of scotty",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "scottyH",
          "normalized": "Port-\u003eScottyH a()-\u003eIO()",
          "package": "scotty-hastache",
          "signature": "Port-\u003eScottyH e()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Hastache",
          "name": "scottyH'",
          "package": "scotty-hastache",
          "signature": "Port -\u003e ScottyH' () -\u003e IO ()",
          "source": "src/Web-Scotty-Hastache.html#scottyH%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "scottyH'",
          "normalized": "Port-\u003eScottyH'()-\u003eIO()",
          "package": "scotty-hastache",
          "partial": "H'",
          "signature": "Port-\u003eScottyH'()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyH-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Hastache",
          "name": "scottyHApp",
          "package": "scotty-hastache",
          "signature": "MuConfig IO -\u003e ScottyH e () -\u003e IO Application",
          "source": "src/Web-Scotty-Hastache.html#scottyHApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "scottyHApp",
          "normalized": "MuConfig IO-\u003eScottyH a()-\u003eIO Application",
          "package": "scotty-hastache",
          "partial": "HApp",
          "signature": "MuConfig IO-\u003eScottyH e()-\u003eIO Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyHApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe runner to use instead of \u003ccode\u003escottyOpts\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "scottyHOpts",
          "package": "scotty-hastache",
          "signature": "Options -\u003e ScottyH e () -\u003e IO ()",
          "source": "src/Web-Scotty-Hastache.html#scottyHOpts",
          "type": "function"
        },
        "index": {
          "description": "The runner to use instead of scottyOpts",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "scottyHOpts",
          "normalized": "Options-\u003eScottyH a()-\u003eIO()",
          "package": "scotty-hastache",
          "partial": "HOpts",
          "signature": "Options-\u003eScottyH e()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyHOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Hastache",
          "name": "scottyHOpts'",
          "package": "scotty-hastache",
          "signature": "Options -\u003e ScottyH' () -\u003e IO ()",
          "source": "src/Web-Scotty-Hastache.html#scottyHOpts%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "scottyHOpts'",
          "normalized": "Options-\u003eScottyH'()-\u003eIO()",
          "package": "scotty-hastache",
          "partial": "HOpts'",
          "signature": "Options-\u003eScottyH'()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyHOpts-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of a mustache variable.\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "setH",
          "package": "scotty-hastache",
          "signature": "String -\u003e MuType IO -\u003e ActionH e ()",
          "source": "src/Web-Scotty-Hastache.html#setH",
          "type": "function"
        },
        "index": {
          "description": "Set the value of mustache variable",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "setH",
          "normalized": "String-\u003eMuType IO-\u003eActionH a()",
          "package": "scotty-hastache",
          "signature": "String-\u003eMuType IO-\u003eActionH e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the Hastache configuration as whole\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "setHastacheConfig",
          "package": "scotty-hastache",
          "signature": "MuConfig IO -\u003e ScottyH e ()",
          "source": "src/Web-Scotty-Hastache.html#setHastacheConfig",
          "type": "function"
        },
        "index": {
          "description": "Update the Hastache configuration as whole",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "setHastacheConfig",
          "normalized": "MuConfig IO-\u003eScottyH a()",
          "package": "scotty-hastache",
          "partial": "Hastache Config",
          "signature": "MuConfig IO-\u003eScottyH e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setHastacheConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default extension for template files. This affects\n how \u003cem\u003eboth\u003c/em\u003e \u003ccode\u003e\u003ca\u003ehastache\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e{{\u003e template}}\u003c/code\u003e bit searches for the\n template files.\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "setTemplateFileExt",
          "package": "scotty-hastache",
          "signature": "String -\u003e ScottyH e ()",
          "source": "src/Web-Scotty-Hastache.html#setTemplateFileExt",
          "type": "function"
        },
        "index": {
          "description": "Set the default extension for template files This affects how both hastache and the template bit searches for the template files",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "setTemplateFileExt",
          "normalized": "String-\u003eScottyH a()",
          "package": "scotty-hastache",
          "partial": "Template File Ext",
          "signature": "String-\u003eScottyH e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setTemplateFileExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the path to the directory with templates. This affects\n how \u003cem\u003eboth\u003c/em\u003e \u003ccode\u003e\u003ca\u003ehastache\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e{{\u003e template}}\u003c/code\u003e bit searches for the\n template files.\n\u003c/p\u003e",
          "module": "Web.Scotty.Hastache",
          "name": "setTemplatesDir",
          "package": "scotty-hastache",
          "signature": "FilePath -\u003e ScottyH e ()",
          "source": "src/Web-Scotty-Hastache.html#setTemplatesDir",
          "type": "function"
        },
        "index": {
          "description": "Set the path to the directory with templates This affects how both hastache and the template bit searches for the template files",
          "hierarchy": "Web Scotty Hastache",
          "module": "Web.Scotty.Hastache",
          "name": "setTemplatesDir",
          "normalized": "FilePath-\u003eScottyH a()",
          "package": "scotty-hastache",
          "partial": "Templates Dir",
          "signature": "FilePath-\u003eScottyH e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setTemplatesDir"
      }
    }
  ]
]