[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hGelf/docs/Network-Gelf.html#",
      "description": {
        "fct-module": "Network.Gelf",
        "fct-package": "hGelf",
        "fct-signature": "module",
        "fct-source": "src/Network-Gelf.html",
        "fct-type": "module",
        "title": "Gelf"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Gelf",
        "module": "Network.Gelf",
        "name": "Gelf",
        "normalized": "",
        "package": "hGelf",
        "partial": "Gelf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hGelf/docs/Network-Gelf.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a log message as a GELF message.\n\u003c/p\u003e\u003cp\u003eThis function wraps a given log message in a GELF structure. It creates the\n JSON object, converts it to a ByteString and GZips the result.\n If the resulting ByteString is longer than the maximal chunk size,\n the GELF message is split up into chunks, each at most chunk size in length.\n\u003c/p\u003e",
        "fct-module": "Network.Gelf",
        "fct-package": "hGelf",
        "fct-signature": "Int-\u003e Text-\u003e Maybe Text-\u003e String-\u003e Integer-\u003e Maybe Text-\u003e Maybe Integer-\u003e [(Text, Maybe Text)]-\u003e [ByteString]",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode log message as GELF message This function wraps given log message in GELF structure It creates the JSON object converts it to ByteString and GZips the result If the resulting ByteString is longer than the maximal chunk size the GELF message is split up into chunks each at most chunk size in length",
        "hierarchy": "Network Gelf",
        "module": "Network.Gelf",
        "name": "encode",
        "normalized": "Int-\u003eText-\u003eMaybe Text-\u003eString-\u003eInteger-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003e[ByteString]",
        "package": "hGelf",
        "partial": "",
        "signature": "Int-\u003eText-\u003eMaybe Text-\u003eString-\u003eInteger-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hGelf/docs/Network-Gelf.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a log message to a server accepting Graylog2 messages.\n\u003c/p\u003e",
        "fct-module": "Network.Gelf",
        "fct-package": "hGelf",
        "fct-signature": "HostName-\u003e String-\u003e Int-\u003e Text-\u003e Maybe Text-\u003e Maybe Text-\u003e Maybe Integer-\u003e [(Text, Maybe Text)]-\u003e IO ()",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send log message to server accepting Graylog2 messages",
        "hierarchy": "Network Gelf",
        "module": "Network.Gelf",
        "name": "send",
        "normalized": "HostName-\u003eString-\u003eInt-\u003eText-\u003eMaybe Text-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003eIO()",
        "package": "hGelf",
        "partial": "",
        "signature": "HostName-\u003eString-\u003eInt-\u003eText-\u003eMaybe Text-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003eIO()"
      }
    }
  }
]