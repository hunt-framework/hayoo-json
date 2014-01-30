[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee enumerators for endpoints.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.IO.Iteratee",
        "fct-package": "usb-iteratee",
        "fct-signature": "module",
        "fct-source": "src/System-USB-IO-Iteratee.html",
        "fct-type": "module",
        "title": "Iteratee"
      },
      "index": {
        "description": "Iteratee enumerators for endpoints",
        "hierarchy": "System USB IO Iteratee",
        "module": "System.USB.IO.Iteratee",
        "name": "Iteratee",
        "normalized": "",
        "package": "usb-iteratee",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#v:enumReadBulk",
      "description": {
        "fct-descr": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003ebulk\u003c/em\u003e endpoints.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.Iteratee",
        "fct-package": "usb-iteratee",
        "fct-signature": "DeviceHandle-\u003e EndpointAddress-\u003e Size-\u003e Timeout-\u003e Enumerator s m α",
        "fct-type": "function",
        "title": "enumReadBulk"
      },
      "index": {
        "description": "Iteratee enumerator for reading bulk endpoints",
        "hierarchy": "System USB IO Iteratee",
        "module": "System.USB.IO.Iteratee",
        "name": "enumReadBulk",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator a b c",
        "package": "usb-iteratee",
        "partial": "Read Bulk",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator s m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#v:enumReadInterrupt",
      "description": {
        "fct-descr": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003einterrupt\u003c/em\u003e endpoints.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.Iteratee",
        "fct-package": "usb-iteratee",
        "fct-signature": "DeviceHandle-\u003e EndpointAddress-\u003e Size-\u003e Timeout-\u003e Enumerator s m α",
        "fct-type": "function",
        "title": "enumReadInterrupt"
      },
      "index": {
        "description": "Iteratee enumerator for reading interrupt endpoints",
        "hierarchy": "System USB IO Iteratee",
        "module": "System.USB.IO.Iteratee",
        "name": "enumReadInterrupt",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator a b c",
        "package": "usb-iteratee",
        "partial": "Read Interrupt",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eSize-\u003eTimeout-\u003eEnumerator s m α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb-iteratee/docs/System-USB-IO-Iteratee.html#v:enumReadIsochronous",
      "description": {
        "fct-descr": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003eisochronous\u003c/em\u003e endpoints.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\n function to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.Iteratee",
        "fct-package": "usb-iteratee",
        "fct-signature": "DeviceHandle-\u003e EndpointAddress-\u003e Vector Size-\u003e Timeout-\u003e Enumerator (Vector s) m α",
        "fct-type": "function",
        "title": "enumReadIsochronous"
      },
      "index": {
        "description": "Iteratee enumerator for reading isochronous endpoints WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise",
        "hierarchy": "System USB IO Iteratee",
        "module": "System.USB.IO.Iteratee",
        "name": "enumReadIsochronous",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eVector Size-\u003eTimeout-\u003eEnumerator(Vector a)b c",
        "package": "usb-iteratee",
        "partial": "Read Isochronous",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eVector Size-\u003eTimeout-\u003eEnumerator(Vector s)m α"
      }
    }
  }
]