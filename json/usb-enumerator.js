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
        "word": "usb-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee enumerators for endpoints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.USB.IO.Synchronous.Enumerator",
          "name": "Enumerator",
          "package": "usb-enumerator",
          "source": "src/System-USB-IO-Synchronous-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratee enumerators for endpoints",
          "hierarchy": "System USB IO Synchronous Enumerator",
          "module": "System.USB.IO.Synchronous.Enumerator",
          "name": "Enumerator",
          "package": "usb-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/usb-enumerator/docs/System-USB-IO-Synchronous-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IO.Synchronous.Enumerator",
          "name": "enumReadBulk",
          "package": "usb-enumerator",
          "signature": "DeviceHandle-\u003e EndpointAddress-\u003e Size-\u003e Timeout-\u003e Enumerator s m α",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IO Synchronous Enumerator",
          "module": "System.USB.IO.Synchronous.Enumerator",
          "name": "enumReadBulk",
          "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator a b c",
          "package": "usb-enumerator",
          "partial": "Read Bulk",
          "signature": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator s m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-enumerator/docs/System-USB-IO-Synchronous-Enumerator.html#v:enumReadBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.IO.Synchronous.Enumerator",
          "name": "enumReadInterrupt",
          "package": "usb-enumerator",
          "signature": "DeviceHandle-\u003e EndpointAddress-\u003e Size-\u003e Timeout-\u003e Enumerator s m α",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB IO Synchronous Enumerator",
          "module": "System.USB.IO.Synchronous.Enumerator",
          "name": "enumReadInterrupt",
          "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator a b c",
          "package": "usb-enumerator",
          "partial": "Read Interrupt",
          "signature": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator s m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-enumerator/docs/System-USB-IO-Synchronous-Enumerator.html#v:enumReadInterrupt"
      }
    }
  ]
]