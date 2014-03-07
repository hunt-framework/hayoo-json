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
        "word": "selenium"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntegration of Selenium and HUnit. Since all HUnit tests must have\n type IO (), this handles threading the Selenium session information\n between tests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Selenium.HUnit",
          "name": "HUnit",
          "package": "selenium",
          "source": "src/Test-Selenium-HUnit.html",
          "type": "module"
        },
        "index": {
          "description": "Integration of Selenium and HUnit Since all HUnit tests must have type IO this handles threading the Selenium session information between tests",
          "hierarchy": "Test Selenium HUnit",
          "module": "Test.Selenium.HUnit",
          "name": "HUnit",
          "package": "selenium",
          "partial": "HUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-HUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.HUnit",
          "name": "runSeleniumTestsBare",
          "package": "selenium",
          "signature": "[(String, Selenium ())] -\u003e Selenium ()",
          "source": "src/Test-Selenium-HUnit.html#runSeleniumTestsBare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium HUnit",
          "module": "Test.Selenium.HUnit",
          "name": "runSeleniumTestsBare",
          "normalized": "[(String,Selenium())]-\u003eSelenium()",
          "package": "selenium",
          "partial": "Selenium Tests Bare",
          "signature": "[(String,Selenium())]-\u003eSelenium()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-HUnit.html#v:runSeleniumTestsBare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.HUnit",
          "name": "runSeleniumTestsTT",
          "package": "selenium",
          "signature": "[(String, Selenium ())] -\u003e Selenium Counts",
          "source": "src/Test-Selenium-HUnit.html#runSeleniumTestsTT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium HUnit",
          "module": "Test.Selenium.HUnit",
          "name": "runSeleniumTestsTT",
          "normalized": "[(String,Selenium())]-\u003eSelenium Counts",
          "package": "selenium",
          "partial": "Selenium Tests TT",
          "signature": "[(String,Selenium())]-\u003eSelenium Counts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-HUnit.html#v:runSeleniumTestsTT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions to ease interactive use inside GHCi.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Selenium.Interactive",
          "name": "Interactive",
          "package": "selenium",
          "source": "src/Test-Selenium-Interactive.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions to ease interactive use inside GHCi",
          "hierarchy": "Test Selenium Interactive",
          "module": "Test.Selenium.Interactive",
          "name": "Interactive",
          "package": "selenium",
          "partial": "Interactive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Interactive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Interactive",
          "name": "($$)",
          "package": "selenium",
          "signature": "(Selenium () -\u003e r) -\u003e Selenium t -\u003e r",
          "source": "src/Test-Selenium-Interactive.html#%24%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Interactive",
          "module": "Test.Selenium.Interactive",
          "name": "($$) $$",
          "normalized": "(Selenium()-\u003ea)-\u003eSelenium b-\u003ea",
          "package": "selenium",
          "signature": "(Selenium()-\u003er)-\u003eSelenium t-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Interactive.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts up a session and returns a wrapper function that will run\n   commands. Gives common defaults for browser and host.\n\u003c/p\u003e",
          "module": "Test.Selenium.Interactive",
          "name": "start",
          "package": "selenium",
          "signature": "String -\u003e IO (Selenium a -\u003e IO (Either String a))",
          "source": "src/Test-Selenium-Interactive.html#start",
          "type": "function"
        },
        "index": {
          "description": "Starts up session and returns wrapper function that will run commands Gives common defaults for browser and host",
          "hierarchy": "Test Selenium Interactive",
          "module": "Test.Selenium.Interactive",
          "name": "start",
          "normalized": "String-\u003eIO(Selenium a-\u003eIO(Either String a))",
          "package": "selenium",
          "signature": "String-\u003eIO(Selenium a-\u003eIO(Either String a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Interactive.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops a session (in the wrapper returned by start)\n\u003c/p\u003e",
          "module": "Test.Selenium.Interactive",
          "name": "stop",
          "package": "selenium",
          "signature": "Selenium ()",
          "source": "src/Test-Selenium-Interactive.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stops session in the wrapper returned by start",
          "hierarchy": "Test Selenium Interactive",
          "module": "Test.Selenium.Interactive",
          "name": "stop",
          "normalized": "Selenium()",
          "package": "selenium",
          "signature": "Selenium()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Interactive.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Pretty",
          "name": "Pretty",
          "package": "selenium",
          "source": "src/Test-Selenium-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Selenium Pretty",
          "module": "Test.Selenium.Pretty",
          "name": "Pretty",
          "package": "selenium",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two strings with \u003ca\u003e&\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c&\u003e)",
          "package": "selenium",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Test-Selenium-Pretty.html#%3C%26%3E",
          "type": "function"
        },
        "index": {
          "description": "Join two strings with",
          "hierarchy": "Test Selenium Pretty",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c&\u003e) \u003c&\u003e",
          "normalized": "String-\u003eString-\u003eString",
          "package": "selenium",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Pretty.html#v:-60--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two strings with =\n\u003c/p\u003e",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c=\u003e)",
          "package": "selenium",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Test-Selenium-Pretty.html#%3C%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Join two strings with",
          "hierarchy": "Test Selenium Pretty",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c=\u003e) \u003c=\u003e",
          "normalized": "String-\u003eString-\u003eString",
          "package": "selenium",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Pretty.html#v:-60--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two strings with ?\n\u003c/p\u003e",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c?\u003e)",
          "package": "selenium",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Test-Selenium-Pretty.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Join two strings with",
          "hierarchy": "Test Selenium Pretty",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "String-\u003eString-\u003eString",
          "package": "selenium",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Pretty.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two strings with :\n\u003c/p\u003e",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c:\u003e)",
          "package": "selenium",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Test-Selenium-Pretty.html#%3C%3A%3E",
          "type": "function"
        },
        "index": {
          "description": "Join two strings with",
          "hierarchy": "Test Selenium Pretty",
          "module": "Test.Selenium.Pretty",
          "name": "(\u003c:\u003e) \u003c:\u003e",
          "normalized": "String-\u003eString-\u003eString",
          "package": "selenium",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Pretty.html#v:-60-:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell binding the HTTP protocol spoken by the Selenium Remote Control\n server. The Selenium server allows remote clients to control a web browser,\n acting as automated users.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Selenium.Server",
          "name": "Server",
          "package": "selenium",
          "source": "src/Test-Selenium-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell binding the HTTP protocol spoken by the Selenium Remote Control server The Selenium server allows remote clients to control web browser acting as automated users",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Server",
          "package": "selenium",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrowser types\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "Browser",
          "package": "selenium",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "data"
        },
        "index": {
          "description": "Browser types",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Browser",
          "package": "selenium",
          "partial": "Browser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#t:Browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SCommand: an action or accessor\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "SCommand",
          "package": "selenium",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "data"
        },
        "index": {
          "description": "An SCommand an action or accessor",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SCommand",
          "package": "selenium",
          "partial": "SCommand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#t:SCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Selenium Monad, an error-handling read-only state\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "Selenium",
          "package": "selenium",
          "source": "src/Test-Selenium-Server.html#Selenium",
          "type": "data"
        },
        "index": {
          "description": "The Selenium Monad an error-handling read-only state",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Selenium",
          "package": "selenium",
          "partial": "Selenium",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#t:Selenium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "SeleniumRCSession",
          "package": "selenium",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SeleniumRCSession",
          "package": "selenium",
          "partial": "Selenium RCSession",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#t:SeleniumRCSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "Chrome",
          "package": "selenium",
          "signature": "Chrome",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Chrome",
          "package": "selenium",
          "partial": "Chrome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:Chrome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "Firefox",
          "package": "selenium",
          "signature": "Firefox",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Firefox",
          "package": "selenium",
          "partial": "Firefox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:Firefox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "InternetExplorer",
          "package": "selenium",
          "signature": "InternetExplorer",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "InternetExplorer",
          "package": "selenium",
          "partial": "Internet Explorer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:InternetExplorer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "Konqueror",
          "package": "selenium",
          "signature": "Konqueror",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Konqueror",
          "package": "selenium",
          "partial": "Konqueror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:Konqueror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "Opera",
          "package": "selenium",
          "signature": "Opera",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Opera",
          "package": "selenium",
          "partial": "Opera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:Opera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "Other",
          "package": "selenium",
          "signature": "Other String",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Other",
          "package": "selenium",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SAddLocationStrategy",
          "package": "selenium",
          "signature": "SAddLocationStrategy",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAddLocationStrategy\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SAddLocationStrategy\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SAddLocationStrategy",
          "package": "selenium",
          "partial": "SAdd Location Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAddLocationStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SAddSelection",
          "package": "selenium",
          "signature": "SAddSelection",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAddSelection\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SAddSelection\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SAddSelection",
          "package": "selenium",
          "partial": "SAdd Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAddSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SAltKeyDown",
          "package": "selenium",
          "signature": "SAltKeyDown",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAltKeyDown\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SAltKeyDown\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SAltKeyDown",
          "package": "selenium",
          "partial": "SAlt Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAltKeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SAltKeyUp",
          "package": "selenium",
          "signature": "SAltKeyUp",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAltKeyUp\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SAltKeyUp\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SAltKeyUp",
          "package": "selenium",
          "partial": "SAlt Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAltKeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SAnswerNextPrompt",
          "package": "selenium",
          "signature": "SAnswerNextPrompt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAnswerNextPrompt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SAnswerNextPrompt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SAnswerNextPrompt",
          "package": "selenium",
          "partial": "SAnswer Next Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SAnswerNextPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SCancelNextPrompt",
          "package": "selenium",
          "signature": "SCancelNextPrompt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SCancelNextPrompt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SCancelNextPrompt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SCancelNextPrompt",
          "package": "selenium",
          "partial": "SCancel Next Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SCancelNextPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SCheck",
          "package": "selenium",
          "signature": "SCheck",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SCheck\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SCheck\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SCheck",
          "package": "selenium",
          "partial": "SCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SClick",
          "package": "selenium",
          "signature": "SClick",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SClick\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SClick\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SClick",
          "package": "selenium",
          "partial": "SClick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SClickAt",
          "package": "selenium",
          "signature": "SClickAt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SClickAt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SClickAt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SClickAt",
          "package": "selenium",
          "partial": "SClick At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SClickAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SClose",
          "package": "selenium",
          "signature": "SClose",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SClose\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SClose\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SClose",
          "package": "selenium",
          "partial": "SClose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SControlKeyDown",
          "package": "selenium",
          "signature": "SControlKeyDown",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SControlKeyDown\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SControlKeyDown\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SControlKeyDown",
          "package": "selenium",
          "partial": "SControl Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SControlKeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SControlKeyUp",
          "package": "selenium",
          "signature": "SControlKeyUp",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SControlKeyUp\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SControlKeyUp\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SControlKeyUp",
          "package": "selenium",
          "partial": "SControl Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SControlKeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SCreateCookie",
          "package": "selenium",
          "signature": "SCreateCookie",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SCreateCookie\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SCreateCookie\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SCreateCookie",
          "package": "selenium",
          "partial": "SCreate Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SCreateCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SDeleteCookie",
          "package": "selenium",
          "signature": "SDeleteCookie",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDeleteCookie\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SDeleteCookie\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SDeleteCookie",
          "package": "selenium",
          "partial": "SDelete Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDeleteCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SDoubleClick",
          "package": "selenium",
          "signature": "SDoubleClick",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDoubleClick\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SDoubleClick\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SDoubleClick",
          "package": "selenium",
          "partial": "SDouble Click",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDoubleClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SDoubleClickAt",
          "package": "selenium",
          "signature": "SDoubleClickAt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDoubleClickAt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SDoubleClickAt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SDoubleClickAt",
          "package": "selenium",
          "partial": "SDouble Click At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDoubleClickAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SDragAndDrop",
          "package": "selenium",
          "signature": "SDragAndDrop",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDragAndDrop\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SDragAndDrop\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SDragAndDrop",
          "package": "selenium",
          "partial": "SDrag And Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDragAndDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SDragAndDropToObject",
          "package": "selenium",
          "signature": "SDragAndDropToObject",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDragAndDropToObject\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SDragAndDropToObject\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SDragAndDropToObject",
          "package": "selenium",
          "partial": "SDrag And Drop To Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SDragAndDropToObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SEval",
          "package": "selenium",
          "signature": "SEval",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SEval\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SEval\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SEval",
          "package": "selenium",
          "partial": "SEval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SFireEvent",
          "package": "selenium",
          "signature": "SFireEvent",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SFireEvent\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SFireEvent\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SFireEvent",
          "package": "selenium",
          "partial": "SFire Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SFireEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SFrameMatchesExpression",
          "package": "selenium",
          "signature": "SFrameMatchesExpression",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SFrameMatchesExpression\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SFrameMatchesExpression\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SFrameMatchesExpression",
          "package": "selenium",
          "partial": "SFrame Matches Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SFrameMatchesExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAlert",
          "package": "selenium",
          "signature": "SGetAlert",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAlert\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAlert\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAlert",
          "package": "selenium",
          "partial": "SGet Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAllButtons",
          "package": "selenium",
          "signature": "SGetAllButtons",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllButtons\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAllButtons\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAllButtons",
          "package": "selenium",
          "partial": "SGet All Buttons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllButtons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAllFields",
          "package": "selenium",
          "signature": "SGetAllFields",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllFields\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAllFields\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAllFields",
          "package": "selenium",
          "partial": "SGet All Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAllLinks",
          "package": "selenium",
          "signature": "SGetAllLinks",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllLinks\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAllLinks\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAllLinks",
          "package": "selenium",
          "partial": "SGet All Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAllWindowIds",
          "package": "selenium",
          "signature": "SGetAllWindowIds",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllWindowIds\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAllWindowIds\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAllWindowIds",
          "package": "selenium",
          "partial": "SGet All Window Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllWindowIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAllWindowNames",
          "package": "selenium",
          "signature": "SGetAllWindowNames",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllWindowNames\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAllWindowNames\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAllWindowNames",
          "package": "selenium",
          "partial": "SGet All Window Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllWindowNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAllWindowTitles",
          "package": "selenium",
          "signature": "SGetAllWindowTitles",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllWindowTitles\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAllWindowTitles\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAllWindowTitles",
          "package": "selenium",
          "partial": "SGet All Window Titles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAllWindowTitles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAttrFromAllWindows",
          "package": "selenium",
          "signature": "SGetAttrFromAllWindows",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAttrFromAllWindows\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAttrFromAllWindows\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAttrFromAllWindows",
          "package": "selenium",
          "partial": "SGet Attr From All Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAttrFromAllWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetAttribute",
          "package": "selenium",
          "signature": "SGetAttribute",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAttribute\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetAttribute\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetAttribute",
          "package": "selenium",
          "partial": "SGet Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetBodyText",
          "package": "selenium",
          "signature": "SGetBodyText",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetBodyText\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetBodyText\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetBodyText",
          "package": "selenium",
          "partial": "SGet Body Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetBodyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetConfirmation",
          "package": "selenium",
          "signature": "SGetConfirmation",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetConfirmation\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetConfirmation\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetConfirmation",
          "package": "selenium",
          "partial": "SGet Confirmation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetConfirmation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetCookie",
          "package": "selenium",
          "signature": "SGetCookie",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetCookie\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetCookie\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetCookie",
          "package": "selenium",
          "partial": "SGet Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetCursorPosition",
          "package": "selenium",
          "signature": "SGetCursorPosition",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetCursorPosition\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetCursorPosition\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetCursorPosition",
          "package": "selenium",
          "partial": "SGet Cursor Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetCursorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetElementHeight",
          "package": "selenium",
          "signature": "SGetElementHeight",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementHeight\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetElementHeight\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetElementHeight",
          "package": "selenium",
          "partial": "SGet Element Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetElementIndex",
          "package": "selenium",
          "signature": "SGetElementIndex",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementIndex\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetElementIndex\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetElementIndex",
          "package": "selenium",
          "partial": "SGet Element Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetElementPositionLeft",
          "package": "selenium",
          "signature": "SGetElementPositionLeft",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementPositionLeft\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetElementPositionLeft\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetElementPositionLeft",
          "package": "selenium",
          "partial": "SGet Element Position Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementPositionLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetElementPositionTop",
          "package": "selenium",
          "signature": "SGetElementPositionTop",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementPositionTop\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetElementPositionTop\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetElementPositionTop",
          "package": "selenium",
          "partial": "SGet Element Position Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementPositionTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetElementWidth",
          "package": "selenium",
          "signature": "SGetElementWidth",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementWidth\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetElementWidth\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetElementWidth",
          "package": "selenium",
          "partial": "SGet Element Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetElementWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetExpression",
          "package": "selenium",
          "signature": "SGetExpression",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetExpression\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetExpression\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetExpression",
          "package": "selenium",
          "partial": "SGet Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetHTMLSource",
          "package": "selenium",
          "signature": "SGetHTMLSource",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetHTMLSource\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetHTMLSource\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetHTMLSource",
          "package": "selenium",
          "partial": "SGet HTMLSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetHTMLSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetLocation",
          "package": "selenium",
          "signature": "SGetLocation",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetLocation\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetLocation\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetLocation",
          "package": "selenium",
          "partial": "SGet Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetMouseSpeed",
          "package": "selenium",
          "signature": "SGetMouseSpeed",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetMouseSpeed\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetMouseSpeed\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetMouseSpeed",
          "package": "selenium",
          "partial": "SGet Mouse Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetMouseSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetPrompt",
          "package": "selenium",
          "signature": "SGetPrompt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetPrompt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetPrompt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetPrompt",
          "package": "selenium",
          "partial": "SGet Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectOptions",
          "package": "selenium",
          "signature": "SGetSelectOptions",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectOptions\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectOptions\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectOptions",
          "package": "selenium",
          "partial": "SGet Select Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedId",
          "package": "selenium",
          "signature": "SGetSelectedId",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedId\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedId\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedId",
          "package": "selenium",
          "partial": "SGet Selected Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedIds",
          "package": "selenium",
          "signature": "SGetSelectedIds",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedIds\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedIds\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedIds",
          "package": "selenium",
          "partial": "SGet Selected Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedIndex",
          "package": "selenium",
          "signature": "SGetSelectedIndex",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedIndex\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedIndex\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedIndex",
          "package": "selenium",
          "partial": "SGet Selected Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedIndexes",
          "package": "selenium",
          "signature": "SGetSelectedIndexes",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedIndexes\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedIndexes\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedIndexes",
          "package": "selenium",
          "partial": "SGet Selected Indexes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedLabel",
          "package": "selenium",
          "signature": "SGetSelectedLabel",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedLabel\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedLabel\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedLabel",
          "package": "selenium",
          "partial": "SGet Selected Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedLabels",
          "package": "selenium",
          "signature": "SGetSelectedLabels",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedLabels\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedLabels\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedLabels",
          "package": "selenium",
          "partial": "SGet Selected Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedValue",
          "package": "selenium",
          "signature": "SGetSelectedValue",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedValue\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedValue\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedValue",
          "package": "selenium",
          "partial": "SGet Selected Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSelectedValues",
          "package": "selenium",
          "signature": "SGetSelectedValues",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedValues\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSelectedValues\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSelectedValues",
          "package": "selenium",
          "partial": "SGet Selected Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSelectedValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetSpeed",
          "package": "selenium",
          "signature": "SGetSpeed",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSpeed\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetSpeed\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetSpeed",
          "package": "selenium",
          "partial": "SGet Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetTable",
          "package": "selenium",
          "signature": "SGetTable",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetTable\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetTable\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetTable",
          "package": "selenium",
          "partial": "SGet Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetText",
          "package": "selenium",
          "signature": "SGetText",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetText\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetText\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetText",
          "package": "selenium",
          "partial": "SGet Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetTitle",
          "package": "selenium",
          "signature": "SGetTitle",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetTitle\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetTitle\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetTitle",
          "package": "selenium",
          "partial": "SGet Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetValue",
          "package": "selenium",
          "signature": "SGetValue",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetValue\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetValue\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetValue",
          "package": "selenium",
          "partial": "SGet Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGetXPathCount",
          "package": "selenium",
          "signature": "SGetXPathCount",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetXPathCount\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGetXPathCount\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGetXPathCount",
          "package": "selenium",
          "partial": "SGet XPath Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGetXPathCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SGoBack",
          "package": "selenium",
          "signature": "SGoBack",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGoBack\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SGoBack\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SGoBack",
          "package": "selenium",
          "partial": "SGo Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SGoBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SHighlight",
          "package": "selenium",
          "signature": "SHighlight",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SHighlight\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SHighlight\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SHighlight",
          "package": "selenium",
          "partial": "SHighlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsAlertPresent",
          "package": "selenium",
          "signature": "SIsAlertPresent",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsAlertPresent\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsAlertPresent\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsAlertPresent",
          "package": "selenium",
          "partial": "SIs Alert Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsAlertPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsChecked",
          "package": "selenium",
          "signature": "SIsChecked",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsChecked\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsChecked\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsChecked",
          "package": "selenium",
          "partial": "SIs Checked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsChecked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsConfirmationPresent",
          "package": "selenium",
          "signature": "SIsConfirmationPresent",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsConfirmationPresent\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsConfirmationPresent\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsConfirmationPresent",
          "package": "selenium",
          "partial": "SIs Confirmation Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsConfirmationPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsEditable",
          "package": "selenium",
          "signature": "SIsEditable",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsEditable\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsEditable\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsEditable",
          "package": "selenium",
          "partial": "SIs Editable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsEditable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsElementPresent",
          "package": "selenium",
          "signature": "SIsElementPresent",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsElementPresent\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsElementPresent\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsElementPresent",
          "package": "selenium",
          "partial": "SIs Element Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsElementPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsOrdered",
          "package": "selenium",
          "signature": "SIsOrdered",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsOrdered\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsOrdered\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsOrdered",
          "package": "selenium",
          "partial": "SIs Ordered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsPromptPresent",
          "package": "selenium",
          "signature": "SIsPromptPresent",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsPromptPresent\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsPromptPresent\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsPromptPresent",
          "package": "selenium",
          "partial": "SIs Prompt Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsPromptPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsSomethingSelected",
          "package": "selenium",
          "signature": "SIsSomethingSelected",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsSomethingSelected\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsSomethingSelected\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsSomethingSelected",
          "package": "selenium",
          "partial": "SIs Something Selected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsSomethingSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsTextPresent",
          "package": "selenium",
          "signature": "SIsTextPresent",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsTextPresent\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsTextPresent\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsTextPresent",
          "package": "selenium",
          "partial": "SIs Text Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsTextPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SIsVisible",
          "package": "selenium",
          "signature": "SIsVisible",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsVisible\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SIsVisible\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SIsVisible",
          "package": "selenium",
          "partial": "SIs Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SIsVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SKeyDown",
          "package": "selenium",
          "signature": "SKeyDown",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SKeyDown\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SKeyDown\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SKeyDown",
          "package": "selenium",
          "partial": "SKey Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SKeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SKeyPress",
          "package": "selenium",
          "signature": "SKeyPress",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SKeyPress\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SKeyPress\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SKeyPress",
          "package": "selenium",
          "partial": "SKey Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SKeyPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SKeyUp",
          "package": "selenium",
          "signature": "SKeyUp",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SKeyUp\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SKeyUp\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SKeyUp",
          "package": "selenium",
          "partial": "SKey Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SKeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMetaKeyDown",
          "package": "selenium",
          "signature": "SMetaKeyDown",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMetaKeyDown\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMetaKeyDown\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMetaKeyDown",
          "package": "selenium",
          "partial": "SMeta Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMetaKeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMetaKeyUp",
          "package": "selenium",
          "signature": "SMetaKeyUp",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMetaKeyUp\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMetaKeyUp\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMetaKeyUp",
          "package": "selenium",
          "partial": "SMeta Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMetaKeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseDown",
          "package": "selenium",
          "signature": "SMouseDown",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseDown\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseDown\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseDown",
          "package": "selenium",
          "partial": "SMouse Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseDownAt",
          "package": "selenium",
          "signature": "SMouseDownAt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseDownAt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseDownAt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseDownAt",
          "package": "selenium",
          "partial": "SMouse Down At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseDownAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseMove",
          "package": "selenium",
          "signature": "SMouseMove",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseMove\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseMove\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseMove",
          "package": "selenium",
          "partial": "SMouse Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseMoveAt",
          "package": "selenium",
          "signature": "SMouseMoveAt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseMoveAt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseMoveAt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseMoveAt",
          "package": "selenium",
          "partial": "SMouse Move At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseMoveAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseOut",
          "package": "selenium",
          "signature": "SMouseOut",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseOut\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseOut\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseOut",
          "package": "selenium",
          "partial": "SMouse Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseOver",
          "package": "selenium",
          "signature": "SMouseOver",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseOver\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseOver\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseOver",
          "package": "selenium",
          "partial": "SMouse Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseUp",
          "package": "selenium",
          "signature": "SMouseUp",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseUp\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseUp\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseUp",
          "package": "selenium",
          "partial": "SMouse Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SMouseUpAt",
          "package": "selenium",
          "signature": "SMouseUpAt",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseUpAt\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SMouseUpAt\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SMouseUpAt",
          "package": "selenium",
          "partial": "SMouse Up At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SMouseUpAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SNewSession",
          "package": "selenium",
          "signature": "SNewSession",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SNewSession\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SNewSession\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SNewSession",
          "package": "selenium",
          "partial": "SNew Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SNewSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SOpen",
          "package": "selenium",
          "signature": "SOpen",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SOpen\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SOpen\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SOpen",
          "package": "selenium",
          "partial": "SOpen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SOpenWindow",
          "package": "selenium",
          "signature": "SOpenWindow",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SOpenWindow\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SOpenWindow\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SOpenWindow",
          "package": "selenium",
          "partial": "SOpen Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SOpenWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SRefresh",
          "package": "selenium",
          "signature": "SRefresh",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SRefresh\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SRefresh\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SRefresh",
          "package": "selenium",
          "partial": "SRefresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SRemoveAllSelections",
          "package": "selenium",
          "signature": "SRemoveAllSelections",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SRemoveAllSelections\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SRemoveAllSelections\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SRemoveAllSelections",
          "package": "selenium",
          "partial": "SRemove All Selections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SRemoveAllSelections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SRemoveSelection",
          "package": "selenium",
          "signature": "SRemoveSelection",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SRemoveSelection\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SRemoveSelection\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SRemoveSelection",
          "package": "selenium",
          "partial": "SRemove Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SRemoveSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSelect",
          "package": "selenium",
          "signature": "SSelect",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSelect\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSelect\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSelect",
          "package": "selenium",
          "partial": "SSelect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSelectFrame",
          "package": "selenium",
          "signature": "SSelectFrame",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSelectFrame\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSelectFrame\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSelectFrame",
          "package": "selenium",
          "partial": "SSelect Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSelectFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSelectWindow",
          "package": "selenium",
          "signature": "SSelectWindow",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSelectWindow\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSelectWindow\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSelectWindow",
          "package": "selenium",
          "partial": "SSelect Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSelectWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSetContext",
          "package": "selenium",
          "signature": "SSetContext",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetContext\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSetContext\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSetContext",
          "package": "selenium",
          "partial": "SSet Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSetCursorPosition",
          "package": "selenium",
          "signature": "SSetCursorPosition",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetCursorPosition\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSetCursorPosition\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSetCursorPosition",
          "package": "selenium",
          "partial": "SSet Cursor Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetCursorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSetMouseSpeed",
          "package": "selenium",
          "signature": "SSetMouseSpeed",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetMouseSpeed\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSetMouseSpeed\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSetMouseSpeed",
          "package": "selenium",
          "partial": "SSet Mouse Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetMouseSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSetSpeed",
          "package": "selenium",
          "signature": "SSetSpeed",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetSpeed\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSetSpeed\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSetSpeed",
          "package": "selenium",
          "partial": "SSet Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSetTimeout",
          "package": "selenium",
          "signature": "SSetTimeout",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetTimeout\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSetTimeout\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSetTimeout",
          "package": "selenium",
          "partial": "SSet Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSetTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SShiftKeyDown",
          "package": "selenium",
          "signature": "SShiftKeyDown",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SShiftKeyDown\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SShiftKeyDown\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SShiftKeyDown",
          "package": "selenium",
          "partial": "SShift Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SShiftKeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SShiftKeyUp",
          "package": "selenium",
          "signature": "SShiftKeyUp",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SShiftKeyUp\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SShiftKeyUp\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SShiftKeyUp",
          "package": "selenium",
          "partial": "SShift Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SShiftKeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SSubmit",
          "package": "selenium",
          "signature": "SSubmit",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSubmit\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SSubmit\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SSubmit",
          "package": "selenium",
          "partial": "SSubmit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "STestComplete",
          "package": "selenium",
          "signature": "STestComplete",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:STestComplete\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:STestComplete\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "STestComplete",
          "package": "selenium",
          "partial": "STest Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:STestComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SType",
          "package": "selenium",
          "signature": "SType",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SType\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SType\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SType",
          "package": "selenium",
          "partial": "SType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "STypeKeys",
          "package": "selenium",
          "signature": "STypeKeys",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:STypeKeys\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:STypeKeys\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "STypeKeys",
          "package": "selenium",
          "partial": "SType Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:STypeKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SUncheck",
          "package": "selenium",
          "signature": "SUncheck",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SUncheck\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SUncheck\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SUncheck",
          "package": "selenium",
          "partial": "SUncheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SUncheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SWaitForCondition",
          "package": "selenium",
          "signature": "SWaitForCondition",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWaitForCondition\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SWaitForCondition\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SWaitForCondition",
          "package": "selenium",
          "partial": "SWait For Condition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWaitForCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SWaitForPage",
          "package": "selenium",
          "signature": "SWaitForPage",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWaitForPage\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SWaitForPage\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SWaitForPage",
          "package": "selenium",
          "partial": "SWait For Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWaitForPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SWaitForPopup",
          "package": "selenium",
          "signature": "SWaitForPopup",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWaitForPopup\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SWaitForPopup\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SWaitForPopup",
          "package": "selenium",
          "partial": "SWait For Popup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWaitForPopup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SWindowFocus",
          "package": "selenium",
          "signature": "SWindowFocus",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWindowFocus\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SWindowFocus\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SWindowFocus",
          "package": "selenium",
          "partial": "SWindow Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWindowFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SWindowMatchesExpression",
          "package": "selenium",
          "signature": "SWindowMatchesExpression",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWindowMatchesExpression\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SWindowMatchesExpression\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SWindowMatchesExpression",
          "package": "selenium",
          "partial": "SWindow Matches Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWindowMatchesExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Selenium.Server\",\"Test.Selenium.Syntax\"]",
          "name": "SWindowMaximize",
          "package": "selenium",
          "signature": "SWindowMaximize",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWindowMaximize\",\"http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:SWindowMaximize\"]"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SWindowMaximize",
          "package": "selenium",
          "partial": "SWindow Maximize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SWindowMaximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "Safari",
          "package": "selenium",
          "signature": "Safari",
          "source": "src/Test-Selenium-Server.html#Browser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "Safari",
          "package": "selenium",
          "partial": "Safari",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:Safari"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "SeleniumRCSession",
          "package": "selenium",
          "signature": "SeleniumRCSession",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "SeleniumRCSession",
          "package": "selenium",
          "partial": "Selenium RCSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:SeleniumRCSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "check",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "check",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "click",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "click",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:click"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "clickAndWait",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#clickAndWait",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "clickAndWait",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "partial": "And Wait",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:clickAndWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a Selenium command to the server with a list of arguments.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "doCommand",
          "package": "selenium",
          "signature": "SCommand -\u003e [String] -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#doCommand",
          "type": "function"
        },
        "index": {
          "description": "Send Selenium command to the server with list of arguments",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "doCommand",
          "normalized": "SCommand-\u003e[String]-\u003eSelenium String",
          "package": "selenium",
          "partial": "Command",
          "signature": "SCommand-\u003e[String]-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:doCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a list of Selenium commands paired with arguments, and return\n | a  list of results.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "doCommandList",
          "package": "selenium",
          "signature": "[(SCommand, [String])] -\u003e Selenium [String]",
          "source": "src/Test-Selenium-Server.html#doCommandList",
          "type": "function"
        },
        "index": {
          "description": "Execute list of Selenium commands paired with arguments and return list of results",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "doCommandList",
          "normalized": "[(SCommand,[String])]-\u003eSelenium[String]",
          "package": "selenium",
          "partial": "Command List",
          "signature": "[(SCommand,[String])]-\u003eSelenium[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:doCommandList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "dragAndDrop",
          "package": "selenium",
          "signature": "Locator -\u003e String -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#dragAndDrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "dragAndDrop",
          "normalized": "Locator-\u003eString-\u003eSelenium String",
          "package": "selenium",
          "partial": "And Drop",
          "signature": "Locator-\u003eString-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:dragAndDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "dragAndDropToObject",
          "package": "selenium",
          "signature": "Locator -\u003e Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#dragAndDropToObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "dragAndDropToObject",
          "normalized": "Locator-\u003eLocator-\u003eSelenium String",
          "package": "selenium",
          "partial": "And Drop To Object",
          "signature": "Locator-\u003eLocator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:dragAndDropToObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "evalJS",
          "package": "selenium",
          "signature": "String -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#evalJS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "evalJS",
          "normalized": "String-\u003eSelenium String",
          "package": "selenium",
          "partial": "JS",
          "signature": "String-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:evalJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "getAllLinks",
          "package": "selenium",
          "signature": "Selenium [String]",
          "source": "src/Test-Selenium-Server.html#getAllLinks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "getAllLinks",
          "normalized": "Selenium[String]",
          "package": "selenium",
          "partial": "All Links",
          "signature": "Selenium[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:getAllLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "getAttribute",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#getAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "getAttribute",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "partial": "Attribute",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:getAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "getBodyText",
          "package": "selenium",
          "signature": "Selenium String",
          "source": "src/Test-Selenium-Server.html#getBodyText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "getBodyText",
          "package": "selenium",
          "partial": "Body Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:getBodyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "getSelectedIndex",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium Integer",
          "source": "src/Test-Selenium-Server.html#getSelectedIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "getSelectedIndex",
          "normalized": "Locator-\u003eSelenium Integer",
          "package": "selenium",
          "partial": "Selected Index",
          "signature": "Locator-\u003eSelenium Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:getSelectedIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "isChecked",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium Bool",
          "source": "src/Test-Selenium-Server.html#isChecked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "isChecked",
          "normalized": "Locator-\u003eSelenium Bool",
          "package": "selenium",
          "partial": "Checked",
          "signature": "Locator-\u003eSelenium Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:isChecked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "isElementPresent",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium Bool",
          "source": "src/Test-Selenium-Server.html#isElementPresent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "isElementPresent",
          "normalized": "Locator-\u003eSelenium Bool",
          "package": "selenium",
          "partial": "Element Present",
          "signature": "Locator-\u003eSelenium Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:isElementPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "isTextPresent",
          "package": "selenium",
          "signature": "String -\u003e Selenium Bool",
          "source": "src/Test-Selenium-Server.html#isTextPresent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "isTextPresent",
          "normalized": "String-\u003eSelenium Bool",
          "package": "selenium",
          "partial": "Text Present",
          "signature": "String-\u003eSelenium Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:isTextPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "keyPress",
          "package": "selenium",
          "signature": "Locator -\u003e String -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#typeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "keyPress",
          "normalized": "Locator-\u003eString-\u003eSelenium String",
          "package": "selenium",
          "partial": "Press",
          "signature": "Locator-\u003eString-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:keyPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unconnected Selenium session.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "mkSeleniumRCSession",
          "package": "selenium",
          "signature": "HostName -\u003e Browser -\u003e URI -\u003e SeleniumRCSession",
          "source": "src/Test-Selenium-Server.html#mkSeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "Create an unconnected Selenium session",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "mkSeleniumRCSession",
          "normalized": "HostName-\u003eBrowser-\u003eURI-\u003eSeleniumRCSession",
          "package": "selenium",
          "partial": "Selenium RCSession",
          "signature": "HostName-\u003eBrowser-\u003eURI-\u003eSeleniumRCSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:mkSeleniumRCSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "mkURI",
          "package": "selenium",
          "signature": "SeleniumRCSession -\u003e SCommand -\u003e [String] -\u003e Maybe URI",
          "source": "src/Test-Selenium-Server.html#mkURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "mkURI",
          "normalized": "SeleniumRCSession-\u003eSCommand-\u003e[String]-\u003eMaybe URI",
          "package": "selenium",
          "partial": "URI",
          "signature": "SeleniumRCSession-\u003eSCommand-\u003e[String]-\u003eMaybe URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:mkURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "mouseDown",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#mouseDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "mouseDown",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "partial": "Down",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:mouseDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "mouseMove",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#mouseDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "mouseMove",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "partial": "Move",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:mouseMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "mouseUp",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#mouseDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "mouseUp",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "partial": "Up",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:mouseUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "open",
          "package": "selenium",
          "signature": "String -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#open",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "open",
          "normalized": "String-\u003eSelenium String",
          "package": "selenium",
          "signature": "String-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Selenium action inside IO. This is the top-level function\n you'll usually use to run a Selenium command when not using\n \u003ccode\u003e\u003ca\u003ewithSelenium\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "runSelenium",
          "package": "selenium",
          "signature": "SeleniumRCSession -\u003e Selenium a -\u003e IO (Either String a)",
          "source": "src/Test-Selenium-Server.html#runSelenium",
          "type": "function"
        },
        "index": {
          "description": "Run Selenium action inside IO This is the top-level function you ll usually use to run Selenium command when not using withSelenium",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "runSelenium",
          "normalized": "SeleniumRCSession-\u003eSelenium a-\u003eIO(Either String a)",
          "package": "selenium",
          "partial": "Selenium",
          "signature": "SeleniumRCSession-\u003eSelenium a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:runSelenium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Selenium action within the ErrorT monad. Useful for chaining\n   together several actions without writing intermediate error handling.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "runSeleniumReader",
          "package": "selenium",
          "signature": "SeleniumRCSession -\u003e Selenium a -\u003e ErrorT String IO a",
          "source": "src/Test-Selenium-Server.html#runSeleniumReader",
          "type": "function"
        },
        "index": {
          "description": "Run Selenium action within the ErrorT monad Useful for chaining together several actions without writing intermediate error handling",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "runSeleniumReader",
          "normalized": "SeleniumRCSession-\u003eSelenium a-\u003eErrorT String IO a",
          "package": "selenium",
          "partial": "Selenium Reader",
          "signature": "SeleniumRCSession-\u003eSelenium a-\u003eErrorT String IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:runSeleniumReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of browser to start and use to run the tests\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "selBrowser",
          "package": "selenium",
          "signature": "Browser",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "The type of browser to start and use to run the tests",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selBrowser",
          "package": "selenium",
          "partial": "Browser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e of the Selenium server to connect to\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "selHost",
          "package": "selenium",
          "signature": "HostName",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "The HostName of the Selenium server to connect to",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selHost",
          "package": "selenium",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port of the Selenium server to connect to\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "selPort",
          "package": "selenium",
          "signature": "Int",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "The port of the Selenium server to connect to",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selPort",
          "package": "selenium",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA session ID filled in by \u003ccode\u003e\u003ca\u003estartSelenium\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "selSessionID",
          "package": "selenium",
          "signature": "Maybe String",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "session ID filled in by startSelenium",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selSessionID",
          "package": "selenium",
          "partial": "Session ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selSessionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base URL of the site to be tested\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "selURL",
          "package": "selenium",
          "signature": "URI",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "The base URL of the site to be tested",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selURL",
          "package": "selenium",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse Network.Browser instead of Network.HTTP if true\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "selUseBrowse",
          "package": "selenium",
          "signature": "Bool",
          "source": "src/Test-Selenium-Server.html#SeleniumRCSession",
          "type": "function"
        },
        "index": {
          "description": "Use Network.Browser instead of Network.HTTP if true",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selUseBrowse",
          "package": "selenium",
          "partial": "Use Browse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selUseBrowse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "selectFrame",
          "package": "selenium",
          "signature": "String -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#selectFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "selectFrame",
          "normalized": "String-\u003eSelenium String",
          "package": "selenium",
          "partial": "Frame",
          "signature": "String-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:selectFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the server, and tell it to start a web browser.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "startSelenium",
          "package": "selenium",
          "signature": "Selenium SeleniumRCSession",
          "source": "src/Test-Selenium-Server.html#startSelenium",
          "type": "function"
        },
        "index": {
          "description": "Connect to the server and tell it to start web browser",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "startSelenium",
          "package": "selenium",
          "partial": "Selenium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:startSelenium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell the server that a session is finished.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "stopSelenium",
          "package": "selenium",
          "signature": "Selenium ()",
          "source": "src/Test-Selenium-Server.html#stopSelenium",
          "type": "function"
        },
        "index": {
          "description": "Tell the server that session is finished",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "stopSelenium",
          "normalized": "Selenium()",
          "package": "selenium",
          "partial": "Selenium",
          "signature": "Selenium()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:stopSelenium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "submit",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#submit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "submit",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:submit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "typeText",
          "package": "selenium",
          "signature": "Locator -\u003e String -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#typeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "typeText",
          "normalized": "Locator-\u003eString-\u003eSelenium String",
          "package": "selenium",
          "partial": "Text",
          "signature": "Locator-\u003eString-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:typeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "uncheck",
          "package": "selenium",
          "signature": "Locator -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "uncheck",
          "normalized": "Locator-\u003eSelenium String",
          "package": "selenium",
          "signature": "Locator-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:uncheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "waitForCondition",
          "package": "selenium",
          "signature": "String -\u003e Integer -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#waitForCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "waitForCondition",
          "normalized": "String-\u003eInteger-\u003eSelenium String",
          "package": "selenium",
          "partial": "For Condition",
          "signature": "String-\u003eInteger-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:waitForCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Server",
          "name": "waitForPage",
          "package": "selenium",
          "signature": "Integer -\u003e Selenium String",
          "source": "src/Test-Selenium-Server.html#waitForPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "waitForPage",
          "normalized": "Integer-\u003eSelenium String",
          "package": "selenium",
          "partial": "For Page",
          "signature": "Integer-\u003eSelenium String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:waitForPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a session, execute some code with the resulting handle, and then\n   stop the session.\n\u003c/p\u003e",
          "module": "Test.Selenium.Server",
          "name": "withSelenium",
          "package": "selenium",
          "signature": "SeleniumRCSession -\u003e Selenium a -\u003e IO (Either String a)",
          "source": "src/Test-Selenium-Server.html#withSelenium",
          "type": "function"
        },
        "index": {
          "description": "Start session execute some code with the resulting handle and then stop the session",
          "hierarchy": "Test Selenium Server",
          "module": "Test.Selenium.Server",
          "name": "withSelenium",
          "normalized": "SeleniumRCSession-\u003eSelenium a-\u003eIO(Either String a)",
          "package": "selenium",
          "partial": "Selenium",
          "signature": "SeleniumRCSession-\u003eSelenium a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Server.html#v:withSelenium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell data structures describing the commands understood by the Selenium\n web application testing system.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Selenium.Syntax",
          "name": "Syntax",
          "package": "selenium",
          "source": "src/Test-Selenium-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell data structures describing the commands understood by the Selenium web application testing system",
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "Syntax",
          "package": "selenium",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "Locator",
          "package": "selenium",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "Locator",
          "package": "selenium",
          "partial": "Locator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#t:Locator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SCommand: an action or accessor\n\u003c/p\u003e",
          "module": "Test.Selenium.Syntax",
          "name": "SCommand",
          "package": "selenium",
          "source": "src/Test-Selenium-Syntax.html#SCommand",
          "type": "data"
        },
        "index": {
          "description": "An SCommand an action or accessor",
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "SCommand",
          "package": "selenium",
          "partial": "SCommand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#t:SCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "SelectOptionLocator",
          "package": "selenium",
          "source": "src/Test-Selenium-Syntax.html#SelectOptionLocator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "SelectOptionLocator",
          "package": "selenium",
          "partial": "Select Option Locator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#t:SelectOptionLocator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "CSS",
          "package": "selenium",
          "signature": "CSS String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "CSS",
          "package": "selenium",
          "partial": "CSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:CSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "DOM",
          "package": "selenium",
          "signature": "DOM String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "DOM",
          "package": "selenium",
          "partial": "DOM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:DOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "Id",
          "package": "selenium",
          "signature": "Id String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "Id",
          "package": "selenium",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "IdOrName",
          "package": "selenium",
          "signature": "IdOrName String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "IdOrName",
          "package": "selenium",
          "partial": "Id Or Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:IdOrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "Link",
          "package": "selenium",
          "signature": "Link String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "Link",
          "package": "selenium",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "Name",
          "package": "selenium",
          "signature": "Name String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "Name",
          "package": "selenium",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "OptionId",
          "package": "selenium",
          "signature": "OptionId String",
          "source": "src/Test-Selenium-Syntax.html#SelectOptionLocator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "OptionId",
          "package": "selenium",
          "partial": "Option Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:OptionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "OptionIndex",
          "package": "selenium",
          "signature": "OptionIndex Int",
          "source": "src/Test-Selenium-Syntax.html#SelectOptionLocator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "OptionIndex",
          "package": "selenium",
          "partial": "Option Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:OptionIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "OptionLabel",
          "package": "selenium",
          "signature": "OptionLabel String",
          "source": "src/Test-Selenium-Syntax.html#SelectOptionLocator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "OptionLabel",
          "package": "selenium",
          "partial": "Option Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:OptionLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "OptionValue",
          "package": "selenium",
          "signature": "OptionValue String",
          "source": "src/Test-Selenium-Syntax.html#SelectOptionLocator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "OptionValue",
          "package": "selenium",
          "partial": "Option Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:OptionValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Selenium.Syntax",
          "name": "XPath",
          "package": "selenium",
          "signature": "XPath String",
          "source": "src/Test-Selenium-Syntax.html#Locator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Selenium Syntax",
          "module": "Test.Selenium.Syntax",
          "name": "XPath",
          "package": "selenium",
          "partial": "XPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selenium/docs/Test-Selenium-Syntax.html#v:XPath"
      }
    }
  ]
]