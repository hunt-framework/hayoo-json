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
        "word": "openssl-streams"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenience functions for interfacing \u003ccode\u003eio-streams\u003c/code\u003e\n with \u003ccode\u003eHsOpenSSL\u003c/code\u003e. It is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e\n import qualified \u003ca\u003eOpenSSL\u003c/a\u003e as SSL\n import qualified \u003ca\u003eOpenSSL.Session\u003c/a\u003e as SSL\n import qualified \u003ca\u003eSystem.IO.Streams.SSL\u003c/a\u003e as SSLStreams\n\n example :: IO (\u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e)\n example = SSL.\u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e $ do\n     ctx \u003c- SSL.\u003ccode\u003e\u003ca\u003econtext\u003c/a\u003e\u003c/code\u003e\n     SSL.\u003ccode\u003e\u003ca\u003econtextSetDefaultCiphers\u003c/a\u003e\u003c/code\u003e ctx\n\n     -- Note: the location of the system certificates is system-dependent,\n     -- on Linux systems this is usually \"/etc/ssl/certs\". This\n     -- step is optional if you choose to disable certificate verification\n     -- (not recommended!).\n     SSL.\u003ccode\u003e\u003ca\u003econtextSetCADirectory\u003c/a\u003e\u003c/code\u003e ctx \"/etc/ssl/certs\"\n     SSL.\u003ccode\u003e\u003ca\u003econtextSetVerificationMode\u003c/a\u003e\u003c/code\u003e ctx $\n         SSL.\u003ccode\u003e\u003ca\u003eVerifyPeer\u003c/a\u003e\u003c/code\u003e True True Nothing\n     SSLStreams.\u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e ctx \u003ca\u003efoo.com\u003c/a\u003e 4444\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.IO.Streams.SSL",
          "name": "SSL",
          "package": "openssl-streams",
          "source": "src/System-IO-Streams-SSL.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides convenience functions for interfacing io-streams with HsOpenSSL It is intended to be imported qualified e.g import qualified OpenSSL as SSL import qualified OpenSSL.Session as SSL import qualified System.IO.Streams.SSL as SSLStreams example IO InputStream ByteString OutputStream ByteString example SSL withOpenSSL do ctx SSL context SSL contextSetDefaultCiphers ctx Note the location of the system certificates is system-dependent on Linux systems this is usually etc ssl certs This step is optional if you choose to disable certificate verification not recommended SSL contextSetCADirectory ctx etc ssl certs SSL contextSetVerificationMode ctx SSL VerifyPeer True True Nothing SSLStreams connect ctx foo.com",
          "hierarchy": "System IO Streams SSL",
          "module": "System.IO.Streams.SSL",
          "name": "SSL",
          "package": "openssl-streams",
          "partial": "SSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/openssl-streams/docs/System-IO-Streams-SSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for initiating an SSL connection to the given\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePortNumber\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e combination.\n\u003c/p\u003e\u003cp\u003eNote that sending an end-of-file to the returned \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e will not\n close the underlying SSL connection; to do that, call:\n\u003c/p\u003e\u003cpre\u003e\n SSL.\u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e ssl SSL.\u003ccode\u003e\u003ca\u003eUnidirectional\u003c/a\u003e\u003c/code\u003e\n maybe (return ()) \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e $ SSL.\u003ccode\u003e\u003ca\u003esslSocket\u003c/a\u003e\u003c/code\u003e ssl\n\u003c/pre\u003e\u003cp\u003eon the returned \u003ccode\u003e\u003ca\u003eSSL\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "System.IO.Streams.SSL",
          "name": "connect",
          "package": "openssl-streams",
          "signature": "SSLContext-\u003e HostName-\u003e PortNumber-\u003e IO (InputStream ByteString, OutputStream ByteString, SSL)",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for initiating an SSL connection to the given HostName PortNumber combination Note that sending an end-of-file to the returned OutputStream will not close the underlying SSL connection to do that call SSL shutdown ssl SSL Unidirectional maybe return close SSL sslSocket ssl on the returned SSL object",
          "hierarchy": "System IO Streams SSL",
          "module": "System.IO.Streams.SSL",
          "name": "connect",
          "normalized": "SSLContext-\u003eHostName-\u003ePortNumber-\u003eIO(InputStream ByteString,OutputStream ByteString,SSL)",
          "package": "openssl-streams",
          "signature": "SSLContext-\u003eHostName-\u003ePortNumber-\u003eIO(InputStream ByteString,OutputStream ByteString,SSL)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openssl-streams/docs/System-IO-Streams-SSL.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an existing HsOpenSSL \u003ccode\u003e\u003ca\u003eSSL\u003c/a\u003e\u003c/code\u003e connection, produces an \u003ccode\u003e\u003ca\u003eInputStream\u003c/a\u003e\u003c/code\u003e /\n \u003ccode\u003e\u003ca\u003eOutputStream\u003c/a\u003e\u003c/code\u003e pair.\n\u003c/p\u003e",
          "module": "System.IO.Streams.SSL",
          "name": "sslToStreams",
          "package": "openssl-streams",
          "signature": "SSL-\u003e IO (InputStream ByteString, OutputStream ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Given an existing HsOpenSSL SSL connection produces an InputStream OutputStream pair",
          "hierarchy": "System IO Streams SSL",
          "module": "System.IO.Streams.SSL",
          "name": "sslToStreams",
          "normalized": "SSL-\u003eIO(InputStream ByteString,OutputStream ByteString)",
          "package": "openssl-streams",
          "partial": "To Streams",
          "signature": "SSL-\u003eIO(InputStream ByteString,OutputStream ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openssl-streams/docs/System-IO-Streams-SSL.html#v:sslToStreams"
      }
    }
  ]
]