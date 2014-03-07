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
        "word": "hGelf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Gelf",
          "name": "Gelf",
          "package": "hGelf",
          "source": "src/Network-Gelf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Gelf",
          "module": "Network.Gelf",
          "name": "Gelf",
          "package": "hGelf",
          "partial": "Gelf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hGelf/docs/Network-Gelf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a log message as a GELF message.\n\u003c/p\u003e\u003cp\u003eThis function wraps a given log message in a GELF structure. It creates the\n JSON object, converts it to a ByteString and GZips the result.\n If the resulting ByteString is longer than the maximal chunk size,\n the GELF message is split up into chunks, each at most chunk size in length.\n\u003c/p\u003e",
          "module": "Network.Gelf",
          "name": "encode",
          "package": "hGelf",
          "signature": "Int-\u003e Text-\u003e Maybe Text-\u003e String-\u003e Integer-\u003e Maybe Text-\u003e Maybe Integer-\u003e [(Text, Maybe Text)]-\u003e [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "Encode log message as GELF message This function wraps given log message in GELF structure It creates the JSON object converts it to ByteString and GZips the result If the resulting ByteString is longer than the maximal chunk size the GELF message is split up into chunks each at most chunk size in length",
          "hierarchy": "Network Gelf",
          "module": "Network.Gelf",
          "name": "encode",
          "normalized": "Int-\u003eText-\u003eMaybe Text-\u003eString-\u003eInteger-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003e[ByteString]",
          "package": "hGelf",
          "signature": "Int-\u003eText-\u003eMaybe Text-\u003eString-\u003eInteger-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hGelf/docs/Network-Gelf.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a log message to a server accepting Graylog2 messages.\n\u003c/p\u003e",
          "module": "Network.Gelf",
          "name": "send",
          "package": "hGelf",
          "signature": "HostName-\u003e String-\u003e Int-\u003e Text-\u003e Maybe Text-\u003e Maybe Text-\u003e Maybe Integer-\u003e [(Text, Maybe Text)]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send log message to server accepting Graylog2 messages",
          "hierarchy": "Network Gelf",
          "module": "Network.Gelf",
          "name": "send",
          "normalized": "HostName-\u003eString-\u003eInt-\u003eText-\u003eMaybe Text-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003eIO()",
          "package": "hGelf",
          "signature": "HostName-\u003eString-\u003eInt-\u003eText-\u003eMaybe Text-\u003eMaybe Text-\u003eMaybe Integer-\u003e[(Text,Maybe Text)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hGelf/docs/Network-Gelf.html#v:send"
      }
    }
  ]
]