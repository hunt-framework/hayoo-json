[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a simple HTTP and HTTPS proxy. In the most basic\n setup, the caller specifies a port and runs it as follows:\n\u003c/p\u003e\u003cpre\u003e -- Run a HTTPS and HTTPS proxy on port 3128.\n import Network.HTTP.Proxy\n\n main :: IO ()\n main = runProxy 3128\n\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Proxy.html",
        "fct-type": "module",
        "title": "Proxy"
      },
      "index": {
        "description": "This module contains simple HTTP and HTTPS proxy In the most basic setup the caller specifies port and runs it as follows Run HTTPS and HTTPS proxy on port import Network.HTTP.Proxy main IO main runProxy",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eInformation on the request sent by the client. This abstracts away the\n details of the underlying implementation.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "Information on the request sent by the client This abstracts away the details of the underlying implementation",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Request",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#t:Settings",
      "description": {
        "fct-descr": "\u003cp\u003eVarious proxy server settings. This is purposely kept as an abstract data\n type so that new settings can be added without breaking backwards\n compatibility. In order to create a \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e value, use \u003ccode\u003e\u003ca\u003edefaultSettings\u003c/a\u003e\u003c/code\u003e\n and record syntax to modify individual records. For example:\n\u003c/p\u003e\u003cpre\u003e defaultSettings { proxyPort = 3128 }\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "data",
        "title": "Settings"
      },
      "index": {
        "description": "Various proxy server settings This is purposely kept as an abstract data type so that new settings can be added without breaking backwards compatibility In order to create Settings value use defaultSettings and record syntax to modify individual records For example defaultSettings proxyPort",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Settings",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#t:UpstreamProxy",
      "description": {
        "fct-descr": "\u003cp\u003eA http-proxy can be configured to use and upstream proxy by providing the\n proxy name, the port it listens to and an option username and password for\n proxy authorisation.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
        "fct-type": "data",
        "title": "UpstreamProxy"
      },
      "index": {
        "description": "http-proxy can be configured to use and upstream proxy by providing the proxy name the port it listens to and an option username and password for proxy authorisation",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "UpstreamProxy",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Upstream Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:Request",
      "description": {
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Request",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:Settings",
      "description": {
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Settings",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "Settings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "Settings",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:UpstreamProxy",
      "description": {
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "UpstreamProxy",
        "fct-source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
        "fct-type": "function",
        "title": "UpstreamProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "UpstreamProxy",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Upstream Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:defaultSettings",
      "description": {
        "fct-descr": "\u003cp\u003eThe default settings for the Proxy server. See the individual settings for\n the default value.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Settings",
        "fct-source": "src/Network-HTTP-Proxy.html#defaultSettings",
        "fct-type": "function",
        "title": "defaultSettings"
      },
      "index": {
        "description": "The default settings for the Proxy server See the individual settings for the default value",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "defaultSettings",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:httpVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "HttpVersion",
        "fct-type": "function",
        "title": "httpVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "httpVersion",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:isSecure",
      "description": {
        "fct-descr": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "isSecure"
      },
      "index": {
        "description": "Was this request made over an SSL connection",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "isSecure",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:pathInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port and without a query string, split on forward slashes,\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "[Text]",
        "fct-type": "function",
        "title": "pathInfo"
      },
      "index": {
        "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "pathInfo",
        "normalized": "[Text]",
        "package": "http-proxy",
        "partial": "Info",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyHost",
      "description": {
        "fct-descr": "\u003cp\u003eDefault value: HostIPv4\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "HostPreference",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyHost"
      },
      "index": {
        "description": "Default value HostIPv4",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyHost",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyLogger",
      "description": {
        "fct-descr": "\u003cp\u003eA function for logging proxy internal state. Default: 'return ()'.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "ByteString -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyLogger"
      },
      "index": {
        "description": "function for logging proxy internal state Default return",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyLogger",
        "normalized": "ByteString-\u003eIO()",
        "package": "http-proxy",
        "partial": "Logger",
        "signature": "ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyOnException",
      "description": {
        "fct-descr": "\u003cp\u003eWhat to do with exceptions thrown by either the application or server. Default: ignore server-generated exceptions (see \u003ccode\u003eInvalidRequest\u003c/code\u003e) and print application-generated applications to stderr.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "SomeException -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyOnException"
      },
      "index": {
        "description": "What to do with exceptions thrown by either the application or server Default ignore server-generated exceptions see InvalidRequest and print application-generated applications to stderr",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyOnException",
        "normalized": "SomeException-\u003eIO()",
        "package": "http-proxy",
        "partial": "On Exception",
        "signature": "SomeException-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyPort",
      "description": {
        "fct-descr": "\u003cp\u003ePort to listen on. Default value: 3100\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Int",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyPort"
      },
      "index": {
        "description": "Port to listen on Default value",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyPort",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyRequestModifier",
      "description": {
        "fct-descr": "\u003cp\u003eA function that allows the the request to be modified before being run. Default: 'return . id'.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Request -\u003e IO Request",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyRequestModifier"
      },
      "index": {
        "description": "function that allows the the request to be modified before being run Default return id",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyRequestModifier",
        "normalized": "Request-\u003eIO Request",
        "package": "http-proxy",
        "partial": "Request Modifier",
        "signature": "Request-\u003eIO Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eTimeout value in seconds. Default value: 30\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Int",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyTimeout"
      },
      "index": {
        "description": "Timeout value in seconds Default value",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyTimeout",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyUpstream",
      "description": {
        "fct-descr": "\u003cp\u003eOptional upstream proxy.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Maybe UpstreamProxy",
        "fct-source": "src/Network-HTTP-Proxy.html#Settings",
        "fct-type": "function",
        "title": "proxyUpstream"
      },
      "index": {
        "description": "Optional upstream proxy",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "proxyUpstream",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Upstream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Query",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "Parsed query string information",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "queryString",
        "normalized": "",
        "package": "http-proxy",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:rawPathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExtra path information sent by the client. The meaning varies slightly\n depending on backend; in a standalone server setting, this is most likely\n all information after the domain name. In a CGI application, this would be\n the information following the path to the CGI executable itself.\n Do not modify this raw value- modify pathInfo instead.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "rawPathInfo"
      },
      "index": {
        "description": "Extra path information sent by the client The meaning varies slightly depending on backend in standalone server setting this is most likely all information after the domain name In CGI application this would be the information following the path to the CGI executable itself Do not modify this raw value modify pathInfo instead",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "rawPathInfo",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Path Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:rawQueryString",
      "description": {
        "fct-descr": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "rawQueryString"
      },
      "index": {
        "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "rawQueryString",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:remoteHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "SockAddr",
        "fct-type": "function",
        "title": "remoteHost"
      },
      "index": {
        "description": "The client host information",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "remoteHost",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:requestBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Source (ResourceT IO) ByteString",
        "fct-type": "function",
        "title": "requestBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "requestBody",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:requestHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "RequestHeaders",
        "fct-type": "function",
        "title": "requestHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "requestHeaders",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:requestMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Method",
        "fct-type": "function",
        "title": "requestMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "requestMethod",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:runProxy",
      "description": {
        "fct-descr": "\u003cp\u003eRun a HTTP and HTTPS proxy server on the specified port. This calls\n \u003ccode\u003e\u003ca\u003erunProxySettings\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003edefaultSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Port -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Proxy.html#runProxy",
        "fct-type": "function",
        "title": "runProxy"
      },
      "index": {
        "description": "Run HTTP and HTTPS proxy server on the specified port This calls runProxySettings with defaultSettings",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "runProxy",
        "normalized": "Port-\u003eIO()",
        "package": "http-proxy",
        "partial": "Proxy",
        "signature": "Port-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:runProxySettings",
      "description": {
        "fct-descr": "\u003cp\u003eRun a HTTP and HTTPS proxy server with the specified settings.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Settings -\u003e IO ()",
        "fct-source": "src/Network-HTTP-Proxy.html#runProxySettings",
        "fct-type": "function",
        "title": "runProxySettings"
      },
      "index": {
        "description": "Run HTTP and HTTPS proxy server with the specified settings",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "runProxySettings",
        "normalized": "Settings-\u003eIO()",
        "package": "http-proxy",
        "partial": "Proxy Settings",
        "signature": "Settings-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:serverName",
      "description": {
        "fct-descr": "\u003cp\u003eGenerally the host requested by the user via the Host request header.\n Backends are free to provide alternative values as necessary. This value\n should not be used to construct URLs.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "serverName"
      },
      "index": {
        "description": "Generally the host requested by the user via the Host request header Backends are free to provide alternative values as necessary This value should not be used to construct URLs",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "serverName",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:serverPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe listening port that the server received this request on. It is\n possible for a server to listen on a non-numeric port (i.e., Unix named\n socket), in which case this value will be arbitrary. Like \u003ccode\u003e\u003ca\u003eserverName\u003c/a\u003e\u003c/code\u003e,\n this value should not be used in URL construction.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "serverPort"
      },
      "index": {
        "description": "The listening port that the server received this request on It is possible for server to listen on non-numeric port i.e Unix named socket in which case this value will be arbitrary Like serverName this value should not be used in URL construction",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "serverPort",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:upstreamAuth",
      "description": {
        "fct-descr": "\u003cp\u003eOptional username and password to use with upstream proxy.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Maybe (ByteString, ByteString)",
        "fct-source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
        "fct-type": "function",
        "title": "upstreamAuth"
      },
      "index": {
        "description": "Optional username and password to use with upstream proxy",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "upstreamAuth",
        "normalized": "Maybe(ByteString,ByteString)",
        "package": "http-proxy",
        "partial": "Auth",
        "signature": "Maybe(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:upstreamHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe upstream proxy's hostname.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
        "fct-type": "function",
        "title": "upstreamHost"
      },
      "index": {
        "description": "The upstream proxy hostname",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "upstreamHost",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:upstreamPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe upstream proxy's port number.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Int",
        "fct-source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
        "fct-type": "function",
        "title": "upstreamPort"
      },
      "index": {
        "description": "The upstream proxy port number",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "upstreamPort",
        "normalized": "",
        "package": "http-proxy",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:vault",
      "description": {
        "fct-descr": "\u003cp\u003eA location for arbitrary data to be shared by applications and middleware.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Proxy",
        "fct-package": "http-proxy",
        "fct-signature": "Vault",
        "fct-type": "function",
        "title": "vault"
      },
      "index": {
        "description": "location for arbitrary data to be shared by applications and middleware",
        "hierarchy": "Network HTTP Proxy",
        "module": "Network.HTTP.Proxy",
        "name": "vault",
        "normalized": "",
        "package": "http-proxy",
        "partial": "",
        "signature": ""
      }
    }
  }
]