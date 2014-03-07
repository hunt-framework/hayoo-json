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
        "word": "hspec-webdriver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrite hspec tests that are webdriver tests, automatically managing the webdriver sessions.\n\u003c/p\u003e\u003cp\u003eThis module re-exports functions from \u003ca\u003eTest.Hspec\u003c/a\u003e and \u003ca\u003eTest.WebDriver.Commands\u003c/a\u003e and it is\n intended that you just import \u003ccode\u003eTest.Hspec.WebDriver\u003c/code\u003e.  If you need to import \u003ccode\u003eTest.Hspec\u003c/code\u003e or\n \u003ccode\u003eTest.WebDriver\u003c/code\u003e, you should do so using a qualified import.\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\nmodule XKCD where\n\nimport Test.Hspec.WebDriver\n\nmain :: IO ()\nmain = hspec $\n    describe \"XKCD Tests\" $ do\n\n        session \"for 327\" $ using Firefox $ do\n            it \"opens the page\" $ runWD $\n                openPage \"http://www.xkcd.com/327/\"\n            it \"checks hover text\" $ runWD $ do\n                e \u003c- findElem $ ByCSS \"div#comic \u003e img\"\n                e `shouldBeTag` \"img\"\n                e `shouldHaveAttr` (\"title\", \"Her daughter is named Help I'm trapped in a driver's license factory.\")\n\n        parallel $ session \"for 303\" $ using [Firefox, Chrome] $ do\n            it \"opens the page\" $ runWD $\n                openPage \"http://www.xkcd.com/303/\"\n            it \"checks the title\" $ runWD $ do\n                e \u003c- findElem $ ById \"ctitle\"\n                e `shouldBeTag` \"div\"\n                e `shouldHaveText` \"Compiling\"\n\u003c/pre\u003e\u003cp\u003eThe above code assumes selenium-server-standalone is running on \u003ccode\u003e127.0.0.1:4444\u003c/code\u003e at path\n \u003ccode\u003e/wd/hub\u003c/code\u003e (this is the default).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "WebDriver",
          "package": "hspec-webdriver",
          "source": "src/Test-Hspec-WebDriver.html",
          "type": "module"
        },
        "index": {
          "description": "Write hspec tests that are webdriver tests automatically managing the webdriver sessions This module re-exports functions from Test.Hspec and Test.WebDriver.Commands and it is intended that you just import Test.Hspec.WebDriver If you need to import Test.Hspec or Test.WebDriver you should do so using qualified import LANGUAGE OverloadedStrings module XKCD where import Test.Hspec.WebDriver main IO main hspec describe XKCD Tests do session for using Firefox do it opens the page runWD openPage http www.xkcd.com it checks hover text runWD do findElem ByCSS div comic img shouldBeTag img shouldHaveAttr title Her daughter is named Help trapped in driver license factory parallel session for using Firefox Chrome do it opens the page runWD openPage http www.xkcd.com it checks the title runWD do findElem ById ctitle shouldBeTag div shouldHaveText Compiling The above code assumes selenium-server-standalone is running on at path wd hub this is the default",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "WebDriver",
          "package": "hspec-webdriver",
          "partial": "Web Driver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWebdriver expectations consist of a set of browser \u003ccode\u003eCapabilities\u003c/code\u003e to use and the actual test as\n a \u003ccode\u003e\u003ca\u003eWD\u003c/a\u003e\u003c/code\u003e monad.  The browser capabilities are specified by an enumeration which is an instance of\n \u003ccode\u003e\u003ca\u003eTestCapabilities\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003eBrowserDefaults\u003c/code\u003e enumeration provides items that represent the default set of\n capabilities for each browser (see \u003ccode\u003edefaultCaps\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eTo obtain more control over the capabilities (e.g. to test multiple versions of IE or to test\n Firefrox without javascript), you should \u003ccode\u003eimport Test.Hspec.WebDriver hiding (BrowserDefaults)\u003c/code\u003e\n and then create your own enumeration which is an instance of \u003ccode\u003e\u003ca\u003eTestCapabilities\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUsing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "BrowserDefaults",
          "package": "hspec-webdriver",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "data"
        },
        "index": {
          "description": "Webdriver expectations consist of set of browser Capabilities to use and the actual test as WD monad The browser capabilities are specified by an enumeration which is an instance of TestCapabilities The BrowserDefaults enumeration provides items that represent the default set of capabilities for each browser see defaultCaps To obtain more control over the capabilities e.g to test multiple versions of IE or to test Firefrox without javascript you should import Test.Hspec.WebDriver hiding BrowserDefaults and then create your own enumeration which is an instance of TestCapabilities and Using",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "BrowserDefaults",
          "package": "hspec-webdriver",
          "partial": "Browser Defaults",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#t:BrowserDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "Spec",
          "package": "hspec-webdriver",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "Spec",
          "package": "hspec-webdriver",
          "partial": "Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides information about the browser capabilities used for testing.  If you want more control\n over capabilities, you should hide \u003ccode\u003e\u003ca\u003eBrowserDefaults\u003c/a\u003e\u003c/code\u003e and then make an enumeration of all the\n webdriver capabilities you will be testing with.  For example,\n\u003c/p\u003e\u003cpre\u003edata TestCaps = Firefox\n              | FirefoxWithoutJavascript\n              | Chrome\n              | IE8\n              | IE9\n   deriving (Show, Eq, Bounded, Enum)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eTestCaps\u003c/code\u003e must then be made an instance of \u003ccode\u003eTestCapabilities\u003c/code\u003e.  Also, instances of \u003ccode\u003eUsing\u003c/code\u003e\n should be created.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "TestCapabilities",
          "package": "hspec-webdriver",
          "source": "src/Test-Hspec-WebDriver.html#TestCapabilities",
          "type": "class"
        },
        "index": {
          "description": "Provides information about the browser capabilities used for testing If you want more control over capabilities you should hide BrowserDefaults and then make an enumeration of all the webdriver capabilities you will be testing with For example data TestCaps Firefox FirefoxWithoutJavascript Chrome IE8 IE9 deriving Show Eq Bounded Enum TestCaps must then be made an instance of TestCapabilities Also instances of Using should be created",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "TestCapabilities",
          "package": "hspec-webdriver",
          "partial": "Test Capabilities",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#t:TestCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass of things which can be converted to a list of capabilities.  It's primary purpose\n is to allow the word \u003ccode\u003eusing\u003c/code\u003e to be used with \u003ccode\u003e\u003ca\u003esession\u003c/a\u003e\u003c/code\u003e so that the session description reads like\n a sentance.\n\u003c/p\u003e\u003cpre\u003esession \"for the home page\" $ using Firefox $ do\n    it \"loads the page\" $ runWD $ do\n        ...\n    it \"scrolls the carosel\" $ runWD $ do\n        ...\nsession \"for the users page\" $ using [Firefox, Chrome] $ do\n    ...\n\u003c/pre\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "Using",
          "package": "hspec-webdriver",
          "source": "src/Test-Hspec-WebDriver.html#Using",
          "type": "class"
        },
        "index": {
          "description": "typeclass of things which can be converted to list of capabilities It primary purpose is to allow the word using to be used with session so that the session description reads like sentance session for the home page using Firefox do it loads the page runWD do it scrolls the carosel runWD do session for the users page using Firefox Chrome do",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "Using",
          "package": "hspec-webdriver",
          "partial": "Using",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#t:Using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "WD",
          "package": "hspec-webdriver",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "WD",
          "package": "hspec-webdriver",
          "partial": "WD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#t:WD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn example that can be passed to \u003ccode\u003e\u003ca\u003eit\u003c/a\u003e\u003c/code\u003e containing a webdriver action.  It must be created with\n \u003ccode\u003e\u003ca\u003erunWD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "WDExample",
          "package": "hspec-webdriver",
          "source": "src/Test-Hspec-WebDriver.html#WDExample",
          "type": "data"
        },
        "index": {
          "description": "An example that can be passed to it containing webdriver action It must be created with runWD",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "WDExample",
          "package": "hspec-webdriver",
          "partial": "WDExample",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#t:WDExample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "Android",
          "package": "hspec-webdriver",
          "signature": "Android",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "Android",
          "package": "hspec-webdriver",
          "partial": "Android",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:Android"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "Chrome",
          "package": "hspec-webdriver",
          "signature": "Chrome",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "Chrome",
          "package": "hspec-webdriver",
          "partial": "Chrome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:Chrome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "Firefox",
          "package": "hspec-webdriver",
          "signature": "Firefox",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "Firefox",
          "package": "hspec-webdriver",
          "partial": "Firefox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:Firefox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "IE",
          "package": "hspec-webdriver",
          "signature": "IE",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "IE",
          "package": "hspec-webdriver",
          "partial": "IE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:IE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "IPad",
          "package": "hspec-webdriver",
          "signature": "IPad",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "IPad",
          "package": "hspec-webdriver",
          "partial": "IPad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:IPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "IPhone",
          "package": "hspec-webdriver",
          "signature": "IPhone",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "IPhone",
          "package": "hspec-webdriver",
          "partial": "IPhone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:IPhone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "Opera",
          "package": "hspec-webdriver",
          "signature": "Opera",
          "source": "src/Test-Hspec-WebDriver.html#BrowserDefaults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "Opera",
          "package": "hspec-webdriver",
          "partial": "Opera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:Opera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "context",
          "package": "hspec-webdriver",
          "signature": "String -\u003e Spec -\u003e Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "context",
          "normalized": "String-\u003eSpec-\u003eSpec",
          "package": "hspec-webdriver",
          "signature": "String-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "describe",
          "package": "hspec-webdriver",
          "signature": "String -\u003e Spec -\u003e Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "describe",
          "normalized": "String-\u003eSpec-\u003eSpec",
          "package": "hspec-webdriver",
          "signature": "String-\u003eSpec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "hspec",
          "package": "hspec-webdriver",
          "signature": "Spec -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "hspec",
          "normalized": "Spec-\u003eIO()",
          "package": "hspec-webdriver",
          "signature": "Spec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:hspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "it",
          "package": "hspec-webdriver",
          "signature": "String -\u003e a -\u003e Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "it",
          "normalized": "String-\u003ea-\u003eSpec",
          "package": "hspec-webdriver",
          "signature": "String-\u003ea-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:it"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "liftIO",
          "package": "hspec-webdriver",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "hspec-webdriver",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe capabilities to pass to \u003ccode\u003ecreateSession\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "newCaps",
          "package": "hspec-webdriver",
          "signature": "c -\u003e WD Capabilities",
          "source": "src/Test-Hspec-WebDriver.html#newCaps",
          "type": "method"
        },
        "index": {
          "description": "The capabilities to pass to createSession",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "newCaps",
          "normalized": "a-\u003eWD Capabilities",
          "package": "hspec-webdriver",
          "partial": "Caps",
          "signature": "c-\u003eWD Capabilities",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:newCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "parallel",
          "package": "hspec-webdriver",
          "signature": "Spec -\u003e Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "parallel",
          "normalized": "Spec-\u003eSpec",
          "package": "hspec-webdriver",
          "signature": "Spec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "pending",
          "package": "hspec-webdriver",
          "signature": "Expectation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "pending",
          "package": "hspec-webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:pending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "pendingWith",
          "package": "hspec-webdriver",
          "signature": "String -\u003e Expectation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "pendingWith",
          "normalized": "String-\u003eExpectation",
          "package": "hspec-webdriver",
          "partial": "With",
          "signature": "String-\u003eExpectation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:pendingWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an example from a \u003ccode\u003e\u003ca\u003eWD\u003c/a\u003e\u003c/code\u003e action.  This \u003cem\u003emust\u003c/em\u003e be nested inside a call to \u003ccode\u003e\u003ca\u003esession\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003esessionOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "runWD",
          "package": "hspec-webdriver",
          "signature": "WD () -\u003e WDExample",
          "source": "src/Test-Hspec-WebDriver.html#runWD",
          "type": "function"
        },
        "index": {
          "description": "Create an example from WD action This must be nested inside call to session or sessionOn",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "runWD",
          "normalized": "WD()-\u003eWDExample",
          "package": "hspec-webdriver",
          "partial": "WD",
          "signature": "WD()-\u003eWDExample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:runWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the examples nested inside this call into a webdriver session.  For each capability in\n the list, before the first example is executed, a new webdriver session is created using the\n capabilities.  The examples are then executed in depth-first order using this webdriver session\n (so later examples can rely on the browser state created by earlier examples).  Once the final\n example has executed, the session is closed.  If some \u003ccode\u003e\u003ca\u003eWDExample\u003c/a\u003e\u003c/code\u003e fails (throws an exception),\n all remaining examples in the session will become pending.\n\u003c/p\u003e\u003cp\u003eNote that when using \u003ccode\u003e\u003ca\u003eparallel\u003c/a\u003e\u003c/code\u003e, the examples within a single session will still execute\n serially.  Different sessions (including the multiple sessions created if more than one\n capability is passed to \u003ccode\u003e\u003ca\u003esession\u003c/a\u003e\u003c/code\u003e) will be executed in parallel.\n\u003c/p\u003e\u003cp\u003eThis function uses the default webdriver host (127.0.0.1), port (4444), and\n basepath (\u003ccode\u003e/wd/hub\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "session",
          "package": "hspec-webdriver",
          "signature": "String -\u003e ([cap], Spec) -\u003e Spec",
          "source": "src/Test-Hspec-WebDriver.html#session",
          "type": "function"
        },
        "index": {
          "description": "Combine the examples nested inside this call into webdriver session For each capability in the list before the first example is executed new webdriver session is created using the capabilities The examples are then executed in depth-first order using this webdriver session so later examples can rely on the browser state created by earlier examples Once the final example has executed the session is closed If some WDExample fails throws an exception all remaining examples in the session will become pending Note that when using parallel the examples within single session will still execute serially Different sessions including the multiple sessions created if more than one capability is passed to session will be executed in parallel This function uses the default webdriver host port and basepath wd hub",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "session",
          "normalized": "String-\u003e([a],Spec)-\u003eSpec",
          "package": "hspec-webdriver",
          "signature": "String-\u003e([cap],Spec)-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003esession\u003c/a\u003e\u003c/code\u003e which allows you to specify the webdriver host, port, and basepath.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "sessionOn",
          "package": "hspec-webdriver",
          "signature": "String-\u003e Word16-\u003e String-\u003e String-\u003e ([cap], Spec)-\u003e Spec",
          "type": "function"
        },
        "index": {
          "description": "variation of session which allows you to specify the webdriver host port and basepath",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "sessionOn",
          "normalized": "String-\u003eWord-\u003eString-\u003eString-\u003e([a],Spec)-\u003eSpec",
          "package": "hspec-webdriver",
          "partial": "On",
          "signature": "String-\u003eWord-\u003eString-\u003eString-\u003e([cap],Spec)-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:sessionOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eshouldBe\u003c/code\u003e lifted into the \u003ccode\u003e\u003ca\u003eWD\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldBe",
          "package": "hspec-webdriver",
          "signature": "a -\u003e a -\u003e WD ()",
          "source": "src/Test-Hspec-WebDriver.html#shouldBe",
          "type": "function"
        },
        "index": {
          "description": "shouldBe lifted into the WD monad",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldBe",
          "normalized": "a-\u003ea-\u003eWD()",
          "package": "hspec-webdriver",
          "partial": "Be",
          "signature": "a-\u003ea-\u003eWD()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:shouldBe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the given element matches the given tag.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldBeTag",
          "package": "hspec-webdriver",
          "signature": "Element -\u003e Text -\u003e WD ()",
          "source": "src/Test-Hspec-WebDriver.html#shouldBeTag",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the given element matches the given tag",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldBeTag",
          "normalized": "Element-\u003eText-\u003eWD()",
          "package": "hspec-webdriver",
          "partial": "Be Tag",
          "signature": "Element-\u003eText-\u003eWD()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:shouldBeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the given elemnt has the attribute given by \u003ccode\u003e(attr name, value)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldHaveAttr",
          "package": "hspec-webdriver",
          "signature": "Element -\u003e (Text, Text) -\u003e WD ()",
          "source": "src/Test-Hspec-WebDriver.html#shouldHaveAttr",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the given elemnt has the attribute given by attr name value",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldHaveAttr",
          "normalized": "Element-\u003e(Text,Text)-\u003eWD()",
          "package": "hspec-webdriver",
          "partial": "Have Attr",
          "signature": "Element-\u003e(Text,Text)-\u003eWD()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:shouldHaveAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the given element has the given text.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldHaveText",
          "package": "hspec-webdriver",
          "signature": "Element -\u003e Text -\u003e WD ()",
          "source": "src/Test-Hspec-WebDriver.html#shouldHaveText",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the given element has the given text",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldHaveText",
          "normalized": "Element-\u003eText-\u003eWD()",
          "package": "hspec-webdriver",
          "partial": "Have Text",
          "signature": "Element-\u003eText-\u003eWD()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:shouldHaveText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the action returns the expected result.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldReturn",
          "package": "hspec-webdriver",
          "signature": "WD a -\u003e a -\u003e WD ()",
          "source": "src/Test-Hspec-WebDriver.html#shouldReturn",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the action returns the expected result",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldReturn",
          "normalized": "WD a-\u003ea-\u003eWD()",
          "package": "hspec-webdriver",
          "partial": "Return",
          "signature": "WD a-\u003ea-\u003eWD()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:shouldReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the action throws an exception.\n\u003c/p\u003e",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldThrow",
          "package": "hspec-webdriver",
          "signature": "WD a -\u003e e -\u003e WD ()",
          "source": "src/Test-Hspec-WebDriver.html#shouldThrow",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the action throws an exception",
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "shouldThrow",
          "normalized": "WD a-\u003eb-\u003eWD()",
          "package": "hspec-webdriver",
          "partial": "Throw",
          "signature": "WD a-\u003ee-\u003eWD()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:shouldThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Hspec.WebDriver",
          "name": "using",
          "package": "hspec-webdriver",
          "signature": "a -\u003e Spec -\u003e (UsingList a, Spec)",
          "source": "src/Test-Hspec-WebDriver.html#using",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test Hspec WebDriver",
          "module": "Test.Hspec.WebDriver",
          "name": "using",
          "normalized": "a-\u003eSpec-\u003e(UsingList a,Spec)",
          "package": "hspec-webdriver",
          "signature": "a-\u003eSpec-\u003e(UsingList a,Spec)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hspec-webdriver/docs/Test-Hspec-WebDriver.html#v:using"
      }
    }
  ]
]