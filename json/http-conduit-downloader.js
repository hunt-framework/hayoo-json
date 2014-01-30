[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTTP downloader tailored for web-crawler needs.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Handles all possible http-conduit exceptions and returns\n    human readable error messages.\n\u003c/li\u003e\u003cli\u003e Handles some web server bugs (returning \u003ccode\u003edeflate\u003c/code\u003e data instead of \u003ccode\u003egzip\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Ignores invalid SSL sertificates.\n\u003c/li\u003e\u003cli\u003e Receives data in 32k blocks internally to reduce memory fragmentation\n    on many parallel downloads.\n\u003c/li\u003e\u003cli\u003e Download timeout.\n\u003c/li\u003e\u003cli\u003e Total download size limit.\n\u003c/li\u003e\u003cli\u003e Returns HTTP headers for subsequent redownloads\n    and handles \u003ccode\u003eNot modified\u003c/code\u003e results.\n\u003c/li\u003e\u003cli\u003e Can be used with external DNS resolver (hsdns-cache for example).\n\u003c/li\u003e\u003cli\u003e Keep-alive connections pool (thanks to http-conduit).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTypical workflow in crawler:\n\u003c/p\u003e\u003cpre\u003e\n  withDnsCache $  c -\u003e withDownloader $  d -\u003e do\n  ... -- got URL from queue\n  ra \u003c- resolveA c $ hostNameFromUrl url\n  case ra of\n      Left err -\u003e ... -- uh oh, bad host\n      Right ha -\u003e do\n          ... -- crawler politeness stuff (rate limits, domain queues)\n          dr \u003c- download d url (Just ha) opts\n          case dr of\n              DROK dat redownloadOpts -\u003e\n                  ... -- analyze data, save redownloadOpts for next download\n              DRRedirect .. -\u003e ...\n              DRNotModified -\u003e ...\n              DRError e -\u003e ...\n\u003c/pre\u003e\u003cp\u003eIt's highly recommended to use\n \u003ca\u003ehttp://hackage.haskell.org/package/hsdns-cache\u003c/a\u003e\n for DNS resolution since \u003ccode\u003egetAddrInfo\u003c/code\u003e used in \u003ccode\u003ehttp-conduit\u003c/code\u003e can be\n buggy and ineffective when it needs to resolve many hosts per second for\n a long time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html",
        "fct-type": "module",
        "title": "Downloader"
      },
      "index": {
        "description": "HTTP downloader tailored for web-crawler needs Handles all possible http-conduit exceptions and returns human readable error messages Handles some web server bugs returning deflate data instead of gzip Ignores invalid SSL sertificates Receives data in blocks internally to reduce memory fragmentation on many parallel downloads Download timeout Total download size limit Returns HTTP headers for subsequent redownloads and handles Not modified results Can be used with external DNS resolver hsdns-cache for example Keep-alive connections pool thanks to http-conduit Typical workflow in crawler withDnsCache withDownloader do got URL from queue ra resolveA hostNameFromUrl url case ra of Left err uh oh bad host Right ha do crawler politeness stuff rate limits domain queues dr download url Just ha opts case dr of DROK dat redownloadOpts analyze data save redownloadOpts for next download DRRedirect DRNotModified DRError It highly recommended to use http hackage.haskell.org package hsdns-cache for DNS resolution since getAddrInfo used in http-conduit can be buggy and ineffective when it needs to resolve many hosts per second for long time",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "Downloader",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Downloader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#t:DownloadOptions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIf-None-Match\u003c/code\u003e and/or \u003ccode\u003eIf-Modified-Since\u003c/code\u003e headers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "type",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloadOptions",
        "fct-type": "type",
        "title": "DownloadOptions"
      },
      "index": {
        "description": "If-None-Match and or If-Modified-Since headers",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DownloadOptions",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Download Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#t:DownloadResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of \u003ccode\u003e\u003ca\u003edownload\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloadResult",
        "fct-type": "data",
        "title": "DownloadResult"
      },
      "index": {
        "description": "Result of download operation",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DownloadResult",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Download Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#t:Downloader",
      "description": {
        "fct-descr": "\u003cp\u003eKeeps http-conduit \u003ccode\u003eManager\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDownloaderSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#Downloader",
        "fct-type": "data",
        "title": "Downloader"
      },
      "index": {
        "description": "Keeps http-conduit Manager and DownloaderSettings",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "Downloader",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Downloader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#t:DownloaderSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings used in downloader.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloaderSettings",
        "fct-type": "data",
        "title": "DownloaderSettings"
      },
      "index": {
        "description": "Settings used in downloader",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DownloaderSettings",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Downloader Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:DRError",
      "description": {
        "fct-descr": "\u003cp\u003eError\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DRError String",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloadResult",
        "fct-type": "function",
        "title": "DRError"
      },
      "index": {
        "description": "Error",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DRError",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "DRError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:DRNotModified",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP 304 Not Modified\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DRNotModified",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloadResult",
        "fct-type": "function",
        "title": "DRNotModified"
      },
      "index": {
        "description": "HTTP Not Modified",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DRNotModified",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "DRNot Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:DROK",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessful download with data and options for next download.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DROK ByteString DownloadOptions",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloadResult",
        "fct-type": "function",
        "title": "DROK"
      },
      "index": {
        "description": "Successful download with data and options for next download",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DROK",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "DROK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:DRRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect URL\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DRRedirect String",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloadResult",
        "fct-type": "function",
        "title": "DRRedirect"
      },
      "index": {
        "description": "Redirect URL",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DRRedirect",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "DRRedirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:DownloaderSettings",
      "description": {
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DownloaderSettings",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloaderSettings",
        "fct-type": "function",
        "title": "DownloaderSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "DownloaderSettings",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Downloader Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:download",
      "description": {
        "fct-descr": "\u003cp\u003ePerform download\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "Downloader-\u003e String-\u003e Maybe HostAddress-\u003e DownloadOptions-\u003e IO DownloadResult",
        "fct-type": "function",
        "title": "download"
      },
      "index": {
        "description": "Perform download",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "download",
        "normalized": "Downloader-\u003eString-\u003eMaybe HostAddress-\u003eDownloadOptions-\u003eIO DownloadResult",
        "package": "http-conduit-downloader",
        "partial": "",
        "signature": "Downloader-\u003eString-\u003eMaybe HostAddress-\u003eDownloadOptions-\u003eIO DownloadResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:downloadG",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edownload\u003c/a\u003e\u003c/code\u003e\n with ability to modify http-conduit \u003ccode\u003eRequest\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "(Request (ResourceT IO) -\u003e ResourceT IO (Request (ResourceT IO)))-\u003e Downloader-\u003e String-\u003e Maybe HostAddress-\u003e DownloadOptions-\u003e IO DownloadResult",
        "fct-type": "function",
        "title": "downloadG"
      },
      "index": {
        "description": "Generic version of download with ability to modify http-conduit Request",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "downloadG",
        "normalized": "(Request(ResourceT IO)-\u003eResourceT IO(Request(ResourceT IO)))-\u003eDownloader-\u003eString-\u003eMaybe HostAddress-\u003eDownloadOptions-\u003eIO DownloadResult",
        "package": "http-conduit-downloader",
        "partial": "",
        "signature": "(Request(ResourceT IO)-\u003eResourceT IO(Request(ResourceT IO)))-\u003eDownloader-\u003eString-\u003eMaybe HostAddress-\u003eDownloadOptions-\u003eIO DownloadResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:dsManagerSettings",
      "description": {
        "fct-descr": "\u003cp\u003eConduit \u003ccode\u003eManager\u003c/code\u003e settings.\n Default: ManagerSettings with SSL certificate checks removed.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "ManagerSettings",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloaderSettings",
        "fct-type": "function",
        "title": "dsManagerSettings"
      },
      "index": {
        "description": "Conduit Manager settings Default ManagerSettings with SSL certificate checks removed",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "dsManagerSettings",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Manager Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:dsMaxDownloadSize",
      "description": {
        "fct-descr": "\u003cp\u003eDownload size limit. Default: 10MB.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "Int",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloaderSettings",
        "fct-type": "function",
        "title": "dsMaxDownloadSize"
      },
      "index": {
        "description": "Download size limit Default MB",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "dsMaxDownloadSize",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Max Download Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:dsTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eDownload timeout. Default: 30 seconds.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "Int",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloaderSettings",
        "fct-type": "function",
        "title": "dsTimeout"
      },
      "index": {
        "description": "Download timeout Default seconds",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "dsTimeout",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:dsUserAgent",
      "description": {
        "fct-descr": "\u003cp\u003eUser agent string. Default: \u003ccode\u003e\"Mozilla/5.0 (compatible; HttpConduitDownloader/1.0; +http://hackage.haskell.org/package/http-conduit-downloader)\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe a good crawler. Provide your User-Agent please.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#DownloaderSettings",
        "fct-type": "function",
        "title": "dsUserAgent"
      },
      "index": {
        "description": "User agent string Default Mozilla compatible HttpConduitDownloader http hackage.haskell.org package http-conduit-downloader Be good crawler Provide your User-Agent please",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "dsUserAgent",
        "normalized": "",
        "package": "http-conduit-downloader",
        "partial": "User Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:newDownloader",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eDownloader\u003c/a\u003e\u003c/code\u003e with settings.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DownloaderSettings -\u003e IO Downloader",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#newDownloader",
        "fct-type": "function",
        "title": "newDownloader"
      },
      "index": {
        "description": "Create Downloader with settings",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "newDownloader",
        "normalized": "DownloaderSettings-\u003eIO Downloader",
        "package": "http-conduit-downloader",
        "partial": "Downloader",
        "signature": "DownloaderSettings-\u003eIO Downloader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003ePerform HTTP POST.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "Downloader -\u003e String -\u003e Maybe HostAddress -\u003e ByteString -\u003e IO DownloadResult",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Perform HTTP POST",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "post",
        "normalized": "Downloader-\u003eString-\u003eMaybe HostAddress-\u003eByteString-\u003eIO DownloadResult",
        "package": "http-conduit-downloader",
        "partial": "",
        "signature": "Downloader-\u003eString-\u003eMaybe HostAddress-\u003eByteString-\u003eIO DownloadResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:postRequest",
      "description": {
        "fct-descr": "\u003cp\u003eMake HTTP POST request.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "ByteString -\u003e Request a -\u003e Request b",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#postRequest",
        "fct-type": "function",
        "title": "postRequest"
      },
      "index": {
        "description": "Make HTTP POST request",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "postRequest",
        "normalized": "ByteString-\u003eRequest a-\u003eRequest b",
        "package": "http-conduit-downloader",
        "partial": "Request",
        "signature": "ByteString-\u003eRequest a-\u003eRequest b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:sinkByteString",
      "description": {
        "fct-descr": "\u003cp\u003eSink data using 32k buffers to reduce memory fragmentation.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if downloaded too much data.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "Int -\u003e Sink ByteString m (Maybe ByteString)",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#sinkByteString",
        "fct-type": "function",
        "title": "sinkByteString"
      },
      "index": {
        "description": "Sink data using buffers to reduce memory fragmentation Returns Nothing if downloaded too much data",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "sinkByteString",
        "normalized": "Int-\u003eSink ByteString a(Maybe ByteString)",
        "package": "http-conduit-downloader",
        "partial": "Byte String",
        "signature": "Int-\u003eSink ByteString m(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:urlGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eDownload single URL with default \u003ccode\u003e\u003ca\u003eDownloaderSettings\u003c/a\u003e\u003c/code\u003e.\n Fails if result is not \u003ccode\u003e\u003ca\u003eDROK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "String -\u003e IO ByteString",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#urlGetContents",
        "fct-type": "function",
        "title": "urlGetContents"
      },
      "index": {
        "description": "Download single URL with default DownloaderSettings Fails if result is not DROK",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "urlGetContents",
        "normalized": "String-\u003eIO ByteString",
        "package": "http-conduit-downloader",
        "partial": "Get Contents",
        "signature": "String-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:urlGetContentsPost",
      "description": {
        "fct-descr": "\u003cp\u003ePost data and download single URL with default \u003ccode\u003e\u003ca\u003eDownloaderSettings\u003c/a\u003e\u003c/code\u003e.\n Fails if result is not \u003ccode\u003e\u003ca\u003eDROK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "String -\u003e ByteString -\u003e IO ByteString",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#urlGetContentsPost",
        "fct-type": "function",
        "title": "urlGetContentsPost"
      },
      "index": {
        "description": "Post data and download single URL with default DownloaderSettings Fails if result is not DROK",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "urlGetContentsPost",
        "normalized": "String-\u003eByteString-\u003eIO ByteString",
        "package": "http-conduit-downloader",
        "partial": "Get Contents Post",
        "signature": "String-\u003eByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:withDownloader",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eDownloader\u003c/a\u003e\u003c/code\u003e, use it in the provided function,\n and then release it.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "(Downloader -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#withDownloader",
        "fct-type": "function",
        "title": "withDownloader"
      },
      "index": {
        "description": "Create new Downloader use it in the provided function and then release it",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "withDownloader",
        "normalized": "(Downloader-\u003eIO a)-\u003eIO a",
        "package": "http-conduit-downloader",
        "partial": "Downloader",
        "signature": "(Downloader-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-conduit-downloader/docs/Network-HTTP-Conduit-Downloader.html#v:withDownloaderSettings",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eDownloader\u003c/a\u003e\u003c/code\u003e with provided settings,\n use it in the provided function, and then release it.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Conduit.Downloader",
        "fct-package": "http-conduit-downloader",
        "fct-signature": "DownloaderSettings -\u003e (Downloader -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-HTTP-Conduit-Downloader.html#withDownloaderSettings",
        "fct-type": "function",
        "title": "withDownloaderSettings"
      },
      "index": {
        "description": "Create new Downloader with provided settings use it in the provided function and then release it",
        "hierarchy": "Network HTTP Conduit Downloader",
        "module": "Network.HTTP.Conduit.Downloader",
        "name": "withDownloaderSettings",
        "normalized": "DownloaderSettings-\u003e(Downloader-\u003eIO a)-\u003eIO a",
        "package": "http-conduit-downloader",
        "partial": "Downloader Settings",
        "signature": "DownloaderSettings-\u003e(Downloader-\u003eIO a)-\u003eIO a"
      }
    }
  }
]