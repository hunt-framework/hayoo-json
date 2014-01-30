[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-HTTP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBehaviours for HTTP requests.  Looks for Events named\n   HTTP/\u003cem\u003eMethodName\u003c/em\u003e with event data of [EString uri, EByteString senddata, EStringL headers] and consumes them.  Produces\n   Events named HTTPResponse with source httpBehaviour/\u003cem\u003eMethodName\u003c/em\u003e and the contents of the response as the event data in a ByteString.\n   They also produce Exceptions with the same source and name ConnectionError if there is no network connection or HTTP Service\n   or HTTPErrorResponseCode if the Server sent back an error code or ParseFailure if the URI didn't parse.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "App.Behaviours.HTTP",
        "fct-package": "buster-network",
        "fct-signature": "module",
        "fct-source": "src/App-Behaviours-HTTP.html",
        "fct-type": "module",
        "title": "HTTP"
      },
      "index": {
        "description": "Behaviours for HTTP requests Looks for Events named HTTP MethodName with event data of EString uri EByteString senddata EStringL headers and consumes them Produces Events named HTTPResponse with source httpBehaviour MethodName and the contents of the response as the event data in ByteString They also produce Exceptions with the same source and name ConnectionError if there is no network connection or HTTP Service or HTTPErrorResponseCode if the Server sent back an error code or ParseFailure if the URI didn parse",
        "hierarchy": "App Behaviours HTTP",
        "module": "App.Behaviours.HTTP",
        "name": "HTTP",
        "normalized": "",
        "package": "buster-network",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "module",
        "fct-source": "src/App-Behaviours-XmlRpc.html",
        "fct-type": "module",
        "title": "XmlRpc"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "XmlRpc",
        "normalized": "",
        "package": "buster-network",
        "partial": "Xml Rpc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:edata2value",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "EData a -\u003e Value",
        "fct-source": "src/App-Behaviours-XmlRpc.html#edata2value",
        "fct-type": "function",
        "title": "edata2value"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "edata2value",
        "normalized": "EData a-\u003eValue",
        "package": "buster-network",
        "partial": "",
        "signature": "EData a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:edata2valueNX",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "EData a -\u003e Value",
        "fct-source": "src/App-Behaviours-XmlRpc.html#edata2valueNX",
        "fct-type": "function",
        "title": "edata2valueNX"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "edata2valueNX",
        "normalized": "EData a-\u003eValue",
        "package": "buster-network",
        "partial": "NX",
        "signature": "EData a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:value2edata",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "Value -\u003e EData a",
        "fct-source": "src/App-Behaviours-XmlRpc.html#value2edata",
        "fct-type": "function",
        "title": "value2edata"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "value2edata",
        "normalized": "Value-\u003eEData a",
        "package": "buster-network",
        "partial": "",
        "signature": "Value-\u003eEData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcMethodBehaviour",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "String -\u003e String -\u003e Behaviour [EData a]",
        "fct-source": "src/App-Behaviours-XmlRpc.html#xmlrpcMethodBehaviour",
        "fct-type": "function",
        "title": "xmlrpcMethodBehaviour"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "xmlrpcMethodBehaviour",
        "normalized": "String-\u003eString-\u003eBehaviour[EData a]",
        "package": "buster-network",
        "partial": "Method Behaviour",
        "signature": "String-\u003eString-\u003eBehaviour[EData a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcMethodBehaviourNX",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "String -\u003e String -\u003e Behaviour [EData a]",
        "fct-source": "src/App-Behaviours-XmlRpc.html#xmlrpcMethodBehaviourNX",
        "fct-type": "function",
        "title": "xmlrpcMethodBehaviourNX"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "xmlrpcMethodBehaviourNX",
        "normalized": "String-\u003eString-\u003eBehaviour[EData a]",
        "package": "buster-network",
        "partial": "Method Behaviour NX",
        "signature": "String-\u003eString-\u003eBehaviour[EData a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcServiceBehaviour",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "String -\u003e Behaviour [EData a]",
        "fct-source": "src/App-Behaviours-XmlRpc.html#xmlrpcServiceBehaviour",
        "fct-type": "function",
        "title": "xmlrpcServiceBehaviour"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "xmlrpcServiceBehaviour",
        "normalized": "String-\u003eBehaviour[EData a]",
        "package": "buster-network",
        "partial": "Service Behaviour",
        "signature": "String-\u003eBehaviour[EData a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/buster-network/docs/App-Behaviours-XmlRpc.html#v:xmlrpcServiceBehaviourNX",
      "description": {
        "fct-module": "App.Behaviours.XmlRpc",
        "fct-package": "buster-network",
        "fct-signature": "String -\u003e Behaviour [EData a]",
        "fct-source": "src/App-Behaviours-XmlRpc.html#xmlrpcServiceBehaviourNX",
        "fct-type": "function",
        "title": "xmlrpcServiceBehaviourNX"
      },
      "index": {
        "description": "",
        "hierarchy": "App Behaviours XmlRpc",
        "module": "App.Behaviours.XmlRpc",
        "name": "xmlrpcServiceBehaviourNX",
        "normalized": "String-\u003eBehaviour[EData a]",
        "package": "buster-network",
        "partial": "Service Behaviour NX",
        "signature": "String-\u003eBehaviour[EData a]"
      }
    }
  }
]