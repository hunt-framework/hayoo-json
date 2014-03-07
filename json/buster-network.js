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
        "word": "buster-network"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBehaviours for HTTP requests.  Looks for Events named\n   HTTP/\u003cem\u003eMethodName\u003c/em\u003e with event data of [EString uri, EByteString senddata, EStringL headers] and consumes them.  Produces\n   Events named HTTPResponse with source httpBehaviour/\u003cem\u003eMethodName\u003c/em\u003e and the contents of the response as the event data in a ByteString.\n   They also produce Exceptions with the same source and name ConnectionError if there is no network connection or HTTP Service\n   or HTTPErrorResponseCode if the Server sent back an error code or ParseFailure if the URI didn't parse.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "App.Behaviours.HTTP",
          "name": "HTTP",
          "package": "buster-network",
          "source": "src/App-Behaviours-HTTP.html",
          "type": "module"
        },
        "index": {
          "description": "Behaviours for HTTP requests Looks for Events named HTTP MethodName with event data of EString uri EByteString senddata EStringL headers and consumes them Produces Events named HTTPResponse with source httpBehaviour MethodName and the contents of the response as the event data in ByteString They also produce Exceptions with the same source and name ConnectionError if there is no network connection or HTTP Service or HTTPErrorResponseCode if the Server sent back an error code or ParseFailure if the URI didn parse",
          "hierarchy": "App Behaviours HTTP",
          "module": "App.Behaviours.HTTP",
          "name": "HTTP",
          "package": "buster-network",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "XmlRpc",
          "package": "buster-network",
          "source": "src/App-Behaviours-XmlRpc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "XmlRpc",
          "package": "buster-network",
          "partial": "Xml Rpc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "edata2value",
          "package": "buster-network",
          "signature": "EData a -\u003e Value",
          "source": "src/App-Behaviours-XmlRpc.html#edata2value",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "edata2value",
          "normalized": "EData a-\u003eValue",
          "package": "buster-network",
          "signature": "EData a-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:edata2value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "edata2valueNX",
          "package": "buster-network",
          "signature": "EData a -\u003e Value",
          "source": "src/App-Behaviours-XmlRpc.html#edata2valueNX",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "edata2valueNX",
          "normalized": "EData a-\u003eValue",
          "package": "buster-network",
          "partial": "NX",
          "signature": "EData a-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:edata2valueNX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "value2edata",
          "package": "buster-network",
          "signature": "Value -\u003e EData a",
          "source": "src/App-Behaviours-XmlRpc.html#value2edata",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "value2edata",
          "normalized": "Value-\u003eEData a",
          "package": "buster-network",
          "signature": "Value-\u003eEData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:value2edata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcMethodBehaviour",
          "package": "buster-network",
          "signature": "String -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-XmlRpc.html#xmlrpcMethodBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcMethodBehaviour",
          "normalized": "String-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster-network",
          "partial": "Method Behaviour",
          "signature": "String-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcMethodBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcMethodBehaviourNX",
          "package": "buster-network",
          "signature": "String -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-XmlRpc.html#xmlrpcMethodBehaviourNX",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcMethodBehaviourNX",
          "normalized": "String-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster-network",
          "partial": "Method Behaviour NX",
          "signature": "String-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcMethodBehaviourNX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcServiceBehaviour",
          "package": "buster-network",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-XmlRpc.html#xmlrpcServiceBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcServiceBehaviour",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster-network",
          "partial": "Service Behaviour",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcServiceBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcServiceBehaviourNX",
          "package": "buster-network",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-XmlRpc.html#xmlrpcServiceBehaviourNX",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours XmlRpc",
          "module": "App.Behaviours.XmlRpc",
          "name": "xmlrpcServiceBehaviourNX",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster-network",
          "partial": "Service Behaviour NX",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcServiceBehaviourNX"
      }
    }
  ]
]