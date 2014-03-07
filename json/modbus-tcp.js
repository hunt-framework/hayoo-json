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
        "word": "modbus-tcp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the Modbus TPC/IP protocol.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on the \u003ccode\u003eMODBUS Application Protocol\n Specification V1.1b\u003c/code\u003e\n (\u003ca\u003ehttp://www.modbus.org/docs/Modbus_Application_Protocol_V1_1b.pdf\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Modbus.TCP",
          "name": "TCP",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the Modbus TPC IP protocol This implementation is based on the MODBUS Application Protocol Specification V1.1b http www.modbus.org docs Modbus Application Protocol V1 b.pdf",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "TCP",
          "package": "modbus-tcp",
          "partial": "TCP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 7\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ExceptionCode",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "data"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ExceptionCode",
          "package": "modbus-tcp",
          "partial": "Exception Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:ExceptionCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function code field of a MODBUS data unit is coded in one\n byte. Valid codes are in the range of 1 ... 255 decimal (the range\n 128 - 255 is reserved and used for exception responses). When a\n message is sent from a Client to a Server device the function code\n field tells the server what kind of action to perform. Function\n code 0 is not valid.\n\u003c/p\u003e\u003cp\u003eSub-function codes are added to some function codes to define\n multiple actions.\n\u003c/p\u003e\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, sections 4.1 and 5\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "FunctionCode",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "data"
        },
        "index": {
          "description": "The function code field of MODBUS data unit is coded in one byte Valid codes are in the range of decimal the range is reserved and used for exception responses When message is sent from Client to Server device the function code field tells the server what kind of action to perform Function code is not valid Sub-function codes are added to some function codes to define multiple actions See MODBUS Application Protocol Specification V1.1b sections and",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "FunctionCode",
          "package": "modbus-tcp",
          "partial": "Function Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:FunctionCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMODBUS Application Protocol Header\n\u003c/p\u003e\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 4.1\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "Header",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#Header",
          "type": "data"
        },
        "index": {
          "description": "MODBUS Application Protocol Header See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "Header",
          "package": "modbus-tcp",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "MB_Exception",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#MB_Exception",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "MB_Exception",
          "package": "modbus-tcp",
          "partial": "MB Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:MB_Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "ProtocolId",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#ProtocolId",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ProtocolId",
          "package": "modbus-tcp",
          "partial": "Protocol Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:ProtocolId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMODBUS TCP/IP Application Data Unit\n\u003c/p\u003e\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 4.1\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "TCP_ADU",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#TCP_ADU",
          "type": "data"
        },
        "index": {
          "description": "MODBUS TCP IP Application Data Unit See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "TCP_ADU",
          "package": "modbus-tcp",
          "partial": "TCP ADU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:TCP_ADU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "TransactionId",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#TransactionId",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "TransactionId",
          "package": "modbus-tcp",
          "partial": "Transaction Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:TransactionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "UnitId",
          "package": "modbus-tcp",
          "source": "src/System-Modbus-TCP.html#UnitId",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "UnitId",
          "package": "modbus-tcp",
          "partial": "Unit Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#t:UnitId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized use in conjunction with programming commands. The\n server (or slave) has accepted the request and is processing\n it, but a long duration of time will be required to do so. This\n response is returned to prevent a timeout error from occurring\n in the client (or master). The client (or master) can next\n issue a Poll Program Complete message to determine if\n processing is completed.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "Acknowledge",
          "package": "modbus-tcp",
          "signature": "Acknowledge",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "Specialized use in conjunction with programming commands The server or slave has accepted the request and is processing it but long duration of time will be required to do so This response is returned to prevent timeout error from occurring in the client or master The client or master can next issue Poll Program Complete message to determine if processing is completed",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "Acknowledge",
          "package": "modbus-tcp",
          "partial": "Acknowledge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:Acknowledge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "DecodeException",
          "package": "modbus-tcp",
          "signature": "DecodeException String",
          "source": "src/System-Modbus-TCP.html#MB_Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "DecodeException",
          "package": "modbus-tcp",
          "partial": "Decode Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:DecodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.8\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "Diagnostics",
          "package": "modbus-tcp",
          "signature": "Diagnostics",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "Diagnostics",
          "package": "modbus-tcp",
          "partial": "Diagnostics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:Diagnostics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.19\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "EncapsulatedInterfaceTransport",
          "package": "modbus-tcp",
          "signature": "EncapsulatedInterfaceTransport",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "EncapsulatedInterfaceTransport",
          "package": "modbus-tcp",
          "partial": "Encapsulated Interface Transport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:EncapsulatedInterfaceTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "ExceptionCode",
          "package": "modbus-tcp",
          "signature": "ExceptionCode FunctionCode",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ExceptionCode",
          "package": "modbus-tcp",
          "partial": "Exception Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ExceptionCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "ExceptionResponse",
          "package": "modbus-tcp",
          "signature": "ExceptionResponse FunctionCode ExceptionCode",
          "source": "src/System-Modbus-TCP.html#MB_Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ExceptionResponse",
          "package": "modbus-tcp",
          "partial": "Exception Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ExceptionResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized use in conjunction with gateways, indicates that\n the gateway was unable to allocate an internal communication\n path from the input port to the output port for processing the\n request. Usually means that the gateway is misconfigured or\n overloaded.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "GatewayPathUnavailable",
          "package": "modbus-tcp",
          "signature": "GatewayPathUnavailable",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "Specialized use in conjunction with gateways indicates that the gateway was unable to allocate an internal communication path from the input port to the output port for processing the request Usually means that the gateway is misconfigured or overloaded",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "GatewayPathUnavailable",
          "package": "modbus-tcp",
          "partial": "Gateway Path Unavailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:GatewayPathUnavailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized use in conjunction with gateways, indicates that\n no response was obtained from the target device. Usually means\n that the device is not present on the network.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "GatewayTargetDeviceFailedToRespond",
          "package": "modbus-tcp",
          "signature": "GatewayTargetDeviceFailedToRespond",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "Specialized use in conjunction with gateways indicates that no response was obtained from the target device Usually means that the device is not present on the network",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "GatewayTargetDeviceFailedToRespond",
          "package": "modbus-tcp",
          "partial": "Gateway Target Device Failed To Respond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:GatewayTargetDeviceFailedToRespond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.9\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "GetCommEventCounter",
          "package": "modbus-tcp",
          "signature": "GetCommEventCounter",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "GetCommEventCounter",
          "package": "modbus-tcp",
          "partial": "Get Comm Event Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:GetCommEventCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.10\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "GetCommEventLog",
          "package": "modbus-tcp",
          "signature": "GetCommEventLog",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "GetCommEventLog",
          "package": "modbus-tcp",
          "partial": "Get Comm Event Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:GetCommEventLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "Header",
          "package": "modbus-tcp",
          "signature": "Header",
          "source": "src/System-Modbus-TCP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "Header",
          "package": "modbus-tcp",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data address received in the query is not an allowable\n address for the server (or slave). More specifically, the\n combination of reference number and transfer length is\n invalid. For a controller with 100 registers, the PDU addresses\n the first register as 0, and the last one as 99. If a request\n is submitted with a starting register address of 96 and a\n quantity of registers of 4, then this request will successfully\n operate (address-wise at least) on registers 96, 97, 98, 99. If\n a request is submitted with a starting register address of 96\n and a quantity of registers of 5, then this request will fail\n with Exception Code 0x02 \"Illegal Data Address\" since it\n attempts to operate on registers 96, 97, 98, 99 and 100, and\n there is no register with address 100.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "IllegalDataAddress",
          "package": "modbus-tcp",
          "signature": "IllegalDataAddress",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "The data address received in the query is not an allowable address for the server or slave More specifically the combination of reference number and transfer length is invalid For controller with registers the PDU addresses the first register as and the last one as If request is submitted with starting register address of and quantity of registers of then this request will successfully operate address-wise at least on registers If request is submitted with starting register address of and quantity of registers of then this request will fail with Exception Code x02 Illegal Data Address since it attempts to operate on registers and and there is no register with address",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "IllegalDataAddress",
          "package": "modbus-tcp",
          "partial": "Illegal Data Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:IllegalDataAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value contained in the query data field is not an allowable\n value for server (or slave). This indicates a fault in the\n structure of the remainder of a complex request, such as that\n the implied length is incorrect. It specifically does NOT mean\n that a data item submitted for storage in a register has a\n value outside the expectation of the application program, since\n the MODBUS protocol is unaware of the significance of any\n particular value of any particular register.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "IllegalDataValue",
          "package": "modbus-tcp",
          "signature": "IllegalDataValue",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "value contained in the query data field is not an allowable value for server or slave This indicates fault in the structure of the remainder of complex request such as that the implied length is incorrect It specifically does NOT mean that data item submitted for storage in register has value outside the expectation of the application program since the MODBUS protocol is unaware of the significance of any particular value of any particular register",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "IllegalDataValue",
          "package": "modbus-tcp",
          "partial": "Illegal Data Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:IllegalDataValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function code received in the query is not an allowable\n action for the server (or slave). This may be because the\n function code is only applicable to newer devices, and was not\n implemented in the unit selected. It could also indicate that\n the server (or slave) is in the wrong state to process a\n request of this type, for example because it is unconfigured\n and is being asked to return register values.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "IllegalFunction",
          "package": "modbus-tcp",
          "signature": "IllegalFunction",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "The function code received in the query is not an allowable action for the server or slave This may be because the function code is only applicable to newer devices and was not implemented in the unit selected It could also indicate that the server or slave is in the wrong state to process request of this type for example because it is unconfigured and is being asked to return register values",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "IllegalFunction",
          "package": "modbus-tcp",
          "partial": "Illegal Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:IllegalFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.16\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "MaskWriteRegister",
          "package": "modbus-tcp",
          "signature": "MaskWriteRegister",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "MaskWriteRegister",
          "package": "modbus-tcp",
          "partial": "Mask Write Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:MaskWriteRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized use in conjunction with function codes\n \u003ccode\u003e\u003ca\u003eReadFileRecord\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWriteFileRecord\u003c/a\u003e\u003c/code\u003e and reference type 6, to\n indicate that the extended file area failed to pass a\n consistency check.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "MemoryParityError",
          "package": "modbus-tcp",
          "signature": "MemoryParityError",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "Specialized use in conjunction with function codes ReadFileRecord and WriteFileRecord and reference type to indicate that the extended file area failed to pass consistency check",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "MemoryParityError",
          "package": "modbus-tcp",
          "partial": "Memory Parity Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:MemoryParityError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "OtherCode",
          "package": "modbus-tcp",
          "signature": "OtherCode Word8",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "OtherCode",
          "package": "modbus-tcp",
          "partial": "Other Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:OtherCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "OtherException",
          "package": "modbus-tcp",
          "signature": "OtherException String",
          "source": "src/System-Modbus-TCP.html#MB_Exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "OtherException",
          "package": "modbus-tcp",
          "partial": "Other Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:OtherException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.1\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadCoils",
          "package": "modbus-tcp",
          "signature": "ReadCoils",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadCoils",
          "package": "modbus-tcp",
          "partial": "Read Coils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadCoils"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.2\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadDiscreteInputs",
          "package": "modbus-tcp",
          "signature": "ReadDiscreteInputs",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadDiscreteInputs",
          "package": "modbus-tcp",
          "partial": "Read Discrete Inputs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadDiscreteInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.7\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadExceptionStatus",
          "package": "modbus-tcp",
          "signature": "ReadExceptionStatus",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadExceptionStatus",
          "package": "modbus-tcp",
          "partial": "Read Exception Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadExceptionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.18\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadFIFOQueue",
          "package": "modbus-tcp",
          "signature": "ReadFIFOQueue",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadFIFOQueue",
          "package": "modbus-tcp",
          "partial": "Read FIFOQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadFIFOQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.14\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadFileRecord",
          "package": "modbus-tcp",
          "signature": "ReadFileRecord",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadFileRecord",
          "package": "modbus-tcp",
          "partial": "Read File Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadFileRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.3\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadHoldingRegisters",
          "package": "modbus-tcp",
          "signature": "ReadHoldingRegisters",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadHoldingRegisters",
          "package": "modbus-tcp",
          "partial": "Read Holding Registers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadHoldingRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.4\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadInputRegisters",
          "package": "modbus-tcp",
          "signature": "ReadInputRegisters",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadInputRegisters",
          "package": "modbus-tcp",
          "partial": "Read Input Registers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadInputRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.17\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReadWriteMultipleRegisters",
          "package": "modbus-tcp",
          "signature": "ReadWriteMultipleRegisters",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReadWriteMultipleRegisters",
          "package": "modbus-tcp",
          "partial": "Read Write Multiple Registers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReadWriteMultipleRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.13\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReportSlaveID",
          "package": "modbus-tcp",
          "signature": "ReportSlaveID",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReportSlaveID",
          "package": "modbus-tcp",
          "partial": "Report Slave ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReportSlaveID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 5\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "ReservedCode",
          "package": "modbus-tcp",
          "signature": "ReservedCode Word8",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "ReservedCode",
          "package": "modbus-tcp",
          "partial": "Reserved Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:ReservedCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized use in conjunction with programming commands. The\n server (or slave) is engaged in processing a long&#8211;duration\n program command. The client (or master) should retransmit the\n message later when the server (or slave) is free.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "SlaveDeviceBusy",
          "package": "modbus-tcp",
          "signature": "SlaveDeviceBusy",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "Specialized use in conjunction with programming commands The server or slave is engaged in processing long duration program command The client or master should retransmit the message later when the server or slave is free",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "SlaveDeviceBusy",
          "package": "modbus-tcp",
          "partial": "Slave Device Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:SlaveDeviceBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unrecoverable error occurred while the server (or slave)\n was attempting to perform the requested action.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "SlaveDeviceFailure",
          "package": "modbus-tcp",
          "signature": "SlaveDeviceFailure",
          "source": "src/System-Modbus-TCP.html#ExceptionCode",
          "type": "function"
        },
        "index": {
          "description": "An unrecoverable error occurred while the server or slave was attempting to perform the requested action",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "SlaveDeviceFailure",
          "package": "modbus-tcp",
          "partial": "Slave Device Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:SlaveDeviceFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "TCP_ADU",
          "package": "modbus-tcp",
          "signature": "TCP_ADU",
          "source": "src/System-Modbus-TCP.html#TCP_ADU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "TCP_ADU",
          "package": "modbus-tcp",
          "partial": "TCP ADU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:TCP_ADU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 5\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "UserDefinedCode",
          "package": "modbus-tcp",
          "signature": "UserDefinedCode Word8",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "UserDefinedCode",
          "package": "modbus-tcp",
          "partial": "User Defined Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:UserDefinedCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.15\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "WriteFileRecord",
          "package": "modbus-tcp",
          "signature": "WriteFileRecord",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "WriteFileRecord",
          "package": "modbus-tcp",
          "partial": "Write File Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:WriteFileRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.11\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "WriteMultipleCoils",
          "package": "modbus-tcp",
          "signature": "WriteMultipleCoils",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "WriteMultipleCoils",
          "package": "modbus-tcp",
          "partial": "Write Multiple Coils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:WriteMultipleCoils"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.12\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "WriteMultipleRegisters",
          "package": "modbus-tcp",
          "signature": "WriteMultipleRegisters",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "WriteMultipleRegisters",
          "package": "modbus-tcp",
          "partial": "Write Multiple Registers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:WriteMultipleRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.5\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "WriteSingleCoil",
          "package": "modbus-tcp",
          "signature": "WriteSingleCoil",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "WriteSingleCoil",
          "package": "modbus-tcp",
          "partial": "Write Single Coil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:WriteSingleCoil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: MODBUS Application Protocol Specification V1.1b, section 6.6\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "WriteSingleRegister",
          "package": "modbus-tcp",
          "signature": "WriteSingleRegister",
          "source": "src/System-Modbus-TCP.html#FunctionCode",
          "type": "function"
        },
        "index": {
          "description": "See MODBUS Application Protocol Specification V1.1b section",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "WriteSingleRegister",
          "package": "modbus-tcp",
          "partial": "Write Single Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:WriteSingleRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "aduData",
          "package": "modbus-tcp",
          "signature": "ByteString",
          "source": "src/System-Modbus-TCP.html#TCP_ADU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "aduData",
          "package": "modbus-tcp",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:aduData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "aduFunction",
          "package": "modbus-tcp",
          "signature": "FunctionCode",
          "source": "src/System-Modbus-TCP.html#TCP_ADU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "aduFunction",
          "package": "modbus-tcp",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:aduFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "aduHeader",
          "package": "modbus-tcp",
          "signature": "Header",
          "source": "src/System-Modbus-TCP.html#TCP_ADU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "aduHeader",
          "package": "modbus-tcp",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:aduHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a raw MODBUS command.\n\u003c/p\u003e",
          "module": "System.Modbus.TCP",
          "name": "command",
          "package": "modbus-tcp",
          "signature": "TransactionId-\u003e ProtocolId-\u003e UnitId-\u003e FunctionCode-\u003e ByteString-\u003e Socket-\u003e IO (Either MB_Exception TCP_ADU)",
          "type": "function"
        },
        "index": {
          "description": "Sends raw MODBUS command",
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "command",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eFunctionCode-\u003eByteString-\u003eSocket-\u003eIO(Either MB_Exception TCP_ADU)",
          "package": "modbus-tcp",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eFunctionCode-\u003eByteString-\u003eSocket-\u003eIO(Either MB_Exception TCP_ADU)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "hdrLength",
          "package": "modbus-tcp",
          "signature": "Word16",
          "source": "src/System-Modbus-TCP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "hdrLength",
          "package": "modbus-tcp",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:hdrLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "hdrProtocolId",
          "package": "modbus-tcp",
          "signature": "ProtocolId",
          "source": "src/System-Modbus-TCP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "hdrProtocolId",
          "package": "modbus-tcp",
          "partial": "Protocol Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:hdrProtocolId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "hdrTransactionId",
          "package": "modbus-tcp",
          "signature": "TransactionId",
          "source": "src/System-Modbus-TCP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "hdrTransactionId",
          "package": "modbus-tcp",
          "partial": "Transaction Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:hdrTransactionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "hdrUnitId",
          "package": "modbus-tcp",
          "signature": "UnitId",
          "source": "src/System-Modbus-TCP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "hdrUnitId",
          "package": "modbus-tcp",
          "partial": "Unit Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:hdrUnitId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "readCoils",
          "package": "modbus-tcp",
          "signature": "TransactionId -\u003e ProtocolId -\u003e UnitId -\u003e Word16 -\u003e Word16 -\u003e Socket -\u003e IO (Either MB_Exception [Word8])",
          "source": "src/System-Modbus-TCP.html#readCoils",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "readCoils",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "package": "modbus-tcp",
          "partial": "Coils",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:readCoils"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "readDiscreteInputs",
          "package": "modbus-tcp",
          "signature": "TransactionId -\u003e ProtocolId -\u003e UnitId -\u003e Word16 -\u003e Word16 -\u003e Socket -\u003e IO (Either MB_Exception [Word8])",
          "source": "src/System-Modbus-TCP.html#readDiscreteInputs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "readDiscreteInputs",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "package": "modbus-tcp",
          "partial": "Discrete Inputs",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:readDiscreteInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "readHoldingRegisters",
          "package": "modbus-tcp",
          "signature": "TransactionId-\u003e ProtocolId-\u003e UnitId-\u003e Word16-\u003e Word16-\u003e Socket-\u003e IO (Either MB_Exception [Word16])",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "readHoldingRegisters",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "package": "modbus-tcp",
          "partial": "Holding Registers",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:readHoldingRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "readInputRegisters",
          "package": "modbus-tcp",
          "signature": "TransactionId-\u003e ProtocolId-\u003e UnitId-\u003e Word16-\u003e Word16-\u003e Socket-\u003e IO (Either MB_Exception [Word16])",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "readInputRegisters",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "package": "modbus-tcp",
          "partial": "Input Registers",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:readInputRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "writeMultipleRegisters",
          "package": "modbus-tcp",
          "signature": "TransactionId-\u003e ProtocolId-\u003e UnitId-\u003e Word16-\u003e [Word16]-\u003e Socket-\u003e IO (Either MB_Exception Word16)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "writeMultipleRegisters",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003e[Word]-\u003eSocket-\u003eIO(Either MB_Exception Word)",
          "package": "modbus-tcp",
          "partial": "Multiple Registers",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003e[Word]-\u003eSocket-\u003eIO(Either MB_Exception Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:writeMultipleRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "writeSingleCoil",
          "package": "modbus-tcp",
          "signature": "TransactionId -\u003e ProtocolId -\u003e UnitId -\u003e Word16 -\u003e Bool -\u003e Socket -\u003e IO (Either MB_Exception ())",
          "source": "src/System-Modbus-TCP.html#writeSingleCoil",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "writeSingleCoil",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eBool-\u003eSocket-\u003eIO(Either MB_Exception())",
          "package": "modbus-tcp",
          "partial": "Single Coil",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eBool-\u003eSocket-\u003eIO(Either MB_Exception())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:writeSingleCoil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Modbus.TCP",
          "name": "writeSingleRegister",
          "package": "modbus-tcp",
          "signature": "TransactionId-\u003e ProtocolId-\u003e UnitId-\u003e Word16-\u003e Word16-\u003e Socket-\u003e IO (Either MB_Exception ())",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Modbus TCP",
          "module": "System.Modbus.TCP",
          "name": "writeSingleRegister",
          "normalized": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception())",
          "package": "modbus-tcp",
          "partial": "Single Register",
          "signature": "TransactionId-\u003eProtocolId-\u003eUnitId-\u003eWord-\u003eWord-\u003eSocket-\u003eIO(Either MB_Exception())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modbus-tcp/docs/System-Modbus-TCP.html#v:writeSingleRegister"
      }
    }
  ]
]