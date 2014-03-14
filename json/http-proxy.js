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
        "word": "http-proxy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a simple HTTP and HTTPS proxy. In the most basic\n setup, the caller specifies a port and runs it as follows:\n\u003c/p\u003e\u003cpre\u003e -- Run a HTTPS and HTTPS proxy on port 3128.\n import Network.HTTP.Proxy\n\n main :: IO ()\n main = runProxy 3128\n\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "Proxy",
          "package": "http-proxy",
          "source": "src/Network-HTTP-Proxy.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains simple HTTP and HTTPS proxy In the most basic setup the caller specifies port and runs it as follows Run HTTPS and HTTPS proxy on port import Network.HTTP.Proxy main IO main runProxy",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Proxy",
          "package": "http-proxy",
          "partial": "Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation on the request sent by the client. This abstracts away the\n details of the underlying implementation.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "Request",
          "package": "http-proxy",
          "type": "data"
        },
        "index": {
          "description": "Information on the request sent by the client This abstracts away the details of the underlying implementation",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Request",
          "package": "http-proxy",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarious proxy server settings. This is purposely kept as an abstract data\n type so that new settings can be added without breaking backwards\n compatibility. In order to create a \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e value, use \u003ccode\u003e\u003ca\u003edefaultSettings\u003c/a\u003e\u003c/code\u003e\n and record syntax to modify individual records. For example:\n\u003c/p\u003e\u003cpre\u003e defaultSettings { proxyPort = 3128 }\n\u003c/pre\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "Settings",
          "package": "http-proxy",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "Various proxy server settings This is purposely kept as an abstract data type so that new settings can be added without breaking backwards compatibility In order to create Settings value use defaultSettings and record syntax to modify individual records For example defaultSettings proxyPort",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Settings",
          "package": "http-proxy",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA http-proxy can be configured to use and upstream proxy by providing the\n proxy name, the port it listens to and an option username and password for\n proxy authorisation.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "UpstreamProxy",
          "package": "http-proxy",
          "source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
          "type": "data"
        },
        "index": {
          "description": "http-proxy can be configured to use and upstream proxy by providing the proxy name the port it listens to and an option username and password for proxy authorisation",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "UpstreamProxy",
          "package": "http-proxy",
          "partial": "Upstream Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#t:UpstreamProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "Request",
          "package": "http-proxy",
          "signature": "Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Request",
          "package": "http-proxy",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "Settings",
          "package": "http-proxy",
          "signature": "Settings",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "Settings",
          "package": "http-proxy",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "UpstreamProxy",
          "package": "http-proxy",
          "signature": "UpstreamProxy",
          "source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "UpstreamProxy",
          "package": "http-proxy",
          "partial": "Upstream Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:UpstreamProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default settings for the Proxy server. See the individual settings for\n the default value.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "defaultSettings",
          "package": "http-proxy",
          "signature": "Settings",
          "source": "src/Network-HTTP-Proxy.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "description": "The default settings for the Proxy server See the individual settings for the default value",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "defaultSettings",
          "package": "http-proxy",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "httpVersion",
          "package": "http-proxy",
          "signature": "HttpVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "httpVersion",
          "package": "http-proxy",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:httpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "isSecure",
          "package": "http-proxy",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Was this request made over an SSL connection",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "isSecure",
          "package": "http-proxy",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:isSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port and without a query string, split on forward slashes,\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "pathInfo",
          "package": "http-proxy",
          "signature": "[Text]",
          "type": "function"
        },
        "index": {
          "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "pathInfo",
          "normalized": "[Text]",
          "package": "http-proxy",
          "partial": "Info",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:pathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value: HostIPv4\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyHost",
          "package": "http-proxy",
          "signature": "HostPreference",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "Default value HostIPv4",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyHost",
          "package": "http-proxy",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function for logging proxy internal state. Default: 'return ()'.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyLogger",
          "package": "http-proxy",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "function for logging proxy internal state Default return",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyLogger",
          "normalized": "ByteString-\u003eIO()",
          "package": "http-proxy",
          "partial": "Logger",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with exceptions thrown by either the application or server. Default: ignore server-generated exceptions (see \u003ccode\u003eInvalidRequest\u003c/code\u003e) and print application-generated applications to stderr.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyOnException",
          "package": "http-proxy",
          "signature": "SomeException -\u003e IO ()",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "What to do with exceptions thrown by either the application or server Default ignore server-generated exceptions see InvalidRequest and print application-generated applications to stderr",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyOnException",
          "normalized": "SomeException-\u003eIO()",
          "package": "http-proxy",
          "partial": "On Exception",
          "signature": "SomeException-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyOnException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort to listen on. Default value: 3100\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyPort",
          "package": "http-proxy",
          "signature": "Int",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "Port to listen on Default value",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyPort",
          "package": "http-proxy",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that allows the the request to be modified before being run. Default: 'return . id'.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyRequestModifier",
          "package": "http-proxy",
          "signature": "Request -\u003e IO Request",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "function that allows the the request to be modified before being run Default return id",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyRequestModifier",
          "normalized": "Request-\u003eIO Request",
          "package": "http-proxy",
          "partial": "Request Modifier",
          "signature": "Request-\u003eIO Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyRequestModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout value in seconds. Default value: 30\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyTimeout",
          "package": "http-proxy",
          "signature": "Int",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "Timeout value in seconds Default value",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyTimeout",
          "package": "http-proxy",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional upstream proxy.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "proxyUpstream",
          "package": "http-proxy",
          "signature": "Maybe UpstreamProxy",
          "source": "src/Network-HTTP-Proxy.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "Optional upstream proxy",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "proxyUpstream",
          "package": "http-proxy",
          "partial": "Upstream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:proxyUpstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "queryString",
          "package": "http-proxy",
          "signature": "Query",
          "type": "function"
        },
        "index": {
          "description": "Parsed query string information",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "queryString",
          "package": "http-proxy",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra path information sent by the client. The meaning varies slightly\n depending on backend; in a standalone server setting, this is most likely\n all information after the domain name. In a CGI application, this would be\n the information following the path to the CGI executable itself.\n Do not modify this raw value- modify pathInfo instead.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "rawPathInfo",
          "package": "http-proxy",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "description": "Extra path information sent by the client The meaning varies slightly depending on backend in standalone server setting this is most likely all information after the domain name In CGI application this would be the information following the path to the CGI executable itself Do not modify this raw value modify pathInfo instead",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "rawPathInfo",
          "package": "http-proxy",
          "partial": "Path Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:rawPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "rawQueryString",
          "package": "http-proxy",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "rawQueryString",
          "package": "http-proxy",
          "partial": "Query String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:rawQueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "remoteHost",
          "package": "http-proxy",
          "signature": "SockAddr",
          "type": "function"
        },
        "index": {
          "description": "The client host information",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "remoteHost",
          "package": "http-proxy",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:remoteHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "requestBody",
          "package": "http-proxy",
          "signature": "Source (ResourceT IO) ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "requestBody",
          "package": "http-proxy",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:requestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "requestHeaders",
          "package": "http-proxy",
          "signature": "RequestHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "requestHeaders",
          "package": "http-proxy",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:requestHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Proxy",
          "name": "requestMethod",
          "package": "http-proxy",
          "signature": "Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "requestMethod",
          "package": "http-proxy",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:requestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a HTTP and HTTPS proxy server on the specified port. This calls\n \u003ccode\u003e\u003ca\u003erunProxySettings\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003edefaultSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "runProxy",
          "package": "http-proxy",
          "signature": "Port -\u003e IO ()",
          "source": "src/Network-HTTP-Proxy.html#runProxy",
          "type": "function"
        },
        "index": {
          "description": "Run HTTP and HTTPS proxy server on the specified port This calls runProxySettings with defaultSettings",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "runProxy",
          "normalized": "Port-\u003eIO()",
          "package": "http-proxy",
          "partial": "Proxy",
          "signature": "Port-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:runProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a HTTP and HTTPS proxy server with the specified settings.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "runProxySettings",
          "package": "http-proxy",
          "signature": "Settings -\u003e IO ()",
          "source": "src/Network-HTTP-Proxy.html#runProxySettings",
          "type": "function"
        },
        "index": {
          "description": "Run HTTP and HTTPS proxy server with the specified settings",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "runProxySettings",
          "normalized": "Settings-\u003eIO()",
          "package": "http-proxy",
          "partial": "Proxy Settings",
          "signature": "Settings-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:runProxySettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerally the host requested by the user via the Host request header.\n Backends are free to provide alternative values as necessary. This value\n should not be used to construct URLs.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "serverName",
          "package": "http-proxy",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "description": "Generally the host requested by the user via the Host request header Backends are free to provide alternative values as necessary This value should not be used to construct URLs",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "serverName",
          "package": "http-proxy",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:serverName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe listening port that the server received this request on. It is\n possible for a server to listen on a non-numeric port (i.e., Unix named\n socket), in which case this value will be arbitrary. Like \u003ccode\u003e\u003ca\u003eserverName\u003c/a\u003e\u003c/code\u003e,\n this value should not be used in URL construction.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "serverPort",
          "package": "http-proxy",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "The listening port that the server received this request on It is possible for server to listen on non-numeric port i.e Unix named socket in which case this value will be arbitrary Like serverName this value should not be used in URL construction",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "serverPort",
          "package": "http-proxy",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:serverPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional username and password to use with upstream proxy.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "upstreamAuth",
          "package": "http-proxy",
          "signature": "Maybe (ByteString, ByteString)",
          "source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
          "type": "function"
        },
        "index": {
          "description": "Optional username and password to use with upstream proxy",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "upstreamAuth",
          "normalized": "Maybe(ByteString,ByteString)",
          "package": "http-proxy",
          "partial": "Auth",
          "signature": "Maybe(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:upstreamAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe upstream proxy's hostname.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "upstreamHost",
          "package": "http-proxy",
          "signature": "ByteString",
          "source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
          "type": "function"
        },
        "index": {
          "description": "The upstream proxy hostname",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "upstreamHost",
          "package": "http-proxy",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:upstreamHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe upstream proxy's port number.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "upstreamPort",
          "package": "http-proxy",
          "signature": "Int",
          "source": "src/Network-HTTP-Proxy.html#UpstreamProxy",
          "type": "function"
        },
        "index": {
          "description": "The upstream proxy port number",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "upstreamPort",
          "package": "http-proxy",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:upstreamPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location for arbitrary data to be shared by applications and middleware.\n\u003c/p\u003e",
          "module": "Network.HTTP.Proxy",
          "name": "vault",
          "package": "http-proxy",
          "signature": "Vault",
          "type": "function"
        },
        "index": {
          "description": "location for arbitrary data to be shared by applications and middleware",
          "hierarchy": "Network HTTP Proxy",
          "module": "Network.HTTP.Proxy",
          "name": "vault",
          "package": "http-proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-proxy/docs/Network-HTTP-Proxy.html#v:vault"
      }
    }
  ]
]