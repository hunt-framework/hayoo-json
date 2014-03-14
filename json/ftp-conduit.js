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
        "word": "ftp-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code to use files on a remote FTP server as\n   Sources and Sinks.\n\u003c/p\u003e\u003cp\u003eUsing these functions looks like this:\n\u003c/p\u003e\u003cpre\u003e let uri = fromJust $ parseURI \"ftp://ftp.kernel.org/pub/README_ABOUT_BZ2_FILES\"\n runResourceT $ createSource uri $$ consume\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.FTP.Conduit",
          "name": "Conduit",
          "package": "ftp-conduit",
          "source": "src/Network-FTP-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains code to use files on remote FTP server as Sources and Sinks Using these functions looks like this let uri fromJust parseURI ftp ftp.kernel.org pub README ABOUT BZ2 FILES runResourceT createSource uri consume",
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "Conduit",
          "package": "ftp-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown if a FTP-level protocol exception happens\n\u003c/p\u003e",
          "module": "Network.FTP.Conduit",
          "name": "FTPException",
          "package": "ftp-conduit",
          "source": "src/Network-FTP-Conduit.html#FTPException",
          "type": "data"
        },
        "index": {
          "description": "Thrown if FTP-level protocol exception happens",
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "FTPException",
          "package": "ftp-conduit",
          "partial": "FTPException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#t:FTPException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Conduit",
          "name": "GeneralError",
          "package": "ftp-conduit",
          "signature": "GeneralError String",
          "source": "src/Network-FTP-Conduit.html#FTPException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "GeneralError",
          "package": "ftp-conduit",
          "partial": "General Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:GeneralError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Conduit",
          "name": "IncorrectScheme",
          "package": "ftp-conduit",
          "signature": "IncorrectScheme String",
          "source": "src/Network-FTP-Conduit.html#FTPException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "IncorrectScheme",
          "package": "ftp-conduit",
          "partial": "Incorrect Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:IncorrectScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Conduit",
          "name": "SocketClosed",
          "package": "ftp-conduit",
          "signature": "SocketClosed",
          "source": "src/Network-FTP-Conduit.html#FTPException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "SocketClosed",
          "package": "ftp-conduit",
          "partial": "Socket Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:SocketClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FTP.Conduit",
          "name": "UnexpectedCode",
          "package": "ftp-conduit",
          "signature": "UnexpectedCode Int ByteString",
          "source": "src/Network-FTP-Conduit.html#FTPException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "UnexpectedCode",
          "package": "ftp-conduit",
          "partial": "Unexpected Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:UnexpectedCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a conduit sink out of a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e. Uses the \u003ccode\u003eSTOR\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Network.FTP.Conduit",
          "name": "createSink",
          "package": "ftp-conduit",
          "signature": "URI -\u003e Sink ByteString m ()",
          "source": "src/Network-FTP-Conduit.html#createSink",
          "type": "function"
        },
        "index": {
          "description": "Create conduit sink out of URI Uses the STOR command",
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "createSink",
          "normalized": "URI-\u003eSink ByteString a()",
          "package": "ftp-conduit",
          "partial": "Sink",
          "signature": "URI-\u003eSink ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:createSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a conduit source out of a \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e. Uses the \u003ccode\u003eRETR\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Network.FTP.Conduit",
          "name": "createSource",
          "package": "ftp-conduit",
          "signature": "URI -\u003e Source m ByteString",
          "source": "src/Network-FTP-Conduit.html#createSource",
          "type": "function"
        },
        "index": {
          "description": "Create conduit source out of URI Uses the RETR command",
          "hierarchy": "Network FTP Conduit",
          "module": "Network.FTP.Conduit",
          "name": "createSource",
          "normalized": "URI-\u003eSource a ByteString",
          "package": "ftp-conduit",
          "partial": "Source",
          "signature": "URI-\u003eSource m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ftp-conduit/docs/Network-FTP-Conduit.html#v:createSource"
      }
    }
  ]
]