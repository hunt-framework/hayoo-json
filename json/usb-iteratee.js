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
        "word": "usb-iteratee"
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
          "module": "System.USB.IO.Iteratee",
          "name": "Iteratee",
          "package": "usb-iteratee",
          "source": "src/System-USB-IO-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratee enumerators for endpoints",
          "hierarchy": "System USB IO Iteratee",
          "module": "System.USB.IO.Iteratee",
          "name": "Iteratee",
          "package": "usb-iteratee",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003ebulk\u003c/em\u003e endpoints.\n\u003c/p\u003e",
          "module": "System.USB.IO.Iteratee",
          "name": "enumReadBulk",
          "package": "usb-iteratee",
          "signature": "DeviceHandle-\u003e EndpointAddress-\u003e Size-\u003e Timeout-\u003e Enumerator s m α",
          "type": "function"
        },
        "index": {
          "description": "Iteratee enumerator for reading bulk endpoints",
          "hierarchy": "System USB IO Iteratee",
          "module": "System.USB.IO.Iteratee",
          "name": "enumReadBulk",
          "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator a b c",
          "package": "usb-iteratee",
          "partial": "Read Bulk",
          "signature": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator s m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#v:enumReadBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003einterrupt\u003c/em\u003e endpoints.\n\u003c/p\u003e",
          "module": "System.USB.IO.Iteratee",
          "name": "enumReadInterrupt",
          "package": "usb-iteratee",
          "signature": "DeviceHandle-\u003e EndpointAddress-\u003e Size-\u003e Timeout-\u003e Enumerator s m α",
          "type": "function"
        },
        "index": {
          "description": "Iteratee enumerator for reading interrupt endpoints",
          "hierarchy": "System USB IO Iteratee",
          "module": "System.USB.IO.Iteratee",
          "name": "enumReadInterrupt",
          "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator a b c",
          "package": "usb-iteratee",
          "partial": "Read Interrupt",
          "signature": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator s m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#v:enumReadInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003eisochronous\u003c/em\u003e endpoints.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\n function to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e",
          "module": "System.USB.IO.Iteratee",
          "name": "enumReadIsochronous",
          "package": "usb-iteratee",
          "signature": "DeviceHandle-\u003e EndpointAddress-\u003e Vector Size-\u003e Timeout-\u003e Enumerator (Vector s) m α",
          "type": "function"
        },
        "index": {
          "description": "Iteratee enumerator for reading isochronous endpoints WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise",
          "hierarchy": "System USB IO Iteratee",
          "module": "System.USB.IO.Iteratee",
          "name": "enumReadIsochronous",
          "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eVector Size-\u003eTimeout-\u003eEnumerator(Vector a)b c",
          "package": "usb-iteratee",
          "partial": "Read Isochronous",
          "signature": "DeviceHandle-\u003eEndpointAddress-\u003eVector Size-\u003eTimeout-\u003eEnumerator(Vector s)m α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#v:enumReadIsochronous"
      }
    }
  ]
]