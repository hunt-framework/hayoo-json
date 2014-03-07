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
        "word": "webdriver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Capabilities",
          "name": "Capabilities",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Capabilities",
          "package": "webdriver",
          "partial": "Capabilities",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructor simultaneously specifies which browser the session will\n use, while also providing browser-specific configuration. Default\n configuration is provided for each browser by \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echrome\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eopera\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eie\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eThis library uses \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e as its \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e browser configuration, when no\n browser choice is specified.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "Browser",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "data"
        },
        "index": {
          "description": "This constructor simultaneously specifies which browser the session will use while also providing browser-specific configuration Default configuration is provided for each browser by firefox chrome opera ie etc This library uses firefox as its Default browser configuration when no browser choice is specified",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Browser",
          "package": "webdriver",
          "partial": "Browser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:Browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure describing the capabilities of a session. This record\nserves dual roles.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It's used to specify the desired capabilities for a session before\nit's created. In this usage, fields that are set to Nothing indicate\nthat we have no preference for that capability.\n\u003c/li\u003e\u003cli\u003e When received from the server , it's used to\ndescribe the actual capabilities given to us by the WebDriver\nserver. Here a value of Nothing indicates that the server doesn't\nsupport the capability. Thus, for Maybe Bool fields, both Nothing and\nJust False indicate a lack of support for the desired capability.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "Capabilities",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "data"
        },
        "index": {
          "description": "structure describing the capabilities of session This record serves dual roles It used to specify the desired capabilities for session before it created In this usage fields that are set to Nothing indicate that we have no preference for that capability When received from the server it used to describe the actual capabilities given to us by the WebDriver server Here value of Nothing indicates that the server doesn support the capability Thus for Maybe Bool fields both Nothing and Just False indicate lack of support for the desired capability",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Capabilities",
          "package": "webdriver",
          "partial": "Capabilities",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:Capabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how elements scroll into the viewport. (see \u003ccode\u003e\u003ca\u003eieElementScrollBehavior\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "IEElementScrollBehavior",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#IEElementScrollBehavior",
          "type": "data"
        },
        "index": {
          "description": "Specifies how elements scroll into the viewport see ieElementScrollBehavior",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IEElementScrollBehavior",
          "package": "webdriver",
          "partial": "IEElement Scroll Behavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:IEElementScrollBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging levels for Internet Explorer\n\u003c/p\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogLevel",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "data"
        },
        "index": {
          "description": "Logging levels for Internet Explorer",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogLevel",
          "package": "webdriver",
          "partial": "IELog Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:IELogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates a log verbosity level. Used in \u003ccode\u003e\u003ca\u003eFirefox\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOpera\u003c/a\u003e\u003c/code\u003e configuration.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogLevel",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Indicates log verbosity level Used in Firefox and Opera configuration",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogLevel",
          "package": "webdriver",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents platform options supported by WebDriver. The value Any represents\n no preference.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "Platform",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "data"
        },
        "index": {
          "description": "Represents platform options supported by WebDriver The value Any represents no preference",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Platform",
          "package": "webdriver",
          "partial": "Platform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:Platform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable settings for the proxy \u003ccode\u003e\u003ca\u003eCapabilities\u003c/a\u003e\u003c/code\u003e field\n\u003c/p\u003e",
          "module": "Test.WebDriver.Capabilities",
          "name": "ProxyType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "data"
        },
        "index": {
          "description": "Available settings for the proxy Capabilities field",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ProxyType",
          "package": "webdriver",
          "partial": "Proxy Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:ProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Capabilities",
          "name": "UnexpectedAlertBehavior",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#UnexpectedAlertBehavior",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "UnexpectedAlertBehavior",
          "package": "webdriver",
          "partial": "Unexpected Alert Behavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#t:UnexpectedAlertBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "AcceptAlert",
          "package": "webdriver",
          "signature": "AcceptAlert",
          "source": "src/Test-WebDriver-Capabilities.html#UnexpectedAlertBehavior",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AcceptAlert\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:AcceptAlert\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "AcceptAlert",
          "package": "webdriver",
          "partial": "Accept Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AcceptAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "AlignBottom",
          "package": "webdriver",
          "signature": "AlignBottom",
          "source": "src/Test-WebDriver-Capabilities.html#IEElementScrollBehavior",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AlignBottom\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:AlignBottom\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "AlignBottom",
          "package": "webdriver",
          "partial": "Align Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AlignBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "AlignTop",
          "package": "webdriver",
          "signature": "AlignTop",
          "source": "src/Test-WebDriver-Capabilities.html#IEElementScrollBehavior",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AlignTop\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:AlignTop\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "AlignTop",
          "package": "webdriver",
          "partial": "Align Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AlignTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Android",
          "package": "webdriver",
          "signature": "Android",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Android\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Android\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Android\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Android",
          "package": "webdriver",
          "partial": "Android",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Android"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Any",
          "package": "webdriver",
          "signature": "Any",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Any\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Any\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Any\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Any",
          "package": "webdriver",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "AutoDetect",
          "package": "webdriver",
          "signature": "AutoDetect",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AutoDetect\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:AutoDetect\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:AutoDetect\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "AutoDetect",
          "package": "webdriver",
          "partial": "Auto Detect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:AutoDetect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome other browser, specified by a string name\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Browser",
          "package": "webdriver",
          "signature": "Browser Text",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Browser\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Browser\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Browser\"]"
        },
        "index": {
          "description": "some other browser specified by string name",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Browser",
          "package": "webdriver",
          "partial": "Browser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Capabilities",
          "package": "webdriver",
          "signature": "Capabilities",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Capabilities\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Capabilities\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Capabilities\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Capabilities",
          "package": "webdriver",
          "partial": "Capabilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Capabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Chrome",
          "package": "webdriver",
          "signature": "Chrome",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Chrome\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Chrome\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Chrome\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Chrome",
          "package": "webdriver",
          "partial": "Chrome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Chrome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "DismissAlert",
          "package": "webdriver",
          "signature": "DismissAlert",
          "source": "src/Test-WebDriver-Capabilities.html#UnexpectedAlertBehavior",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:DismissAlert\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:DismissAlert\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "DismissAlert",
          "package": "webdriver",
          "partial": "Dismiss Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:DismissAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Firefox",
          "package": "webdriver",
          "signature": "Firefox",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Firefox\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Firefox\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Firefox\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Firefox",
          "package": "webdriver",
          "partial": "Firefox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Firefox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "HTMLUnit",
          "package": "webdriver",
          "signature": "HTMLUnit",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:HTMLUnit\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:HTMLUnit\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:HTMLUnit\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "HTMLUnit",
          "package": "webdriver",
          "partial": "HTMLUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:HTMLUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "IE",
          "package": "webdriver",
          "signature": "IE",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IE\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IE\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:IE\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IE",
          "package": "webdriver",
          "partial": "IE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IELogDebug",
          "package": "webdriver",
          "signature": "IELogDebug",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogDebug\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IELogDebug\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogDebug",
          "package": "webdriver",
          "partial": "IELog Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IELogError",
          "package": "webdriver",
          "signature": "IELogError",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IELogError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogError",
          "package": "webdriver",
          "partial": "IELog Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IELogFatal",
          "package": "webdriver",
          "signature": "IELogFatal",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogFatal\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IELogFatal\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogFatal",
          "package": "webdriver",
          "partial": "IELog Fatal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogFatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IELogInfo",
          "package": "webdriver",
          "signature": "IELogInfo",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogInfo\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IELogInfo\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogInfo",
          "package": "webdriver",
          "partial": "IELog Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IELogTrace",
          "package": "webdriver",
          "signature": "IELogTrace",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogTrace\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IELogTrace\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogTrace",
          "package": "webdriver",
          "partial": "IELog Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IELogWarn",
          "package": "webdriver",
          "signature": "IELogWarn",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogWarn\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IELogWarn\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IELogWarn",
          "package": "webdriver",
          "partial": "IELog Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IELogWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "IPad",
          "package": "webdriver",
          "signature": "IPad",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IPad\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IPad\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:IPad\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IPad",
          "package": "webdriver",
          "partial": "IPad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "IPhone",
          "package": "webdriver",
          "signature": "IPhone",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IPhone\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IPhone\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:IPhone\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IPhone",
          "package": "webdriver",
          "partial": "IPhone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IPhone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\"]",
          "name": "IgnoreAlert",
          "package": "webdriver",
          "signature": "IgnoreAlert",
          "source": "src/Test-WebDriver-Capabilities.html#UnexpectedAlertBehavior",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IgnoreAlert\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IgnoreAlert\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "IgnoreAlert",
          "package": "webdriver",
          "partial": "Ignore Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:IgnoreAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Linux",
          "package": "webdriver",
          "signature": "Linux",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Linux\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Linux\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Linux\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Linux",
          "package": "webdriver",
          "partial": "Linux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Linux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogAll",
          "package": "webdriver",
          "signature": "LogAll",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogAll\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogAll\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogAll\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogAll\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogAll",
          "package": "webdriver",
          "partial": "Log All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogConfig",
          "package": "webdriver",
          "signature": "LogConfig",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogConfig\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogConfig\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogConfig\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogConfig\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogConfig",
          "package": "webdriver",
          "partial": "Log Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogFine",
          "package": "webdriver",
          "signature": "LogFine",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogFine\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogFine\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogFine\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogFine\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogFine",
          "package": "webdriver",
          "partial": "Log Fine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogFine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogFiner",
          "package": "webdriver",
          "signature": "LogFiner",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogFiner\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogFiner\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogFiner\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogFiner\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogFiner",
          "package": "webdriver",
          "partial": "Log Finer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogFiner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogFinest",
          "package": "webdriver",
          "signature": "LogFinest",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogFinest\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogFinest\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogFinest\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogFinest\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogFinest",
          "package": "webdriver",
          "partial": "Log Finest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogFinest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogInfo",
          "package": "webdriver",
          "signature": "LogInfo",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogInfo\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogInfo\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogInfo\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogInfo\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogInfo",
          "package": "webdriver",
          "partial": "Log Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogOff",
          "package": "webdriver",
          "signature": "LogOff",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogOff\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogOff\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogOff\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogOff\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogOff",
          "package": "webdriver",
          "partial": "Log Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogSevere",
          "package": "webdriver",
          "signature": "LogSevere",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogSevere\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogSevere\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogSevere\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogSevere\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogSevere",
          "package": "webdriver",
          "partial": "Log Severe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogSevere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "LogWarning",
          "package": "webdriver",
          "signature": "LogWarning",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogWarning\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogWarning\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogWarning\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:LogWarning\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "LogWarning",
          "package": "webdriver",
          "partial": "Log Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:LogWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Mac",
          "package": "webdriver",
          "signature": "Mac",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Mac\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Mac\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Mac\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Mac",
          "package": "webdriver",
          "partial": "Mac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Mac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eManually specify proxy hosts as hostname:port strings.\n Note that behavior is undefined for empty strings.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Manual",
          "package": "webdriver",
          "signature": "Manual",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Manual\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Manual\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Manual\"]"
        },
        "index": {
          "description": "Manually specify proxy hosts as hostname port strings Note that behavior is undefined for empty strings",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Manual",
          "package": "webdriver",
          "partial": "Manual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Manual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "NoProxy",
          "package": "webdriver",
          "signature": "NoProxy",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:NoProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:NoProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:NoProxy\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "NoProxy",
          "package": "webdriver",
          "partial": "No Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:NoProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Opera",
          "package": "webdriver",
          "signature": "Opera",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Opera\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Opera\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Opera\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Opera",
          "package": "webdriver",
          "partial": "Opera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Opera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a proxy auto-config file specified by URL\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "PAC",
          "package": "webdriver",
          "signature": "PAC",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:PAC\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:PAC\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:PAC\"]"
        },
        "index": {
          "description": "Use proxy auto-config file specified by URL",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "PAC",
          "package": "webdriver",
          "partial": "PAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:PAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Unix",
          "package": "webdriver",
          "signature": "Unix",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Unix\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Unix\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Unix\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Unix",
          "package": "webdriver",
          "partial": "Unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Unix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "UseSystemSettings",
          "package": "webdriver",
          "signature": "UseSystemSettings",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:UseSystemSettings\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UseSystemSettings\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:UseSystemSettings\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "UseSystemSettings",
          "package": "webdriver",
          "partial": "Use System Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:UseSystemSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Vista",
          "package": "webdriver",
          "signature": "Vista",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Vista\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Vista\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Vista\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Vista",
          "package": "webdriver",
          "partial": "Vista",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Vista"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "Windows",
          "package": "webdriver",
          "signature": "Windows",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Windows\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Windows\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:Windows\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "Windows",
          "package": "webdriver",
          "partial": "Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:Windows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "XP",
          "package": "webdriver",
          "signature": "XP",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:XP\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:XP\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:XP\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "XP",
          "package": "webdriver",
          "partial": "XP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:XP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session should accept all SSL certs by default\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "acceptSSLCerts",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:acceptSSLCerts\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:acceptSSLCerts\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:acceptSSLCerts\"]"
        },
        "index": {
          "description": "Whether the session should accept all SSL certs by default",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "acceptSSLCerts",
          "package": "webdriver",
          "partial": "SSLCerts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:acceptSSLCerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of (\u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e) pairs specifying additional non-standard capabilities.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "additionalCaps",
          "package": "webdriver",
          "signature": "[Pair]",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:additionalCaps\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:additionalCaps\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:additionalCaps\"]"
        },
        "index": {
          "description": "list of Text Value pairs specifying additional non-standard capabilities",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "additionalCaps",
          "normalized": "[Pair]",
          "package": "webdriver",
          "partial": "Caps",
          "signature": "[Pair]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:additionalCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edefaultCaps\u003c/a\u003e\u003c/code\u003e, but with all \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e capabilities set to\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "allCaps",
          "package": "webdriver",
          "signature": "Capabilities",
          "source": "src/Test-WebDriver-Capabilities.html#allCaps",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:allCaps\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:allCaps\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:allCaps\"]"
        },
        "index": {
          "description": "Same as defaultCaps but with all Maybe Bool capabilities set to Just True",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "allCaps",
          "package": "webdriver",
          "partial": "Caps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:allCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "android",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#android",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:android\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:android\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:android\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "android",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:android"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session can interact with the application cache\n .\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "applicationCacheEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:applicationCacheEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:applicationCacheEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:applicationCacheEnabled\"]"
        },
        "index": {
          "description": "Whether the session can interact with the application cache",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "applicationCacheEnabled",
          "package": "webdriver",
          "partial": "Cache Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:applicationCacheEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "autoConfigUrl",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:autoConfigUrl\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:autoConfigUrl\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:autoConfigUrl\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "autoConfigUrl",
          "package": "webdriver",
          "partial": "Config Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:autoConfigUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrowser choice and browser specific settings.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "browser",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:browser\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:browser\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:browser\"]"
        },
        "index": {
          "description": "Browser choice and browser specific settings",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "browser",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session can query for the browser's\n connectivity and disable it if desired\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "browserConnectionEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:browserConnectionEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:browserConnectionEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:browserConnectionEnabled\"]"
        },
        "index": {
          "description": "Whether the session can query for the browser connectivity and disable it if desired",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "browserConnectionEnabled",
          "package": "webdriver",
          "partial": "Connection Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:browserConnectionEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Chrome settings. All Maybe fields are set to Nothing, no options are\n specified, and no extensions are used.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "chrome",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#chrome",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chrome\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:chrome\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:chrome\"]"
        },
        "index": {
          "description": "Default Chrome settings All Maybe fields are set to Nothing no options are specified and no extensions are used",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "chrome",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chrome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer-side path to Chrome binary. If Nothing,\n use a sensible system-based default.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "chromeBinary",
          "package": "webdriver",
          "signature": "Maybe FilePath",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeBinary\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:chromeBinary\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:chromeBinary\"]"
        },
        "index": {
          "description": "Server-side path to Chrome binary If Nothing use sensible system-based default",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "chromeBinary",
          "package": "webdriver",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of the Chrome Webdriver server server to use\n\u003c/p\u003e\u003cp\u003efor more information on chromedriver see\n \u003ca\u003ehttp://code.google.com/p/selenium/wiki/ChromeDriver\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "chromeDriverVersion",
          "package": "webdriver",
          "signature": "Maybe String",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeDriverVersion\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:chromeDriverVersion\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:chromeDriverVersion\"]"
        },
        "index": {
          "description": "Version of the Chrome Webdriver server server to use for more information on chromedriver see http code.google.com selenium wiki ChromeDriver",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "chromeDriverVersion",
          "package": "webdriver",
          "partial": "Driver Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeDriverVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of extensions to use.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "chromeExtensions",
          "package": "webdriver",
          "signature": "[ChromeExtension]",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeExtensions\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:chromeExtensions\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:chromeExtensions\"]"
        },
        "index": {
          "description": "list of extensions to use",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "chromeExtensions",
          "normalized": "[ChromeExtension]",
          "package": "webdriver",
          "partial": "Extensions",
          "signature": "[ChromeExtension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of command-line options to pass to the\n Chrome binary.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "chromeOptions",
          "package": "webdriver",
          "signature": "[String]",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeOptions\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:chromeOptions\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:chromeOptions\"]"
        },
        "index": {
          "description": "list of command-line options to pass to the Chrome binary",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "chromeOptions",
          "normalized": "[String]",
          "package": "webdriver",
          "partial": "Options",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:chromeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session supports CSS selectors when searching\n for elements.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "cssSelectorsEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:cssSelectorsEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cssSelectorsEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:cssSelectorsEnabled\"]"
        },
        "index": {
          "description": "Whether the session supports CSS selectors when searching for elements",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "cssSelectorsEnabled",
          "package": "webdriver",
          "partial": "Selectors Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:cssSelectorsEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session can interact with database storage.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "databaseEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:databaseEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:databaseEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:databaseEnabled\"]"
        },
        "index": {
          "description": "Whether the session can interact with database storage",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "databaseEnabled",
          "package": "webdriver",
          "partial": "Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:databaseEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault capabilities. This is the same as the \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e instance, but with\n less polymorphism. By default, we use \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e of an unspecified \u003ccode\u003e\u003ca\u003eversion\u003c/a\u003e\u003c/code\u003e\n with default system-wide \u003ccode\u003e\u003ca\u003eproxy\u003c/a\u003e\u003c/code\u003e settings on whatever \u003ccode\u003e\u003ca\u003eplatform\u003c/a\u003e\u003c/code\u003e is available\n . All \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e capabilities are set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e (no preference).\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "defaultCaps",
          "package": "webdriver",
          "signature": "Capabilities",
          "source": "src/Test-WebDriver-Capabilities.html#defaultCaps",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:defaultCaps\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:defaultCaps\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:defaultCaps\"]"
        },
        "index": {
          "description": "Default capabilities This is the same as the Default instance but with less polymorphism By default we use firefox of an unspecified version with default system-wide proxy settings on whatever platform is available All Maybe capabilities are set to Nothing no preference",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "defaultCaps",
          "package": "webdriver",
          "partial": "Caps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:defaultCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer-side path to Firefox binary. If Nothing,\n use a sensible system-based default.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ffBinary",
          "package": "webdriver",
          "signature": "Maybe FilePath",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ffBinary\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ffBinary\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ffBinary\"]"
        },
        "index": {
          "description": "Server-side path to Firefox binary If Nothing use sensible system-based default",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ffBinary",
          "package": "webdriver",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ffBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirefox logging preference\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ffLogPref",
          "package": "webdriver",
          "signature": "LogLevel",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ffLogPref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ffLogPref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ffLogPref\"]"
        },
        "index": {
          "description": "Firefox logging preference",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ffLogPref",
          "package": "webdriver",
          "partial": "Log Pref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ffLogPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe firefox profile to use. If Nothing,\n a default temporary profile is automatically created\n and used.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ffProfile",
          "package": "webdriver",
          "signature": "Maybe (PreparedProfile Firefox)",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ffProfile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ffProfile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ffProfile\"]"
        },
        "index": {
          "description": "The firefox profile to use If Nothing default temporary profile is automatically created and used",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ffProfile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ffProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Firefox settings. All Maybe fields are set to Nothing. ffLogPref\n is set to \u003ccode\u003e\u003ca\u003eLogInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "firefox",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#firefox",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:firefox\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:firefox\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:firefox\"]"
        },
        "index": {
          "description": "Default Firefox settings All Maybe fields are set to Nothing ffLogPref is set to LogInfo",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "firefox",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:firefox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ftpProxy",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ftpProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ftpProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ftpProxy\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ftpProxy",
          "package": "webdriver",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ftpProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session can interact with modal popups,\n such as window.alert and window.confirm via\n \u003ccode\u003eacceptAlerts\u003c/code\u003e, \u003ccode\u003edismissAlerts\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "handlesAlerts",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:handlesAlerts\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:handlesAlerts\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:handlesAlerts\"]"
        },
        "index": {
          "description": "Whether the session can interact with modal popups such as window.alert and window.confirm via acceptAlerts dismissAlerts etc",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "handlesAlerts",
          "package": "webdriver",
          "partial": "Alerts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:handlesAlerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Capabilities",
          "name": "htmlUnit",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#htmlUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "htmlUnit",
          "package": "webdriver",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:htmlUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "httpProxy",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:httpProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:httpProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:httpProxy\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "httpProxy",
          "package": "webdriver",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:httpProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "iPad",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#iPad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:iPad\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:iPad\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:iPad\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "iPad",
          "package": "webdriver",
          "partial": "Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:iPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "iPhone",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#iPhone",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:iPhone\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:iPhone\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:iPhone\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "iPhone",
          "package": "webdriver",
          "partial": "Phone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:iPhone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault IE settings. See the \u003ccode\u003e\u003ca\u003eIE\u003c/a\u003e\u003c/code\u003e constructor for more details on \n individual defaults\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ie",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#ie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ie\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ie\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ie\"]"
        },
        "index": {
          "description": "Default IE settings See the IE constructor for more details on individual defaults",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ie",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timeout, in milliseconds, that the driver will attempt to\n locate and attach to a newly opened instance of Internet Explorer\n . The default is zero, which indicates waiting indefinitely.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieBrowserAttachTimeout",
          "package": "webdriver",
          "signature": "Integer",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieBrowserAttachTimeout\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieBrowserAttachTimeout\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieBrowserAttachTimeout\"]"
        },
        "index": {
          "description": "The timeout in milliseconds that the driver will attempt to locate and attach to newly opened instance of Internet Explorer The default is zero which indicates waiting indefinitely",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieBrowserAttachTimeout",
          "package": "webdriver",
          "partial": "Browser Attach Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieBrowserAttachTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to specify whether elements are scrolled into \n the viewport for interaction to align with the top or bottom \n of the viewport. The default value is to align with the top of \n the viewport.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieElementScrollBehavior",
          "package": "webdriver",
          "signature": "IEElementScrollBehavior",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieElementScrollBehavior\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieElementScrollBehavior\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieElementScrollBehavior\"]"
        },
        "index": {
          "description": "Allows the user to specify whether elements are scrolled into the viewport for interaction to align with the top or bottom of the viewport The default value is to align with the top of the viewport",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieElementScrollBehavior",
          "package": "webdriver",
          "partial": "Element Scroll Behavior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieElementScrollBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether the driver should attempt to remove obsolete \n elements from the element cache on page navigation (true by \n default). This is to help manage the IE driver's memory footprint\n , removing references to invalid elements.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieEnableElementCacheCleanup",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieEnableElementCacheCleanup\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieEnableElementCacheCleanup\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieEnableElementCacheCleanup\"]"
        },
        "index": {
          "description": "Determines whether the driver should attempt to remove obsolete elements from the element cache on page navigation true by default This is to help manage the IE driver memory footprint removing references to invalid elements",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieEnableElementCacheCleanup",
          "package": "webdriver",
          "partial": "Enable Element Cache Cleanup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieEnableElementCacheCleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether persistent hovering is enabled (true by \n default). Persistent hovering is achieved by continuously firing \n mouse over events at the last location the mouse cursor has been \n moved to.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieEnablePersistentHover",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieEnablePersistentHover\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieEnablePersistentHover\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieEnablePersistentHover\"]"
        },
        "index": {
          "description": "Determines whether persistent hovering is enabled true by default Persistent hovering is achieved by continuously firing mouse over events at the last location the mouse cursor has been moved to",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieEnablePersistentHover",
          "package": "webdriver",
          "partial": "Enable Persistent Hover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieEnablePersistentHover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path to the directory used to extract supporting files used \n by the server. Defaults to the TEMP directory if not specified.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieExtractPath",
          "package": "webdriver",
          "signature": "Maybe Text",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieExtractPath\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieExtractPath\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieExtractPath\"]"
        },
        "index": {
          "description": "The path to the directory used to extract supporting files used by the server Defaults to the TEMP directory if not specified",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieExtractPath",
          "package": "webdriver",
          "partial": "Extract Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieExtractPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces launching Internet Explorer using the CreateProcess API. \n If this option is not specified, IE is launched using the\n IELaunchURL, if it is available. For IE 8 and above, this option \n requires the TabProcGrowth registry value to be set to 0.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieForceCreateProcess",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieForceCreateProcess\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieForceCreateProcess\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieForceCreateProcess\"]"
        },
        "index": {
          "description": "Forces launching Internet Explorer using the CreateProcess API If this option is not specified IE is launched using the IELaunchURL if it is available For IE and above this option requires the TabProcGrowth registry value to be set to",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieForceCreateProcess",
          "package": "webdriver",
          "partial": "Force Create Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieForceCreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address of the host adapter on which the server will listen \n for commands.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieHost",
          "package": "webdriver",
          "signature": "Maybe Text",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieHost\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieHost\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieHost\"]"
        },
        "index": {
          "description": "The address of the host adapter on which the server will listen for commands",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieHost",
          "package": "webdriver",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to skip the protected mode check. If set, tests\n may become flaky, unresponsive, or browsers may hang. If\n not set, and protected mode settings are not the same for\n all zones, an exception will be thrown on driver\n construction.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieIgnoreProtectedModeSettings",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieIgnoreProtectedModeSettings\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieIgnoreProtectedModeSettings\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieIgnoreProtectedModeSettings\"]"
        },
        "index": {
          "description": "Whether to skip the protected mode check If set tests may become flaky unresponsive or browsers may hang If not set and protected mode settings are not the same for all zones an exception will be thrown on driver construction",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieIgnoreProtectedModeSettings",
          "package": "webdriver",
          "partial": "Ignore Protected Mode Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieIgnoreProtectedModeSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether to skip the check that the browser's zoom\n level is set to 100%. Value is set to false by default.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieIgnoreZoomSetting",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieIgnoreZoomSetting\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieIgnoreZoomSetting\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieIgnoreZoomSetting\"]"
        },
        "index": {
          "description": "Indicates whether to skip the check that the browser zoom level is set to Value is set to false by default",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieIgnoreZoomSetting",
          "package": "webdriver",
          "partial": "Ignore Zoom Setting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieIgnoreZoomSetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to specify the initial URL loaded when IE \n starts. Intended to be used with ignoreProtectedModeSettings\n to allow the user to initialize IE in the proper Protected Mode \n zone. Using this capability may cause browser instability or\n flaky and unresponsive code. Only \"best effort\" support is\n provided when using this capability.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieInitialBrowserUrl",
          "package": "webdriver",
          "signature": "Maybe Text",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieInitialBrowserUrl\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieInitialBrowserUrl\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieInitialBrowserUrl\"]"
        },
        "index": {
          "description": "Allows the user to specify the initial URL loaded when IE starts Intended to be used with ignoreProtectedModeSettings to allow the user to initialize IE in the proper Protected Mode zone Using this capability may cause browser instability or flaky and unresponsive code Only best effort support is provided when using this capability",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieInitialBrowserUrl",
          "package": "webdriver",
          "partial": "Initial Browser Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieInitialBrowserUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path to file where server should write log messages to. \n By default it writes to stdout.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieLogFile",
          "package": "webdriver",
          "signature": "Maybe FilePath",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieLogFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieLogFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieLogFile\"]"
        },
        "index": {
          "description": "The path to file where server should write log messages to By default it writes to stdout",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieLogFile",
          "package": "webdriver",
          "partial": "Log File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieLogFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe log level used by the server. Defaults to \u003ccode\u003e\u003ca\u003eIELogFatal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieLogLevel",
          "package": "webdriver",
          "signature": "IELogLevel",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieLogLevel\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieLogLevel\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieLogLevel\"]"
        },
        "index": {
          "description": "The log level used by the server Defaults to IELogFatal",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieLogLevel",
          "package": "webdriver",
          "partial": "Log Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieLogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether to require that the IE window have focus \n before performing any user interaction operations (mouse or \n keyboard events). This capability is false by default, but\n delivers much more accurate native events interactions.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieRequireWindowFocus",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieRequireWindowFocus\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieRequireWindowFocus\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieRequireWindowFocus\"]"
        },
        "index": {
          "description": "Determines whether to require that the IE window have focus before performing any user interaction operations mouse or keyboard events This capability is false by default but delivers much more accurate native events interactions",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieRequireWindowFocus",
          "package": "webdriver",
          "partial": "Require Window Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieRequireWindowFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppresses diagnostic output when the server is started.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieSilent",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieSilent\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieSilent\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieSilent\"]"
        },
        "index": {
          "description": "Suppresses diagnostic output when the server is started",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieSilent",
          "package": "webdriver",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieSilent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies command-line switches with which to launch Internet \n Explorer. This is only valid when used with the \n forceCreateProcess.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "ieSwitches",
          "package": "webdriver",
          "signature": "Maybe Text",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieSwitches\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ieSwitches\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:ieSwitches\"]"
        },
        "index": {
          "description": "Specifies command-line switches with which to launch Internet Explorer This is only valid when used with the forceCreateProcess",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "ieSwitches",
          "package": "webdriver",
          "partial": "Switches",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:ieSwitches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session supports executing JavaScript via\n \u003ccode\u003eexecuteJS\u003c/code\u003e and \u003ccode\u003easyncJS\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "javascriptEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:javascriptEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:javascriptEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:javascriptEnabled\"]"
        },
        "index": {
          "description": "Whether the session supports executing JavaScript via executeJS and asyncJS",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "javascriptEnabled",
          "package": "webdriver",
          "partial": "Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:javascriptEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session can set and query the browser's\n location context with \u003ccode\u003esetLocation\u003c/code\u003e and \u003ccode\u003egetLocation\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "locationContextEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:locationContextEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:locationContextEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:locationContextEnabled\"]"
        },
        "index": {
          "description": "Whether the session can set and query the browser location context with setLocation and getLocation",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "locationContextEnabled",
          "package": "webdriver",
          "partial": "Context Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:locationContextEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session is capable of generating native OS\n events when simulating user input.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "nativeEvents",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:nativeEvents\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:nativeEvents\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:nativeEvents\"]"
        },
        "index": {
          "description": "Whether the session is capable of generating native OS events when simulating user input",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "nativeEvents",
          "package": "webdriver",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:nativeEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Opera settings. See the \u003ccode\u003e\u003ca\u003eOpera\u003c/a\u003e\u003c/code\u003e constructor for more details on\n individual defaults.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "opera",
          "package": "webdriver",
          "signature": "Browser",
          "source": "src/Test-WebDriver-Capabilities.html#opera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:opera\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:opera\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:opera\"]"
        },
        "index": {
          "description": "Default Opera settings See the Opera constructor for more details on individual defaults",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "opera",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:opera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to auto-start the Opera binary. If false,\n OperaDriver will wait for a connection from the\n browser. By default this is True.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaAutoStart",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaAutoStart\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaAutoStart\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaAutoStart\"]"
        },
        "index": {
          "description": "Whether to auto-start the Opera binary If false OperaDriver will wait for connection from the browser By default this is True",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaAutoStart",
          "package": "webdriver",
          "partial": "Auto Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaAutoStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer-side path to the Opera binary\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaBinary",
          "package": "webdriver",
          "signature": "Maybe FilePath",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaBinary\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaBinary\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaBinary\"]"
        },
        "index": {
          "description": "Server-side path to the Opera binary",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaBinary",
          "package": "webdriver",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the Opera instance should stay open after\n we close the session. If false, closing the session\n closes the browser.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaDetach",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaDetach\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaDetach\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaDetach\"]"
        },
        "index": {
          "description": "Whether the Opera instance should stay open after we close the session If false closing the session closes the browser",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaDetach",
          "package": "webdriver",
          "partial": "Detach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaDetach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(*nix only) which X display to use.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaDisplay",
          "package": "webdriver",
          "signature": "Maybe Int",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaDisplay\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaDisplay\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaDisplay\"]"
        },
        "index": {
          "description": "nix only which display to use",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaDisplay",
          "package": "webdriver",
          "partial": "Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe host Opera should connect to. Unless you're\n starting Opera manually you won't need this.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaHost",
          "package": "webdriver",
          "signature": "Maybe String",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaHost\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaHost\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaHost\"]"
        },
        "index": {
          "description": "The host Opera should connect to Unless you re starting Opera manually you won need this",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaHost",
          "package": "webdriver",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to use Opera's alternative implicit wait\n implementation. It will use an in-browser heuristic\n to guess when a page has finished loading. This\n feature is experimental, and disabled by default.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaIdle",
          "package": "webdriver",
          "signature": "Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaIdle\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaIdle\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaIdle\"]"
        },
        "index": {
          "description": "Whether to use Opera alternative implicit wait implementation It will use an in-browser heuristic to guess when page has finished loading This feature is experimental and disabled by default",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaIdle",
          "package": "webdriver",
          "partial": "Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the launcher binary to use. The launcher\n is a gateway between OperaDriver and the Opera\n browser. If Nothing, OperaDriver will use the\n launcher supplied with the package.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaLauncher",
          "package": "webdriver",
          "signature": "Maybe FilePath",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaLauncher\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaLauncher\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaLauncher\"]"
        },
        "index": {
          "description": "Path to the launcher binary to use The launcher is gateway between OperaDriver and the Opera browser If Nothing OperaDriver will use the launcher supplied with the package",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaLauncher",
          "package": "webdriver",
          "partial": "Launcher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaLauncher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to send the log output. If Nothing, logging is\n disabled.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaLogFile",
          "package": "webdriver",
          "signature": "Maybe FilePath",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaLogFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaLogFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaLogFile\"]"
        },
        "index": {
          "description": "Where to send the log output If Nothing logging is disabled",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaLogFile",
          "package": "webdriver",
          "partial": "Log File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaLogFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog level preference. Defaults to \u003ccode\u003e\u003ca\u003eLogInfo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaLogPref",
          "package": "webdriver",
          "signature": "LogLevel",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaLogPref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaLogPref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaLogPref\"]"
        },
        "index": {
          "description": "Log level preference Defaults to LogInfo",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaLogPref",
          "package": "webdriver",
          "partial": "Log Pref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaLogPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand-line arguments to pass to Opera.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaOptions",
          "package": "webdriver",
          "signature": "Maybe String",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaOptions\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaOptions\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaOptions\"]"
        },
        "index": {
          "description": "Command-line arguments to pass to Opera",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaOptions",
          "package": "webdriver",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port we should use to connect to Opera. If Just 0\n , use a random port. If Nothing, use the default\n Opera port. The default \u003ccode\u003e\u003ca\u003eopera\u003c/a\u003e\u003c/code\u003e constructor uses\n Just 0, since Nothing is likely to cause \u003ca\u003eaddress\n already in use\u003c/a\u003e errors.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaPort",
          "package": "webdriver",
          "signature": "Maybe Word16",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaPort\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaPort\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaPort\"]"
        },
        "index": {
          "description": "The port we should use to connect to Opera If Just use random port If Nothing use the default Opera port The default opera constructor uses Just since Nothing is likely to cause address already in use errors",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaPort",
          "package": "webdriver",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich Opera product we're using, e.g. \"desktop\",\n \"core\"\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "operaProduct",
          "package": "webdriver",
          "signature": "Maybe String",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaProduct\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:operaProduct\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:operaProduct\"]"
        },
        "index": {
          "description": "Which Opera product we re using e.g desktop core",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "operaProduct",
          "package": "webdriver",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:operaProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlatform on which the browser should run.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "platform",
          "package": "webdriver",
          "signature": "Platform",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:platform\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:platform\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:platform\"]"
        },
        "index": {
          "description": "Platform on which the browser should run",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "platform",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:platform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProxy configuration settings.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "proxy",
          "package": "webdriver",
          "signature": "ProxyType",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:proxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:proxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:proxy\"]"
        },
        "index": {
          "description": "Proxy configuration settings",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "proxy",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session can rotate the current page's current\n layout between \u003ccode\u003ePortrait\u003c/code\u003e and \u003ccode\u003eLandscape\u003c/code\u003e orientations.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "rotatable",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:rotatable\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:rotatable\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:rotatable\"]"
        },
        "index": {
          "description": "Whether the session can rotate the current page current layout between Portrait and Landscape orientations",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "rotatable",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:rotatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "sslProxy",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:sslProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:sslProxy\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:sslProxy\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "sslProxy",
          "package": "webdriver",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:sslProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the session supports taking screenshots of the\n current page with the \u003ccode\u003escreenshot\u003c/code\u003e command\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "takesScreenshot",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:takesScreenshot\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:takesScreenshot\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:takesScreenshot\"]"
        },
        "index": {
          "description": "Whether the session supports taking screenshots of the current page with the screenshot command",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "takesScreenshot",
          "package": "webdriver",
          "partial": "Screenshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:takesScreenshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow the session should handle unexpected alerts.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "unexpectedAlertBehavior",
          "package": "webdriver",
          "signature": "Maybe UnexpectedAlertBehavior",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:unexpectedAlertBehavior\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:unexpectedAlertBehavior\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:unexpectedAlertBehavior\"]"
        },
        "index": {
          "description": "How the session should handle unexpected alerts",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "unexpectedAlertBehavior",
          "package": "webdriver",
          "partial": "Alert Behavior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:unexpectedAlertBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrowser version to use.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "version",
          "package": "webdriver",
          "signature": "Maybe String",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:version\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:version\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:version\"]"
        },
        "index": {
          "description": "Browser version to use",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "version",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether Web Storage (\u003ccode\u003egetKey\u003c/code\u003e, \u003ccode\u003esetKey\u003c/code\u003e, etc) support is\n enabled\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Capabilities\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "webStorageEnabled",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:webStorageEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:webStorageEnabled\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:webStorageEnabled\"]"
        },
        "index": {
          "description": "Whether Web Storage getKey setKey etc support is enabled",
          "hierarchy": "Test WebDriver Capabilities",
          "module": "Test.WebDriver.Capabilities",
          "name": "webStorageEnabled",
          "package": "webdriver",
          "partial": "Storage Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Capabilities.html#v:webStorageEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions and types for working with Google Chrome extensions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "Extension",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Chrome-Extension.html",
          "type": "module"
        },
        "index": {
          "description": "Functions and types for working with Google Chrome extensions",
          "hierarchy": "Test WebDriver Chrome Extension",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "Extension",
          "package": "webdriver",
          "partial": "Extension",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Chrome-Extension.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type representing a Google Chrome extension. Values of this type\n are passed to the \u003ccode\u003e\u003ca\u003echromeExtensions\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "ChromeExtension",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Chrome-Extension.html#ChromeExtension",
          "type": "data"
        },
        "index": {
          "description": "An opaque type representing Google Chrome extension Values of this type are passed to the chromeExtensions field",
          "hierarchy": "Test WebDriver Chrome Extension",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "ChromeExtension",
          "package": "webdriver",
          "partial": "Chrome Extension",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Chrome-Extension.html#t:ChromeExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a .crx file as a \u003ccode\u003e\u003ca\u003eChromeExtension\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "loadExtension",
          "package": "webdriver",
          "signature": "FilePath -\u003e m ChromeExtension",
          "source": "src/Test-WebDriver-Chrome-Extension.html#loadExtension",
          "type": "function"
        },
        "index": {
          "description": "Load crx file as ChromeExtension",
          "hierarchy": "Test WebDriver Chrome Extension",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "loadExtension",
          "normalized": "FilePath-\u003ea ChromeExtension",
          "package": "webdriver",
          "partial": "Extension",
          "signature": "FilePath-\u003em ChromeExtension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Chrome-Extension.html#v:loadExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad raw .crx data as a \u003ccode\u003e\u003ca\u003eChromeExtension\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "loadRawExtension",
          "package": "webdriver",
          "signature": "ByteString -\u003e ChromeExtension",
          "source": "src/Test-WebDriver-Chrome-Extension.html#loadRawExtension",
          "type": "function"
        },
        "index": {
          "description": "Load raw crx data as ChromeExtension",
          "hierarchy": "Test WebDriver Chrome Extension",
          "module": "Test.WebDriver.Chrome.Extension",
          "name": "loadRawExtension",
          "normalized": "ByteString-\u003eChromeExtension",
          "package": "webdriver",
          "partial": "Raw Extension",
          "signature": "ByteString-\u003eChromeExtension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Chrome-Extension.html#v:loadRawExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "Classes",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "Classes",
          "package": "webdriver",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request method, to be used in the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n We are missing a few of the stranger methods, but these are\n not really necessary until we add full TLS.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Classes",
          "name": "RequestMethod",
          "package": "webdriver",
          "type": "data"
        },
        "index": {
          "description": "The HTTP request method to be used in the Request object We are missing few of the stranger methods but these are not really necessary until we add full TLS",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "RequestMethod",
          "package": "webdriver",
          "partial": "Request Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#t:RequestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a WebDriver session. These handles are produced by\nthe server on session creation, and act to identify a session in progress. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Classes",
          "name": "SessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#SessionId",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for WebDriver session These handles are produced by the server on session creation and act to identify session in progress",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "SessionId",
          "package": "webdriver",
          "partial": "Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#t:SessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for monads that carry a WebDriver session with them. The\n MonadBaseControl superclass is used for exception handling through\n the lifted-base package.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Classes",
          "name": "SessionState",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#SessionState",
          "type": "class"
        },
        "index": {
          "description": "class for monads that carry WebDriver session with them The MonadBaseControl superclass is used for exception handling through the lifted-base package",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "SessionState",
          "package": "webdriver",
          "partial": "Session State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#t:SessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a WebDriver session. This structure is passed\nimplicitly through all \u003ccode\u003eWD\u003c/code\u003e computations, and is also used to configure the \u003ccode\u003eWD\u003c/code\u003e\nmonad before execution. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Classes",
          "name": "WDSession",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "data"
        },
        "index": {
          "description": "Information about WebDriver session This structure is passed implicitly through all WD computations and is also used to configure the WD monad before execution",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "WDSession",
          "package": "webdriver",
          "partial": "WDSession",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#t:WDSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for monads that can handle wire protocol requests. This is the\n operation underlying all of the high-level commands exported in\n \u003ca\u003eTest.WebDriver.Commands\u003c/a\u003e. For more information on the wire protocol see\n \u003ca\u003ehttp://code.google.com/p/selenium/wiki/JsonWireProtocol\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Classes",
          "name": "WebDriver",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#WebDriver",
          "type": "class"
        },
        "index": {
          "description": "class for monads that can handle wire protocol requests This is the operation underlying all of the high-level commands exported in Test.WebDriver.Commands For more information on the wire protocol see http code.google.com selenium wiki JsonWireProtocol",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "WebDriver",
          "package": "webdriver",
          "partial": "Web Driver",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#t:WebDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "CONNECT",
          "package": "webdriver",
          "signature": "CONNECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "CONNECT",
          "package": "webdriver",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "Custom",
          "package": "webdriver",
          "signature": "Custom String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "Custom",
          "package": "webdriver",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "DELETE",
          "package": "webdriver",
          "signature": "DELETE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "DELETE",
          "package": "webdriver",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "GET",
          "package": "webdriver",
          "signature": "GET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "GET",
          "package": "webdriver",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "HEAD",
          "package": "webdriver",
          "signature": "HEAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "HEAD",
          "package": "webdriver",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "OPTIONS",
          "package": "webdriver",
          "signature": "OPTIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "OPTIONS",
          "package": "webdriver",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "POST",
          "package": "webdriver",
          "signature": "POST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "POST",
          "package": "webdriver",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "PUT",
          "package": "webdriver",
          "signature": "PUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "PUT",
          "package": "webdriver",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Commands.Internal\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "SessionId",
          "package": "webdriver",
          "signature": "SessionId Text",
          "source": "src/Test-WebDriver-Classes.html#SessionId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:SessionId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:SessionId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:SessionId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:SessionId\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "SessionId",
          "package": "webdriver",
          "partial": "Session Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:SessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "TRACE",
          "package": "webdriver",
          "signature": "TRACE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "TRACE",
          "package": "webdriver",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "WDSession",
          "package": "webdriver",
          "signature": "WDSession",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:WDSession\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:WDSession\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:WDSession\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "WDSession",
          "package": "webdriver",
          "partial": "WDSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:WDSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default session connects to localhost on port 4444, and hasn't been\ninitialized server-side. This value is the same as \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e but with a less\npolymorphic type. \n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "defaultSession",
          "package": "webdriver",
          "signature": "WDSession",
          "source": "src/Test-WebDriver-Classes.html#defaultSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:defaultSession\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:defaultSession\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:defaultSession\"]"
        },
        "index": {
          "description": "default session connects to localhost on port and hasn been initialized server-side This value is the same as def but with less polymorphic type",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "defaultSession",
          "package": "webdriver",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:defaultSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "doCommand",
          "package": "webdriver",
          "signature": "doCommand",
          "source": "src/Test-WebDriver-Classes.html#doCommand",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "doCommand",
          "package": "webdriver",
          "partial": "Command",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:doCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "getSession",
          "package": "webdriver",
          "signature": "s WDSession",
          "source": "src/Test-WebDriver-Classes.html#getSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "getSession",
          "package": "webdriver",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last HTTP request issued by this session, if any. \n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "lastHTTPRequest",
          "package": "webdriver",
          "signature": "Maybe (Request ByteString)",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:lastHTTPRequest\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:lastHTTPRequest\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:lastHTTPRequest\"]"
        },
        "index": {
          "description": "The last HTTP request issued by this session if any",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "lastHTTPRequest",
          "package": "webdriver",
          "partial": "HTTPRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:lastHTTPRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "modifySession",
          "package": "webdriver",
          "signature": "(WDSession -\u003e WDSession) -\u003e s ()",
          "source": "src/Test-WebDriver-Classes.html#modifySession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "modifySession",
          "normalized": "(WDSession-\u003eWDSession)-\u003ea()",
          "package": "webdriver",
          "partial": "Session",
          "signature": "(WDSession-\u003eWDSession)-\u003es()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:modifySession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Classes",
          "name": "putSession",
          "package": "webdriver",
          "signature": "WDSession -\u003e s ()",
          "source": "src/Test-WebDriver-Classes.html#putSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "putSession",
          "normalized": "WDSession-\u003ea()",
          "package": "webdriver",
          "partial": "Session",
          "signature": "WDSession-\u003es()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:putSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "wdBasePath",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdBasePath\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:wdBasePath\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:wdBasePath\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "wdBasePath",
          "package": "webdriver",
          "partial": "Base Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdBasePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name of the WebDriver server for this\n session (default 127.0.0.1)\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "wdHost",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdHost\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:wdHost\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:wdHost\"]"
        },
        "index": {
          "description": "Host name of the WebDriver server for this session default",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "wdHost",
          "package": "webdriver",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number of the server (default 4444)\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "wdPort",
          "package": "webdriver",
          "signature": "Word16",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdPort\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:wdPort\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:wdPort\"]"
        },
        "index": {
          "description": "Port number of the server default",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "wdPort",
          "package": "webdriver",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque reference identifying the session to\n use with \u003ccode\u003eWD\u003c/code\u003e commands.\n A value of Nothing indicates that a session\n hasn't been created yet.\n Sessions can be created within \u003ccode\u003eWD\u003c/code\u003e via\n \u003ccode\u003e\u003ca\u003ecreateSession\u003c/a\u003e\u003c/code\u003e, or created\n and closed automatically with\n \u003ccode\u003e\u003ca\u003erunSession\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Classes\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "wdSessId",
          "package": "webdriver",
          "signature": "Maybe SessionId",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdSessId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:wdSessId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:wdSessId\"]"
        },
        "index": {
          "description": "An opaque reference identifying the session to use with WD commands value of Nothing indicates that session hasn been created yet Sessions can be created within WD via createSession or created and closed automatically with runSession",
          "hierarchy": "Test WebDriver Classes",
          "module": "Test.WebDriver.Classes",
          "name": "wdSessId",
          "package": "webdriver",
          "partial": "Sess Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Classes.html#v:wdSessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal functions used to implement the functions exported by\n \u003ca\u003eTest.WebDriver.Commands\u003c/a\u003e. These may be useful for implementing non-standard\n webdriver commands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "Internal",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal functions used to implement the functions exported by Test.WebDriver.Commands These may be useful for implementing non-standard webdriver commands",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "Internal",
          "package": "webdriver",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a web page element. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "Element",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#Element",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for web page element",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "Element",
          "package": "webdriver",
          "partial": "Element",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command requiring a session ID was attempted when no session ID was\n available.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "NoSessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#NoSessionId",
          "type": "newtype"
        },
        "index": {
          "description": "command requiring session ID was attempted when no session ID was available",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "NoSessionId",
          "package": "webdriver",
          "partial": "No Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#t:NoSessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a WebDriver session. These handles are produced by\nthe server on session creation, and act to identify a session in progress. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "SessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#SessionId",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for WebDriver session These handles are produced by the server on session creation and act to identify session in progress",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "SessionId",
          "package": "webdriver",
          "partial": "Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#t:SessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a browser window \n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "WindowHandle",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#WindowHandle",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for browser window",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "WindowHandle",
          "package": "webdriver",
          "partial": "Window Handle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#t:WindowHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands.Internal\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Element",
          "package": "webdriver",
          "signature": "Element Text",
          "source": "src/Test-WebDriver-Commands-Internal.html#Element",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:Element\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Element\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Element\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "Element",
          "package": "webdriver",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands.Internal\",\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "NoSessionId",
          "package": "webdriver",
          "signature": "NoSessionId String",
          "source": "src/Test-WebDriver-Commands-Internal.html#NoSessionId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:NoSessionId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSessionId\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:NoSessionId\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "NoSessionId",
          "package": "webdriver",
          "partial": "No Session Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:NoSessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands.Internal\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "WindowHandle",
          "package": "webdriver",
          "signature": "WindowHandle Text",
          "source": "src/Test-WebDriver-Commands-Internal.html#WindowHandle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:WindowHandle\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WindowHandle\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:WindowHandle\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "WindowHandle",
          "package": "webdriver",
          "partial": "Window Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:WindowHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special \u003ccode\u003e\u003ca\u003eWindowHandle\u003c/a\u003e\u003c/code\u003e that always refers to the currently focused window.\n This is also used by the \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands.Internal\",\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "currentWindow",
          "package": "webdriver",
          "signature": "WindowHandle",
          "source": "src/Test-WebDriver-Commands-Internal.html#currentWindow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:currentWindow\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:currentWindow\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:currentWindow\"]"
        },
        "index": {
          "description": "special WindowHandle that always refers to the currently focused window This is also used by the Default instance",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "currentWindow",
          "package": "webdriver",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:currentWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doCommand",
          "package": "webdriver",
          "signature": "RequestMethod-\u003e Text-\u003e a-\u003e wd b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doCommand",
          "normalized": "RequestMethod-\u003eText-\u003ea-\u003eb c",
          "package": "webdriver",
          "partial": "Command",
          "signature": "RequestMethod-\u003eText-\u003ea-\u003ewd b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:doCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003edoSessCommand\u003c/a\u003e\u003c/code\u003e to create element URLs.\n For example, passing a URL of \u003ca\u003e/active\u003c/a\u003e will expand to\n \"\u003cem\u003esession\u003c/em\u003e:sessionId\u003cem\u003eelement\u003c/em\u003e:id/active\", where :sessionId and :id are URL\n parameters as described in the wire protocol.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doElemCommand",
          "package": "webdriver",
          "signature": "RequestMethod -\u003e Element -\u003e Text -\u003e a -\u003e wd b",
          "source": "src/Test-WebDriver-Commands-Internal.html#doElemCommand",
          "type": "function"
        },
        "index": {
          "description": "wrapper around doSessCommand to create element URLs For example passing URL of active will expand to session sessionId element id active where sessionId and id are URL parameters as described in the wire protocol",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doElemCommand",
          "normalized": "RequestMethod-\u003eElement-\u003eText-\u003ea-\u003eb c",
          "package": "webdriver",
          "partial": "Elem Command",
          "signature": "RequestMethod-\u003eElement-\u003eText-\u003ea-\u003ewd b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:doElemCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis a convenient wrapper around \u003ccode\u003e\u003ca\u003edoCommand\u003c/a\u003e\u003c/code\u003e that automatically prepends\n the session URL parameter to the wire command URL. For example, passing\n a URL of \"\u003cem\u003erefresh\\\" will expand to \\\"\u003c/em\u003esession\u003cem\u003e:sessionId\u003c/em\u003erefresh\", where\n :sessionId is a URL parameter as described in\n \u003ca\u003ehttp://code.google.com/p/selenium/wiki/JsonWireProtocol\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doSessCommand",
          "package": "webdriver",
          "signature": "RequestMethod -\u003e Text -\u003e a -\u003e wd b",
          "source": "src/Test-WebDriver-Commands-Internal.html#doSessCommand",
          "type": "function"
        },
        "index": {
          "description": "This convenient wrapper around doCommand that automatically prepends the session URL parameter to the wire command URL For example passing URL of refresh will expand to session sessionId refresh where sessionId is URL parameter as described in http code.google.com selenium wiki JsonWireProtocol",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doSessCommand",
          "normalized": "RequestMethod-\u003eText-\u003ea-\u003eb c",
          "package": "webdriver",
          "partial": "Sess Command",
          "signature": "RequestMethod-\u003eText-\u003ea-\u003ewd b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:doSessCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003edoSessCommand\u003c/a\u003e\u003c/code\u003e to create window handle URLS.\n For example, passing a URL of \"/size\" will expand to\n \"\u003cem\u003esession\u003c/em\u003e:sessionId\u003cem\u003ewindow\u003c/em\u003e:windowHandle/\", where :sessionId and\n :windowHandle are URL parameters as described in the wire protocol\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doWinCommand",
          "package": "webdriver",
          "signature": "RequestMethod -\u003e WindowHandle -\u003e Text -\u003e a -\u003e wd b",
          "source": "src/Test-WebDriver-Commands-Internal.html#doWinCommand",
          "type": "function"
        },
        "index": {
          "description": "wrapper around doSessCommand to create window handle URLS For example passing URL of size will expand to session sessionId window windowHandle where sessionId and windowHandle are URL parameters as described in the wire protocol",
          "hierarchy": "Test WebDriver Commands Internal",
          "module": "Test.WebDriver.Commands.Internal",
          "name": "doWinCommand",
          "normalized": "RequestMethod-\u003eWindowHandle-\u003eText-\u003ea-\u003eb c",
          "package": "webdriver",
          "partial": "Win Command",
          "signature": "RequestMethod-\u003eWindowHandle-\u003eText-\u003ea-\u003ewd b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Internal.html#v:doWinCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands.Wait",
          "name": "Wait",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Wait.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "Wait",
          "package": "webdriver",
          "partial": "Wait",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception representing the failure of an expected condition.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "ExpectFailed",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Wait.html#ExpectFailed",
          "type": "data"
        },
        "index": {
          "description": "An exception representing the failure of an expected condition",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "ExpectFailed",
          "package": "webdriver",
          "partial": "Expect Failed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#t:ExpectFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted inclusive disjunction. Unlike \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e), This function is \n short-circuiting in the monad. Fixity is the same as \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e (infixr 2).\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "(\u003c||\u003e)",
          "package": "webdriver",
          "signature": "m bool -\u003e m bool -\u003e m bool",
          "type": "function"
        },
        "index": {
          "description": "Lifted inclusive disjunction Unlike liftM2 This function is short-circuiting in the monad Fixity is the same as infixr",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "webdriver",
          "signature": "m bool-\u003em bool-\u003em bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted conjunction. Unlike \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e), this function is \n short-circuiting in the monad. Fixity is the same as \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e (infxr 3).\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "(\u003c&&\u003e)",
          "package": "webdriver",
          "signature": "m bool -\u003e m bool -\u003e m bool",
          "type": "function"
        },
        "index": {
          "description": "Lifted conjunction Unlike liftM2 this function is short-circuiting in the monad Fixity is the same as infxr",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "(\u003c&&\u003e) \u003c&&\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "webdriver",
          "signature": "m bool-\u003em bool-\u003em bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:-60--38--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expected condition. This function allows you to express assertions in\n your explicit wait. This function raises \u003ccode\u003e\u003ca\u003eExpectFailed\u003c/a\u003e\u003c/code\u003e if the given\n boolean is False, and otherwise does nothing.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "expect",
          "package": "webdriver",
          "signature": "Bool -\u003e m ()",
          "source": "src/Test-WebDriver-Commands-Wait.html#expect",
          "type": "function"
        },
        "index": {
          "description": "An expected condition This function allows you to express assertions in your explicit wait This function raises ExpectFailed if the given boolean is False and otherwise does nothing",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "expect",
          "normalized": "Bool-\u003ea()",
          "package": "webdriver",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic predicate to every element in a list, and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e that all\n succeed.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "expectAll",
          "package": "webdriver",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m ()",
          "source": "src/Test-WebDriver-Commands-Wait.html#expectAll",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic predicate to every element in list and expect that all succeed",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "expectAll",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb()",
          "package": "webdriver",
          "partial": "All",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:expectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic predicate to every element in a list, and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e that\n at least one succeeds.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "expectAny",
          "package": "webdriver",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m ()",
          "source": "src/Test-WebDriver-Commands-Wait.html#expectAny",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic predicate to every element in list and expect that at least one succeeds",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "expectAny",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb()",
          "package": "webdriver",
          "partial": "Any",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:expectAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eif'\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. Unlike \u003ccode\u003e\u003ca\u003eliftM3\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eif'\u003c/a\u003e\u003c/code\u003e, this is  \n short-circuiting in the monad, such that only the predicate action and one of\n the remaining argument actions are executed.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "ifM",
          "package": "webdriver",
          "signature": "m bool -\u003e m a -\u003e m a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "if lifted to Monad Unlike liftM3 if this is short-circuiting in the monad such that only the predicate action and one of the remaining argument actions are executed",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "ifM",
          "normalized": "a b-\u003ea c-\u003ea c-\u003ea c",
          "package": "webdriver",
          "signature": "m bool-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted boolean negation.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "notM",
          "package": "webdriver",
          "signature": "m bool -\u003e m bool",
          "type": "function"
        },
        "index": {
          "description": "Lifted boolean negation",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "notM",
          "normalized": "a b-\u003ea b",
          "package": "webdriver",
          "signature": "m bool-\u003em bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:notM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to catch \u003ccode\u003e\u003ca\u003eFailedCommand\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e exceptions\n and perform some action.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e waitUntil 5 (getText \u003c=\u003c findElem $ ByCSS \".class\")\n    `onTimeout` return \"\"\n\u003c/pre\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "onTimeout",
          "package": "webdriver",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Test-WebDriver-Commands-Wait.html#onTimeout",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to catch FailedCommand Timeout exceptions and perform some action Example waitUntil getText findElem ByCSS class onTimeout return",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "onTimeout",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "webdriver",
          "partial": "Timeout",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:onTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethrows \u003ccode\u003e\u003ca\u003eExpectFailed\u003c/a\u003e\u003c/code\u003e. This is nice for writing your own abstractions.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "unexpected",
          "package": "webdriver",
          "signature": "String-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "throws ExpectFailed This is nice for writing your own abstractions",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "unexpected",
          "normalized": "String-\u003ea b",
          "package": "webdriver",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until either the given action succeeds or the timeout is reached.\n The action will be retried every .5 seconds until no \u003ccode\u003e\u003ca\u003eExpectFailed\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eFailedCommand\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNoSuchElement\u003c/a\u003e\u003c/code\u003e exceptions occur. If the timeout is reached,\n then a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e exception will be raised. The timeout value\n is expressed in seconds.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitUntil",
          "package": "webdriver",
          "signature": "Double -\u003e m a -\u003e m a",
          "source": "src/Test-WebDriver-Commands-Wait.html#waitUntil",
          "type": "function"
        },
        "index": {
          "description": "Wait until either the given action succeeds or the timeout is reached The action will be retried every seconds until no ExpectFailed or FailedCommand NoSuchElement exceptions occur If the timeout is reached then Timeout exception will be raised The timeout value is expressed in seconds",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitUntil",
          "normalized": "Double-\u003ea b-\u003ea b",
          "package": "webdriver",
          "partial": "Until",
          "signature": "Double-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:waitUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewaitUntil\u003c/a\u003e\u003c/code\u003e but allows you to also specify the poll frequency\n of the \u003ccode\u003eWD\u003c/code\u003e action. The frequency is expressed as an integer in microseconds.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitUntil'",
          "package": "webdriver",
          "signature": "Int -\u003e Double -\u003e m a -\u003e m a",
          "source": "src/Test-WebDriver-Commands-Wait.html#waitUntil%27",
          "type": "function"
        },
        "index": {
          "description": "Similar to waitUntil but allows you to also specify the poll frequency of the WD action The frequency is expressed as an integer in microseconds",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitUntil'",
          "normalized": "Int-\u003eDouble-\u003ea b-\u003ea b",
          "package": "webdriver",
          "partial": "Until'",
          "signature": "Int-\u003eDouble-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:waitUntil-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitUntil\u003c/a\u003e\u003c/code\u003e, but retries the action until it fails or until the timeout\n is exceeded.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitWhile",
          "package": "webdriver",
          "signature": "Double -\u003e m a -\u003e m ()",
          "source": "src/Test-WebDriver-Commands-Wait.html#waitWhile",
          "type": "function"
        },
        "index": {
          "description": "Like waitUntil but retries the action until it fails or until the timeout is exceeded",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitWhile",
          "normalized": "Double-\u003ea b-\u003ea()",
          "package": "webdriver",
          "partial": "While",
          "signature": "Double-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:waitWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitUntil'\u003c/a\u003e\u003c/code\u003e, but retries the action until it either fails or\n until the timeout is exceeded.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitWhile'",
          "package": "webdriver",
          "signature": "Int -\u003e Double -\u003e m a -\u003e m ()",
          "source": "src/Test-WebDriver-Commands-Wait.html#waitWhile%27",
          "type": "function"
        },
        "index": {
          "description": "Like waitUntil but retries the action until it either fails or until the timeout is exceeded",
          "hierarchy": "Test WebDriver Commands Wait",
          "module": "Test.WebDriver.Commands.Wait",
          "name": "waitWhile'",
          "normalized": "Int-\u003eDouble-\u003ea b-\u003ea()",
          "package": "webdriver",
          "partial": "While'",
          "signature": "Int-\u003eDouble-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands-Wait.html#v:waitWhile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports basic WD actions that can be used to interact with a\n browser session.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "Commands",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports basic WD actions that can be used to interact with browser session",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Commands",
          "package": "webdriver",
          "partial": "Commands",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "ApplicationCacheStatus",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ApplicationCacheStatus",
          "package": "webdriver",
          "partial": "Application Cache Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:ApplicationCacheStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies are delicious delicacies. When sending cookies to the server, a value\n of Nothing indicates that the server should use a default value. When receiving\n cookies from the server, a value of Nothing indicates that the server is unable\n to specify the value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "Cookie",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "Cookies are delicious delicacies When sending cookies to the server value of Nothing indicates that the server should use default value When receiving cookies from the server value of Nothing indicates that the server is unable to specify the value",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Cookie",
          "package": "webdriver",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a web page element. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "Element",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#Element",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for web page element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Element",
          "package": "webdriver",
          "partial": "Element",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the frame used by \u003ccode\u003e\u003ca\u003efocusFrame\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "FrameSelector",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#FrameSelector",
          "type": "data"
        },
        "index": {
          "description": "Specifies the frame used by focusFrame",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "FrameSelector",
          "package": "webdriver",
          "partial": "Frame Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:FrameSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper for any \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance. This allows us to pass\n parameters of many different types to Javascript code.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "JSArg",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#JSArg",
          "type": "data"
        },
        "index": {
          "description": "An existential wrapper for any ToJSON instance This allows us to pass parameters of many different types to Javascript code",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "JSArg",
          "package": "webdriver",
          "partial": "JSArg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:JSArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record that represents a single log entry.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "LogEntry",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#LogEntry",
          "type": "data"
        },
        "index": {
          "description": "record that represents single log entry",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "LogEntry",
          "package": "webdriver",
          "partial": "Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates a log verbosity level. Used in \u003ccode\u003e\u003ca\u003eFirefox\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOpera\u003c/a\u003e\u003c/code\u003e configuration.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "LogLevel",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Indicates log verbosity level Used in Firefox and Opera configuration",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "LogLevel",
          "package": "webdriver",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "LogType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#LogType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "LogType",
          "package": "webdriver",
          "partial": "Log Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:LogType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mouse button\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "MouseButton",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#MouseButton",
          "type": "data"
        },
        "index": {
          "description": "mouse button",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "MouseButton",
          "package": "webdriver",
          "partial": "Mouse Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA screen orientation\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "Orientation",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#Orientation",
          "type": "data"
        },
        "index": {
          "description": "screen orientation",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Orientation",
          "package": "webdriver",
          "partial": "Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies element(s) within a DOM tree using various selection methods.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "Selector",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "data"
        },
        "index": {
          "description": "Specifies element within DOM tree using various selection methods",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Selector",
          "package": "webdriver",
          "partial": "Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTML 5 storage type\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "WebStorageType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#WebStorageType",
          "type": "data"
        },
        "index": {
          "description": "An HTML storage type",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "WebStorageType",
          "package": "webdriver",
          "partial": "Web Storage Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:WebStorageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a browser window \n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "WindowHandle",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#WindowHandle",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for browser window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "WindowHandle",
          "package": "webdriver",
          "partial": "Window Handle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#t:WindowHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if two element identifiers refer to different elements.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "(\u003c/=\u003e)",
          "package": "webdriver",
          "signature": "Element -\u003e Element -\u003e wd Bool",
          "source": "src/Test-WebDriver-Commands.html#%3C%2F%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Determines if two element identifiers refer to different elements",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "(\u003c/=\u003e) \u003c/=\u003e",
          "normalized": "Element-\u003eElement-\u003ea Bool",
          "package": "webdriver",
          "signature": "Element-\u003eElement-\u003ewd Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:-60--47--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if two element identifiers refer to the same element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "(\u003c==\u003e)",
          "package": "webdriver",
          "signature": "Element -\u003e Element -\u003e wd Bool",
          "source": "src/Test-WebDriver-Commands.html#%3C%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Determines if two element identifiers refer to the same element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "(\u003c==\u003e) \u003c==\u003e",
          "normalized": "Element-\u003eElement-\u003ea Bool",
          "package": "webdriver",
          "signature": "Element-\u003eElement-\u003ewd Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:-60--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByCSS",
          "package": "webdriver",
          "signature": "ByCSS Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByCSS\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByCSS\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByCSS",
          "package": "webdriver",
          "partial": "By CSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByCSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Note: multiple classes are not\n allowed. For more control, use \u003ccode\u003e\u003ca\u003eByCSS\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByClass",
          "package": "webdriver",
          "signature": "ByClass Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByClass\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByClass\"]"
        },
        "index": {
          "description": "Note multiple classes are not allowed For more control use ByCSS",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByClass",
          "package": "webdriver",
          "partial": "By Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ById",
          "package": "webdriver",
          "signature": "ById Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ById\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ById\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ById",
          "package": "webdriver",
          "partial": "By Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByLinkText",
          "package": "webdriver",
          "signature": "ByLinkText Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByLinkText\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByLinkText\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByLinkText",
          "package": "webdriver",
          "partial": "By Link Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByLinkText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByName",
          "package": "webdriver",
          "signature": "ByName Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByName\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByName\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByName",
          "package": "webdriver",
          "partial": "By Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByPartialLinkText",
          "package": "webdriver",
          "signature": "ByPartialLinkText Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByPartialLinkText\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByPartialLinkText\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByPartialLinkText",
          "package": "webdriver",
          "partial": "By Partial Link Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByPartialLinkText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByTag",
          "package": "webdriver",
          "signature": "ByTag Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByTag\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByTag\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByTag",
          "package": "webdriver",
          "partial": "By Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "ByXPath",
          "package": "webdriver",
          "signature": "ByXPath Text",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByXPath\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ByXPath\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "ByXPath",
          "package": "webdriver",
          "partial": "By XPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:ByXPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Checking",
          "package": "webdriver",
          "signature": "Checking",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Checking\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Checking\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Checking",
          "package": "webdriver",
          "partial": "Checking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Checking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Cookie",
          "package": "webdriver",
          "signature": "Cookie",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Cookie\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Cookie\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Cookie",
          "package": "webdriver",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efocus on the first frame, or the main document\n if iframes are used.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "DefaultFrame",
          "package": "webdriver",
          "signature": "DefaultFrame",
          "source": "src/Test-WebDriver-Commands.html#FrameSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:DefaultFrame\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:DefaultFrame\"]"
        },
        "index": {
          "description": "focus on the first frame or the main document if iframes are used",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "DefaultFrame",
          "package": "webdriver",
          "partial": "Default Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:DefaultFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Downloading",
          "package": "webdriver",
          "signature": "Downloading",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Downloading\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Downloading\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Downloading",
          "package": "webdriver",
          "partial": "Downloading",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Downloading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Idle",
          "package": "webdriver",
          "signature": "Idle",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Idle\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Idle\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Idle",
          "package": "webdriver",
          "partial": "Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Idle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "JSArg",
          "package": "webdriver",
          "signature": "JSArg a",
          "source": "src/Test-WebDriver-Commands.html#JSArg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:JSArg\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:JSArg\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "JSArg",
          "package": "webdriver",
          "partial": "JSArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:JSArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Landscape",
          "package": "webdriver",
          "signature": "Landscape",
          "source": "src/Test-WebDriver-Commands.html#Orientation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Landscape\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Landscape\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Landscape",
          "package": "webdriver",
          "partial": "Landscape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Landscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "LeftButton",
          "package": "webdriver",
          "signature": "LeftButton",
          "source": "src/Test-WebDriver-Commands.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LeftButton\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LeftButton\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "LeftButton",
          "package": "webdriver",
          "partial": "Left Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LeftButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "LocalStorage",
          "package": "webdriver",
          "signature": "LocalStorage",
          "source": "src/Test-WebDriver-Commands.html#WebStorageType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LocalStorage\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LocalStorage\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "LocalStorage",
          "package": "webdriver",
          "partial": "Local Storage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LocalStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "LogEntry",
          "package": "webdriver",
          "signature": "LogEntry",
          "source": "src/Test-WebDriver-Commands.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogEntry\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:LogEntry\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "LogEntry",
          "package": "webdriver",
          "partial": "Log Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "MiddleButton",
          "package": "webdriver",
          "signature": "MiddleButton",
          "source": "src/Test-WebDriver-Commands.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:MiddleButton\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:MiddleButton\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "MiddleButton",
          "package": "webdriver",
          "partial": "Middle Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:MiddleButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Obsolete",
          "package": "webdriver",
          "signature": "Obsolete",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Obsolete\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Obsolete\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Obsolete",
          "package": "webdriver",
          "partial": "Obsolete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Obsolete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Portrait",
          "package": "webdriver",
          "signature": "Portrait",
          "source": "src/Test-WebDriver-Commands.html#Orientation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Portrait\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Portrait\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Portrait",
          "package": "webdriver",
          "partial": "Portrait",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Portrait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "RightButton",
          "package": "webdriver",
          "signature": "RightButton",
          "source": "src/Test-WebDriver-Commands.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:RightButton\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:RightButton\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "RightButton",
          "package": "webdriver",
          "partial": "Right Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:RightButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "SessionStorage",
          "package": "webdriver",
          "signature": "SessionStorage",
          "source": "src/Test-WebDriver-Commands.html#WebStorageType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:SessionStorage\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:SessionStorage\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "SessionStorage",
          "package": "webdriver",
          "partial": "Session Storage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:SessionStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "Uncached",
          "package": "webdriver",
          "signature": "Uncached",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Uncached\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Uncached\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "Uncached",
          "package": "webdriver",
          "partial": "Uncached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:Uncached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "UpdateReady",
          "package": "webdriver",
          "signature": "UpdateReady",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:UpdateReady\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UpdateReady\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "UpdateReady",
          "package": "webdriver",
          "partial": "Update Ready",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:UpdateReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efocus on a frame \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "WithElement",
          "package": "webdriver",
          "signature": "WithElement Element",
          "source": "src/Test-WebDriver-Commands.html#FrameSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WithElement\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:WithElement\"]"
        },
        "index": {
          "description": "focus on frame Element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "WithElement",
          "package": "webdriver",
          "partial": "With Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WithElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "WithIndex",
          "package": "webdriver",
          "signature": "WithIndex Integer",
          "source": "src/Test-WebDriver-Commands.html#FrameSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WithIndex\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:WithIndex\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "WithIndex",
          "package": "webdriver",
          "partial": "With Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efocus on a frame by name or ID\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "WithName",
          "package": "webdriver",
          "signature": "WithName Text",
          "source": "src/Test-WebDriver-Commands.html#FrameSelector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WithName\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:WithName\"]"
        },
        "index": {
          "description": "focus on frame by name or ID",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "WithName",
          "package": "webdriver",
          "partial": "With Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:WithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts the currently displayed alert dialog.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "acceptAlert",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#acceptAlert",
          "type": "function"
        },
        "index": {
          "description": "Accepts the currently displayed alert dialog",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "acceptAlert",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Alert",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:acceptAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "activateIME",
          "package": "webdriver",
          "signature": "Text -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#activateIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "activateIME",
          "normalized": "Text-\u003ea()",
          "package": "webdriver",
          "partial": "IME",
          "signature": "Text-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:activateIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the element that currently has focus.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "activeElem",
          "package": "webdriver",
          "signature": "wd Element",
          "source": "src/Test-WebDriver-Commands.html#activeElem",
          "type": "function"
        },
        "index": {
          "description": "Return the element that currently has focus",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "activeElem",
          "package": "webdriver",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:activeElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "activeIMEEngine",
          "package": "webdriver",
          "signature": "wd Text",
          "source": "src/Test-WebDriver-Commands.html#activeIMEEngine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "activeIMEEngine",
          "package": "webdriver",
          "partial": "IMEEngine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:activeIMEEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a snippet of Javascript code asynchronously. This function works\nsimilarly to \u003ccode\u003e\u003ca\u003eexecuteJS\u003c/a\u003e\u003c/code\u003e, except that the Javascript is passed a callback\nfunction as its final argument. The script should call this function\nto signal that it has finished executing, passing to it a value that will be\nreturned as the result of asyncJS. A result of Nothing indicates that the\nJavascript function timed out (see \u003ccode\u003e\u003ca\u003esetScriptTimeout\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "asyncJS",
          "package": "webdriver",
          "signature": "[JSArg] -\u003e Text -\u003e wd (Maybe a)",
          "source": "src/Test-WebDriver-Commands.html#asyncJS",
          "type": "function"
        },
        "index": {
          "description": "Executes snippet of Javascript code asynchronously This function works similarly to executeJS except that the Javascript is passed callback function as its final argument The script should call this function to signal that it has finished executing passing to it value that will be returned as the result of asyncJS result of Nothing indicates that the Javascript function timed out see setScriptTimeout",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "asyncJS",
          "normalized": "[JSArg]-\u003eText-\u003ea(Maybe b)",
          "package": "webdriver",
          "partial": "JS",
          "signature": "[JSArg]-\u003eText-\u003ewd(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:asyncJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of an element's attribute\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "attr",
          "package": "webdriver",
          "signature": "Element -\u003e Text -\u003e wd (Maybe Text)",
          "source": "src/Test-WebDriver-Commands.html#attr",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value of an element attribute",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "attr",
          "normalized": "Element-\u003eText-\u003ea(Maybe Text)",
          "package": "webdriver",
          "signature": "Element-\u003eText-\u003ewd(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "availableIMEEngines",
          "package": "webdriver",
          "signature": "wd [Text]",
          "source": "src/Test-WebDriver-Commands.html#availableIMEEngines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "availableIMEEngines",
          "normalized": "a[Text]",
          "package": "webdriver",
          "partial": "IMEEngines",
          "signature": "wd[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:availableIMEEngines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigate backward in the browser history.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "back",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#back",
          "type": "function"
        },
        "index": {
          "description": "Navigate backward in the browser history",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "back",
          "normalized": "a()",
          "package": "webdriver",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:back"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "checkIMEActive",
          "package": "webdriver",
          "signature": "wd Bool",
          "source": "src/Test-WebDriver-Commands.html#checkIMEActive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "checkIMEActive",
          "package": "webdriver",
          "partial": "IMEActive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:checkIMEActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear a textarea or text input element's value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "clearInput",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#clearInput",
          "type": "function"
        },
        "index": {
          "description": "Clear textarea or text input element value",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "clearInput",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "partial": "Input",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:clearInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClick on an element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "click",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#click",
          "type": "function"
        },
        "index": {
          "description": "Click on an element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "click",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:click"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClick at the current mouse position with the given mouse button.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "clickWith",
          "package": "webdriver",
          "signature": "MouseButton -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#clickWith",
          "type": "function"
        },
        "index": {
          "description": "Click at the current mouse position with the given mouse button",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "clickWith",
          "normalized": "MouseButton-\u003ea()",
          "package": "webdriver",
          "partial": "With",
          "signature": "MouseButton-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:clickWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the current session and the browser associated with it.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "closeSession",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#closeSession",
          "type": "function"
        },
        "index": {
          "description": "Close the current session and the browser associated with it",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "closeSession",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Session",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:closeSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the given window\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "closeWindow",
          "package": "webdriver",
          "signature": "WindowHandle -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#closeWindow",
          "type": "function"
        },
        "index": {
          "description": "Closes the given window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "closeWindow",
          "normalized": "WindowHandle-\u003ea()",
          "package": "webdriver",
          "partial": "Window",
          "signature": "WindowHandle-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:closeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edomain of this cookie.\n if Nothing, the current pages\n domain is used\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "cookDomain",
          "package": "webdriver",
          "signature": "Maybe Text",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookDomain\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cookDomain\"]"
        },
        "index": {
          "description": "domain of this cookie if Nothing the current pages domain is used",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookDomain",
          "package": "webdriver",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpiry date expressed as\n seconds since the Unix epoch\n Nothing indicates that the\n cookie never expires\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "cookExpiry",
          "package": "webdriver",
          "signature": "Maybe Integer",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookExpiry\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cookExpiry\"]"
        },
        "index": {
          "description": "Expiry date expressed as seconds since the Unix epoch Nothing indicates that the cookie never expires",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookExpiry",
          "package": "webdriver",
          "partial": "Expiry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookExpiry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "cookName",
          "package": "webdriver",
          "signature": "Text",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookName\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cookName\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookName",
          "package": "webdriver",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath of this cookie.\n if Nothing, defaults to /\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "cookPath",
          "package": "webdriver",
          "signature": "Maybe Text",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookPath\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cookPath\"]"
        },
        "index": {
          "description": "path of this cookie if Nothing defaults to",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookPath",
          "package": "webdriver",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this cookie secure?\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "cookSecure",
          "package": "webdriver",
          "signature": "Maybe Bool",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookSecure\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cookSecure\"]"
        },
        "index": {
          "description": "Is this cookie secure",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookSecure",
          "package": "webdriver",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "cookValue",
          "package": "webdriver",
          "signature": "Text",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookValue\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:cookValue\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookValue",
          "package": "webdriver",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all cookies visible to the current page.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "cookies",
          "package": "webdriver",
          "signature": "wd [Cookie]",
          "source": "src/Test-WebDriver-Commands.html#cookies",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all cookies visible to the current page",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cookies",
          "normalized": "a[Cookie]",
          "package": "webdriver",
          "signature": "wd[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new session with the given \u003ccode\u003e\u003ca\u003eCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "createSession",
          "package": "webdriver",
          "signature": "Capabilities -\u003e wd WDSession",
          "source": "src/Test-WebDriver-Commands.html#createSession",
          "type": "function"
        },
        "index": {
          "description": "Create new session with the given Capabilities",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "createSession",
          "normalized": "Capabilities-\u003ea WDSession",
          "package": "webdriver",
          "partial": "Session",
          "signature": "Capabilities-\u003ewd WDSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:createSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of an element's computed CSS property\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "cssProp",
          "package": "webdriver",
          "signature": "Element -\u003e Text -\u003e wd (Maybe Text)",
          "source": "src/Test-WebDriver-Commands.html#cssProp",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value of an element computed CSS property",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "cssProp",
          "normalized": "Element-\u003eText-\u003ea(Maybe Text)",
          "package": "webdriver",
          "partial": "Prop",
          "signature": "Element-\u003eText-\u003ewd(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:cssProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "deactivateIME",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#deactivateIME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "deactivateIME",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "IME",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:deactivateIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all keys within a given web storage area.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "deleteAllKeys",
          "package": "webdriver",
          "signature": "WebStorageType -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#deleteAllKeys",
          "type": "function"
        },
        "index": {
          "description": "Delete all keys within given web storage area",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "deleteAllKeys",
          "normalized": "WebStorageType-\u003ea()",
          "package": "webdriver",
          "partial": "All Keys",
          "signature": "WebStorageType-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:deleteAllKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a cookie. This will do nothing is the cookie isn't visible to the\n current page.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "deleteCookie",
          "package": "webdriver",
          "signature": "Cookie -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#deleteCookie",
          "type": "function"
        },
        "index": {
          "description": "Delete cookie This will do nothing is the cookie isn visible to the current page",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "deleteCookie",
          "normalized": "Cookie-\u003ea()",
          "package": "webdriver",
          "partial": "Cookie",
          "signature": "Cookie-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:deleteCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "deleteCookieByName",
          "package": "webdriver",
          "signature": "Text -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#deleteCookieByName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "deleteCookieByName",
          "normalized": "Text-\u003ea()",
          "package": "webdriver",
          "partial": "Cookie By Name",
          "signature": "Text-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:deleteCookieByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key in the given web storage area.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "deleteKey",
          "package": "webdriver",
          "signature": "WebStorageType -\u003e Text -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#deleteKey",
          "type": "function"
        },
        "index": {
          "description": "Delete key in the given web storage area",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "deleteKey",
          "normalized": "WebStorageType-\u003eText-\u003ea()",
          "package": "webdriver",
          "partial": "Key",
          "signature": "WebStorageType-\u003eText-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:deleteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all visible cookies on the current page.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "deleteVisibleCookies",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#deleteVisibleCookies",
          "type": "function"
        },
        "index": {
          "description": "Delete all visible cookies on the current page",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "deleteVisibleCookies",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Visible Cookies",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:deleteVisibleCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDismisses the currently displayed alert dialog.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "dismissAlert",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#dismissAlert",
          "type": "function"
        },
        "index": {
          "description": "Dismisses the currently displayed alert dialog",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "dismissAlert",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Alert",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:dismissAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble click at the current mouse location.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "doubleClick",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#doubleClick",
          "type": "function"
        },
        "index": {
          "description": "Double click at the current mouse location",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "doubleClick",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Click",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:doubleClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the element. Returns a JSON object whose meaning is currently\n undefined by the WebDriver protocol.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "elemInfo",
          "package": "webdriver",
          "signature": "Element -\u003e wd Value",
          "source": "src/Test-WebDriver-Commands.html#elemInfo",
          "type": "function"
        },
        "index": {
          "description": "Describe the element Returns JSON object whose meaning is currently undefined by the WebDriver protocol",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "elemInfo",
          "normalized": "Element-\u003ea Value",
          "package": "webdriver",
          "partial": "Info",
          "signature": "Element-\u003ewd Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:elemInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an element's current position.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "elemPos",
          "package": "webdriver",
          "signature": "Element -\u003e wd (Int, Int)",
          "source": "src/Test-WebDriver-Commands.html#elemPos",
          "type": "function"
        },
        "index": {
          "description": "Retrieve an element current position",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "elemPos",
          "normalized": "Element-\u003ea(Int,Int)",
          "package": "webdriver",
          "partial": "Pos",
          "signature": "Element-\u003ewd(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:elemPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an element's current size.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "elemSize",
          "package": "webdriver",
          "signature": "Element -\u003e wd (Word, Word)",
          "source": "src/Test-WebDriver-Commands.html#elemSize",
          "type": "function"
        },
        "index": {
          "description": "Retrieve an element current size",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "elemSize",
          "normalized": "Element-\u003ea(Word,Word)",
          "package": "webdriver",
          "partial": "Size",
          "signature": "Element-\u003ewd(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:elemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a snippet of Javascript into the page for execution in the\ncontext of the currently selected frame. The executed script is\nassumed to be synchronous and the result of evaluating the script is\nreturned and converted to an instance of FromJSON.\n\u003c/p\u003e\u003cp\u003eThe first parameter defines arguments to pass to the javascript\nfunction. Arguments of type Element will be converted to the\ncorresponding DOM element. Likewise, any elements in the script result\nwill be returned to the client as Elements.\n\u003c/p\u003e\u003cp\u003eThe second parameter defines the script itself in the form of a\nfunction body. The value returned by that function will be returned to\nthe client. The function will be invoked with the provided argument\nlist and the values may be accessed via the arguments object in the\norder specified.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "executeJS",
          "package": "webdriver",
          "signature": "[JSArg] -\u003e Text -\u003e wd a",
          "source": "src/Test-WebDriver-Commands.html#executeJS",
          "type": "function"
        },
        "index": {
          "description": "Inject snippet of Javascript into the page for execution in the context of the currently selected frame The executed script is assumed to be synchronous and the result of evaluating the script is returned and converted to an instance of FromJSON The first parameter defines arguments to pass to the javascript function Arguments of type Element will be converted to the corresponding DOM element Likewise any elements in the script result will be returned to the client as Elements The second parameter defines the script itself in the form of function body The value returned by that function will be returned to the client The function will be invoked with the provided argument list and the values may be accessed via the arguments object in the order specified",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "executeJS",
          "normalized": "[JSArg]-\u003eText-\u003ea b",
          "package": "webdriver",
          "partial": "JS",
          "signature": "[JSArg]-\u003eText-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:executeJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an element on the page using the given element selector.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "findElem",
          "package": "webdriver",
          "signature": "Selector -\u003e wd Element",
          "source": "src/Test-WebDriver-Commands.html#findElem",
          "type": "function"
        },
        "index": {
          "description": "Find an element on the page using the given element selector",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "findElem",
          "normalized": "Selector-\u003ea Element",
          "package": "webdriver",
          "partial": "Elem",
          "signature": "Selector-\u003ewd Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:findElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for an element using the given element as root.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "findElemFrom",
          "package": "webdriver",
          "signature": "Element -\u003e Selector -\u003e wd Element",
          "source": "src/Test-WebDriver-Commands.html#findElemFrom",
          "type": "function"
        },
        "index": {
          "description": "Search for an element using the given element as root",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "findElemFrom",
          "normalized": "Element-\u003eSelector-\u003ea Element",
          "package": "webdriver",
          "partial": "Elem From",
          "signature": "Element-\u003eSelector-\u003ewd Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:findElemFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all elements on the page matching the given selector.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "findElems",
          "package": "webdriver",
          "signature": "Selector -\u003e wd [Element]",
          "source": "src/Test-WebDriver-Commands.html#findElems",
          "type": "function"
        },
        "index": {
          "description": "Find all elements on the page matching the given selector",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "findElems",
          "normalized": "Selector-\u003ea[Element]",
          "package": "webdriver",
          "partial": "Elems",
          "signature": "Selector-\u003ewd[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:findElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all elements matching a selector, using the given element as root.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "findElemsFrom",
          "package": "webdriver",
          "signature": "Element -\u003e Selector -\u003e wd [Element]",
          "source": "src/Test-WebDriver-Commands.html#findElemsFrom",
          "type": "function"
        },
        "index": {
          "description": "Find all elements matching selector using the given element as root",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "findElemsFrom",
          "normalized": "Element-\u003eSelector-\u003ea[Element]",
          "package": "webdriver",
          "partial": "Elems From",
          "signature": "Element-\u003eSelector-\u003ewd[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:findElemsFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch focus to the frame specified by the FrameSelector.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "focusFrame",
          "package": "webdriver",
          "signature": "FrameSelector -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#focusFrame",
          "type": "function"
        },
        "index": {
          "description": "Switch focus to the frame specified by the FrameSelector",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "focusFrame",
          "normalized": "FrameSelector-\u003ea()",
          "package": "webdriver",
          "partial": "Frame",
          "signature": "FrameSelector-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:focusFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "focusWindow",
          "package": "webdriver",
          "signature": "WindowHandle -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#focusWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "focusWindow",
          "normalized": "WindowHandle-\u003ea()",
          "package": "webdriver",
          "partial": "Window",
          "signature": "WindowHandle-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:focusWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigate forward in the browser history.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "forward",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#forward",
          "type": "function"
        },
        "index": {
          "description": "Navigate forward in the browser history",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "forward",
          "normalized": "a()",
          "package": "webdriver",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the text of an alert dialog.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getAlertText",
          "package": "webdriver",
          "signature": "wd Text",
          "source": "src/Test-WebDriver-Commands.html#getAlertText",
          "type": "function"
        },
        "index": {
          "description": "Get the text of an alert dialog",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getAlertText",
          "package": "webdriver",
          "partial": "Alert Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getAlertText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all keys from a web storage area.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getAllKeys",
          "package": "webdriver",
          "signature": "WebStorageType -\u003e wd [Text]",
          "source": "src/Test-WebDriver-Commands.html#getAllKeys",
          "type": "function"
        },
        "index": {
          "description": "Get list of all keys from web storage area",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getAllKeys",
          "normalized": "WebStorageType-\u003ea[Text]",
          "package": "webdriver",
          "partial": "All Keys",
          "signature": "WebStorageType-\u003ewd[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getAllKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Commands",
          "name": "getApplicationCacheStatus",
          "package": "webdriver",
          "signature": "wd ApplicationCacheStatus",
          "source": "src/Test-WebDriver-Commands.html#getApplicationCacheStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getApplicationCacheStatus",
          "package": "webdriver",
          "partial": "Application Cache Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getApplicationCacheStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the actual \u003ccode\u003e\u003ca\u003eCapabilities\u003c/a\u003e\u003c/code\u003e of the current session.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getCaps",
          "package": "webdriver",
          "signature": "wd Capabilities",
          "source": "src/Test-WebDriver-Commands.html#getCaps",
          "type": "function"
        },
        "index": {
          "description": "Get the actual Capabilities of the current session",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getCaps",
          "package": "webdriver",
          "partial": "Caps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the URL of the current page.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getCurrentURL",
          "package": "webdriver",
          "signature": "wd String",
          "source": "src/Test-WebDriver-Commands.html#getCurrentURL",
          "type": "function"
        },
        "index": {
          "description": "Gets the URL of the current page",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getCurrentURL",
          "package": "webdriver",
          "partial": "Current URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getCurrentURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a handle to the currently focused window\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getCurrentWindow",
          "package": "webdriver",
          "signature": "wd WindowHandle",
          "source": "src/Test-WebDriver-Commands.html#getCurrentWindow",
          "type": "function"
        },
        "index": {
          "description": "Returns handle to the currently focused window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getCurrentWindow",
          "package": "webdriver",
          "partial": "Current Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getCurrentWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value associated with a key in the given web storage area.\n Unset keys result in empty strings, since the Web Storage spec\n makes no distinction between the empty string and an undefined value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getKey",
          "package": "webdriver",
          "signature": "WebStorageType -\u003e Text -\u003e wd Text",
          "source": "src/Test-WebDriver-Commands.html#getKey",
          "type": "function"
        },
        "index": {
          "description": "Get the value associated with key in the given web storage area Unset keys result in empty strings since the Web Storage spec makes no distinction between the empty string and an undefined value",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getKey",
          "normalized": "WebStorageType-\u003eText-\u003ea Text",
          "package": "webdriver",
          "partial": "Key",
          "signature": "WebStorageType-\u003eText-\u003ewd Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current geographical location of the device.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getLocation",
          "package": "webdriver",
          "signature": "wd (Int, Int, Int)",
          "source": "src/Test-WebDriver-Commands.html#getLocation",
          "type": "function"
        },
        "index": {
          "description": "Get the current geographical location of the device",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getLocation",
          "normalized": "a(Int,Int,Int)",
          "package": "webdriver",
          "partial": "Location",
          "signature": "wd(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of available log types.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getLogTypes",
          "package": "webdriver",
          "signature": "wd [LogType]",
          "source": "src/Test-WebDriver-Commands.html#getLogTypes",
          "type": "function"
        },
        "index": {
          "description": "Get list of available log types",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getLogTypes",
          "normalized": "a[LogType]",
          "package": "webdriver",
          "partial": "Log Types",
          "signature": "wd[LogType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getLogTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the log buffer for a given log type. The server-side log buffer is reset after each request.\n\u003c/p\u003e\u003cp\u003eWhich log types are available is server defined, but the wire protocol lists these as common log types:\n client, driver, browser, server\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getLogs",
          "package": "webdriver",
          "signature": "LogType -\u003e wd [LogEntry]",
          "source": "src/Test-WebDriver-Commands.html#getLogs",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the log buffer for given log type The server-side log buffer is reset after each request Which log types are available is server defined but the wire protocol lists these as common log types client driver browser server",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getLogs",
          "normalized": "LogType-\u003ea[LogEntry]",
          "package": "webdriver",
          "partial": "Logs",
          "signature": "LogType-\u003ewd[LogEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getLogs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current screen orientation for rotatable display devices.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getOrientation",
          "package": "webdriver",
          "signature": "wd Orientation",
          "source": "src/Test-WebDriver-Commands.html#getOrientation",
          "type": "function"
        },
        "index": {
          "description": "Get the current screen orientation for rotatable display devices",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getOrientation",
          "package": "webdriver",
          "partial": "Orientation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current page source\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getSource",
          "package": "webdriver",
          "signature": "wd Text",
          "source": "src/Test-WebDriver-Commands.html#getSource",
          "type": "function"
        },
        "index": {
          "description": "Get the current page source",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getSource",
          "package": "webdriver",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all visible text within this element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getText",
          "package": "webdriver",
          "signature": "Element -\u003e wd Text",
          "source": "src/Test-WebDriver-Commands.html#getText",
          "type": "function"
        },
        "index": {
          "description": "Get all visible text within this element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getText",
          "normalized": "Element-\u003ea Text",
          "package": "webdriver",
          "partial": "Text",
          "signature": "Element-\u003ewd Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the title of the current page.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getTitle",
          "package": "webdriver",
          "signature": "wd Text",
          "source": "src/Test-WebDriver-Commands.html#getTitle",
          "type": "function"
        },
        "index": {
          "description": "Get the title of the current page",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getTitle",
          "package": "webdriver",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the coordinates of the current window.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getWindowPos",
          "package": "webdriver",
          "signature": "wd (Int, Int)",
          "source": "src/Test-WebDriver-Commands.html#getWindowPos",
          "type": "function"
        },
        "index": {
          "description": "Get the coordinates of the current window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getWindowPos",
          "normalized": "a(Int,Int)",
          "package": "webdriver",
          "partial": "Window Pos",
          "signature": "wd(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getWindowPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the dimensions of the current window.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "getWindowSize",
          "package": "webdriver",
          "signature": "wd (Word, Word)",
          "source": "src/Test-WebDriver-Commands.html#getWindowSize",
          "type": "function"
        },
        "index": {
          "description": "Get the dimensions of the current window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "getWindowSize",
          "normalized": "a(Word,Word)",
          "package": "webdriver",
          "partial": "Window Size",
          "signature": "wd(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:getWindowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the element is displayed.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "isDisplayed",
          "package": "webdriver",
          "signature": "Element -\u003e wd Bool",
          "source": "src/Test-WebDriver-Commands.html#isDisplayed",
          "type": "function"
        },
        "index": {
          "description": "Determine if the element is displayed",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "isDisplayed",
          "normalized": "Element-\u003ea Bool",
          "package": "webdriver",
          "partial": "Displayed",
          "signature": "Element-\u003ewd Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:isDisplayed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the element is enabled.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "isEnabled",
          "package": "webdriver",
          "signature": "Element -\u003e wd Bool",
          "source": "src/Test-WebDriver-Commands.html#isEnabled",
          "type": "function"
        },
        "index": {
          "description": "Determine if the element is enabled",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "isEnabled",
          "normalized": "Element-\u003ea Bool",
          "package": "webdriver",
          "partial": "Enabled",
          "signature": "Element-\u003ewd Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:isEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the element is selected.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "isSelected",
          "package": "webdriver",
          "signature": "Element -\u003e wd Bool",
          "source": "src/Test-WebDriver-Commands.html#isSelected",
          "type": "function"
        },
        "index": {
          "description": "Determine if the element is selected",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "isSelected",
          "normalized": "Element-\u003ea Bool",
          "package": "webdriver",
          "partial": "Selected",
          "signature": "Element-\u003ewd Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:isSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog verbosity level\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "logLevel",
          "package": "webdriver",
          "signature": "LogLevel",
          "source": "src/Test-WebDriver-Commands.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:logLevel\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:logLevel\"]"
        },
        "index": {
          "description": "log verbosity level",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "logLevel",
          "package": "webdriver",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:logLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "logMsg",
          "package": "webdriver",
          "signature": "Text",
          "source": "src/Test-WebDriver-Commands.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:logMsg\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:logMsg\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "logMsg",
          "package": "webdriver",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:logMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etimestamp for the log entry. The standard \n does not specify the epoch or the unit of \n time.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "logTime",
          "package": "webdriver",
          "signature": "Integer",
          "source": "src/Test-WebDriver-Commands.html#LogEntry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:logTime\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:logTime\"]"
        },
        "index": {
          "description": "timestamp for the log entry The standard does not specify the epoch or the unit of time",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "logTime",
          "package": "webdriver",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:logTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximizes the current  window if not already maximized\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "maximize",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#maximize",
          "type": "function"
        },
        "index": {
          "description": "Maximizes the current window if not already maximized",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "maximize",
          "normalized": "a()",
          "package": "webdriver",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Cookie with only a name and value specified. All other\n fields are set to Nothing, which tells the server to use default values.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Commands\",\"Test.WebDriver.Types\"]",
          "name": "mkCookie",
          "package": "webdriver",
          "signature": "Text -\u003e Text -\u003e Cookie",
          "source": "src/Test-WebDriver-Commands.html#mkCookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:mkCookie\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:mkCookie\"]"
        },
        "index": {
          "description": "Creates Cookie with only name and value specified All other fields are set to Nothing which tells the server to use default values",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "mkCookie",
          "normalized": "Text-\u003eText-\u003eCookie",
          "package": "webdriver",
          "partial": "Cookie",
          "signature": "Text-\u003eText-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:mkCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePress and hold the left mouse button down. Note that undefined behavior\n occurs if the next mouse command is not mouseUp.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "mouseDown",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#mouseDown",
          "type": "function"
        },
        "index": {
          "description": "Press and hold the left mouse button down Note that undefined behavior occurs if the next mouse command is not mouseUp",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "mouseDown",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Down",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:mouseDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the left mouse button.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "mouseUp",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#mouseUp",
          "type": "function"
        },
        "index": {
          "description": "Release the left mouse button",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "mouseUp",
          "normalized": "a()",
          "package": "webdriver",
          "partial": "Up",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:mouseUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the mouse to the given position relative to the active element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "moveTo",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#moveTo",
          "type": "function"
        },
        "index": {
          "description": "Moves the mouse to the given position relative to the active element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "moveTo",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "To",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the mouse to the center of a given element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "moveToCenter",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#moveToCenter",
          "type": "function"
        },
        "index": {
          "description": "Moves the mouse to the center of given element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "moveToCenter",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "partial": "To Center",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:moveToCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the mouse to the given position relative to the given element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "moveToFrom",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#moveToFrom",
          "type": "function"
        },
        "index": {
          "description": "Moves the mouse to the given position relative to the given element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "moveToFrom",
          "normalized": "(Int,Int)-\u003eElement-\u003ea()",
          "package": "webdriver",
          "partial": "To From",
          "signature": "(Int,Int)-\u003eElement-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:moveToFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a new page by the given URL.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "openPage",
          "package": "webdriver",
          "signature": "String -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#openPage",
          "type": "function"
        },
        "index": {
          "description": "Opens new page by the given URL",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "openPage",
          "normalized": "String-\u003ea()",
          "package": "webdriver",
          "partial": "Page",
          "signature": "String-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:openPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefresh the current page\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "refresh",
          "package": "webdriver",
          "signature": "wd ()",
          "source": "src/Test-WebDriver-Commands.html#refresh",
          "type": "function"
        },
        "index": {
          "description": "Refresh the current page",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "refresh",
          "normalized": "a()",
          "package": "webdriver",
          "signature": "wd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:refresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends keystrokes to Javascript prompt() dialog.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "replyToAlert",
          "package": "webdriver",
          "signature": "Text -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#replyToAlert",
          "type": "function"
        },
        "index": {
          "description": "Sends keystrokes to Javascript prompt dialog",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "replyToAlert",
          "normalized": "Text-\u003ea()",
          "package": "webdriver",
          "partial": "To Alert",
          "signature": "Text-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:replyToAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a screenshot of the current page as a PNG image\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "screenshot",
          "package": "webdriver",
          "signature": "wd ByteString",
          "source": "src/Test-WebDriver-Commands.html#screenshot",
          "type": "function"
        },
        "index": {
          "description": "Grab screenshot of the current page as PNG image",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "screenshot",
          "package": "webdriver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:screenshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a screenshot as a base-64 encoded PNG image. This is the protocol-defined format.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "screenshotBase64",
          "package": "webdriver",
          "signature": "wd ByteString",
          "source": "src/Test-WebDriver-Commands.html#screenshotBase64",
          "type": "function"
        },
        "index": {
          "description": "Grab screenshot as base-64 encoded PNG image This is the protocol-defined format",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "screenshotBase64",
          "package": "webdriver",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:screenshotBase64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a sequence of keystrokes to an element. All modifier keys are released\n at the end of the function. For more information about modifier keys, see\n \u003ca\u003ehttp://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/value\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "sendKeys",
          "package": "webdriver",
          "signature": "Text -\u003e Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#sendKeys",
          "type": "function"
        },
        "index": {
          "description": "Send sequence of keystrokes to an element All modifier keys are released at the end of the function For more information about modifier keys see http code.google.com selenium wiki JsonWireProtocol session sessionId element id value",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "sendKeys",
          "normalized": "Text-\u003eElement-\u003ea()",
          "package": "webdriver",
          "partial": "Keys",
          "signature": "Text-\u003eElement-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:sendKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to sendKeys, but doesn't implicitly release modifier keys\n afterwards. This allows you to combine modifiers with mouse clicks.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "sendRawKeys",
          "package": "webdriver",
          "signature": "Text -\u003e Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#sendRawKeys",
          "type": "function"
        },
        "index": {
          "description": "Similar to sendKeys but doesn implicitly release modifier keys afterwards This allows you to combine modifiers with mouse clicks",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "sendRawKeys",
          "normalized": "Text-\u003eElement-\u003ea()",
          "package": "webdriver",
          "partial": "Raw Keys",
          "signature": "Text-\u003eElement-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:sendRawKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information from the server as a JSON \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e. For more information\n about this object see\n \u003ca\u003ehttp://code.google.com/p/selenium/wiki/JsonWireProtocol#/status\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "serverStatus",
          "package": "webdriver",
          "signature": "wd Value",
          "source": "src/Test-WebDriver-Commands.html#serverStatus",
          "type": "function"
        },
        "index": {
          "description": "Get information from the server as JSON Object For more information about this object see http code.google.com selenium wiki JsonWireProtocol status",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "serverStatus",
          "package": "webdriver",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:serverStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of active sessions and their \u003ccode\u003e\u003ca\u003eCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "sessions",
          "package": "webdriver",
          "signature": "wd [(SessionId, Capabilities)]",
          "source": "src/Test-WebDriver-Commands.html#sessions",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of active sessions and their Capabilities",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "sessions",
          "normalized": "a[(SessionId,Capabilities)]",
          "package": "webdriver",
          "signature": "wd[(SessionId,Capabilities)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:sessions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a cookie. If the cookie path is not specified, it will default to \"/\".\n Likewise, if the domain is omitted, it will default to the current page's\n domain\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setCookie",
          "package": "webdriver",
          "signature": "Cookie -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setCookie",
          "type": "function"
        },
        "index": {
          "description": "Set cookie If the cookie path is not specified it will default to Likewise if the domain is omitted it will default to the current page domain",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setCookie",
          "normalized": "Cookie-\u003ea()",
          "package": "webdriver",
          "partial": "Cookie",
          "signature": "Cookie-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the amount of time we implicitly wait when searching for elements.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setImplicitWait",
          "package": "webdriver",
          "signature": "Integer -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setImplicitWait",
          "type": "function"
        },
        "index": {
          "description": "Sets the amount of time we implicitly wait when searching for elements",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setImplicitWait",
          "normalized": "Integer-\u003ea()",
          "package": "webdriver",
          "partial": "Implicit Wait",
          "signature": "Integer-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setImplicitWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a key in the given web storage area.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setKey",
          "package": "webdriver",
          "signature": "WebStorageType -\u003e Text -\u003e Text -\u003e wd Text",
          "source": "src/Test-WebDriver-Commands.html#setKey",
          "type": "function"
        },
        "index": {
          "description": "Set key in the given web storage area",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setKey",
          "normalized": "WebStorageType-\u003eText-\u003eText-\u003ea Text",
          "package": "webdriver",
          "partial": "Key",
          "signature": "WebStorageType-\u003eText-\u003eText-\u003ewd Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current geographical location of the device.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setLocation",
          "package": "webdriver",
          "signature": "(Int, Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setLocation",
          "type": "function"
        },
        "index": {
          "description": "Set the current geographical location of the device",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setLocation",
          "normalized": "(Int,Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Location",
          "signature": "(Int,Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current screen orientation for rotatable display devices.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setOrientation",
          "package": "webdriver",
          "signature": "Orientation -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setOrientation",
          "type": "function"
        },
        "index": {
          "description": "Set the current screen orientation for rotatable display devices",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setOrientation",
          "normalized": "Orientation-\u003ea()",
          "package": "webdriver",
          "partial": "Orientation",
          "signature": "Orientation-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the amount of time to wait for a page to finish loading before throwing a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e exception\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setPageLoadTimeout",
          "package": "webdriver",
          "signature": "Integer -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setPageLoadTimeout",
          "type": "function"
        },
        "index": {
          "description": "Sets the amount of time to wait for page to finish loading before throwing Timeout exception",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setPageLoadTimeout",
          "normalized": "Integer-\u003ea()",
          "package": "webdriver",
          "partial": "Page Load Timeout",
          "signature": "Integer-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setPageLoadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the amount of time we wait for an asynchronous script to return a\n result.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setScriptTimeout",
          "package": "webdriver",
          "signature": "Integer -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setScriptTimeout",
          "type": "function"
        },
        "index": {
          "description": "Sets the amount of time we wait for an asynchronous script to return result",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setScriptTimeout",
          "normalized": "Integer-\u003ea()",
          "package": "webdriver",
          "partial": "Script Timeout",
          "signature": "Integer-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setScriptTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the coordinates of the current window.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setWindowPos",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setWindowPos",
          "type": "function"
        },
        "index": {
          "description": "Set the coordinates of the current window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setWindowPos",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Window Pos",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setWindowPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the dimensions of the current window.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "setWindowSize",
          "package": "webdriver",
          "signature": "(Word, Word) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#setWindowSize",
          "type": "function"
        },
        "index": {
          "description": "Set the dimensions of the current window",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "setWindowSize",
          "normalized": "(Word,Word)-\u003ea()",
          "package": "webdriver",
          "partial": "Window Size",
          "signature": "(Word,Word)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:setWindowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current number of keys in a web storage area.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "storageSize",
          "package": "webdriver",
          "signature": "WebStorageType -\u003e wd Integer",
          "source": "src/Test-WebDriver-Commands.html#storageSize",
          "type": "function"
        },
        "index": {
          "description": "Get the current number of keys in web storage area",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "storageSize",
          "normalized": "WebStorageType-\u003ea Integer",
          "package": "webdriver",
          "partial": "Size",
          "signature": "WebStorageType-\u003ewd Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:storageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmit a form element. This may be applied to descendents of a form element\n as well.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "submit",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#submit",
          "type": "function"
        },
        "index": {
          "description": "Submit form element This may be applied to descendents of form element as well",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "submit",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:submit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the tag name of the given element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "tagName",
          "package": "webdriver",
          "signature": "Element -\u003e wd Text",
          "source": "src/Test-WebDriver-Commands.html#tagName",
          "type": "function"
        },
        "index": {
          "description": "Return the tag name of the given element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "tagName",
          "normalized": "Element-\u003ea Text",
          "package": "webdriver",
          "partial": "Name",
          "signature": "Element-\u003ewd Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle tap on the touch screen at the given element's location.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchClick",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchClick",
          "type": "function"
        },
        "index": {
          "description": "Single tap on the touch screen at the given element location",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchClick",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "partial": "Click",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate a double click on a touch device.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchDoubleClick",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchDoubleClick",
          "type": "function"
        },
        "index": {
          "description": "Emulate double click on touch device",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchDoubleClick",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "partial": "Double Click",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchDoubleClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulates pressing a finger down on the screen at the given location.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchDown",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchDown",
          "type": "function"
        },
        "index": {
          "description": "Emulates pressing finger down on the screen at the given location",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchDown",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Down",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate a flick on the touch screen. The coordinates indicate x and y\n velocity, respectively. Use this function if you don't care where the\n flick starts.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchFlick",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchFlick",
          "type": "function"
        },
        "index": {
          "description": "Emulate flick on the touch screen The coordinates indicate and velocity respectively Use this function if you don care where the flick starts",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchFlick",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Flick",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchFlick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate a flick on the touch screen.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchFlickFrom",
          "package": "webdriver",
          "signature": "Int-\u003e (Int, Int)-\u003e Element-\u003e wd ()",
          "type": "function"
        },
        "index": {
          "description": "Emulate flick on the touch screen",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchFlickFrom",
          "normalized": "Int-\u003e(Int,Int)-\u003eElement-\u003ea()",
          "package": "webdriver",
          "partial": "Flick From",
          "signature": "Int-\u003e(Int,Int)-\u003eElement-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchFlickFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate a long click on a touch device.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchLongClick",
          "package": "webdriver",
          "signature": "Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchLongClick",
          "type": "function"
        },
        "index": {
          "description": "Emulate long click on touch device",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchLongClick",
          "normalized": "Element-\u003ea()",
          "package": "webdriver",
          "partial": "Long Click",
          "signature": "Element-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchLongClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulates moving a finger on the screen to the given location.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchMove",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchMove",
          "type": "function"
        },
        "index": {
          "description": "Emulates moving finger on the screen to the given location",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchMove",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Move",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate finger-based touch scroll. Use this function if you don't care where\n the scroll begins\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchScroll",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchScroll",
          "type": "function"
        },
        "index": {
          "description": "Emulate finger-based touch scroll Use this function if you don care where the scroll begins",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchScroll",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Scroll",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulate finger-based touch scroll, starting from the given location relative\n to the given element.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchScrollFrom",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e Element -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchScrollFrom",
          "type": "function"
        },
        "index": {
          "description": "Emulate finger-based touch scroll starting from the given location relative to the given element",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchScrollFrom",
          "normalized": "(Int,Int)-\u003eElement-\u003ea()",
          "package": "webdriver",
          "partial": "Scroll From",
          "signature": "(Int,Int)-\u003eElement-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchScrollFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmulates removing a finger from the screen at the given location.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "touchUp",
          "package": "webdriver",
          "signature": "(Int, Int) -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#touchUp",
          "type": "function"
        },
        "index": {
          "description": "Emulates removing finger from the screen at the given location",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "touchUp",
          "normalized": "(Int,Int)-\u003ea()",
          "package": "webdriver",
          "partial": "Up",
          "signature": "(Int,Int)-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:touchUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUploads a file from the local filesystem by its file path.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "uploadFile",
          "package": "webdriver",
          "signature": "FilePath -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#uploadFile",
          "type": "function"
        },
        "index": {
          "description": "Uploads file from the local filesystem by its file path",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "uploadFile",
          "normalized": "FilePath-\u003ea()",
          "package": "webdriver",
          "partial": "File",
          "signature": "FilePath-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:uploadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUploads a raw bytestring with associated file info.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "uploadRawFile",
          "package": "webdriver",
          "signature": "FilePath-\u003e Integer-\u003e ByteString-\u003e wd ()",
          "type": "function"
        },
        "index": {
          "description": "Uploads raw bytestring with associated file info",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "uploadRawFile",
          "normalized": "FilePath-\u003eInteger-\u003eByteString-\u003ea()",
          "package": "webdriver",
          "partial": "Raw File",
          "signature": "FilePath-\u003eInteger-\u003eByteString-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:uploadRawFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowest level interface to the file uploading mechanism.\n This allows you to specify the exact details of\n the zip entry sent across network.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "uploadZipEntry",
          "package": "webdriver",
          "signature": "Entry -\u003e wd ()",
          "source": "src/Test-WebDriver-Commands.html#uploadZipEntry",
          "type": "function"
        },
        "index": {
          "description": "Lowest level interface to the file uploading mechanism This allows you to specify the exact details of the zip entry sent across network",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "uploadZipEntry",
          "normalized": "Entry-\u003ea()",
          "package": "webdriver",
          "partial": "Zip Entry",
          "signature": "Entry-\u003ewd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:uploadZipEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all windows available to the session\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "windows",
          "package": "webdriver",
          "signature": "wd [WindowHandle]",
          "source": "src/Test-WebDriver-Commands.html#windows",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all windows available to the session",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "windows",
          "normalized": "a[WindowHandle]",
          "package": "webdriver",
          "signature": "wd[WindowHandle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:windows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the given action with the left mouse button held down. The mouse\n is automatically released afterwards.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Commands",
          "name": "withMouseDown",
          "package": "webdriver",
          "signature": "wd a -\u003e wd a",
          "source": "src/Test-WebDriver-Commands.html#withMouseDown",
          "type": "function"
        },
        "index": {
          "description": "Perform the given action with the left mouse button held down The mouse is automatically released afterwards",
          "hierarchy": "Test WebDriver Commands",
          "module": "Test.WebDriver.Commands",
          "name": "withMouseDown",
          "normalized": "a b-\u003ea b",
          "package": "webdriver",
          "partial": "Mouse Down",
          "signature": "wd a-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Commands.html#v:withMouseDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type for profile preferences. These preference values are used by both\n Firefox and Opera profiles.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver.Common.Profile",
          "name": "Profile",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html",
          "type": "module"
        },
        "index": {
          "description": "type for profile preferences These preference values are used by both Firefox and Opera profiles",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "Profile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a profile that has been prepared for\n network transmission. The profile cannot be modified in this form.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PreparedProfile",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#PreparedProfile",
          "type": "newtype"
        },
        "index": {
          "description": "Represents profile that has been prepared for network transmission The profile cannot be modified in this form",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PreparedProfile",
          "package": "webdriver",
          "partial": "Prepared Profile",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#t:PreparedProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis structure allows you to construct and manipulate profiles in pure code,\n deferring execution of IO operations until the profile is \"prepared\". This\n type is shared by both Firefox and Opera profiles; when a distinction\n must be made, the phantom type parameter is used to differentiate.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Common.Profile",
          "name": "Profile",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#Profile",
          "type": "data"
        },
        "index": {
          "description": "This structure allows you to construct and manipulate profiles in pure code deferring execution of IO operations until the profile is prepared This type is shared by both Firefox and Opera profiles when distinction must be made the phantom type parameter is used to differentiate",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "Profile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occured while attempting to parse a profile's preference file.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ProfileParseError",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfileParseError",
          "type": "newtype"
        },
        "index": {
          "description": "An error occured while attempting to parse profile preference file",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ProfileParseError",
          "package": "webdriver",
          "partial": "Profile Parse Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#t:ProfileParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA profile preference value. This is the subset of JSON values that excludes\n arrays, objects, and null.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ProfilePref",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfilePref",
          "type": "data"
        },
        "index": {
          "description": "profile preference value This is the subset of JSON values that excludes arrays objects and null",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ProfilePref",
          "package": "webdriver",
          "partial": "Profile Pref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#t:ProfilePref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass to convert types to profile preference values\n\u003c/p\u003e",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ToPref",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#ToPref",
          "type": "class"
        },
        "index": {
          "description": "typeclass to convert types to profile preference values",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ToPref",
          "package": "webdriver",
          "partial": "To Pref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#t:ToPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "PrefBool",
          "package": "webdriver",
          "signature": "PrefBool !Bool",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfilePref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefBool\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:PrefBool\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PrefBool",
          "package": "webdriver",
          "partial": "Pref Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "PrefDouble",
          "package": "webdriver",
          "signature": "PrefDouble !Double",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfilePref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefDouble\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:PrefDouble\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PrefDouble",
          "package": "webdriver",
          "partial": "Pref Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "PrefInteger",
          "package": "webdriver",
          "signature": "PrefInteger !Integer",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfilePref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefInteger\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:PrefInteger\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PrefInteger",
          "package": "webdriver",
          "partial": "Pref Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "PrefString",
          "package": "webdriver",
          "signature": "PrefString !Text",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfilePref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefString\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:PrefString\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PrefString",
          "package": "webdriver",
          "partial": "Pref String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PrefString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Common.Profile",
          "name": "PreparedProfile",
          "package": "webdriver",
          "signature": "PreparedProfile ByteString",
          "source": "src/Test-WebDriver-Common-Profile.html#PreparedProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "PreparedProfile",
          "package": "webdriver",
          "partial": "Prepared Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:PreparedProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "Profile",
          "package": "webdriver",
          "signature": "Profile",
          "source": "src/Test-WebDriver-Common-Profile.html#Profile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:Profile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:Profile\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "Profile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "ProfileParseError",
          "package": "webdriver",
          "signature": "ProfileParseError String",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfileParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:ProfileParseError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:ProfileParseError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "ProfileParseError",
          "package": "webdriver",
          "partial": "Profile Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:ProfileParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new extension to the profile. The file path should refer to\n a .xpi file or an extension directory on the filesystem.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "addExtension",
          "package": "webdriver",
          "signature": "FilePath -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#addExtension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:addExtension\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:addExtension\"]"
        },
        "index": {
          "description": "Add new extension to the profile The file path should refer to xpi file or an extension directory on the filesystem",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "addExtension",
          "normalized": "FilePath-\u003eProfile a-\u003eProfile a",
          "package": "webdriver",
          "partial": "Extension",
          "signature": "FilePath-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:addExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a file to the profile directory. The first argument is the source\n of the file on the local filesystem. The second argument is the destination\n as a path relative to a profile directory. Overwrites any file that\n previously pointed to the same destination\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "addFile",
          "package": "webdriver",
          "signature": "FilePath -\u003e FilePath -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#addFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:addFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:addFile\"]"
        },
        "index": {
          "description": "Add file to the profile directory The first argument is the source of the file on the local filesystem The second argument is the destination as path relative to profile directory Overwrites any file that previously pointed to the same destination",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "addFile",
          "normalized": "FilePath-\u003eFilePath-\u003eProfile a-\u003eProfile a",
          "package": "webdriver",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:addFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new preference entry to a profile, overwriting any existing entry\n with the same key.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "addPref",
          "package": "webdriver",
          "signature": "Text -\u003e a -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#addPref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:addPref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:addPref\"]"
        },
        "index": {
          "description": "Add new preference entry to profile overwriting any existing entry with the same key",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "addPref",
          "normalized": "Text-\u003ea-\u003eProfile b-\u003eProfile b",
          "package": "webdriver",
          "partial": "Pref",
          "signature": "Text-\u003ea-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:addPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an existing extension from the profile. The string parameter\n should refer to an .xpi file or directory located within the extensions\n directory of the profile. This operation has no effect if the extension was\n never added to the profile.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "deleteExtension",
          "package": "webdriver",
          "signature": "String -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#deleteExtension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:deleteExtension\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:deleteExtension\"]"
        },
        "index": {
          "description": "Delete an existing extension from the profile The string parameter should refer to an xpi file or directory located within the extensions directory of the profile This operation has no effect if the extension was never added to the profile",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "deleteExtension",
          "normalized": "String-\u003eProfile a-\u003eProfile a",
          "package": "webdriver",
          "partial": "Extension",
          "signature": "String-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:deleteExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a file from the profile directory. The first argument is the name of\n file within the profile directory.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "deleteFile",
          "package": "webdriver",
          "signature": "FilePath -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#deleteFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:deleteFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:deleteFile\"]"
        },
        "index": {
          "description": "Delete file from the profile directory The first argument is the name of file within the profile directory",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "deleteFile",
          "normalized": "FilePath-\u003eProfile a-\u003eProfile a",
          "package": "webdriver",
          "partial": "File",
          "signature": "FilePath-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an existing preference entry from a profile. This operation is\n silent if the preference wasn't found.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "deletePref",
          "package": "webdriver",
          "signature": "Text -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#deletePref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:deletePref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:deletePref\"]"
        },
        "index": {
          "description": "Delete an existing preference entry from profile This operation is silent if the preference wasn found",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "deletePref",
          "normalized": "Text-\u003eProfile a-\u003eProfile a",
          "package": "webdriver",
          "partial": "Pref",
          "signature": "Text-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:deletePref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a preference from a profile by key name.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "getPref",
          "package": "webdriver",
          "signature": "Text -\u003e Profile b -\u003e Maybe ProfilePref",
          "source": "src/Test-WebDriver-Common-Profile.html#getPref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:getPref\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:getPref\"]"
        },
        "index": {
          "description": "Retrieve preference from profile by key name",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "getPref",
          "normalized": "Text-\u003eProfile a-\u003eMaybe ProfilePref",
          "package": "webdriver",
          "partial": "Pref",
          "signature": "Text-\u003eProfile b-\u003eMaybe ProfilePref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:getPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if a profile contains the given extension. specified as an\n .xpi file or directory name\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "hasExtension",
          "package": "webdriver",
          "signature": "String -\u003e Profile b -\u003e Bool",
          "source": "src/Test-WebDriver-Common-Profile.html#hasExtension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:hasExtension\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:hasExtension\"]"
        },
        "index": {
          "description": "Determines if profile contains the given extension specified as an xpi file or directory name",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "hasExtension",
          "normalized": "String-\u003eProfile a-\u003eBool",
          "package": "webdriver",
          "partial": "Extension",
          "signature": "String-\u003eProfile b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:hasExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if a profile contains the given file, specified as a path\n relative to the profile directory.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "hasFile",
          "package": "webdriver",
          "signature": "String -\u003e Profile b -\u003e Bool",
          "source": "src/Test-WebDriver-Common-Profile.html#hasFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:hasFile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:hasFile\"]"
        },
        "index": {
          "description": "Determines if profile contains the given file specified as path relative to the profile directory",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "hasFile",
          "normalized": "String-\u003eProfile a-\u003eBool",
          "package": "webdriver",
          "partial": "File",
          "signature": "String-\u003eProfile b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:hasFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003e\u003ca\u003eprofileFiles\u003c/a\u003e\u003c/code\u003e field of a profile\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "onProfileFiles",
          "package": "webdriver",
          "signature": "Profile b -\u003e (HashMap FilePath FilePath -\u003e HashMap FilePath FilePath) -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#onProfileFiles",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:onProfileFiles\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:onProfileFiles\"]"
        },
        "index": {
          "description": "Modifies the profileFiles field of profile",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "onProfileFiles",
          "normalized": "Profile a-\u003e(HashMap FilePath FilePath-\u003eHashMap FilePath FilePath)-\u003eProfile a",
          "package": "webdriver",
          "partial": "Profile Files",
          "signature": "Profile b-\u003e(HashMap FilePath FilePath-\u003eHashMap FilePath FilePath)-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:onProfileFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003e\u003ca\u003eprofilePrefs\u003c/a\u003e\u003c/code\u003e field of a profile.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "onProfilePrefs",
          "package": "webdriver",
          "signature": "Profile b -\u003e (HashMap Text ProfilePref -\u003e HashMap Text ProfilePref) -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#onProfilePrefs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:onProfilePrefs\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:onProfilePrefs\"]"
        },
        "index": {
          "description": "Modifies the profilePrefs field of profile",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "onProfilePrefs",
          "normalized": "Profile a-\u003e(HashMap Text ProfilePref-\u003eHashMap Text ProfilePref)-\u003eProfile a",
          "package": "webdriver",
          "partial": "Profile Prefs",
          "signature": "Profile b-\u003e(HashMap Text ProfilePref-\u003eHashMap Text ProfilePref)-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:onProfilePrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently load an existing profile from disk and prepare it for network\n transmission.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "prepareLoadedProfile_",
          "package": "webdriver",
          "signature": "FilePath -\u003e m (PreparedProfile a)",
          "source": "src/Test-WebDriver-Common-Profile.html#prepareLoadedProfile_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareLoadedProfile_\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareLoadedProfile_\"]"
        },
        "index": {
          "description": "Efficiently load an existing profile from disk and prepare it for network transmission",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "prepareLoadedProfile_",
          "normalized": "FilePath-\u003ea(PreparedProfile b)",
          "package": "webdriver",
          "partial": "Loaded Profile",
          "signature": "FilePath-\u003em(PreparedProfile a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareLoadedProfile_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a ByteString of raw zip data for network transmission\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "prepareRawZip",
          "package": "webdriver",
          "signature": "ByteString -\u003e PreparedProfile a",
          "source": "src/Test-WebDriver-Common-Profile.html#prepareRawZip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareRawZip\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareRawZip\"]"
        },
        "index": {
          "description": "Prepare ByteString of raw zip data for network transmission",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "prepareRawZip",
          "normalized": "ByteString-\u003ePreparedProfile a",
          "package": "webdriver",
          "partial": "Raw Zip",
          "signature": "ByteString-\u003ePreparedProfile a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareRawZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a zip archive of a profile for network transmission.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "prepareZipArchive",
          "package": "webdriver",
          "signature": "Archive -\u003e PreparedProfile a",
          "source": "src/Test-WebDriver-Common-Profile.html#prepareZipArchive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareZipArchive\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareZipArchive\"]"
        },
        "index": {
          "description": "Prepare zip archive of profile for network transmission",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "prepareZipArchive",
          "normalized": "Archive-\u003ePreparedProfile a",
          "package": "webdriver",
          "partial": "Zip Archive",
          "signature": "Archive-\u003ePreparedProfile a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareZipArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a zip file of a profile on disk for network transmission.\n This function is very efficient at loading large profiles from disk.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "prepareZippedProfile",
          "package": "webdriver",
          "signature": "FilePath -\u003e m (PreparedProfile a)",
          "source": "src/Test-WebDriver-Common-Profile.html#prepareZippedProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareZippedProfile\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareZippedProfile\"]"
        },
        "index": {
          "description": "Prepare zip file of profile on disk for network transmission This function is very efficient at loading large profiles from disk",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "prepareZippedProfile",
          "normalized": "FilePath-\u003ea(PreparedProfile b)",
          "package": "webdriver",
          "partial": "Zipped Profile",
          "signature": "FilePath-\u003em(PreparedProfile a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:prepareZippedProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from relative destination filepaths to source\n filepaths found on the filesystem. When the profile is\n prepared, these source filepaths will be moved to their\n destinations within the profile directory.\n\u003c/p\u003e\u003cp\u003eUsing the destination path as the key ensures that\n there is one unique source path going to each\n destination path.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "profileFiles",
          "package": "webdriver",
          "signature": "HashMap FilePath FilePath",
          "source": "src/Test-WebDriver-Common-Profile.html#Profile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:profileFiles\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:profileFiles\"]"
        },
        "index": {
          "description": "mapping from relative destination filepaths to source filepaths found on the filesystem When the profile is prepared these source filepaths will be moved to their destinations within the profile directory Using the destination path as the key ensures that there is one unique source path going to each destination path",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "profileFiles",
          "package": "webdriver",
          "partial": "Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:profileFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of profile preferences. These are the settings\n found in the profile's prefs.js, and entries found in\n about:config\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "profilePrefs",
          "package": "webdriver",
          "signature": "HashMap Text ProfilePref",
          "source": "src/Test-WebDriver-Common-Profile.html#Profile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:profilePrefs\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:profilePrefs\"]"
        },
        "index": {
          "description": "map of profile preferences These are the settings found in the profile prefs.js and entries found in about config",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "profilePrefs",
          "package": "webdriver",
          "partial": "Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:profilePrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Common.Profile",
          "name": "toPref",
          "package": "webdriver",
          "signature": "a -\u003e ProfilePref",
          "source": "src/Test-WebDriver-Common-Profile.html#toPref",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "toPref",
          "normalized": "a-\u003eProfilePref",
          "package": "webdriver",
          "partial": "Pref",
          "signature": "a-\u003eProfilePref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:toPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the union of two profiles. This is the union of their \u003ccode\u003eHashMap\u003c/code\u003e\n fields.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Common.Profile\",\"Test.WebDriver.Firefox.Profile\"]",
          "name": "unionProfiles",
          "package": "webdriver",
          "signature": "Profile b -\u003e Profile b -\u003e Profile b",
          "source": "src/Test-WebDriver-Common-Profile.html#unionProfiles",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:unionProfiles\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:unionProfiles\"]"
        },
        "index": {
          "description": "Takes the union of two profiles This is the union of their HashMap fields",
          "hierarchy": "Test WebDriver Common Profile",
          "module": "Test.WebDriver.Common.Profile",
          "name": "unionProfiles",
          "normalized": "Profile a-\u003eProfile a-\u003eProfile a",
          "package": "webdriver",
          "partial": "Profiles",
          "signature": "Profile b-\u003eProfile b-\u003eProfile b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Common-Profile.html#v:unionProfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Exceptions",
          "name": "Exceptions",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Exceptions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "Exceptions",
          "package": "webdriver",
          "partial": "Exceptions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occured when parsing a JSON value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "BadJSON",
          "package": "webdriver",
          "source": "src/Test-WebDriver-JSON.html#BadJSON",
          "type": "newtype"
        },
        "index": {
          "description": "An error occured when parsing JSON value",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "BadJSON",
          "package": "webdriver",
          "partial": "Bad JSON",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:BadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception encapsulates a broad variety of exceptions that can\n occur when a command fails.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommand",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#FailedCommand",
          "type": "data"
        },
        "index": {
          "description": "This exception encapsulates broad variety of exceptions that can occur when command fails",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommand",
          "package": "webdriver",
          "partial": "Failed Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:FailedCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about the failed command provided by the server.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommandInfo",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about the failed command provided by the server",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommandInfo",
          "package": "webdriver",
          "partial": "Failed Command Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:FailedCommandInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of failed command exception that occured.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommandType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "data"
        },
        "index": {
          "description": "The type of failed command exception that occured",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommandType",
          "package": "webdriver",
          "partial": "Failed Command Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:FailedCommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP connection errors.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "HTTPConnError",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#HTTPConnError",
          "type": "newtype"
        },
        "index": {
          "description": "HTTP connection errors",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "HTTPConnError",
          "package": "webdriver",
          "partial": "HTTPConn Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:HTTPConnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unexpected HTTP status was sent by the server.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "HTTPStatusUnknown",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#HTTPStatusUnknown",
          "type": "data"
        },
        "index": {
          "description": "An unexpected HTTP status was sent by the server",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "HTTPStatusUnknown",
          "package": "webdriver",
          "partial": "HTTPStatus Unknown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:HTTPStatusUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn invalid URL was given\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidURL",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#InvalidURL",
          "type": "newtype"
        },
        "index": {
          "description": "An invalid URL was given",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidURL",
          "package": "webdriver",
          "partial": "Invalid URL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:InvalidURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command requiring a session ID was attempted when no session ID was\n available.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "NoSessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#NoSessionId",
          "type": "newtype"
        },
        "index": {
          "description": "command requiring session ID was attempted when no session ID was available",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "NoSessionId",
          "package": "webdriver",
          "partial": "No Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:NoSessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA server-side exception occured\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "ServerError",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#ServerError",
          "type": "newtype"
        },
        "index": {
          "description": "server-side exception occured",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "ServerError",
          "package": "webdriver",
          "partial": "Server Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn individual stack frame from the stack trace provided by the server\n during a FailedCommand.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "StackFrame",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "data"
        },
        "index": {
          "description": "An individual stack frame from the stack trace provided by the server during FailedCommand",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "StackFrame",
          "package": "webdriver",
          "partial": "Stack Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:StackFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command was sent to the WebDriver server that it didn't recognize.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnknownCommand",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#UnknownCommand",
          "type": "newtype"
        },
        "index": {
          "description": "command was sent to the WebDriver server that it didn recognize",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnknownCommand",
          "package": "webdriver",
          "partial": "Unknown Command",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#t:UnknownCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.JSON\",\"Test.WebDriver.Types\"]",
          "name": "BadJSON",
          "package": "webdriver",
          "signature": "BadJSON String",
          "source": "src/Test-WebDriver-JSON.html#BadJSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:BadJSON\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:BadJSON\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:BadJSON\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "BadJSON",
          "package": "webdriver",
          "partial": "Bad JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:BadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "ElementIsNotSelectable",
          "package": "webdriver",
          "signature": "ElementIsNotSelectable",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ElementIsNotSelectable\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ElementIsNotSelectable\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "ElementIsNotSelectable",
          "package": "webdriver",
          "partial": "Element Is Not Selectable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ElementIsNotSelectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "ElementNotVisible",
          "package": "webdriver",
          "signature": "ElementNotVisible",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ElementNotVisible\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ElementNotVisible\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "ElementNotVisible",
          "package": "webdriver",
          "partial": "Element Not Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ElementNotVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "FailedCommand",
          "package": "webdriver",
          "signature": "FailedCommand FailedCommandType FailedCommandInfo",
          "source": "src/Test-WebDriver-Internal.html#FailedCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:FailedCommand\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:FailedCommand\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommand",
          "package": "webdriver",
          "partial": "Failed Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:FailedCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "FailedCommandInfo",
          "package": "webdriver",
          "signature": "FailedCommandInfo",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:FailedCommandInfo\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:FailedCommandInfo\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "FailedCommandInfo",
          "package": "webdriver",
          "partial": "Failed Command Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:FailedCommandInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "HTTPConnError",
          "package": "webdriver",
          "signature": "HTTPConnError ConnError",
          "source": "src/Test-WebDriver-Internal.html#HTTPConnError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:HTTPConnError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:HTTPConnError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "HTTPConnError",
          "package": "webdriver",
          "partial": "HTTPConn Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:HTTPConnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "HTTPStatusUnknown",
          "package": "webdriver",
          "signature": "HTTPStatusUnknown (Int, Int, Int) String",
          "source": "src/Test-WebDriver-Internal.html#HTTPStatusUnknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:HTTPStatusUnknown\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:HTTPStatusUnknown\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "HTTPStatusUnknown",
          "normalized": "HTTPStatusUnknown(Int,Int,Int)String",
          "package": "webdriver",
          "partial": "HTTPStatus Unknown",
          "signature": "HTTPStatusUnknown(Int,Int,Int)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:HTTPStatusUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "IMEEngineActivationFailed",
          "package": "webdriver",
          "signature": "IMEEngineActivationFailed",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:IMEEngineActivationFailed\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IMEEngineActivationFailed\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "IMEEngineActivationFailed",
          "package": "webdriver",
          "partial": "IMEEngine Activation Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:IMEEngineActivationFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "IMENotAvailable",
          "package": "webdriver",
          "signature": "IMENotAvailable",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:IMENotAvailable\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:IMENotAvailable\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "IMENotAvailable",
          "package": "webdriver",
          "partial": "IMENot Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:IMENotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidCookieDomain",
          "package": "webdriver",
          "signature": "InvalidCookieDomain",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidCookieDomain\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidCookieDomain\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidCookieDomain",
          "package": "webdriver",
          "partial": "Invalid Cookie Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidCookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidElementCoordinates",
          "package": "webdriver",
          "signature": "InvalidElementCoordinates",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidElementCoordinates\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidElementCoordinates\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidElementCoordinates",
          "package": "webdriver",
          "partial": "Invalid Element Coordinates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidElementCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidElementState",
          "package": "webdriver",
          "signature": "InvalidElementState",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidElementState\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidElementState\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidElementState",
          "package": "webdriver",
          "partial": "Invalid Element State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidElementState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidSelector",
          "package": "webdriver",
          "signature": "InvalidSelector",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidSelector\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidSelector\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidSelector",
          "package": "webdriver",
          "partial": "Invalid Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidURL",
          "package": "webdriver",
          "signature": "InvalidURL String",
          "source": "src/Test-WebDriver-Internal.html#InvalidURL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidURL\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidURL\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidURL",
          "package": "webdriver",
          "partial": "Invalid URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidXPathSelector",
          "package": "webdriver",
          "signature": "InvalidXPathSelector",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidXPathSelector\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidXPathSelector\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidXPathSelector",
          "package": "webdriver",
          "partial": "Invalid XPath Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidXPathSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "InvalidXPathSelectorReturnType",
          "package": "webdriver",
          "signature": "InvalidXPathSelectorReturnType",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidXPathSelectorReturnType\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:InvalidXPathSelectorReturnType\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "InvalidXPathSelectorReturnType",
          "package": "webdriver",
          "partial": "Invalid XPath Selector Return Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:InvalidXPathSelectorReturnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "JavascriptError",
          "package": "webdriver",
          "signature": "JavascriptError",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:JavascriptError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:JavascriptError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "JavascriptError",
          "package": "webdriver",
          "partial": "Javascript Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:JavascriptError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "MethodNotAllowed",
          "package": "webdriver",
          "signature": "MethodNotAllowed",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:MethodNotAllowed\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:MethodNotAllowed\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "MethodNotAllowed",
          "package": "webdriver",
          "partial": "Method Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:MethodNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "MoveTargetOutOfBounds",
          "package": "webdriver",
          "signature": "MoveTargetOutOfBounds",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:MoveTargetOutOfBounds\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:MoveTargetOutOfBounds\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "MoveTargetOutOfBounds",
          "package": "webdriver",
          "partial": "Move Target Out Of Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:MoveTargetOutOfBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "NoAlertOpen",
          "package": "webdriver",
          "signature": "NoAlertOpen",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoAlertOpen\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:NoAlertOpen\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "NoAlertOpen",
          "package": "webdriver",
          "partial": "No Alert Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoAlertOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "NoSuchElement",
          "package": "webdriver",
          "signature": "NoSuchElement",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSuchElement\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:NoSuchElement\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "NoSuchElement",
          "package": "webdriver",
          "partial": "No Such Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSuchElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "NoSuchFrame",
          "package": "webdriver",
          "signature": "NoSuchFrame",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSuchFrame\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:NoSuchFrame\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "NoSuchFrame",
          "package": "webdriver",
          "partial": "No Such Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSuchFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "NoSuchWindow",
          "package": "webdriver",
          "signature": "NoSuchWindow",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSuchWindow\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:NoSuchWindow\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "NoSuchWindow",
          "package": "webdriver",
          "partial": "No Such Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:NoSuchWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "ScriptTimeout",
          "package": "webdriver",
          "signature": "ScriptTimeout",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ScriptTimeout\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ScriptTimeout\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "ScriptTimeout",
          "package": "webdriver",
          "partial": "Script Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ScriptTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "ServerError",
          "package": "webdriver",
          "signature": "ServerError String",
          "source": "src/Test-WebDriver-Internal.html#ServerError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ServerError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:ServerError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "ServerError",
          "package": "webdriver",
          "partial": "Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "SessionNotCreated",
          "package": "webdriver",
          "signature": "SessionNotCreated",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:SessionNotCreated\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:SessionNotCreated\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "SessionNotCreated",
          "package": "webdriver",
          "partial": "Session Not Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:SessionNotCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "StackFrame",
          "package": "webdriver",
          "signature": "StackFrame",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:StackFrame\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:StackFrame\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "StackFrame",
          "package": "webdriver",
          "partial": "Stack Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:StackFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "StaleElementReference",
          "package": "webdriver",
          "signature": "StaleElementReference",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:StaleElementReference\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:StaleElementReference\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "StaleElementReference",
          "package": "webdriver",
          "partial": "Stale Element Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:StaleElementReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "Timeout",
          "package": "webdriver",
          "signature": "Timeout",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:Timeout\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:Timeout\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "Timeout",
          "package": "webdriver",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "UnableToSetCookie",
          "package": "webdriver",
          "signature": "UnableToSetCookie",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnableToSetCookie\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UnableToSetCookie\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnableToSetCookie",
          "package": "webdriver",
          "partial": "Unable To Set Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnableToSetCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "UnexpectedAlertOpen",
          "package": "webdriver",
          "signature": "UnexpectedAlertOpen",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnexpectedAlertOpen\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UnexpectedAlertOpen\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnexpectedAlertOpen",
          "package": "webdriver",
          "partial": "Unexpected Alert Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnexpectedAlertOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "UnknownCommand",
          "package": "webdriver",
          "signature": "UnknownCommand String",
          "source": "src/Test-WebDriver-Internal.html#UnknownCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnknownCommand\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UnknownCommand\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnknownCommand",
          "package": "webdriver",
          "partial": "Unknown Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnknownCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "UnknownError",
          "package": "webdriver",
          "signature": "UnknownError",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnknownError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UnknownError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnknownError",
          "package": "webdriver",
          "partial": "Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "UnknownFrame",
          "package": "webdriver",
          "signature": "UnknownFrame",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnknownFrame\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:UnknownFrame\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "UnknownFrame",
          "package": "webdriver",
          "partial": "Unknown Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:UnknownFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "XPathLookupError",
          "package": "webdriver",
          "signature": "XPathLookupError",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:XPathLookupError\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:XPathLookupError\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "XPathLookupError",
          "package": "webdriver",
          "partial": "XPath Lookup Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:XPathLookupError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eclass\u003c/a\u003e in which the exception\n was raised, if provided.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "errClass",
          "package": "webdriver",
          "signature": "Maybe String",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errClass\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:errClass\"]"
        },
        "index": {
          "description": "The class in which the exception was raised if provided",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "errClass",
          "package": "webdriver",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error message.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "errMsg",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errMsg\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:errMsg\"]"
        },
        "index": {
          "description": "The error message",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "errMsg",
          "package": "webdriver",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA screen shot of the focused window\n when the exception occured,\n if provided.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "errScreen",
          "package": "webdriver",
          "signature": "Maybe ByteString",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errScreen\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:errScreen\"]"
        },
        "index": {
          "description": "screen shot of the focused window when the exception occured if provided",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "errScreen",
          "package": "webdriver",
          "partial": "Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe session associated with\n the exception.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "errSess",
          "package": "webdriver",
          "signature": "WDSession",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errSess\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:errSess\"]"
        },
        "index": {
          "description": "The session associated with the exception",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "errSess",
          "package": "webdriver",
          "partial": "Sess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errSess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stack trace of the exception.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "errStack",
          "package": "webdriver",
          "signature": "[StackFrame]",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errStack\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:errStack\"]"
        },
        "index": {
          "description": "stack trace of the exception",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "errStack",
          "normalized": "[StackFrame]",
          "package": "webdriver",
          "partial": "Stack",
          "signature": "[StackFrame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:errStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to throw a \u003ccode\u003e\u003ca\u003eFailedCommand\u003c/a\u003e\u003c/code\u003e locally with no server-side\n info present.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "failedCommand",
          "package": "webdriver",
          "signature": "FailedCommandType -\u003e String -\u003e s a",
          "source": "src/Test-WebDriver-Internal.html#failedCommand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:failedCommand\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:failedCommand\"]"
        },
        "index": {
          "description": "Convenience function to throw FailedCommand locally with no server-side info present",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "failedCommand",
          "normalized": "FailedCommandType-\u003eString-\u003ea b",
          "package": "webdriver",
          "partial": "Command",
          "signature": "FailedCommandType-\u003eString-\u003es a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:failedCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a FailedCommandInfo from only an error message.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "mkFailedCommandInfo",
          "package": "webdriver",
          "signature": "String -\u003e s FailedCommandInfo",
          "source": "src/Test-WebDriver-Internal.html#mkFailedCommandInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:mkFailedCommandInfo\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:mkFailedCommandInfo\"]"
        },
        "index": {
          "description": "Constructs FailedCommandInfo from only an error message",
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "mkFailedCommandInfo",
          "normalized": "String-\u003ea FailedCommandInfo",
          "package": "webdriver",
          "partial": "Failed Command Info",
          "signature": "String-\u003es FailedCommandInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:mkFailedCommandInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "sfClassName",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfClassName\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:sfClassName\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "sfClassName",
          "package": "webdriver",
          "partial": "Class Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfClassName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "sfFileName",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfFileName\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:sfFileName\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "sfFileName",
          "package": "webdriver",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "sfLineNumber",
          "package": "webdriver",
          "signature": "Word",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfLineNumber\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:sfLineNumber\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "sfLineNumber",
          "package": "webdriver",
          "partial": "Line Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfLineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Exceptions\",\"Test.WebDriver.Types\"]",
          "name": "sfMethodName",
          "package": "webdriver",
          "signature": "String",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfMethodName\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:sfMethodName\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Exceptions",
          "module": "Test.WebDriver.Exceptions",
          "name": "sfMethodName",
          "package": "webdriver",
          "partial": "Method Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Exceptions.html#v:sfMethodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for working with Firefox profiles. Firefox profiles are manipulated\n in pure code and then \"prepared\" for network transmission.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "Profile",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Firefox-Profile.html",
          "type": "module"
        },
        "index": {
          "description": "module for working with Firefox profiles Firefox profiles are manipulated in pure code and then prepared for network transmission",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "Profile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type used in the parameters of \u003ccode\u003e\u003ca\u003eProfile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePreparedProfile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "Firefox",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Firefox-Profile.html#Firefox",
          "type": "data"
        },
        "index": {
          "description": "Phantom type used in the parameters of Profile and PreparedProfile",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "Firefox",
          "package": "webdriver",
          "partial": "Firefox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#t:Firefox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a profile that has been prepared for\n network transmission. The profile cannot be modified in this form.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "PreparedProfile",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#PreparedProfile",
          "type": "data"
        },
        "index": {
          "description": "Represents profile that has been prepared for network transmission The profile cannot be modified in this form",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "PreparedProfile",
          "package": "webdriver",
          "partial": "Prepared Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#t:PreparedProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis structure allows you to construct and manipulate profiles in pure code,\n deferring execution of IO operations until the profile is \"prepared\". This\n type is shared by both Firefox and Opera profiles; when a distinction\n must be made, the phantom type parameter is used to differentiate.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "Profile",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#Profile",
          "type": "data"
        },
        "index": {
          "description": "This structure allows you to construct and manipulate profiles in pure code deferring execution of IO operations until the profile is prepared This type is shared by both Firefox and Opera profiles when distinction must be made the phantom type parameter is used to differentiate",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "Profile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occured while attempting to parse a profile's preference file.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "ProfileParseError",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfileParseError",
          "type": "newtype"
        },
        "index": {
          "description": "An error occured while attempting to parse profile preference file",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "ProfileParseError",
          "package": "webdriver",
          "partial": "Profile Parse Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#t:ProfileParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA profile preference value. This is the subset of JSON values that excludes\n arrays, objects, and null.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "ProfilePref",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#ProfilePref",
          "type": "data"
        },
        "index": {
          "description": "profile preference value This is the subset of JSON values that excludes arrays objects and null",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "ProfilePref",
          "package": "webdriver",
          "partial": "Profile Pref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#t:ProfilePref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass to convert types to profile preference values\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "ToPref",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Common-Profile.html#ToPref",
          "type": "class"
        },
        "index": {
          "description": "typeclass to convert types to profile preference values",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "ToPref",
          "package": "webdriver",
          "partial": "To Pref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#t:ToPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Firefox Profile, used when no profile is supplied.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "defaultProfile",
          "package": "webdriver",
          "signature": "Profile Firefox",
          "source": "src/Test-WebDriver-Firefox-Profile.html#defaultProfile",
          "type": "function"
        },
        "index": {
          "description": "Default Firefox Profile used when no profile is supplied",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "defaultProfile",
          "package": "webdriver",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:defaultProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an existing profile from the file system. Any prepared changes made to\n the \u003ccode\u003e\u003ca\u003eProfile\u003c/a\u003e\u003c/code\u003e will have no effect to the profile on disk.\n\u003c/p\u003e\u003cp\u003eTo make automated browser run smoothly, preferences found in\n \u003ccode\u003e\u003ca\u003edefaultProfile\u003c/a\u003e\u003c/code\u003e are automatically merged into the preferences of the on-disk-- profile. The on-disk profile's preference will override those found in the\n default profile.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "loadProfile",
          "package": "webdriver",
          "signature": "FilePath -\u003e m (Profile Firefox)",
          "source": "src/Test-WebDriver-Firefox-Profile.html#loadProfile",
          "type": "function"
        },
        "index": {
          "description": "Load an existing profile from the file system Any prepared changes made to the Profile will have no effect to the profile on disk To make automated browser run smoothly preferences found in defaultProfile are automatically merged into the preferences of the on-disk profile The on-disk profile preference will override those found in the default profile",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "loadProfile",
          "normalized": "FilePath-\u003ea(Profile Firefox)",
          "package": "webdriver",
          "partial": "Profile",
          "signature": "FilePath-\u003em(Profile Firefox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:loadProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to load an existing Firefox profile from disk, apply\n a handler function, and then prepare the result for network transmission.\n\u003c/p\u003e\u003cp\u003eNOTE: like \u003ccode\u003e\u003ca\u003eprepareProfile\u003c/a\u003e\u003c/code\u003e, the same caveat about large profiles applies.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "prepareLoadedProfile",
          "package": "webdriver",
          "signature": "FilePath -\u003e (Profile Firefox -\u003e Profile Firefox) -\u003e m (PreparedProfile Firefox)",
          "source": "src/Test-WebDriver-Firefox-Profile.html#prepareLoadedProfile",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to load an existing Firefox profile from disk apply handler function and then prepare the result for network transmission NOTE like prepareProfile the same caveat about large profiles applies",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "prepareLoadedProfile",
          "normalized": "FilePath-\u003e(Profile Firefox-\u003eProfile Firefox)-\u003ea(PreparedProfile Firefox)",
          "package": "webdriver",
          "partial": "Loaded Profile",
          "signature": "FilePath-\u003e(Profile Firefox-\u003eProfile Firefox)-\u003em(PreparedProfile Firefox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareLoadedProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a firefox profile for network transmission.\n Internally, this function constructs a Firefox profile within a temp\n directory, archives it as a zip file, and then base64 encodes the zipped\n data. The temporary directory is deleted afterwards.\n\u003c/p\u003e\u003cp\u003eNOTE: because this function has to copy the profile files into a\n a temp directory before zip archiving them, this operation is likely to be slow\n for large profiles. In such a case, consider using \u003ccode\u003e\u003ca\u003eprepareLoadedProfile_\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eprepareZippedProfile\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "prepareProfile",
          "package": "webdriver",
          "signature": "Profile Firefox -\u003e m (PreparedProfile Firefox)",
          "source": "src/Test-WebDriver-Firefox-Profile.html#prepareProfile",
          "type": "function"
        },
        "index": {
          "description": "Prepare firefox profile for network transmission Internally this function constructs Firefox profile within temp directory archives it as zip file and then base64 encodes the zipped data The temporary directory is deleted afterwards NOTE because this function has to copy the profile files into temp directory before zip archiving them this operation is likely to be slow for large profiles In such case consider using prepareLoadedProfile or prepareZippedProfile instead",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "prepareProfile",
          "normalized": "Profile Firefox-\u003ea(PreparedProfile Firefox)",
          "package": "webdriver",
          "partial": "Profile",
          "signature": "Profile Firefox-\u003em(PreparedProfile Firefox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function on a default profile, and\n prepare the result. The Profile passed to the handler function is\n the default profile used by sessions when Nothing is specified\n\u003c/p\u003e",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "prepareTempProfile",
          "package": "webdriver",
          "signature": "(Profile Firefox -\u003e Profile Firefox) -\u003e m (PreparedProfile Firefox)",
          "source": "src/Test-WebDriver-Firefox-Profile.html#prepareTempProfile",
          "type": "function"
        },
        "index": {
          "description": "Apply function on default profile and prepare the result The Profile passed to the handler function is the default profile used by sessions when Nothing is specified",
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "prepareTempProfile",
          "normalized": "(Profile Firefox-\u003eProfile Firefox)-\u003ea(PreparedProfile Firefox)",
          "package": "webdriver",
          "partial": "Temp Profile",
          "signature": "(Profile Firefox-\u003eProfile Firefox)-\u003em(PreparedProfile Firefox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:prepareTempProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "toPref",
          "package": "webdriver",
          "signature": "a -\u003e ProfilePref",
          "source": "src/Test-WebDriver-Common-Profile.html#toPref",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test WebDriver Firefox Profile",
          "module": "Test.WebDriver.Firefox.Profile",
          "name": "toPref",
          "normalized": "a-\u003eProfilePref",
          "package": "webdriver",
          "partial": "Pref",
          "signature": "a-\u003eProfilePref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Firefox-Profile.html#v:toPref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of convenience functions for using and parsing JSON values\n within \u003ccode\u003eWD\u003c/code\u003e. All monadic parse errors are converted to asynchronous\n \u003ccode\u003e\u003ca\u003eBadJSON\u003c/a\u003e\u003c/code\u003e exceptions.\n\u003c/p\u003e\u003cp\u003eThese functions are used internally to implement webdriver commands, and may\n be useful for implementing non-standard commands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "JSON",
          "package": "webdriver",
          "source": "src/Test-WebDriver-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "collection of convenience functions for using and parsing JSON values within WD All monadic parse errors are converted to asynchronous BadJSON exceptions These functions are used internally to implement webdriver commands and may be useful for implementing non-standard commands",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "JSON",
          "package": "webdriver",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occured when parsing a JSON value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "BadJSON",
          "package": "webdriver",
          "source": "src/Test-WebDriver-JSON.html#BadJSON",
          "type": "newtype"
        },
        "index": {
          "description": "An error occured when parsing JSON value",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "BadJSON",
          "package": "webdriver",
          "partial": "Bad JSON",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#t:BadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type indicating that we expect no return value from the webdriver request.\n Its FromJSON instance parses successfully for any values that indicate lack of\n a return value (a notion that varies from server to server).\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "NoReturn",
          "package": "webdriver",
          "source": "src/Test-WebDriver-JSON.html#NoReturn",
          "type": "data"
        },
        "index": {
          "description": "type indicating that we expect no return value from the webdriver request Its FromJSON instance parses successfully for any values that indicate lack of return value notion that varies from server to server",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "NoReturn",
          "package": "webdriver",
          "partial": "No Return",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#t:NoReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operator is a wrapper over Aeson's \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "(!:)",
          "package": "webdriver",
          "signature": "Object -\u003e Text -\u003e wd a",
          "source": "src/Test-WebDriver-JSON.html#%21%3A",
          "type": "function"
        },
        "index": {
          "description": "This operator is wrapper over Aeson operator",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "(!:) !:",
          "normalized": "Object-\u003eText-\u003ea b",
          "package": "webdriver",
          "signature": "Object-\u003eText-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.JSON",
          "name": "NoReturn",
          "package": "webdriver",
          "signature": "NoReturn",
          "source": "src/Test-WebDriver-JSON.html#NoReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "NoReturn",
          "package": "webdriver",
          "partial": "No Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:NoReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an Aeson parser result to \u003ccode\u003eWD\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "aesonResultToWD",
          "package": "webdriver",
          "signature": "Result a -\u003e wd a",
          "source": "src/Test-WebDriver-JSON.html#aesonResultToWD",
          "type": "function"
        },
        "index": {
          "description": "Convert an Aeson parser result to WD",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "aesonResultToWD",
          "normalized": "Result a-\u003eb a",
          "package": "webdriver",
          "partial": "Result To WD",
          "signature": "Result a-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:aesonResultToWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an attoparsec parser result to \u003ccode\u003eWD\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "apResultToWD",
          "package": "webdriver",
          "signature": "Result Value -\u003e wd a",
          "source": "src/Test-WebDriver-JSON.html#apResultToWD",
          "type": "function"
        },
        "index": {
          "description": "Convert an attoparsec parser result to WD",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "apResultToWD",
          "normalized": "Result Value-\u003ea b",
          "package": "webdriver",
          "partial": "Result To WD",
          "signature": "Result Value-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:apResultToWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to an instance of \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "fromJSON'",
          "package": "webdriver",
          "signature": "Value -\u003e wd a",
          "source": "src/Test-WebDriver-JSON.html#fromJSON%27",
          "type": "function"
        },
        "index": {
          "description": "Convert JSON Value to an instance of FromJSON",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "fromJSON'",
          "normalized": "Value-\u003ea b",
          "package": "webdriver",
          "partial": "JSON'",
          "signature": "Value-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:fromJSON-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a 2-element JSON \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e from a pair of keys and a pair of\n values.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "pair",
          "package": "webdriver",
          "signature": "(Text, Text) -\u003e (a, b) -\u003e Value",
          "source": "src/Test-WebDriver-JSON.html#pair",
          "type": "function"
        },
        "index": {
          "description": "Construct element JSON object from pair of keys and pair of values",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "pair",
          "normalized": "(Text,Text)-\u003e(a,b)-\u003eValue",
          "package": "webdriver",
          "signature": "(Text,Text)-\u003e(a,b)-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as a top-level JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, then convert it to an\n instance of \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e..\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "parseJSON'",
          "package": "webdriver",
          "signature": "ByteString -\u003e wd a",
          "source": "src/Test-WebDriver-JSON.html#parseJSON%27",
          "type": "function"
        },
        "index": {
          "description": "Parse lazy ByteString as top-level JSON Value then convert it to an instance of FromJSON",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "parseJSON'",
          "normalized": "ByteString-\u003ea b",
          "package": "webdriver",
          "partial": "JSON'",
          "signature": "ByteString-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:parseJSON-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e as a pair. The first two string arguments specify the\n keys to extract from the object. The third string is the name of the\n calling function, for better error reporting.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "parsePair",
          "package": "webdriver",
          "signature": "String -\u003e String -\u003e String -\u003e Value -\u003e wd (a, b)",
          "source": "src/Test-WebDriver-JSON.html#parsePair",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON Object as pair The first two string arguments specify the keys to extract from the object The third string is the name of the calling function for better error reporting",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "parsePair",
          "normalized": "String-\u003eString-\u003eString-\u003eValue-\u003ea(b,c)",
          "package": "webdriver",
          "partial": "Pair",
          "signature": "String-\u003eString-\u003eString-\u003eValue-\u003ewd(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:parsePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON Object as a triple. The first three string arguments\n specify the keys to extract from the object. The fourth string is the name\n of the calling function, for better error reporting.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "parseTriple",
          "package": "webdriver",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e Value -\u003e wd (a, b, c)",
          "source": "src/Test-WebDriver-JSON.html#parseTriple",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON Object as triple The first three string arguments specify the keys to extract from the object The fourth string is the name of the calling function for better error reporting",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "parseTriple",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eValue-\u003ea(b,c,d)",
          "package": "webdriver",
          "partial": "Triple",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eValue-\u003ewd(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:parseTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a singleton JSON \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e from a key and value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "single",
          "package": "webdriver",
          "signature": "Text -\u003e a -\u003e Value",
          "source": "src/Test-WebDriver-JSON.html#single",
          "type": "function"
        },
        "index": {
          "description": "Construct singleton JSON object from key and value",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "single",
          "normalized": "Text-\u003ea-\u003eValue",
          "package": "webdriver",
          "signature": "Text-\u003ea-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a 3-element JSON \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e from a triple of keys and a triple of\n values.\n\u003c/p\u003e",
          "module": "Test.WebDriver.JSON",
          "name": "triple",
          "package": "webdriver",
          "signature": "(Text, Text, Text) -\u003e (a, b, c) -\u003e Value",
          "source": "src/Test-WebDriver-JSON.html#triple",
          "type": "function"
        },
        "index": {
          "description": "Construct element JSON object from triple of keys and triple of values",
          "hierarchy": "Test WebDriver JSON",
          "module": "Test.WebDriver.JSON",
          "name": "triple",
          "normalized": "(Text,Text,Text)-\u003e(a,b,c)-\u003eValue",
          "package": "webdriver",
          "signature": "(Text,Text,Text)-\u003e(a,b,c)-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-JSON.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Monad",
          "name": "Monad",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "Monad",
          "package": "webdriver",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic interface to the WebDriver server. This monad is simply a\n    state monad transformer over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, threading session information between sequential webdriver commands\n\u003c/p\u003e",
          "module": "Test.WebDriver.Monad",
          "name": "WD",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Monad.html#WD",
          "type": "newtype"
        },
        "index": {
          "description": "monadic interface to the WebDriver server This monad is simply state monad transformer over IO threading session information between sequential webdriver commands",
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "WD",
          "package": "webdriver",
          "partial": "WD",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#t:WD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.WebDriver.Monad\",\"Test.WebDriver.Types\",\"Test.WebDriver\"]",
          "name": "WD",
          "package": "webdriver",
          "signature": "WD (StateT WDSession IO a)",
          "source": "src/Test-WebDriver-Monad.html#WD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:WD\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#v:WD\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:WD\"]"
        },
        "index": {
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "WD",
          "package": "webdriver",
          "partial": "WD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:WD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efinallyClose\u003c/a\u003e\u003c/code\u003e that only closes the session when an\n asynchronous exception is thrown, but otherwise leaves the session open\n if the action was successful.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Monad\",\"Test.WebDriver\"]",
          "name": "closeOnException",
          "package": "webdriver",
          "signature": "wd a -\u003e wd a",
          "source": "src/Test-WebDriver-Monad.html#closeOnException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:closeOnException\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:closeOnException\"]"
        },
        "index": {
          "description": "variant of finallyClose that only closes the session when an asynchronous exception is thrown but otherwise leaves the session open if the action was successful",
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "closeOnException",
          "normalized": "a b-\u003ea b",
          "package": "webdriver",
          "partial": "On Exception",
          "signature": "wd a-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:closeOnException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finalizer ensuring that the session is always closed at the end of\n the given \u003ccode\u003e\u003ca\u003eWD\u003c/a\u003e\u003c/code\u003e action, regardless of any exceptions.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Monad\",\"Test.WebDriver\"]",
          "name": "finallyClose",
          "package": "webdriver",
          "signature": "wd a -\u003e wd a",
          "source": "src/Test-WebDriver-Monad.html#finallyClose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:finallyClose\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:finallyClose\"]"
        },
        "index": {
          "description": "finalizer ensuring that the session is always closed at the end of the given WD action regardless of any exceptions",
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "finallyClose",
          "normalized": "a b-\u003ea b",
          "package": "webdriver",
          "partial": "Close",
          "signature": "wd a-\u003ewd a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:finallyClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunWD\u003c/a\u003e\u003c/code\u003e, but automatically creates a session beforehand and closes it\n afterwards. This is a very common use case.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Monad\",\"Test.WebDriver\"]",
          "name": "runSession",
          "package": "webdriver",
          "signature": "WDSession -\u003e Capabilities -\u003e WD a -\u003e IO a",
          "source": "src/Test-WebDriver-Monad.html#runSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:runSession\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:runSession\"]"
        },
        "index": {
          "description": "Like runWD but automatically creates session beforehand and closes it afterwards This is very common use case",
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "runSession",
          "normalized": "WDSession-\u003eCapabilities-\u003eWD a-\u003eIO a",
          "package": "webdriver",
          "partial": "Session",
          "signature": "WDSession-\u003eCapabilities-\u003eWD a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:runSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a \u003ccode\u003e\u003ca\u003eWD\u003c/a\u003e\u003c/code\u003e computation within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, using the given\n \u003ccode\u003e\u003ca\u003eWDSession\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Monad\",\"Test.WebDriver\"]",
          "name": "runWD",
          "package": "webdriver",
          "signature": "WDSession -\u003e WD a -\u003e IO a",
          "source": "src/Test-WebDriver-Monad.html#runWD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:runWD\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:runWD\"]"
        },
        "index": {
          "description": "Executes WD computation within the IO monad using the given WDSession",
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "runWD",
          "normalized": "WDSession-\u003eWD a-\u003eIO a",
          "package": "webdriver",
          "partial": "WD",
          "signature": "WDSession-\u003eWD a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:runWD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocally sets a \u003ccode\u003e\u003ca\u003eWDSession\u003c/a\u003e\u003c/code\u003e for use within the given \u003ccode\u003e\u003ca\u003eWD\u003c/a\u003e\u003c/code\u003e action.\n The state of the outer action is unaffected by this function.\n This function is useful if you need to work with multiple sessions at once.\n\u003c/p\u003e",
          "module": "[\"Test.WebDriver.Monad\",\"Test.WebDriver\"]",
          "name": "withSession",
          "package": "webdriver",
          "signature": "WDSession -\u003e WD a -\u003e WD a",
          "source": "src/Test-WebDriver-Monad.html#withSession",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:withSession\",\"http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#v:withSession\"]"
        },
        "index": {
          "description": "Locally sets WDSession for use within the given WD action The state of the outer action is unaffected by this function This function is useful if you need to work with multiple sessions at once",
          "hierarchy": "Test WebDriver Monad",
          "module": "Test.WebDriver.Monad",
          "name": "withSession",
          "normalized": "WDSession-\u003eWD a-\u003eWD a",
          "package": "webdriver",
          "partial": "Session",
          "signature": "WDSession-\u003eWD a-\u003eWD a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Monad.html#v:withSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Types",
          "name": "Types",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Types",
          "package": "webdriver",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Types",
          "name": "ApplicationCacheStatus",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#ApplicationCacheStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "ApplicationCacheStatus",
          "package": "webdriver",
          "partial": "Application Cache Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:ApplicationCacheStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occured when parsing a JSON value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "BadJSON",
          "package": "webdriver",
          "source": "src/Test-WebDriver-JSON.html#BadJSON",
          "type": "newtype"
        },
        "index": {
          "description": "An error occured when parsing JSON value",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "BadJSON",
          "package": "webdriver",
          "partial": "Bad JSON",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:BadJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructor simultaneously specifies which browser the session will\n use, while also providing browser-specific configuration. Default\n configuration is provided for each browser by \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echrome\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eopera\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eie\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eThis library uses \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e as its \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e browser configuration, when no\n browser choice is specified.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Browser",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "data"
        },
        "index": {
          "description": "This constructor simultaneously specifies which browser the session will use while also providing browser-specific configuration Default configuration is provided for each browser by firefox chrome opera ie etc This library uses firefox as its Default browser configuration when no browser choice is specified",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Browser",
          "package": "webdriver",
          "partial": "Browser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure describing the capabilities of a session. This record\nserves dual roles.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It's used to specify the desired capabilities for a session before\nit's created. In this usage, fields that are set to Nothing indicate\nthat we have no preference for that capability.\n\u003c/li\u003e\u003cli\u003e When received from the server , it's used to\ndescribe the actual capabilities given to us by the WebDriver\nserver. Here a value of Nothing indicates that the server doesn't\nsupport the capability. Thus, for Maybe Bool fields, both Nothing and\nJust False indicate a lack of support for the desired capability.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Capabilities",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "data"
        },
        "index": {
          "description": "structure describing the capabilities of session This record serves dual roles It used to specify the desired capabilities for session before it created In this usage fields that are set to Nothing indicate that we have no preference for that capability When received from the server it used to describe the actual capabilities given to us by the WebDriver server Here value of Nothing indicates that the server doesn support the capability Thus for Maybe Bool fields both Nothing and Just False indicate lack of support for the desired capability",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Capabilities",
          "package": "webdriver",
          "partial": "Capabilities",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Capabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies are delicious delicacies. When sending cookies to the server, a value\n of Nothing indicates that the server should use a default value. When receiving\n cookies from the server, a value of Nothing indicates that the server is unable\n to specify the value.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Cookie",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "Cookies are delicious delicacies When sending cookies to the server value of Nothing indicates that the server should use default value When receiving cookies from the server value of Nothing indicates that the server is unable to specify the value",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Cookie",
          "package": "webdriver",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a web page element. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Element",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#Element",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for web page element",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Element",
          "package": "webdriver",
          "partial": "Element",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception encapsulates a broad variety of exceptions that can\n occur when a command fails.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "FailedCommand",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#FailedCommand",
          "type": "data"
        },
        "index": {
          "description": "This exception encapsulates broad variety of exceptions that can occur when command fails",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "FailedCommand",
          "package": "webdriver",
          "partial": "Failed Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:FailedCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about the failed command provided by the server.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "FailedCommandInfo",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandInfo",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about the failed command provided by the server",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "FailedCommandInfo",
          "package": "webdriver",
          "partial": "Failed Command Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:FailedCommandInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of failed command exception that occured.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "FailedCommandType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#FailedCommandType",
          "type": "data"
        },
        "index": {
          "description": "The type of failed command exception that occured",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "FailedCommandType",
          "package": "webdriver",
          "partial": "Failed Command Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:FailedCommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the frame used by \u003ccode\u003e\u003ca\u003efocusFrame\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "FrameSelector",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#FrameSelector",
          "type": "data"
        },
        "index": {
          "description": "Specifies the frame used by focusFrame",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "FrameSelector",
          "package": "webdriver",
          "partial": "Frame Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:FrameSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP connection errors.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "HTTPConnError",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#HTTPConnError",
          "type": "newtype"
        },
        "index": {
          "description": "HTTP connection errors",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "HTTPConnError",
          "package": "webdriver",
          "partial": "HTTPConn Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:HTTPConnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unexpected HTTP status was sent by the server.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "HTTPStatusUnknown",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#HTTPStatusUnknown",
          "type": "data"
        },
        "index": {
          "description": "An unexpected HTTP status was sent by the server",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "HTTPStatusUnknown",
          "package": "webdriver",
          "partial": "HTTPStatus Unknown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:HTTPStatusUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how elements scroll into the viewport. (see \u003ccode\u003e\u003ca\u003eieElementScrollBehavior\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "IEElementScrollBehavior",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#IEElementScrollBehavior",
          "type": "data"
        },
        "index": {
          "description": "Specifies how elements scroll into the viewport see ieElementScrollBehavior",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "IEElementScrollBehavior",
          "package": "webdriver",
          "partial": "IEElement Scroll Behavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:IEElementScrollBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging levels for Internet Explorer\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "IELogLevel",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#IELogLevel",
          "type": "data"
        },
        "index": {
          "description": "Logging levels for Internet Explorer",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "IELogLevel",
          "package": "webdriver",
          "partial": "IELog Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:IELogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn invalid URL was given\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "InvalidURL",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#InvalidURL",
          "type": "newtype"
        },
        "index": {
          "description": "An invalid URL was given",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "InvalidURL",
          "package": "webdriver",
          "partial": "Invalid URL",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:InvalidURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper for any \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance. This allows us to pass\n parameters of many different types to Javascript code.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "JSArg",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#JSArg",
          "type": "data"
        },
        "index": {
          "description": "An existential wrapper for any ToJSON instance This allows us to pass parameters of many different types to Javascript code",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "JSArg",
          "package": "webdriver",
          "partial": "JSArg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:JSArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record that represents a single log entry.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "LogEntry",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#LogEntry",
          "type": "data"
        },
        "index": {
          "description": "record that represents single log entry",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "LogEntry",
          "package": "webdriver",
          "partial": "Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates a log verbosity level. Used in \u003ccode\u003e\u003ca\u003eFirefox\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOpera\u003c/a\u003e\u003c/code\u003e configuration.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "LogLevel",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Indicates log verbosity level Used in Firefox and Opera configuration",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "LogLevel",
          "package": "webdriver",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Types",
          "name": "LogType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#LogType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "LogType",
          "package": "webdriver",
          "partial": "Log Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:LogType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mouse button\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "MouseButton",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#MouseButton",
          "type": "data"
        },
        "index": {
          "description": "mouse button",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "MouseButton",
          "package": "webdriver",
          "partial": "Mouse Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command requiring a session ID was attempted when no session ID was\n available.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "NoSessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#NoSessionId",
          "type": "newtype"
        },
        "index": {
          "description": "command requiring session ID was attempted when no session ID was available",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "NoSessionId",
          "package": "webdriver",
          "partial": "No Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:NoSessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA screen orientation\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Orientation",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#Orientation",
          "type": "data"
        },
        "index": {
          "description": "screen orientation",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Orientation",
          "package": "webdriver",
          "partial": "Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents platform options supported by WebDriver. The value Any represents\n no preference.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Platform",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "data"
        },
        "index": {
          "description": "Represents platform options supported by WebDriver The value Any represents no preference",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Platform",
          "package": "webdriver",
          "partial": "Platform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Platform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable settings for the proxy \u003ccode\u003e\u003ca\u003eCapabilities\u003c/a\u003e\u003c/code\u003e field\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "ProxyType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "data"
        },
        "index": {
          "description": "Available settings for the proxy Capabilities field",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "ProxyType",
          "package": "webdriver",
          "partial": "Proxy Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:ProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies element(s) within a DOM tree using various selection methods.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "Selector",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#Selector",
          "type": "data"
        },
        "index": {
          "description": "Specifies element within DOM tree using various selection methods",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "Selector",
          "package": "webdriver",
          "partial": "Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA server-side exception occured\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "ServerError",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#ServerError",
          "type": "newtype"
        },
        "index": {
          "description": "server-side exception occured",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "ServerError",
          "package": "webdriver",
          "partial": "Server Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a WebDriver session. These handles are produced by\nthe server on session creation, and act to identify a session in progress. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "SessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#SessionId",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for WebDriver session These handles are produced by the server on session creation and act to identify session in progress",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "SessionId",
          "package": "webdriver",
          "partial": "Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:SessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn individual stack frame from the stack trace provided by the server\n during a FailedCommand.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "StackFrame",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#StackFrame",
          "type": "data"
        },
        "index": {
          "description": "An individual stack frame from the stack trace provided by the server during FailedCommand",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "StackFrame",
          "package": "webdriver",
          "partial": "Stack Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:StackFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Types",
          "name": "UnexpectedAlertBehavior",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#UnexpectedAlertBehavior",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "UnexpectedAlertBehavior",
          "package": "webdriver",
          "partial": "Unexpected Alert Behavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:UnexpectedAlertBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command was sent to the WebDriver server that it didn't recognize.\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "UnknownCommand",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Internal.html#UnknownCommand",
          "type": "newtype"
        },
        "index": {
          "description": "command was sent to the WebDriver server that it didn recognize",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "UnknownCommand",
          "package": "webdriver",
          "partial": "Unknown Command",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:UnknownCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic interface to the WebDriver server. This monad is simply a\n    state monad transformer over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, threading session information between sequential webdriver commands\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "WD",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Monad.html#WD",
          "type": "newtype"
        },
        "index": {
          "description": "monadic interface to the WebDriver server This monad is simply state monad transformer over IO threading session information between sequential webdriver commands",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "WD",
          "package": "webdriver",
          "partial": "WD",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:WD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a WebDriver session. This structure is passed\nimplicitly through all \u003ccode\u003eWD\u003c/code\u003e computations, and is also used to configure the \u003ccode\u003eWD\u003c/code\u003e\nmonad before execution. \n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "WDSession",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "data"
        },
        "index": {
          "description": "Information about WebDriver session This structure is passed implicitly through all WD computations and is also used to configure the WD monad before execution",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "WDSession",
          "package": "webdriver",
          "partial": "WDSession",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:WDSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTML 5 storage type\n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "WebStorageType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands.html#WebStorageType",
          "type": "data"
        },
        "index": {
          "description": "An HTML storage type",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "WebStorageType",
          "package": "webdriver",
          "partial": "Web Storage Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:WebStorageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a browser window \n\u003c/p\u003e",
          "module": "Test.WebDriver.Types",
          "name": "WindowHandle",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Commands-Internal.html#WindowHandle",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for browser window",
          "hierarchy": "Test WebDriver Types",
          "module": "Test.WebDriver.Types",
          "name": "WindowHandle",
          "package": "webdriver",
          "partial": "Window Handle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Types.html#t:WindowHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Utils",
          "name": "Utils",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test WebDriver Utils",
          "module": "Test.WebDriver.Utils",
          "name": "Utils",
          "package": "webdriver",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.WebDriver.Utils",
          "name": "urlEncode",
          "package": "webdriver",
          "signature": "Text -\u003e Text",
          "source": "src/Test-WebDriver-Utils.html#urlEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test WebDriver Utils",
          "module": "Test.WebDriver.Utils",
          "name": "urlEncode",
          "normalized": "Text-\u003eText",
          "package": "webdriver",
          "partial": "Encode",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver-Utils.html#v:urlEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module serves as the top-level interface to the Haskell WebDriver bindings,\nproviding most of the functionality you're likely to want.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.WebDriver",
          "name": "WebDriver",
          "package": "webdriver",
          "source": "src/Test-WebDriver.html",
          "type": "module"
        },
        "index": {
          "description": "This module serves as the top-level interface to the Haskell WebDriver bindings providing most of the functionality you re likely to want",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "WebDriver",
          "package": "webdriver",
          "partial": "Web Driver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructor simultaneously specifies which browser the session will\n use, while also providing browser-specific configuration. Default\n configuration is provided for each browser by \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echrome\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eopera\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eie\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eThis library uses \u003ccode\u003e\u003ca\u003efirefox\u003c/a\u003e\u003c/code\u003e as its \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e browser configuration, when no\n browser choice is specified.\n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "Browser",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Browser",
          "type": "data"
        },
        "index": {
          "description": "This constructor simultaneously specifies which browser the session will use while also providing browser-specific configuration Default configuration is provided for each browser by firefox chrome opera ie etc This library uses firefox as its Default browser configuration when no browser choice is specified",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "Browser",
          "package": "webdriver",
          "partial": "Browser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:Browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure describing the capabilities of a session. This record\nserves dual roles.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It's used to specify the desired capabilities for a session before\nit's created. In this usage, fields that are set to Nothing indicate\nthat we have no preference for that capability.\n\u003c/li\u003e\u003cli\u003e When received from the server , it's used to\ndescribe the actual capabilities given to us by the WebDriver\nserver. Here a value of Nothing indicates that the server doesn't\nsupport the capability. Thus, for Maybe Bool fields, both Nothing and\nJust False indicate a lack of support for the desired capability.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Test.WebDriver",
          "name": "Capabilities",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Capabilities",
          "type": "data"
        },
        "index": {
          "description": "structure describing the capabilities of session This record serves dual roles It used to specify the desired capabilities for session before it created In this usage fields that are set to Nothing indicate that we have no preference for that capability When received from the server it used to describe the actual capabilities given to us by the WebDriver server Here value of Nothing indicates that the server doesn support the capability Thus for Maybe Bool fields both Nothing and Just False indicate lack of support for the desired capability",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "Capabilities",
          "package": "webdriver",
          "partial": "Capabilities",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:Capabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates a log verbosity level. Used in \u003ccode\u003e\u003ca\u003eFirefox\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOpera\u003c/a\u003e\u003c/code\u003e configuration.\n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "LogLevel",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Indicates log verbosity level Used in Firefox and Opera configuration",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "LogLevel",
          "package": "webdriver",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents platform options supported by WebDriver. The value Any represents\n no preference.\n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "Platform",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#Platform",
          "type": "data"
        },
        "index": {
          "description": "Represents platform options supported by WebDriver The value Any represents no preference",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "Platform",
          "package": "webdriver",
          "partial": "Platform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:Platform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable settings for the proxy \u003ccode\u003e\u003ca\u003eCapabilities\u003c/a\u003e\u003c/code\u003e field\n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "ProxyType",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Capabilities.html#ProxyType",
          "type": "data"
        },
        "index": {
          "description": "Available settings for the proxy Capabilities field",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "ProxyType",
          "package": "webdriver",
          "partial": "Proxy Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:ProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for a WebDriver session. These handles are produced by\nthe server on session creation, and act to identify a session in progress. \n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "SessionId",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#SessionId",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for WebDriver session These handles are produced by the server on session creation and act to identify session in progress",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "SessionId",
          "package": "webdriver",
          "partial": "Session Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:SessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic interface to the WebDriver server. This monad is simply a\n    state monad transformer over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, threading session information between sequential webdriver commands\n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "WD",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Monad.html#WD",
          "type": "newtype"
        },
        "index": {
          "description": "monadic interface to the WebDriver server This monad is simply state monad transformer over IO threading session information between sequential webdriver commands",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "WD",
          "package": "webdriver",
          "partial": "WD",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:WD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a WebDriver session. This structure is passed\nimplicitly through all \u003ccode\u003eWD\u003c/code\u003e computations, and is also used to configure the \u003ccode\u003eWD\u003c/code\u003e\nmonad before execution. \n\u003c/p\u003e",
          "module": "Test.WebDriver",
          "name": "WDSession",
          "package": "webdriver",
          "source": "src/Test-WebDriver-Classes.html#WDSession",
          "type": "data"
        },
        "index": {
          "description": "Information about WebDriver session This structure is passed implicitly through all WD computations and is also used to configure the WD monad before execution",
          "hierarchy": "Test WebDriver",
          "module": "Test.WebDriver",
          "name": "WDSession",
          "package": "webdriver",
          "partial": "WDSession",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webdriver/docs/Test-WebDriver.html#t:WDSession"
      }
    }
  ]
]