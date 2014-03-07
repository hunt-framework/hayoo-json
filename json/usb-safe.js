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
        "word": "usb-safe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides the following guarantees for working with USB devices:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e You can't reference handles to devices that are closed. In other words: no\n   I/O with closed handles is possible.\n\u003c/li\u003e\u003cli\u003e The programmer can specify the \u003cem\u003eregion\u003c/em\u003e in which devices should remain\n   open. On exit from the region the opened devices will be closed\n   automatically.\n\u003c/li\u003e\u003cli\u003e You can't reference handles to configurations that have not been set.\n\u003c/li\u003e\u003cli\u003e You can't reference handles to interfaces that have not been claimed.\n\u003c/li\u003e\u003cli\u003e Just like with devices, the programmer can specify the region in which\n   interfaces should remain claimed. On exit from the region the claimed\n   interfaces will be released automatically.\n\u003c/li\u003e\u003cli\u003e You can't reference handles to alternates that have not been set.\n\u003c/li\u003e\u003cli\u003e You can't reference endpoints that don't belong to a setted alternate.\n\u003c/li\u003e\u003cli\u003e You can't read from an endpoint with an \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e transfer direction.\n\u003c/li\u003e\u003cli\u003e You can't write to an endpoint with an \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e transfer direction.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis modules makes use of a technique called \u003cem\u003eLightweight monadic regions\u003c/em\u003e\n invented by Oleg Kiselyov and Chung-chieh Shan\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://okmij.org/ftp/Haskell/regions.html#light-weight\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis technique is implemented in the \u003ccode\u003eregions\u003c/code\u003e package of which the\n \u003ccode\u003eControl.Monad.Trans.Region\u003c/code\u003e module is re-exported by this module.\n\u003c/p\u003e\u003cp\u003eSee the \u003ccode\u003eusb-safe-examples\u003c/code\u003e package for examples how to use this library:\n\u003c/p\u003e\u003cpre\u003egit clone \u003ca\u003ehttps://github.com/basvandijk/usb-safe-examples\u003c/a\u003e\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.USB.Safe",
          "name": "Safe",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides the following guarantees for working with USB devices You can reference handles to devices that are closed In other words no with closed handles is possible The programmer can specify the region in which devices should remain open On exit from the region the opened devices will be closed automatically You can reference handles to configurations that have not been set You can reference handles to interfaces that have not been claimed Just like with devices the programmer can specify the region in which interfaces should remain claimed On exit from the region the claimed interfaces will be released automatically You can reference handles to alternates that have not been set You can reference endpoints that don belong to setted alternate You can read from an endpoint with an Out transfer direction You can write to an endpoint with an In transfer direction This modules makes use of technique called Lightweight monadic regions invented by Oleg Kiselyov and Chung-chieh Shan See http okmij.org ftp Haskell regions.html light-weight This technique is implemented in the regions package of which the Control.Monad.Trans.Region module is re-exported by this module See the usb-safe-examples package for examples how to use this library git clone https github.com basvandijk usb-safe-examples",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Safe",
          "package": "usb-safe",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supported \u003ccode\u003e\u003ca\u003eInterface\u003c/a\u003e\u003c/code\u003e alternate setting\n which you can retrieve using \u003ccode\u003e\u003ca\u003egetAlternates\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "Alternate",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Alternate",
          "type": "data"
        },
        "index": {
          "description": "supported Interface alternate setting which you can retrieve using getAlternates",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Alternate",
          "package": "usb-safe",
          "partial": "Alternate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Alternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to a setted alternate setting.\n\u003c/p\u003e\u003cp\u003eYou get a handle to an alternate using\n\u003ccode\u003e\u003ca\u003esetAlternate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveAlternate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetAlternateWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type variable \u003ccode\u003esAlt\u003c/code\u003e is used to ensure that\nyou can't return this handle from these functions.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "AlternateHandle",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#AlternateHandle",
          "type": "data"
        },
        "index": {
          "description": "handle to setted alternate setting You get handle to an alternate using setAlternate useActiveAlternate or setAlternateWhich The type variable sAlt is used to ensure that you can return this handle from these functions",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "AlternateHandle",
          "package": "usb-safe",
          "partial": "Alternate Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:AlternateHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Bulk",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Bulk",
          "type": "data"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Bulk",
          "package": "usb-safe",
          "partial": "Bulk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Bulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supported configuration of a USB device\nparameterized by the region \u003ccode\u003er\u003c/code\u003e in which it was created.\n\u003c/p\u003e\u003cp\u003eNote that, just like a regional device handle, a configuration can be duplicated\nto a parent region using \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlso note that you can get the descriptor of the configuration\nby applying \u003ccode\u003e\u003ca\u003egetDesc\u003c/a\u003e\u003c/code\u003e to it.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "Config",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Config",
          "type": "data"
        },
        "index": {
          "description": "supported configuration of USB device parameterized by the region in which it was created Note that just like regional device handle configuration can be duplicated to parent region using dup Also note that you can get the descriptor of the configuration by applying getDesc to it",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Config",
          "package": "usb-safe",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to an active \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e\nwhich you can get using: \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type variable \u003ccode\u003esCfg\u003c/code\u003e is used to ensure that\nyou can't return this handle from these functions.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "ConfigHandle",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#ConfigHandle",
          "type": "data"
        },
        "index": {
          "description": "handle to an active Config which you can get using setConfig useActiveConfig or setConfigWhich The type variable sCfg is used to ensure that you can return this handle from these functions",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "ConfigHandle",
          "package": "usb-safe",
          "partial": "Config Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:ConfigHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Control",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Control",
          "type": "data"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Control",
          "package": "usb-safe",
          "partial": "Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym that names the parameters of a control transfer.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "ControlAction",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#ControlAction",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym that names the parameters of control transfer",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "ControlAction",
          "package": "usb-safe",
          "partial": "Control Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:ControlAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O operations on endpoints are type-safe. You can only read from an\nendpoint with an \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e transfer direction and you can only write to an endpoint\nwith an \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e transfer direction.\n\u003c/p\u003e\u003cp\u003eReading and writing also have different implementations for the different\nendpoint transfer types like: \u003ccode\u003e\u003ca\u003eBulk\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e. I/O with endpoints of\nother transfer types like \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIsochronous\u003c/a\u003e\u003c/code\u003e is not possible.\n\u003c/p\u003e\u003cp\u003eThis type lifts the transfer direction and transfer type information to the\ntype-level so that I/O operations like \u003ccode\u003e\u003ca\u003ereadEndpoint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteEndpoint\u003c/a\u003e\u003c/code\u003e can\nspecify which endpoints they support.\n\u003c/p\u003e\u003cp\u003eYou can retrieve the endpoints of an alternate using \u003ccode\u003e\u003ca\u003egetEndpoints\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "Endpoint",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Endpoint",
          "type": "data"
        },
        "index": {
          "description": "operations on endpoints are type-safe You can only read from an endpoint with an In transfer direction and you can only write to an endpoint with an Out transfer direction Reading and writing also have different implementations for the different endpoint transfer types like Bulk and Interrupt with endpoints of other transfer types like Control and Isochronous is not possible This type lifts the transfer direction and transfer type information to the type-level so that operations like readEndpoint and writeEndpoint can specify which endpoints they support You can retrieve the endpoints of an alternate using getEndpoints",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Endpoint",
          "package": "usb-safe",
          "partial": "Endpoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of transfer types that support enumeration.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "EnumReadEndpoint",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#EnumReadEndpoint",
          "type": "class"
        },
        "index": {
          "description": "Class of transfer types that support enumeration",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "EnumReadEndpoint",
          "package": "usb-safe",
          "partial": "Enum Read Endpoint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:EnumReadEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "GetDescriptor",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#GetDescriptor",
          "type": "class"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "GetDescriptor",
          "package": "usb-safe",
          "partial": "Get Descriptor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:GetDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn transfer direction (device -\u003e host) used for reading.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "In",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#In",
          "type": "data"
        },
        "index": {
          "description": "In transfer direction device host used for reading",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "In",
          "package": "usb-safe",
          "partial": "In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA supported interface of a configuration\nwhich you can retrieve using \u003ccode\u003e\u003ca\u003egetInterfaces\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo retrieve the \u003ccode\u003e\u003ca\u003eInterface\u003c/a\u003e\u003c/code\u003e descriptors of an interface use \u003ccode\u003e\u003ca\u003egetDesc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "Interface",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Interface",
          "type": "data"
        },
        "index": {
          "description": "supported interface of configuration which you can retrieve using getInterfaces To retrieve the Interface descriptors of an interface use getDesc",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Interface",
          "package": "usb-safe",
          "partial": "Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Interrupt",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Interrupt",
          "type": "data"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Interrupt",
          "package": "usb-safe",
          "partial": "Interrupt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Isochronous",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Isochronous",
          "type": "data"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Isochronous",
          "package": "usb-safe",
          "partial": "Isochronous",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Isochronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "MkTransferDirection",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#MkTransferDirection",
          "type": "class"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "MkTransferDirection",
          "package": "usb-safe",
          "partial": "Mk Transfer Direction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:MkTransferDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "MkTransferType",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#MkTransferType",
          "type": "class"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "MkTransferType",
          "package": "usb-safe",
          "partial": "Mk Transfer Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:MkTransferType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception can be thrown in \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e to indicate that the\ndevice is currently not configured.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "NoActiveConfig",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#NoActiveConfig",
          "type": "data"
        },
        "index": {
          "description": "This exception can be thrown in useActiveConfig to indicate that the device is currently not configured",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "NoActiveConfig",
          "package": "usb-safe",
          "partial": "No Active Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:NoActiveConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOut transfer direction (host -\u003e device) used for writing.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "Out",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#Out",
          "type": "data"
        },
        "index": {
          "description": "Out transfer direction host device used for writing",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Out",
          "package": "usb-safe",
          "partial": "Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym for read transfers.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eReadAction\u003c/code\u003e is a function which takes a size which defines how many bytes to\nread and a timeout. The function returns an action which, when executed,\nperforms the actual read and returns the bytestring that was read paired with an\nindication if the transfer timed out.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "ReadAction",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#ReadAction",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym for read transfers ReadAction is function which takes size which defines how many bytes to read and timeout The function returns an action which when executed performs the actual read and returns the bytestring that was read paired with an indication if the transfer timed out",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "ReadAction",
          "package": "usb-safe",
          "partial": "Read Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:ReadAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of transfer types that support reading.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "ReadEndpoint",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#ReadEndpoint",
          "type": "class"
        },
        "index": {
          "description": "Class of transfer types that support reading",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "ReadEndpoint",
          "package": "usb-safe",
          "partial": "Read Endpoint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:ReadEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regional handle to an opened USB device.\n\u003c/p\u003e\u003cp\u003eA regional handle to an opened USB device can be created by applying\n\u003ccode\u003e\u003ca\u003eopenDevice\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithDevice\u003c/a\u003e\u003c/code\u003e to the USB device you wish to open.\n\u003c/p\u003e\u003cp\u003eNote that you can also \u003cem\u003eduplicate\u003c/em\u003e a regional device handle by applying \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e to it.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "RegionalDeviceHandle",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#RegionalDeviceHandle",
          "type": "data"
        },
        "index": {
          "description": "regional handle to an opened USB device regional handle to an opened USB device can be created by applying openDevice or withDevice to the USB device you wish to open Note that you can also duplicate regional device handle by applying dup to it",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "RegionalDeviceHandle",
          "package": "usb-safe",
          "partial": "Regional Device Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:RegionalDeviceHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regional handle to a claimed interface.\n\u003c/p\u003e\u003cp\u003eA regional handle to a claimed interface can be created\nby applying \u003ccode\u003e\u003ca\u003eclaim\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithInterface\u003c/a\u003e\u003c/code\u003e to the interface you wish to claim.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "RegionalInterfaceHandle",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#RegionalInterfaceHandle",
          "type": "data"
        },
        "index": {
          "description": "regional handle to claimed interface regional handle to claimed interface can be created by applying claim or withInterface to the interface you wish to claim",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "RegionalInterfaceHandle",
          "package": "usb-safe",
          "partial": "Regional Interface Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:RegionalInterfaceHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl transfers can have three request types: \u003ccode\u003eStandard\u003c/code\u003e, \u003ccode\u003eClass\u003c/code\u003e and\n\u003ccode\u003eVendor\u003c/code\u003e. We disallow \u003ccode\u003eStandard\u003c/code\u003e requests however because with them you can\ndestroy the safety guarantees that this module provides.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "RequestType",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#RequestType",
          "type": "data"
        },
        "index": {
          "description": "Control transfers can have three request types Standard Class and Vendor We disallow Standard requests however because with them you can destroy the safety guarantees that this module provides",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "RequestType",
          "package": "usb-safe",
          "partial": "Request Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:RequestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception can be thrown in:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eresetDevice\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esetAlternate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetAlternateWhich\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eto indicate that the device was already configured with a setting.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "SettingAlreadySet",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#SettingAlreadySet",
          "type": "data"
        },
        "index": {
          "description": "This exception can be thrown in resetDevice setConfig or setConfigWhich setAlternate or setAlternateWhich to indicate that the device was already configured with setting",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "SettingAlreadySet",
          "package": "usb-safe",
          "partial": "Setting Already Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:SettingAlreadySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "TransferDirection",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#TransferDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "TransferDirection",
          "package": "usb-safe",
          "partial": "Transfer Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:TransferDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "TransferType",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#TransferType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "TransferType",
          "package": "usb-safe",
          "partial": "Transfer Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:TransferType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym for write transfers.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eWriteAction\u003c/code\u003e is a function which takes the bytestring to write and a\ntimeout. The function returns an action which, when exectued, returns the number\nof bytes that were actually written paired with an indication if the transfer\ntimed out.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "WriteAction",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#WriteAction",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym for write transfers WriteAction is function which takes the bytestring to write and timeout The function returns an action which when exectued returns the number of bytes that were actually written paired with an indication if the transfer timed out",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "WriteAction",
          "package": "usb-safe",
          "partial": "Write Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:WriteAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of transfer types that support writing\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "WriteEndpoint",
          "package": "usb-safe",
          "source": "src/System-USB-Safe.html#WriteEndpoint",
          "type": "class"
        },
        "index": {
          "description": "Class of transfer types that support writing",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "WriteEndpoint",
          "package": "usb-safe",
          "partial": "Write Endpoint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#t:WriteEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Bulk",
          "package": "usb-safe",
          "signature": "TransferType Bulk",
          "source": "src/System-USB-Safe.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Bulk",
          "package": "usb-safe",
          "partial": "Bulk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Bulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Class",
          "package": "usb-safe",
          "signature": "Class",
          "source": "src/System-USB-Safe.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Class",
          "package": "usb-safe",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Control",
          "package": "usb-safe",
          "signature": "TransferType Control",
          "source": "src/System-USB-Safe.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Control",
          "package": "usb-safe",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "In",
          "package": "usb-safe",
          "signature": "TransferDirection In",
          "source": "src/System-USB-Safe.html#TransferDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "In",
          "package": "usb-safe",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Interrupt",
          "package": "usb-safe",
          "signature": "TransferType Interrupt",
          "source": "src/System-USB-Safe.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Interrupt",
          "package": "usb-safe",
          "partial": "Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Isochronous",
          "package": "usb-safe",
          "signature": "TransferType Isochronous",
          "source": "src/System-USB-Safe.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Isochronous",
          "package": "usb-safe",
          "partial": "Isochronous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Isochronous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "NoActiveConfig",
          "package": "usb-safe",
          "signature": "NoActiveConfig",
          "source": "src/System-USB-Safe.html#NoActiveConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "NoActiveConfig",
          "package": "usb-safe",
          "partial": "No Active Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:NoActiveConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Out",
          "package": "usb-safe",
          "signature": "TransferDirection Out",
          "source": "src/System-USB-Safe.html#TransferDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Out",
          "package": "usb-safe",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "SettingAlreadySet",
          "package": "usb-safe",
          "signature": "SettingAlreadySet",
          "source": "src/System-USB-Safe.html#SettingAlreadySet",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "SettingAlreadySet",
          "package": "usb-safe",
          "partial": "Setting Already Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:SettingAlreadySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "Vendor",
          "package": "usb-safe",
          "signature": "Vendor",
          "source": "src/System-USB-Safe.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "Vendor",
          "package": "usb-safe",
          "partial": "Vendor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:Vendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-attach an interface's kernel driver, which was previously\ndetached using \u003ccode\u003e\u003ca\u003edetachKernelDriver\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no kernel driver was active.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eInvalidParamException\u003c/a\u003e\u003c/code\u003e if the interface does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if the driver cannot be attached because the interface\n   is claimed by a program or driver.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "attachKernelDriver",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e InterfaceNumber -\u003e cr ()",
          "source": "src/System-USB-Safe.html#attachKernelDriver",
          "type": "function"
        },
        "index": {
          "description": "Re-attach an interface kernel driver which was previously detached using detachKernelDriver Exceptions NotFoundException if no kernel driver was active InvalidParamException if the interface does not exist NoDeviceException if the device has been disconnected BusyException if the driver cannot be attached because the interface is claimed by program or driver Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "attachKernelDriver",
          "normalized": "RegionalDeviceHandle a-\u003eInterfaceNumber-\u003eb()",
          "package": "usb-safe",
          "partial": "Kernel Driver",
          "signature": "RegionalDeviceHandle pr-\u003eInterfaceNumber-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:attachKernelDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClaim the given interface in the region.\nWhen the region terminates the interface is released automatically.\n\u003c/p\u003e\u003cp\u003eNote that it is allowed to claim an already-claimed interface.\n\u003c/p\u003e\u003cp\u003eClaiming of interfaces is a purely logical operation; it does not cause any\nrequests to be sent over the bus. Interface claiming is used to instruct the\nunderlying operating system that your application wishes to take ownership of\nthe interface.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if another program or driver has claimed the interface.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "claim",
          "package": "usb-safe",
          "signature": "Interface sCfg-\u003e RegionT s pr (RegionalInterfaceHandle sCfg (RegionT s pr))",
          "type": "function"
        },
        "index": {
          "description": "Claim the given interface in the region When the region terminates the interface is released automatically Note that it is allowed to claim an already-claimed interface Claiming of interfaces is purely logical operation it does not cause any requests to be sent over the bus Interface claiming is used to instruct the underlying operating system that your application wishes to take ownership of the interface This is non-blocking function Exceptions BusyException if another program or driver has claimed the interface NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "claim",
          "normalized": "Interface a-\u003eRegionT b c(RegionalInterfaceHandle a(RegionT b c))",
          "package": "usb-safe",
          "signature": "Interface sCfg-\u003eRegionT s pr(RegionalInterfaceHandle sCfg(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:claim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the halt/stall condition for an endpoint.\n\u003c/p\u003e\u003cp\u003eEndpoints with halt status are unable to receive or transmit data\nuntil the halt condition is stalled.\n\u003c/p\u003e\u003cp\u003eYou should cancel all pending transfers before attempting to clear the halt condition.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "clearHalt",
          "package": "usb-safe",
          "signature": "Endpoint transDir transType sAlt pr -\u003e cr ()",
          "source": "src/System-USB-Safe.html#clearHalt",
          "type": "function"
        },
        "index": {
          "description": "Clear the halt stall condition for an endpoint Endpoints with halt status are unable to receive or transmit data until the halt condition is stalled You should cancel all pending transfers before attempting to clear the halt condition This is blocking function Exceptions NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "clearHalt",
          "normalized": "Endpoint a b c d-\u003ee()",
          "package": "usb-safe",
          "partial": "Halt",
          "signature": "Endpoint transDir transType sAlt pr-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:clearHalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a USB \u003cem\u003econtrol\u003c/em\u003e request that does not transfer data.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeoutException\u003c/a\u003e\u003c/code\u003e if the transfer timed out.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the control request was not supported by the device\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e  Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "control",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e ControlAction (Timeout -\u003e cr ())",
          "source": "src/System-USB-Safe.html#control",
          "type": "function"
        },
        "index": {
          "description": "Perform USB control request that does not transfer data Exceptions TimeoutException if the transfer timed out PipeException if the control request was not supported by the device NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "control",
          "normalized": "RegionalDeviceHandle a-\u003eControlAction(Timeout-\u003eb())",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr-\u003eControlAction(Timeout-\u003ecr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetach a kernel driver from an interface.\n\u003c/p\u003e\u003cp\u003eIf successful, you will then be able to claim the interface and perform I/O.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no kernel driver was active.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eInvalidParamException\u003c/a\u003e\u003c/code\u003e if the interface does not exist.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "detachKernelDriver",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e InterfaceNumber -\u003e cr ()",
          "source": "src/System-USB-Safe.html#detachKernelDriver",
          "type": "function"
        },
        "index": {
          "description": "Detach kernel driver from an interface If successful you will then be able to claim the interface and perform Exceptions NotFoundException if no kernel driver was active InvalidParamException if the interface does not exist NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "detachKernelDriver",
          "normalized": "RegionalDeviceHandle a-\u003eInterfaceNumber-\u003eb()",
          "package": "usb-safe",
          "partial": "Kernel Driver",
          "signature": "RegionalDeviceHandle pr-\u003eInterfaceNumber-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:detachKernelDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumerator for an \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e endpoint\n with either a \u003ccode\u003e\u003ca\u003eBulk\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e transfer type.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "enumReadEndpoint",
          "package": "usb-safe",
          "signature": "enumReadEndpoint",
          "source": "src/System-USB-Safe.html#enumReadEndpoint",
          "type": "method"
        },
        "index": {
          "description": "An enumerator for an In endpoint with either Bulk or Interrupt transfer type",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "enumReadEndpoint",
          "package": "usb-safe",
          "partial": "Read Endpoint",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:enumReadEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee enumerator for reading \u003cem\u003eisochronous\u003c/em\u003e endpoints.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\n function to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "enumReadIsochronousEndpoint",
          "package": "usb-safe",
          "signature": "Endpoint In Isochronous sAlt pr -\u003e [Size] -\u003e Timeout -\u003e Enumerator [s] cr α",
          "source": "src/System-USB-Safe.html#enumReadIsochronousEndpoint",
          "type": "function"
        },
        "index": {
          "description": "Iteratee enumerator for reading isochronous endpoints WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "enumReadIsochronousEndpoint",
          "normalized": "Endpoint In Isochronous a b-\u003e[Size]-\u003eTimeout-\u003eEnumerator[c]d e",
          "package": "usb-safe",
          "partial": "Read Isochronous Endpoint",
          "signature": "Endpoint In Isochronous sAlt pr-\u003e[Size]-\u003eTimeout-\u003eEnumerator[s]cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:enumReadIsochronousEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the supported alternate settings from the given interface handle.\n\u003c/p\u003e\u003cp\u003eNote that the alternate setting is parameterized by the same type variables as\nthe interface handle. This ensures you can never use an alternate setting\noutside the region in which the interface handle was created.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getAlternates",
          "package": "usb-safe",
          "signature": "RegionalInterfaceHandle sCfg r -\u003e [Alternate sCfg r]",
          "source": "src/System-USB-Safe.html#getAlternates",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the supported alternate settings from the given interface handle Note that the alternate setting is parameterized by the same type variables as the interface handle This ensures you can never use an alternate setting outside the region in which the interface handle was created",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getAlternates",
          "normalized": "RegionalInterfaceHandle a b-\u003e[Alternate a b]",
          "package": "usb-safe",
          "partial": "Alternates",
          "signature": "RegionalInterfaceHandle sCfg r-\u003e[Alternate sCfg r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getAlternates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the supported configurations from the given regional handle.\n\u003c/p\u003e\u003cp\u003eNote that the configuration is parameterized by the same region \u003ccode\u003er\u003c/code\u003e in which the\nregional handle was created. This ensures you can never use a configuration\noutside that region.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getConfigs",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle r -\u003e [Config r]",
          "source": "src/System-USB-Safe.html#getConfigs",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the supported configurations from the given regional handle Note that the configuration is parameterized by the same region in which the regional handle was created This ensures you can never use configuration outside that region",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getConfigs",
          "normalized": "RegionalDeviceHandle a-\u003e[Config a]",
          "package": "usb-safe",
          "partial": "Configs",
          "signature": "RegionalDeviceHandle r-\u003e[Config r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the descriptor of a given USB entity.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getDesc",
          "package": "usb-safe",
          "signature": "α -\u003e desc",
          "source": "src/System-USB-Safe.html#getDesc",
          "type": "method"
        },
        "index": {
          "description": "Get the descriptor of given USB entity",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getDesc",
          "normalized": "a-\u003eb",
          "package": "usb-safe",
          "partial": "Desc",
          "signature": "α-\u003edesc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for retrieving the device from the given regional handle.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getDevice",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle r -\u003e Device",
          "source": "src/System-USB-Safe.html#getDevice",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for retrieving the device from the given regional handle",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getDevice",
          "normalized": "RegionalDeviceHandle a-\u003eDevice",
          "package": "usb-safe",
          "partial": "Device",
          "signature": "RegionalDeviceHandle r-\u003eDevice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all the endpoints from the given alternate handle\n which are of the given transfer direction and transfer type.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getEndpoints",
          "package": "usb-safe",
          "signature": "AlternateHandle sAlt r-\u003e TransferDirection transDir-\u003e TransferType transType-\u003e [Endpoint transDir transType sAlt r]",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all the endpoints from the given alternate handle which are of the given transfer direction and transfer type",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getEndpoints",
          "normalized": "AlternateHandle a b-\u003eTransferDirection c-\u003eTransferType d-\u003e[Endpoint c d a b]",
          "package": "usb-safe",
          "partial": "Endpoints",
          "signature": "AlternateHandle sAlt r-\u003eTransferDirection transDir-\u003eTransferType transType-\u003e[Endpoint transDir transType sAlt r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getEndpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003egetEndpoints\u003c/a\u003e\u003c/code\u003e but will retrieve the endpoints based on the\n inferred type of transfer direction and transfer type.\n\u003c/p\u003e\u003cp\u003eNote that:\n \u003ccode\u003egetEndpoints' altHndl = \u003ccode\u003e\u003ca\u003egetEndpoints\u003c/a\u003e\u003c/code\u003e altHndl \u003ccode\u003e\u003ca\u003emkTransferDirection\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emkTransferType\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getEndpoints'",
          "package": "usb-safe",
          "signature": "AlternateHandle sAlt r -\u003e [Endpoint transDir transType sAlt r]",
          "source": "src/System-USB-Safe.html#getEndpoints%27",
          "type": "function"
        },
        "index": {
          "description": "Similar to getEndpoints but will retrieve the endpoints based on the inferred type of transfer direction and transfer type Note that getEndpoints altHndl getEndpoints altHndl mkTransferDirection mkTransferType",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getEndpoints'",
          "normalized": "AlternateHandle a b-\u003e[Endpoint c d a b]",
          "package": "usb-safe",
          "partial": "Endpoints'",
          "signature": "AlternateHandle sAlt r-\u003e[Endpoint transDir transType sAlt r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getEndpoints-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the supported interfaces from the configuration handle.\n\u003c/p\u003e\u003cp\u003eNote that the interface is parameterized by the \u003ccode\u003esCfg\u003c/code\u003e of the configuration\nhandle it is derived from. This ensures that it can never be returned from the\nfunctions that created this configuration handle: \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe latter is useful because outside those functions the active configuration\nmay change. If at that moment you still have an interface of the old\nconfiguration claiming it would be an error.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getInterfaces",
          "package": "usb-safe",
          "signature": "ConfigHandle sCfg -\u003e [Interface sCfg]",
          "source": "src/System-USB-Safe.html#getInterfaces",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the supported interfaces from the configuration handle Note that the interface is parameterized by the sCfg of the configuration handle it is derived from This ensures that it can never be returned from the functions that created this configuration handle setConfig useActiveConfig and setConfigWhich The latter is useful because outside those functions the active configuration may change If at that moment you still have an interface of the old configuration claiming it would be an error",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getInterfaces",
          "normalized": "ConfigHandle a-\u003e[Interface a]",
          "package": "usb-safe",
          "partial": "Interfaces",
          "signature": "ConfigHandle sCfg-\u003e[Interface sCfg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a list of supported languages.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getLanguages",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e cr [LangId]",
          "source": "src/System-USB-Safe.html#getLanguages",
          "type": "function"
        },
        "index": {
          "description": "Retrieve list of supported languages This function may throw USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getLanguages",
          "normalized": "RegionalDeviceHandle a-\u003eb[LangId]",
          "package": "usb-safe",
          "partial": "Languages",
          "signature": "RegionalDeviceHandle pr-\u003ecr[LangId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getLanguages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a string descriptor from a device.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO: The following can be made more type-safe!\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWhen I call \u003ccode\u003e\u003ca\u003egetStrDesc\u003c/a\u003e\u003c/code\u003e I would like the type system to guarantee that the\ngiven \u003ccode\u003eStrIx\u003c/code\u003e and \u003ccode\u003eLangId\u003c/code\u003e actually belong to the given \u003ccode\u003eHandle\u003c/code\u003e. In other\nwords I would like to get a type error when they are some arbitrary number or\ncome from another device.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getStrDesc",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr-\u003e StrIx-\u003e LangId-\u003e Int-\u003e cr Text",
          "type": "function"
        },
        "index": {
          "description": "Retrieve string descriptor from device This function may throw USBException TODO The following can be made more type-safe When call getStrDesc would like the type system to guarantee that the given StrIx and LangId actually belong to the given Handle In other words would like to get type error when they are some arbitrary number or come from another device",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getStrDesc",
          "normalized": "RegionalDeviceHandle a-\u003eStrIx-\u003eLangId-\u003eInt-\u003eb Text",
          "package": "usb-safe",
          "partial": "Str Desc",
          "signature": "RegionalDeviceHandle pr-\u003eStrIx-\u003eLangId-\u003eInt-\u003ecr Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getStrDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a string descriptor from a device using the first supported language.\n\u003c/p\u003e\u003cp\u003eThis function may throw \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "getStrDescFirstLang",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr-\u003e StrIx-\u003e Int-\u003e cr Text",
          "type": "function"
        },
        "index": {
          "description": "Retrieve string descriptor from device using the first supported language This function may throw USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "getStrDescFirstLang",
          "normalized": "RegionalDeviceHandle a-\u003eStrIx-\u003eInt-\u003eb Text",
          "package": "usb-safe",
          "partial": "Str Desc First Lang",
          "signature": "RegionalDeviceHandle pr-\u003eStrIx-\u003eInt-\u003ecr Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:getStrDescFirstLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a kernel driver is active on an interface.\n\u003c/p\u003e\u003cp\u003eIf a kernel driver is active, you cannot claim the interface, and libusb will be\nunable to perform I/O.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "kernelDriverActive",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e InterfaceNumber -\u003e cr Bool",
          "source": "src/System-USB-Safe.html#kernelDriverActive",
          "type": "function"
        },
        "index": {
          "description": "Determine if kernel driver is active on an interface If kernel driver is active you cannot claim the interface and libusb will be unable to perform Exceptions NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "kernelDriverActive",
          "normalized": "RegionalDeviceHandle a-\u003eInterfaceNumber-\u003eb Bool",
          "package": "usb-safe",
          "partial": "Driver Active",
          "signature": "RegionalDeviceHandle pr-\u003eInterfaceNumber-\u003ecr Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:kernelDriverActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn overloaded constructor function for transfer directions.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "mkTransferDirection",
          "package": "usb-safe",
          "signature": "TransferDirection transDir",
          "source": "src/System-USB-Safe.html#mkTransferDirection",
          "type": "method"
        },
        "index": {
          "description": "An overloaded constructor function for transfer directions",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "mkTransferDirection",
          "package": "usb-safe",
          "partial": "Transfer Direction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:mkTransferDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn overloaded constructor function for transfer types.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "mkTransferType",
          "package": "usb-safe",
          "signature": "TransferType transType",
          "source": "src/System-USB-Safe.html#mkTransferType",
          "type": "method"
        },
        "index": {
          "description": "An overloaded constructor function for transfer types",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "mkTransferType",
          "package": "usb-safe",
          "partial": "Transfer Type",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:mkTransferType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a device and obtain a regional device handle.\nThe device is automatically closed when the region terminates.\n\u003c/p\u003e\u003cp\u003eThis is a non-blocking function; no requests are sent over the bus.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoMemException\u003c/a\u003e\u003c/code\u003e if there is a memory allocation failure.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAccessException\u003c/a\u003e\u003c/code\u003e if the user has insufficient permissions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "openDevice",
          "package": "usb-safe",
          "signature": "Device -\u003e RegionT s pr (RegionalDeviceHandle (RegionT s pr))",
          "source": "src/System-USB-Safe.html#openDevice",
          "type": "function"
        },
        "index": {
          "description": "Open device and obtain regional device handle The device is automatically closed when the region terminates This is non-blocking function no requests are sent over the bus Exceptions NoMemException if there is memory allocation failure AccessException if the user has insufficient permissions NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "openDevice",
          "normalized": "Device-\u003eRegionT a b(RegionalDeviceHandle(RegionT a b))",
          "package": "usb-safe",
          "partial": "Device",
          "signature": "Device-\u003eRegionT s pr(RegionalDeviceHandle(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:openDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a USB \u003cem\u003econtrol\u003c/em\u003e read.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the control request was not supported by the device\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e  Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "readControl",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e ControlAction (ReadAction cr)",
          "source": "src/System-USB-Safe.html#readControl",
          "type": "function"
        },
        "index": {
          "description": "Perform USB control read Exceptions PipeException if the control request was not supported by the device NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "readControl",
          "normalized": "RegionalDeviceHandle a-\u003eControlAction(ReadAction b)",
          "package": "usb-safe",
          "partial": "Control",
          "signature": "RegionalDeviceHandle pr-\u003eControlAction(ReadAction cr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:readControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function similar to \u003ccode\u003e\u003ca\u003ereadControl\u003c/a\u003e\u003c/code\u003e which checks if the\n specified number of bytes to read were actually read.\n Throws an \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e if this is not the case.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "readControlExact",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e ControlAction (ReadExactAction cr)",
          "source": "src/System-USB-Safe.html#readControlExact",
          "type": "function"
        },
        "index": {
          "description": "convenience function similar to readControl which checks if the specified number of bytes to read were actually read Throws an IOException if this is not the case",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "readControlExact",
          "normalized": "RegionalDeviceHandle a-\u003eControlAction(ReadExactAction b)",
          "package": "usb-safe",
          "partial": "Control Exact",
          "signature": "RegionalDeviceHandle pr-\u003eControlAction(ReadExactAction cr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:readControlExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead bytes from an \u003ccode\u003e\u003ca\u003eIn\u003c/a\u003e\u003c/code\u003e endpoint\n        with either a \u003ccode\u003e\u003ca\u003eBulk\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e transfer type.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data,\n          see \u003cem\u003ePackets and overflows\u003c/em\u003e in the libusb documentation:\n          \u003ca\u003ehttp://libusb.sourceforge.net/api-1.0/packetoverflow.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "readEndpoint",
          "package": "usb-safe",
          "signature": "Endpoint In transType sAlt pr -\u003e ReadAction cr",
          "source": "src/System-USB-Safe.html#readEndpoint",
          "type": "method"
        },
        "index": {
          "description": "Read bytes from an In endpoint with either Bulk or Interrupt transfer type Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation http libusb.sourceforge.net api-1.0 packetoverflow.html NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "readEndpoint",
          "normalized": "Endpoint In a b c-\u003eReadAction d",
          "package": "usb-safe",
          "partial": "Endpoint",
          "signature": "Endpoint In transType sAlt pr-\u003eReadAction cr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:readEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a USB \u003cem\u003eisochronous\u003c/em\u003e read.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\nfunction to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data,\n   see \u003cem\u003ePackets and overflows\u003c/em\u003e in the \u003ccode\u003elibusb\u003c/code\u003e documentation:\n   \u003ca\u003ehttp://libusb.sourceforge.net/api-1.0/packetoverflow.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "readIsochronousEndpoint",
          "package": "usb-safe",
          "signature": "Endpoint In Isochronous sAlt pr-\u003e [Size]-\u003e Timeout-\u003e cr [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "Perform USB isochronous read WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation http libusb.sourceforge.net api-1.0 packetoverflow.html NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "readIsochronousEndpoint",
          "normalized": "Endpoint In Isochronous a b-\u003e[Size]-\u003eTimeout-\u003ec[ByteString]",
          "package": "usb-safe",
          "partial": "Isochronous Endpoint",
          "signature": "Endpoint In Isochronous sAlt pr-\u003e[Size]-\u003eTimeout-\u003ecr[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:readIsochronousEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a USB port reset to reinitialize a device.\nThe system will attempt to restore the previous configuration\nand alternate settings after the reset has completed.\n\u003c/p\u003e\u003cp\u003eNote the constraint: \u003ccode\u003epr `AncestorRegion` cr\u003c/code\u003e. This allows this function to be\nexecuted in any child region \u003ccode\u003ecr\u003c/code\u003e of the parent region \u003ccode\u003epr\u003c/code\u003e in which the given\nregional handle was created.\n\u003c/p\u003e\u003cp\u003eYou can only reset a device when all computations passed to \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e have been terminated. If you call\n\u003ccode\u003eresetDevice\u003c/code\u003e and such a computation is still running a \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e\nexception is thrown.\n\u003c/p\u003e\u003cp\u003eIf the reset fails, the descriptors change, or the previous state cannot be\nrestored, the device will appear to be disconnected and reconnected. This means\nthat the device handle is no longer valid (you should close it) and rediscover\nthe device. A \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e is raised to indicate that this is the case.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO: Think about how to handle the implications of the the previous paragraph!\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis is a blocking function which usually incurs a noticeable delay.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e if a configuration has been set using \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if re-enumeration is required, or if the\n   device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "resetDevice",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e cr ()",
          "source": "src/System-USB-Safe.html#resetDevice",
          "type": "function"
        },
        "index": {
          "description": "Perform USB port reset to reinitialize device The system will attempt to restore the previous configuration and alternate settings after the reset has completed Note the constraint pr AncestorRegion cr This allows this function to be executed in any child region cr of the parent region pr in which the given regional handle was created You can only reset device when all computations passed to setConfig useActiveConfig and setConfigWhich have been terminated If you call resetDevice and such computation is still running SettingAlreadySet exception is thrown If the reset fails the descriptors change or the previous state cannot be restored the device will appear to be disconnected and reconnected This means that the device handle is no longer valid you should close it and rediscover the device NotFoundException is raised to indicate that this is the case TODO Think about how to handle the implications of the the previous paragraph This is blocking function which usually incurs noticeable delay Exceptions SettingAlreadySet if configuration has been set using setConfig useActiveConfig and setConfigWhich NotFoundException if re-enumeration is required or if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "resetDevice",
          "normalized": "RegionalDeviceHandle a-\u003eb()",
          "package": "usb-safe",
          "partial": "Device",
          "signature": "RegionalDeviceHandle pr-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:resetDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivate an alternate setting for an interface\nand then apply the given continuation function to the resulting alternate handle.\n\u003c/p\u003e\u003cp\u003eSimillary to configurations, interfaces support multiple alternate settings of\nwhich only one can be active at any given time. When an alternate is set using\n\u003ccode\u003e\u003ca\u003esetAlternate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveAlternate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetAlternateWhich\u003c/a\u003e\u003c/code\u003e no threads may set a\nnew alternate until the computation passed to these functions terminates. If you\ndo try to set one a \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e exception will be thrown.\n\u003c/p\u003e\u003cp\u003eThe operating system has always set an interface in one of the available\nalternates. If you want to use the current active alternate:\n\u003ccode\u003e\u003ca\u003euseActiveAlternate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e if an alternate has already been set using\n   \u003ccode\u003e\u003ca\u003esetAlternate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveAlternate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetAlternateWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "setAlternate",
          "package": "usb-safe",
          "signature": "Alternate sCfg pr-\u003e (forall sAlt.  AlternateHandle sAlt pr -\u003e RegionT s cr α)-\u003e RegionT s cr α",
          "type": "function"
        },
        "index": {
          "description": "Activate an alternate setting for an interface and then apply the given continuation function to the resulting alternate handle Simillary to configurations interfaces support multiple alternate settings of which only one can be active at any given time When an alternate is set using setAlternate useActiveAlternate or setAlternateWhich no threads may set new alternate until the computation passed to these functions terminates If you do try to set one SettingAlreadySet exception will be thrown The operating system has always set an interface in one of the available alternates If you want to use the current active alternate useActiveAlternate This is blocking function Exceptions NoDeviceException if the device has been disconnected SettingAlreadySet if an alternate has already been set using setAlternate useActiveAlternate or setAlternateWhich Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "setAlternate",
          "normalized": "Alternate a b-\u003e(c d AlternateHandle e b-\u003eRegionT f g h)-\u003eRegionT f g h",
          "package": "usb-safe",
          "partial": "Alternate",
          "signature": "Alternate sCfg pr-\u003e(forall sAlt. AlternateHandle sAlt pr-\u003eRegionT s cr α)-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:setAlternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function which finds the first alternate of the given interface\nhandle which satisfies the given predicate on its descriptor, then sets that\nalternate and applies the given function to the resulting alternate handle.\n\u003c/p\u003e\u003cp\u003eThis function calls \u003ccode\u003e\u003ca\u003esetAlternate\u003c/a\u003e\u003c/code\u003e so do see its documentation.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no alternate is found that satisfies the given\n   predicate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e if an alternate has already been set using\n   \u003ccode\u003e\u003ca\u003esetAlternate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveAlternate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetAlternateWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "setAlternateWhich",
          "package": "usb-safe",
          "signature": "RegionalInterfaceHandle sCfg pr-\u003e (InterfaceDesc -\u003e Bool)-\u003e (forall sAlt.  AlternateHandle sAlt pr -\u003e RegionT s cr α)-\u003e RegionT s cr α",
          "type": "function"
        },
        "index": {
          "description": "Convenience function which finds the first alternate of the given interface handle which satisfies the given predicate on its descriptor then sets that alternate and applies the given function to the resulting alternate handle This function calls setAlternate so do see its documentation Exceptions NotFoundException if no alternate is found that satisfies the given predicate NoDeviceException if the device has been disconnected SettingAlreadySet if an alternate has already been set using setAlternate useActiveAlternate or setAlternateWhich Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "setAlternateWhich",
          "normalized": "RegionalInterfaceHandle a b-\u003e(InterfaceDesc-\u003eBool)-\u003e(c d AlternateHandle e b-\u003eRegionT f g h)-\u003eRegionT f g h",
          "package": "usb-safe",
          "partial": "Alternate Which",
          "signature": "RegionalInterfaceHandle sCfg pr-\u003e(InterfaceDesc-\u003eBool)-\u003e(forall sAlt. AlternateHandle sAlt pr-\u003eRegionT s cr α)-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:setAlternateWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the active configuration for a device and then\napply the given continuation function to the resulting configuration handle.\n\u003c/p\u003e\u003cp\u003eUSB devices support multiple configurations of which only one can be active at\nany given time. When a configuration is set using \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e\nor \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e no threads may set a new configuration until the computation\npassed to these functions terminates. If you do try to set one, a\n\u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e exception will be thrown.\n\u003c/p\u003e\u003cp\u003eThe operating system may or may not have already set an active configuration on\nthe device. It is up to your application to ensure the correct configuration is\nselected before you attempt to claim interfaces and perform other operations. If\nyou want to use the current active configuration: \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you call this function on a device already configured with the selected\nconfiguration, then this function will act as a lightweight device reset: it\nwill issue a \u003ccode\u003eSET_CONFIGURATION\u003c/code\u003e request using the current configuration, causing\nmost USB-related device state to be reset (altsetting reset to zero, endpoint\nhalts cleared, toggles reset).\n\u003c/p\u003e\u003cp\u003eYou cannot change/reset configuration if other applications or drivers have\nclaimed interfaces.\n\u003c/p\u003e\u003cp\u003eThis is a blocking function.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e if a configuration has already been set using\n   \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if interfaces are currently claimed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "setConfig",
          "package": "usb-safe",
          "signature": "Config pr-\u003e (forall sCfg.  ConfigHandle sCfg -\u003e RegionT s cr α)-\u003e RegionT s cr α",
          "type": "function"
        },
        "index": {
          "description": "Set the active configuration for device and then apply the given continuation function to the resulting configuration handle USB devices support multiple configurations of which only one can be active at any given time When configuration is set using setConfig useActiveConfig or setConfigWhich no threads may set new configuration until the computation passed to these functions terminates If you do try to set one SettingAlreadySet exception will be thrown The operating system may or may not have already set an active configuration on the device It is up to your application to ensure the correct configuration is selected before you attempt to claim interfaces and perform other operations If you want to use the current active configuration useActiveConfig If you call this function on device already configured with the selected configuration then this function will act as lightweight device reset it will issue SET CONFIGURATION request using the current configuration causing most USB-related device state to be reset altsetting reset to zero endpoint halts cleared toggles reset You cannot change reset configuration if other applications or drivers have claimed interfaces This is blocking function Exceptions SettingAlreadySet if configuration has already been set using setConfig useActiveConfig or setConfigWhich BusyException if interfaces are currently claimed NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "setConfig",
          "normalized": "Config a-\u003e(b c ConfigHandle d-\u003eRegionT e f g)-\u003eRegionT e f g",
          "package": "usb-safe",
          "partial": "Config",
          "signature": "Config pr-\u003e(forall sCfg. ConfigHandle sCfg-\u003eRegionT s cr α)-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:setConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function which finds the first configuration of\nthe given device handle which satisfies the given predicate on its descriptor,\nthen sets that configuration and applies the given function to the resulting\nconfiguration handle.\n\u003c/p\u003e\u003cp\u003eThis function calls \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e so do see its documentation.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSettingAlreadySet\u003c/a\u003e\u003c/code\u003e if a configuration has already been set using\n   \u003ccode\u003e\u003ca\u003esetConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetConfigWhich\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no configuration is found that satisfies the given\n   predicate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if interfaces are currently claimed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "setConfigWhich",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr-\u003e (ConfigDesc -\u003e Bool)-\u003e (forall sCfg.  ConfigHandle sCfg -\u003e RegionT s cr α)-\u003e RegionT s cr α",
          "type": "function"
        },
        "index": {
          "description": "Convenience function which finds the first configuration of the given device handle which satisfies the given predicate on its descriptor then sets that configuration and applies the given function to the resulting configuration handle This function calls setConfig so do see its documentation Exceptions SettingAlreadySet if configuration has already been set using setConfig useActiveConfig or setConfigWhich NotFoundException if no configuration is found that satisfies the given predicate BusyException if interfaces are currently claimed NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "setConfigWhich",
          "normalized": "RegionalDeviceHandle a-\u003e(ConfigDesc-\u003eBool)-\u003e(b c ConfigHandle d-\u003eRegionT e f g)-\u003eRegionT e f g",
          "package": "usb-safe",
          "partial": "Config Which",
          "signature": "RegionalDeviceHandle pr-\u003e(ConfigDesc-\u003eBool)-\u003e(forall sCfg. ConfigHandle sCfg-\u003eRegionT s cr α)-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:setConfigWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given function to the alternate handle of the current active\nalternate of the given interface handle.\n\u003c/p\u003e\u003cp\u003eTo determine the current active alternate this function will block while a\ncontrol transfer is submitted to retrieve the information.\n\u003c/p\u003e\u003cp\u003eNote that unlike configurations an interface is always set in one of the\navailable alternates, so unlike \u003ccode\u003e\u003ca\u003euseActiveConfig\u003c/a\u003e\u003c/code\u003e this function will never throw\nan exception like \u003ccode\u003e\u003ca\u003eNoActiveConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "useActiveAlternate",
          "package": "usb-safe",
          "signature": "RegionalInterfaceHandle sCfg pr-\u003e (forall sAlt.  AlternateHandle sAlt pr -\u003e RegionT s cr α)-\u003e RegionT s cr α",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the alternate handle of the current active alternate of the given interface handle To determine the current active alternate this function will block while control transfer is submitted to retrieve the information Note that unlike configurations an interface is always set in one of the available alternates so unlike useActiveConfig this function will never throw an exception like NoActiveConfig Exceptions NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "useActiveAlternate",
          "normalized": "RegionalInterfaceHandle a b-\u003e(c d AlternateHandle e b-\u003eRegionT f g h)-\u003eRegionT f g h",
          "package": "usb-safe",
          "partial": "Active Alternate",
          "signature": "RegionalInterfaceHandle sCfg pr-\u003e(forall sAlt. AlternateHandle sAlt pr-\u003eRegionT s cr α)-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:useActiveAlternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given continuation function to the configuration handle of the\ncurrent active configuration of the given device handle.\n\u003c/p\u003e\u003cp\u003eThis function needs to determine the current active configuration. This\ninformation may be cached by the operating system. If it isn't cached this\nfunction will block while a control transfer is submitted to retrieve the\ninformation.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoActiveConfig\u003c/a\u003e\u003c/code\u003e if the device is not configured.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "useActiveConfig",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr-\u003e (forall sCfg.  ConfigHandle sCfg -\u003e RegionT s cr α)-\u003e RegionT s cr α",
          "type": "function"
        },
        "index": {
          "description": "Apply the given continuation function to the configuration handle of the current active configuration of the given device handle This function needs to determine the current active configuration This information may be cached by the operating system If it isn cached this function will block while control transfer is submitted to retrieve the information Exceptions NoActiveConfig if the device is not configured NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "useActiveConfig",
          "normalized": "RegionalDeviceHandle a-\u003e(b c ConfigHandle d-\u003eRegionT e f g)-\u003eRegionT e f g",
          "package": "usb-safe",
          "partial": "Active Config",
          "signature": "RegionalDeviceHandle pr-\u003e(forall sCfg. ConfigHandle sCfg-\u003eRegionT s cr α)-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:useActiveConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a kernel driver is active on the specified interface the driver is\ndetached and the given action is executed. If the action terminates, whether by\nnormal termination or by raising an exception, the kernel driver is attached\nagain. If a kernel driver is not active on the specified interface the action is\njust executed.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "withDetachedKernelDriver",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e InterfaceNumber -\u003e RegionT s cr α -\u003e RegionT s cr α",
          "source": "src/System-USB-Safe.html#withDetachedKernelDriver",
          "type": "function"
        },
        "index": {
          "description": "If kernel driver is active on the specified interface the driver is detached and the given action is executed If the action terminates whether by normal termination or by raising an exception the kernel driver is attached again If kernel driver is not active on the specified interface the action is just executed Exceptions NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "withDetachedKernelDriver",
          "normalized": "RegionalDeviceHandle a-\u003eInterfaceNumber-\u003eRegionT b c d-\u003eRegionT b c d",
          "package": "usb-safe",
          "partial": "Detached Kernel Driver",
          "signature": "RegionalDeviceHandle pr-\u003eInterfaceNumber-\u003eRegionT s cr α-\u003eRegionT s cr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:withDetachedKernelDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function which opens the device, applies the given continuation\nfunction to the resulting regional device handle and runs the resulting region.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "withDevice",
          "package": "usb-safe",
          "signature": "Device -\u003e (forall s.  RegionalDeviceHandle (RegionT s pr) -\u003e RegionT s pr α) -\u003e pr α",
          "source": "src/System-USB-Safe.html#withDevice",
          "type": "function"
        },
        "index": {
          "description": "Convenience function which opens the device applies the given continuation function to the resulting regional device handle and runs the resulting region",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "withDevice",
          "normalized": "Device-\u003e(a b RegionalDeviceHandle(RegionT c d)-\u003eRegionT c d e)-\u003ed e",
          "package": "usb-safe",
          "partial": "Device",
          "signature": "Device-\u003e(forall s. RegionalDeviceHandle(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:withDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function which finds the first device attached to the system\nwhich satisfies the given predicate on its descriptor, then opens that device\nand applies the given continuation function to the resulting device handle.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no device is found which satisfies the given predicate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoMemException\u003c/a\u003e\u003c/code\u003e if there is a memory allocation failure.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eAccessException\u003c/a\u003e\u003c/code\u003e if the user has insufficient permissions.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "withDeviceWhich",
          "package": "usb-safe",
          "signature": "Ctx-\u003e (DeviceDesc -\u003e Bool)-\u003e (forall s.  RegionalDeviceHandle (RegionT s pr) -\u003e RegionT s pr α)-\u003e pr α",
          "type": "function"
        },
        "index": {
          "description": "Convenience function which finds the first device attached to the system which satisfies the given predicate on its descriptor then opens that device and applies the given continuation function to the resulting device handle Exceptions NotFoundException if no device is found which satisfies the given predicate NoMemException if there is memory allocation failure AccessException if the user has insufficient permissions NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "withDeviceWhich",
          "normalized": "Ctx-\u003e(DeviceDesc-\u003eBool)-\u003e(a b RegionalDeviceHandle(RegionT c d)-\u003eRegionT c d e)-\u003ed e",
          "package": "usb-safe",
          "partial": "Device Which",
          "signature": "Ctx-\u003e(DeviceDesc-\u003eBool)-\u003e(forall s. RegionalDeviceHandle(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:withDeviceWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.USB.Safe",
          "name": "withInterface",
          "package": "usb-safe",
          "signature": "Interface sCfg-\u003e (forall s.  RegionalInterfaceHandle sCfg (RegionT s pr) -\u003e RegionT s pr α)-\u003e pr α",
          "type": "function"
        },
        "index": {
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "withInterface",
          "normalized": "Interface a-\u003e(b c RegionalInterfaceHandle a(RegionT d e)-\u003eRegionT d e f)-\u003ee f",
          "package": "usb-safe",
          "partial": "Interface",
          "signature": "Interface sCfg-\u003e(forall s. RegionalInterfaceHandle sCfg(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:withInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function which finds the first interface of the given\nconfiguration handle which satisfies the given predicate on its descriptors,\nthen claims that interfaces and applies the given continuation function to the\nresulting regional handle.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e if no interface was found that satisfies the fiven predicate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBusyException\u003c/a\u003e\u003c/code\u003e if another program or driver has claimed the interface.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "withInterfaceWhich",
          "package": "usb-safe",
          "signature": "ConfigHandle sCfg-\u003e (Interface -\u003e Bool)-\u003e (forall s.  RegionalInterfaceHandle sCfg (RegionT s pr) -\u003e RegionT s pr α)-\u003e pr α",
          "type": "function"
        },
        "index": {
          "description": "Convenience function which finds the first interface of the given configuration handle which satisfies the given predicate on its descriptors then claims that interfaces and applies the given continuation function to the resulting regional handle Exceptions NotFoundException if no interface was found that satisfies the fiven predicate BusyException if another program or driver has claimed the interface NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "withInterfaceWhich",
          "normalized": "ConfigHandle a-\u003e(Interface-\u003eBool)-\u003e(b c RegionalInterfaceHandle a(RegionT d e)-\u003eRegionT d e f)-\u003ee f",
          "package": "usb-safe",
          "partial": "Interface Which",
          "signature": "ConfigHandle sCfg-\u003e(Interface-\u003eBool)-\u003e(forall s. RegionalInterfaceHandle sCfg(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:withInterfaceWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a USB \u003cem\u003econtrol\u003c/em\u003e write.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the control request was not supported by the device\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e  Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "writeControl",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e ControlAction (WriteAction cr)",
          "source": "src/System-USB-Safe.html#writeControl",
          "type": "function"
        },
        "index": {
          "description": "Perform USB control write Exceptions PipeException if the control request was not supported by the device NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "writeControl",
          "normalized": "RegionalDeviceHandle a-\u003eControlAction(WriteAction b)",
          "package": "usb-safe",
          "partial": "Control",
          "signature": "RegionalDeviceHandle pr-\u003eControlAction(WriteAction cr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:writeControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function similar to \u003ccode\u003e\u003ca\u003ewriteControl\u003c/a\u003e\u003c/code\u003e which checks if the given\n bytes were actually fully written.\n Throws an \u003ccode\u003eincompleteWriteException\u003c/code\u003e if this is not the case.\n\u003c/p\u003e",
          "module": "System.USB.Safe",
          "name": "writeControlExact",
          "package": "usb-safe",
          "signature": "RegionalDeviceHandle pr -\u003e ControlAction (WriteExactAction cr)",
          "source": "src/System-USB-Safe.html#writeControlExact",
          "type": "function"
        },
        "index": {
          "description": "convenience function similar to writeControl which checks if the given bytes were actually fully written Throws an incompleteWriteException if this is not the case",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "writeControlExact",
          "normalized": "RegionalDeviceHandle a-\u003eControlAction(WriteExactAction b)",
          "package": "usb-safe",
          "partial": "Control Exact",
          "signature": "RegionalDeviceHandle pr-\u003eControlAction(WriteExactAction cr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:writeControlExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite bytes to an \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e endpoint\n        with either a \u003ccode\u003e\u003ca\u003eBulk\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e transfer type.\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "writeEndpoint",
          "package": "usb-safe",
          "signature": "Endpoint Out transType sAlt pr -\u003e WriteAction cr",
          "source": "src/System-USB-Safe.html#writeEndpoint",
          "type": "method"
        },
        "index": {
          "description": "Write bytes to an Out endpoint with either Bulk or Interrupt transfer type Exceptions PipeException if the endpoint halted NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "writeEndpoint",
          "normalized": "Endpoint Out a b c-\u003eWriteAction d",
          "package": "usb-safe",
          "partial": "Endpoint",
          "signature": "Endpoint Out transType sAlt pr-\u003eWriteAction cr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:writeEndpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a USB \u003cem\u003eisochronous\u003c/em\u003e write.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e You need to enable the threaded runtime (\u003ccode\u003e-threaded\u003c/code\u003e) for this\nfunction to work correctly. It throws a runtime error otherwise!\n\u003c/p\u003e\u003cp\u003eExceptions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePipeException\u003c/a\u003e\u003c/code\u003e if the endpoint halted.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOverflowException\u003c/a\u003e\u003c/code\u003e if the device offered more data,\n   see \u003cem\u003ePackets and overflows\u003c/em\u003e in the \u003ccode\u003elibusb\u003c/code\u003e documentation:\n   \u003ca\u003ehttp://libusb.sourceforge.net/api-1.0/packetoverflow.html\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNoDeviceException\u003c/a\u003e\u003c/code\u003e if the device has been disconnected.\n\u003c/li\u003e\u003cli\u003e Another \u003ccode\u003e\u003ca\u003eUSBException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.USB.Safe",
          "name": "writeIsochronousEndpoint",
          "package": "usb-safe",
          "signature": "Endpoint Out Isochronous sAlt pr-\u003e [ByteString]-\u003e Timeout-\u003e cr [Size]",
          "type": "function"
        },
        "index": {
          "description": "Perform USB isochronous write WARNING You need to enable the threaded runtime threaded for this function to work correctly It throws runtime error otherwise Exceptions PipeException if the endpoint halted OverflowException if the device offered more data see Packets and overflows in the libusb documentation http libusb.sourceforge.net api-1.0 packetoverflow.html NoDeviceException if the device has been disconnected Another USBException",
          "hierarchy": "System USB Safe",
          "module": "System.USB.Safe",
          "name": "writeIsochronousEndpoint",
          "normalized": "Endpoint Out Isochronous a b-\u003e[ByteString]-\u003eTimeout-\u003ec[Size]",
          "package": "usb-safe",
          "partial": "Isochronous Endpoint",
          "signature": "Endpoint Out Isochronous sAlt pr-\u003e[ByteString]-\u003eTimeout-\u003ecr[Size]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/usb-safe/docs/System-USB-Safe.html#v:writeIsochronousEndpoint"
      }
    }
  ]
]