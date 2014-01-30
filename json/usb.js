[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUSB devices report their attributes using descriptors. A descriptor is a data\n structure with a defined format. Using descriptors allows concise storage of\n the attributes of individual configurations because each configuration may\n reuse descriptors or portions of descriptors from other configurations that\n have the same characteristics. In this manner, the descriptors resemble\n individual data records in a relational database.\n\u003c/p\u003e\u003cp\u003eWhere appropriate, descriptors contain references to string descriptors\n (\u003ccode\u003e\u003ca\u003eStrIx\u003c/a\u003e\u003c/code\u003e) that provide textual information describing a descriptor in\n human-readable form. Note that the inclusion of string descriptors is\n optional.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-Descriptors.html",
        "fct-type": "module",
        "title": "Descriptors"
      },
      "index": {
        "description": "USB devices report their attributes using descriptors descriptor is data structure with defined format Using descriptors allows concise storage of the attributes of individual configurations because each configuration may reuse descriptors or portions of descriptors from other configurations that have the same characteristics In this manner the descriptors resemble individual data records in relational database Where appropriate descriptors contain references to string descriptors StrIx that provide textual information describing descriptor in human-readable form Note that the inclusion of string descriptors is optional",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Descriptors",
        "normalized": "",
        "package": "usb",
        "partial": "Descriptors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:ConfigAttribs",
      "description": {
        "fct-descr": "\u003cp\u003eThe USB 2.0 specification specifies that the configuration attributes only\n describe the device status.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ConfigAttribs",
        "fct-type": "type",
        "title": "ConfigAttribs"
      },
      "index": {
        "description": "The USB specification specifies that the configuration attributes only describe the device status",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "ConfigAttribs",
        "normalized": "",
        "package": "usb",
        "partial": "Config Attribs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:ConfigDesc",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing the standard USB configuration descriptor.\n\u003c/p\u003e\u003cp\u003eThis descriptor is documented in section 9.6.3 of the USB 2.0 specification.\n\u003c/p\u003e\u003cp\u003eThis structure can be retrieved by \u003ccode\u003e\u003ca\u003egetConfigDesc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "data",
        "title": "ConfigDesc"
      },
      "index": {
        "description": "structure representing the standard USB configuration descriptor This descriptor is documented in section of the USB specification This structure can be retrieved by getConfigDesc",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "ConfigDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Config Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:DeviceDesc",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing the standard USB device descriptor.\n\u003c/p\u003e\u003cp\u003eThis descriptor is documented in section 9.6.1 of the USB 2.0 specification.\n\u003c/p\u003e\u003cp\u003eThis structure can be retrieved by \u003ccode\u003edeviceDesc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "data",
        "title": "DeviceDesc"
      },
      "index": {
        "description": "structure representing the standard USB device descriptor This descriptor is documented in section of the USB specification This structure can be retrieved by deviceDesc",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "DeviceDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Device Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:DeviceStatus",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#DeviceStatus",
        "fct-type": "data",
        "title": "DeviceStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "DeviceStatus",
        "normalized": "",
        "package": "usb",
        "partial": "Device Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:EndpointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe address of an endpoint.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#EndpointAddress",
        "fct-type": "data",
        "title": "EndpointAddress"
      },
      "index": {
        "description": "The address of an endpoint",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "EndpointAddress",
        "normalized": "",
        "package": "usb",
        "partial": "Endpoint Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:EndpointAttribs",
      "description": {
        "fct-descr": "\u003cp\u003eThe USB 2.0 specification specifies that the endpoint attributes only\n describe the endpoint transfer type.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#EndpointAttribs",
        "fct-type": "type",
        "title": "EndpointAttribs"
      },
      "index": {
        "description": "The USB specification specifies that the endpoint attributes only describe the endpoint transfer type",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "EndpointAttribs",
        "normalized": "",
        "package": "usb",
        "partial": "Endpoint Attribs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:EndpointDesc",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing the standard USB endpoint descriptor.\n\u003c/p\u003e\u003cp\u003eThis descriptor is documented in section 9.6.3 of the USB 2.0 specification.\n\u003c/p\u003e\u003cp\u003eThis structure can be retrieved by using \u003ccode\u003e\u003ca\u003einterfaceEndpoints\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "data",
        "title": "EndpointDesc"
      },
      "index": {
        "description": "structure representing the standard USB endpoint descriptor This descriptor is documented in section of the USB specification This structure can be retrieved by using interfaceEndpoints",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "EndpointDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Endpoint Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:Interface",
      "description": {
        "fct-descr": "\u003cp\u003eAn interface is represented as a vector of alternate interface settings.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Interface",
        "fct-type": "type",
        "title": "Interface"
      },
      "index": {
        "description": "An interface is represented as vector of alternate interface settings",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Interface",
        "normalized": "",
        "package": "usb",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:InterfaceDesc",
      "description": {
        "fct-descr": "\u003cp\u003eA structure representing the standard USB interface descriptor.\n\u003c/p\u003e\u003cp\u003eThis descriptor is documented in section 9.6.5 of the USB 2.0 specification.\n\u003c/p\u003e\u003cp\u003eThis structure can be retrieved using \u003ccode\u003e\u003ca\u003econfigInterfaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "data",
        "title": "InterfaceDesc"
      },
      "index": {
        "description": "structure representing the standard USB interface descriptor This descriptor is documented in section of the USB specification This structure can be retrieved using configInterfaces",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "InterfaceDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Interface Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:LangId",
      "description": {
        "fct-descr": "\u003cp\u003eThe language ID consists of the primary language identifier and the\nsublanguage identififier as described in:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.usb.org/developers/docs/USB_LANGIDs.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor a mapping between IDs and languages see the\n\u003ca\u003eusb-id-database\u003c/a\u003e package.\n\u003c/p\u003e\u003cp\u003eTo see which \u003ccode\u003e\u003ca\u003eLangId\u003c/a\u003e\u003c/code\u003es are supported by a device see \u003ccode\u003e\u003ca\u003egetLanguages\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#LangId",
        "fct-type": "type",
        "title": "LangId"
      },
      "index": {
        "description": "The language ID consists of the primary language identifier and the sublanguage identififier as described in http www.usb.org developers docs USB LANGIDs.pdf For mapping between IDs and languages see the usb-id-database package To see which LangId are supported by device see getLanguages",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "LangId",
        "normalized": "",
        "package": "usb",
        "partial": "Lang Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:MaxPacketSize",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#MaxPacketSize",
        "fct-type": "data",
        "title": "MaxPacketSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "MaxPacketSize",
        "normalized": "",
        "package": "usb",
        "partial": "Max Packet Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:PrimaryLangId",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#PrimaryLangId",
        "fct-type": "type",
        "title": "PrimaryLangId"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "PrimaryLangId",
        "normalized": "",
        "package": "usb",
        "partial": "Primary Lang Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:ProductId",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ProductId",
        "fct-type": "type",
        "title": "ProductId"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "ProductId",
        "normalized": "",
        "package": "usb",
        "partial": "Product Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:ReleaseNumber",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ReleaseNumber",
        "fct-type": "type",
        "title": "ReleaseNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "ReleaseNumber",
        "normalized": "",
        "package": "usb",
        "partial": "Release Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:StrIx",
      "description": {
        "fct-descr": "\u003cp\u003eType of indici of string descriptors.\n\u003c/p\u003e\u003cp\u003eCan be retrieved by all the *StrIx functions.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#StrIx",
        "fct-type": "type",
        "title": "StrIx"
      },
      "index": {
        "description": "Type of indici of string descriptors Can be retrieved by all the StrIx functions",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "StrIx",
        "normalized": "",
        "package": "usb",
        "partial": "Str Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:SubLangId",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#SubLangId",
        "fct-type": "type",
        "title": "SubLangId"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "SubLangId",
        "normalized": "",
        "package": "usb",
        "partial": "Sub Lang Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:Synchronization",
      "description": {
        "fct-descr": "\u003cp\u003eSee section 5.12.4.1 of the USB 2.0 specification.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Synchronization",
        "fct-type": "data",
        "title": "Synchronization"
      },
      "index": {
        "description": "See section of the USB specification",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Synchronization",
        "normalized": "",
        "package": "usb",
        "partial": "Synchronization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:TransactionOpportunities",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of additional transaction oppurtunities per microframe.\n\u003c/p\u003e\u003cp\u003eSee table 9-13 of the USB 2.0 specification.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#TransactionOpportunities",
        "fct-type": "data",
        "title": "TransactionOpportunities"
      },
      "index": {
        "description": "Number of additional transaction oppurtunities per microframe See table of the USB specification",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "TransactionOpportunities",
        "normalized": "",
        "package": "usb",
        "partial": "Transaction Opportunities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:TransferDirection",
      "description": {
        "fct-descr": "\u003cp\u003eThe direction of data transfer relative to the host.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#TransferDirection",
        "fct-type": "data",
        "title": "TransferDirection"
      },
      "index": {
        "description": "The direction of data transfer relative to the host",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "TransferDirection",
        "normalized": "",
        "package": "usb",
        "partial": "Transfer Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:TransferType",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes what types of transfers are allowed on the endpoint.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#TransferType",
        "fct-type": "data",
        "title": "TransferType"
      },
      "index": {
        "description": "Describes what types of transfers are allowed on the endpoint",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "TransferType",
        "normalized": "",
        "package": "usb",
        "partial": "Transfer Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:Usage",
      "description": {
        "fct-descr": "\u003cp\u003eSee section 5.12.4.2 of the USB 2.0 specification.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Usage",
        "fct-type": "data",
        "title": "Usage"
      },
      "index": {
        "description": "See section of the USB specification",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Usage",
        "normalized": "",
        "package": "usb",
        "partial": "Usage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#t:VendorId",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#VendorId",
        "fct-type": "type",
        "title": "VendorId"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "VendorId",
        "normalized": "",
        "package": "usb",
        "partial": "Vendor Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Adaptive",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronized using feedback or feedforward\n   data rate information\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Adaptive",
        "fct-source": "src/System-USB-Base.html#Synchronization",
        "fct-type": "function",
        "title": "Adaptive"
      },
      "index": {
        "description": "Synchronized using feedback or feedforward data rate information",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Adaptive",
        "normalized": "",
        "package": "usb",
        "partial": "Adaptive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Asynchronous",
      "description": {
        "fct-descr": "\u003cp\u003eUnsynchronized,\n   although sinks provide data rate feedback.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Asynchronous",
        "fct-source": "src/System-USB-Base.html#Synchronization",
        "fct-type": "function",
        "title": "Asynchronous"
      },
      "index": {
        "description": "Unsynchronized although sinks provide data rate feedback",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Asynchronous",
        "normalized": "",
        "package": "usb",
        "partial": "Asynchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Bulk",
      "description": {
        "fct-descr": "\u003cp\u003eBulk transfers can be used for large bursty data.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Bulk",
        "fct-source": "src/System-USB-Base.html#TransferType",
        "fct-type": "function",
        "title": "Bulk"
      },
      "index": {
        "description": "Bulk transfers can be used for large bursty data",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Bulk",
        "normalized": "",
        "package": "usb",
        "partial": "Bulk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:ConfigDesc",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "ConfigDesc",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "ConfigDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "ConfigDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Config Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Control",
      "description": {
        "fct-descr": "\u003cp\u003eControl transfers are typically used for command and status\n operations.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Control",
        "fct-source": "src/System-USB-Base.html#TransferType",
        "fct-type": "function",
        "title": "Control"
      },
      "index": {
        "description": "Control transfers are typically used for command and status operations",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Control",
        "normalized": "",
        "package": "usb",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Data",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Data",
        "fct-source": "src/System-USB-Base.html#Usage",
        "fct-type": "function",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Data",
        "normalized": "",
        "package": "usb",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:DeviceDesc",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "DeviceDesc",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "DeviceDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "DeviceDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Device Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:DeviceStatus",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "DeviceStatus",
        "fct-source": "src/System-USB-Base.html#DeviceStatus",
        "fct-type": "function",
        "title": "DeviceStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "DeviceStatus",
        "normalized": "",
        "package": "usb",
        "partial": "Device Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:EndpointAddress",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "EndpointAddress",
        "fct-source": "src/System-USB-Base.html#EndpointAddress",
        "fct-type": "function",
        "title": "EndpointAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "EndpointAddress",
        "normalized": "",
        "package": "usb",
        "partial": "Endpoint Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:EndpointDesc",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "EndpointDesc",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "EndpointDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "EndpointDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Endpoint Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Feedback",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Feedback",
        "fct-source": "src/System-USB-Base.html#Usage",
        "fct-type": "function",
        "title": "Feedback"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Feedback",
        "normalized": "",
        "package": "usb",
        "partial": "Feedback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Implicit",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Implicit",
        "fct-source": "src/System-USB-Base.html#Usage",
        "fct-type": "function",
        "title": "Implicit"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Implicit",
        "normalized": "",
        "package": "usb",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:In",
      "description": {
        "fct-descr": "\u003cp\u003eIn transfer direction (device -\u003e host) used\n   for reading.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "In",
        "fct-source": "src/System-USB-Base.html#TransferDirection",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "In transfer direction device host used for reading",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "In",
        "normalized": "",
        "package": "usb",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:InterfaceDesc",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "InterfaceDesc",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "InterfaceDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "InterfaceDesc",
        "normalized": "",
        "package": "usb",
        "partial": "Interface Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Interrupt",
      "description": {
        "fct-descr": "\u003cp\u003eInterrupt transfers are typically non-periodic, small device\n \"initiated\" communication requiring bounded latency.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Interrupt",
        "fct-source": "src/System-USB-Base.html#TransferType",
        "fct-type": "function",
        "title": "Interrupt"
      },
      "index": {
        "description": "Interrupt transfers are typically non-periodic small device initiated communication requiring bounded latency",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Interrupt",
        "normalized": "",
        "package": "usb",
        "partial": "Interrupt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Isochronous",
      "description": {
        "fct-descr": "\u003cp\u003eIsochronous transfers occur continuously and periodically.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Isochronous !Synchronization !Usage",
        "fct-source": "src/System-USB-Base.html#TransferType",
        "fct-type": "function",
        "title": "Isochronous"
      },
      "index": {
        "description": "Isochronous transfers occur continuously and periodically",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Isochronous",
        "normalized": "",
        "package": "usb",
        "partial": "Isochronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:MaxPacketSize",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "MaxPacketSize",
        "fct-source": "src/System-USB-Base.html#MaxPacketSize",
        "fct-type": "function",
        "title": "MaxPacketSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "MaxPacketSize",
        "normalized": "",
        "package": "usb",
        "partial": "Max Packet Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:NoSynchronization",
      "description": {
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "NoSynchronization",
        "fct-source": "src/System-USB-Base.html#Synchronization",
        "fct-type": "function",
        "title": "NoSynchronization"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "NoSynchronization",
        "normalized": "",
        "package": "usb",
        "partial": "No Synchronization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:One",
      "description": {
        "fct-descr": "\u003cp\u003e1 additional (2 per microframe)\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "One",
        "fct-source": "src/System-USB-Base.html#TransactionOpportunities",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "additional per microframe",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "One",
        "normalized": "",
        "package": "usb",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Out",
      "description": {
        "fct-descr": "\u003cp\u003eOut transfer direction (host -\u003e device) used\n   for writing.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Out",
        "fct-source": "src/System-USB-Base.html#TransferDirection",
        "fct-type": "function",
        "title": "Out"
      },
      "index": {
        "description": "Out transfer direction host device used for writing",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Out",
        "normalized": "",
        "package": "usb",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Synchronous",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronized to the USB&#8217;s SOF (\u003cem\u003eStart Of Frame\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Synchronous",
        "fct-source": "src/System-USB-Base.html#Synchronization",
        "fct-type": "function",
        "title": "Synchronous"
      },
      "index": {
        "description": "Synchronized to the USB SOF Start Of Frame",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Synchronous",
        "normalized": "",
        "package": "usb",
        "partial": "Synchronous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Two",
      "description": {
        "fct-descr": "\u003cp\u003e2 additional (3 per microframe)\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Two",
        "fct-source": "src/System-USB-Base.html#TransactionOpportunities",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "additional per microframe",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Two",
        "normalized": "",
        "package": "usb",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:Zero",
      "description": {
        "fct-descr": "\u003cp\u003eNone (1 transaction per microframe)\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Zero",
        "fct-source": "src/System-USB-Base.html#TransactionOpportunities",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "None transaction per microframe",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "Zero",
        "normalized": "",
        "package": "usb",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:configAttribs",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration characteristics.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ConfigAttribs",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "configAttribs"
      },
      "index": {
        "description": "Configuration characteristics",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "configAttribs",
        "normalized": "",
        "package": "usb",
        "partial": "Attribs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:configExtra",
      "description": {
        "fct-descr": "\u003cp\u003eExtra descriptors. If \u003ccode\u003elibusb\u003c/code\u003e encounters unknown configuration\n descriptors, it will store them here, should you wish to parse them.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ByteString",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "configExtra"
      },
      "index": {
        "description": "Extra descriptors If libusb encounters unknown configuration descriptors it will store them here should you wish to parse them",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "configExtra",
        "normalized": "",
        "package": "usb",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:configInterfaces",
      "description": {
        "fct-descr": "\u003cp\u003eVector of interfaces supported by the configuration.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Vector Interface)",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "configInterfaces"
      },
      "index": {
        "description": "Vector of interfaces supported by the configuration",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "configInterfaces",
        "normalized": "",
        "package": "usb",
        "partial": "Interfaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:configMaxPower",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum power consumption of the USB device from the bus in the\n configuration when the device is fully operational.  Expressed in 2 mA\n units (i.e., 50 = 100 mA).\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "configMaxPower"
      },
      "index": {
        "description": "Maximum power consumption of the USB device from the bus in the configuration when the device is fully operational Expressed in mA units i.e mA",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "configMaxPower",
        "normalized": "",
        "package": "usb",
        "partial": "Max Power",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:configStrIx",
      "description": {
        "fct-descr": "\u003cp\u003eOptional index of string descriptor describing the configuration.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Maybe StrIx)",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "configStrIx"
      },
      "index": {
        "description": "Optional index of string descriptor describing the configuration",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "configStrIx",
        "normalized": "",
        "package": "usb",
        "partial": "Str Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:configValue",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier value for the configuration.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ConfigValue",
        "fct-source": "src/System-USB-Base.html#ConfigDesc",
        "fct-type": "function",
        "title": "configValue"
      },
      "index": {
        "description": "Identifier value for the configuration",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "configValue",
        "normalized": "",
        "package": "usb",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceClass",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF class code for the device.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceClass"
      },
      "index": {
        "description": "USB-IF class code for the device",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceClass",
        "normalized": "",
        "package": "usb",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceManufacturerStrIx",
      "description": {
        "fct-descr": "\u003cp\u003eOptional index of string descriptor describing manufacturer.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Maybe StrIx)",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceManufacturerStrIx"
      },
      "index": {
        "description": "Optional index of string descriptor describing manufacturer",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceManufacturerStrIx",
        "normalized": "",
        "package": "usb",
        "partial": "Manufacturer Str Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceMaxPacketSize0",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum packet size for endpoint 0.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceMaxPacketSize0"
      },
      "index": {
        "description": "Maximum packet size for endpoint",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceMaxPacketSize0",
        "normalized": "",
        "package": "usb",
        "partial": "Max Packet Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceNumConfigs",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of possible configurations.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceNumConfigs"
      },
      "index": {
        "description": "Number of possible configurations",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceNumConfigs",
        "normalized": "",
        "package": "usb",
        "partial": "Num Configs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceProductId",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF product ID.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ProductId",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceProductId"
      },
      "index": {
        "description": "USB-IF product ID",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceProductId",
        "normalized": "",
        "package": "usb",
        "partial": "Product Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceProductStrIx",
      "description": {
        "fct-descr": "\u003cp\u003eOptional index of string descriptor describing product.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Maybe StrIx)",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceProductStrIx"
      },
      "index": {
        "description": "Optional index of string descriptor describing product",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceProductStrIx",
        "normalized": "",
        "package": "usb",
        "partial": "Product Str Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF protocol code for the device, qualified by the \u003ccode\u003e\u003ca\u003edeviceClass\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003edeviceSubClass\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceProtocol"
      },
      "index": {
        "description": "USB-IF protocol code for the device qualified by the deviceClass and deviceSubClass values",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceProtocol",
        "normalized": "",
        "package": "usb",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceReleaseNumber",
      "description": {
        "fct-descr": "\u003cp\u003eDevice release number.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ReleaseNumber",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceReleaseNumber"
      },
      "index": {
        "description": "Device release number",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceReleaseNumber",
        "normalized": "",
        "package": "usb",
        "partial": "Release Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceSerialNumberStrIx",
      "description": {
        "fct-descr": "\u003cp\u003eOptional index of string descriptor containing device serial number.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Maybe StrIx)",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceSerialNumberStrIx"
      },
      "index": {
        "description": "Optional index of string descriptor containing device serial number",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceSerialNumberStrIx",
        "normalized": "",
        "package": "usb",
        "partial": "Serial Number Str Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceSubClass",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF subclass code for the device, qualified by the \u003ccode\u003e\u003ca\u003edeviceClass\u003c/a\u003e\u003c/code\u003e\n value.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceSubClass"
      },
      "index": {
        "description": "USB-IF subclass code for the device qualified by the deviceClass value",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceSubClass",
        "normalized": "",
        "package": "usb",
        "partial": "Sub Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceUSBSpecReleaseNumber",
      "description": {
        "fct-descr": "\u003cp\u003eUSB specification release number.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ReleaseNumber",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceUSBSpecReleaseNumber"
      },
      "index": {
        "description": "USB specification release number",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceUSBSpecReleaseNumber",
        "normalized": "",
        "package": "usb",
        "partial": "USBSpec Release Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:deviceVendorId",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF vendor ID.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!VendorId",
        "fct-source": "src/System-USB-Base.html#DeviceDesc",
        "fct-type": "function",
        "title": "deviceVendorId"
      },
      "index": {
        "description": "USB-IF vendor ID",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "deviceVendorId",
        "normalized": "",
        "package": "usb",
        "partial": "Vendor Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe address of the endpoint described by the descriptor.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!EndpointAddress",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointAddress"
      },
      "index": {
        "description": "The address of the endpoint described by the descriptor",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointAddress",
        "normalized": "",
        "package": "usb",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointAttribs",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes which apply to the endpoint when it is configured using the\n \u003ccode\u003e\u003ca\u003econfigValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!EndpointAttribs",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointAttribs"
      },
      "index": {
        "description": "Attributes which apply to the endpoint when it is configured using the configValue",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointAttribs",
        "normalized": "",
        "package": "usb",
        "partial": "Attribs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointExtra",
      "description": {
        "fct-descr": "\u003cp\u003eExtra descriptors. If \u003ccode\u003elibusb\u003c/code\u003e encounters unknown endpoint descriptors,\n it will store them here, should you wish to parse them.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ByteString",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointExtra"
      },
      "index": {
        "description": "Extra descriptors If libusb encounters unknown endpoint descriptors it will store them here should you wish to parse them",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointExtra",
        "normalized": "",
        "package": "usb",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointInterval",
      "description": {
        "fct-descr": "\u003cp\u003eInterval for polling endpoint for data transfers. Expressed in frames\n or microframes depending on the device operating speed (i.e., either 1\n millisecond or 125 &#956;s units).\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointInterval"
      },
      "index": {
        "description": "Interval for polling endpoint for data transfers Expressed in frames or microframes depending on the device operating speed i.e either millisecond or units",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointInterval",
        "normalized": "",
        "package": "usb",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointMaxPacketSize",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum packet size the endpoint is capable of sending/receiving.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!MaxPacketSize",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointMaxPacketSize"
      },
      "index": {
        "description": "Maximum packet size the endpoint is capable of sending receiving",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointMaxPacketSize",
        "normalized": "",
        "package": "usb",
        "partial": "Max Packet Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointNumber",
      "description": {
        "fct-descr": "\u003cp\u003eMust be \u003e= 0 and \u003c= 15\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Int",
        "fct-source": "src/System-USB-Base.html#EndpointAddress",
        "fct-type": "function",
        "title": "endpointNumber"
      },
      "index": {
        "description": "Must be and",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointNumber",
        "normalized": "",
        "package": "usb",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointRefresh",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eFor audio devices only:\u003c/em\u003e the rate at which synchronization feedback\n is provided.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointRefresh"
      },
      "index": {
        "description": "For audio devices only the rate at which synchronization feedback is provided",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointRefresh",
        "normalized": "",
        "package": "usb",
        "partial": "Refresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:endpointSynchAddress",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eFor audio devices only:\u003c/em\u003e the address of the synch endpoint.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#EndpointDesc",
        "fct-type": "function",
        "title": "endpointSynchAddress"
      },
      "index": {
        "description": "For audio devices only the address of the synch endpoint",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "endpointSynchAddress",
        "normalized": "",
        "package": "usb",
        "partial": "Synch Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:getConfigDesc",
      "description": {
        "fct-descr": "\u003cp\u003eGet a USB configuration descriptor based on its index.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function which does not involve any requests\n being sent to the device.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if the configuration does not exist.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Device -\u003e Word8 -\u003e IO ConfigDesc",
        "fct-source": "src/System-USB-Base.html#getConfigDesc",
        "fct-type": "function",
        "title": "getConfigDesc"
      },
      "index": {
        "description": "Get USB configuration descriptor based on its index This is non-blocking function which does not involve any requests being sent to the device Exceptions NotFoundException if the configuration does not exist Another USBException",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "getConfigDesc",
        "normalized": "Device-\u003eWord-\u003eIO ConfigDesc",
        "package": "usb",
        "partial": "Config Desc",
        "signature": "Device-\u003eWord-\u003eIO ConfigDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:getDeviceDesc",
      "description": {
        "fct-descr": "\u003cp\u003eGet the USB device descriptor for a given device.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function; the device descriptor is cached in memory.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "Device -\u003e IO DeviceDesc",
        "fct-source": "src/System-USB-Base.html#getDeviceDesc",
        "fct-type": "function",
        "title": "getDeviceDesc"
      },
      "index": {
        "description": "Get the USB device descriptor for given device This is non-blocking function the device descriptor is cached in memory This function may throw USBException",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "getDeviceDesc",
        "normalized": "Device-\u003eIO DeviceDesc",
        "package": "usb",
        "partial": "Device Desc",
        "signature": "Device-\u003eIO DeviceDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:getLanguages",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a vector of supported languages.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e IO (Vector LangId)",
        "fct-source": "src/System-USB-Base.html#getLanguages",
        "fct-type": "function",
        "title": "getLanguages"
      },
      "index": {
        "description": "Retrieve vector of supported languages This function may throw USBException",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "getLanguages",
        "normalized": "DeviceHandle-\u003eIO(Vector LangId)",
        "package": "usb",
        "partial": "Languages",
        "signature": "DeviceHandle-\u003eIO(Vector LangId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:getStrDesc",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a string descriptor from a device.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle-\u003e StrIx-\u003e LangId-\u003e Int-\u003e IO Text",
        "fct-type": "function",
        "title": "getStrDesc"
      },
      "index": {
        "description": "Retrieve string descriptor from device This function may throw USBException",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "getStrDesc",
        "normalized": "DeviceHandle-\u003eStrIx-\u003eLangId-\u003eInt-\u003eIO Text",
        "package": "usb",
        "partial": "Str Desc",
        "signature": "DeviceHandle-\u003eStrIx-\u003eLangId-\u003eInt-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:getStrDescFirstLang",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a string descriptor from a device using the first supported language.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle-\u003e StrIx-\u003e Int-\u003e IO Text",
        "fct-type": "function",
        "title": "getStrDescFirstLang"
      },
      "index": {
        "description": "Retrieve string descriptor from device using the first supported language This function may throw USBException",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "getStrDescFirstLang",
        "normalized": "DeviceHandle-\u003eStrIx-\u003eInt-\u003eIO Text",
        "package": "usb",
        "partial": "Str Desc First Lang",
        "signature": "DeviceHandle-\u003eStrIx-\u003eInt-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceAltSetting",
      "description": {
        "fct-descr": "\u003cp\u003eValue used to select the alternate setting for the interface.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!InterfaceAltSetting",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceAltSetting"
      },
      "index": {
        "description": "Value used to select the alternate setting for the interface",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceAltSetting",
        "normalized": "",
        "package": "usb",
        "partial": "Alt Setting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceClass",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF class code for the interface.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceClass"
      },
      "index": {
        "description": "USB-IF class code for the interface",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceClass",
        "normalized": "",
        "package": "usb",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceEndpoints",
      "description": {
        "fct-descr": "\u003cp\u003eVector of endpoints supported by the interface.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Vector EndpointDesc)",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceEndpoints"
      },
      "index": {
        "description": "Vector of endpoints supported by the interface",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceEndpoints",
        "normalized": "",
        "package": "usb",
        "partial": "Endpoints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceExtra",
      "description": {
        "fct-descr": "\u003cp\u003eExtra descriptors. If \u003ccode\u003elibusb\u003c/code\u003e encounters unknown interface\n descriptors, it will store them here, should you wish to parse them.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!ByteString",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceExtra"
      },
      "index": {
        "description": "Extra descriptors If libusb encounters unknown interface descriptors it will store them here should you wish to parse them",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceExtra",
        "normalized": "",
        "package": "usb",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceNumber",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of the interface.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!InterfaceNumber",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceNumber"
      },
      "index": {
        "description": "Number of the interface",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceNumber",
        "normalized": "",
        "package": "usb",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF protocol code for the interface, qualified by the\n \u003ccode\u003e\u003ca\u003einterfaceClass\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einterfaceSubClass\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceProtocol"
      },
      "index": {
        "description": "USB-IF protocol code for the interface qualified by the interfaceClass and interfaceSubClass values",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceProtocol",
        "normalized": "",
        "package": "usb",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceStrIx",
      "description": {
        "fct-descr": "\u003cp\u003eOptional index of string descriptor describing the interface.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!(Maybe StrIx)",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceStrIx"
      },
      "index": {
        "description": "Optional index of string descriptor describing the interface",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceStrIx",
        "normalized": "",
        "package": "usb",
        "partial": "Str Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:interfaceSubClass",
      "description": {
        "fct-descr": "\u003cp\u003eUSB-IF subclass code for the interface, qualified by the\n \u003ccode\u003e\u003ca\u003einterfaceClass\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Word8",
        "fct-source": "src/System-USB-Base.html#InterfaceDesc",
        "fct-type": "function",
        "title": "interfaceSubClass"
      },
      "index": {
        "description": "USB-IF subclass code for the interface qualified by the interfaceClass value",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "interfaceSubClass",
        "normalized": "",
        "package": "usb",
        "partial": "Sub Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:maxIsoPacketSize",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the maximum packet size which a specific endpoint is capable of\nsending or receiving in the duration of 1 microframe.\n\u003c/p\u003e\u003cp\u003eIf acting on an \u003ccode\u003e\u003ca\u003eIsochronous\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e endpoint, this function will\nmultiply the \u003ccode\u003e\u003ca\u003emaxPacketSize\u003c/a\u003e\u003c/code\u003e by the additional \u003ccode\u003e\u003ca\u003etransactionOpportunities\u003c/a\u003e\u003c/code\u003e.\nIf acting on another type of endpoint only the \u003ccode\u003e\u003ca\u003emaxPacketSize\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eThis function is mainly useful for setting up \u003cem\u003eisochronous\u003c/em\u003e transfers.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "EndpointDesc -\u003e Size",
        "fct-source": "src/System-USB-Base.html#maxIsoPacketSize",
        "fct-type": "function",
        "title": "maxIsoPacketSize"
      },
      "index": {
        "description": "Calculate the maximum packet size which specific endpoint is capable of sending or receiving in the duration of microframe If acting on an Isochronous or Interrupt endpoint this function will multiply the maxPacketSize by the additional transactionOpportunities If acting on another type of endpoint only the maxPacketSize is returned This function is mainly useful for setting up isochronous transfers",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "maxIsoPacketSize",
        "normalized": "EndpointDesc-\u003eSize",
        "package": "usb",
        "partial": "Iso Packet Size",
        "signature": "EndpointDesc-\u003eSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:maxPacketSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Size",
        "fct-source": "src/System-USB-Base.html#MaxPacketSize",
        "fct-type": "function",
        "title": "maxPacketSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "maxPacketSize",
        "normalized": "",
        "package": "usb",
        "partial": "Packet Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:remoteWakeup",
      "description": {
        "fct-descr": "\u003cp\u003eThe Remote Wakeup field indicates whether the\n   device is currently enabled to request remote\n   wakeup. The default mode for devices that\n   support remote wakeup is disabled.\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Bool",
        "fct-source": "src/System-USB-Base.html#DeviceStatus",
        "fct-type": "function",
        "title": "remoteWakeup"
      },
      "index": {
        "description": "The Remote Wakeup field indicates whether the device is currently enabled to request remote wakeup The default mode for devices that support remote wakeup is disabled",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "remoteWakeup",
        "normalized": "",
        "package": "usb",
        "partial": "Wakeup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:selfPowered",
      "description": {
        "fct-descr": "\u003cp\u003eThe Self Powered field indicates whether the\n   device is currently self-powered\n\u003c/p\u003e",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!Bool",
        "fct-source": "src/System-USB-Base.html#DeviceStatus",
        "fct-type": "function",
        "title": "selfPowered"
      },
      "index": {
        "description": "The Self Powered field indicates whether the device is currently self-powered",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "selfPowered",
        "normalized": "",
        "package": "usb",
        "partial": "Powered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:transactionOpportunities",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!TransactionOpportunities",
        "fct-source": "src/System-USB-Base.html#MaxPacketSize",
        "fct-type": "function",
        "title": "transactionOpportunities"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "transactionOpportunities",
        "normalized": "",
        "package": "usb",
        "partial": "Opportunities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Descriptors.html#v:transferDirection",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.USB.Descriptors",
        "fct-package": "usb",
        "fct-signature": "!TransferDirection",
        "fct-source": "src/System-USB-Base.html#EndpointAddress",
        "fct-type": "function",
        "title": "transferDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Descriptors",
        "module": "System.USB.Descriptors",
        "name": "transferDirection",
        "normalized": "",
        "package": "usb",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides functionality for opening, closing and configuring USB\n devices.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-DeviceHandling.html",
        "fct-type": "module",
        "title": "DeviceHandling"
      },
      "index": {
        "description": "The module provides functionality for opening closing and configuring USB devices",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "DeviceHandling",
        "normalized": "",
        "package": "usb",
        "partial": "Device Handling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#t:ConfigValue",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier for configurations.\n\u003c/p\u003e\u003cp\u003eCan be retrieved by \u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e or by \u003ccode\u003e\u003ca\u003econfigValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ConfigValue",
        "fct-type": "type",
        "title": "ConfigValue"
      },
      "index": {
        "description": "Identifier for configurations Can be retrieved by getConfig or by configValue",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "ConfigValue",
        "normalized": "",
        "package": "usb",
        "partial": "Config Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#t:DeviceHandle",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type representing a handle of a USB device.\n\u003c/p\u003e\u003cp\u003eYou can acquire a handle from \u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA device handle is used to perform I/O and other operations. When finished with\na device handle you should close it by applying \u003ccode\u003e\u003ca\u003ecloseDevice\u003c/a\u003e\u003c/code\u003e to it.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#DeviceHandle",
        "fct-type": "data",
        "title": "DeviceHandle"
      },
      "index": {
        "description": "Abstract type representing handle of USB device You can acquire handle from openDevice device handle is used to perform and other operations When finished with device handle you should close it by applying closeDevice to it",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "DeviceHandle",
        "normalized": "",
        "package": "usb",
        "partial": "Device Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#t:InterfaceAltSetting",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier for interface alternate settings.\n\u003c/p\u003e\u003cp\u003eCan be retrieved by \u003ccode\u003e\u003ca\u003einterfaceAltSetting\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#InterfaceAltSetting",
        "fct-type": "type",
        "title": "InterfaceAltSetting"
      },
      "index": {
        "description": "Identifier for interface alternate settings Can be retrieved by interfaceAltSetting",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "InterfaceAltSetting",
        "normalized": "",
        "package": "usb",
        "partial": "Interface Alt Setting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#t:InterfaceNumber",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier for interfaces.\n\u003c/p\u003e\u003cp\u003eCan be retrieved by \u003ccode\u003e\u003ca\u003einterfaceNumber\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#InterfaceNumber",
        "fct-type": "type",
        "title": "InterfaceNumber"
      },
      "index": {
        "description": "Identifier for interfaces Can be retrieved by interfaceNumber",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "InterfaceNumber",
        "normalized": "",
        "package": "usb",
        "partial": "Interface Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:attachKernelDriver",
      "description": {
        "fct-descr": "\u003cp\u003eRe-attach an interface's kernel driver, which was previously\ndetached using \u003ccode\u003e\u003ca\u003edetachKernelDriver\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no kernel driver was active.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eInvalidParamException\u003c/a\u003e\u003c/code\u003e if the interface does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if the driver cannot be attached because the interface\n   is claimed by a program or driver.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#attachKernelDriver",
        "fct-type": "function",
        "title": "attachKernelDriver"
      },
      "index": {
        "description": "Re-attach an interface kernel driver which was previously detached using detachKernelDriver Exceptions NotFoundException if no kernel driver was active InvalidParamException if the interface does not exist NoDeviceException if the device has been disconnected BusyException if the driver cannot be attached because the interface is claimed by program or driver Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "attachKernelDriver",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()",
        "package": "usb",
        "partial": "Kernel Driver",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:claimInterface",
      "description": {
        "fct-descr": "\u003cp\u003eClaim an interface on a given device handle.\n\u003c/p\u003e\u003cp\u003eYou must claim the interface you wish to use before you can perform I/O on any\nof its endpoints.\n\u003c/p\u003e\u003cp\u003eIt is legal to attempt to claim an already-claimed interface, in which case this\nfunction just returns without doing anything.\n\u003c/p\u003e\u003cp\u003eClaiming of interfaces is a purely logical operation; it does not cause any\nrequests to be sent over the bus. Interface claiming is used to instruct the\nunderlying operating system that your application wishes to take ownership of\nthe interface.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if the requested interface does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if the interface is already claimed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#claimInterface",
        "fct-type": "function",
        "title": "claimInterface"
      },
      "index": {
        "description": "Claim an interface on given device handle You must claim the interface you wish to use before you can perform on any of its endpoints It is legal to attempt to claim an already-claimed interface in which case this function just returns without doing anything Claiming of interfaces is purely logical operation it does not cause any requests to be sent over the bus Interface claiming is used to instruct the underlying operating system that your application wishes to take ownership of the interface This is non-blocking function Exceptions NotFoundException if the requested interface does not exist BusyException if the interface is already claimed NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "claimInterface",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()",
        "package": "usb",
        "partial": "Interface",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:clearHalt",
      "description": {
        "fct-descr": "\u003cp\u003eClear the halt/stall condition for an endpoint.\n\u003c/p\u003e\u003cp\u003eEndpoints with halt status are unable to receive or transmit data until the halt\ncondition is stalled.\n\u003c/p\u003e\u003cp\u003eYou should cancel all pending transfers before attempting to clear the halt\ncondition.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if the endpoint does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#clearHalt",
        "fct-type": "function",
        "title": "clearHalt"
      },
      "index": {
        "description": "Clear the halt stall condition for an endpoint Endpoints with halt status are unable to receive or transmit data until the halt condition is stalled You should cancel all pending transfers before attempting to clear the halt condition This is blocking function Exceptions NotFoundException if the endpoint does not exist NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "clearHalt",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eIO()",
        "package": "usb",
        "partial": "Halt",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:closeDevice",
      "description": {
        "fct-descr": "\u003cp\u003eClose a device handle.\n\u003c/p\u003e\u003cp\u003eShould be called on all open handles before your application exits.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function; no requests are sent over the bus.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#closeDevice",
        "fct-type": "function",
        "title": "closeDevice"
      },
      "index": {
        "description": "Close device handle Should be called on all open handles before your application exits This is non-blocking function no requests are sent over the bus",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "closeDevice",
        "normalized": "DeviceHandle-\u003eIO()",
        "package": "usb",
        "partial": "Device",
        "signature": "DeviceHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:detachKernelDriver",
      "description": {
        "fct-descr": "\u003cp\u003eDetach a kernel driver from an interface.\n\u003c/p\u003e\u003cp\u003eIf successful, you will then be able to claim the interface and perform I/O.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no kernel driver was active.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eInvalidParamException\u003c/a\u003e\u003c/code\u003e if the interface does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#detachKernelDriver",
        "fct-type": "function",
        "title": "detachKernelDriver"
      },
      "index": {
        "description": "Detach kernel driver from an interface If successful you will then be able to claim the interface and perform Exceptions NotFoundException if no kernel driver was active InvalidParamException if the interface does not exist NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "detachKernelDriver",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()",
        "package": "usb",
        "partial": "Kernel Driver",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:getConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the value of the currently active configuration.\n\u003c/p\u003e\u003cp\u003eYou could formulate your own control request to obtain this information, but\nthis function has the advantage that it may be able to retrieve the information\nfrom operating system caches (no I/O involved).\n\u003c/p\u003e\u003cp\u003eIf the OS does not cache this information, then this function will block while\na control transfer is submitted to retrieve the information.\n\u003c/p\u003e\u003cp\u003eThis function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the device is in unconfigured state.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e IO (Maybe ConfigValue)",
        "fct-source": "src/System-USB-Base.html#getConfig",
        "fct-type": "function",
        "title": "getConfig"
      },
      "index": {
        "description": "Determine the value of the currently active configuration You could formulate your own control request to obtain this information but this function has the advantage that it may be able to retrieve the information from operating system caches no involved If the OS does not cache this information then this function will block while control transfer is submitted to retrieve the information This function returns Nothing if the device is in unconfigured state Exceptions NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "getConfig",
        "normalized": "DeviceHandle-\u003eIO(Maybe ConfigValue)",
        "package": "usb",
        "partial": "Config",
        "signature": "DeviceHandle-\u003eIO(Maybe ConfigValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:getDevice",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eDevice\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eDeviceHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Device",
        "fct-source": "src/System-USB-Base.html#getDevice",
        "fct-type": "function",
        "title": "getDevice"
      },
      "index": {
        "description": "Retrieve the Device from the DeviceHandle",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "getDevice",
        "normalized": "DeviceHandle-\u003eDevice",
        "package": "usb",
        "partial": "Device",
        "signature": "DeviceHandle-\u003eDevice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:kernelDriverActive",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a kernel driver is active on an interface.\n\u003c/p\u003e\u003cp\u003eIf a kernel driver is active, you cannot claim the interface, and libusb will be\nunable to perform I/O.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO Bool",
        "fct-source": "src/System-USB-Base.html#kernelDriverActive",
        "fct-type": "function",
        "title": "kernelDriverActive"
      },
      "index": {
        "description": "Determine if kernel driver is active on an interface If kernel driver is active you cannot claim the interface and libusb will be unable to perform Exceptions NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "kernelDriverActive",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO Bool",
        "package": "usb",
        "partial": "Driver Active",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:openDevice",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a device and obtain a device handle.\n\u003c/p\u003e\u003cp\u003eA handle allows you to perform I/O on the device in question.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function; no requests are sent over the bus.\n\u003c/p\u003e\u003cp\u003eIt is advisable to use \u003ccode\u003e\u003ca\u003ewithDeviceHandle\u003c/a\u003e\u003c/code\u003e because it automatically closes the\ndevice when the computation terminates.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoMemException\u003c/a\u003e\u003c/code\u003e if there is a memory allocation failure.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAccessException\u003c/a\u003e\u003c/code\u003e if the user has insufficient permissions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "Device -\u003e IO DeviceHandle",
        "fct-source": "src/System-USB-Base.html#openDevice",
        "fct-type": "function",
        "title": "openDevice"
      },
      "index": {
        "description": "Open device and obtain device handle handle allows you to perform on the device in question This is non-blocking function no requests are sent over the bus It is advisable to use withDeviceHandle because it automatically closes the device when the computation terminates Exceptions NoMemException if there is memory allocation failure AccessException if the user has insufficient permissions NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "openDevice",
        "normalized": "Device-\u003eIO DeviceHandle",
        "package": "usb",
        "partial": "Device",
        "signature": "Device-\u003eIO DeviceHandle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:releaseInterface",
      "description": {
        "fct-descr": "\u003cp\u003eRelease an interface previously claimed with \u003ccode\u003e\u003ca\u003eclaimInterface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou should release all claimed interfaces before closing a device handle.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function. A SET_INTERFACE control request will be sent to the\ndevice, resetting interface state to the first alternate setting.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if the interface was not claimed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#releaseInterface",
        "fct-type": "function",
        "title": "releaseInterface"
      },
      "index": {
        "description": "Release an interface previously claimed with claimInterface You should release all claimed interfaces before closing device handle This is blocking function SET INTERFACE control request will be sent to the device resetting interface state to the first alternate setting Exceptions NotFoundException if the interface was not claimed NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "releaseInterface",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()",
        "package": "usb",
        "partial": "Interface",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:resetDevice",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB port reset to reinitialize a device.\n\u003c/p\u003e\u003cp\u003eThe system will attempt to restore the previous configuration and alternate\nsettings after the reset has completed.\n\u003c/p\u003e\u003cp\u003eIf the reset fails, the descriptors change, or the previous state cannot be\nrestored, the device will appear to be disconnected and reconnected. This means\nthat the device handle is no longer valid (you should close it) and rediscover\nthe device. A \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e is raised to indicate that this is the\ncase.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function which usually incurs a noticeable delay.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if re-enumeration is required, or if the\n   device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#resetDevice",
        "fct-type": "function",
        "title": "resetDevice"
      },
      "index": {
        "description": "Perform USB port reset to reinitialize device The system will attempt to restore the previous configuration and alternate settings after the reset has completed If the reset fails the descriptors change or the previous state cannot be restored the device will appear to be disconnected and reconnected This means that the device handle is no longer valid you should close it and rediscover the device NotFoundException is raised to indicate that this is the case This is blocking function which usually incurs noticeable delay Exceptions NotFoundException if re-enumeration is required or if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "resetDevice",
        "normalized": "DeviceHandle-\u003eIO()",
        "package": "usb",
        "partial": "Device",
        "signature": "DeviceHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:setConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSet the active configuration for a device.\n\u003c/p\u003e\u003cp\u003eThe operating system may or may not have already set an active configuration on\nthe device. It is up to your application to ensure the correct configuration is\nselected before you attempt to claim interfaces and perform other operations.\n\u003c/p\u003e\u003cp\u003eIf you call this function on a device already configured with the selected\nconfiguration, then this function will act as a lightweight device reset: it\nwill issue a SET_CONFIGURATION request using the current configuration, causing\nmost USB-related device state to be reset (altsetting reset to zero, endpoint\nhalts cleared, toggles reset).\n\u003c/p\u003e\u003cp\u003eYou cannot change/reset configuration if your application has claimed interfaces\n- you should free them with \u003ccode\u003e\u003ca\u003ereleaseInterface\u003c/a\u003e\u003c/code\u003e first. You cannot change/reset\nconfiguration if other applications or drivers have claimed interfaces.\n\u003c/p\u003e\u003cp\u003eA configuration value of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will put the device in an unconfigured\nstate. The USB specification states that a configuration value of 0 does this,\nhowever buggy devices exist which actually have a configuration 0.\n\u003c/p\u003e\u003cp\u003eYou should always use this function rather than formulating your own\nSET_CONFIGURATION control request. This is because the underlying operating\nsystem needs to know when such changes happen.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if the requested configuration does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if interfaces are currently claimed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Maybe ConfigValue -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#setConfig",
        "fct-type": "function",
        "title": "setConfig"
      },
      "index": {
        "description": "Set the active configuration for device The operating system may or may not have already set an active configuration on the device It is up to your application to ensure the correct configuration is selected before you attempt to claim interfaces and perform other operations If you call this function on device already configured with the selected configuration then this function will act as lightweight device reset it will issue SET CONFIGURATION request using the current configuration causing most USB-related device state to be reset altsetting reset to zero endpoint halts cleared toggles reset You cannot change reset configuration if your application has claimed interfaces you should free them with releaseInterface first You cannot change reset configuration if other applications or drivers have claimed interfaces configuration value of Nothing will put the device in an unconfigured state The USB specification states that configuration value of does this however buggy devices exist which actually have configuration You should always use this function rather than formulating your own SET CONFIGURATION control request This is because the underlying operating system needs to know when such changes happen This is blocking function Exceptions NotFoundException if the requested configuration does not exist BusyException if interfaces are currently claimed NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "setConfig",
        "normalized": "DeviceHandle-\u003eMaybe ConfigValue-\u003eIO()",
        "package": "usb",
        "partial": "Config",
        "signature": "DeviceHandle-\u003eMaybe ConfigValue-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:setInterfaceAltSetting",
      "description": {
        "fct-descr": "\u003cp\u003eActivate an alternate setting for an interface.\n\u003c/p\u003e\u003cp\u003eThe interface must have been previously claimed with \u003ccode\u003e\u003ca\u003eclaimInterface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou should always use this function rather than formulating your own\nSET_INTERFACE control request. This is because the underlying operating system\nneeds to know when such changes happen.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if the interface was not claimed or the requested\n   alternate setting does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e InterfaceAltSetting -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#setInterfaceAltSetting",
        "fct-type": "function",
        "title": "setInterfaceAltSetting"
      },
      "index": {
        "description": "Activate an alternate setting for an interface The interface must have been previously claimed with claimInterface You should always use this function rather than formulating your own SET INTERFACE control request This is because the underlying operating system needs to know when such changes happen This is blocking function Exceptions NotFoundException if the interface was not claimed or the requested alternate setting does not exist NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "setInterfaceAltSetting",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eInterfaceAltSetting-\u003eIO()",
        "package": "usb",
        "partial": "Interface Alt Setting",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eInterfaceAltSetting-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:withClaimedInterface",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithClaimedInterface\u003c/code\u003e claims the interface on the given device handle then\nexecutes the given computation. On exit from \u003ccode\u003ewithClaimedInterface\u003c/code\u003e, the\ninterface is released whether by normal termination or by raising an exception.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO α -\u003e IO α",
        "fct-source": "src/System-USB-Base.html#withClaimedInterface",
        "fct-type": "function",
        "title": "withClaimedInterface"
      },
      "index": {
        "description": "withClaimedInterface claims the interface on the given device handle then executes the given computation On exit from withClaimedInterface the interface is released whether by normal termination or by raising an exception",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "withClaimedInterface",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO a-\u003eIO a",
        "package": "usb",
        "partial": "Claimed Interface",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:withDetachedKernelDriver",
      "description": {
        "fct-descr": "\u003cp\u003eIf a kernel driver is active on the specified interface the driver is\ndetached and the given action is executed. If the action terminates, whether by\nnormal termination or by raising an exception, the kernel driver is attached\nagain. If a kernel driver is not active on the specified interface the action is\njust executed.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e IO α -\u003e IO α",
        "fct-source": "src/System-USB-Base.html#withDetachedKernelDriver",
        "fct-type": "function",
        "title": "withDetachedKernelDriver"
      },
      "index": {
        "description": "If kernel driver is active on the specified interface the driver is detached and the given action is executed If the action terminates whether by normal termination or by raising an exception the kernel driver is attached again If kernel driver is not active on the specified interface the action is just executed Exceptions NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "withDetachedKernelDriver",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eIO a-\u003eIO a",
        "package": "usb",
        "partial": "Detached Kernel Driver",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eIO α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-DeviceHandling.html#v:withDeviceHandle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithDeviceHandle dev act\u003c/code\u003e opens the \u003ccode\u003e\u003ca\u003eDevice\u003c/a\u003e\u003c/code\u003e \u003ccode\u003edev\u003c/code\u003e and passes\nthe resulting handle to the computation \u003ccode\u003eact\u003c/code\u003e. The handle will be closed on exit\nfrom \u003ccode\u003ewithDeviceHandle\u003c/code\u003e whether by normal termination or by raising an\nexception.\n\u003c/p\u003e",
        "fct-module": "System.USB.DeviceHandling",
        "fct-package": "usb",
        "fct-signature": "Device -\u003e (DeviceHandle -\u003e IO α) -\u003e IO α",
        "fct-source": "src/System-USB-Base.html#withDeviceHandle",
        "fct-type": "function",
        "title": "withDeviceHandle"
      },
      "index": {
        "description": "withDeviceHandle dev act opens the Device dev and passes the resulting handle to the computation act The handle will be closed on exit from withDeviceHandle whether by normal termination or by raising an exception",
        "hierarchy": "System USB DeviceHandling",
        "module": "System.USB.DeviceHandling",
        "name": "withDeviceHandle",
        "normalized": "Device-\u003e(DeviceHandle-\u003eIO a)-\u003eIO a",
        "package": "usb",
        "partial": "Device Handle",
        "signature": "Device-\u003e(DeviceHandle-\u003eIO α)-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Enumeration.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functionality for enumerating the USB devices currently\n attached to the system.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.Enumeration",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-Enumeration.html",
        "fct-type": "module",
        "title": "Enumeration"
      },
      "index": {
        "description": "This module provides functionality for enumerating the USB devices currently attached to the system",
        "hierarchy": "System USB Enumeration",
        "module": "System.USB.Enumeration",
        "name": "Enumeration",
        "normalized": "",
        "package": "usb",
        "partial": "Enumeration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Enumeration.html#t:Device",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type representing a USB device detected on the system.\n\u003c/p\u003e\u003cp\u003eYou can only obtain a USB device from the \u003ccode\u003e\u003ca\u003egetDevices\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eCertain operations can be performed on a device, but in order to do any I/O you\nwill have to first obtain a \u003ccode\u003e\u003ca\u003eDeviceHandle\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eJust because you have a reference to a device does not mean it is necessarily\nusable. The device may have been unplugged, you may not have permission to\noperate such device or another process or driver may be using the device.\n\u003c/p\u003e\u003cp\u003eTo get additional information about a device you can retrieve its descriptor\nusing \u003ccode\u003e\u003ca\u003egetDeviceDesc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Enumeration",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Device",
        "fct-type": "data",
        "title": "Device"
      },
      "index": {
        "description": "Abstract type representing USB device detected on the system You can only obtain USB device from the getDevices function Certain operations can be performed on device but in order to do any you will have to first obtain DeviceHandle using openDevice Just because you have reference to device does not mean it is necessarily usable The device may have been unplugged you may not have permission to operate such device or another process or driver may be using the device To get additional information about device you can retrieve its descriptor using getDeviceDesc",
        "hierarchy": "System USB Enumeration",
        "module": "System.USB.Enumeration",
        "name": "Device",
        "normalized": "",
        "package": "usb",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Enumeration.html#v:busNumber",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of the bus that a device is connected to.\n\u003c/p\u003e",
        "fct-module": "System.USB.Enumeration",
        "fct-package": "usb",
        "fct-signature": "Device -\u003e Word8",
        "fct-source": "src/System-USB-Base.html#busNumber",
        "fct-type": "function",
        "title": "busNumber"
      },
      "index": {
        "description": "The number of the bus that device is connected to",
        "hierarchy": "System USB Enumeration",
        "module": "System.USB.Enumeration",
        "name": "busNumber",
        "normalized": "Device-\u003eWord",
        "package": "usb",
        "partial": "Number",
        "signature": "Device-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Enumeration.html#v:deviceAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe address of the device on the bus it is connected to.\n\u003c/p\u003e",
        "fct-module": "System.USB.Enumeration",
        "fct-package": "usb",
        "fct-signature": "Device -\u003e Word8",
        "fct-source": "src/System-USB-Base.html#deviceAddress",
        "fct-type": "function",
        "title": "deviceAddress"
      },
      "index": {
        "description": "The address of the device on the bus it is connected to",
        "hierarchy": "System USB Enumeration",
        "module": "System.USB.Enumeration",
        "name": "deviceAddress",
        "normalized": "Device-\u003eWord",
        "package": "usb",
        "partial": "Address",
        "signature": "Device-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Enumeration.html#v:getDevices",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a vector of USB devices currently attached to the system.\n\u003c/p\u003e\u003cp\u003eThis is your entry point into finding a USB device.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoMemException\u003c/a\u003e\u003c/code\u003e on a memory allocation failure.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.Enumeration",
        "fct-package": "usb",
        "fct-signature": "Ctx -\u003e IO (Vector Device)",
        "fct-source": "src/System-USB-Base.html#getDevices",
        "fct-type": "function",
        "title": "getDevices"
      },
      "index": {
        "description": "Returns vector of USB devices currently attached to the system This is your entry point into finding USB device Exceptions NoMemException on memory allocation failure",
        "hierarchy": "System USB Enumeration",
        "module": "System.USB.Enumeration",
        "name": "getDevices",
        "normalized": "Ctx-\u003eIO(Vector Device)",
        "package": "usb",
        "partial": "Devices",
        "signature": "Ctx-\u003eIO(Vector Device)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#",
      "description": {
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-Exceptions.html",
        "fct-type": "module",
        "title": "Exceptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "Exceptions",
        "normalized": "",
        "package": "usb",
        "partial": "Exceptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#t:USBException",
      "description": {
        "fct-descr": "\u003cp\u003eType of USB exceptions.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "data",
        "title": "USBException"
      },
      "index": {
        "description": "Type of USB exceptions",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "USBException",
        "normalized": "",
        "package": "usb",
        "partial": "USBException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:AccessException",
      "description": {
        "fct-descr": "\u003cp\u003eAccess denied (insufficient permissions). It may\n   help to run your program with elevated privileges or\n   change the permissions of your device using\n   something like \u003ccode\u003eudev\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "AccessException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "AccessException"
      },
      "index": {
        "description": "Access denied insufficient permissions It may help to run your program with elevated privileges or change the permissions of your device using something like udev",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "AccessException",
        "normalized": "",
        "package": "usb",
        "partial": "Access Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:BusyException",
      "description": {
        "fct-descr": "\u003cp\u003eResource busy.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "BusyException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "BusyException"
      },
      "index": {
        "description": "Resource busy",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "BusyException",
        "normalized": "",
        "package": "usb",
        "partial": "Busy Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:IOException",
      "description": {
        "fct-descr": "\u003cp\u003eInput/output exception.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "IOException String",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "IOException"
      },
      "index": {
        "description": "Input output exception",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "IOException",
        "normalized": "",
        "package": "usb",
        "partial": "IOException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:InterruptedException",
      "description": {
        "fct-descr": "\u003cp\u003eSystem call interrupted (perhaps due to signal).\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "InterruptedException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "InterruptedException"
      },
      "index": {
        "description": "System call interrupted perhaps due to signal",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "InterruptedException",
        "normalized": "",
        "package": "usb",
        "partial": "Interrupted Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:InvalidParamException",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid parameter.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "InvalidParamException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "InvalidParamException"
      },
      "index": {
        "description": "Invalid parameter",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "InvalidParamException",
        "normalized": "",
        "package": "usb",
        "partial": "Invalid Param Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:NoDeviceException",
      "description": {
        "fct-descr": "\u003cp\u003eNo such device (it may have been disconnected).\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "NoDeviceException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "NoDeviceException"
      },
      "index": {
        "description": "No such device it may have been disconnected",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "NoDeviceException",
        "normalized": "",
        "package": "usb",
        "partial": "No Device Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:NoMemException",
      "description": {
        "fct-descr": "\u003cp\u003eInsufficient memory.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "NoMemException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "NoMemException"
      },
      "index": {
        "description": "Insufficient memory",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "NoMemException",
        "normalized": "",
        "package": "usb",
        "partial": "No Mem Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:NotFoundException",
      "description": {
        "fct-descr": "\u003cp\u003eEntity not found.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "NotFoundException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "NotFoundException"
      },
      "index": {
        "description": "Entity not found",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "NotFoundException",
        "normalized": "",
        "package": "usb",
        "partial": "Not Found Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:NotSupportedException",
      "description": {
        "fct-descr": "\u003cp\u003eOperation not supported or unimplemented on this\n   platform.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "NotSupportedException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "NotSupportedException"
      },
      "index": {
        "description": "Operation not supported or unimplemented on this platform",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "NotSupportedException",
        "normalized": "",
        "package": "usb",
        "partial": "Not Supported Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:OtherException",
      "description": {
        "fct-descr": "\u003cp\u003eOther exception.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "OtherException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "OtherException"
      },
      "index": {
        "description": "Other exception",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "OtherException",
        "normalized": "",
        "package": "usb",
        "partial": "Other Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:OverflowException",
      "description": {
        "fct-descr": "\u003cp\u003eIf the device offered to much data. See\n   \u003ca\u003ePackets and overflows\u003c/a\u003e in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "OverflowException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "OverflowException"
      },
      "index": {
        "description": "If the device offered to much data See Packets and overflows in the libusb documentation",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "OverflowException",
        "normalized": "",
        "package": "usb",
        "partial": "Overflow Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:PipeException",
      "description": {
        "fct-descr": "\u003cp\u003ePipe exception.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "PipeException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "PipeException"
      },
      "index": {
        "description": "Pipe exception",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "PipeException",
        "normalized": "",
        "package": "usb",
        "partial": "Pipe Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:TimeoutException",
      "description": {
        "fct-descr": "\u003cp\u003eOperation timed out.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "TimeoutException",
        "fct-source": "src/System-USB-Base.html#USBException",
        "fct-type": "function",
        "title": "TimeoutException"
      },
      "index": {
        "description": "Operation timed out",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "TimeoutException",
        "normalized": "",
        "package": "usb",
        "partial": "Timeout Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:incompleteReadException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e that is thrown when the number of bytes \u003cem\u003eread\u003c/em\u003e\n doesn't equal the requested number.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "USBException",
        "fct-source": "src/System-USB-Base.html#incompleteReadException",
        "fct-type": "function",
        "title": "incompleteReadException"
      },
      "index": {
        "description": "IOException that is thrown when the number of bytes read doesn equal the requested number",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "incompleteReadException",
        "normalized": "",
        "package": "usb",
        "partial": "Read Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:incompleteWriteException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e that is thrown when the number of bytes \u003cem\u003ewritten\u003c/em\u003e\n doesn't equal the requested number.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "USBException",
        "fct-source": "src/System-USB-Base.html#incompleteWriteException",
        "fct-type": "function",
        "title": "incompleteWriteException"
      },
      "index": {
        "description": "IOException that is thrown when the number of bytes written doesn equal the requested number",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "incompleteWriteException",
        "normalized": "",
        "package": "usb",
        "partial": "Write Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Exceptions.html#v:ioException",
      "description": {
        "fct-descr": "\u003cp\u003eA general \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Exceptions",
        "fct-package": "usb",
        "fct-signature": "USBException",
        "fct-source": "src/System-USB-Base.html#ioException",
        "fct-type": "function",
        "title": "ioException"
      },
      "index": {
        "description": "general IOException",
        "hierarchy": "System USB Exceptions",
        "module": "System.USB.Exceptions",
        "name": "ioException",
        "normalized": "",
        "package": "usb",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for performing standard device requests.\n The functions are primarily used for testing USB devices.\n\u003c/p\u003e\u003cp\u003eTo avoid name clashes with functions from \u003ccode\u003eSystem.USB\u003c/code\u003e it is advised to use\n an explicit import list or a qualified import.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html",
        "fct-type": "module",
        "title": "StandardDeviceRequests"
      },
      "index": {
        "description": "This module provides functions for performing standard device requests The functions are primarily used for testing USB devices To avoid name clashes with functions from System.USB it is advised to use an explicit import list or qualified import",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "StandardDeviceRequests",
        "normalized": "",
        "package": "usb",
        "partial": "Standard Device Requests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#t:FrameNumber",
      "description": {
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#FrameNumber",
        "fct-type": "type",
        "title": "FrameNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "FrameNumber",
        "normalized": "",
        "package": "usb",
        "partial": "Frame Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#t:TestMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. table 9-7\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#TestMode",
        "fct-type": "data",
        "title": "TestMode"
      },
      "index": {
        "description": "See USB Spec table",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "TestMode",
        "normalized": "",
        "package": "usb",
        "partial": "Test Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:Test_Force_Enable",
      "description": {
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "Test_Force_Enable",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#TestMode",
        "fct-type": "function",
        "title": "Test_Force_Enable"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "Test_Force_Enable",
        "normalized": "",
        "package": "usb",
        "partial": "Test Force Enable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:Test_J",
      "description": {
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "Test_J",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#TestMode",
        "fct-type": "function",
        "title": "Test_J"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "Test_J",
        "normalized": "",
        "package": "usb",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:Test_K",
      "description": {
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "Test_K",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#TestMode",
        "fct-type": "function",
        "title": "Test_K"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "Test_K",
        "normalized": "",
        "package": "usb",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:Test_Packet",
      "description": {
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "Test_Packet",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#TestMode",
        "fct-type": "function",
        "title": "Test_Packet"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "Test_Packet",
        "normalized": "",
        "package": "usb",
        "partial": "Test Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:Test_SE0_NAK",
      "description": {
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "Test_SE0_NAK",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#TestMode",
        "fct-type": "function",
        "title": "Test_SE0_NAK"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "Test_SE0_NAK",
        "normalized": "",
        "package": "usb",
        "partial": "Test SE NAK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:clearRemoteWakeup",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.1\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Timeout -\u003e IO ()",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#clearRemoteWakeup",
        "fct-type": "function",
        "title": "clearRemoteWakeup"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "clearRemoteWakeup",
        "normalized": "DeviceHandle-\u003eTimeout-\u003eIO()",
        "package": "usb",
        "partial": "Remote Wakeup",
        "signature": "DeviceHandle-\u003eTimeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:getConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.2\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis function is for testing purposes only!\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eYou should normally use \u003ccode\u003eSystem.USB.DeviceHandling.\u003ccode\u003e\u003ca\u003egetConfig\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e because\n that functon may exploit operating system caches (no I/O involved).\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Timeout -\u003e IO (Maybe ConfigValue)",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#getConfig",
        "fct-type": "function",
        "title": "getConfig"
      },
      "index": {
        "description": "See USB Spec section This function is for testing purposes only You should normally use System.USB.DeviceHandling getConfig because that functon may exploit operating system caches no involved",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "getConfig",
        "normalized": "DeviceHandle-\u003eTimeout-\u003eIO(Maybe ConfigValue)",
        "package": "usb",
        "partial": "Config",
        "signature": "DeviceHandle-\u003eTimeout-\u003eIO(Maybe ConfigValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:getDeviceStatus",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.5\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Timeout -\u003e IO DeviceStatus",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#getDeviceStatus",
        "fct-type": "function",
        "title": "getDeviceStatus"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "getDeviceStatus",
        "normalized": "DeviceHandle-\u003eTimeout-\u003eIO DeviceStatus",
        "package": "usb",
        "partial": "Device Status",
        "signature": "DeviceHandle-\u003eTimeout-\u003eIO DeviceStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:getEndpointStatus",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.5\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e Timeout -\u003e IO Bool",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#getEndpointStatus",
        "fct-type": "function",
        "title": "getEndpointStatus"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "getEndpointStatus",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eTimeout-\u003eIO Bool",
        "package": "usb",
        "partial": "Endpoint Status",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eTimeout-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:getInterfaceAltSetting",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.4\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e InterfaceNumber -\u003e Timeout -\u003e IO InterfaceAltSetting",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#getInterfaceAltSetting",
        "fct-type": "function",
        "title": "getInterfaceAltSetting"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "getInterfaceAltSetting",
        "normalized": "DeviceHandle-\u003eInterfaceNumber-\u003eTimeout-\u003eIO InterfaceAltSetting",
        "package": "usb",
        "partial": "Interface Alt Setting",
        "signature": "DeviceHandle-\u003eInterfaceNumber-\u003eTimeout-\u003eIO InterfaceAltSetting"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:setConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.7\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis function is for testing purposes only!\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eYou should normally use \u003ccode\u003eSystem.USB.DeviceHandling.\u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e because\n that function notifies the underlying operating system about the changed\n configuration.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Maybe ConfigValue -\u003e Timeout -\u003e IO ()",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#setConfig",
        "fct-type": "function",
        "title": "setConfig"
      },
      "index": {
        "description": "See USB Spec section This function is for testing purposes only You should normally use System.USB.DeviceHandling setConfig because that function notifies the underlying operating system about the changed configuration",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "setConfig",
        "normalized": "DeviceHandle-\u003eMaybe ConfigValue-\u003eTimeout-\u003eIO()",
        "package": "usb",
        "partial": "Config",
        "signature": "DeviceHandle-\u003eMaybe ConfigValue-\u003eTimeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:setDeviceAddress",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.6\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Word16 -\u003e Timeout -\u003e IO ()",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#setDeviceAddress",
        "fct-type": "function",
        "title": "setDeviceAddress"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "setDeviceAddress",
        "normalized": "DeviceHandle-\u003eWord-\u003eTimeout-\u003eIO()",
        "package": "usb",
        "partial": "Device Address",
        "signature": "DeviceHandle-\u003eWord-\u003eTimeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:setHalt",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.9\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e Timeout -\u003e IO ()",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#setHalt",
        "fct-type": "function",
        "title": "setHalt"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "setHalt",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eTimeout-\u003eIO()",
        "package": "usb",
        "partial": "Halt",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eTimeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:setRemoteWakeup",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.9\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Timeout -\u003e IO ()",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#setRemoteWakeup",
        "fct-type": "function",
        "title": "setRemoteWakeup"
      },
      "index": {
        "description": "See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "setRemoteWakeup",
        "normalized": "DeviceHandle-\u003eTimeout-\u003eIO()",
        "package": "usb",
        "partial": "Remote Wakeup",
        "signature": "DeviceHandle-\u003eTimeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:setStandardTestMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee: USB 2.0 Spec. section 9.4.9\n TODO: What about vendor-specific test modes?\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e TestMode -\u003e Timeout -\u003e IO ()",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#setStandardTestMode",
        "fct-type": "function",
        "title": "setStandardTestMode"
      },
      "index": {
        "description": "See USB Spec section TODO What about vendor-specific test modes",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "setStandardTestMode",
        "normalized": "DeviceHandle-\u003eTestMode-\u003eTimeout-\u003eIO()",
        "package": "usb",
        "partial": "Standard Test Mode",
        "signature": "DeviceHandle-\u003eTestMode-\u003eTimeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO-StandardDeviceRequests.html#v:synchFrame",
      "description": {
        "fct-descr": "\u003cp\u003eThis request is used to set and then report an endpoint's synchronization frame.\n\u003c/p\u003e\u003cp\u003eWhen an endpoint supports isochronous transfers, the endpoint may also require\nper-frame transfers to vary in size according to a specific pattern. The host\nand the endpoint must agree on which frame the repeating pattern begins. The\nnumber of the frame in which the pattern began is returned to the host.\n\u003c/p\u003e\u003cp\u003eIf a high-speed device supports the Synch Frame request, it must internally\nsynchronize itself to the zeroth microframe and have a time notion of classic\nframe. Only the frame number is used to synchronize and reported by the device\nendpoint (i.e., no microframe number). The endpoint must synchronize to the\nzeroth microframe.\n\u003c/p\u003e\u003cp\u003eThis value is only used for isochronous data transfers using implicit pattern\nsynchronization. If the specified endpoint does not support this request, then\nthe device will respond with a Request Error.\n\u003c/p\u003e\u003cp\u003eSee: USB 2.0 Spec. section 9.4.11\n\u003c/p\u003e",
        "fct-module": "System.USB.IO.StandardDeviceRequests",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e Timeout -\u003e IO FrameNumber",
        "fct-source": "src/System-USB-IO-StandardDeviceRequests.html#synchFrame",
        "fct-type": "function",
        "title": "synchFrame"
      },
      "index": {
        "description": "This request is used to set and then report an endpoint synchronization frame When an endpoint supports isochronous transfers the endpoint may also require per-frame transfers to vary in size according to specific pattern The host and the endpoint must agree on which frame the repeating pattern begins The number of the frame in which the pattern began is returned to the host If high-speed device supports the Synch Frame request it must internally synchronize itself to the zeroth microframe and have time notion of classic frame Only the frame number is used to synchronize and reported by the device endpoint i.e no microframe number The endpoint must synchronize to the zeroth microframe This value is only used for isochronous data transfers using implicit pattern synchronization If the specified endpoint does not support this request then the device will respond with Request Error See USB Spec section",
        "hierarchy": "System USB IO StandardDeviceRequests",
        "module": "System.USB.IO.StandardDeviceRequests",
        "name": "synchFrame",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eTimeout-\u003eIO FrameNumber",
        "package": "usb",
        "partial": "Frame",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eTimeout-\u003eIO FrameNumber"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for performing \u003cem\u003econtrol\u003c/em\u003e, \u003cem\u003ebulk\u003c/em\u003e and\n \u003cem\u003einterrupt\u003c/em\u003e transfers.\n\u003c/p\u003e\u003cp\u003eWhen your system supports the GHC \u003ccode\u003e\u003ca\u003eEventManager\u003c/a\u003e\u003c/code\u003e this module additionally\n exports functions for performing \u003cem\u003eisochronous\u003c/em\u003e transfers. These are currently\n not available on Windows.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) when using\n the isochronous functions. They throw a runtime error otherwise!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "This module provides functions for performing control bulk and interrupt transfers When your system supports the GHC EventManager this module additionally exports functions for performing isochronous transfers These are currently not available on Windows WARNING You need to enable the threaded runtime threaded when using the isochronous functions They throw runtime error otherwise",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "IO",
        "normalized": "",
        "package": "usb",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:ControlAction",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym that names the parameters of a control transfer.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ControlAction",
        "fct-type": "type",
        "title": "ControlAction"
      },
      "index": {
        "description": "Handy type synonym that names the parameters of control transfer",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ControlAction",
        "normalized": "",
        "package": "usb",
        "partial": "Control Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Index",
      "description": {
        "fct-descr": "\u003cp\u003e(Host-endian)\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "Host-endian",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Index",
        "normalized": "",
        "package": "usb",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:ReadAction",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym for read transfers.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eReadAction\u003c/code\u003e is a function which takes a \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e which defines how many bytes\nto read and a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e. The function returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action which, when\nexecuted, performs the actual read and returns the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e that was read\npaired with a \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e flag which indicates whether the transfer\n\u003ccode\u003e\u003ca\u003eCompleted\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTimedOut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ReadAction",
        "fct-type": "type",
        "title": "ReadAction"
      },
      "index": {
        "description": "Handy type synonym for read transfers ReadAction is function which takes Size which defines how many bytes to read and Timeout The function returns an IO action which when executed performs the actual read and returns the ByteString that was read paired with Status flag which indicates whether the transfer Completed or TimedOut",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ReadAction",
        "normalized": "",
        "package": "usb",
        "partial": "Read Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:ReadExactAction",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym for read transfers that must exactly read the specified\n number of bytes. An \u003ccode\u003e\u003ca\u003eincompleteReadException\u003c/a\u003e\u003c/code\u003e is thrown otherwise.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#ReadExactAction",
        "fct-type": "type",
        "title": "ReadExactAction"
      },
      "index": {
        "description": "Handy type synonym for read transfers that must exactly read the specified number of bytes An incompleteReadException is thrown otherwise",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ReadExactAction",
        "normalized": "",
        "package": "usb",
        "partial": "Read Exact Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Recipient",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Recipient",
        "fct-type": "data",
        "title": "Recipient"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Recipient",
        "normalized": "",
        "package": "usb",
        "partial": "Recipient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Request",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Request",
        "fct-type": "type",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Request",
        "normalized": "",
        "package": "usb",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:RequestType",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#RequestType",
        "fct-type": "data",
        "title": "RequestType"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "RequestType",
        "normalized": "",
        "package": "usb",
        "partial": "Request Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Size",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of bytes transferred.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Size",
        "fct-type": "type",
        "title": "Size"
      },
      "index": {
        "description": "Number of bytes transferred",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Size",
        "normalized": "",
        "package": "usb",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eStatus of a terminated transfer.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "Status of terminated transfer",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Status",
        "normalized": "",
        "package": "usb",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Timeout",
      "description": {
        "fct-descr": "\u003cp\u003eA timeout in milliseconds. A timeout defines how long a transfer should wait\n before giving up due to no response being received.\n Use \u003ccode\u003e\u003ca\u003enoTimeout\u003c/a\u003e\u003c/code\u003e for no timeout.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Timeout",
        "fct-type": "type",
        "title": "Timeout"
      },
      "index": {
        "description": "timeout in milliseconds timeout defines how long transfer should wait before giving up due to no response being received Use noTimeout for no timeout",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Timeout",
        "normalized": "",
        "package": "usb",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003e(Host-endian)\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Value",
        "fct-type": "type",
        "title": "Value"
      },
      "index": {
        "description": "Host-endian",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Value",
        "normalized": "",
        "package": "usb",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:WriteAction",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym for write transfers.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eWriteAction\u003c/code\u003e is a function which takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to write and a\n\u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e. The function returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action which, when exectued, returns the\nnumber of bytes that were actually written paired with a \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e flag which\nindicates whether the transfer \u003ccode\u003e\u003ca\u003eCompleted\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTimedOut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#WriteAction",
        "fct-type": "type",
        "title": "WriteAction"
      },
      "index": {
        "description": "Handy type synonym for write transfers WriteAction is function which takes ByteString to write and Timeout The function returns an IO action which when exectued returns the number of bytes that were actually written paired with Status flag which indicates whether the transfer Completed or TimedOut",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "WriteAction",
        "normalized": "",
        "package": "usb",
        "partial": "Write Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#t:WriteExactAction",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym for write transfers that must exactly write all the\n given bytes. An \u003ccode\u003e\u003ca\u003eincompleteWriteException\u003c/a\u003e\u003c/code\u003e is thrown otherwise.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#WriteExactAction",
        "fct-type": "type",
        "title": "WriteExactAction"
      },
      "index": {
        "description": "Handy type synonym for write transfers that must exactly write all the given bytes An incompleteWriteException is thrown otherwise",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "WriteExactAction",
        "normalized": "",
        "package": "usb",
        "partial": "Write Exact Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:Class",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "Class",
        "fct-source": "src/System-USB-Base.html#RequestType",
        "fct-type": "function",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Class",
        "normalized": "",
        "package": "usb",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:Completed",
      "description": {
        "fct-descr": "\u003cp\u003eAll bytes were transferred\n   within the maximum allowed \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e period.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "Completed",
        "fct-source": "src/System-USB-Base.html#Status",
        "fct-type": "function",
        "title": "Completed"
      },
      "index": {
        "description": "All bytes were transferred within the maximum allowed Timeout period",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Completed",
        "normalized": "",
        "package": "usb",
        "partial": "Completed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:Standard",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "Standard",
        "fct-source": "src/System-USB-Base.html#RequestType",
        "fct-type": "function",
        "title": "Standard"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Standard",
        "normalized": "",
        "package": "usb",
        "partial": "Standard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:TimedOut",
      "description": {
        "fct-descr": "\u003cp\u003eNot all bytes were transferred\n   within the maximum allowed \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e period.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "TimedOut",
        "fct-source": "src/System-USB-Base.html#Status",
        "fct-type": "function",
        "title": "TimedOut"
      },
      "index": {
        "description": "Not all bytes were transferred within the maximum allowed Timeout period",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "TimedOut",
        "normalized": "",
        "package": "usb",
        "partial": "Timed Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:ToDevice",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "ToDevice",
        "fct-source": "src/System-USB-Base.html#Recipient",
        "fct-type": "function",
        "title": "ToDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ToDevice",
        "normalized": "",
        "package": "usb",
        "partial": "To Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:ToEndpoint",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "ToEndpoint",
        "fct-source": "src/System-USB-Base.html#Recipient",
        "fct-type": "function",
        "title": "ToEndpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ToEndpoint",
        "normalized": "",
        "package": "usb",
        "partial": "To Endpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:ToInterface",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "ToInterface",
        "fct-source": "src/System-USB-Base.html#Recipient",
        "fct-type": "function",
        "title": "ToInterface"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ToInterface",
        "normalized": "",
        "package": "usb",
        "partial": "To Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:ToOther",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "ToOther",
        "fct-source": "src/System-USB-Base.html#Recipient",
        "fct-type": "function",
        "title": "ToOther"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "ToOther",
        "normalized": "",
        "package": "usb",
        "partial": "To Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:Vendor",
      "description": {
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "Vendor",
        "fct-source": "src/System-USB-Base.html#RequestType",
        "fct-type": "function",
        "title": "Vendor"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "Vendor",
        "normalized": "",
        "package": "usb",
        "partial": "Vendor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:control",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003econtrol\u003c/em\u003e request that does not transfer data.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeoutException\u003c/a\u003e\u003c/code\u003e if the transfer timed out.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the control request was not supported by the device\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e  Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e ControlAction (Timeout -\u003e IO ())",
        "fct-source": "src/System-USB-Base.html#control",
        "fct-type": "function",
        "title": "control"
      },
      "index": {
        "description": "Perform USB control request that does not transfer data Exceptions TimeoutException if the transfer timed out PipeException if the control request was not supported by the device NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "control",
        "normalized": "DeviceHandle-\u003eControlAction(Timeout-\u003eIO())",
        "package": "usb",
        "partial": "",
        "signature": "DeviceHandle-\u003eControlAction(Timeout-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:noTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eA timeout of 0 denotes no timeout so: \u003ccode\u003enoTimeout = 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "Timeout",
        "fct-source": "src/System-USB-Base.html#noTimeout",
        "fct-type": "function",
        "title": "noTimeout"
      },
      "index": {
        "description": "timeout of denotes no timeout so noTimeout",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "noTimeout",
        "normalized": "",
        "package": "usb",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:readBulk",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003ebulk\u003c/em\u003e read.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data, see\n   \u003ca\u003ePackets and overflows\u003c/a\u003e\n   in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e ReadAction",
        "fct-source": "src/System-USB-Base.html#readBulk",
        "fct-type": "function",
        "title": "readBulk"
      },
      "index": {
        "description": "Perform USB bulk read Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "readBulk",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eReadAction",
        "package": "usb",
        "partial": "Bulk",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eReadAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:readControl",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003econtrol\u003c/em\u003e read.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the control request was not supported by the device\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e  Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e ControlAction ReadAction",
        "fct-source": "src/System-USB-Base.html#readControl",
        "fct-type": "function",
        "title": "readControl"
      },
      "index": {
        "description": "Perform USB control read Exceptions PipeException if the control request was not supported by the device NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "readControl",
        "normalized": "DeviceHandle-\u003eControlAction ReadAction",
        "package": "usb",
        "partial": "Control",
        "signature": "DeviceHandle-\u003eControlAction ReadAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:readControlExact",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function similar to \u003ccode\u003e\u003ca\u003ereadControl\u003c/a\u003e\u003c/code\u003e which checks if the\n specified number of bytes to read were actually read.\n Throws an \u003ccode\u003e\u003ca\u003eincompleteReadException\u003c/a\u003e\u003c/code\u003e if this is not the case.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e ControlAction ReadExactAction",
        "fct-source": "src/System-USB-Base.html#readControlExact",
        "fct-type": "function",
        "title": "readControlExact"
      },
      "index": {
        "description": "convenience function similar to readControl which checks if the specified number of bytes to read were actually read Throws an incompleteReadException if this is not the case",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "readControlExact",
        "normalized": "DeviceHandle-\u003eControlAction ReadExactAction",
        "package": "usb",
        "partial": "Control Exact",
        "signature": "DeviceHandle-\u003eControlAction ReadExactAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:readInterrupt",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003einterrupt\u003c/em\u003e read.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data, see\n   \u003ca\u003ePackets and overflows\u003c/a\u003e\n   in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e ReadAction",
        "fct-source": "src/System-USB-Base.html#readInterrupt",
        "fct-type": "function",
        "title": "readInterrupt"
      },
      "index": {
        "description": "Perform USB interrupt read Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "readInterrupt",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eReadAction",
        "package": "usb",
        "partial": "Interrupt",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eReadAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:readIsochronous",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003eisochronous\u003c/em\u003e read.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\nfunction to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data, see\n   \u003ca\u003ePackets and overflows\u003c/a\u003e\n   in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle-\u003e EndpointAddress-\u003e Vector Size-\u003e Timeout-\u003e IO (Vector ByteString)",
        "fct-type": "function",
        "title": "readIsochronous"
      },
      "index": {
        "description": "Perform USB isochronous read WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "readIsochronous",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eVector Size-\u003eTimeout-\u003eIO(Vector ByteString)",
        "package": "usb",
        "partial": "Isochronous",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eVector Size-\u003eTimeout-\u003eIO(Vector ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:writeBulk",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003ebulk\u003c/em\u003e write.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data, see\n   \u003ca\u003ePackets and overflows\u003c/a\u003e\n   in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e WriteAction",
        "fct-source": "src/System-USB-Base.html#writeBulk",
        "fct-type": "function",
        "title": "writeBulk"
      },
      "index": {
        "description": "Perform USB bulk write Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "writeBulk",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eWriteAction",
        "package": "usb",
        "partial": "Bulk",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eWriteAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:writeControl",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003econtrol\u003c/em\u003e write.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the control request was not supported by the device\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e  Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e ControlAction WriteAction",
        "fct-source": "src/System-USB-Base.html#writeControl",
        "fct-type": "function",
        "title": "writeControl"
      },
      "index": {
        "description": "Perform USB control write Exceptions PipeException if the control request was not supported by the device NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "writeControl",
        "normalized": "DeviceHandle-\u003eControlAction WriteAction",
        "package": "usb",
        "partial": "Control",
        "signature": "DeviceHandle-\u003eControlAction WriteAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:writeControlExact",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function similar to \u003ccode\u003e\u003ca\u003ewriteControl\u003c/a\u003e\u003c/code\u003e which checks if the given\n bytes were actually fully written.\n Throws an \u003ccode\u003e\u003ca\u003eincompleteWriteException\u003c/a\u003e\u003c/code\u003e if this is not the case.\n\u003c/p\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e ControlAction WriteExactAction",
        "fct-source": "src/System-USB-Base.html#writeControlExact",
        "fct-type": "function",
        "title": "writeControlExact"
      },
      "index": {
        "description": "convenience function similar to writeControl which checks if the given bytes were actually fully written Throws an incompleteWriteException if this is not the case",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "writeControlExact",
        "normalized": "DeviceHandle-\u003eControlAction WriteExactAction",
        "package": "usb",
        "partial": "Control Exact",
        "signature": "DeviceHandle-\u003eControlAction WriteExactAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:writeInterrupt",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003einterrupt\u003c/em\u003e write.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data, see\n   \u003ca\u003ePackets and overflows\u003c/a\u003e\n   in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e WriteAction",
        "fct-source": "src/System-USB-Base.html#writeInterrupt",
        "fct-type": "function",
        "title": "writeInterrupt"
      },
      "index": {
        "description": "Perform USB interrupt write Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "writeInterrupt",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eWriteAction",
        "package": "usb",
        "partial": "Interrupt",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eWriteAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-IO.html#v:writeIsochronous",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a USB \u003cem\u003eisochronous\u003c/em\u003e write.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\nfunction to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data, see\n   \u003ca\u003ePackets and overflows\u003c/a\u003e\n   in the \u003ccode\u003elibusb\u003c/code\u003e documentation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.IO",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e EndpointAddress -\u003e Vector ByteString -\u003e Timeout -\u003e IO (Vector Size)",
        "fct-source": "src/System-USB-Base.html#writeIsochronous",
        "fct-type": "function",
        "title": "writeIsochronous"
      },
      "index": {
        "description": "Perform USB isochronous write WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation NoDeviceException if the device has been disconnected Another USBException",
        "hierarchy": "System USB IO",
        "module": "System.USB.IO",
        "name": "writeIsochronous",
        "normalized": "DeviceHandle-\u003eEndpointAddress-\u003eVector ByteString-\u003eTimeout-\u003eIO(Vector Size)",
        "package": "usb",
        "partial": "Isochronous",
        "signature": "DeviceHandle-\u003eEndpointAddress-\u003eVector ByteString-\u003eTimeout-\u003eIO(Vector Size)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functionality for initializing the \u003ccode\u003eusb\u003c/code\u003e library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-Initialization.html",
        "fct-type": "module",
        "title": "Initialization"
      },
      "index": {
        "description": "This module provides functionality for initializing the usb library",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "Initialization",
        "normalized": "",
        "package": "usb",
        "partial": "Initialization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type representing a USB session.\n\u003c/p\u003e\u003cp\u003eThe concept of individual sessions allows your program to use multiple threads\nthat can independently use this library without interfering with eachother.\n\u003c/p\u003e\u003cp\u003eSessions are created and initialized by \u003ccode\u003e\u003ca\u003enewCtx\u003c/a\u003e\u003c/code\u003e and are automatically closed\nwhen they are garbage collected.\n\u003c/p\u003e\u003cp\u003eThe only functions that receive a \u003ccode\u003eCtx\u003c/code\u003e are \u003ccode\u003e\u003ca\u003esetDebug\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetDevices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Ctx",
        "fct-type": "data",
        "title": "Ctx"
      },
      "index": {
        "description": "Abstract type representing USB session The concept of individual sessions allows your program to use multiple threads that can independently use this library without interfering with eachother Sessions are created and initialized by newCtx and are automatically closed when they are garbage collected The only functions that receive Ctx are setDebug and getDevices",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "Ctx",
        "normalized": "",
        "package": "usb",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#t:Verbosity",
      "description": {
        "fct-descr": "\u003cp\u003eMessage verbosity\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Verbosity",
        "fct-type": "data",
        "title": "Verbosity"
      },
      "index": {
        "description": "Message verbosity",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "Verbosity",
        "normalized": "",
        "package": "usb",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:PrintErrors",
      "description": {
        "fct-descr": "\u003cp\u003eError messages are printed to stderr\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "PrintErrors",
        "fct-source": "src/System-USB-Base.html#Verbosity",
        "fct-type": "function",
        "title": "PrintErrors"
      },
      "index": {
        "description": "Error messages are printed to stderr",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "PrintErrors",
        "normalized": "",
        "package": "usb",
        "partial": "Print Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:PrintInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformational messages are printed to stdout,\n   warning and error messages are printed to stderr\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "PrintInfo",
        "fct-source": "src/System-USB-Base.html#Verbosity",
        "fct-type": "function",
        "title": "PrintInfo"
      },
      "index": {
        "description": "Informational messages are printed to stdout warning and error messages are printed to stderr",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "PrintInfo",
        "normalized": "",
        "package": "usb",
        "partial": "Print Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:PrintNothing",
      "description": {
        "fct-descr": "\u003cp\u003eNo messages are ever printed by the library\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "PrintNothing",
        "fct-source": "src/System-USB-Base.html#Verbosity",
        "fct-type": "function",
        "title": "PrintNothing"
      },
      "index": {
        "description": "No messages are ever printed by the library",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "PrintNothing",
        "normalized": "",
        "package": "usb",
        "partial": "Print Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:PrintWarnings",
      "description": {
        "fct-descr": "\u003cp\u003eWarning and error messages are printed to stderr\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "PrintWarnings",
        "fct-source": "src/System-USB-Base.html#Verbosity",
        "fct-type": "function",
        "title": "PrintWarnings"
      },
      "index": {
        "description": "Warning and error messages are printed to stderr",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "PrintWarnings",
        "normalized": "",
        "package": "usb",
        "partial": "Print Warnings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:newCtx",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and initialize a new USB context.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eNote that the internal \u003ccode\u003elibusb\u003c/code\u003e event handling can return errors. These errors\noccur in the thread that is executing the event handling loop. \u003ccode\u003e\u003ca\u003enewCtx\u003c/a\u003e\u003c/code\u003e will\nprint these errors to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e. If you need to handle the errors yourself (for\nexample log them in an application specific way) please use \u003ccode\u003e\u003ca\u003enewCtx'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "IO Ctx",
        "fct-source": "src/System-USB-Base.html#newCtx",
        "fct-type": "function",
        "title": "newCtx"
      },
      "index": {
        "description": "Create and initialize new USB context This function may throw USBException Note that the internal libusb event handling can return errors These errors occur in the thread that is executing the event handling loop newCtx will print these errors to stderr If you need to handle the errors yourself for example log them in an application specific way please use newCtx",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "newCtx",
        "normalized": "",
        "package": "usb",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:newCtx-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewCtx\u003c/a\u003e\u003c/code\u003e but enables you to specify the way errors should be handled\n that occur while handling \u003ccode\u003elibusb\u003c/code\u003e events.\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "(USBException -\u003e IO ()) -\u003e IO Ctx",
        "fct-source": "src/System-USB-Base.html#newCtx%27",
        "fct-type": "function",
        "title": "newCtx'"
      },
      "index": {
        "description": "Like newCtx but enables you to specify the way errors should be handled that occur while handling libusb events",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "newCtx'",
        "normalized": "(USBException-\u003eIO())-\u003eIO Ctx",
        "package": "usb",
        "partial": "Ctx'",
        "signature": "(USBException-\u003eIO())-\u003eIO Ctx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Initialization.html#v:setDebug",
      "description": {
        "fct-descr": "\u003cp\u003eSet message verbosity.\n\u003c/p\u003e\u003cp\u003eThe default level is \u003ccode\u003e\u003ca\u003ePrintNothing\u003c/a\u003e\u003c/code\u003e. This means no messages are ever\nprinted. If you choose to increase the message verbosity level you must ensure\nthat your application does not close the \u003ccode\u003estdout\u003c/code\u003e/\u003ccode\u003estderr\u003c/code\u003e file descriptors.\n\u003c/p\u003e\u003cp\u003eYou are advised to set the debug level to \u003ccode\u003e\u003ca\u003ePrintWarnings\u003c/a\u003e\u003c/code\u003e. Libusb is\nconservative with its message logging. Most of the time it will only log\nmessages that explain error conditions and other oddities. This will help you\ndebug your software.\n\u003c/p\u003e\u003cp\u003eThe LIBUSB_DEBUG environment variable overrules the debug level set by this\nfunction. The message verbosity is fixed to the value in the environment\nvariable if it is defined.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003elibusb\u003c/code\u003e was compiled without any message logging, this function does nothing:\nyou'll never get any messages.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003elibusb\u003c/code\u003e was compiled with verbose debug message logging, this function does\nnothing: you'll always get messages from all levels.\n\u003c/p\u003e",
        "fct-module": "System.USB.Initialization",
        "fct-package": "usb",
        "fct-signature": "Ctx -\u003e Verbosity -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#setDebug",
        "fct-type": "function",
        "title": "setDebug"
      },
      "index": {
        "description": "Set message verbosity The default level is PrintNothing This means no messages are ever printed If you choose to increase the message verbosity level you must ensure that your application does not close the stdout stderr file descriptors You are advised to set the debug level to PrintWarnings Libusb is conservative with its message logging Most of the time it will only log messages that explain error conditions and other oddities This will help you debug your software The LIBUSB DEBUG environment variable overrules the debug level set by this function The message verbosity is fixed to the value in the environment variable if it is defined If libusb was compiled without any message logging this function does nothing you ll never get any messages If libusb was compiled with verbose debug message logging this function does nothing you ll always get messages from all levels",
        "hierarchy": "System USB Initialization",
        "module": "System.USB.Initialization",
        "name": "setDebug",
        "normalized": "Ctx-\u003eVerbosity-\u003eIO()",
        "package": "usb",
        "partial": "Debug",
        "signature": "Ctx-\u003eVerbosity-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is not intended for end users. It provides internal and unsafe\n functions used for extending this package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module is not intended for end users It provides internal and unsafe functions used for extending this package",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "usb",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#t:C-39-TransferFunc",
      "description": {
        "fct-descr": "\u003cp\u003eHandy type synonym for the \u003ccode\u003elibusb\u003c/code\u003e transfer functions.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#C%27TransferFunc",
        "fct-type": "type",
        "title": "C'TransferFunc"
      },
      "index": {
        "description": "Handy type synonym for the libusb transfer functions",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "C'TransferFunc",
        "normalized": "",
        "package": "usb",
        "partial": "C' Transfer Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#t:C-39-TransferType",
      "description": {
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#C%27TransferType",
        "fct-type": "type",
        "title": "C'TransferType"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "C'TransferType",
        "normalized": "",
        "package": "usb",
        "partial": "C' Transfer Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#t:Lock",
      "description": {
        "fct-descr": "\u003cp\u003eA lock is in one of two states: \"locked\" or \"unlocked\".\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "data",
        "fct-source": "src/System-USB-Base.html#Lock",
        "fct-type": "data",
        "title": "Lock"
      },
      "index": {
        "description": "lock is in one of two states locked or unlocked",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "Lock",
        "normalized": "",
        "package": "usb",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#t:Wait",
      "description": {
        "fct-descr": "\u003cp\u003eA function to wait for the termination of a submitted transfer.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "type",
        "fct-source": "src/System-USB-Base.html#Wait",
        "fct-type": "type",
        "title": "Wait"
      },
      "index": {
        "description": "function to wait for the termination of submitted transfer",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "Wait",
        "normalized": "",
        "package": "usb",
        "partial": "Wait",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:acquire",
      "description": {
        "fct-descr": "\u003cp\u003eAcquires the \u003ccode\u003e\u003ca\u003eLock\u003c/a\u003e\u003c/code\u003e. Blocks if another thread has acquired the \u003ccode\u003e\u003ca\u003eLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eacquire\u003c/code\u003e behaves as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003eacquire\u003c/code\u003e changes the state to \"locked\".\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003eacquire\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until a call to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e in\nanother thread wakes the calling thread. Upon awakening it will change the state\nto \"locked\".\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Lock -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#acquire",
        "fct-type": "function",
        "title": "acquire"
      },
      "index": {
        "description": "Acquires the Lock Blocks if another thread has acquired the Lock acquire behaves as follows When the state is unlocked acquire changes the state to locked When the state is locked acquire blocks until call to release in another thread wakes the calling thread Upon awakening it will change the state to locked",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "acquire",
        "normalized": "Lock-\u003eIO()",
        "package": "usb",
        "partial": "",
        "signature": "Lock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:allocaTransfer",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a transfer with the given number of isochronous packets and apply\n the function to the resulting pointer. The transfer is automatically freed\n when the function terminates (whether normally or by raising an exception).\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNoMemException\u003c/a\u003e\u003c/code\u003e may be thrown.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Int -\u003e (Ptr C'libusb_transfer -\u003e IO α) -\u003e IO α",
        "fct-source": "src/System-USB-Base.html#allocaTransfer",
        "fct-type": "function",
        "title": "allocaTransfer"
      },
      "index": {
        "description": "Allocate transfer with the given number of isochronous packets and apply the function to the resulting pointer The transfer is automatically freed when the function terminates whether normally or by raising an exception NoMemException may be thrown",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "allocaTransfer",
        "normalized": "Int-\u003e(Ptr C'libusb_transfer-\u003eIO a)-\u003eIO a",
        "package": "usb",
        "partial": "Transfer",
        "signature": "Int-\u003e(Ptr C'libusb_transfer-\u003eIO α)-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:convertUSBException",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003eC'libusb_error\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003eC'libusb_error\u003c/code\u003e is\n unknown an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is thrown.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "α -\u003e USBException",
        "fct-source": "src/System-USB-Base.html#convertUSBException",
        "fct-type": "function",
        "title": "convertUSBException"
      },
      "index": {
        "description": "Convert libusb error to USBException If the libusb error is unknown an error is thrown",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "convertUSBException",
        "normalized": "a-\u003eUSBException",
        "package": "usb",
        "partial": "USBException",
        "signature": "α-\u003eUSBException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:getWait",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if the system supports asynchronous I/O.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means asynchronous I/O is not supported so synchronous I/O should\n   be used instead.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e wait\u003c/code\u003e means that asynchronous I/O is supported. The \u003ccode\u003ewait\u003c/code\u003e\n function can be used to wait for submitted transfers.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e Maybe Wait",
        "fct-source": "src/System-USB-Base.html#getWait",
        "fct-type": "function",
        "title": "getWait"
      },
      "index": {
        "description": "Checks if the system supports asynchronous Nothing means asynchronous is not supported so synchronous should be used instead Just wait means that asynchronous is supported The wait function can be used to wait for submitted transfers",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "getWait",
        "normalized": "DeviceHandle-\u003eMaybe Wait",
        "package": "usb",
        "partial": "Wait",
        "signature": "DeviceHandle-\u003eMaybe Wait"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:initIsoPacketDesc",
      "description": {
        "fct-descr": "\u003cp\u003eAn isochronous packet descriptor with all fields zero except for the length.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Size -\u003e C'libusb_iso_packet_descriptor",
        "fct-source": "src/System-USB-Base.html#initIsoPacketDesc",
        "fct-type": "function",
        "title": "initIsoPacketDesc"
      },
      "index": {
        "description": "An isochronous packet descriptor with all fields zero except for the length",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "initIsoPacketDesc",
        "normalized": "Size-\u003eC'libusb_iso_packet_descriptor",
        "package": "usb",
        "partial": "Iso Packet Desc",
        "signature": "Size-\u003eC'libusb_iso_packet_descriptor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:marshalEndpointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eMarshal an endpoint address so that it can be used by the \u003ccode\u003elibusb\u003c/code\u003e transfer\n functions.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "EndpointAddress -\u003e α",
        "fct-source": "src/System-USB-Base.html#marshalEndpointAddress",
        "fct-type": "function",
        "title": "marshalEndpointAddress"
      },
      "index": {
        "description": "Marshal an endpoint address so that it can be used by the libusb transfer functions",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "marshalEndpointAddress",
        "normalized": "EndpointAddress-\u003ea",
        "package": "usb",
        "partial": "Endpoint Address",
        "signature": "EndpointAddress-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:newLock",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lock in the \"unlocked\" state.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "IO Lock",
        "fct-source": "src/System-USB-Base.html#newLock",
        "fct-type": "function",
        "title": "newLock"
      },
      "index": {
        "description": "Create lock in the unlocked state",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "newLock",
        "normalized": "",
        "package": "usb",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:pokeVector",
      "description": {
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Ptr a -\u003e Vector a -\u003e IO ()",
        "fct-source": "src/Utils.html#pokeVector",
        "fct-type": "function",
        "title": "pokeVector"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "pokeVector",
        "normalized": "Ptr a-\u003eVector a-\u003eIO()",
        "package": "usb",
        "partial": "Vector",
        "signature": "Ptr a-\u003eVector a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erelease\u003c/code\u003e changes the state to \"unlocked\" and returns immediately.\n\u003c/p\u003e\u003cp\u003eThe behaviour is undefined when a lock in the \"unlocked\" state is released!\n\u003c/p\u003e\u003cp\u003eIf there are any threads blocked on \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e the thread that first called\n\u003ccode\u003eacquire\u003c/code\u003e will be woken up.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Lock -\u003e IO ()",
        "fct-source": "src/System-USB-Base.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "release changes the state to unlocked and returns immediately The behaviour is undefined when lock in the unlocked state is released If there are any threads blocked on acquire the thread that first called acquire will be woken up",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "release",
        "normalized": "Lock-\u003eIO()",
        "package": "usb",
        "partial": "",
        "signature": "Lock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:unmarshalEndpointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eUnmarshal an 8bit word as an endpoint address. This function is primarily\n used when unmarshalling USB descriptors.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Word8 -\u003e EndpointAddress",
        "fct-source": "src/System-USB-Base.html#unmarshalEndpointAddress",
        "fct-type": "function",
        "title": "unmarshalEndpointAddress"
      },
      "index": {
        "description": "Unmarshal an bit word as an endpoint address This function is primarily used when unmarshalling USB descriptors",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "unmarshalEndpointAddress",
        "normalized": "Word-\u003eEndpointAddress",
        "package": "usb",
        "partial": "Endpoint Address",
        "signature": "Word-\u003eEndpointAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:unmarshalReleaseNumber",
      "description": {
        "fct-descr": "\u003cp\u003eUnmarshal a a 16bit word as a release number. The 16bit word should be\n encoded as a\n \u003ca\u003eBinary Coded Decimal\u003c/a\u003e\n using 4 bits for each of the 4 decimals.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Word16 -\u003e ReleaseNumber",
        "fct-source": "src/System-USB-Base.html#unmarshalReleaseNumber",
        "fct-type": "function",
        "title": "unmarshalReleaseNumber"
      },
      "index": {
        "description": "Unmarshal bit word as release number The bit word should be encoded as Binary Coded Decimal using bits for each of the decimals",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "unmarshalReleaseNumber",
        "normalized": "Word-\u003eReleaseNumber",
        "package": "usb",
        "partial": "Release Number",
        "signature": "Word-\u003eReleaseNumber"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:unmarshalStrIx",
      "description": {
        "fct-descr": "\u003cp\u003eUnmarshal an 8bit word to a string descriptor index. 0 denotes that a\n string descriptor is not available and unmarshals to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "Word8 -\u003e Maybe StrIx",
        "fct-source": "src/System-USB-Base.html#unmarshalStrIx",
        "fct-type": "function",
        "title": "unmarshalStrIx"
      },
      "index": {
        "description": "Unmarshal an bit word to string descriptor index denotes that string descriptor is not available and unmarshals to Nothing",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "unmarshalStrIx",
        "normalized": "Word-\u003eMaybe StrIx",
        "package": "usb",
        "partial": "Str Ix",
        "signature": "Word-\u003eMaybe StrIx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:withCallback",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003eFunPtr\u003c/code\u003e to the given transfer callback function and pass it to\n the continuation function. The \u003ccode\u003eFunPtr\u003c/code\u003e is automatically freed when the\n continuation terminates (whether normally or by raising an exception).\n\u003c/p\u003e",
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "(Ptr C'libusb_transfer -\u003e IO ()) -\u003e (C'libusb_transfer_cb_fn -\u003e IO α) -\u003e IO α",
        "fct-source": "src/System-USB-Base.html#withCallback",
        "fct-type": "function",
        "title": "withCallback"
      },
      "index": {
        "description": "Create FunPtr to the given transfer callback function and pass it to the continuation function The FunPtr is automatically freed when the continuation terminates whether normally or by raising an exception",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "withCallback",
        "normalized": "(Ptr C'libusb_transfer-\u003eIO())-\u003e(C'libusb_transfer_cb_fn-\u003eIO a)-\u003eIO a",
        "package": "usb",
        "partial": "Callback",
        "signature": "(Ptr C'libusb_transfer-\u003eIO())-\u003e(C'libusb_transfer_cb_fn-\u003eIO α)-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB-Internal.html#v:withDevHndlPtr",
      "description": {
        "fct-module": "System.USB.Internal",
        "fct-package": "usb",
        "fct-signature": "DeviceHandle -\u003e (Ptr C'libusb_device_handle -\u003e IO α) -\u003e IO α",
        "fct-source": "src/System-USB-Base.html#withDevHndlPtr",
        "fct-type": "function",
        "title": "withDevHndlPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "System USB Internal",
        "module": "System.USB.Internal",
        "name": "withDevHndlPtr",
        "normalized": "DeviceHandle-\u003e(Ptr C'libusb_device_handle-\u003eIO a)-\u003eIO a",
        "package": "usb",
        "partial": "Dev Hndl Ptr",
        "signature": "DeviceHandle-\u003e(Ptr C'libusb_device_handle-\u003eIO α)-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/usb/docs/System-USB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA convenience module which re-exports all the important modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.USB",
        "fct-package": "usb",
        "fct-signature": "module",
        "fct-source": "src/System-USB.html",
        "fct-type": "module",
        "title": "USB"
      },
      "index": {
        "description": "convenience module which re-exports all the important modules",
        "hierarchy": "System USB",
        "module": "System.USB",
        "name": "USB",
        "normalized": "",
        "package": "usb",
        "partial": "USB",
        "signature": ""
      }
    }
  }
]