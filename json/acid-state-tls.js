[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the same functionality as \u003ca\u003eData.Acid.Remote\u003c/a\u003e but\nover a secured TLS socket.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "module",
        "fct-source": "src/Data-Acid-Remote-TLS.html",
        "fct-type": "module",
        "title": "TLS"
      },
      "index": {
        "description": "This module provides the same functionality as Data.Acid.Remote but over secured TLS socket",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "TLS",
        "normalized": "",
        "package": "acid-state-tls",
        "partial": "TLS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#v:acidServerTLS",
      "description": {
        "fct-descr": "\u003cp\u003eAccept connections on \u003ccode\u003eport\u003c/code\u003e and handle requests using the given \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e.\n     This call doesn't return.\n\u003c/p\u003e\u003cp\u003eThe connection is secured using TLS/SSL.\n\u003c/p\u003e\u003cp\u003eOn Unix&#174;-like systems you can use\u003ccode\u003e\u003ca\u003eUnixSocket\u003c/a\u003e\u003c/code\u003e to communicate\n     using a socket file. To control access, you can set the permissions of\n     the parent directory which contains the socket file.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eopenRemoteStateTLS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esharedSecretCheck\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "FilePath-\u003e FilePath-\u003e (CommChannel -\u003e IO Bool)-\u003e PortID-\u003e AcidState st-\u003e IO ()",
        "fct-type": "function",
        "title": "acidServerTLS"
      },
      "index": {
        "description": "Accept connections on port and handle requests using the given AcidState This call doesn return The connection is secured using TLS SSL On Unix like systems you can use UnixSocket to communicate using socket file To control access you can set the permissions of the parent directory which contains the socket file see also openRemoteStateTLS and sharedSecretCheck",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "acidServerTLS",
        "normalized": "FilePath-\u003eFilePath-\u003e(CommChannel-\u003eIO Bool)-\u003ePortID-\u003eAcidState a-\u003eIO()",
        "package": "acid-state-tls",
        "partial": "Server TLS",
        "signature": "FilePath-\u003eFilePath-\u003e(CommChannel-\u003eIO Bool)-\u003ePortID-\u003eAcidState st-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#v:openRemoteStateTLS",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to an acid-state server which is sharing an \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe connection is secured using SSL/TLS.\n\u003c/p\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "(CommChannel -\u003e IO ())-\u003e HostName-\u003e PortID-\u003e IO (AcidState st)",
        "fct-type": "function",
        "title": "openRemoteStateTLS"
      },
      "index": {
        "description": "Connect to an acid-state server which is sharing an AcidState The connection is secured using SSL TLS",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "openRemoteStateTLS",
        "normalized": "(CommChannel-\u003eIO())-\u003eHostName-\u003ePortID-\u003eIO(AcidState a)",
        "package": "acid-state-tls",
        "partial": "Remote State TLS",
        "signature": "(CommChannel-\u003eIO())-\u003eHostName-\u003ePortID-\u003eIO(AcidState st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#v:sharedSecretCheck",
      "description": {
        "fct-descr": "\u003cp\u003echeck that the client knows a shared secret.\n\u003c/p\u003e\u003cp\u003eThe function takes a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of shared secrets. If a client knows any\nof them, it is considered to be trusted.\n\u003c/p\u003e\u003cp\u003eThe shared secret is any \u003ccode\u003eByteString\u003c/code\u003e of your choice.\n\u003c/p\u003e\u003cp\u003eIf you give each client a different shared secret then you can\nrevoke access individually.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003esharedSecretPerform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "Set ByteString-\u003e CommChannel-\u003e IO Bool",
        "fct-type": "function",
        "title": "sharedSecretCheck"
      },
      "index": {
        "description": "check that the client knows shared secret The function takes Set of shared secrets If client knows any of them it is considered to be trusted The shared secret is any ByteString of your choice If you give each client different shared secret then you can revoke access individually see also sharedSecretPerform",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "sharedSecretCheck",
        "normalized": "Set ByteString-\u003eCommChannel-\u003eIO Bool",
        "package": "acid-state-tls",
        "partial": "Secret Check",
        "signature": "Set ByteString-\u003eCommChannel-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#v:sharedSecretPerform",
      "description": {
        "fct-descr": "\u003cp\u003eattempt to authenticate with the server using a shared secret.\n\u003c/p\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "ByteString-\u003e CommChannel-\u003e IO ()",
        "fct-type": "function",
        "title": "sharedSecretPerform"
      },
      "index": {
        "description": "attempt to authenticate with the server using shared secret",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "sharedSecretPerform",
        "normalized": "ByteString-\u003eCommChannel-\u003eIO()",
        "package": "acid-state-tls",
        "partial": "Secret Perform",
        "signature": "ByteString-\u003eCommChannel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#v:skipAuthenticationCheck",
      "description": {
        "fct-descr": "\u003cp\u003eskip server-side authentication checking entirely. \n\u003c/p\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "CommChannel -\u003e IO Bool",
        "fct-type": "function",
        "title": "skipAuthenticationCheck"
      },
      "index": {
        "description": "skip server-side authentication checking entirely",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "skipAuthenticationCheck",
        "normalized": "CommChannel-\u003eIO Bool",
        "package": "acid-state-tls",
        "partial": "Authentication Check",
        "signature": "CommChannel-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acid-state-tls/docs/Data-Acid-Remote-TLS.html#v:skipAuthenticationPerform",
      "description": {
        "fct-descr": "\u003cp\u003eskip client-side authentication entirely. \n\u003c/p\u003e",
        "fct-module": "Data.Acid.Remote.TLS",
        "fct-package": "acid-state-tls",
        "fct-signature": "CommChannel -\u003e IO ()",
        "fct-type": "function",
        "title": "skipAuthenticationPerform"
      },
      "index": {
        "description": "skip client-side authentication entirely",
        "hierarchy": "Data Acid Remote TLS",
        "module": "Data.Acid.Remote.TLS",
        "name": "skipAuthenticationPerform",
        "normalized": "CommChannel-\u003eIO()",
        "package": "acid-state-tls",
        "partial": "Authentication Perform",
        "signature": "CommChannel-\u003eIO()"
      }
    }
  }
]