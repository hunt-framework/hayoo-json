[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code to use files on a remote FTP server as\n   Sources and Sinks.\n\u003c/p\u003e\u003cp\u003eUsing these functions looks like this:\n\u003c/p\u003e\u003cpre\u003e let uri = fromJust $ parseURI \"ftp://ftp.kernel.org/pub/README_ABOUT_BZ2_FILES\"\n runResourceT $ createSource uri $$ consume\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "module",
        "fct-source": "src/Network-FTP-Conduit.html",
        "fct-type": "module",
        "title": "Conduit"
      },
      "index": {
        "description": "This module contains code to use files on remote FTP server as Sources and Sinks Using these functions looks like this let uri fromJust parseURI ftp ftp.kernel.org pub README ABOUT BZ2 FILES runResourceT createSource uri consume",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "ftp-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#t:FTPException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown if a FTP-level protocol exception happens\n\u003c/p\u003e",
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "data",
        "fct-source": "src/Network-FTP-Conduit.html#FTPException",
        "fct-type": "data",
        "title": "FTPException"
      },
      "index": {
        "description": "Thrown if FTP-level protocol exception happens",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "FTPException",
        "normalized": "",
        "package": "ftp-conduit",
        "partial": "FTPException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:GeneralError",
      "description": {
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "GeneralError String",
        "fct-source": "src/Network-FTP-Conduit.html#FTPException",
        "fct-type": "function",
        "title": "GeneralError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "GeneralError",
        "normalized": "",
        "package": "ftp-conduit",
        "partial": "General Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:IncorrectScheme",
      "description": {
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "IncorrectScheme String",
        "fct-source": "src/Network-FTP-Conduit.html#FTPException",
        "fct-type": "function",
        "title": "IncorrectScheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "IncorrectScheme",
        "normalized": "",
        "package": "ftp-conduit",
        "partial": "Incorrect Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:SocketClosed",
      "description": {
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "SocketClosed",
        "fct-source": "src/Network-FTP-Conduit.html#FTPException",
        "fct-type": "function",
        "title": "SocketClosed"
      },
      "index": {
        "description": "",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "SocketClosed",
        "normalized": "",
        "package": "ftp-conduit",
        "partial": "Socket Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:UnexpectedCode",
      "description": {
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "UnexpectedCode Int ByteString",
        "fct-source": "src/Network-FTP-Conduit.html#FTPException",
        "fct-type": "function",
        "title": "UnexpectedCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "UnexpectedCode",
        "normalized": "",
        "package": "ftp-conduit",
        "partial": "Unexpected Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:createSink",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a conduit sink out of a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e. Uses the \u003ccode\u003eSTOR\u003c/code\u003e command.\n\u003c/p\u003e",
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "URI -\u003e Sink ByteString m ()",
        "fct-source": "src/Network-FTP-Conduit.html#createSink",
        "fct-type": "function",
        "title": "createSink"
      },
      "index": {
        "description": "Create conduit sink out of URI Uses the STOR command",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "createSink",
        "normalized": "URI-\u003eSink ByteString a()",
        "package": "ftp-conduit",
        "partial": "Sink",
        "signature": "URI-\u003eSink ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:createSource",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a conduit source out of a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e. Uses the \u003ccode\u003eRETR\u003c/code\u003e command.\n\u003c/p\u003e",
        "fct-module": "Network.FTP.Conduit",
        "fct-package": "ftp-conduit",
        "fct-signature": "URI -\u003e Source m ByteString",
        "fct-source": "src/Network-FTP-Conduit.html#createSource",
        "fct-type": "function",
        "title": "createSource"
      },
      "index": {
        "description": "Create conduit source out of URI Uses the RETR command",
        "hierarchy": "Network FTP Conduit",
        "module": "Network.FTP.Conduit",
        "name": "createSource",
        "normalized": "URI-\u003eSource a ByteString",
        "package": "ftp-conduit",
        "partial": "Source",
        "signature": "URI-\u003eSource m ByteString"
      }
    }
  }
]