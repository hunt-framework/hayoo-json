[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHastache templating for Scotty\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE OverloadedStrings #-}\nmodule Main where\n\nimport Text.Hastache\nimport Web.Scotty.Trans as S\nimport Web.Scotty.Hastache\n\nmain :: IO ()\nmain = scottyH' 3000 $ do\n  setTemplatesDir \"templates\"\n  -- ^ Setting up the director with templates\n  get \"/:word\" $ do\n    beam \u003c- param \"word\"\n    setH \"action\" $ MuVariable (beam :: String)\n    -- ^ \"action\" will be binded to the contents of 'beam'\n    hastache \"greet.html\"\n\u003c/pre\u003e\u003cp\u003eGiven the following template:\n\u003c/p\u003e\u003cpre\u003e\n\u003ch1\u003eScotty, {{action}} me up!\u003c/h1\u003e\n\u003c/pre\u003e\u003cp\u003eUpon the \u003ccode\u003eGET /beam\u003c/code\u003e the result will be:\n\u003c/p\u003e\u003cpre\u003e\n\u003ch1\u003eScotty, beam me up!\u003c/h1\u003e\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "module",
        "fct-source": "src/Web-Scotty-Hastache.html",
        "fct-type": "module",
        "title": "Hastache"
      },
      "index": {
        "description": "Hastache templating for Scotty LANGUAGE OverloadedStrings module Main where import Text.Hastache import Web.Scotty.Trans as import Web.Scotty.Hastache main IO main scottyH do setTemplatesDir templates Setting up the director with templates get word do beam param word setH action MuVariable beam String action will be binded to the contents of beam hastache greet.html Given the following template h1 Scotty action me up h1 Upon the GET beam the result will be h1 Scotty beam me up h1",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "Hastache",
        "normalized": "",
        "package": "scotty-hastache",
        "partial": "Hastache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ActionH",
      "description": {
        "fct-descr": "\u003cp\u003eA type synonym for \u003ccode\u003eScottyT e HState\u003c/code\u003e; with custom exception types\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "type",
        "fct-source": "src/Web-Scotty-Hastache.html#ActionH",
        "fct-type": "type",
        "title": "ActionH"
      },
      "index": {
        "description": "type synonym for ScottyT HState with custom exception types",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "ActionH",
        "normalized": "",
        "package": "scotty-hastache",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ActionH-39-",
      "description": {
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "type",
        "fct-source": "src/Web-Scotty-Hastache.html#ActionH%27",
        "fct-type": "type",
        "title": "ActionH'"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "ActionH'",
        "normalized": "",
        "package": "scotty-hastache",
        "partial": "Action H'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:HState",
      "description": {
        "fct-descr": "\u003cp\u003eState with the Hastache config\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "type",
        "fct-source": "src/Web-Scotty-Hastache.html#HState",
        "fct-type": "type",
        "title": "HState"
      },
      "index": {
        "description": "State with the Hastache config",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "HState",
        "normalized": "",
        "package": "scotty-hastache",
        "partial": "HState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ScottyH",
      "description": {
        "fct-descr": "\u003cp\u003eA type synonym for \u003ccode\u003eScottyT e HState\u003c/code\u003e; with custom exception types\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "type",
        "fct-source": "src/Web-Scotty-Hastache.html#ScottyH",
        "fct-type": "type",
        "title": "ScottyH"
      },
      "index": {
        "description": "type synonym for ScottyT HState with custom exception types",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "ScottyH",
        "normalized": "",
        "package": "scotty-hastache",
        "partial": "Scotty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#t:ScottyH-39-",
      "description": {
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "type",
        "fct-source": "src/Web-Scotty-Hastache.html#ScottyH%27",
        "fct-type": "type",
        "title": "ScottyH'"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "ScottyH'",
        "normalized": "",
        "package": "scotty-hastache",
        "partial": "Scotty H'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:hastache",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a function, just like \u003ccode\u003e\u003ca\u003ehtml\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n It takes a name of the template (the path is computed using the \n information about the templates dir and template files extension) \n and renders it using Hastache.\n\u003c/p\u003e\u003cp\u003eThe variables that have been initialized using \u003ccode\u003e\u003ca\u003esetH\u003c/a\u003e\u003c/code\u003e are \n substituted for their values, uninitialized variables are \n considered to be empty/null.\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "FilePath -\u003e ActionH e ()",
        "fct-source": "src/Web-Scotty-Hastache.html#hastache",
        "fct-type": "function",
        "title": "hastache"
      },
      "index": {
        "description": "This is function just like html or text It takes name of the template the path is computed using the information about the templates dir and template files extension and renders it using Hastache The variables that have been initialized using setH are substituted for their values uninitialized variables are considered to be empty null",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "hastache",
        "normalized": "FilePath-\u003eActionH a()",
        "package": "scotty-hastache",
        "partial": "",
        "signature": "FilePath-\u003eActionH e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:mkHStateRunners",
      "description": {
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "MuConfig IO -\u003e IO (forall a.  HState a -\u003e IO a, HState Response -\u003e IO Response)",
        "fct-source": "src/Web-Scotty-Hastache.html#mkHStateRunners",
        "fct-type": "function",
        "title": "mkHStateRunners"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "mkHStateRunners",
        "normalized": "MuConfig IO-\u003eIO(a b HState c-\u003eIO c,HState Response-\u003eIO Response)",
        "package": "scotty-hastache",
        "partial": "HState Runners",
        "signature": "MuConfig IO-\u003eIO(forall a. HState a-\u003eIO a,HState Response-\u003eIO Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:modifyHastacheConfig",
      "description": {
        "fct-descr": "\u003cp\u003eModify the Hastache configuration as whole\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "(MuConfig IO -\u003e MuConfig IO) -\u003e ScottyH e ()",
        "fct-source": "src/Web-Scotty-Hastache.html#modifyHastacheConfig",
        "fct-type": "function",
        "title": "modifyHastacheConfig"
      },
      "index": {
        "description": "Modify the Hastache configuration as whole",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "modifyHastacheConfig",
        "normalized": "(MuConfig IO-\u003eMuConfig IO)-\u003eScottyH a()",
        "package": "scotty-hastache",
        "partial": "Hastache Config",
        "signature": "(MuConfig IO-\u003eMuConfig IO)-\u003eScottyH e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyH",
      "description": {
        "fct-descr": "\u003cp\u003eThe runner to use instead of \u003ccode\u003escotty\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "Port -\u003e ScottyH e () -\u003e IO ()",
        "fct-source": "src/Web-Scotty-Hastache.html#scottyH",
        "fct-type": "function",
        "title": "scottyH"
      },
      "index": {
        "description": "The runner to use instead of scotty",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "scottyH",
        "normalized": "Port-\u003eScottyH a()-\u003eIO()",
        "package": "scotty-hastache",
        "partial": "",
        "signature": "Port-\u003eScottyH e()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyH-39-",
      "description": {
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "Port -\u003e ScottyH' () -\u003e IO ()",
        "fct-source": "src/Web-Scotty-Hastache.html#scottyH%27",
        "fct-type": "function",
        "title": "scottyH'"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "scottyH'",
        "normalized": "Port-\u003eScottyH'()-\u003eIO()",
        "package": "scotty-hastache",
        "partial": "H'",
        "signature": "Port-\u003eScottyH'()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyHApp",
      "description": {
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "MuConfig IO -\u003e ScottyH e () -\u003e IO Application",
        "fct-source": "src/Web-Scotty-Hastache.html#scottyHApp",
        "fct-type": "function",
        "title": "scottyHApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "scottyHApp",
        "normalized": "MuConfig IO-\u003eScottyH a()-\u003eIO Application",
        "package": "scotty-hastache",
        "partial": "HApp",
        "signature": "MuConfig IO-\u003eScottyH e()-\u003eIO Application"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyHOpts",
      "description": {
        "fct-descr": "\u003cp\u003eThe runner to use instead of \u003ccode\u003escottyOpts\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "Options -\u003e ScottyH e () -\u003e IO ()",
        "fct-source": "src/Web-Scotty-Hastache.html#scottyHOpts",
        "fct-type": "function",
        "title": "scottyHOpts"
      },
      "index": {
        "description": "The runner to use instead of scottyOpts",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "scottyHOpts",
        "normalized": "Options-\u003eScottyH a()-\u003eIO()",
        "package": "scotty-hastache",
        "partial": "HOpts",
        "signature": "Options-\u003eScottyH e()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:scottyHOpts-39-",
      "description": {
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "Options -\u003e ScottyH' () -\u003e IO ()",
        "fct-source": "src/Web-Scotty-Hastache.html#scottyHOpts%27",
        "fct-type": "function",
        "title": "scottyHOpts'"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "scottyHOpts'",
        "normalized": "Options-\u003eScottyH'()-\u003eIO()",
        "package": "scotty-hastache",
        "partial": "HOpts'",
        "signature": "Options-\u003eScottyH'()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setH",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of a mustache variable.\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "String -\u003e MuType IO -\u003e ActionH e ()",
        "fct-source": "src/Web-Scotty-Hastache.html#setH",
        "fct-type": "function",
        "title": "setH"
      },
      "index": {
        "description": "Set the value of mustache variable",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "setH",
        "normalized": "String-\u003eMuType IO-\u003eActionH a()",
        "package": "scotty-hastache",
        "partial": "",
        "signature": "String-\u003eMuType IO-\u003eActionH e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setHastacheConfig",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the Hastache configuration as whole\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "MuConfig IO -\u003e ScottyH e ()",
        "fct-source": "src/Web-Scotty-Hastache.html#setHastacheConfig",
        "fct-type": "function",
        "title": "setHastacheConfig"
      },
      "index": {
        "description": "Update the Hastache configuration as whole",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "setHastacheConfig",
        "normalized": "MuConfig IO-\u003eScottyH a()",
        "package": "scotty-hastache",
        "partial": "Hastache Config",
        "signature": "MuConfig IO-\u003eScottyH e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setTemplateFileExt",
      "description": {
        "fct-descr": "\u003cp\u003eSet the default extension for template files. This affects\n how \u003cem\u003eboth\u003c/em\u003e \u003ccode\u003e\u003ca\u003ehastache\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e{{\u003e template}}\u003c/code\u003e bit searches for the\n template files.\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "String -\u003e ScottyH e ()",
        "fct-source": "src/Web-Scotty-Hastache.html#setTemplateFileExt",
        "fct-type": "function",
        "title": "setTemplateFileExt"
      },
      "index": {
        "description": "Set the default extension for template files This affects how both hastache and the template bit searches for the template files",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "setTemplateFileExt",
        "normalized": "String-\u003eScottyH a()",
        "package": "scotty-hastache",
        "partial": "Template File Ext",
        "signature": "String-\u003eScottyH e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scotty-hastache/docs/Web-Scotty-Hastache.html#v:setTemplatesDir",
      "description": {
        "fct-descr": "\u003cp\u003eSet the path to the directory with templates. This affects\n how \u003cem\u003eboth\u003c/em\u003e \u003ccode\u003e\u003ca\u003ehastache\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e{{\u003e template}}\u003c/code\u003e bit searches for the\n template files.\n\u003c/p\u003e",
        "fct-module": "Web.Scotty.Hastache",
        "fct-package": "scotty-hastache",
        "fct-signature": "FilePath -\u003e ScottyH e ()",
        "fct-source": "src/Web-Scotty-Hastache.html#setTemplatesDir",
        "fct-type": "function",
        "title": "setTemplatesDir"
      },
      "index": {
        "description": "Set the path to the directory with templates This affects how both hastache and the template bit searches for the template files",
        "hierarchy": "Web Scotty Hastache",
        "module": "Web.Scotty.Hastache",
        "name": "setTemplatesDir",
        "normalized": "FilePath-\u003eScottyH a()",
        "package": "scotty-hastache",
        "partial": "Templates Dir",
        "signature": "FilePath-\u003eScottyH e()"
      }
    }
  }
]