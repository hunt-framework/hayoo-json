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
        "word": "OpenCLRaw"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCorresponds to section 5.1, Command Queues of the OpenCL 1.0 specifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "CommandQueue",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-CommandQueue.html",
          "type": "module"
        },
        "index": {
          "description": "Corresponds to section Command Queues of the OpenCL specifications",
          "hierarchy": "System OpenCL Raw V10 CommandQueue",
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "CommandQueue",
          "package": "OpenCLRaw",
          "partial": "Command Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-CommandQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clCreateCommandQueue",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e DeviceID -\u003e CommandQueueProperties -\u003e IO (Either ErrorCode CommandQueue)",
          "source": "src/System-OpenCL-Raw-V10-CommandQueue.html#clCreateCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 CommandQueue",
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clCreateCommandQueue",
          "normalized": "Context-\u003eDeviceID-\u003eCommandQueueProperties-\u003eIO(Either ErrorCode CommandQueue)",
          "package": "OpenCLRaw",
          "partial": "Create Command Queue",
          "signature": "Context-\u003eDeviceID-\u003eCommandQueueProperties-\u003eIO(Either ErrorCode CommandQueue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-CommandQueue.html#v:clCreateCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clGetCommandQueueInfo",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e CommandQueueInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-CommandQueue.html#clGetCommandQueueInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 CommandQueue",
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clGetCommandQueueInfo",
          "normalized": "CommandQueue-\u003eCommandQueueInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Command Queue Info",
          "signature": "CommandQueue-\u003eCommandQueueInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-CommandQueue.html#v:clGetCommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clRetainCommandQueue",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-CommandQueue.html#clRetainCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 CommandQueue",
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clRetainCommandQueue",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Command Queue",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-CommandQueue.html#v:clRetainCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clSetCommandQueueProperty",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e CommandQueueProperties -\u003e Bool -\u003e IO (Either ErrorCode CommandQueueProperties)",
          "source": "src/System-OpenCL-Raw-V10-CommandQueue.html#clSetCommandQueueProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 CommandQueue",
          "module": "System.OpenCL.Raw.V10.CommandQueue",
          "name": "clSetCommandQueueProperty",
          "normalized": "CommandQueue-\u003eCommandQueueProperties-\u003eBool-\u003eIO(Either ErrorCode CommandQueueProperties)",
          "package": "OpenCLRaw",
          "partial": "Set Command Queue Property",
          "signature": "CommandQueue-\u003eCommandQueueProperties-\u003eBool-\u003eIO(Either ErrorCode CommandQueueProperties)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-CommandQueue.html#v:clSetCommandQueueProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 4.3 of the OpenCL 1.0 specification\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "Context",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Context.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "Context",
          "package": "OpenCLRaw",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "ContextCallback",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Context.html#ContextCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "ContextCallback",
          "package": "OpenCLRaw",
          "partial": "Context Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#t:ContextCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clCreateContext",
          "package": "OpenCLRaw",
          "signature": "[ContextProperties] -\u003e [DeviceID] -\u003e ContextCallback -\u003e Ptr () -\u003e IO (Either ErrorCode Context)",
          "source": "src/System-OpenCL-Raw-V10-Context.html#clCreateContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clCreateContext",
          "normalized": "[ContextProperties]-\u003e[DeviceID]-\u003eContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "package": "OpenCLRaw",
          "partial": "Create Context",
          "signature": "[ContextProperties]-\u003e[DeviceID]-\u003eContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#v:clCreateContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clCreateContextFromType",
          "package": "OpenCLRaw",
          "signature": "[ContextProperties] -\u003e DeviceType -\u003e ContextCallback -\u003e Ptr () -\u003e IO (Either ErrorCode Context)",
          "source": "src/System-OpenCL-Raw-V10-Context.html#clCreateContextFromType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clCreateContextFromType",
          "normalized": "[ContextProperties]-\u003eDeviceType-\u003eContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "package": "OpenCLRaw",
          "partial": "Create Context From Type",
          "signature": "[ContextProperties]-\u003eDeviceType-\u003eContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#v:clCreateContextFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clGetContextInfo",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e ContextInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-Context.html#clGetContextInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clGetContextInfo",
          "normalized": "Context-\u003eContextInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Context Info",
          "signature": "Context-\u003eContextInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#v:clGetContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clReleaseContext",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-Context.html#clReleaseContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clReleaseContext",
          "normalized": "Context-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Release Context",
          "signature": "Context-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#v:clReleaseContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clRetainContext",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-Context.html#clRetainContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Context",
          "module": "System.OpenCL.Raw.V10.Context",
          "name": "clRetainContext",
          "normalized": "Context-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Context",
          "signature": "Context-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Context.html#v:clRetainContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 4.2 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.DeviceInfo",
          "name": "DeviceInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-DeviceInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 DeviceInfo",
          "module": "System.OpenCL.Raw.V10.DeviceInfo",
          "name": "DeviceInfo",
          "package": "OpenCLRaw",
          "partial": "Device Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-DeviceInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.DeviceInfo",
          "name": "clGetDeviceIDs",
          "package": "OpenCLRaw",
          "signature": "PlatformID -\u003e DeviceType -\u003e CLuint -\u003e IO (Either ErrorCode [DeviceID])",
          "source": "src/System-OpenCL-Raw-V10-DeviceInfo.html#clGetDeviceIDs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 DeviceInfo",
          "module": "System.OpenCL.Raw.V10.DeviceInfo",
          "name": "clGetDeviceIDs",
          "normalized": "PlatformID-\u003eDeviceType-\u003eCLuint-\u003eIO(Either ErrorCode[DeviceID])",
          "package": "OpenCLRaw",
          "partial": "Get Device IDs",
          "signature": "PlatformID-\u003eDeviceType-\u003eCLuint-\u003eIO(Either ErrorCode[DeviceID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-DeviceInfo.html#v:clGetDeviceIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.DeviceInfo",
          "name": "clGetDeviceInfo",
          "package": "OpenCLRaw",
          "signature": "DeviceID -\u003e DeviceInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-DeviceInfo.html#clGetDeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 DeviceInfo",
          "module": "System.OpenCL.Raw.V10.DeviceInfo",
          "name": "clGetDeviceInfo",
          "normalized": "DeviceID-\u003eDeviceInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Device Info",
          "signature": "DeviceID-\u003eDeviceInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-DeviceInfo.html#v:clGetDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of all the error codes that OpenCL functions return \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "Errors",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Errors.html",
          "type": "module"
        },
        "index": {
          "description": "collection of all the error codes that OpenCL functions return",
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "Errors",
          "package": "OpenCLRaw",
          "partial": "Errors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clBuildProgramFailure",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clBuildProgramFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clBuildProgramFailure",
          "package": "OpenCLRaw",
          "partial": "Build Program Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clBuildProgramFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clCompilerNotAvailable",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clCompilerNotAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clCompilerNotAvailable",
          "package": "OpenCLRaw",
          "partial": "Compiler Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clCompilerNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clDeviceNotAvailable",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clDeviceNotAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clDeviceNotAvailable",
          "package": "OpenCLRaw",
          "partial": "Device Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clDeviceNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clDeviceNotFound",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clDeviceNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clDeviceNotFound",
          "package": "OpenCLRaw",
          "partial": "Device Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clDeviceNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clImageFormatMismatch",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clImageFormatMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clImageFormatMismatch",
          "package": "OpenCLRaw",
          "partial": "Image Format Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clImageFormatMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clImageFormatNotSupported",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clImageFormatNotSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clImageFormatNotSupported",
          "package": "OpenCLRaw",
          "partial": "Image Format Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clImageFormatNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidArgIndex",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidArgIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidArgIndex",
          "package": "OpenCLRaw",
          "partial": "Invalid Arg Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidArgIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidArgSize",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidArgSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidArgSize",
          "package": "OpenCLRaw",
          "partial": "Invalid Arg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidArgSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidArgValue",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidArgValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidArgValue",
          "package": "OpenCLRaw",
          "partial": "Invalid Arg Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidArgValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidBinary",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidBinary",
          "package": "OpenCLRaw",
          "partial": "Invalid Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidBufferSize",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidBufferSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidBufferSize",
          "package": "OpenCLRaw",
          "partial": "Invalid Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidBuildOptions",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidBuildOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidBuildOptions",
          "package": "OpenCLRaw",
          "partial": "Invalid Build Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidBuildOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidCommandQueue",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidCommandQueue",
          "package": "OpenCLRaw",
          "partial": "Invalid Command Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidContext",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidContext",
          "package": "OpenCLRaw",
          "partial": "Invalid Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidDevice",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidDevice",
          "package": "OpenCLRaw",
          "partial": "Invalid Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidDeviceType",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidDeviceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidDeviceType",
          "package": "OpenCLRaw",
          "partial": "Invalid Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidEvent",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidEvent",
          "package": "OpenCLRaw",
          "partial": "Invalid Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidEventWaitList",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidEventWaitList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidEventWaitList",
          "package": "OpenCLRaw",
          "partial": "Invalid Event Wait List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidEventWaitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidGLObject",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidGLObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidGLObject",
          "package": "OpenCLRaw",
          "partial": "Invalid GLObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidGLObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidGlobalOffset",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidGlobalOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidGlobalOffset",
          "package": "OpenCLRaw",
          "partial": "Invalid Global Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidGlobalOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidHostPtr",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidHostPtr",
          "package": "OpenCLRaw",
          "partial": "Invalid Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidImageFormatDescriptor",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidImageFormatDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidImageFormatDescriptor",
          "package": "OpenCLRaw",
          "partial": "Invalid Image Format Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidImageFormatDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidImageSize",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidImageSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidImageSize",
          "package": "OpenCLRaw",
          "partial": "Invalid Image Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernel",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernel",
          "package": "OpenCLRaw",
          "partial": "Invalid Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernelArgs",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidKernelArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernelArgs",
          "package": "OpenCLRaw",
          "partial": "Invalid Kernel Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidKernelArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernelDefinition",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidKernelDefinition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernelDefinition",
          "package": "OpenCLRaw",
          "partial": "Invalid Kernel Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidKernelDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernelName",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidKernelName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidKernelName",
          "package": "OpenCLRaw",
          "partial": "Invalid Kernel Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidKernelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidMemObject",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidMemObject",
          "package": "OpenCLRaw",
          "partial": "Invalid Mem Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidOperation",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidOperation",
          "package": "OpenCLRaw",
          "partial": "Invalid Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidPlatform",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidPlatform",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidPlatform",
          "package": "OpenCLRaw",
          "partial": "Invalid Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidProgram",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidProgram",
          "package": "OpenCLRaw",
          "partial": "Invalid Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidProgramExecutable",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidProgramExecutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidProgramExecutable",
          "package": "OpenCLRaw",
          "partial": "Invalid Program Executable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidProgramExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidQueueProperties",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidQueueProperties",
          "package": "OpenCLRaw",
          "partial": "Invalid Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidSampler",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidSampler",
          "package": "OpenCLRaw",
          "partial": "Invalid Sampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidValue",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidValue",
          "package": "OpenCLRaw",
          "partial": "Invalid Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidWorkDimension",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidWorkDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidWorkDimension",
          "package": "OpenCLRaw",
          "partial": "Invalid Work Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidWorkDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidWorkGroupSize",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidWorkGroupSize",
          "package": "OpenCLRaw",
          "partial": "Invalid Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidWorkItemSize",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clInvalidWorkItemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clInvalidWorkItemSize",
          "package": "OpenCLRaw",
          "partial": "Invalid Work Item Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clInvalidWorkItemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clMapFailure",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clMapFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clMapFailure",
          "package": "OpenCLRaw",
          "partial": "Map Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clMapFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clMemCopyOverlap",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clMemCopyOverlap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clMemCopyOverlap",
          "package": "OpenCLRaw",
          "partial": "Mem Copy Overlap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clMemCopyOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clMemObjectAllocationFailure",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clMemObjectAllocationFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clMemObjectAllocationFailure",
          "package": "OpenCLRaw",
          "partial": "Mem Object Allocation Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clMemObjectAllocationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clOutOfHostMemory",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clOutOfHostMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clOutOfHostMemory",
          "package": "OpenCLRaw",
          "partial": "Out Of Host Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clOutOfHostMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clOutOfResources",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clOutOfResources",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clOutOfResources",
          "package": "OpenCLRaw",
          "partial": "Out Of Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clOutOfResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clProfilingInfoNotAvailable",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clProfilingInfoNotAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clProfilingInfoNotAvailable",
          "package": "OpenCLRaw",
          "partial": "Profiling Info Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clProfilingInfoNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clSuccess",
          "package": "OpenCLRaw",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Raw-V10-Errors.html#clSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Errors",
          "module": "System.OpenCL.Raw.V10.Errors",
          "name": "clSuccess",
          "package": "OpenCLRaw",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Errors.html#v:clSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for querying extensions \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.Etc",
          "name": "Etc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Etc.html",
          "type": "module"
        },
        "index": {
          "description": "Module for querying extensions",
          "hierarchy": "System OpenCL Raw V10 Etc",
          "module": "System.OpenCL.Raw.V10.Etc",
          "name": "Etc",
          "package": "OpenCLRaw",
          "partial": "Etc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Etc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Etc",
          "name": "clGetExtensionFunctionAddress",
          "package": "OpenCLRaw",
          "signature": "String -\u003e IO (Ptr ())",
          "source": "src/System-OpenCL-Raw-V10-Etc.html#clGetExtensionFunctionAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Etc",
          "module": "System.OpenCL.Raw.V10.Etc",
          "name": "clGetExtensionFunctionAddress",
          "normalized": "String-\u003eIO(Ptr())",
          "package": "OpenCLRaw",
          "partial": "Get Extension Function Address",
          "signature": "String-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Etc.html#v:clGetExtensionFunctionAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.7 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "EventObject",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-EventObject.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 EventObject",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "EventObject",
          "package": "OpenCLRaw",
          "partial": "Event Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-EventObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clGetEventInfo",
          "package": "OpenCLRaw",
          "signature": "Event -\u003e EventInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-EventObject.html#clGetEventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 EventObject",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clGetEventInfo",
          "normalized": "Event-\u003eEventInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Event Info",
          "signature": "Event-\u003eEventInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-EventObject.html#v:clGetEventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clGetEventProfilingInfo",
          "package": "OpenCLRaw",
          "signature": "Event -\u003e ProfilingInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-EventObject.html#clGetEventProfilingInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 EventObject",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clGetEventProfilingInfo",
          "normalized": "Event-\u003eProfilingInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Event Profiling Info",
          "signature": "Event-\u003eProfilingInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-EventObject.html#v:clGetEventProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clReleaseEvent",
          "package": "OpenCLRaw",
          "signature": "Event -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-EventObject.html#clReleaseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 EventObject",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clReleaseEvent",
          "normalized": "Event-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Release Event",
          "signature": "Event-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-EventObject.html#v:clReleaseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clRetainEvent",
          "package": "OpenCLRaw",
          "signature": "Event -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-EventObject.html#clRetainEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 EventObject",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clRetainEvent",
          "normalized": "Event-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Event",
          "signature": "Event-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-EventObject.html#v:clRetainEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clWaitForEvents",
          "package": "OpenCLRaw",
          "signature": "[Event] -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-EventObject.html#clWaitForEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 EventObject",
          "module": "System.OpenCL.Raw.V10.EventObject",
          "name": "clWaitForEvents",
          "normalized": "[Event]-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Wait For Events",
          "signature": "[Event]-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-EventObject.html#v:clWaitForEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.10 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.FlushFinish",
          "name": "FlushFinish",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-FlushFinish.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 FlushFinish",
          "module": "System.OpenCL.Raw.V10.FlushFinish",
          "name": "FlushFinish",
          "package": "OpenCLRaw",
          "partial": "Flush Finish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-FlushFinish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.FlushFinish",
          "name": "clFinish",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-FlushFinish.html#clFinish",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 FlushFinish",
          "module": "System.OpenCL.Raw.V10.FlushFinish",
          "name": "clFinish",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Finish",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-FlushFinish.html#v:clFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.FlushFinish",
          "name": "clFlush",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-FlushFinish.html#clFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 FlushFinish",
          "module": "System.OpenCL.Raw.V10.FlushFinish",
          "name": "clFlush",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Flush",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-FlushFinish.html#v:clFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.5 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "Kernel",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "Kernel",
          "package": "OpenCLRaw",
          "partial": "Kernel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clCreateKernel",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e CString -\u003e IO (Either ErrorCode Kernel)",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clCreateKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clCreateKernel",
          "normalized": "Program-\u003eCString-\u003eIO(Either ErrorCode Kernel)",
          "package": "OpenCLRaw",
          "partial": "Create Kernel",
          "signature": "Program-\u003eCString-\u003eIO(Either ErrorCode Kernel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clCreateKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clCreateKernelsInProgram",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e CLuint -\u003e IO (Either ErrorCode [Kernel])",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clCreateKernelsInProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clCreateKernelsInProgram",
          "normalized": "Program-\u003eCLuint-\u003eIO(Either ErrorCode[Kernel])",
          "package": "OpenCLRaw",
          "partial": "Create Kernels In Program",
          "signature": "Program-\u003eCLuint-\u003eIO(Either ErrorCode[Kernel])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clCreateKernelsInProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clEnqueueNDRangeKernel",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e Kernel -\u003e [CLsizei] -\u003e [CLsizei] -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clEnqueueNDRangeKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clEnqueueNDRangeKernel",
          "normalized": "CommandQueue-\u003eKernel-\u003e[CLsizei]-\u003e[CLsizei]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue NDRange Kernel",
          "signature": "CommandQueue-\u003eKernel-\u003e[CLsizei]-\u003e[CLsizei]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clEnqueueNDRangeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clEnqueueNativeKernel",
          "package": "OpenCLRaw",
          "signature": "NKCallbackFunction -\u003e Ptr () -\u003e CLsizei -\u003e [Mem] -\u003e [Ptr ()] -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clEnqueueNativeKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clEnqueueNativeKernel",
          "normalized": "NKCallbackFunction-\u003ePtr()-\u003eCLsizei-\u003e[Mem]-\u003e[Ptr()]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Native Kernel",
          "signature": "NKCallbackFunction-\u003ePtr()-\u003eCLsizei-\u003e[Mem]-\u003e[Ptr()]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clEnqueueNativeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clEnqueueTask",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e Kernel -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clEnqueueTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clEnqueueTask",
          "normalized": "CommandQueue-\u003eKernel-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Task",
          "signature": "CommandQueue-\u003eKernel-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clEnqueueTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clGetKernelInfo",
          "package": "OpenCLRaw",
          "signature": "Kernel -\u003e KernelInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clGetKernelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clGetKernelInfo",
          "normalized": "Kernel-\u003eKernelInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Kernel Info",
          "signature": "Kernel-\u003eKernelInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clGetKernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clGetKernelWorkGroupInfo",
          "package": "OpenCLRaw",
          "signature": "Kernel -\u003e DeviceID -\u003e KernelWorkGroupInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clGetKernelWorkGroupInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clGetKernelWorkGroupInfo",
          "normalized": "Kernel-\u003eDeviceID-\u003eKernelWorkGroupInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Kernel Work Group Info",
          "signature": "Kernel-\u003eDeviceID-\u003eKernelWorkGroupInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clGetKernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clReleaseKernel",
          "package": "OpenCLRaw",
          "signature": "Kernel -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clReleaseKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clReleaseKernel",
          "normalized": "Kernel-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Release Kernel",
          "signature": "Kernel-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clReleaseKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clRetainKernel",
          "package": "OpenCLRaw",
          "signature": "Kernel -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-Kernel.html#clRetainKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Kernel",
          "module": "System.OpenCL.Raw.V10.Kernel",
          "name": "clRetainKernel",
          "normalized": "Kernel-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Kernel",
          "signature": "Kernel-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Kernel.html#v:clRetainKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.2 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "MemoryObject",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "MemoryObject",
          "package": "OpenCLRaw",
          "partial": "Memory Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clCreateBuffer",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e MemFlags -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode Mem)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clCreateBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clCreateBuffer",
          "normalized": "Context-\u003eMemFlags-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "package": "OpenCLRaw",
          "partial": "Create Buffer",
          "signature": "Context-\u003eMemFlags-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clCreateBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clCreateImage2D",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e MemFlags -\u003e ImageFormat -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode Mem)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clCreateImage2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clCreateImage2D",
          "normalized": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "package": "OpenCLRaw",
          "partial": "Create Image",
          "signature": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clCreateImage2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clCreateImage3D",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e MemFlags -\u003e ImageFormat -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode Mem)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clCreateImage3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clCreateImage3D",
          "normalized": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "package": "OpenCLRaw",
          "partial": "Create Image",
          "signature": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clCreateImage3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyBuffer",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Mem -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueCopyBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyBuffer",
          "normalized": "Mem-\u003eMem-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Copy Buffer",
          "signature": "Mem-\u003eMem-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueCopyBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyBufferToImage",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Mem -\u003e CLsizei -\u003e ImageDims -\u003e ImageDims -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueCopyBufferToImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyBufferToImage",
          "normalized": "Mem-\u003eMem-\u003eCLsizei-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Copy Buffer To Image",
          "signature": "Mem-\u003eMem-\u003eCLsizei-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueCopyBufferToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyImage",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Mem -\u003e ImageDims -\u003e ImageDims -\u003e ImageDims -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueCopyImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyImage",
          "normalized": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Copy Image",
          "signature": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueCopyImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyImageToBuffer",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Mem -\u003e ImageDims -\u003e ImageDims -\u003e CLsizei -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueCopyImageToBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueCopyImageToBuffer",
          "normalized": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Copy Image To Buffer",
          "signature": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueCopyImageToBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueMapBuffer",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Bool -\u003e MapFlags -\u003e CLsizei -\u003e CLsizei -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode (Ptr (), Event))",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueMapBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueMapBuffer",
          "normalized": "Mem-\u003eBool-\u003eMapFlags-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),Event))",
          "package": "OpenCLRaw",
          "partial": "Enqueue Map Buffer",
          "signature": "Mem-\u003eBool-\u003eMapFlags-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),Event))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueMapBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueMapImage",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Bool -\u003e MapFlags -\u003e ImageDims -\u003e ImageDims -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode (Ptr (), CLsizei, CLsizei, Event))",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueMapImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueMapImage",
          "normalized": "Mem-\u003eBool-\u003eMapFlags-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),CLsizei,CLsizei,Event))",
          "package": "OpenCLRaw",
          "partial": "Enqueue Map Image",
          "signature": "Mem-\u003eBool-\u003eMapFlags-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),CLsizei,CLsizei,Event))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueMapImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueReadBuffer",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Bool -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueReadBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueReadBuffer",
          "normalized": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Read Buffer",
          "signature": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueReadBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueReadImage",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Bool -\u003e (CLsizei, CLsizei, CLsizei) -\u003e (CLsizei, CLsizei, CLsizei) -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueReadImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueReadImage",
          "normalized": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Read Image",
          "signature": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueReadImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueUnmapMemObject",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueUnmapMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueUnmapMemObject",
          "normalized": "Mem-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Unmap Mem Object",
          "signature": "Mem-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueUnmapMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueWriteBuffer",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Bool -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueWriteBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueWriteBuffer",
          "normalized": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Write Buffer",
          "signature": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueWriteBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueWriteImage",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e Bool -\u003e (CLsizei, CLsizei, CLsizei) -\u003e (CLsizei, CLsizei, CLsizei) -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clEnqueueWriteImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clEnqueueWriteImage",
          "normalized": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Write Image",
          "signature": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clEnqueueWriteImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clGetImageInfo",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e MemInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clGetImageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clGetImageInfo",
          "normalized": "Mem-\u003eMemInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Image Info",
          "signature": "Mem-\u003eMemInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clGetImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clGetMemObjectInfo",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e MemInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clGetMemObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clGetMemObjectInfo",
          "normalized": "Mem-\u003eMemInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Mem Object Info",
          "signature": "Mem-\u003eMemInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clGetMemObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clGetSupportedImageFormats",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e MemFlags -\u003e MemObjectType -\u003e IO (Either ErrorCode [ImageFormat])",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clGetSupportedImageFormats",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clGetSupportedImageFormats",
          "normalized": "Context-\u003eMemFlags-\u003eMemObjectType-\u003eIO(Either ErrorCode[ImageFormat])",
          "package": "OpenCLRaw",
          "partial": "Get Supported Image Formats",
          "signature": "Context-\u003eMemFlags-\u003eMemObjectType-\u003eIO(Either ErrorCode[ImageFormat])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clGetSupportedImageFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clReleaseMemObject",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clReleaseMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clReleaseMemObject",
          "normalized": "Mem-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Release Mem Object",
          "signature": "Mem-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clReleaseMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clRetainMemObject",
          "package": "OpenCLRaw",
          "signature": "Mem -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-MemoryObject.html#clRetainMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 MemoryObject",
          "module": "System.OpenCL.Raw.V10.MemoryObject",
          "name": "clRetainMemObject",
          "normalized": "Mem-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Mem Object",
          "signature": "Mem-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-MemoryObject.html#v:clRetainMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.8 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "OutOfOrder",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-OutOfOrder.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 OutOfOrder",
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "OutOfOrder",
          "package": "OpenCLRaw",
          "partial": "Out Of Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-OutOfOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "clEnqueueBarrier",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-OutOfOrder.html#clEnqueueBarrier",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 OutOfOrder",
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "clEnqueueBarrier",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Barrier",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-OutOfOrder.html#v:clEnqueueBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "clEnqueueMarker",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Raw-V10-OutOfOrder.html#clEnqueueMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 OutOfOrder",
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "clEnqueueMarker",
          "normalized": "CommandQueue-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Marker",
          "signature": "CommandQueue-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-OutOfOrder.html#v:clEnqueueMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "clEnqueueWaitForEvents",
          "package": "OpenCLRaw",
          "signature": "CommandQueue -\u003e [Event] -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-OutOfOrder.html#clEnqueueWaitForEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 OutOfOrder",
          "module": "System.OpenCL.Raw.V10.OutOfOrder",
          "name": "clEnqueueWaitForEvents",
          "normalized": "CommandQueue-\u003e[Event]-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Enqueue Wait For Events",
          "signature": "CommandQueue-\u003e[Event]-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-OutOfOrder.html#v:clEnqueueWaitForEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 4.1 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.PlatformInfo",
          "name": "PlatformInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-PlatformInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 PlatformInfo",
          "module": "System.OpenCL.Raw.V10.PlatformInfo",
          "name": "PlatformInfo",
          "package": "OpenCLRaw",
          "partial": "Platform Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-PlatformInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.PlatformInfo",
          "name": "clGetPlatformIDs",
          "package": "OpenCLRaw",
          "signature": "CLuint -\u003e IO (Either ErrorCode [PlatformID])",
          "source": "src/System-OpenCL-Raw-V10-PlatformInfo.html#clGetPlatformIDs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 PlatformInfo",
          "module": "System.OpenCL.Raw.V10.PlatformInfo",
          "name": "clGetPlatformIDs",
          "normalized": "CLuint-\u003eIO(Either ErrorCode[PlatformID])",
          "package": "OpenCLRaw",
          "partial": "Get Platform IDs",
          "signature": "CLuint-\u003eIO(Either ErrorCode[PlatformID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-PlatformInfo.html#v:clGetPlatformIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.PlatformInfo",
          "name": "clGetPlatformInfo",
          "package": "OpenCLRaw",
          "signature": "PlatformID -\u003e PlatformInfo -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode CLsizei)",
          "source": "src/System-OpenCL-Raw-V10-PlatformInfo.html#clGetPlatformInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 PlatformInfo",
          "module": "System.OpenCL.Raw.V10.PlatformInfo",
          "name": "clGetPlatformInfo",
          "normalized": "PlatformID-\u003ePlatformInfo-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode CLsizei)",
          "package": "OpenCLRaw",
          "partial": "Get Platform Info",
          "signature": "PlatformID-\u003ePlatformInfo-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode CLsizei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-PlatformInfo.html#v:clGetPlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.4 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "ProgramObject",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "ProgramObject",
          "package": "OpenCLRaw",
          "partial": "Program Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clBuildProgram",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e [DeviceID] -\u003e String -\u003e BuildProgramCallback -\u003e Ptr () -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clBuildProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clBuildProgram",
          "normalized": "Program-\u003e[DeviceID]-\u003eString-\u003eBuildProgramCallback-\u003ePtr()-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Build Program",
          "signature": "Program-\u003e[DeviceID]-\u003eString-\u003eBuildProgramCallback-\u003ePtr()-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clBuildProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clCreateProgramWithBinary",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e [(DeviceID, ByteString)] -\u003e IO (Either ErrorCode Program)",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clCreateProgramWithBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clCreateProgramWithBinary",
          "normalized": "Context-\u003e[(DeviceID,ByteString)]-\u003eIO(Either ErrorCode Program)",
          "package": "OpenCLRaw",
          "partial": "Create Program With Binary",
          "signature": "Context-\u003e[(DeviceID,ByteString)]-\u003eIO(Either ErrorCode Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clCreateProgramWithBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clCreateProgramWithSource",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e String -\u003e IO (Either ErrorCode Program)",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clCreateProgramWithSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clCreateProgramWithSource",
          "normalized": "Context-\u003eString-\u003eIO(Either ErrorCode Program)",
          "package": "OpenCLRaw",
          "partial": "Create Program With Source",
          "signature": "Context-\u003eString-\u003eIO(Either ErrorCode Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clCreateProgramWithSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clGetProgramBuildInfo",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e ProgramBuildInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clGetProgramBuildInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clGetProgramBuildInfo",
          "normalized": "Program-\u003eProgramBuildInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Program Build Info",
          "signature": "Program-\u003eProgramBuildInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clGetProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clGetProgramInfo",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e ProgramInfo -\u003e CLsizei -\u003e IO (Either ErrorCode (ForeignPtr (), CLsizei))",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clGetProgramInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clGetProgramInfo",
          "normalized": "Program-\u003eProgramInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "package": "OpenCLRaw",
          "partial": "Get Program Info",
          "signature": "Program-\u003eProgramInfo-\u003eCLsizei-\u003eIO(Either ErrorCode(ForeignPtr(),CLsizei))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clGetProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clReleaseProgram",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clReleaseProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clReleaseProgram",
          "normalized": "Program-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Release Program",
          "signature": "Program-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clReleaseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clRetainProgram",
          "package": "OpenCLRaw",
          "signature": "Program -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clRetainProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clRetainProgram",
          "normalized": "Program-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Program",
          "signature": "Program-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clRetainProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clUnloadCompiler",
          "package": "OpenCLRaw",
          "signature": "IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-ProgramObject.html#clUnloadCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 ProgramObject",
          "module": "System.OpenCL.Raw.V10.ProgramObject",
          "name": "clUnloadCompiler",
          "package": "OpenCLRaw",
          "partial": "Unload Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-ProgramObject.html#v:clUnloadCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConforms to section 5.3 of the OpenCL 1.0 specification \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "Sampler",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Sampler.html",
          "type": "module"
        },
        "index": {
          "description": "Conforms to section of the OpenCL specification",
          "hierarchy": "System OpenCL Raw V10 Sampler",
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "Sampler",
          "package": "OpenCLRaw",
          "partial": "Sampler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Sampler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clCreateSampler",
          "package": "OpenCLRaw",
          "signature": "Context -\u003e Bool -\u003e AddressingMode -\u003e FilterMode -\u003e IO (Either ErrorCode Sampler)",
          "source": "src/System-OpenCL-Raw-V10-Sampler.html#clCreateSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Sampler",
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clCreateSampler",
          "normalized": "Context-\u003eBool-\u003eAddressingMode-\u003eFilterMode-\u003eIO(Either ErrorCode Sampler)",
          "package": "OpenCLRaw",
          "partial": "Create Sampler",
          "signature": "Context-\u003eBool-\u003eAddressingMode-\u003eFilterMode-\u003eIO(Either ErrorCode Sampler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Sampler.html#v:clCreateSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clGetSamplerInfo",
          "package": "OpenCLRaw",
          "signature": "Sampler -\u003e SamplerInfo -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode CLsizei)",
          "source": "src/System-OpenCL-Raw-V10-Sampler.html#clGetSamplerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Sampler",
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clGetSamplerInfo",
          "normalized": "Sampler-\u003eSamplerInfo-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode CLsizei)",
          "package": "OpenCLRaw",
          "partial": "Get Sampler Info",
          "signature": "Sampler-\u003eSamplerInfo-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode CLsizei)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Sampler.html#v:clGetSamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clReleaseSampler",
          "package": "OpenCLRaw",
          "signature": "Sampler -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-Sampler.html#clReleaseSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Sampler",
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clReleaseSampler",
          "normalized": "Sampler-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Release Sampler",
          "signature": "Sampler-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Sampler.html#v:clReleaseSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clRetainSampler",
          "package": "OpenCLRaw",
          "signature": "Sampler -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Raw-V10-Sampler.html#clRetainSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Sampler",
          "module": "System.OpenCL.Raw.V10.Sampler",
          "name": "clRetainSampler",
          "normalized": "Sampler-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLRaw",
          "partial": "Retain Sampler",
          "signature": "Sampler-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Sampler.html#v:clRetainSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of types, bounds and constants for OpenCL 1.0 \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Types",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of types bounds and constants for OpenCL",
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Types",
          "package": "OpenCLRaw",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "AddressingMode",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#AddressingMode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "AddressingMode",
          "package": "OpenCLRaw",
          "partial": "Addressing Mode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:AddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "BuildStatus",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#BuildStatus",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "BuildStatus",
          "package": "OpenCLRaw",
          "partial": "Build Status",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:BuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLbitfield",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CLbitfield",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLbitfield",
          "package": "OpenCLRaw",
          "partial": "CLbitfield",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CLbitfield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLbool",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CLbool",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLbool",
          "package": "OpenCLRaw",
          "partial": "CLbool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CLbool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLint",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CLint",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLint",
          "package": "OpenCLRaw",
          "partial": "CLint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CLint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLsizei",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CLsizei",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLsizei",
          "package": "OpenCLRaw",
          "partial": "CLsizei",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLuint",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CLuint",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLuint",
          "package": "OpenCLRaw",
          "partial": "CLuint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLulong",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CLulong",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CLulong",
          "package": "OpenCLRaw",
          "partial": "CLulong",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CLulong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelOrder",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ChannelOrder",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelOrder",
          "package": "OpenCLRaw",
          "partial": "Channel Order",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ChannelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelType",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ChannelType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelType",
          "package": "OpenCLRaw",
          "partial": "Channel Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ChannelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueue",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueue",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueue",
          "package": "OpenCLRaw",
          "partial": "Command Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueueInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLRaw",
          "partial": "Command Queue Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueueProperties",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLRaw",
          "partial": "Command Queue Properties",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CommandQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueuec",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueuec",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueuec",
          "package": "OpenCLRaw",
          "partial": "Command Queuec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:CommandQueuec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Context",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Context",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Context",
          "package": "OpenCLRaw",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ContextInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ContextInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ContextInfo",
          "package": "OpenCLRaw",
          "partial": "Context Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ContextProperties",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ContextProperties",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ContextProperties",
          "package": "OpenCLRaw",
          "partial": "Context Properties",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ContextProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Contextc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Contextc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Contextc",
          "package": "OpenCLRaw",
          "partial": "Contextc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Contextc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceFPConfig",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLRaw",
          "partial": "Device FPConfig",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:DeviceFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceID",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceID",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceID",
          "package": "OpenCLRaw",
          "partial": "Device ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:DeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceIDc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceIDc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceIDc",
          "package": "OpenCLRaw",
          "partial": "Device IDc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:DeviceIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceInfo",
          "package": "OpenCLRaw",
          "partial": "Device Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:DeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceType",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceType",
          "package": "OpenCLRaw",
          "partial": "Device Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:DeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ErrorCode",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ErrorCode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ErrorCode",
          "package": "OpenCLRaw",
          "partial": "Error Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Event",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Event",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Event",
          "package": "OpenCLRaw",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "EventInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#EventInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "EventInfo",
          "package": "OpenCLRaw",
          "partial": "Event Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:EventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Eventc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Eventc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Eventc",
          "package": "OpenCLRaw",
          "partial": "Eventc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Eventc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "FilterMode",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#FilterMode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "FilterMode",
          "package": "OpenCLRaw",
          "partial": "Filter Mode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:FilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormat",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ImageFormat",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormat",
          "package": "OpenCLRaw",
          "partial": "Image Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ImageFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormatc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ImageFormatc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormatc",
          "package": "OpenCLRaw",
          "partial": "Image Formatc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ImageFormatc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormatp",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ImageFormatp",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormatp",
          "package": "OpenCLRaw",
          "partial": "Image Formatp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ImageFormatp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ImageInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageInfo",
          "package": "OpenCLRaw",
          "partial": "Image Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Kernel",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Kernel",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Kernel",
          "package": "OpenCLRaw",
          "partial": "Kernel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#KernelInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelInfo",
          "package": "OpenCLRaw",
          "partial": "Kernel Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:KernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#KernelWorkGroupInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLRaw",
          "partial": "Kernel Work Group Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:KernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Kernelc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Kernelc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Kernelc",
          "package": "OpenCLRaw",
          "partial": "Kernelc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Kernelc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MapFlags",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MapFlags",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MapFlags",
          "package": "OpenCLRaw",
          "partial": "Map Flags",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:MapFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Mem",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Mem",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Mem",
          "package": "OpenCLRaw",
          "partial": "Mem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemFlags",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MemFlags",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemFlags",
          "package": "OpenCLRaw",
          "partial": "Mem Flags",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:MemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MemInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemInfo",
          "package": "OpenCLRaw",
          "partial": "Mem Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:MemInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemObjectType",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MemObjectType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemObjectType",
          "package": "OpenCLRaw",
          "partial": "Mem Object Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:MemObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Memc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Memc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Memc",
          "package": "OpenCLRaw",
          "partial": "Memc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Memc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformID",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#PlatformID",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformID",
          "package": "OpenCLRaw",
          "partial": "Platform ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:PlatformID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformIDc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#PlatformIDc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformIDc",
          "package": "OpenCLRaw",
          "partial": "Platform IDc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:PlatformIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#PlatformInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformInfo",
          "package": "OpenCLRaw",
          "partial": "Platform Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:PlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ProfilingInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLRaw",
          "partial": "Profiling Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Program",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Program",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Program",
          "package": "OpenCLRaw",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ProgramBuildInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLRaw",
          "partial": "Program Build Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ProgramInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramInfo",
          "package": "OpenCLRaw",
          "partial": "Program Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:ProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Programc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Programc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Programc",
          "package": "OpenCLRaw",
          "partial": "Programc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Programc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Sampler",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Sampler",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Sampler",
          "package": "OpenCLRaw",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "SamplerInfo",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#SamplerInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "SamplerInfo",
          "package": "OpenCLRaw",
          "partial": "Sampler Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:SamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Samplerc",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Samplerc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Samplerc",
          "package": "OpenCLRaw",
          "partial": "Samplerc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#t:Samplerc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "AddressingMode",
          "package": "OpenCLRaw",
          "signature": "AddressingMode CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#AddressingMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "AddressingMode",
          "package": "OpenCLRaw",
          "partial": "Addressing Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:AddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "BuildStatus",
          "package": "OpenCLRaw",
          "signature": "BuildStatus CLint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#BuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "BuildStatus",
          "package": "OpenCLRaw",
          "partial": "Build Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:BuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelOrder",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ChannelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelOrder",
          "package": "OpenCLRaw",
          "partial": "Channel Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ChannelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelType",
          "package": "OpenCLRaw",
          "signature": "ChannelType CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ChannelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ChannelType",
          "package": "OpenCLRaw",
          "partial": "Channel Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ChannelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLRaw",
          "signature": "CommandQueueInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueueInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLRaw",
          "partial": "Command Queue Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:CommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLRaw",
          "signature": "CommandQueueProperties CLbitfield",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLRaw",
          "partial": "Command Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:CommandQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueuec",
          "package": "OpenCLRaw",
          "signature": "CommandQueuec",
          "source": "src/System-OpenCL-Raw-V10-Types.html#CommandQueuec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "CommandQueuec",
          "package": "OpenCLRaw",
          "partial": "Command Queuec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:CommandQueuec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ContextInfo",
          "package": "OpenCLRaw",
          "signature": "ContextInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ContextInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ContextInfo",
          "package": "OpenCLRaw",
          "partial": "Context Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Contextc",
          "package": "OpenCLRaw",
          "signature": "Contextc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Contextc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Contextc",
          "package": "OpenCLRaw",
          "partial": "Contextc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:Contextc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig CLbitfield",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceFPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLRaw",
          "partial": "Device FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:DeviceFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceIDc",
          "package": "OpenCLRaw",
          "signature": "DeviceIDc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceIDc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceIDc",
          "package": "OpenCLRaw",
          "partial": "Device IDc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:DeviceIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceInfo",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceInfo",
          "package": "OpenCLRaw",
          "partial": "Device Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:DeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceType",
          "package": "OpenCLRaw",
          "signature": "DeviceType CLbitfield",
          "source": "src/System-OpenCL-Raw-V10-Types.html#DeviceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "DeviceType",
          "package": "OpenCLRaw",
          "partial": "Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:DeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ErrorCode",
          "package": "OpenCLRaw",
          "signature": "ErrorCode CLint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ErrorCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ErrorCode",
          "package": "OpenCLRaw",
          "partial": "Error Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "EventInfo",
          "package": "OpenCLRaw",
          "signature": "EventInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "EventInfo",
          "package": "OpenCLRaw",
          "partial": "Event Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:EventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Eventc",
          "package": "OpenCLRaw",
          "signature": "Eventc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Eventc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Eventc",
          "package": "OpenCLRaw",
          "partial": "Eventc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:Eventc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "FilterMode",
          "package": "OpenCLRaw",
          "signature": "FilterMode CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#FilterMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "FilterMode",
          "package": "OpenCLRaw",
          "partial": "Filter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:FilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormatc",
          "package": "OpenCLRaw",
          "signature": "ImageFormatc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ImageFormatc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageFormatc",
          "package": "OpenCLRaw",
          "partial": "Image Formatc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ImageFormatc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageInfo",
          "package": "OpenCLRaw",
          "signature": "ImageInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ImageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ImageInfo",
          "package": "OpenCLRaw",
          "partial": "Image Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelInfo",
          "package": "OpenCLRaw",
          "signature": "KernelInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#KernelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelInfo",
          "package": "OpenCLRaw",
          "partial": "Kernel Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:KernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLRaw",
          "signature": "KernelWorkGroupInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#KernelWorkGroupInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLRaw",
          "partial": "Kernel Work Group Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:KernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Kernelc",
          "package": "OpenCLRaw",
          "signature": "Kernelc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Kernelc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Kernelc",
          "package": "OpenCLRaw",
          "partial": "Kernelc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:Kernelc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MapFlags",
          "package": "OpenCLRaw",
          "signature": "MapFlags CLbitfield",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MapFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MapFlags",
          "package": "OpenCLRaw",
          "partial": "Map Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:MapFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemFlags",
          "package": "OpenCLRaw",
          "signature": "MemFlags CLbitfield",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MemFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemFlags",
          "package": "OpenCLRaw",
          "partial": "Mem Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:MemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemInfo",
          "package": "OpenCLRaw",
          "signature": "MemInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MemInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemInfo",
          "package": "OpenCLRaw",
          "partial": "Mem Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:MemInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemObjectType",
          "package": "OpenCLRaw",
          "signature": "MemObjectType CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#MemObjectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "MemObjectType",
          "package": "OpenCLRaw",
          "partial": "Mem Object Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:MemObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Memc",
          "package": "OpenCLRaw",
          "signature": "Memc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Memc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Memc",
          "package": "OpenCLRaw",
          "partial": "Memc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:Memc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformIDc",
          "package": "OpenCLRaw",
          "signature": "PlatformIDc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#PlatformIDc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformIDc",
          "package": "OpenCLRaw",
          "partial": "Platform IDc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:PlatformIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformInfo",
          "package": "OpenCLRaw",
          "signature": "PlatformInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#PlatformInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "PlatformInfo",
          "package": "OpenCLRaw",
          "partial": "Platform Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:PlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLRaw",
          "signature": "ProfilingInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ProfilingInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLRaw",
          "partial": "Profiling Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLRaw",
          "signature": "ProgramBuildInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ProgramBuildInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLRaw",
          "partial": "Program Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramInfo",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#ProgramInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "ProgramInfo",
          "package": "OpenCLRaw",
          "partial": "Program Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:ProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Programc",
          "package": "OpenCLRaw",
          "signature": "Programc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Programc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Programc",
          "package": "OpenCLRaw",
          "partial": "Programc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:Programc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "SamplerInfo",
          "package": "OpenCLRaw",
          "signature": "SamplerInfo CLuint",
          "source": "src/System-OpenCL-Raw-V10-Types.html#SamplerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "SamplerInfo",
          "package": "OpenCLRaw",
          "partial": "Sampler Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:SamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Samplerc",
          "package": "OpenCLRaw",
          "signature": "Samplerc",
          "source": "src/System-OpenCL-Raw-V10-Types.html#Samplerc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "Samplerc",
          "package": "OpenCLRaw",
          "partial": "Samplerc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:Samplerc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clA",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clA",
          "package": "OpenCLRaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clARGB",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clARGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clARGB",
          "package": "OpenCLRaw",
          "partial": "ARGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clARGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressClamp",
          "package": "OpenCLRaw",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clAddressClamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressClamp",
          "package": "OpenCLRaw",
          "partial": "Address Clamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clAddressClamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressClampToEdge",
          "package": "OpenCLRaw",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clAddressClampToEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressClampToEdge",
          "package": "OpenCLRaw",
          "partial": "Address Clamp To Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clAddressClampToEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressNone",
          "package": "OpenCLRaw",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clAddressNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressNone",
          "package": "OpenCLRaw",
          "partial": "Address None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clAddressNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressRepeat",
          "package": "OpenCLRaw",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clAddressRepeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clAddressRepeat",
          "package": "OpenCLRaw",
          "partial": "Address Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clAddressRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBGRA",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clBGRA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBGRA",
          "package": "OpenCLRaw",
          "partial": "BGRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clBGRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildError",
          "package": "OpenCLRaw",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clBuildError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildError",
          "package": "OpenCLRaw",
          "partial": "Build Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clBuildError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildInProgress",
          "package": "OpenCLRaw",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clBuildInProgress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildInProgress",
          "package": "OpenCLRaw",
          "partial": "Build In Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clBuildInProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildNone",
          "package": "OpenCLRaw",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clBuildNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildNone",
          "package": "OpenCLRaw",
          "partial": "Build None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clBuildNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildSuccess",
          "package": "OpenCLRaw",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clBuildSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clBuildSuccess",
          "package": "OpenCLRaw",
          "partial": "Build Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clBuildSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clContextDevices",
          "package": "OpenCLRaw",
          "signature": "ContextInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clContextDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clContextDevices",
          "package": "OpenCLRaw",
          "partial": "Context Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clContextDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clContextProperties",
          "package": "OpenCLRaw",
          "signature": "ContextInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clContextProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clContextProperties",
          "package": "OpenCLRaw",
          "partial": "Context Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clContextProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clContextReferenceCount",
          "package": "OpenCLRaw",
          "signature": "ContextInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clContextReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clContextReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Context Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clContextReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceAddressBits",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceAddressBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceAddressBits",
          "package": "OpenCLRaw",
          "partial": "Device Address Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceAddressBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceAvailable",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceAvailable",
          "package": "OpenCLRaw",
          "partial": "Device Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceCompilerAvailable",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceCompilerAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceCompilerAvailable",
          "package": "OpenCLRaw",
          "partial": "Device Compiler Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceCompilerAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceEndianLittle",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceEndianLittle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceEndianLittle",
          "package": "OpenCLRaw",
          "partial": "Device Endian Little",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceEndianLittle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceErrorCorrectionSupport",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceErrorCorrectionSupport",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceErrorCorrectionSupport",
          "package": "OpenCLRaw",
          "partial": "Device Error Correction Support",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceErrorCorrectionSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceExecutionCapabilities",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceExecutionCapabilities",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceExecutionCapabilities",
          "package": "OpenCLRaw",
          "partial": "Device Execution Capabilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceExecutionCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceExtensions",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceExtensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceExtensions",
          "package": "OpenCLRaw",
          "partial": "Device Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemCacheLineSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceGlobalMemCacheLineSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemCacheLineSize",
          "package": "OpenCLRaw",
          "partial": "Device Global Mem Cache Line Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceGlobalMemCacheLineSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemCacheSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceGlobalMemCacheSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemCacheSize",
          "package": "OpenCLRaw",
          "partial": "Device Global Mem Cache Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceGlobalMemCacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemCacheType",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceGlobalMemCacheType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemCacheType",
          "package": "OpenCLRaw",
          "partial": "Device Global Mem Cache Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceGlobalMemCacheType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceGlobalMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceGlobalMemSize",
          "package": "OpenCLRaw",
          "partial": "Device Global Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceGlobalMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage2DMaxHeight",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceImage2DMaxHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage2DMaxHeight",
          "package": "OpenCLRaw",
          "partial": "Device Image DMax Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceImage2DMaxHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage2DMaxWidth",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceImage2DMaxWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage2DMaxWidth",
          "package": "OpenCLRaw",
          "partial": "Device Image DMax Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceImage2DMaxWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage3DMaxDepth",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceImage3DMaxDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage3DMaxDepth",
          "package": "OpenCLRaw",
          "partial": "Device Image DMax Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceImage3DMaxDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage3DMaxHeight",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceImage3DMaxHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage3DMaxHeight",
          "package": "OpenCLRaw",
          "partial": "Device Image DMax Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceImage3DMaxHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage3DMaxWidth",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceImage3DMaxWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImage3DMaxWidth",
          "package": "OpenCLRaw",
          "partial": "Device Image DMax Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceImage3DMaxWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImageSupport",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceImageSupport",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceImageSupport",
          "package": "OpenCLRaw",
          "partial": "Device Image Support",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceImageSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceLocalMemSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceLocalMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceLocalMemSize",
          "package": "OpenCLRaw",
          "partial": "Device Local Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceLocalMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMLocalMemType",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMLocalMemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMLocalMemType",
          "package": "OpenCLRaw",
          "partial": "Device MLocal Mem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMLocalMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxClockFrequency",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxClockFrequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxClockFrequency",
          "package": "OpenCLRaw",
          "partial": "Device Max Clock Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxClockFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxComputeUnits",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxComputeUnits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxComputeUnits",
          "package": "OpenCLRaw",
          "partial": "Device Max Compute Units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxComputeUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxConstantArgs",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxConstantArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxConstantArgs",
          "package": "OpenCLRaw",
          "partial": "Device Max Constant Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxConstantArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxConstantBuffersize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxConstantBuffersize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxConstantBuffersize",
          "package": "OpenCLRaw",
          "partial": "Device Max Constant Buffersize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxConstantBuffersize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxMemAllocSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxMemAllocSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxMemAllocSize",
          "package": "OpenCLRaw",
          "partial": "Device Max Mem Alloc Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxMemAllocSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxParameterSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxParameterSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxParameterSize",
          "package": "OpenCLRaw",
          "partial": "Device Max Parameter Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxParameterSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxReadImageArgs",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxReadImageArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxReadImageArgs",
          "package": "OpenCLRaw",
          "partial": "Device Max Read Image Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxReadImageArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxSamplers",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxSamplers",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxSamplers",
          "package": "OpenCLRaw",
          "partial": "Device Max Samplers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxSamplers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWorkGroupSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWorkGroupSize",
          "package": "OpenCLRaw",
          "partial": "Device Max Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWorkItemDimensions",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxWorkItemDimensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWorkItemDimensions",
          "package": "OpenCLRaw",
          "partial": "Device Max Work Item Dimensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxWorkItemDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWorkItemSizes",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxWorkItemSizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWorkItemSizes",
          "package": "OpenCLRaw",
          "partial": "Device Max Work Item Sizes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxWorkItemSizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWriteImageArgs",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMaxWriteImageArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMaxWriteImageArgs",
          "package": "OpenCLRaw",
          "partial": "Device Max Write Image Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMaxWriteImageArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMemBaseAddrAlign",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMemBaseAddrAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMemBaseAddrAlign",
          "package": "OpenCLRaw",
          "partial": "Device Mem Base Addr Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMemBaseAddrAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMinDataTypeAlignSize",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceMinDataTypeAlignSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceMinDataTypeAlignSize",
          "package": "OpenCLRaw",
          "partial": "Device Min Data Type Align Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceMinDataTypeAlignSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceName",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceName",
          "package": "OpenCLRaw",
          "partial": "Device Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePlatform",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePlatform",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePlatform",
          "package": "OpenCLRaw",
          "partial": "Device Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthChar",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePreferredVectorWidthChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthChar",
          "package": "OpenCLRaw",
          "partial": "Device Preferred Vector Width Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePreferredVectorWidthChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthDouble",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePreferredVectorWidthDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthDouble",
          "package": "OpenCLRaw",
          "partial": "Device Preferred Vector Width Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePreferredVectorWidthDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthFloat",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePreferredVectorWidthFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthFloat",
          "package": "OpenCLRaw",
          "partial": "Device Preferred Vector Width Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePreferredVectorWidthFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthInt",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePreferredVectorWidthInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthInt",
          "package": "OpenCLRaw",
          "partial": "Device Preferred Vector Width Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePreferredVectorWidthInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthLong",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePreferredVectorWidthLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthLong",
          "package": "OpenCLRaw",
          "partial": "Device Preferred Vector Width Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePreferredVectorWidthLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthShort",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDevicePreferredVectorWidthShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDevicePreferredVectorWidthShort",
          "package": "OpenCLRaw",
          "partial": "Device Preferred Vector Width Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDevicePreferredVectorWidthShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceProfile",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceProfile",
          "package": "OpenCLRaw",
          "partial": "Device Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceProfilingTimerResolution",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceProfilingTimerResolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceProfilingTimerResolution",
          "package": "OpenCLRaw",
          "partial": "Device Profiling Timer Resolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceProfilingTimerResolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceQueueProperties",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceQueueProperties",
          "package": "OpenCLRaw",
          "partial": "Device Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceSingleFPConfig",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceSingleFPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceSingleFPConfig",
          "package": "OpenCLRaw",
          "partial": "Device Single FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceSingleFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceType",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceType",
          "package": "OpenCLRaw",
          "partial": "Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeAccelerator",
          "package": "OpenCLRaw",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceTypeAccelerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeAccelerator",
          "package": "OpenCLRaw",
          "partial": "Device Type Accelerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceTypeAccelerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeAll",
          "package": "OpenCLRaw",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceTypeAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeAll",
          "package": "OpenCLRaw",
          "partial": "Device Type All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceTypeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeCPU",
          "package": "OpenCLRaw",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceTypeCPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeCPU",
          "package": "OpenCLRaw",
          "partial": "Device Type CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceTypeCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeDefault",
          "package": "OpenCLRaw",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceTypeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeDefault",
          "package": "OpenCLRaw",
          "partial": "Device Type Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceTypeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeGPU",
          "package": "OpenCLRaw",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceTypeGPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceTypeGPU",
          "package": "OpenCLRaw",
          "partial": "Device Type GPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceTypeGPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceVendor",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceVendor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceVendor",
          "package": "OpenCLRaw",
          "partial": "Device Vendor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceVendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceVendorID",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceVendorID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceVendorID",
          "package": "OpenCLRaw",
          "partial": "Device Vendor ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceVendorID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceVersion",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDeviceVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDeviceVersion",
          "package": "OpenCLRaw",
          "partial": "Device Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDeviceVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDriverVersion",
          "package": "OpenCLRaw",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clDriverVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clDriverVersion",
          "package": "OpenCLRaw",
          "partial": "Driver Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clDriverVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventCommandExecutionStatus",
          "package": "OpenCLRaw",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clEventCommandExecutionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventCommandExecutionStatus",
          "package": "OpenCLRaw",
          "partial": "Event Command Execution Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clEventCommandExecutionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventCommandQueue",
          "package": "OpenCLRaw",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clEventCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventCommandQueue",
          "package": "OpenCLRaw",
          "partial": "Event Command Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clEventCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventCommandType",
          "package": "OpenCLRaw",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clEventCommandType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventCommandType",
          "package": "OpenCLRaw",
          "partial": "Event Command Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clEventCommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventReferenceCount",
          "package": "OpenCLRaw",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clEventReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clEventReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Event Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clEventReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPDenorm",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFPDenorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPDenorm",
          "package": "OpenCLRaw",
          "partial": "FPDenorm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFPDenorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPFMA",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFPFMA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPFMA",
          "package": "OpenCLRaw",
          "partial": "FPFMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFPFMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPInfNan",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFPInfNan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPInfNan",
          "package": "OpenCLRaw",
          "partial": "FPInf Nan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFPInfNan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPRoundToInf",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFPRoundToInf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPRoundToInf",
          "package": "OpenCLRaw",
          "partial": "FPRound To Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFPRoundToInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPRoundToNearest",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFPRoundToNearest",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPRoundToNearest",
          "package": "OpenCLRaw",
          "partial": "FPRound To Nearest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFPRoundToNearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPRoundToZero",
          "package": "OpenCLRaw",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFPRoundToZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFPRoundToZero",
          "package": "OpenCLRaw",
          "partial": "FPRound To Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFPRoundToZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFloat",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clFloat",
          "package": "OpenCLRaw",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clHalfFloat",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clHalfFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clHalfFloat",
          "package": "OpenCLRaw",
          "partial": "Half Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clHalfFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageDepth",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageDepth",
          "package": "OpenCLRaw",
          "partial": "Image Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageElementSize",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageElementSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageElementSize",
          "package": "OpenCLRaw",
          "partial": "Image Element Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageElementSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageFormat",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageFormat",
          "package": "OpenCLRaw",
          "partial": "Image Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageHeight",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageHeight",
          "package": "OpenCLRaw",
          "partial": "Image Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageRowPitch",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageRowPitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageRowPitch",
          "package": "OpenCLRaw",
          "partial": "Image Row Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageRowPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageSlicePitch",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageSlicePitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageSlicePitch",
          "package": "OpenCLRaw",
          "partial": "Image Slice Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageSlicePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageWidth",
          "package": "OpenCLRaw",
          "signature": "ImageInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clImageWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clImageWidth",
          "package": "OpenCLRaw",
          "partial": "Image Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clImageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clIntensity",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clIntensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clIntensity",
          "package": "OpenCLRaw",
          "partial": "Intensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelCompileWorkGroupSize",
          "package": "OpenCLRaw",
          "signature": "KernelWorkGroupInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelCompileWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelCompileWorkGroupSize",
          "package": "OpenCLRaw",
          "partial": "Kernel Compile Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelCompileWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelContext",
          "package": "OpenCLRaw",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelContext",
          "package": "OpenCLRaw",
          "partial": "Kernel Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelFunctionName",
          "package": "OpenCLRaw",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelFunctionName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelFunctionName",
          "package": "OpenCLRaw",
          "partial": "Kernel Function Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelFunctionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelLocalMemSize",
          "package": "OpenCLRaw",
          "signature": "KernelWorkGroupInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelLocalMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelLocalMemSize",
          "package": "OpenCLRaw",
          "partial": "Kernel Local Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelLocalMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelNumFlags",
          "package": "OpenCLRaw",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelNumFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelNumFlags",
          "package": "OpenCLRaw",
          "partial": "Kernel Num Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelNumFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelProgram",
          "package": "OpenCLRaw",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelProgram",
          "package": "OpenCLRaw",
          "partial": "Kernel Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelReferenceCount",
          "package": "OpenCLRaw",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Kernel Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelWorkGroupSize",
          "package": "OpenCLRaw",
          "signature": "KernelWorkGroupInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clKernelWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clKernelWorkGroupSize",
          "package": "OpenCLRaw",
          "partial": "Kernel Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clKernelWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clLuminance",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clLuminance",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clLuminance",
          "package": "OpenCLRaw",
          "partial": "Luminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clLuminance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMapRead",
          "package": "OpenCLRaw",
          "signature": "MapFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMapRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMapRead",
          "package": "OpenCLRaw",
          "partial": "Map Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMapRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMapWrite",
          "package": "OpenCLRaw",
          "signature": "MapFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMapWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMapWrite",
          "package": "OpenCLRaw",
          "partial": "Map Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMapWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemAllocHostPtr",
          "package": "OpenCLRaw",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemAllocHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemAllocHostPtr",
          "package": "OpenCLRaw",
          "partial": "Mem Alloc Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemAllocHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemContext",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemContext",
          "package": "OpenCLRaw",
          "partial": "Mem Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemCopyHostPtr",
          "package": "OpenCLRaw",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemCopyHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemCopyHostPtr",
          "package": "OpenCLRaw",
          "partial": "Mem Copy Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemCopyHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemFlags",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemFlags",
          "package": "OpenCLRaw",
          "partial": "Mem Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemHostPtr",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemHostPtr",
          "package": "OpenCLRaw",
          "partial": "Mem Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemMapCount",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemMapCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemMapCount",
          "package": "OpenCLRaw",
          "partial": "Mem Map Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemMapCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemObjectBuffer",
          "package": "OpenCLRaw",
          "signature": "MemObjectType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemObjectBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemObjectBuffer",
          "package": "OpenCLRaw",
          "partial": "Mem Object Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemObjectBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemObjectImage2D",
          "package": "OpenCLRaw",
          "signature": "MemObjectType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemObjectImage2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemObjectImage2D",
          "package": "OpenCLRaw",
          "partial": "Mem Object Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemObjectImage2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemObjectImage3D",
          "package": "OpenCLRaw",
          "signature": "MemObjectType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemObjectImage3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemObjectImage3D",
          "package": "OpenCLRaw",
          "partial": "Mem Object Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemObjectImage3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemReadOnly",
          "package": "OpenCLRaw",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemReadOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemReadOnly",
          "package": "OpenCLRaw",
          "partial": "Mem Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemReadWrite",
          "package": "OpenCLRaw",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemReadWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemReadWrite",
          "package": "OpenCLRaw",
          "partial": "Mem Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemReferenceCount",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Mem Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemSize",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemSize",
          "package": "OpenCLRaw",
          "partial": "Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemType",
          "package": "OpenCLRaw",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemType",
          "package": "OpenCLRaw",
          "partial": "Mem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemUseHostPtr",
          "package": "OpenCLRaw",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemUseHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemUseHostPtr",
          "package": "OpenCLRaw",
          "partial": "Mem Use Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemUseHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemWriteOnly",
          "package": "OpenCLRaw",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clMemWriteOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clMemWriteOnly",
          "package": "OpenCLRaw",
          "partial": "Mem Write Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clMemWriteOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformExtensions",
          "package": "OpenCLRaw",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clPlatformExtensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformExtensions",
          "package": "OpenCLRaw",
          "partial": "Platform Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clPlatformExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformName",
          "package": "OpenCLRaw",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clPlatformName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformName",
          "package": "OpenCLRaw",
          "partial": "Platform Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clPlatformName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformProfile",
          "package": "OpenCLRaw",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clPlatformProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformProfile",
          "package": "OpenCLRaw",
          "partial": "Platform Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clPlatformProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformVendor",
          "package": "OpenCLRaw",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clPlatformVendor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformVendor",
          "package": "OpenCLRaw",
          "partial": "Platform Vendor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clPlatformVendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformVersion",
          "package": "OpenCLRaw",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clPlatformVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clPlatformVersion",
          "package": "OpenCLRaw",
          "partial": "Platform Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clPlatformVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandEnd",
          "package": "OpenCLRaw",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProfilingCommandEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandEnd",
          "package": "OpenCLRaw",
          "partial": "Profiling Command End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProfilingCommandEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandQueued",
          "package": "OpenCLRaw",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProfilingCommandQueued",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandQueued",
          "package": "OpenCLRaw",
          "partial": "Profiling Command Queued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProfilingCommandQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandStart",
          "package": "OpenCLRaw",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProfilingCommandStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandStart",
          "package": "OpenCLRaw",
          "partial": "Profiling Command Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProfilingCommandStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandSubmit",
          "package": "OpenCLRaw",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProfilingCommandSubmit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProfilingCommandSubmit",
          "package": "OpenCLRaw",
          "partial": "Profiling Command Submit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProfilingCommandSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBinaries",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramBinaries",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBinaries",
          "package": "OpenCLRaw",
          "partial": "Program Binaries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramBinaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBinarySizes",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramBinarySizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBinarySizes",
          "package": "OpenCLRaw",
          "partial": "Program Binary Sizes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramBinarySizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBuildLog",
          "package": "OpenCLRaw",
          "signature": "ProgramBuildInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramBuildLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBuildLog",
          "package": "OpenCLRaw",
          "partial": "Program Build Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramBuildLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBuildOptions",
          "package": "OpenCLRaw",
          "signature": "ProgramBuildInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramBuildOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBuildOptions",
          "package": "OpenCLRaw",
          "partial": "Program Build Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramBuildOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBuildStatus",
          "package": "OpenCLRaw",
          "signature": "ProgramBuildInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramBuildStatus",
          "package": "OpenCLRaw",
          "partial": "Program Build Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramBuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramContext",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramContext",
          "package": "OpenCLRaw",
          "partial": "Program Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramDevices",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramDevices",
          "package": "OpenCLRaw",
          "partial": "Program Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramNumDevices",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramNumDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramNumDevices",
          "package": "OpenCLRaw",
          "partial": "Program Num Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramNumDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramReferenceCount",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Program Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramSource",
          "package": "OpenCLRaw",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clProgramSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clProgramSource",
          "package": "OpenCLRaw",
          "partial": "Program Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clProgramSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueContext",
          "package": "OpenCLRaw",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clQueueContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueContext",
          "package": "OpenCLRaw",
          "partial": "Queue Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clQueueContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueDevice",
          "package": "OpenCLRaw",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clQueueDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueDevice",
          "package": "OpenCLRaw",
          "partial": "Queue Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clQueueDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueOutOfOrderExecModeEnable",
          "package": "OpenCLRaw",
          "signature": "CommandQueueProperties",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clQueueOutOfOrderExecModeEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueOutOfOrderExecModeEnable",
          "package": "OpenCLRaw",
          "partial": "Queue Out Of Order Exec Mode Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clQueueOutOfOrderExecModeEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueProfilingEnable",
          "package": "OpenCLRaw",
          "signature": "CommandQueueProperties",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clQueueProfilingEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueProfilingEnable",
          "package": "OpenCLRaw",
          "partial": "Queue Profiling Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clQueueProfilingEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueProperties",
          "package": "OpenCLRaw",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueProperties",
          "package": "OpenCLRaw",
          "partial": "Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueReferenceCount",
          "package": "OpenCLRaw",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clQueueReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clQueueReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Queue Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clQueueReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clR",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clR",
          "package": "OpenCLRaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRA",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clRA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRA",
          "package": "OpenCLRaw",
          "partial": "RA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRG",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clRG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRG",
          "package": "OpenCLRaw",
          "partial": "RG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRGB",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRGB",
          "package": "OpenCLRaw",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRGBA",
          "package": "OpenCLRaw",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clRGBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clRGBA",
          "package": "OpenCLRaw",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSNormInt16",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSNormInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSNormInt16",
          "package": "OpenCLRaw",
          "partial": "SNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSNormInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSNormInt8",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSNormInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSNormInt8",
          "package": "OpenCLRaw",
          "partial": "SNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSNormInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerAddressingMode",
          "package": "OpenCLRaw",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSamplerAddressingMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerAddressingMode",
          "package": "OpenCLRaw",
          "partial": "Sampler Addressing Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSamplerAddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerContext",
          "package": "OpenCLRaw",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSamplerContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerContext",
          "package": "OpenCLRaw",
          "partial": "Sampler Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSamplerContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerFilterMode",
          "package": "OpenCLRaw",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSamplerFilterMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerFilterMode",
          "package": "OpenCLRaw",
          "partial": "Sampler Filter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSamplerFilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerNormalizedCoords",
          "package": "OpenCLRaw",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSamplerNormalizedCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerNormalizedCoords",
          "package": "OpenCLRaw",
          "partial": "Sampler Normalized Coords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSamplerNormalizedCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerReferenceCount",
          "package": "OpenCLRaw",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSamplerReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSamplerReferenceCount",
          "package": "OpenCLRaw",
          "partial": "Sampler Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSamplerReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSignedInt16",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSignedInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSignedInt16",
          "package": "OpenCLRaw",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSignedInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSignedInt32",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSignedInt32",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSignedInt32",
          "package": "OpenCLRaw",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSignedInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSignedInt8",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clSignedInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clSignedInt8",
          "package": "OpenCLRaw",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clSignedInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormInt101010",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUNormInt101010",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormInt101010",
          "package": "OpenCLRaw",
          "partial": "UNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUNormInt101010"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormInt16",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUNormInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormInt16",
          "package": "OpenCLRaw",
          "partial": "UNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUNormInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormInt8",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUNormInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormInt8",
          "package": "OpenCLRaw",
          "partial": "UNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUNormInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormShort555",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUNormShort555",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormShort555",
          "package": "OpenCLRaw",
          "partial": "UNorm Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUNormShort555"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormShort565",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUNormShort565",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUNormShort565",
          "package": "OpenCLRaw",
          "partial": "UNorm Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUNormShort565"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUnsignedInt16",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUnsignedInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUnsignedInt16",
          "package": "OpenCLRaw",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUnsignedInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUnsignedInt32",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUnsignedInt32",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUnsignedInt32",
          "package": "OpenCLRaw",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUnsignedInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUnsignedInt8",
          "package": "OpenCLRaw",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Raw-V10-Types.html#clUnsignedInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Raw V10 Types",
          "module": "System.OpenCL.Raw.V10.Types",
          "name": "clUnsignedInt8",
          "package": "OpenCLRaw",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10-Types.html#v:clUnsignedInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe OpenCL system for open heterogenous data parallel supercomputing.\n\u003c/p\u003e\u003cp\u003eWrapper to the FFI written and maintained by Jeff Heard of the Renaissance Computing Institute \u003ca\u003emailto:jeff@renci.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFrom the introduction: \n\u003c/p\u003e\u003cp\u003eOpenCL (Open Computing Language) is an open royalty-free standard for general purpose \n    parallel programming across CPUs, GPUs and other processors, giving software developers \n    portable and efficient access to the power of these heterogeneous processing platforms.   \n\u003c/p\u003e\u003cp\u003eOpenCL supports a wide range of applications, ranging from embedded and consumer software \n    to HPC solutions, through a low-level, high-performance, portable abstraction.  By creating an \n    efficient, close-to-the-metal programming interface, OpenCL will form the foundation layer of a \n    parallel computing ecosystem of platform-independent tools, middleware and applications.  \n    OpenCL is particularly suited to play an increasingly significant role in emerging interactive \n    graphics applications that combine general parallel compute algorithms with graphics rendering \n    pipelines. \n\u003c/p\u003e\u003cp\u003eOpenCL consists of an API for coordinating parallel computation across \n    heterogeneous processors; and a cross-platform programming language with a well- \n    specified computation environment.  The OpenCL standard: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Supports both data- and task-based parallel programming models \n\u003c/li\u003e\u003cli\u003e Utilizes a subset of ISO C99 with extensions for parallelism \n\u003c/li\u003e\u003cli\u003e Defines consistent numerical requirements based on IEEE 754 \n\u003c/li\u003e\u003cli\u003e Defines a configuration profile for handheld and embedded devices \n\u003c/li\u003e\u003cli\u003e Efficiently interoperates with OpenGL, OpenGL ES and other graphics APIs\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e_General Notes on the differences between Haskell and the OpenCL-C implementation_\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Side-effectful procedures capable of returning an error code only return a Maybe ErrorCode, with Nothing returned upon success\n\u003c/li\u003e\u003cli\u003e Procedures which follow the pattern of returning a pointer to an object and taking a final parameter as an error code instead\n      return Either ErrorCode \u003ccode\u003eObjectType\u003c/code\u003e \n\u003c/li\u003e\u003cli\u003e Procedures which prefix with clGetInfo* merely take the object, parameter name, and parameter size to allocate.  The allocation\n      handled by OpenCLRaw and returned as a Haskell-managed \u003ccode\u003eForeignPtr ()\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Enumerations and constants are replaced by newtypes for the sake of type-safety.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Raw.V10",
          "name": "V10",
          "package": "OpenCLRaw",
          "source": "src/System-OpenCL-Raw-V10.html",
          "type": "module"
        },
        "index": {
          "description": "The OpenCL system for open heterogenous data parallel supercomputing Wrapper to the FFI written and maintained by Jeff Heard of the Renaissance Computing Institute mailto jeff@renci.org From the introduction OpenCL Open Computing Language is an open royalty-free standard for general purpose parallel programming across CPUs GPUs and other processors giving software developers portable and efficient access to the power of these heterogeneous processing platforms OpenCL supports wide range of applications ranging from embedded and consumer software to HPC solutions through low-level high-performance portable abstraction By creating an efficient close-to-the-metal programming interface OpenCL will form the foundation layer of parallel computing ecosystem of platform-independent tools middleware and applications OpenCL is particularly suited to play an increasingly significant role in emerging interactive graphics applications that combine general parallel compute algorithms with graphics rendering pipelines OpenCL consists of an API for coordinating parallel computation across heterogeneous processors and cross-platform programming language with well specified computation environment The OpenCL standard Supports both data and task-based parallel programming models Utilizes subset of ISO C99 with extensions for parallelism Defines consistent numerical requirements based on IEEE Defines configuration profile for handheld and embedded devices Efficiently interoperates with OpenGL OpenGL ES and other graphics APIs General Notes on the differences between Haskell and the OpenCL-C implementation Side-effectful procedures capable of returning an error code only return Maybe ErrorCode with Nothing returned upon success Procedures which follow the pattern of returning pointer to an object and taking final parameter as an error code instead return Either ErrorCode ObjectType Procedures which prefix with clGetInfo merely take the object parameter name and parameter size to allocate The allocation handled by OpenCLRaw and returned as Haskell-managed ForeignPtr Enumerations and constants are replaced by newtypes for the sake of type-safety",
          "hierarchy": "System OpenCL Raw V10",
          "module": "System.OpenCL.Raw.V10",
          "name": "V10",
          "package": "OpenCLRaw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLRaw/docs/System-OpenCL-Raw-V10.html#"
      }
    }
  ]
]